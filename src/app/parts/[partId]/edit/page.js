import { getPartById } from '@/actions/partsActions';
import ButtonBack from '@/components/buttons/ButtonBack';
import PartEditForm from '@/components/forms/PartEditForm';
import PageHeader from '@/components/PageHeader';

export default async function PartEditPage({ params }) {
  const { partId } = await params;
  const { data: part } = await getPartById(partId);

  return (
    <>
      <PageHeader title='Editar Pieza'>
        <ButtonBack />
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <PartEditForm part={part} />
      </div>
    </>
  );
}
