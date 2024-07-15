import React from 'react'

function Resources() {
  return (
    <div>
      <div className=" flex font-bold  border-blue-900 shadow-2xl  rounded-lg px-10 py-2 gap-x-96  text-center mt-1 ">
        All Resources
        <button className=" flex font-bold border-solid border-2 border-blue-900 shadow-2xl  float-right  rounded-lg px-10 py-2 ">
          Add Resources
        </button>
      </div>

      <div className=" text-center  py-32">
        <i className="fa-solid fa-book"></i> No Resource Avalabile
      </div>
    </div>
  );
}

export default Resources