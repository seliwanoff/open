import { useParams, Link } from 'react-router-dom';
import { Download, Home } from 'lucide-react';
import { datasets } from './utilities/utils';

export default function DatasetPage() {
  const { id } = useParams();
  const dataset = datasets.find((d) => d.id === Number(id));

  if (!dataset) return <h1 className="p-10 text-2xl">Dataset not found</h1>;

  return (
    <div className="w-full bg-white p-6 md:p-8 relative">
      {/* Floating Go Home Button */}
      <Link
        to="/"
        className="fixed top-[80px] left-6 top-18 z-50 flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 shadow-lg hover:bg-gray-800 transition"
      >
        <Home className="w-4 h-4" />
        <span className="">Go Home</span>
      </Link>

      {/* Header */}
      <header className="mb-10 mt-4">
        <h1 className="
          font-extrabold text-gray-900 leading-tight font-sans
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl
        ">
          {dataset.title}
        </h1>
      </header>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-6 text-gray-700 text-sm mb-10">
        <div>
          <span className="font-semibold">Release Date:</span> {dataset.created}
        </div>
        <div>
          <span className="font-semibold">Format:</span> {dataset.format}
        </div>
        <div>
          <span className="font-semibold">Size:</span> {dataset.size}
        </div>
      </div>

      <hr className="border-gray-300 mb-10" />

      {/* Download */}
      <div className="flex items-center gap-4">
        <a
          href={dataset.link}
          target="_blank"
          className="px-6 py-3 text-lg rounded-xl shadow bg-[#3365e3] hover:bg-[#2b56c7] text-white flex items-center gap-2"
        >
          <Download className="w-5 h-5" /> Download
        </a>
      </div>

      <h2 className="text-2xl md:text-4xl text-gray-900 my-10 font-bold font-sans">
        Description
      </h2>

      <p className="text-base text-gray-800">{dataset.desc}</p>
    </div>
  );
}
