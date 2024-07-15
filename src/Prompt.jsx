import React from 'react'

function Prompt() {
  return (
    <div
      className=" absolute w-1/3 opacity-100 bg-white right-3 top-12  z-20 border border-gray-200 shadow-lg rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <div className=" text-center "></div>
      <div className="border border-gray-300 rounded-lg">
        <ul className=" list-none text-center px-2 py-11">
          <li className="text-2xl font-bold text-blue-950">Ashish negi</li>
          <li className="text-sm text-gray-500">negi16111@gmail.com</li>
          <li className="text-sm text-gray-500">8006133424</li>
        </ul>
      </div>
      <div className=" border border-gray-300 rounded-md px-1 py-3 mt-1">
        <i class="fa-regular fa-comments text-green-700 "></i>Chat Support
        <i class="fa-solid fa-chevron-right pl-80"></i>
      </div>
      <div className=" border border-gray-300 rounded-md px-1 py-3 mt-1">
        <i class="fa-solid fa-circle-question text-blue-500"></i> Help Desk
        <i class="fa-solid fa-chevron-right pl-96"></i>
      </div>
      <div className=" border  border-gray-300 rounded-md px-1 py-3 mt-1">
        <i class="fa-solid fa-right-from-bracket"></i>Logout
        <i class="fa-solid fa-chevron-right pl-96 "></i>
      </div>
    </div>
  );
}

export default Prompt