import React, { Component } from "react";
// import Navbar from "./Navbar";
import Button from "../component/Button";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero relative shadow-2xl h-[70vh] lg:h-[100vh] ">
        <div class="flex flex-row items-center justify-between absolute inset-0 text-white">
          <div class="lg:w-20 w-10 rounded-e-full flex flex-row justify-center bg-[#1660cf] opacity-[0.9] hover:bg-blue-500/100  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </div>

          <div class="flex flex-col items-center w-[50%] gap-5 text-center">
            <h1 className="lg:text-[48px] lg:leading-10 text-2xl md:text-3xl font-bold">
              Game Development
            </h1>
            <p class="leading-4 md:leading-5 text-sm lg:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ullam eius perspiciatis.
            </p>

            <Button text="GET STARTED" tColor="[#1660cf]" color="white" />
          </div>

          <div class="lg:w-20 w-10 rounded-s-full flex flex-row justify-center bg-[#1660cf] opacity-[0.9] hover:bg-blue-500/100  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
