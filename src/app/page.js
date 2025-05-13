import Image from "next/image";
import Video from 'next-video';
import Video1 from "/videos/raven-v1.mp4"; 
import Video2 from "/videos/revin-video2.mp4"; 

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="absolute w-full h-full overflow-auto">
        <header className="sticky inset-0 z-10">
          <nav className="bg-white h-[22%] border-b border-gray-200">

            <div className="h-14 w-full">
              <div className="px-5 h-full w-full ">
                <div className="h-full w-[150px] ml-auto flex justify-center items-center">
                  <div className="font-montserrat text-[0.75rem]">RAVIN</div>
                  <div className="font-montserrat text-[0.75rem] font-bold ">X</div>
                  <div className="font-montserrat text-[0.75rem]">BEAUTY</div>
                </div>
              </div>
            </div>

            <div className="h-17 w-auto">
              <div className="h-full w-auto px-5 flex justify-end items-center">
                <div className="h-[50px] flex flex-row">

                  <div className="w-47 flex justify-center items-center">
                    {/* <div className=" flex flex-row justify-between border-b border-black"> */}
                      <div className=" w-full h-full relative flex items-center group cursor-pointer">
                        <input 
                          type="text"
                          placeholder="SEARCH"
                          className="w-[100%] absolute focus:scale-100 focus:outline-none focus:border-b focus:border-black border-b border-black origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 transform"
                        >
                        </input>
                        <svg className="size-5 z-10 absolute right-0 group cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="h-16 w-auto">
              <div className="h-full w-auto px-8 flex items-center">
                <div className="h-full flex flex-row space-x-0 w-full">
                  {/* <div className="w-70 h-full flex justify-center">
                    <div className="h-full w-full flex font-bold font-Geist_Mono text-[2.35rem] pb-1">



                      <div className="relative w-full f-full">
                      

                      <button className=" absolute">RAVIN</button>

                      <image
                        src="/SliderImages/image1.png"
                        alt="image"
                        fill
                        className="object-contain absolute"
                      />

                      </div>




                    </div>
                  </div>  */}
                  <div className="h-full w-70 flex justify-center items-center relative">
                    <div className="text-[3.5rem] mb-[1.5rem] text-black font-blod absolute">
                      RAXIN
                    </div>
                    <div className="text-[6.5rem] ml-3.5 mb-5 text-black font-bold absolute">X</div>

                  </div>
                  <div className="w-full flex items-center">
                    <div className="font-bold text-xl ml-5 w-full h-[50%] flex flex-row justify-start items-center space-x-9">
                      <button>HIGHLIGHTS</button>
                      <button>MEN</button>
                      <button>WOMEN</button>
                      <button>EYEWEAR</button>
                      <button>GIFT</button>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="h-full w-[50%] relative overflow-hidden bg-amber-300">
                <Video 
                  src={Video1}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  className="w-full h-full object-cover"
                >
                </Video>
              </div>
              <div className="h-full w-[50%] bg-amber-800">
              <Video 
                  src={Video2}
                  autoplay
                  muted
                  playInline
                  loop
                  controls={false}
                  className="w-full h-full object-cover"
                >

                </Video>
              </div>
            </div>
          </div>
          <div className="top-[70%] m-11 absolute z-5 text-white font-bold ">
            <div className="text-[2.5rem]">MEN'S COLLECTION</div>
            <button className="m-[2px] text-lg px-5 py-2 border-white border-[1px] hover:text-blue-300 hover:border-blue-300">
              SHOP NOW
            </button>
          </div>
          
        </div>
        <div className="h-[65%] my-10 border-2 border-black">NEW ARRIVALS</div>

        <div className="h-[83%] relative">
          <div className="absolute w-full h-full">
              <Image 
              src="/SliderImages/image6.png"  
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              />
            </div>
            <div className="top-[70%] m-11 absolute z-5 text-white font-bold ">
              <div className="text-[2.5rem]">MEN'S SUMMER 25</div>
              <button className="m-[2px] text-lg px-5 py-2 border-white border-[1px] hover:text-blue-300 hover:border-blue-300">
                SHOP NOW
              </button>
            </div>
        </div>
        <div className="h-[83%] relative">
          <div className="absolute w-full h-full">
              <Image 
              src="/SliderImages/image7.png"  
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              />
            </div>
            <div className="top-[70%] m-11 absolute z-5 text-white font-bold ">
              <div className="text-[2.5rem] text-black">WOMEN'S SUMMER 25</div>
              <button className="m-[2px] text-lg text-black px-5 py-2 border-black border-[1px] hover:text-blue-300 hover:border-blue-300">
                SHOP NOW
              </button>
            </div>
        </div>
        <div className="h-[83%] relative">
          <div className="absolute w-full h-full">
              <Image 
              src="/SliderImages/image4.png"  
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              />
            </div>
            <div className="top-[70%] m-11 absolute z-5 text-white font-bold ">
              <div className="text-[2.5rem]">GIFTS FOR HIM</div>
              <button className="m-[2px] text-lg px-5 py-2 border-white border-[1px] hover:text-blue-300 hover:border-blue-300">
                SHOP NOW
              </button>
            </div>
        </div>
        <div className="h-[83%] relative">
          <div className="absolute w-full h-full">
              <Image 
              src="/SliderImages/image5.png"  
              alt="Description of image"
              fill
              className="object-cover" //object-contain
              />
            </div>
            <div className="top-[70%] m-11 absolute z-5 text-white font-bold ">
              <div className="text-[2.5rem]">EYEWEAR</div>
              <button className="m-[2px] text-lg px-5 py-2 border-white border-[1px] hover:text-blue-300 hover:border-blue-300">
                SHOP NOW
              </button>
            </div>
        </div>

        <footer className="h-[38%]">
          <div className="h-[70%]">
            FOOTER 1
          </div>
          <div className="h-[30% border-t-[1px] border-gray-200">
            FOOTER 2
          </div>
        </footer>

      </div>
    </div>
  );
}
