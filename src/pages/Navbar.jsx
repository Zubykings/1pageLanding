import { Component } from 'react'


export default class Navbar extends Component {
  render() {
    return (
      <div className='absolute w-[100%] text-white'>
        <header className='flex md:flex-row flex-col gap-5 items-center justify-between p-12'>
            <h1 className='text-2xl font-bold text-[42px]'><span className='font-extrabold text-black'>1</span >PAGE</h1>
            <nav className='hidden md:block'>
                <ul className='flex md:flex-row sm:flex-col gap-5 items-center lg:text-xl text-sm font-[500] text-white'>
                    <li className='nav-link '>
                        <a href="#">Home</a>
                    </li>

                    <li className='nav-link'>
                        <a href="#">Marketing</a>
                    </li>

                    <li className='nav-link'>
                        <a href="#">Advertsing</a>
                    </li>

                    <li className='nav-link'>
                        <a href="#">Insurance</a>
                    </li>

                    <li className='nav-link'>
                        <a href="#">Contact Us</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
      </div>
    )
  }
}
