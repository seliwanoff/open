import { Link } from 'react-router-dom';
import { datasets } from '../utilities/utils';

export default function DatasetsGrid() {
  return (
    <div className='w-full px-6 py-10 font-sans bg-white overflow-x-hidden'>
      <h1 className='text-3xl font-bold mb-10 text-start font-sans'>
        Datasets
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 items-stretch'>
        {datasets.map((d: any) => (
          <Link to={`/details/${d.id}`} key={d.id} className='h-full'>
            <div className='border border-[#3365e3] rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full'>
              <span className='px-3 py-1 text-xs rounded-full bg-purple-100 text-[#3365e3] w-fit mb-3'>
                {d.tag}
              </span>

              <h2 className='text-xl font-semibold mb-2 leading-tight font-sans'>
                {d.title}
              </h2>

              {/* Allow description to grow and fill space */}
              <p className='text-gray-600 text-sm flex-1 mb-4'>{d.desc}</p>

              <div className='space-y-1 text-sm text-gray-700 mt-auto'>
                <p>
                  <strong>Format:</strong> {d.format}
                </p>
                <p>
                  <strong>Size:</strong> {d.size}
                </p>
                <p>
                  <strong>Created:</strong> {d.created}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
