import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'
import heroImg from "./assets/heroImg.jpg";
import heroShape from "./assets/hero-shape.svg";
import pakflag from "./assets/pakflag.png";

function App() {
  return (
    <div>
      <nav class="bg-deepBlue">
      <div class="relative w-[1080px] mx-auto flex items-center justify-between" >
        {/*logo  */}
        <a hre="/" class="cursor-pointer py-7 pr-7">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png" alt="logo"  width={"125px"} height={"30px"}/>
        </a>
        {/* list */}
        <ul class="flex space-x-6">
          <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Payments</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>


           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Banking</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>


           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Corporate card</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>

           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Corporate card</a>
            
           </li>


           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Payroll</a>
            
           </li>


           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Resorces</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>

           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Support</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>


           <li class="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group">
            <a href='#'>Pricing</a>
            <div class="absolute bottom-0 hidden group-hover:block transition-all duration-200 w-full h-1 bg-lightBlue"></div>
           </li>
          
        </ul>


        <div class="flex space-x-6">
          <img src={pakflag} alt="pakistan" width={"35px"} height={"20px"} />
          <button class="py-3 px-5 font-mullish text-white  text-sm font-bold border  rounded-sm">Log In</button>
          <button class="py-3 px-4 font-mullish text-sm text-lightBlue300  font-bold bg-white
          border  rounded-sm transition-all duration-200 hover:text-lightBlue500">Signup</button>
        </div>
      </div>
      </nav> 
      {/* hero section */}
      <section
      class="relative bg-deepBlue ">
        <div class="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto   ">
          {/* right part */}
          <div class=" space-y-8">
            <h1 class="font-mullish font-bold text-[40px] leading-[1.2] text-white">Power your finance,
              grow your business</h1>
            <div class="w-6 h-1 bg-lightBlue"></div>
            <p class="font-mullish text-[18px] leading-7 text-white opacity-50 "> Accept pyments from customers. Automate
               payouts to vendores &
              employees. Never runout
               of working capital.
            </p>
            <button class="bg-lightBlue text-white rounded-md font-mullish
             font-bold hover:bg-lightBlue500
             transition-all duration-200 py-[14px] px-[18px] ">Sign Up Now </button>
          </div>
          {/* left part */}
          <div>
            <img class="w-full max-w-[680px]" src={heroImg} alt="hero" width={"500px"} height={"500px"} />
          </div>
         


        </div>
         {/* shape */}
          <div class=" w-full absolute left-0 right-0  "> 
            <img src={heroShape} class="w-full object-fill scale-x-100"></img>
          </div>
      </section>
    </div>
  );
}

export default App;