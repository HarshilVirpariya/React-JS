import './App.css';
import Uipage from './Uipage';
import Img from './Bg.jpg';
import Counter from './Counter';

function App() {
  return (
    <>
      <Uipage/>
      <Counter frame={Img} />
    </>
  );
}

export default App;
