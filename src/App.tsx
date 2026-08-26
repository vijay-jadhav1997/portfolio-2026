import './App.css'

import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Intro from './components/Intro';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import ScrollToTop from './components/features/ScrollToTop';
import WhatsAppNotification from './components/features/WhatsAppNotification';
import Projects from './components/Projects';
import EmailSuccess from './components/EmailSuccess';
import Footer from './components/Footer';



const App = () => {
  const {pathname} = useLocation()


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user') || 'false')
    let timer: number 

    if(!user){
      localStorage.setItem('user', JSON.stringify(true))
      timer = setTimeout(()=>{
        const a = document.createElement('a')
        a.href = '/Vijay_Jadhav_Software_Developer_Engineer_Resume.pdf'
        a.download = '/Vijay_Jadhav_Software_Developer_Engineer_Resume.pdf'
        a.click()
      }, 15000)
    }

    return ()=> clearTimeout(timer)
  },[])
  
  return (
    <div id='app' className='min-h-screen bg-gradient-to-br from-[#010a1c] via-[#031b34] to-[#051e2f] pt-3 pb-28 px-2 sm:px-0'>
      <Header />
      {
        pathname === '/success'
        ?
        <EmailSuccess />
        :
        (
          <>
            <main className='relative max-w-[1324px] w-[96%] mx-auto flex flex-col xl:flex-row items-center xl:items-start sm:px-2 pt-3 md:px-10 xl:px-4 xl:gap-x-12 gap-y-10'>
              <Intro />
              <div className="w-full">
                <Routes>
                  <Route path='/'  element={<Home />}/>
                  <Route path='/about-me' element={<AboutMe />}/>
                  <Route path='/contact-me' element={<ContactMe />}/>
                  <Route path='/projects' element={<Projects />}/>
                </Routes>
              </div>
            </main>
            <Footer/>
          </>
        )
      }
      {/* <div
        className="sm:w-18 p-1 transition-all duration-300 ease-out bg-pink-400 overflow-hidden fixed left-2 bottom-24 md:bottom-24 md:left-6 xl:left-8 lg:bottom-8"
      >
        <div 
          className={`sm:w-14 sm:h-14 w-12 h-12 bg-blue-400 text-gray-100 overflow-hidden cursor-pointer rounded-full flex justify-center items-center `}
        >
          <FaFacebookMessenger className='text-xl' />
        </div>
      </div> */}
      <ScrollToTop />
      <WhatsAppNotification/>
      <ToastContainer/>
    </div>
  )
}

export default App
