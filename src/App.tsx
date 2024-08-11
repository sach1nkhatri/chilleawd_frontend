import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Content from './components/Content';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
      return (
          <div className="App">
                <Header />
                <HeroSection />
                <AboutUs />
                <Services />
                <Content />
                <ContactUs />
                <Footer />
          </div>
      );
}

export default App;
