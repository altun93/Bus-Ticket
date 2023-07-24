import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="mt-24   h-1/2 w-full max-w-lg px-10 bg-white rounded-lg shadow-lg">
        <div className="flex text-gray-600 mt-10 flex-col items-center text-center text-4xl font-bold ">
          <title>Home</title>
          <span>Buss</span>
          <span>Application</span>
        </div>
        <div className="mt-10">
          <input
            type={"text"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="w-full border-b-2 bg-transparent pb-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <input
            type={"password"}
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Password"
            className="mt-6 w-full border-b-2 bg-transparent pb-1 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <button className="w-full rounded-full bg-purple-500 py-3 text-white font-bold shadow-xl focus:outline-none">
            <Link href="/search">Login</Link>
          </button>
          <span className="mt-3 text-xs font-bold text-gray-800 cursor-pointer">
            Forget Password?
          </span>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <span className="text-xs font-bold text-gray-800">
            Don't have an account?
          </span>
          <button className="mt-2 rounded-full bg-pink-500 px-14 py-2 text-white font-bold shadow-xl focus:outline-none">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
