import React from 'react'
import { Link, Outlet} from 'react-router-dom';

function Batch() {
  return (
    <div className=" pl-7">
      <div className="  pl-5 border-2 border-slate-300 shadow-2xl   rounded-full  w-64 h-9 mb-8">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className=" pl-2 border-none outline-none bg-inherit"
          type="text"
          placeholder=" Search Here....  "
        ></input>
      </div>

      <div className=" flex gap-9   ">
        <Link to="current">
          <button className=" flex font-bold border-solid border-2 border-blue-900 shadow-2xl   rounded-lg px-10 py-2 hover:bg-indigo-800 hover:text-white">
            <i className="fa-solid fa-book-open-reader"></i>
            Current
          </button>
        </Link>
        &nbsp;
        <Link to="upcoming">
          <button className=" flex  font-bold border-solid border-2 border-blue-900  shadow-2xl  rounded-lg px-10 py-2 hover:bg-indigo-800 hover:text-white">
            <i className="fa-solid fa-laptop-file"></i>
            Upcoming
          </button>
        </Link>
        &nbsp;
        <Link to="completed">
          <button className=" flex  font-bold  border-solid border-2 border-blue-900  shadow-2xl rounded-lg  px-10 py-2 hover:bg-indigo-800 hover:text-white">
            <i className="fa-solid fa-person-chalkboard"></i>
            Completed
          </button>
        </Link>
        &nbsp;
      </div>
      <Outlet />
    </div>
  );
}

export default Batch