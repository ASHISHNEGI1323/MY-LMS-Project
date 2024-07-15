import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "./index.css";
import Card from "./Card";
import Text from "./Text";
import Resources from "./Resources";
import Batch from "./Batch";
import Upcoming from "./Upcoming";
import Current from "./Current";
import Completed from "./Completed";
import Header from "./Header";
import Bgblur from "./Bgblur";
import Modal from "./Modal";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Header />
          <div className="flex mt-5 ">
            <div className="flex-col bg-slate-50 border-slate-300  w-60 h-screen ml-3  shadow-xl">
              <Link to="/Card">
                <div className="text-start text-2xl  text-slate-950 font-semibold  cursor-pointer  hover:bg-sky-950 p-5 hover:text-slate-50">
                  <i className="fa-solid fa-address-book"></i>
                  Module
                </div>
              </Link>

              <Link to="/Batch">
                <div className="text-start text-2xl  text-slate-950 font-semibold  cursor-pointer   hover:bg-sky-950 p-5 hover:text-slate-50">
                  <i className="fa-solid fa-address-book"></i>
                  Batch
                </div>
              </Link>
              <Link to="/Text">
                <div className="text-start text-2xl  text-slate-950 font-semibold  cursor-pointer   hover:bg-sky-950 p-5 hover:text-slate-50">
                  <i className="fa-solid fa-address-book"></i>
                  Text Module
                </div>
              </Link>
              <Link to="/Resources">
                <div className="text-start text-2xl  text-slate-950 font-semibold  cursor-pointer   hover:bg-sky-950 p-5 hover:text-slate-50">
                  <i className="fa-solid fa-address-book"></i>
                  Resources
                </div>
              </Link>
            </div>

            <div className="w-5/6 bg-slate-50 ml-7">
              <Routes>
                <Route path="/Card" element={<Card />}></Route>
                <Route path="/Text" element={<Text />}></Route>
                <Route path="/Batch" element={<Batch />}>
                  <Route path="current" element={<Current />}></Route>
                  <Route path="upcoming" element={<Upcoming />}></Route>
                  <Route path="completed" element={<Completed />}></Route>
                </Route>
                <Route path="/Resources" element={<Resources />}></Route>
              </Routes>
            </div>
          </div>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
