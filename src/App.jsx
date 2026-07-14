import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import feather from 'feather-icons';
import heroImg from "./assets/heroImg.jpg";
import heroShape from "./assets/hero-shape.svg";
import pakflag from "./assets/pakflag.png";
import dotted from "./assets/dotted.png"
import payment from "./assets/paymentGateway.png"
import plink from "./assets/payment-link-icon.svg"
import xflam1 from "./assets/x-flame-1.png";
import xflam2 from "./assets/x-flame-2.png";
import razorpayX from "./assets/razorpayX.svg";
import buisnessbanking from "./assets/buisness-banking.png";
import fsection2bg from "./assets/feature-section-2BG.svg";
import razorpayXicon from "./assets/razorpayXicon.svg";
import instantsettlementbg from "./assets/instant-settlement-bg.svg";
import instantsettlementbghover from "./assets/instant-settlement-bghover.svg";
import instantactivationicon from "./assets/instant-activation-icon.svg";
import corefeaturessectionBg from "./assets/core-features-sectionBg.svg";
import comanies from "./assets/comanies.png";
import quotes from "./assets/quotes.svg";
import fakecompanylogo from "./assets/fake-company-logo.png"
import ctaImg from "./assets/ctaImg.svg";
import CTABg from "./assets/CTABg.svg";

import ah from "./assets/amir-hamza.jpg";
CTABg


function App() {
  return (
    <div class="overflow-x-hidden relative w-full">

    
    <div>
      <nav class="bg-deepBlue">
        <div class="relative w-[1080px] mx-auto flex items-center justify-between" >
          {/*logo  */}
          <a hre="/" class="cursor-pointer py-7 pr-7">
            <img src={razorpayX} alt="logo" width={"125px"} height={"30px"} />
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
      {/* feature section */}
      <section class="relative mt-[190px] overflow-hidden">
        <img src={dotted} alt="dotted image"
          loading='lazy' width="233" height="167"
          class="absolute -top-[8rem] left-[10rem] inline-block -z-10"
        />

        <img src={dotted} alt="dotted image"
          loading='lazy' width="233" height="167"
          class="absolute top-[3rem]  right-0 inline-block rotate-180"
        />
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <h2 class="font-extrabold font-mullish text-center text-2xl leading-[1.2]">
            Accept Payments with Razorpay Payment Suite</h2>
          <div class="w-6 h-1 bg-greenLight mx-auto mt-6 mt-4"></div>

          {/* content box */}
          <div class="w-full border min-h-[520px] bg-white flex rounded-md relative p-10 py-12">
            {/* left */}
            <div class="flex flex-col justify-between  w-full" >
              <h3 class="font-mullish text-[28px]  leading-10 font-bold max-w-[500px]">
                Supercharge your bussiness with the all-powerful
                <span class="text-lightBlue">Payment Gateway</span>
              </h3>
              <ul class="space-y-2">
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>100+ payments Methods</span>
                </li>
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>Industry Leading Success Rate</span>
                </li>
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>Superior Checkout Experience</span>
                </li>
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>Easy to Integrate</span>
                </li>
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>Instant Settelments from day 1</span>
                </li>
                <li class="font-mullish flex items-center space-x-2">
                  <i data-feather="check" class="text-greenLight"></i>
                  <span>In-depth Reporting and Insights</span>
                </li>
              </ul>
              {/* button */}
              <div class="flex flex-row items-center space-x-4 ">
                <button class="bg-lightBlue w-fit text-white p-y-[14px] p-x-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">Sign Up Now</button>
                {/* hyperlink */}
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>

            </div>
            {/* right */}
            <div>
              <img class="absolute max-w-[600px] right-0 bottom-0" src={payment} alt="" />
            </div>


          </div>


          {/* grid section */}
          <div class="w-full grid grid-cols-3 gap-4 mt-10">
            {/* box1 */}
            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box2 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box3 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box4 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box5 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box6 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">payment link</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>

          </div>





        </div>

      </section>










      {/* feature section 2 */}
      {/*bg-[url(./assets/feature-section-2BG.svg)]  */}
      <section class="  bg-no-repeat bg-cover pt-[10rem] pb-[350px] mt-14">
        <div class="w-10/12 max-w-[1080px]  mx-auto relative pt-4">
          <h2 class="font-extrabold font-mullish text-center text-black text-2xl leading-[1.2]">Explore Razorpay Bussiness Banking</h2>
          <div class="w-6 h-1 bg-greenLight mx-auto mb-20 mt-4"></div>
          {/* main feature box */}
          <div class="w-full min-h[440px] flex relative">
            <img src={xflam1} alt='xflam1'
              loading="lazy"
              class="absolute -top-[142px] -left-[140px] w-[200px]"
            ></img>
            <img src={xflam2} alt='xflam2'
              loading="lazy"
              class="absolute top-[150px] -right-[180px] w-[270px]"
            ></img>

            {/* content box */}
            <div class="w-full bg-deepBlue  min-h-[520px]  flex rounded-md relative p-10 py-12 border-blue-800">
              {/* left */}
              <div class=" flex flex-col justify-between w-full gap-10">
                <h3 class="font-mullish text-[28px] text-white leading-10 font-bold max-w-[500px]" >Manage Your company's finances with
                  <img src={razorpayX} alt=""
                    loading='lazy' width="168px" height="32px"
                    class="inline-block " />
                  <span class="text-greenLight">Business Banking</span>
                </h3>
                <ul class="space-y-2">
                  <li class="font-mullish flex items-center space-x-2 text-white">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>open a fully digital current account</span>
                  </li>
                  <li class="font-mullish flex items-center space-x-2 text-white">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>open a fully digital current account</span>
                  </li>
                  <li class="font-mullish flex items-center space-x-2 text-white">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>open a fully digital current account</span>
                  </li>
                  <li class="font-mullish flex items-center space-x-2 text-white">
                    <i data-feather="check" class="text-greenLight"></i>
                    <span>open a fully digital current account</span>
                  </li>
                </ul>
                <div class="flex flex-row items-center space-x-4 ">
                  <button class="bg-lightBlue w-fit text-white p-y-[14px] p-x-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">Sign Up Now</button>
                  {/* hyperlink */}
                  <div class="flex items-center cursor-pointer">
                    <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                    <i
                      data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                  </div>
                </div>
              </div>

              {/* bg image */}
              <img src={buisnessbanking} alt=""
                class=" max-w-[400px] " />


            </div>

          </div>
          <div class="w-full grid grid-cols-3 gap-4 mt-10">
            {/* box1 */}
            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Current Account</h3>
                <p class="font-mullish text-gray-500 mt-6">Current accounts for fast-growing bussinesses.Supported by the best-in-class technology</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box2 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Capital $ Credit</h3>
                <p class="font-mullish text-gray-500 mt-6">Instant additional cash and corporate card design for growting bussiness</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>
            {/* box3 */}

            <div class="w-full min-h-[15rem] relative cursor-pointer">
              <img src={plink} alt="" class="absolute right-3 top-3 w-12 h-12 transition-all duration-200 " />
              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCard"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="M0 6a6 6 0 0 1 6-6h250.32501220703125a16 16 0 0 1 11.5 5l77 77a16 16 0 0 1 5 11v126a6 6 0 0 1-6 6h-337.32501220703125a6 6 0 0 1-6-6z"
                  fill="#fff"
                />
              </svg>
              <div class="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 class="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Payouts</h3>
                <p class="font-mullish text-gray-500 mt-6">share payments link via an email.sms,messenger.
                  chatbots etc and get paid immediately</p>
                <div class="flex items-center cursor-pointer">
                  <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                  <i
                    data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
                </div>
              </div>
            </div>


          </div>

          {/* demo */}
          <div class=" w-full flex items-center justify-between relative rounded-md border-2 mt-20 py-8 px-3  border-slate-700 gap-y-6">
            <p class="font-mullish text-black text-xl">Check out the live demo to learn how RazorpayX works.
              <span class="font-bold">No Signup Required!</span>
            </p>
            <button class="bg-lightBlue w-fit text-white p-y-[14px] p-x-[18px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 ">Check out the demo</button>
          </div>




        </div>

      </section>



      {/* new features */}
      <section class=" bg-white relative ">
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <img src={dotted} alt=""
            class="absolute w-[233px] left-[300px] -top-[6rem] -z-[10]" />
          <img src={dotted} alt=""
            class="absolute w-[233px] -right-[3.5rem] -top-[10]" />
          <div class="w-full grid grid-cols-3 gap-y-10 gap-x-4 relative z-[10]">
            {/* item */}
            <div class="relative flex items-center">
              <h2 class="font-mullish text-deepBlueHead font-extrabold text-4xl leading-[3-375rem]">New in the
                <br /> <span class="text-lightBlue">Razorpay</span><br></br>
                Product Suite
              </h2>
            </div>
            {/* card 1 */}
            <div class="p-10 bg-[url(./assets/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/instant-settlement-bghover.svg)]  bg-white">
              <img src={razorpayXicon} alt=""
                class="w-10 h-10" />
              <h3 class="font-mullish text-lg font-bold pt-4">Corporate Card</h3>
              <p class="font-mullish py-3 text-grayText leading-normal ">Simplify your recrring,international and team expenses with saving on every spend.Save upto 10 lacs every month</p>
              <div class="flex items-center cursor-pointer">
                <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                <i
                  data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
              </div>
            </div>
            {/* card 2 */}
            <div class="p-10 bg-[url(./assets/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/instant-settlement-bghover.svg)]  bg-white">
              <img src={razorpayXicon} alt=""
                class="w-10 h-10" />
              <h3 class="font-mullish text-lg font-bold pt-4">Corporate Card</h3>
              <p class="font-mullish py-3 text-grayText leading-normal ">Simplify your recrring,international and team expenses with saving on every spend.Save upto 10 lacs every month</p>
              <div class="flex items-center cursor-pointer">
                <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                <i
                  data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
              </div>
            </div>
            {/* card 3 */}
            <div class="p-10 bg-[url(./assets/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/instant-settlement-bghover.svg)]  bg-white">
              <img src={razorpayXicon} alt=""
                class="w-10 h-10" />
              <h3 class="font-mullish text-lg font-bold pt-4">Corporate Card</h3>
              <p class="font-mullish py-3 text-grayText leading-normal ">Simplify your recrring,international and team expenses with saving on every spend.Save upto 10 lacs every month</p>
              <div class="flex items-center cursor-pointer">
                <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                <i
                  data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
              </div>
            </div>
            {/* card 4 */}
            <div class="p-10 bg-[url(./assets/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/instant-settlement-bghover.svg)]  bg-white">
              <img src={razorpayXicon} alt=""
                class="w-10 h-10" />
              <h3 class="font-mullish text-lg font-bold pt-4">Corporate Card</h3>
              <p class="font-mullish py-3 text-grayText leading-normal ">Simplify your recrring,international and team expenses with saving on every spend.Save upto 10 lacs every month</p>
              <div class="flex items-center cursor-pointer">
                <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                <i
                  data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
              </div>
            </div>
            {/* card 5 */}
            <div class="p-10 bg-[url(./assets/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/instant-settlement-bghover.svg)] bg-white">
              <img src={razorpayXicon} alt=""
                class="w-10 h-10" />
              <h3 class="font-mullish text-lg font-bold pt-4">Corporate Card</h3>
              <p class="font-mullish py-3 text-grayText leading-normal ">Simplify your recrring,international and team expenses with saving on every spend.Save upto 10 lacs every month</p>
              <div class="flex items-center cursor-pointer">
                <a href="#" class="font-mullish font-bold text-lightBlue500 group-hover:text-gray-50 transition-all duration-200">Know More</a>
                <i
                  data-feather="chevron-right" class="w-5 h-4 text-lightBlue500 group-hover:text-gray-50"></i>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* core features */}
      <section class="w.full bg-[url(./assets/core-features-sectionBg.svg)]  bg-no-repeat bg-cover mt-14 relative z-20 corefeaturesection">
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <h2 class="font-mullish font-bold text-xxl text-center text-white">Features</h2>
          <div class="w-6 h-1 bg-greenLight text-center mx-auto mt-4 mb-6"></div>
          <p 
          class="font-mullish text-center max-w-[450px] text-white mx-auto"
          >Empower your bussiness with all the right tools to accept online payments and provide the best customer experience.</p>
          {/* grid */}
          <div class="grid grid-cols-4 gap-[2rem] mt-8">
            {/* card 1 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 2 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 3 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 4 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 5 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 6 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 7 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card 8 */}
            <div>
              <img src={instantactivationicon} alt="" 
              
              />
              <h3 class="font-mullish text-white text-lg font-bold my-4">Instant Activation</h3>
              <p class="font-mullish text-white opacity-80">Set activation and transact with 2 minutes.Completely online onboarding with minimum documentation.</p>
            </div>

          </div>
        </div>
      </section>



{/* join razor pay section  */}
<section class="bg-[#f5f8fe] relative z-10 pt-40 pb-20 -mt-[200px] ">
  <div class="w-11/12 max-w-[1080px] mx-auto relative flex">
    {/* left part */}
    <div class="flex flex-col justify-center max-w-[calc(100%-500px)]">
      <h3 class="font-mullish font-bold text-2xl text-deepBlue">Join the 50,00,000+ businesses that accept payments with Razorpay
        
      </h3>
      <div class="w-6 h-1 bg-greenLight mx-auto my-4 mb-10 ml-0"></div>
      <p class="font-mullish opacity-80">we make it easy for businesses to accept payments online on simplifying your payments.become one of us by joining thousands of our happy users and simplifying your payment processes.</p>
      <p class="font-mullish mt-6 opacity-80">Focus on your business while we handle the payments for you.</p>
    </div>
    {/* right part */}
    <div class="h-[500px] w-[500px] relative overflow-hidden">
     
      <img src={comanies} alt="" 
      class="absolute h-auto object-cover moveimage"/>
     
    </div>
  </div>
</section>


{/* testimonial section */}  

<section class="relative">
  <div class="w-11/12 max-w-[1300px] mx-auto relative py-20">
    <img src={dotted} alt="" 
    class="absolute w-[200px] top-[8rem] left-[2rem] -z-[10]" />
    <h2 class="font-mullish font-extrabold text-2xl text-deepBlue text-center">An Experience 
<br />People Love to Talk About
    </h2>
    <div class="w-6 h-1 bg-greenLight mx-auto my-4" ></div>
  
  {/* left button */}
  <button class="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center">
    <div class="w-[50px] h-[50px] bg-gray-200 rounded-full absolute left-0 top-1/2" > 
      <i
      data-feather="chevron-left"
      class="stroke-[5px] w-6 h-6 md:w-10 md:h-10 text-gray-400">

      </i>
    </div>
  </button>
  {/* right button */}
 <button class="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center">
    <div class="w-[50px] h-[50px] bg-gray-200 rounded-full absolute right-0 top-1/2" > 
       <i
      data-feather="chevron-right"
      class="stroke-[5px] w-6 h-6 md:w-10 md:h-10 text-gray-400">

      </i>
    </div>
  </button>
  {/* main content */}
  <div class="flex  max-w-[960px] items-center mx-auto my-20 gap-24 ">
    {/* left img */}
    <img src={ah} alt="" 
    height="320px"
    width="320px"
    class="rounded-xl"/>
    {/* right part */}
    <div>
      <img src={quotes} alt="" 
      height="35px"
      width="40px"
      class="-mb-2"/>
      <p class="font-mullish text-3xl font-extralight">Readymade Closed Wallet Solution For Quick Refunds</p>
      <a href="#" class="text-grayText italic underline">Learn More</a>
      <h3 class="font-mullish font-extrabold text-2xl">Amir Hamza</h3>
      <p class="font-mullish font-medium">CEO,TRANSITEYE COMPANY</p>
      <img src={fakecompanylogo} alt="" height="40" width="80" />
    </div>
  </div>
  {/* 6 dot */}
  
  </div>
</section>
{/* cta */}
<section class="w.full bg-[url(./assets/CTABg.svg)]  bg-no-repeat bg-cover mt-14 relative z-20 corefeaturesection">
  {/* main content box */}
  <div class=" flex relative w-11/12 max-w-[1080px] mx-auto pt-4 " >
  <div class="max-w-[500px]">
    <h2 class="font-mullish font-bold text-2xl text-white my-4">SuperCharge your bussiness with Razorpay</h2>
    <div class="w-6 h-1 bg-greenLight  my-4" ></div>
    <p class="font-mullish  max-w-[450px] text-white  my-10" >Sign up now to experience the future of payments and offer your customers the best checkout experience. </p>
    <ul class=" my-4 flex flex-row gap-10">
      <li>
        <i></i>
        <span class="font-mullish text-white opacity-90">Quick Onboarding</span>
      </li>
      <li class="font-mullish text-white opacity-90">Access to entire product suite</li>
      <li class="font-mullish text-white opacity-90"> 24x7 support</li>
      
    </ul>
    <button class="bg-lightBlue text-white rounded-md font-mullish
             font-bold hover:bg-lightBlue500
             transition-all duration-200 py-[14px] px-[18px] ">Sign Up Now </button>
             </div>
{/* img */}
<div>
<img src={ctaImg} alt="" />
</div>
  </div>
</section>
    </div>
    <footer
      style={{ background: 'linear-gradient(to right, #eef9fe, #edf7ff)' }}
    class="-mt-[400px] md:-mt-[300px]"
  >
    <div
      class="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between"
    >

      {/*column - 1  */}
      <div class="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
        <img
          src="/images/logo-dark.svg"
          loading="lazy"
          width="120px"
          height="24px"
        />
        <p class="text-sm text-grayText my-3 font-mullish">
          Razorpay is the only payments solution in India that allows
          businesses to accept, process and disburse payments with its product
          suite. It gives you access to all payment modes including credit
          card, debit card, netbanking, UPI and popular wallets including
          JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
        </p>
        <p class="text-sm text-grayText my-3 font-mullish">
          RazorpayX supercharges your business banking experience, bringing
          effectiveness, efficiency, and excellence to all financial
          processes. With RazorpayX, businesses can get access to
          fully-functional current accounts, supercharge their payouts and
          automate payroll compliance.
        </p>
        <p class="text-sm text-grayText my-3 font-mullish">
          Manage your marketplace, automate bank transfers, collect recurring
          payments, share invoices with customers and avail working capital
          loans - all from a single platform. Fast forward your business with
          Razorpay.
        </p>
        <p class="text-[0.625rem] text-grayText my-3 font-mullish">
          Disclaimer: The RazorpayX powered Current Account and VISA corporate
          credit card are provided by RBI licensed banks. Your RazorpayX
          powered account is provided by our partner bank, in accordance with
          RBI regulations. RazorpayX itself is not a bank and doesn't hold or
          claim to hold a banking license.
        </p>
        <p class="font-mullish uppercase font-bold text-gray2">
          Subscribe to our newsletter
        </p>
        <form class="relative bg-white w-[260px] mt-2 mb-4">
          <input
            placeholder="Your email address"
            class="pr-16 font-mullish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
          />
          <button
            class="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200"
          >
            Subscribe
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              class="w-[14px] h-[14px] ml-3"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </form>
        <div class="flex items-start space-x-4">
          <img
            src="/images/footer-certificate-1.png"
            loading="lazy"
            width="92"
            height="40"
            class="cursor-pointer"
          />
          <img
            src="/images/footer-certificate-2.jpg"
            loading="lazy"
            width="122"
            height="80"
            class="cursor-pointer"
          />
        </div>
      </div>
      
      {/* column - 2 */}
      <div
        class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between"
      >
        
        {/* sub column - 1 */}
        <div class="space-y-3">
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              BANKING PLUS
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >RazorpayX</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Current Accounts</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Payouts</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Payout Links</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Corporate Credit Card</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  View Live Demo
                  <span
                    class="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                    >New</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              LENDING
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Razorpay Capital</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Instant Settlements</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Working Capital Loans</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Marketplace Instant Settlements</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              RISK & FRAUD
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Thirdwatch</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  PrePay CoD
                  <span
                    class="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                    >New</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              BECOME A PARTNER
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Refer and Earn</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Onboarding APIs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              MORE
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Route</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Invoices</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Freelancer Payments</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >International</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Flash Checkout</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >UPI</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >ePOS</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Checkout Demo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >RazorpayX Payroll</a
                >
              </li>
            </ul>
          </div>
        </div>
        
        {/* sub column - 2  */}
        <div class="space-y-3">
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              ACCEPT PAYMENTS
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Payment Gateway</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Payment Pages</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Payment Links</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >QR Codes</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Subscriptions</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Smart Collect
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              DEVELOPERS
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Docs</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Integrations</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >API Reference</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              RESOURCES
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Chargeback Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Settlement Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              SOLUTIONS
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Education</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Saas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  BFSI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              FREE TOOLS
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >GST Calculator</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Online TDS Payment</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="relative font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  GST Number Search
                  <span
                    class="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                    >New</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* sub column - 3  */}
        <div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1">
              COMPANY
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish relative font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Careers
                  <span
                    class="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1"
                    >We're hiring!</span
                  >
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Terms of Use</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Grievance Redressal</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Responsible Disclosure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  White Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                >
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1 mt-3">
              HELP & SUPPORT
            </p>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Support</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-mullish font-medium text-lightBlue500 hover:text-grayBlue transition-all duration-200"
                  >Knowledge base</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
              FIND US ONLINE
            </p>
            <ul class="flex space-x-4 items-center mt-4">
              <li class="cursor-pointer">
                <a>
                  <img
                    src="/images/facebook-icon.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </li>
              <li class="cursor-pointer">
                <a>
                  <img
                    src="/images/twitter-icon.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </li>
              <li class="cursor-pointer">
                <a>
                  <img
                    src="/images/instagram-icon.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </li>
              <li class="cursor-pointer">
                <a>
                  <img
                    src="/images/github-icon.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </li>
              <li class="cursor-pointer">
                <a>
                  <img
                    src="/images/linkedin-icon.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">
              REGD. OFFICE ADDRESS
            </p>
            <p class="font-mullish text-sm mt-4 whitespace-nowrap">
              Razorpay Software Private Limited, <br />1st Floor, dubai plaza,
              <br />rawalpinid ,islamabad <br />jinah camp
              <br />islamabad, pakistan <br />CINc.000000000000000
            </p>
            <div class="font-mullish mt-6">
              <p class="text-sm">© Razorpay 2026</p>
              <p class="text-sm">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    </div>  
    

  );
}

export default App; 17