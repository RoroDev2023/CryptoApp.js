import React from 'react'

const Badges1 = () => {
  return (
    <div className="flex justify-between justify-items-center bg-[#26272b] h-12 items-center rounded-lg m-auto max-w-[932px]">
        <span class="bg-red-100 text-red-800 text-base mr-2 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300 font-bold ml-12">#</span>
        <span class="bg-green-100 text-green-800 text-base mr-2 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300 font-bold">Coin</span>
        <span class="bg-yellow-100 text-yellow-800 text-base mr-2 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 font-bold">Price</span>
        <span class="bg-indigo-100 text-indigo-800 text-base mr-2 px-2 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 font-bold">24h</span>
        <span class="bg-purple-100 text-purple-800 text-base mr-2 px-2 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 font-bold">Volume</span>
        <span class="bg-pink-100 text-pink-800 text-base px-2 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300 font-bold mr-20">Mkt Cap</span>
    </div>
  )
}

export default Badges1