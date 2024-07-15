import React,{useState} from 'react'
import './index.css'
import Modal from './Modal';
import download from "./download.png";
function Header() {
  const [toggle, setToggle]=useState(false);
  function Toggle_BG() {
    setToggle(!toggle)
  }
  return (
    <>
      <ul className="w-screen px-10 flex justify-around align-middle gap-5 bg-white shadow-xl">
        <li className=" mr-auto w-28"><img src={download} alt="" /> </li>
        <li className=" p-3 hover:cursor-pointer">
          <i class="fa-regular fa-bell"></i>
        </li>
        <li className=" p-3 hover:cursor-pointer">
          <i class="fa-solid fa-user"></i>
        </li>

        <li className=" p-3 hover:cursor-pointer" onClick={Toggle_BG}>
          Hi,Ashish
          <i class="fa-solid fa-angle-down"></i>{toggle && <Modal ttogle={Toggle_BG} />}
        </li>
      </ul>
    </>
  );
}

export default Header;