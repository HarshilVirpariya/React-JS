import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './components/page-1/Home/Home';
import Shop from './components/page-2/Shop/Shop';
import About from './components/page-3/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
