import React from 'react'
import Navbar from './Navbar'
import chatGptIcon from '../images/ChatGPT.svg'
import { Link } from 'react-router-dom'
import Logo from '../images/AB.png'

const Navigation = () => {
  return (
      <nav class="bg-[#111827] sticky top-0 border-b-4 rounded-b-md">
        <div className="flex flex-wrap items-center justify-between mx-auto p-1 ml-48">
            <Link to='/' class='flex items-center'>
              <img className="h-14 w-14 rounded-none mt-2 mb-2" src={Logo} />
              <p className="text-3xl font-extrabold">CrypTech™</p>
            </Link>
          <div class="flex justify-end ml-auto md:w-auto items-center mr-24" id="navbar-default">
          
            <ul class=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 items-center text-white">
              <Link to='/tools'>
                <button type="button" class="flex flex-row text-black bg-[#00A67E]  focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center items-center dark:hover:bg-gray-200">
                    <img className="w-7" src={chatGptIcon}/>
                    Utilize our AI tools
                </button>
              </Link>
              <li>
                <Link to='/' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
              </li>
              <li>
                <Link to='/about'class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link to='/projects' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other Projects</Link>
              </li>
              <li>
                <Link to='/contact' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default Navigation

