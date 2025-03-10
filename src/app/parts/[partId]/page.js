import { getPartById } from '@/actions/partsActions';
import ButtonBack from '@/components/buttons/ButtonBack';
import LinkButton from '@/components/buttons/LinkButton';
import DetailList from '@/components/detail/PartDetail';
import PageHeader from '@/components/PageHeader';
import { IconEdit } from '@tabler/icons-react';

export default async function PartDetailPage({ params }) {
  const { partId } = await params;
  const { data: part } = await getPartById(partId);

  return (
    <>
      <PageHeader title='Detalle de la Pieza'>
        <ButtonBack />
        <LinkButton
          href={`/parts/${partId}/edit`}
          className='ml-2 flex items-center gap-2'
        >
          <IconEdit className='size-5' />
          Editar
        </LinkButton>
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <DetailList part={part} />
      </div>
    </>
  );
}
