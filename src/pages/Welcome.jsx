import React, { Component } from 'react'
import Button from '../component/Button'

export default class Welcome extends Component {
  render() {
    return (
      <div className='flex flex-row items-center justify-center'>
        <div className='text-center flex flex-col w-[70%] py-12 gap-5 '>
        <div class="under-line">
            <h1 className='md:text-2xl text-md font-bold text-[#1660cf] pb-2 '>
                Welcome To Our Website
            </h1>
        </div>

        <p className='md:text-md text-sm leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod earum temporibus sunt harum facilis adipisci nesciunt, consequuntur saepe vel molestias, fugit odio fuga tempore fugiat aliquam sed natus repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro perspiciatis veniam reiciendis sunt nobis ratione aut nemo esse ipsum, quibusdam, asperiores quos ipsam rerum maiores officiis quo aliquid? Laudantium, itaque.</p>

        <Button 
        text= 'Read More'
        color= 'white'
        tColor = "[#1660cf]"
        style = 'welcome'
        />
      </div>
      </div>
    )
  }
}
