import React from "react";

export default function Navigate() {
  return (
    <div className="flex container items-center p-2 border-b-2 border-zinc-900 m-auto">
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
      <h1 className=" text-2xl font-sans ml-1 outline-none">Movie</h1>
      <div className="hidden md:block">
        <ul className="flex">
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
      </div>
      <div className="md:ml-auto hidden md:block">
        <ul className="flex ">
          <li>
            <a
              className="ml-2 rounded text-lg outline-none p-3 hover:bg-zinc-900"
              href=""
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="ml-2 rounded outline-none text-lg bg-zinc-900  p-3 hover:bg-zinc-900 mr-2"
              href=""
            >
              SignUp
            </a>
          </li>
        </ul>
      </div>
      <button className="md:hidden ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
    </div>
  );
}
