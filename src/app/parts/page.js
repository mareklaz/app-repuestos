import { getParts } from '@/actions/partsActions';
import LinkButton from '@/components/buttons/LinkButton';
import PageHeader from '@/components/PageHeader';
import PartTable from '@/components/table/PartTable';
import { IconPlus } from '@tabler/icons-react';

export default async function PartsPage() {
  const { data: parts } = await getParts();

  return (
    <div>
      <PageHeader title='Piezas'>
        <LinkButton href='/parts/create' className='flex items-center gap-2'>
          <IconPlus className='size-5 text-white' />
          Crear Pieza
        </LinkButton>
      </PageHeader>
      <PartTable parts={parts} />
    </div>
  );
}
