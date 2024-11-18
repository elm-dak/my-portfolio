import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Certif from "./Components/Certif/Certif";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    >
       <Navbar/>
       <Intro/>
       <Service/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Certif/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
