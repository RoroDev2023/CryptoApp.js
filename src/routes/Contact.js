import React from 'react'
import waveIcon from '../images/Wave.png'

const Contact = () => {
  return (
      <>
    <div class="flex justify-center flex-col items-center m-auto max-w-screen-lg">
        <div class="flex justify-center mt-20 max-w-screen-xl">
            <h1 class="flex text-black align-items-center text-8xl font-semibold">Hey, I'm Rahim</h1>
            <p class="flex h-28 w-28 rounded-none text-8xl align-center">👋🏻</p>
        </div>
        <p class="flex justify-center text-[#767676] text-xl mt-8 items-center text-center">A student at Illinois Institute of Technology majoring in Computer Science and Minoring in Financial Economics. As an up and coming tech adversary I have deep interest in AI, Machine Learning, Automation, Software Engineering, Product Design and Business.</p>
    </div>
        
        <section class="bg-white dark:bg-gray-900 mt-32 bg-[url('https://wallpaperaccess.com/full/505837.jpg')] bg-cover">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Hit Me Up 👇🏻</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" class="space-y-8 bg-[#111827] p-8 rounded-2xl">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white ">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="bg-[#1e90ff] py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    
    </>
  )
}

export default Contact