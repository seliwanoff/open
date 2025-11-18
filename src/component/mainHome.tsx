import { Link } from 'react-router-dom';
import { datasets } from '../utilities/utils';

export default function DatasetsGrid() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className='w-full bg-gradient-to-br from-[#1a2a6c] via-[#3365e3] to-[#64b3f4] text-white py-16 sm:py-20 md:py-28 px-6 sm:px-10  shadow-lg'>
        <div className='max-w-6xl mx-auto flex flex-col items-start gap-6 md:gap-8'>
          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight font-sans'>
            Africa’s Open Language Dataset Hub
          </h1>

          {/* Subtitle */}
          <p className='text-lg sm:text-xl md:text-2xl font-light max-w-3xl leading-relaxed'>
            Local speakers contribute voice and text datasets that strengthen
            their own languages in the digital age.
          </p>

          {/* Supporting line */}
          <p className='text-sm sm:text-base md:text-lg italic opacity-90'>
            Ethical, community-owned, and rooted in Goloka’s grassroots data
            model.
          </p>

          {/* CTA */}
          <a
            href='#datasets'
            className='mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3365e3] rounded-xl text-base sm:text-lg font-semibold shadow hover:bg-gray-100 transition'
          >
            Explore Datasets
          </a>
        </div>
      </section>

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
    </>
  );
}
