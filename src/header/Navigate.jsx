import React from "react";

export default function Navigate() {
  return (
    <div className="flex items-center container p-2 border-b-2 border-zinc-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-film"
        viewBox="0 0 16 16"
        className="ml-1"
      >
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
      </svg>
      <h1 className="flex text-2xl font-sans ml-1 outline-none">Movie</h1>
      <ul className=" flex">
        <li className="ml-10 rounded text-lg  p-2 outline-none hover:bg-zinc-900">
          <a href="">Home</a>
        </li>
        <li className="ml-10 rounded text-lg  p-2 outline-none hover:bg-zinc-900">
          <a href="">Movies</a>
        </li>
        <li className="ml-10 rounded outline-none text-lg  p-2 hover:bg-zinc-900">
          <a href="">News</a>
        </li>
      </ul>
      <ul className="flex ml-auto">
        <li>
          <a
            className="ml-2 rounded text-lg outline-none p-2 hover:bg-zinc-900"
            href=""
          >
            Login
          </a>
        </li>
        <li>
          <a
            className="ml-2 rounded outline-none text-lg  p-2 hover:bg-zinc-900 mr-2"
            href=""
          >
            SignUp
          </a>
        </li>
      </ul>
    </div>
  );
}
