import '../Home/homePage.css';
import AppBar from '../../Pages/AppBar/appBar';
import Quadrante01 from '../../Pages/quadrante01/quadrante01';
import Quadrante02 from '../../Pages/quadrante02/quadrante02';
import Quadrante03 from '../../Pages/quadrante3/quadrante3';
import Quadrante04 from '../../Pages/quadrante04/quadrante04';
import Quadrante05 from '../../Pages/quadrante05/quadrante05';
import Quadrante06 from '../../Pages/quadrante06/quadrante06';
import Footer from '../../Pages/footer/footer';

function Home() {
    return (
        <div className='quadrantesPages'>
            <AppBar />
            <div id="quadrante01" className="quadrante"><Quadrante01 /></div>
            <div id="quadrante02" className="quadrante"><Quadrante02 /></div>
            <div id="quadrante03" className="quadrante"><Quadrante03 /></div>
            <div id="quadrante04" className="quadrante"><Quadrante04 /></div>
            <div id="quadrante05" className="quadrante"><Quadrante05 /></div>
            <div id="quadrante06" className="quadrante"><Quadrante06 /></div>
            <div id="footer" className="footer"><Footer /></div>
           




        </div>
    );
}

export default Home;
