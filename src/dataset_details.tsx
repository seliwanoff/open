import { useParams } from 'react-router-dom';
import { Download } from 'lucide-react';
import { datasets } from './utilities/utils';

export default function DatasetPage() {
  const { id } = useParams();
  const dataset = datasets.find((d) => d.id === Number(id));

  if (!dataset) return <h1 className='p-10 text-2xl'>Dataset not found</h1>;

  return (
    <div className='w-full bg-white p-8'>
      {/* Header */}
      <header className='mb-10'>
        <h1 className='text-8xl font-extrabold text-gray-900 leading-tight font-sans'>
          {dataset.title}
        </h1>
      </header>

      {/* Metadata */}
      <div className='flex flex-wrap items-center gap-6 text-gray-700 text-sm mb-10'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>Release Date:</span> {dataset.created}
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>Format:</span> {dataset.format}
        </div>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>Size:</span> {dataset.size}
        </div>
      </div>

      <hr className='border-gray-300 mb-10' />

      {/* Download */}
      <div className='flex items-center gap-4'>
        <a
          href={dataset.link}
          type='button'
          target='_blank'
          className='px-6 py-3 text-lg rounded-xl shadow bg-[#3365e3] hover:bg-[#3365e3] text-white flex items-center gap-2'
        >
          <Download className='w-5 h-5' /> Download
        </a>
      </div>

      <h2 className='text-5xl text-gray-900 my-10 font-bold font-sans'>
        Description
      </h2>

      <p className='text-base text-gray-800'>{dataset.desc}</p>
    </div>
  );
}
