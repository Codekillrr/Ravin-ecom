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
      <div className="absolute h-full w-full overflow-auto">
        <header className="sticky inset-0 z-10">
          <nav className="relative h-[22%] border-gray-200 bg-white lg:border-b">
            <div className="pointer-events-none absolute top-[30%] left-[72%] flex h-[20%] w-[50px] items-center justify-center bg-[url('https://www.tomfordfashion.com/on/demandware.static/Sites-tomford-Site/-/en_US/v1747454756923/fonts/flags//4x3/us.svg')] bg-contain bg-no-repeat"></div>
            <div className="h-14 w-full max-lg:hidden">
              <div className="h-full w-full px-5">
                <div className="ml-auto flex h-full w-[150px] items-center justify-center">
                  <div className="font-montserrat text-[0.75rem]">RAVIN</div>
                  <div className="font-montserrat text-[0.75rem] font-bold">
                    X
                  </div>
                  <div className="font-montserrat text-[0.75rem]">BEAUTY</div>
                </div>
              </div>
            </div>

            <div className="h-17 w-auto max-lg:hidden">
              <div className="flex h-full w-auto items-center justify-end px-5">
                <div className="flex h-[50px] flex-row">
                  <div className="flex w-47 items-center justify-center">
                    {/* <div className=" flex flex-row justify-between border-b border-black"> */}
                    <div className="group relative flex h-full w-full cursor-pointer items-center">
                      <input
                        type="text"
                        placeholder="SEARCH"
                        className="absolute w-[100%] origin-right scale-x-0 transform border-b border-black transition-transform duration-300 group-hover:scale-x-100 focus:scale-100 focus:border-b focus:border-black focus:outline-none"
                      ></input>
                      <svg
                        className="group absolute right-0 z-10 size-5 cursor-pointer"
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

                  <div className="flex w-80 flex-row justify-evenly">
                    <div className="flex h-full w-[60%] items-center justify-center pr-6 pl-18">
                      <button className="flex flex-row text-sm font-bold hover:text-[0.9rem]">
                        🇵🇰PAKISTAN
                      </button>
                    </div>
                    <div className="flex w-[40%] flex-row items-center justify-end space-x-4 pr-5 pb-2">
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

            <div className="w-auto max-lg:flex max-lg:h-18 max-lg:flex-col max-lg:space-y-0 max-lg:pt-3.5 lg:h-17">
              <div className="flex h-full w-auto items-center max-lg:justify-between lg:px-8">
                <div className="ml-5 flex h-full w-[10%] items-center justify-center lg:hidden">
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

                <div className="flex h-full w-[80%] space-x-0 max-lg:w-[30%] max-lg:justify-center max-lg:pr-2.25 lg:flex-row">
                  <div className="relative flex h-full items-center justify-center max-lg:w-full lg:w-[30%]">
                    <div className="font-blod absolute text-black max-lg:text-[2.3rem] lg:mb-[1.5rem] lg:text-[3.5rem]">
                      RAXIN
                    </div>
                    <div className="mt-0.3 absolute ml-[0.65rem] text-[6.5rem] font-bold text-black max-lg:text-[3.6rem] lg:mb-5 lg:ml-3.5">
                      X
                    </div>
                  </div>

                  <div className="flex w-full items-center max-lg:hidden">
                    <div className="ml-5 flex h-[50%] w-full flex-row items-center justify-start space-x-9 text-xl font-bold">
                      <button>HIGHLIGHTS</button>
                      <button>MEN</button>
                      <button>WOMEN</button>
                      <button>EYEWEAR</button>
                      <button>GIFT</button>
                    </div>
                  </div>
                </div>
                <div className="mr-5 flex h-full w-[35px] items-center justify-center pb-0.5 lg:hidden">
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
              <div className="group relative bottom-0 flex h-[65%] w-full cursor-pointer flex-row items-center justify-end space-x-0 border-b border-black lg:hidden">
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
          <div className="absolute h-full w-full">
            {/* <Image 
            src="/SliderImages/image1.png"  
            alt="Description of image"
            fill
            className="object-cover" //object-contain
            /> */}
            <div className="flex h-full w-full flex-row">
              <div className="relative h-full overflow-hidden max-lg:hidden lg:w-[50%]">
                <Video
                  src={Video1}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  videoQuality="premium"
                  className="h-full w-full object-cover"
                ></Video>
              </div>
              <div className="relative h-full overflow-hidden lg:w-[50%]">
                <Video
                  src={Video2}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  className="h-full w-full object-cover"
                ></Video>
              </div>
            </div>
          </div>
          <div className="absolute top-[70%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] max-lg:text-[2rem]">
              MEN'S COLLECTION
            </div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="my-5 h-[400px]">
          <div className="flex h-15 w-full flex-row justify-between px-5">
            <div className="h-full w-[60%]">
              <div className="text-2xl font-bold">NEW ARRIVALS</div>
              <div className="font-bold text-[0.75]">SHOP ALL</div>
            </div>
            <div className="flex h-full w-[20%] items-center justify-center">
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
          <div className="mx-auto h-[360px] w-full max-w-[900px] p-4">
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
                <div className="flex h-full w-full flex-col border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="font-geistMono flex flex-col justify-between p-3">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full w-full flex-col border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image copy.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="font-geistMono flex flex-col justify-between p-3">
                    <div className="text-[0.8rem] font-bold">
                      LONG SLEEVE V-NECK LAVALLIERE BLOUSE
                    </div>
                    <div className="text-[0.75rem]">$2,450</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full w-full flex-col border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="font-geistMono flex flex-col justify-between p-3">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full w-full flex-col border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="font-geistMono flex flex-col justify-between p-3">
                    <div className="text-[0.8rem] font-bold">
                      DOUBLE BREASTED PEAKED LAPEL JACKET
                    </div>
                    <div className="text-[0.75rem]">$5,790</div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex h-full w-full flex-col border-[1px] border-gray-200 bg-gradient-to-br from-gray-200 via-white to-gray-200">
                  <Image
                    src="/image.png"
                    alt="Description of image"
                    width={400}
                    height={200}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="font-geistMono flex flex-col justify-between p-3">
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

        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
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
          <div className="absolute top-[70%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] max-lg:text-[2rem]">
              MEN'S SUMMER 25
            </div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
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
          <div className="absolute top-[5%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] text-black max-lg:text-[1.8rem]">
              WOMEN'S <br className="md:hidden" /> SUMMER 25
            </div>
            <button className="m-[2px] border-[1px] border-black px-5 py-2 text-lg text-black transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
            <Image
              src="/SliderImages/image4.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="absolute top-[10%] left-[30%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] max-lg:text-[2rem]">
              GIFTS FOR HIM
            </div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
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
          <div className="absolute top-[70%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] max-lg:text-[2rem]">EYEWEAR</div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
            <Image
              src="/image copy 3.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="absolute top-[5%] left-[55%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] text-white max-lg:text-[2rem]">
              WATCHES
            </div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg text-white transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative h-[70%]">
          <div className="absolute h-full w-full">
            <Image
              src="/image copy 4.png"
              alt="Description of image"
              fill
              className="object-cover" //object-contain
            />
          </div>
          <div className="absolute top-[5%] z-5 m-11 font-bold text-white max-lg:m-6">
            <div className="text-[2.5rem] max-lg:text-[2rem]">FOOTWEAR</div>
            <button className="m-[2px] border-[1px] border-white px-5 py-2 text-lg transition-all duration-200 ease-in-out active:border-red-500 active:text-red-500 max-lg:px-3 max-lg:py-1">
              SHOP NOW
            </button>
          </div>
        </div>

        <footer className="mt-5 flex h-[40rem] flex-col space-y-5">
          <div className="mx-4 h-[30rem]">
            <div className="flex h-[4rem] w-full flex-row items-end justify-between">
              <div className="flex h-[25%] w-[70%] flex-row items-center justify-between">
                <div className="flex h-full w-[100%] items-end border-b-[1px] border-black">
                  <input
                    type="text"
                    placeholder="ENTER EMAIL ADDRESS"
                    className="font-geistMono bottom-0 w-full pb-[0.3rem] text-[0.82rem] text-black"
                  ></input>
                </div>
              </div>

              <div className="flex h-full w-[40%] items-end justify-center pl-4">
                <div className="font-geistMono flex h-[70%] w-[100%] items-center justify-center border-[1px] border-black bg-red-500 text-[0.82rem] font-bold text-white transition-all duration-200 ease-in-out active:bg-black">
                  SUBSCRIBE
                </div>
              </div>
            </div>
            <div className="mt-3 flex h-[40%] w-full flex-col items-center justify-between border-b-[1px] border-gray-400 py-4">
              <div className="font-geistMono flex w-full justify-start text-[1.1rem]">
                CUSTOMER SUPPORT
              </div>
              <div className="flex w-full justify-start text-[0.9rem] text-gray-500">
                TRACK YOUR ORDER
              </div>
              <div className="font-geistMono flex w-full justify-start text-[0.9rem] text-gray-500">
                CONTACT US
              </div>
              <div className="font-geistMono flex w-full justify-start text-[0.9rem] text-gray-500">
                STORE LOCATIONS
              </div>
              <div className="font-geistMono flex w-full justify-start text-[0.9rem] text-gray-500">
                FAQ
              </div>
              <div className="font-geistMono flex w-full justify-start text-[0.9rem] text-gray-500">
                SHIPPING & RETURNS
              </div>
            </div>
            <div className="flex h-[18%] w-full flex-col items-center justify-start space-y-2 border-b-[1px] border-gray-400 py-4">
              <div className="font-geistMono flex w-full justify-start text-[1.1rem]">
                SERVICE
              </div>
              <div className="flex w-full justify-start text-[0.9rem] text-gray-500">
                MADE TO MEASURE
              </div>
            </div>
            <div className="flex h-[30%] w-full flex-col items-center justify-start space-y-2 py-4">
              <div className="font-geistMono flex w-full justify-start text-[1.1rem]">
                ABOUT
              </div>
              <div className="flex w-full justify-start text-[0.9rem] text-gray-500">
                NEWS
              </div>
              <div className="flex w-full justify-start text-[0.9rem] text-gray-500">
                PRIVACY POLICY
              </div>
              <div className="flex w-full justify-start text-[0.9rem] text-gray-500">
                ACCESSIBLITY
              </div>
            </div>
          </div>
          <div className="h-[10%] border-t-[1px] border-gray-200">
            <div className="font-montserrat pl-5 text-[2.5rem]">RAVIN X</div>
            <div className="font-montserrat h-[30%] text-[0.6rem]">
              <div className="h-full w-[80%]">
                <div className="flex flex-row justify-between">
                  <div className="flex w-[20%] justify-end">
                    <div>SITE MAP</div>
                  </div>
                  <div className="flex w-[36%] flex-row justify-between">
                    <div>|</div>
                    <div>PRIVACY POLICY</div> <div>|</div>
                  </div>
                  <div className="w-[30%]">
                    <div>TERMS & CONDITIONS</div>
                  </div>
                </div>
                <div className="font-montserrat mt-4 pl-5 text-[0.6rem]">
                  © IBADULLAH MEMON ALL RIGHTS RESERVED
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
