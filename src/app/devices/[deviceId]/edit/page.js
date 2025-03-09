import { getDeviceById } from '@/actions/deviceActions';
import PageHeader from '@/components/PageHeader';
import ButtonBack from '@/components/buttons/ButtonBack';
import DeviceEditForm from '@/components/forms/DeviceEditForm';

export default async function DeviceEditPage({ params }) {
  const { deviceId } = params;
  const { data: device } = await getDeviceById(deviceId);

  return (
    <>
      <PageHeader title='Editar Dispositivo'>
        <ButtonBack />
      </PageHeader>
      <div className='mx-auto max-w-5xl'>
        <DeviceEditForm device={device} />
      </div>
    </>
  );
}
