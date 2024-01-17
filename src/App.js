import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaTimes, FaMinus } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {
     avatar1,
     avatar2,
     avatar3,
     avatar4,
     avatar5,
     arrow,
     roadmap,
     weapon,
     apartment,
     armor,
} from "./images/index.js";
import faqs from "./FAQs.json";

function App() {
     const [selectedItem, setSelectedItem] = useState(0);
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const [counter, setCounter] = useState(0);
     const [isOpen, setIsOpen] = useState(null);

     const images = [avatar1, avatar2, avatar3, avatar4, avatar5];
     const toggleSidebar = () => {
          setIsSidebarOpen(!isSidebarOpen);
     };

     const handleToggle = (id) => {
          setIsOpen(isOpen === id ? null : id);
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

     const incrementQuantity = () => {
          setCounter(counter + 1);
     };

     const decrementQuantity = () => {
          if (counter > 0) {
               setCounter(counter - 1);
          }
     };

     return (
          <div className='bg-black min-h-screen font-arian-demi space-y-16 text-white'>
               <nav className='flex items-center justify-between py-4 xs:px-8 md:px-12 xl:px-24 3xl:px-44'>
                    <div className='text-white text-2xl font-arian-demi font-xl'>
                         HUMAN{" "}
                         <span className='text-btn-hover text-gradient-to-r from-btn-hover to-btn-hover-2'>
                              3.0
                         </span>
                    </div>
                    <div className='xs:hidden sm:flex sm:space-x-2 md:space-x-4 lg:space-x-8 xl:space-x-10 2xl:space-x-12 3xl:space-x-16 text-sm'>
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
               <div
                    className='relative mx-auto w-full h-auto grid justify-center items-center gap-2 xs:px-2 md:px-16 py-8 z-1
                               xs:grid-cols-[299.7px,47px] xs:grid-rows-[299.7px,80px,1fr,50px] 
                               sm:grid-cols-[399.6px,68px] sm:grid-rows-[399.6px,100px,1fr,64px] 
                               md:grid-cols-[499.5px,87.25px] md:grid-rows-[499.5px,150px,1fr,70px]
                               lg:grid-cols-[666px,120px] lg:grid-rows-[666px,150px,1fr,50px]'
               >
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -top-20 -left-0 filter greyscale opacity-70'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -top-20 -right-0 rotate-90 filter greyscale opacity-70'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -bottom-10 -left-0 -rotate-90 filter greyscale opacity-70'
                    />
                    <img
                         src={arrow}
                         alt='arrow GIF'
                         className='object-contain h-24 w-24 absolute -bottom-10 -right-0 rotate-180 filter greyscale opacity-70'
                    />
                    {/* <img
                         src={QR}
                         alt='QR GIF'
                         className='xs:hidden sm:block object-contain h-24 w-24 absolute left-0 bottom-100 mb-24 filter greyscale opacity-40'
                    />
                    <img
                         src={QR}
                         alt='QR GIF'
                         className='xs:hidden sm:block object-contain h-24 w-24 absolute -right-0 bottom-100 mb-24 filter greyscale opacity-40'
                    /> */}
                    <Carousel
                         selectedItem={selectedItem}
                         onChange={setSelectedItem}
                         autoPlay
                         infiniteLoop
                         showThumbs={false}
                         className='col-start-1 col-end-2 row-start-1 row-end-2 object-contain shadow-carousel-custom'
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
                    <div className='col-start-2 col-end-3 flex flex-col gap-4 items-stretch justify-between h-full '>
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
                    <h1 className='justify-self-center sm:w-full md:w-full lg:w-4/5 col-start-1 col-end-3 row-start-2 row-end-3 text-white sm:text-2xl md:text-3xl leading-9 text-center'>
                         Hello friend.{" "}
                         <span className='bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text'>
                              Welcome to the future.
                         </span>{" "}
                         <br />
                         Select your new avatar and transcend to the next level
                         of evolution.
                    </h1>
                    <div className='flex x-space-2 items-center col-start-1 col-end-3 row-start-3 row-end-4 justify-center xs:mb-1 xs:py-2 md:py-4'>
                         <div className='flex flex-col justify-center items-start space-y-2 text-white pr-8 border-r border-[#606060]'>
                              <p className='font-arian-bold xs:text-xs md:text-sm'>
                                   MINT PRICE
                              </p>
                              <p className='font-arian-bold xs:lg md:text-2xl'>
                                   1.00{" "}
                                   <span className='text-border-color'>
                                        ETH
                                   </span>
                              </p>
                              <p className='xs:text-sm md:text-lg'>$2545.29</p>
                         </div>
                         <div className='flex flex-col justify-center items-start space-y-2 text-white pl-8'>
                              <p className='font-arian-bold text-sm'>
                                   MINT ENDS
                              </p>
                              <div className='flex items-center justify-between space-x-4'>
                                   <div className='flex flex-col space-y-2 items-center justify-center'>
                                        <p className='font-arian-bold xs:text-lg md:text-2xl'>
                                             15
                                        </p>
                                        <p className='xs:text-sm md:text-lg'>
                                             Hours
                                        </p>
                                   </div>
                                   <p className='font-arian-bold xs:text-lg md:text-2xl h-full mb-auto'>
                                        :
                                   </p>
                                   <div className='flex flex-col space-y-2 items-center justify-center'>
                                        <p className='font-arian-bold xs:text-lg md:text-2xl'>
                                             02
                                        </p>
                                        <p className='xs:text-sm md:text-lg'>
                                             Minutes
                                        </p>
                                   </div>
                                   <p className='font-arian-bold xs:text-lg md:text-2xl h-full mb-auto'>
                                        :
                                   </p>
                                   <div className='flex flex-col space-y-2 items-center justify-center'>
                                        <p className='font-arian-bold xs:text-lg md:text-2xl'>
                                             13
                                        </p>
                                        <p className='xs:text-sm md:text-lg'>
                                             Seconds
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center justify-center col-start-1 col-end-3 row-start-4 row-end-5 mx-auto space-x-4 justify-self-center sm:w-full md:w-full lg:w-4/5'>
                         <div className='flex items-center justify-between text-xl space-x-2 w-40 py-1 px-4 text-black  font-arian-bold bg-gradient-to-r from-[#0CDF74] to-[#0CEA79] border-[#0CEA79] rounded-md '>
                              <AiOutlineMinusCircle
                                   className='cursor-pointer'
                                   onClick={decrementQuantity}
                              />
                              <p className='text-lg'>{counter}</p>
                              <AiOutlinePlusCircle
                                   className='cursor-pointer'
                                   onClick={incrementQuantity}
                              />
                         </div>
                         <button className='w-40 py-2 px-4 text-black text-sm font-arian-bold bg-gradient-to-r from-btn-hover to-btn-hover-2 rounded-md transition-bg duration-500 tracking-wide border-2 border-border-color hover:bg-black hover:from-transparent hover:to-transparent hover:text-white'>
                              MINT
                         </button>
                    </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full xs:p-12 lg:px-20 2xl:px-44 3xl:px-96 space-y-12'>
                    <h1 className='mx-auto text-center text-4xl'>
                         HOW TO{" "}
                         <span className='text-border-color font-arian-bold'>
                              MINT
                         </span>
                    </h1>
                    <div className='grid lg:grid-cols-2 lg:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1 gap-6'>
                         <div className='flex flex-col justify-center space-y-4 px-8 py-4 border-2 border-border-color rounded-md shadow-blue-custom-left'>
                              <span className='flex items-center w-full justify-between'>
                                   <p mr-auto>1.</p>
                                   <p justify-self-end>
                                        <span className='font-arian-bold text-border-color'>
                                             DOWNLOAD
                                        </span>{" "}
                                        WALLET
                                   </p>
                              </span>
                              <p>
                                   Visit the MetaMask website or go to your
                                   browser's extension store. Search for
                                   MetaMask and install it. Create or import a
                                   wallet, set a strong password, and securely
                                   store your seed phrase. Access MetaMask by
                                   clicking on the extension icon in your
                                   browser.
                              </p>
                         </div>
                         <div className='flex flex-col justify-start space-y-4 px-8 py-4 border-2 border-qty-btn-hover rounded-md shadow-green-custom-right'>
                              <span className='flex items-center w-full justify-between'>
                                   <p mr-auto>2.</p>
                                   <p justify-self-end>
                                        <span className='font-arian-bold text-[#0CEA79]'>
                                             CONNECT
                                        </span>{" "}
                                        WALLET
                                   </p>
                              </span>
                              <p>
                                   Connect your wallet to the site by clicking
                                   on the "Connect Wallet" button and selecting
                                   your preferred wallet provider. Follow the
                                   prompts to authorize the connection and grant
                                   access to your wallet. Once connected, you
                                   will be able to interact with the site's
                                   features and perform transactions.
                              </p>
                         </div>
                         <div className='flex flex-col justify-start space-y-4 px-8 py-4 border-2 border-qty-btn-hover rounded-md shadow-green-custom-left'>
                              <span className='flex items-center w-full justify-between '>
                                   <p mr-auto>3.</p>
                                   <p justify-self-end>
                                        <span className='font-arian-bold text-[#0CEA79]'>
                                             SELECT
                                        </span>{" "}
                                        QUANTITY
                                   </p>
                              </span>
                              <p>
                                   Choose the desired quantity of NFTs to mint.
                                   You can select up to a maximum of 20 NFTs per
                                   transaction. The price per NFT is 0.05 ETH.
                                   Once you have selected the desired quantity,
                                   click the "Mint" button to proceed.
                              </p>
                         </div>
                         <div className='flex flex-col justify-start space-y-4 px-8 py-4 border-2 border-border-color rounded-md shadow-blue-custom-right'>
                              <span className='flex items-center w-full justify-between'>
                                   <p mr-auto>4.</p>
                                   <p justify-self-end>
                                        <span className='font-arian-bold text-border-color'>
                                             CONFIRM
                                        </span>{" "}
                                        TRANSACTION
                                   </p>
                              </span>
                              <p>
                                   To confirm the transaction, review and verify
                                   the details on your wallet provider's
                                   interface. Complete the transaction by
                                   clicking "Confirm" or following the prompts.
                                   Note that a small fee (gas) may be required.
                              </p>
                         </div>
                    </div>
               </div>
               <div className='flex flex-col justify-center items-center p-16 space-y-2'>
                    <h1 className='text-4xl mb-16'>
                         ROAD<span className='text-border-color'>MAP</span>
                    </h1>
                    <img
                         src={roadmap}
                         alt='roadmap'
                         className='xs:w-9/10 lg:w-5/6'
                    />
                    <div className='flex flex-col justify-center items-center space-y-4 pt-8'>
                         <h1 className='text-3xl font-arian-bold'>
                              Q<span className='text-border-color'>1</span>
                         </h1>
                         <p className='font-arian-bold text-xl'>Onboarding</p>
                         <p className='w-3/4 text-center'>
                              The team will be focusing on developing new
                              features, improving user experience, and expanding
                              the platform's functionality in Q1. One of the
                              exciting developments planned for this quarter is
                              the launch of a futuristic VR metaverse. This
                              metaverse will provide users with an immersive
                              virtual reality experience, allowing them to
                              explore unique digital worlds, interact with other
                              users, and participate in various activities. The
                              team is dedicated to creating a cutting-edge
                              metaverse that pushes the boundaries of technology
                              and offers an unparalleled virtual experience.
                         </p>
                    </div>
               </div>
               <div className='flex flex-col justify-center items-center space-y-16 p-16'>
                    <h1 className='text-4xl'>
                         <span className='text-border-color font-arian-bold'>
                              F
                         </span>
                         requently{" "}
                         <span className='text-border-color font-arian-bold'>
                              A
                         </span>
                         nswered{" "}
                         <span className='text-border-color font-arian-bold'>
                              Q
                         </span>
                         uestions
                    </h1>
                    <div className='grid gap-4 grid-cols-2 w-full'>
                         <div className='flex flex-col justify-start space-y-4'>
                              {faqs
                                   .filter((_, index) => index % 2 === 0)
                                   .map((faq, index) => (
                                        <div
                                             key={index}
                                             className='flex flex-col justify-center items-center space-y-4 border-2 border-border-color px-8 py-4 rounded-md shadow-blue-custom-left-2'
                                        >
                                             <div className='relative flex items-center justify-between w-full'>
                                                  <h1 className='text-xl font-arian-bold'>
                                                       {faq.question}
                                                  </h1>
                                                  <FaMinus
                                                       onClick={() =>
                                                            handleToggle(
                                                                 index * 2
                                                            )
                                                       }
                                                       className='absolute right-0 top-0 ml-auto cursor-pointer justify-end'
                                                  />
                                                  <FaMinus
                                                       onClick={() =>
                                                            handleToggle(
                                                                 index * 2
                                                            )
                                                       }
                                                       className={`absolute top-0 right-0 ml-auto cursor-pointer justify-end transition-transform duration-500 ease-in-out ${
                                                            isOpen === index * 2
                                                                 ? "-rotate-180"
                                                                 : "rotate-90"
                                                       }`}
                                                  />
                                             </div>
                                             <div
                                                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                                       isOpen === index * 2
                                                            ? "max-h-[1000px]"
                                                            : "max-h-0"
                                                  }`}
                                             >
                                                  <p>{faq.answer}</p>
                                             </div>
                                        </div>
                                   ))}
                         </div>
                         <div className='flex flex-col justify-start space-y-4'>
                              {faqs
                                   .filter((_, index) => index % 2 !== 0)
                                   .map((faq, index) => (
                                        <div
                                             key={index}
                                             className='flex flex-col justify-center items-center space-y-4 border-2 border-[#0CDF74] px-8 py-4 rounded-md shadow-green-custom-left-2'
                                        >
                                             <div className='relative flex items-center justify-between w-full'>
                                                  <h1 className='text-xl font-arian-bold'>
                                                       {faq.question}
                                                  </h1>
                                                  <FaMinus
                                                       onClick={() =>
                                                            handleToggle(
                                                                 index * 2 + 1
                                                            )
                                                       }
                                                       className='absolute right-0 top-0 transitionml-auto cursor-pointer justify-end'
                                                  />
                                                  <FaMinus
                                                       onClick={() =>
                                                            handleToggle(
                                                                 index * 2 + 1
                                                            )
                                                       }
                                                       className={`absolute top-0 right-0 ml-auto cursor-pointer justify-end transition-transform duration-700 ease-in-out ${
                                                            isOpen ===
                                                            index * 2 + 1
                                                                 ? "-rotate-180"
                                                                 : "rotate-90"
                                                       }`}
                                                  />
                                             </div>
                                             <div
                                                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                       isOpen === index * 2 + 1
                                                            ? "max-h-[1000px]"
                                                            : "max-h-0"
                                                  }`}
                                             >
                                                  <p>{faq.answer}</p>
                                             </div>
                                        </div>
                                   ))}
                         </div>
                    </div>
               </div>
               <div className='flex flex-col justify-center items-center space-y-16 p-2 w-full'>
                    <h1 className='text-4xl'>
                         COMING <span className='text-border-color'>SOON</span>
                    </h1>
                    <div className='w-4/5 grid grid-cols-3 rounded-md'>
                         <div className='flex flex-col justify-start items-center space-y-4 p-4 h-auto w-full border-2  border-[#606060]'>
                              <img
                                   src={weapon}
                                   alt='weapons'
                                   className='object-contain min-h-400px w-full rounded-sm'
                              />
                              <p className='text-center font-arian-bold'>
                                   <span className='text-border-color'>
                                        WEAPONS
                                   </span>{" "}
                                   UPGRADES
                              </p>
                              <p>
                                   The HUMAN 3.0 metaverse update will introduce
                                   AR targeting, customizable weapon skins,
                                   energy weapons, and advanced mechanics.
                                   Enhanced environmental interactions and
                                   audio-visual effects aim to enrich the
                                   immersive combat experience across multiple
                                   platforms.
                              </p>
                              <button className='font-arian-bold border-0 bg-black text-white transition-all duration-300 hover:text-border-color hover:cursor-pointer'>
                                   LEARN MORE
                              </button>
                         </div>
                         <div className='flex flex-col justify-start items-center space-y-4 p-4 h-auto w-full border-2 border-r-0 border-l-0 border-[#606060]'>
                              <img
                                   src={armor}
                                   alt='armor'
                                   className='object-contain min-h-400px w-full rounded-sm'
                              />
                              <p className='text-center font-arian-bold'>
                                   <span className='text-border-color'>
                                        ARMOR
                                   </span>{" "}
                                   UPGRADES
                              </p>
                              <p>
                                   The upcoming armor upgrades in HUMAN 3.0 will
                                   feature adaptive camouflage, enhanced
                                   durability, integrated health monitoring, and
                                   AR interfaces. These improvements focus on
                                   boosting defense, tactical advantage, and
                                   player immersion in the metaverse's diverse
                                   environments.
                              </p>
                              <button className='font-arian-bold border-0 bg-black text-white mt-auto justify-self-end transition-all duration-300 hover:text-border-color hover:cursor-pointer'>
                                   LEARN MORE
                              </button>
                         </div>
                         <div className='flex flex-col justify-start items-center space-y-4 p-4 h-auto w-full border-2  border-[#606060]'>
                              <img
                                   src={apartment}
                                   alt='apartment'
                                   className='object-contain min-h-400px w-full rounded-sm'
                              />
                              <p className='text-center font-arian-bold'>
                                   <span className='text-border-color'>
                                        HIGH-END
                                   </span>{" "}
                                   HOMES
                              </p>
                              <p>
                                   The latest HUMAN 3.0 update introduces
                                   purchasable high-end homes, including
                                   luxurious penthouses, sprawling mansions, and
                                   secure underground bunkers. These properties
                                   offer strategic advantages and in-metaverse
                                   entertainment, enhancing player experience
                                   with lavish interiors and advanced
                                   functionalities.
                              </p>
                              <button className='font-arian-bold border-0 bg-black text-white mt-auto justify-self-end transition-all duration-300 hover:text-border-color hover:cursor-pointer'>
                                   LEARN MORE
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default App;
