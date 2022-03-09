import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Loginform from './components/Loginform';
import { authentication } from './services/firebase';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showModal, setShowModal] = useState(false);
  

  const openModal = () => {
    setShowModal ((showModal) => !showModal)
  }
  const SignInWithGoogle =() => {
   
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then(() => 
      toast(`Login Successfull`)
    )
    .catch((err) => console.log(err))
    .finally (() => openModal());
    }
    
    
  
  return (
    <div className="bg-[#FAFAFA]">
    <Navbar openModal = {openModal } />
    {showModal ? <Loginform setShowModal = {setShowModal} SignInWithGoogle = {SignInWithGoogle}/> : null}
    
    <Hero openModal={openModal}/>
    <About/>
    <Blog/>
    <Footer />
    <ToastContainer/>
    </div>
  );
}

export default App;
