import React, { Component } from "react";

export default class Achieve extends Component {
  render() {
    const { icon, title, num } = this.props.user;
    console.log(this.props.user);

    return (
      <div className={`md:w-[270px] h-[250px] w-[80%] text-white bg-[#1660cf] p-5`}>
        <div class="uppercase flex flex-col gap-5 p-5 items-center justify-center text-center ">
          <div class="border-2 border-white w-[50px] h-[50px] rounded-full">
            {icon}
          </div>
          <h1 class="text-6xl font-bold">
            {num}
            <span class="font-light text-[40px]">+</span>
          </h1>
          <p class="font-medium text-[14px]">{title}</p>
        </div>
      </div>
    );
  }
}
