import { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [changeLoc, setChangeLoc] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(1);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative">
      <div className="mt-6 px-6 max-w-lg bg-white rounded-lg shadow-lg">
        <div className=" flex items-center justify-between">
        <title>Search</title>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex justify-between bg-white px-10 pb-5 pt-5">
          
          </div>
        </div>
        
        <div className="mt-20 flex items-center justify-between rounded-2xl bg-white p-4 py-8 shadow-xl">
          <div
            className={`flex h-32 justify-between ${
              changeLoc ? "flex-col" : "flex-col-reverse"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-green-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="h-5 w-5 -rotate-45"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className="flex  flex-col">
                <span className="text-2xl font-bold text-[#9a7fde]">
                  Location1
                </span>
                <span className="text-sm font-bold text-gray-400">date</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex w-9 justify-center rounded-full bg-[#9a7fde] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 384 512"
                  fill="#fff"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
              </div>
              <div className="flex flex-col ">
                <span className="text-2xl  font-bold text-[#9a7fde]">
                  Location2
                </span>
                <span className="text-sm font-bold text-gray-400">date</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer mr-5 rounded-full bg-[#b08fe6] p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="h-8 w-8"
              onClick={() => setChangeLoc(!changeLoc)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8 flex flex-col rounded-2xl bg-white p-4 py-8 shadow-xl">
          <div className="flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-500" />
                <div className="flex flex-col">
                  
                  
                  <span className="text-sm font-bold text-gray-400">
                    
                    PASSENGER
                  </span>
                  <div className="flex items-center space-x-2">
                    
                    <span
                    
                      onClick={() => number > 1 && setNumber(number - 1)}
                      className="cursor-pointer flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white"
                    >
                      
                    </span>
                    <span>{number}</span>
                    <span
                      onClick={() => setNumber(number + 1)}
                      className="cursor-pointer flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
              <div className="mr-5 font-bold">
                <span className="block text-gray-400">TYPE</span>
                <span className="text-2xl">TYPE</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 justify-center rounded-full bg-[#9a7fde] p-2"></div>
              <div className="flex flex-col ">
                <span className="text-sm font-bold text-gray-400">DEPART</span>
                <span className="text-xl font-bold text-[#9a7fde]">
                   24 July 2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-12 flex justify-center">
          <button className="rounded-full bg-[#b08fe6] px-20 py-5 text-2xl font-bold text-white shadow-xl">
            <Link href="/buy">SEARCH</Link>
          </button>
          
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 pb-10 pt-5">


        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 576 512"
            fill="white"
            className="h-12 cursor-pointer "
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </Link>
        <Link href="/" >
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="h-12 cursor-pointer -rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                </Link>

     

      </div>
    </div>
  );
}
