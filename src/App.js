import './App.css';
import AppBar from './Pages/AppBar/appBar';
import Quadrante01 from './Pages/quadrante01/quadrante01';
import  Quadrante02 from './Pages/quadrante02/quadrante02'; 
import Quadrande03 from  './Pages/quadrante3/quadrante3';
function App() {
  return (
    <div className='quadrantesPages'>
      <AppBar />
      <Quadrante01/>
      <Quadrante02/>
      <Quadrande03/>
    </div>
  );
}

export default App;
