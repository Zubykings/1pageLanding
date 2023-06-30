import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    const { img } = this.props.user;
    return (
      <div className=" shadow-xl md-shadow-none ">
        <img src={img}
        className="w-[300px] overflow-hidden" 
        />
      </div>
    )
  }
}
