import { getPartById } from '@/actions/partsActions';
import ButtonBack from '@/components/buttons/ButtonBack';
import DetailList from '@/components/detail/PartDetail';
import PageHeader from '@/components/PageHeader';

export default async function PartDetailPage({ params }) {
  const { partId } = await params;
  const { data: part } = await getPartById(partId);

  return (
    <>
      <PageHeader title='Detalle de la Pieza'>
        <ButtonBack />
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <DetailList part={part} />
      </div>
    </>
  );
}
