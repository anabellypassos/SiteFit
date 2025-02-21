import './App.css';
import AppBar from './Pages/AppBar/appBar';
import Quadrante01 from './Pages/quadrante01/quadrante01';
import  Quadrante02 from './Pages/quadrante02/quadrante02'; 
import Quadrande03 from  './Pages/quadrante3/quadrante3';
import  Quadrante04 from './Pages/quadrante04/quadrante04';
import Quadrante05 from './Pages/quadrante05/quadrante05';
function App() {
  return (
    <div className='quadrantesPages'>
      <AppBar />
      <Quadrante01/>
      <Quadrante02/>
      <Quadrande03/>
      <Quadrante04/>
      <Quadrante05/>
    </div>
  );
}

export default App;
