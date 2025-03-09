import { getDevices } from '@/actions/deviceActions';
import LinkButton from '@/components/buttons/LinkButton';
import PageHeader from '@/components/PageHeader';
import DeviceTable from '@/components/table/DeviceTable';
import { IconPlus } from '@tabler/icons-react';

export default async function DevicesPage() {
  const { data: devices } = await getDevices();

  return (
    <div>
      <PageHeader title='Dispositivos'>
        <LinkButton href='/devices/create' className='flex items-center gap-2'>
          <IconPlus className='size-5 text-white' />
          Crear Dispositivo
        </LinkButton>
      </PageHeader>
      <DeviceTable devices={devices} />
    </div>
  );
}
