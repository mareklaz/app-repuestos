'use client';
import DetailElement from './DetailElement';

export default function DeviceDetail({ device }) {
  return (
    <div className='mt-8 border-t border-gray-100'>
      <dl className='divide-y divide-gray-100'>
        <DetailElement title='Nombre'>{device.name}</DetailElement>
        <DetailElement title='Número de Serie'>{device.sn}</DetailElement>
        <DetailElement title='Modelo'>{device.model}</DetailElement>
        <DetailElement title='Fabricante'>{device.manufacturer}</DetailElement>
        <DetailElement title='Firmware'>{device.firmware || '-'}</DetailElement>
        <DetailElement title='Estado'>{device.status}</DetailElement>
        <DetailElement title='Descripción'>{device.description}</DetailElement>
        {device.warranty && (
          <>
            <DetailElement title='Inicio de Garantía'>
              {device.warranty.start
                ? new Date(device.warranty.start).toLocaleDateString()
                : '-'}
            </DetailElement>
            <DetailElement title='Fin de Garantía'>
              {device.warranty.end
                ? new Date(device.warranty.end).toLocaleDateString()
                : '-'}
            </DetailElement>
            <DetailElement title='Tipo de Garantía'>
              {device.warranty.type || '-'}
            </DetailElement>
          </>
        )}
      </dl>
    </div>
  );
}
