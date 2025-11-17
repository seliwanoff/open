import './index.css';
//import MainHome from './component/mainHome';
import Header from './component/header';
import { Routes, Route } from 'react-router-dom';
import DatasetPage from './dataset_details';
import Home from './home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<DatasetPage />} />
      </Routes>
    </>
  );
}

export default App;
