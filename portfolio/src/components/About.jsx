import React from 'react';
import myImg from '../assets/images/perfil-.jpg'
import SectionTitle from './SectionTitle';
 
 const About=()=>{
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 py-10'>
             <div className='w-ful md: w-6/12'>
            <SectionTitle><h2>About Me
                </h2></SectionTitle>
            <p className='text-md text-gray-500 dark:text-gray-300' >
            Frontend web developer. Proactive,
            Curious, with the ability to solve problems or seek
            fferent alternatives. In search of developing new
            ills and abilities
            </p>
        </div>
        <img src={myImg} alt=""  className=' rounded-lg object-cover w-80 h-100'/>

        </div>
       
    )
 }
 export default About;