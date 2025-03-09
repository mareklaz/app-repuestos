import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import connectDB from '@/lib/database';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();

        if (!credentials.email || !credentials.password) {
          throw new Error('Faltan credenciales');
        }

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          console.error('Usuario no encontrado:', credentials.email);
          throw new Error('Usuario o contraseña incorrectos');
        }

        const isValid = await user.comparePassword(credentials.password);

        if (!isValid) {
          console.error('Contraseña incorrecta para:', credentials.email);
          throw new Error('Usuario o contraseña incorrectos');
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
