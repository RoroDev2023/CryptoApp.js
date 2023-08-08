import React from 'react';
import htmlLogo from '../images/HTML5.png';
import cssLogo from '../images/CSS.png';
import javascriptLogo from '../images/JavaScript.png';
import bootstrapLogo from '../images/Bootstrap.png';
import reactLogo from '../images/React.png';
import cppLogo from '../images/C++.png';
import tailwindLogo from '../images/T.avif'
import pythonLogo from '../images/Python.svg'
import javaLogo from '../images/Java.png'
import weatherImage from '../images/weatherImage.jpeg'
import CMVision from '../images/CMVision.jpeg'
import AIAutom from '../images/AIAutom.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaLink } from 'react-icons/fa';



const Projects = () => {
  return (
    <>
      <div className="flex justify-center flex-col mt-16">
        <h1 className="mb-4 font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Discover</span> some of my other projects
        </h1>
        <p className="flex justify-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Ranging from web languages and frameworks like React JS, JavaScript and Tailwind CSS to obejct oriented languages such as Python and C++.
        </p>
      </div>
      
      <div className="flex flex-row items-center m-auto justify-center mt-10 border p-5 space-x-4">
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="flex items-center w-16 h-16 object-cover m-auto rounded-none" src={htmlLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="m-auto w-12 h-16 rounded-none" src={cssLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-14 h-14 object-cover rounded-none m-auto" src={javascriptLogo} alt="Rounded avatar" />
        </div>
        <div className="border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-20 h-20 object-cover" src={bootstrapLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-18 h-16 m-auto rounded-none" src={reactLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-18 h-16 m-auto rounded-none" src={cppLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-20 h-20 m-auto rounded-full" src={tailwindLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-28 h-28  rounded-none" src={pythonLogo} alt="Rounded avatar" />
        </div>
        <div className="flex items-center border w-20 h-20 rounded-full overflow-hidden">
          <img className="w-16 h-16 m-auto rounded-none" src={javaLogo} alt="Rounded avatar" />
        </div>
      </div>

      <div class="flex flex-row justify-center">

      <div class="mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto rounded-xl">
          <img class="h-64 rounded-xl align-center m-auto" src={weatherImage} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather App with React Utilizing API</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>

      <div class="rounded-xl mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto">
          <img class="h-64 rounded-xl align-center m-auto" src={CMVision} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Vision Project with Python</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>

      <div class="rounded-xl mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto">
          <img class="h-64 rounded-xl align-center m-auto" src={AIAutom} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Machine Learing Project With Python</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>
      
      </div>

      <div class="flex flex-row justify-center">

      <div class="mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto rounded-xl">
          <img class="h-64 rounded-xl align-center m-auto" src={weatherImage} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Luxury Car Rental Website. Coming Soon</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>

      <div class="rounded-xl mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto">
          <img class="h-64 rounded-xl align-center m-auto" src={CMVision} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Regression Model with Python. Coming Soon</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>

      <div class="rounded-xl mt-20 flex flex-col justify-center max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 align-center m-auto">
          <img class="h-64 rounded-xl align-center m-auto" src={AIAutom} alt="" />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Machine Learing Project With Python</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div class="flex flex-row justify-center space-x-20">
                <a class="flex flex-row items-center text-lg">Code <span><FaGithub class="w-6 h-6 ml-4"/></span></a>
                <a class="flex flex-row items-center text-lg">Live Demo <span><FaLink class="w-6 h-6 ml-4"/></span></a>
              </div>
          </div>        
      </div>
      
      </div>

    </>
  );
};

export default Projects;
