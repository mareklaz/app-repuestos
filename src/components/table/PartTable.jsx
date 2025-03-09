import Link from 'next/link';

export default function PartTable({ parts }) {
  return (
    <div className='-mx-4 mt-8 sm:-mx-0'>
      <table className='min-w-full divide-y divide-gray-300'>
        <thead>
          <tr>
            <th
              scope='col'
              className='py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0'
            >
              Nº Serie
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'
            >
              Nombre
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'
            >
              Descripcion
            </th>

            <th scope='col' className='relative py-3.5 pr-4 pl-3 sm:pr-0'>
              <span className='sr-only'>Editar</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {parts.map((part) => (
            <tr key={part.id}>
              <td className='py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0'>
                {part.id}
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 sm:table-cell'>
                {part.name}
              </td>
              <td className='hidden px-3 py-4 text-sm whitespace-nowrap text-gray-500 lg:table-cell'>
                {part.description}
              </td>
              <td className='py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0'>
                <Link
                  href={`/parts/${part.id}`}
                  className='text-indigo-600 hover:text-indigo-900'
                >
                  Editar<span className='sr-only'>, {part.name}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
