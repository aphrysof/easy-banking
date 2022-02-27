import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Loginform from './components/Loginform';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClickLogin = () => {

    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className="bg-[#FAFAFA]">
    <Navbar handleClickLogin = {handleClickLogin} />
    <Loginform isOpen = {isOpen} />
    <Hero/>
    <About/>
    <Blog/>
    <Footer />
    </div>
  );
}

export default App;
