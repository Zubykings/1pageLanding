import React, { Component } from "react";
import Button from "./Button";

export default class Cards extends Component {
  render() {
    const { icon, title, description,id, color} = this.props.user;
// console.log(this.props.user);
    // console.log(icon);
    return (
      <div className={` md:h-[350px] bg-${color} w-[90%] md:w-[33.5%] h-[300px] `}>
        <div className="text-white flex flex-col gap-5  text-center items-center justify-center md:py-5 md:px-4  p-3">
        <div className="border-2 rounded-full md:h-[50px] md:w-[50px] h-[40px] w-[40px]">
          {icon}
        </div>
        <h2 className="md:text-3xl lg:text-2xl font-bold text-md ">
          {title}
        </h2>
        <p className="text-sm">
          {description}
        </p>
      </div>
      </div>
    );
  }
}


