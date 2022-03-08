import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Loginform from './components/Loginform';
import { authentication } from './services/firebase';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal ((showModal) => !showModal)
  }
  const SignInWithGoogle =() => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((result)  => 
    console.log(result)
    )
    .catch((err) => console.log(err))
    }
  
  return (
    <div className="bg-[#FAFAFA]">
    <Navbar openModal = {openModal } />
    {showModal ? <Loginform setShowModal = {setShowModal} SignInWithGoogle = {SignInWithGoogle}/> : null}
    <Hero openModal={openModal}/>
    <About/>
    <Blog/>
    <Footer />
    </div>
  );
}

export default App;
