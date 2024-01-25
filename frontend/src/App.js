import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/views/Home';
import Login from './components/views/Login';
import Booking from './components/views/Booking';
import CreateRecord from './components/views/CreateRecord';

function App() {
  return (
    <div className="App">
      <p className='heading'>Welcome to Halal Travel Management</p>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/booking/create' element={<CreateRecord/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
