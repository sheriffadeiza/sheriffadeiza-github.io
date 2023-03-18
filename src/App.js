import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Navbar/Intro/Intro";
import './App.css'
import Services from "./components/services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/footer";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    
    <div className="App"
    style={{background : darkMode? 'black': '',
    color : darkMode? 'white'  : ''
  }}
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App; 
  