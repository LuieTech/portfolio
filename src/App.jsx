
import { Route, Router, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';

function App() {

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
  
}

export default App
