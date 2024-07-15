import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './components/page-1/Home/Home';
import Shop from './components/page-2/Shop/Shop';
import About from './components/page-3/About/About';
import Latest from './components/page-4/Latest';
import Cart from './components/page-5/Cart';
import Registration from './components/page-6/Registration';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Latest' element={<Latest/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
