import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    const {icon, tag} = this.props.user
    return (
        
      <div class="flex flex-row items-center gap-2 uppercase lg:w-[300px] md:w-[250px] w-[200px] border rounded-s-full rounded-e-lg bg-gray-100 hover:bg-blue-500/20 cursor-pointer pe-2 ">
        <div class="border-2 border-[#1660cf] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full">
            {icon}
        </div>
        <h3 class="font-bold text-sm md:text-md lg:text-lg ">
            {tag}
        </h3>
      </div>
    )
  }
}
