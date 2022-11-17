import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

import Gritty from '../Images/Logo.svg';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Blog'
    },
    {
      id:4,
      link:'FAQ'
    },
    {
      id:5,
      link:'Contact'
    }
  ]

  return (
    <div className="flex justify-between m-8 ml-24 mr-24">
      <div className="">
        <img src={Gritty} alt="Gritty Logo"/>
      </div>


        <div className="">
          <ul className=" mt-4 hidden lg:flex">
            { Links.map(({ id, link}) => (
              <li
                key={id}
                className ="text-lg font-bold mb-6 leading-6 px-8 cursor-pointer hover:scale-105 duration 200"
                  >
                    {link}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="2">
                <button className=" hidden lg:flex border rounded-md px-8 py-4">
                  Log in
                </button>
              </div>

              <div className="">
                <button className="hidden lg:flex border text-white bg-slate-800 rounded-md px-8 py-4">
                  Sign Up
                </button>
              </div>


              <div
                onClick={() => setNav(!nav)}
                className="m-4 cursor-pointer pr-4 z-10 text-black lg:hidden"
                >
                {nav ? <FaTimes size={20} /> : <FaBars size={20}/>}
              </div>

              {nav && (

                <ul className="flex flex-col justify-center items-center absolute top-4 border right-4 w-1/2 h-1/2 bg-white text-black lg:hidden">
                  { Links.map(({ id, link}) => (
                    <li
                      key={id}
                      className ="text-lg mb-6 font-bold leading-6 px-8 cursor-pointer hover:scale-105 duration 200"
                        >
                          {link}
                          </li>
                        ))}
                        <li>
                          <button className="border rounded-md px-8 py-4">
                            Log in
                          </button>
                        </li>
                        <li>
                          <button className="border text-white bg-slate-800 rounded-md px-8 py-4 mt-8">
                            Sign Up
                          </button>
                        </li>
                      </ul>
              )}
        </div>
  );
}

export default NavBar;
