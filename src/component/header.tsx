import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='w-full bg-white shadow-sm py-4 px-6 flex items-center  gap-36'>
      {/* Left Logo */}
      <div className='flex items-center space-x-2'>
        <h1 className=' font-semibold text-gray-900 text-5xl'>Open</h1>
      </div>

      {/* Navigation */}
      <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `transition hover:text-black font-sans ${
              isActive ? 'text-[#3365e3] font-bold' : 'text-gray-700'
            }`
          }
        >
          Datasets
        </NavLink>
      </nav>

      {/* Right Controls */}
    </div>
  );
}
