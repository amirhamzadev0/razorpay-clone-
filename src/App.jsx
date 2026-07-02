import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
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
    </div>
  );
}

export default App;