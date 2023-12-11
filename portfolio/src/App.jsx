import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer'




function App() {
  const[theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    }
    return 'light'
  });


  useEffect(() => {
	 if (theme === 'dark'){
    document.querySelector('html').classList.add('dark')
   } else {
    document.querySelector('html').classList.remove('dark')
   }
	}, [theme]);
  const handleThemeSwitch = () => {
		setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
	};



  

  return (
    <>
    <button
    type='button'
    onClick={handleThemeSwitch}
    className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
  
    </button>
    <div className='bg:white dark:bg-slate-700 font-league '>
    <div className="max-w-5xl w-11/12 mx-auto max-h-full">
      <Home/> 
      <Projects/>
      <About/>
      
      <Footer/>
    
     
      </div>
      </div>
      </>
  )
}

export default App
