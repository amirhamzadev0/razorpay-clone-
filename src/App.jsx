import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import feather from "feather-icons";
import './App.css'
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




function App() {
  return (
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
      <section class="w.full bg-[url(./assets/core-features-sectionBg.svg)]  bg-no-repeat bg-cover mt-14 relative corefeaturesection">
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
    </div>
  );
}

export default App; 17