
import { Route, Router, Routes, Navigate } from 'react-router-dom';

import './App.css'
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';

function App() {

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to="/" replace />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </div>

  );
  
}

export default App
