import React from 'react'

function Text() {
  return (
    <>
      <div className=" flex gap-9 ml-5 mb-5 mt-6">
        <button className=" flex font-bold border-solid border-2 border-blue-900 shadow-2xl  rounded-lg px-10 py-2">
          All Tests
        </button>
        <button className=" flex  font-bold border-solid border-2 border-blue-900  shadow-2xl  rounded-lg px-10 py-2">
          Create Test{" "}
        </button>
        <button className=" flex  font-bold  border-solid border-2 border-blue-900  shadow-2xl rounded-lg  px-10 py-2">
          Test Result
        </button>
      </div>

      <div className=" flex gap-36  ml-10">
        <div className="border-solid border-2 h-96  w-96 shadow-2xl rounded-lg back bg-indigo-950 mt-11 ">
          <div className="border-solid border-2 h-96 max-w-96 rounded-lg bg-white  mb-1">
            <h2 className="text-grey-600 font-extrabold  text-2xl  pl-4 m-3 pb-6 	">
              Frontend Development
            </h2>
            <div className=" border-b-2 pb-8 pt-6  font-extrabold  text-blue-800 text-xl  ml-5">
              HTML , CSS <i className="fa-solid fa-chevron-down pl-48"></i>
            </div>
            <div className=" border-b-2 pb-8 pt-6 font-extrabold  text-blue-800 text-xl  ml-5">
              Javascript , react.Js{" "}
              <i className="fa-solid fa-chevron-down pl-28"></i>
            </div>
          </div>
        </div>

        <div className="border-solid border-2 h-96 w-96 shadow-2xl rounded-lg back bg-indigo-950 mt-11 ">
          <div className="border-solid border-2 h-96 max-w-96 rounded-lg bg-white  mb-1">
            <h2 className="text-grey-600 font-extrabold  text-2xl  pl-4 m-3 pb-6 items-center 	">
              MERN STACK
            </h2>
            <div className=" border-b-2 pb-8 pt-6  font-extrabold  text-blue-800 text-xl  ml-5">
              Javascript <i className="fa-solid fa-chevron-down pl-48"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text