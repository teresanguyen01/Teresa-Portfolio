import React from 'react';
import Home from './components/Home/home';
import Navbar from './components/NavBar/navbar';
import About from "./components/About/about";
// import Works from "./components/Works/works";
// import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
