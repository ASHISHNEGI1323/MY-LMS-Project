import React from "react";

function Card() {

  const Data_array = [
    {
      batch: "Core Python",
      Duration: "Duration",
      days: "45 days",
      tgg: "Total Topic",
      topi: "29",
      fee: "fees",
      rupee: "11800",
    },
    {
      batch: "CCNA Networking",
      Duration: "Duration",
      days: "45 days",
      tgg: "Total Topic",
      topi: "15",
      fee: "fees",
      rupee: "25000",
    },
    {
      batch: "Cyber Security",
      Duration: "Duration",
      days: "60 days",
      tgg: "Total Topic",
      topi: "11",
      fee: "Fees",
      rupee: "60000",
    },
    {
      batch: "Tableau",
      Duration: "Duration",
      days: "45 days",
      tgg: "Total Topic",
      topi: "16",
      fee: "fee",
      rupee: "14160",
    },
    {
      batch: "PowerBI",
      Duration: "Duration",
      days: "30 days",
      tgg: "Total Topic",
      topi: "11",
      fee: "fee",
      rupee: "14160",
    },
    {
      batch: "Python for Data analysis",
      Duration: "Duration",
      days: "60 days",
      tgg: "Total Topic",
      topi: "23",
      fee: "fee",
      rupee: "30000",
    },
    {
      batch: "HTML",
      Duration: "Duration",
      days: "5 days",
      tgg: "Total Topic",
      topi: "8",
      fee: "fee",
      rupee: "5000",
    },
    {
      batch: "CSS",
      Duration: "Duration",
      days: "30 days",
      tgg: "Total Topic",
      topi: "25",
      fee: "fee",
      rupee: "7000",
    },
    {
      batch: "Machine Learning basic ",
      Duration: "Duration",
      days: "45 days",
      tgg: "Total Topic",
      topi: "12",
      fee: "fee",
      rupee: "17700",
    },
  ];

  return (
    <>
      <div className="  pl-2 border-2 border-slate-300 shadow-2xl   rounded-full  w-96  h-9 mb-8 ml-9 mt-6">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className=" pl-2 border-none outline-none bg-inherit"
          type="text"
          placeholder=" Search Module Here....  "
        ></input>{" "}
      </div>

      <div className="flex gap-5 flex-wrap">
        {Data_array.map((D_Val) => {
          return (
            <div className="border-solid border-2 max-w-96  shadow-2xl rounded-lg back bg-indigo-950 ml-3 ">
              <div className="border-solid border-2 h-40 max-w-96 rounded-lg bg-white  mb-1">
                <h2 className="text-blue-900 font-extrabold   pl-4 m-3 pb-6">
                  {D_Val.batch}
                  <i className="fa-solid fa-pencil float-right pr-6 pt-3"></i>
                </h2>

                <div className=" flex">
                  <div className="border-solid border-2 w-28  rounded-lg mt-2 bg-green-800 ml-3 ">
                    <div className="mb-1  border-solid border w-28 rounded-lg back bg-white">
                      <h2 className=" font-medium text-gray-600 ">
                        {D_Val.Duration}
                      </h2>
                      <h2 className=" font-bold shadow-2xl ">{D_Val.days}</h2>
                    </div>
                  </div>

                  <div className="border-solid   shadow-2xl border-2 w-28  rounded-lg mt-2 bg-green-800 ml-3 ">
                    <div
                      className="  border-solid border w-28 rounded-lg back bg-white
                  pl-5"
                    >
                      <h2 className=" font-medium text-gray-600">
                        {D_Val.tgg}
                      </h2>
                      <h2 className=" font-bold">{D_Val.topi}</h2>
                    </div>
                  </div>

                  <div className="border-solid   shadow-2xl border-2 w-28  rounded-lg mt-2 bg-green-800  ml-3 mr-16 ">
                    <div
                      className="  border-solid border w-28 rounded-lg back bg-white
                  pl-5"
                    >
                      <h2 className=" font-medium text-gray-600">
                        {D_Val.fee}
                      </h2>
                      <h2 className=" font-bold">{D_Val.rupee}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Card;
