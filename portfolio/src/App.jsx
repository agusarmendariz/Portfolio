import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer'


function App() {
  const[theme, setTheme] = useState(null);
  useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);
  const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

  useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

  

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
      <Contact/>
      <About/>
      <Footer/>
     
      </div>
      </div>
      </>
  )
}

export default App
