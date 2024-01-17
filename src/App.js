import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaTimes } from "react-icons/fa";
import {
     avatar1,
     avatar2,
     avatar3,
     avatar4,
     avatar5,
     arrow,
     QR,
} from "./images/index.js";

function App() {
     const [selectedItem, setSelectedItem] = useState(0);
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const images = [avatar1, avatar2, avatar3, avatar4, avatar5];

     const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
     };

     const navigateTo = (section) => {
          setIsSidebarOpen(false);
          switch (section) {
               case "CONNECT":
                    window.scrollTo(0, 0);
                    break;
               case "HOME":
                    window.scrollTo(0, 0);
                    break;
               case "ABOUT":
                    window.scrollTo(0, 0);
                    break;
               case "MINT":
                    window.scrollTo(0, 0);
                    break;
               case "COMMUNITY":
                    window.scrollTo(0, 0);
                    break;
               default:
                    window.scrollTo(0, 0);
                    break;
          }
     };

     return (
          <div className='bg-black min-h-screen font-arian-demi space-y-16 '>
               return (
               <div>
                    <nav className='flex items-center justify-between py-6 xs:px-8 sm:px-4 md:px-12 xl:px-24 3xl:px-44'>
                         <div className='text-white text-2xl font-arian-demi font-xl'>
                              HUMAN{" "}
                              <span className='text-btn-hover text-gradient-to-r from-btn-hover to-btn-hover-2'>
                                   3.0
                              </span>
                         </div>
                         <div className='xs:hidden sm:flex sm:space-x-1 md:space-x-2 lg:space-x-4 xl:space-x-8 2xl:space-x-12 3xl:space-x-16 text-sm'>
                              <button className='text-white hover:text-btn-hover transition-colors duration-300'>
                                   HOME
                              </button>
                              <button className='text-white hover:text-btn-hover transition-colors duration-300'>
                                   ABOUT
                              </button>
                              <button className='text-white hover:text-btn-hover transition-colors duration-300'>
                                   MINT
                              </button>
                              <button className='text-white hover:text-btn-hover transition-colors duration-300'>
                                   COMMUNITY
                              </button>
                         </div>
                         <div className='xs:flex sm:hidden'>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300'
                                   onClick={toggleSidebar}
                              >
                                   MENU
                              </button>
                         </div>
                         <div className='xs:hidden sm:flex'>
                              <button className='py-1.5 px-4 text-black text-sm font-arian-bold bg-gradient-to-r from-btn-hover to-btn-hover-2 rounded-md transition-all duration-500 tracking-wide border border-2 border-border-color hover:bg-black hover:from-transparent hover:to-transparent hover:text-white'>
                                   CONNECT
                              </button>
                         </div>
                    </nav>
                    {isSidebarOpen && (
                         <div className='fixed inset-0 bg-black z-50 flex flex-col justify-start items-center py-4'>
                              <div className='w-full text-white text-2xl font-arian-demi font-xl py-3 px-8 flex flex-row items-center justify-between'>
                                   <div className='justify-self-start'>
                                        HUMAN{" "}
                                        <span className='text-btn-hover text-gradient-to-r from-btn-hover to-btn-hover-2'>
                                             3.0
                                        </span>
                                   </div>
                                   <FaTimes
                                        className='transition-all duration-300 hover:text-btn-hover hover:cursor-pointer'
                                        onClick={toggleSidebar}
                                   />
                              </div>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300 my-2 py-4'
                                   onClick={() => navigateTo("CONNECT")}
                              >
                                   CONNECT
                              </button>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300 my-2 py-4'
                                   onClick={() => navigateTo("HOME")}
                              >
                                   HOME
                              </button>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300 my-2 py-4'
                                   onClick={() => navigateTo("ABOUT")}
                              >
                                   ABOUT
                              </button>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300 my-2 py-4'
                                   onClick={() => navigateTo("MINT")}
                              >
                                   MINT
                              </button>
                              <button
                                   className='text-white hover:text-btn-hover transition-colors duration-300 my-2 py-4'
                                   onClick={() => navigateTo("COMMUNITY")}
                              >
                                   COMMUNITY
                              </button>
                         </div>
                    )}
               </div>
               );
               <div
                    className='relative mx-auto w-full grid justify-center items-center gap-4 p-16 z-10
               xs:grid-cols-[299.7px,47px] xs:grid-rows-[299.7px,80px,50px] 
               sm:grid-cols-[399.6px,68px] sm:grid-rows-[399.6px,100px,64px] 
               md:grid-cols-[499.5px,87.25px] md:grid-rows-[499.5px,150px,70px]
               lg:grid-cols-[666px,120px] lg:grid-rows-[666px,150px,80px]'
               >
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -top-10 -left-0'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -top-10 -right-0 rotate-90'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -bottom-10 -left-0 -rotate-90'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -bottom-10 -right-0 rotate-180'
                    />
                    <img
                         src={QR}
                         alt='QR GIF'
                         className='xs:hidden sm:block object-contain h-24 w-24 absolute left-0 bottom-100 mb-24'
                    />
                    <img
                         src={QR}
                         alt='QR GIF'
                         className='xs:hidden sm:block object-contain h-24 w-24 absolute -right-0 bottom-100 mb-24'
                    />
                    <Carousel
                         selectedItem={selectedItem}
                         onChange={setSelectedItem}
                         autoPlay
                         infiniteLoop
                         showThumbs={false}
                         className='col-start-1 col-end-2 row-start-1 row-end-2 object-contain shadow-custom'
                    >
                         {images.map((image, index) => (
                              <div key={index}>
                                   <img
                                        src={image}
                                        alt={`Avatar ${index + 1}`}
                                        className='h-full w-full shadow-custom'
                                   />
                              </div>
                         ))}
                    </Carousel>
                    <div className='col-start-2 col-end-3 flex flex-col gap-4 items-stretch justify-between h-full'>
                         {images.map((image, index) => (
                              <img
                                   key={index}
                                   src={image}
                                   alt={`Avatar ${index + 1}`}
                                   className='flex-1 object-contain cursor-pointer shadow-custom'
                                   onClick={() => setSelectedItem(index)}
                              />
                         ))}
                    </div>
                    <h1 className='justify-self-center sm:w-full md:w-full lg:w-4/5 col-start-1 col-end-3 row-start-2 row-end-3 text-white sm:text-2xl md:text-3xl lg:text-4xl leading-9 text-center'>
                         Hello friend.{" "}
                         <span className='bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text'>
                              Welcome to the future.
                         </span>{" "}
                         <br />
                         Select your new avatar and transcend to the next level
                         of evolution.
                    </h1>
                    <button className='w-40 mx-auto col-start-1 col-end-3 row-start-3 row-end-4 py-1.5 px-4 text-black text-sm font-arian-bold bg-gradient-to-r from-btn-hover to-btn-hover-2 rounded-md transition-bg duration-500 tracking-wide border-2 border-border-color hover:bg-black hover:from-transparent hover:to-transparent hover:text-white'>
                         MINT
                    </button>
               </div>
          </div>
     );
}

export default App;
