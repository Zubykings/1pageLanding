import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="relative h-[30vh] w-full bg-[#1660cf] text-white overflow-hidden">
        <div className="flex flex-row gap-3 w-[80%] lg:w-[55%] justify-center px-5 m-auto absolute inset-x-0 pt-2 lg:bottom-[-70px] h-[100%] bottom-0">
          <img
            className="lg:w-[200px] w-[150px] h-[100px]  lg:h-[150px] rounded-ss-[60px] object-cover border-4 border-gray-500/50 shadow-2xl"
            src="https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
            alt=""
          />

          <div className="flex flex-col gap-1 text-start leading-tight">
            <h3 className="font-bold text-xl hover:underline w-40">
              Zuby Kings
            </h3>
            <p className="font-medium text-sm lg:text-md">
              Front-End Developer
            </p>
            <p className=" text-[10px] lg:text-[12px] md:w[100px] lg:w-[200px] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              ipsam vero quaerat.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
