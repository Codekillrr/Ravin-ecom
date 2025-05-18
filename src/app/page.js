"use client";

import Image from "next/image";
import Video from "next-video";
import Video1 from "/videos/raven-v1.mp4";
import Video2 from "/videos/Ravinx-new-vid.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="absolute w-full h-full overflow-auto">
        <header className="sticky inset-0 z-10">
          <nav className="bg-white relative h-[22%] lg:border-b border-gray-200">
            <div className="h-[20%] w-[50px] bg-[url('https://www.tomfordfashion.com/on/demandware.static/Sites-tomford-Site/-/en_US/v1747454756923/fonts/flags//4x3/us.svg')] bg-contain bg-no-repeat top-[30%] left-[72%] flex justify-center items-center absolute pointer-events-none"></div>
            <div className="max-lg:hidden h-14 w-full">
              <div className="px-5 h-full w-full ">
                <div className="h-full w-[150px] ml-auto flex justify-center items-center">
                  <div className="font-montserrat text-[0.75rem]">RAVIN</div>
                  <div className="font-montserrat text-[0.75rem] font-bold">
                    X
                  </div>
                  <div className="font-montserrat text-[0.75rem]">BEAUTY</div>
                </div>
              </div>
            </div>

            <div className="h-17 w-auto max-lg:hidden">
              <div className="h-full w-auto px-5 flex justify-end items-center">
                <div className="h-[50px] flex flex-row">
                  <div className="w-47 flex justify-center items-center">
                    {/* <div className=" flex flex-row justify-between border-b border-black"> */}
                    <div className=" w-full h-full relative flex items-center group cursor-pointer">
                      <input
                        type="text"
                        placeholder="SEARCH"
                        className="w-[100%] absolute focus:scale-100 focus:outline-none focus:border-b focus:border-black border-b border-black origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 transform"
                      ></input>
                      <svg
                        className="size-5 z-10 absolute right-0 group cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </div>
                    {/* </div> */}
                  </div>

                  <div className="w-80 flex flex-row justify-evenly">
                    <div className="h-full w-[60%] flex pl-18 pr-6 justify-center items-center">
                      <button className="text-sm font-bold flex flex-row hover:text-[0.9rem]">
                        🇵🇰PAKISTAN
                      </button>
                    </div>
                    <div className="w-[40%] pr-5 pb-2 flex flex-row space-x-4 items-center justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 hover:opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 hover:opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 hover:opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:h-17 max-lg:pt-3.5 max-lg:h-18 w-auto max-lg:flex max-lg:flex-col max-lg:space-y-0">
              <div className="h-full w-auto lg:px-8 flex max-lg:justify-between items-center">
                <div className="h-full w-[10%] ml-5 lg:hidden flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="grey"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>

                <div className="flex h-full lg:flex-row space-x-0 w-[80%] max-lg:w-[30%] max-lg:pr-2.25 max-lg:justify-center">
                  <div className="h-full lg:w-[30%] max-lg:w-full flex justify-center items-center relative">
                    <div className="lg:text-[3.5rem] max-lg:text-[2.3rem] lg:mb-[1.5rem] text-red-500 font-blod absolute">
                      RAXIN
                    </div>
                    <div className="text-[6.5rem] max-lg:text-[3.6rem] ml-[0.65rem] mt-0.3 lg:ml-3.5 lg:mb-5 text-red-500 font-bold absolute">
                      X
                    </div>
                  </div>

                  <div className="max-lg:hidden w-full flex items-center">
                    <div className="font-bold text-xl ml-5 w-full h-[50%] flex flex-row justify-start items-center space-x-9">
                      <button>HIGHLIGHTS</button>
                      <button>MEN</button>
                      <button>WOMEN</button>
                      <button>EYEWEAR</button>
                      <button>GIFT</button>
                    </div>
                  </div>
                </div>
                <div className="h-full pb-0.5 w-[35px] mr-5 lg:hidden flex justify-center items-center border border-red-500 rounded-[100%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </div>
              {/* <div className="w-full h-full flex justify-center"> */}
              <div className="w-full h-[65%] relative lg:hidden flex border-b border-black flex-row justify-end bottom-0 space-x-0 items-center group cursor-pointer">
                {/* <svg
                  className="size-5 absolute left-[7%] w-[5%] mr-1 z-10 group cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="w-[87%] pr-11 focus:scale-100 focus:outline-none  "
                ></input> */}
              </div>
              {/* </div> */}
            </div>
          </nav>
        </header>

        <div className="relative h-[83%]">
          <div className="absolute w-full h-full">
            {/* <Image 
            src="/SliderImages/image1.png"  
            alt="Description of image"
            fill
            className="object-cover" //object-contain
            /> */}
            <div className="h-full w-full flex flex-row">
              <div className="h-full lg:w-[50%] max-lg:hidden relative overflow-hidden">
                <Video
                  src={Video1}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  videoQuality="premium"
                  className="w-full h-full object-cover"
                ></Video>
              </div>
              <div className="h-full lg:w-[50%] relative overflow-hidden">
                <Video
                  src={Video2}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  className="w-full h-full object-cover"
                ></Video>
              </div>
            </div>
          </div>
          <div className="top-[70%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[2rem] ">
              MEN'S COLLECTION
            </div>
            <button className="m-[2px] text-lg max-lg:px-3 max-lg:py-1 px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="h-[400px] my-5">
          <div className="w-full h-15 px-5 flex flex-row justify-between">
            <div className="h-full w-[60%]">
              <div className="text-2xl font-bold">NEW ARRIVALS</div>
              <div className="text-[0.75] font-bold">SHOP ALL</div>
            </div>
            <div className="h-full flex justify-center items-center w-[20%]">
              {/* <div className="h-[50%] w-full border-2"></div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </div>
          <div className="w-full max-w-[900px] mx-auto h-[360px] p-4">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              modules={[Pagination]}
              className="h-full w-full"
              pagination={{
                //el: ".custom-pagination",
                clickable: true,
                // renderBullet: function (index, className) {
                //   return `<span class="${className} block h-[1px] flex-1 bg-gray-400 transition-all duration-300"></span>`;
                // },
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col h-full w-full border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-3 font-geistMono">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col h-full w-full border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image copy.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-3 font-geistMono">
                    <div className="text-[0.8rem] font-bold">
                      LONG SLEEVE V-NECK LAVALLIERE BLOUSE
                    </div>
                    <div className="text-[0.75rem]">$2,450</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col h-full w-full border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-3 font-geistMono">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col h-full w-full border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-3 font-geistMono">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col h-full w-full border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="flex flex-col justify-between p-3 font-geistMono">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/image copy 2.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              style={{
                objectPosition: "100% 0%",
                //transform: //'scale(0.8)'
              }}
            />
          </div>
          <div className="top-[70%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[2rem]">
              MEN'S SUMMER 25
            </div>
            <button className="m-[2px] max-lg:px-3 max-lg:py-1 text-lg px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/SliderImages/image7.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              style={
                {
                  //objectPosition:
                  //transform: "scale(0.8)",
                }
              }
            />
          </div>
          <div className="top-[5%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[1.8rem] text-black">
              WOMEN'S <br className="md:hidden" /> SUMMER 25
            </div>
            <button className="m-[2px] max-lg:px-3 max-lg:py-1 text-lg text-black px-5 py-2 border-black border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/SliderImages/image4.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="top-[10%] left-[30%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[2rem]">
              GIFTS FOR HIM
            </div>
            <button className="m-[2px] max-lg:px-3 max-lg:py-1 text-lg px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/SliderImages/image5.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              style={{
                objectPosition: "53% 0%",
                //transform: //'scale(0.8)'
              }}
            />
          </div>
          <div className="top-[70%] max-lg:m-6 m-11 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[2rem]">EYEWEAR</div>
            <button className="m-[2px] max-lg:px-3 max-lg:py-1 text-lg px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/image copy 3.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="top-[5%] left-[55%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] text-white max-lg:text-[2rem]">
              WATCHES
            </div>
            <button className="m-[2px] text-white max-lg:px-3 max-lg:py-1 text-lg px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="h-[70%] relative">
          <div className="absolute w-full h-full">
            <Image
              src="/image copy 4.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="top-[5%] m-11 max-lg:m-6 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem] max-lg:text-[2rem]">FOOTWEAR</div>
            <button className="m-[2px] max-lg:px-3 max-lg:py-1 text-lg px-5 py-2 border-white border-[1px] transition-all duration-200 ease-in-out active:text-red-500 active:border-red-500">
              SHOP NOW
            </button>
          </div>
        </div>

        <footer className="h-[40rem] flex flex-col space-y-5 mt-5">
          <div className="h-[30rem] mx-4">
            <div className="h-[4rem] w-full flex flex-row justify-between items-end">
              <div className="flex flex-row w-[70%] justify-between h-[25%] items-center">
                <div className="border-b-[1px] w-[100%] border-black h-full flex items-end">
                  <input
                    type="text"
                    placeholder="ENTER EMAIL ADDRESS"
                    className="w-full bottom-0 pb-[0.3rem] text-[0.82rem] text-black font-geistMono"
                  ></input>
                </div>
              </div>

              <div className="h-full flex w-[40%] justify-center px-4 items-end">
                <div className="h-[70%] w-[100%] text-white text-[0.82rem] border-[1px] border-black flex justify-center items-center font-bold font-geistMono transition-all duration-200 ease-in-out active:bg-black bg-red-500">
                  SUBSCRIBE
                </div>
              </div>
            </div>
            <div className="mt-3 h-[40%] py-4 w-full border-b-[1px] border-gray-400 flex flex-col justify-between items-center">
              <div className="w-full flex text-[1.1rem] justify-start font-geistMono">
                CUSTOMER SUPPORT
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start">
                TRACK YOUR ORDER
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start font-geistMono">
                CONTACT US
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start font-geistMono">
                STORE LOCATIONS
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start font-geistMono">
                FAQ
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start font-geistMono">
                SHIPPING & RETURNS
              </div>
            </div>
            <div className=" h-[18%] py-4 w-full border-b-[1px] border-gray-400 flex flex-col space-y-2 justify-start items-center">
              <div className="w-full flex text-[1.1rem] justify-start font-geistMono">
                SERVICE
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start">
                MADE TO MEASURE
              </div>
            </div>
            <div className=" h-[30%] py-4 w-full  flex flex-col space-y-2 justify-start items-center">
              <div className="w-full flex text-[1.1rem] justify-start font-geistMono">
                ABOUT
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start">
                NEWS
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start">
                PRIVACY POLICY
              </div>
              <div className="w-full text-[0.9rem] text-gray-500 flex justify-start">
                ACCESSIBLITY
              </div>
            </div>
          </div>
          <div className="h-[10%] border-t-[1px] border-gray-200">
            <div className="font-montserrat text-red-500 text-[2.5rem] pl-5">
              RAVIN X
            </div>
            <div className="font-montserrat text-[0.6rem] h-[30%]">
              <div className="h-full w-[80%]">
                <div className="flex flex-row justify-between">
                  <div className="w-[20%] flex justify-end">
                    <div>SITE MAP</div>
                  </div>
                  <div className="w-[36%] flex flex-row justify-between">
                    <div>|</div>
                    <div>PRIVACY POLICY</div> <div>|</div>
                  </div>
                  <div className="w-[30%]">
                    <div>TERMS & CONDITIONS</div>
                  </div>
                </div>
                <div className="font-montserrat text-[0.6rem] pl-5 mt-4">
                  © RAVIN X ALL RIGHTS RESERVED
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
