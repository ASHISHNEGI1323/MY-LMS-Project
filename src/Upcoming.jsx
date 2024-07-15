import React from 'react'

function Upcoming() {
  const Data_Array = [
    
    {
      batch: " 10am/FS/Nitin/4-mar",
      Course: "MERN STACK",
      Teacher: "Ashish negi",
      date: "2024-03-04 To 2024-05-11",
      Time: "10:00 AM - 12:00 PM",
    },
    
  
    {
      batch: "Forntend/Nitin/23-sep",
      Course: "MERN STACK",
      Teacher: "Ashish negi",
      date: "2023-09-23 To 2023-12-31",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      batch: "Forntend/Nitin/23-sep",
      Course: "MERN STACK",
      Teacher: "Ashish negi",
      date: "2023-09-23 To 2023-12-31",
      Time: "10:00 AM - 12:00 PM",
    },
  ];

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {Data_Array.map((D_Val) => {
          return (
            <div className=" border-solid border-2  shadow-2xl rounded-lg bg-blue-900 mt-7  size-96 max-h-72 ">
              <div className=" border-solid  border-2  shadow-2xl rounded-lg px-10 bg-indigo-50  size-96  max-h-72">
                <h1 className="text-xl text-blue-900 font-extrabold mb-4">
                  {D_Val.batch}
                  <i className="fa-solid fa-user-graduate pl-4"></i>
                  <i className="fa-solid fa-2 pl-2 "></i>
                </h1>
                <h2 className="font-extrabold  mb-3">
                  <i className="fa-solid fa-graduation-cap"></i>
                  {D_Val.Course}
                </h2>
                <h3 className="font-extrabold   mb-3">
                  <i className="fa-solid fa-user"></i>
                  {D_Val.Teacher}
                </h3>
                <h3 className="font-extrabold  mb-3">
                  <i className="fa-solid fa-calendar-days"></i>
                  {D_Val.date}
                </h3>
                <h3 className="font-extrabold  mb-3">
                  <i className="fa-solid fa-business-time"></i>
                  {D_Val.Time}
                </h3>

                <h1 className=" mb-3 ">
                  -----------------------------------------------
                </h1>

                <button className=" flex font-bold border-solid border-2 border-blue-900 shadow-2xl  rounded-lg px-10 py-2 bg-blue-900 text-white">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Upcoming