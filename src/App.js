import './App.css';
import Activities from './Components/Activities';
import Booking from './Components/Booking';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
