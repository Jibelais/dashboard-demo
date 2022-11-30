import "./style.css"
import Analysis from './components/Analysis';
import Menu from './components/Menu'
import Visitors from './components/Visitors';
import Reviews from './components/Reviews'; 
import Rating from './components/Raiting'


function App() {
  return (
    <div className="container">
      <main className='grid-container'>
          <section className = "section grid-menu">
            <Menu/>
          </section>
          <section className="section">
            <Reviews/>
          </section>
          <section className="section">
            <Rating />
          </section>
          <section className="section">
            <Analysis />
          </section>
          <section className="section grid-span">
            <Visitors />
          </section>
      </main>
       
       
    </div>
  );
}

export default App;
