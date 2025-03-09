import { getDeviceById } from '@/actions/deviceActions';
import ButtonBack from '@/components/buttons/ButtonBack';
import LinkButton from '@/components/buttons/LinkButton';
import DeviceDetail from '@/components/detail/DeviceDetail';
import PageHeader from '@/components/PageHeader';
import { IconEdit } from '@tabler/icons-react';

export default async function DeviceDetailPage({ params }) {
  const { deviceId } = params;
  const { data: device } = await getDeviceById(deviceId);

  return (
    <>
      <PageHeader title='Detalle del Dispositivo'>
        <ButtonBack />
        <LinkButton
          href={`/devices/${deviceId}/edit`}
          className='ml-2 flex items-center gap-2'
        >
          <IconEdit className='size-5' />
          Editar
        </LinkButton>
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <DeviceDetail device={device} />
      </div>
    </>
  );
}
