import { Routes, Route } from 'react-router-dom';
import Home from './App';
import DataDetails from './dataset_details';

export default function App() {
  return (
    <div className='p-5'>
      {/* Page Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<DataDetails />} />
      </Routes>
    </div>
  );
}
