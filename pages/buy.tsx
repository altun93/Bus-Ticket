import BuyTicket from "@/components/BuyTicket";
import { useState } from "react";
import Link from "next/link";

export default function Buy() {
  const [changeLoc, setChangeLoc] = useState<boolean>(false);

  const swapLocations = () => {
    setChangeLoc(!changeLoc);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
          <title>Take</title>

          <div className="flex items-center justify-between px-2 sm:px-6 pt-52"></div>
          <div className="bg-white p-8 rounded-md ">
            <div
              className={`mt-12 flex items-center justify-between px-2 sm:px-6 text-xl font-bold text-white`}
            >
              <span  className="text-2xl font-bold text-[#9a7fde]">
                
                {changeLoc ? "Location 2" : "Location 1"}
                
              </span>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="h-6 w-6 rotate-90 cursor-pointer"
                onClick={swapLocations}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
              
              <span className="text-2xl font-bold text-[#9a7fde]">
                {changeLoc ? "Location 1" : "Location 2"}
              </span>
            </div>
            <div className="mt-12 space-y-8 px-2 sm:px-6">
              <BuyTicket
                loc1={changeLoc ? "location2" : "location1"}
                loc2={changeLoc ? "location1" : "location2"}
                price={180}
                time={30}
                departure={15}
              />
              <BuyTicket
                loc1={changeLoc ? "location2" : "location1"}
                loc2={changeLoc ? "location1" : "location2"}
                price={150}
                time={40}
                departure={20}
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between  sm:px-8 mb-5 pb-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 576 512"
                fill="white"
                className="h-12 cursor-pointer"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </Link>

            <Link href="/search" >
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
      </div>
    </div>
  );
}