'use client';
import DetailElement from './DetailElement';

export default function PartDetail({ part }) {
  return (
    <div className='mt-8 border-t border-gray-100'>
      <dl className='divide-y divide-gray-100'>
        <DetailElement title='Nombre'>{part.name}</DetailElement>
        <DetailElement title='Numero de Serie'>{part.sn}</DetailElement>
        <DetailElement title='Descripción'>{part.description}</DetailElement>
      </dl>
    </div>
  );
}
