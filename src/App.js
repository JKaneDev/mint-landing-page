import React from "react";

function App() {
     return (
          <div className='bg-black'>
               <nav className='flex items-center justify-between bg-gray-800 p-4'>
                    <div className='text-white font-bold text-xl'>
                         Site Name
                    </div>
                    <div className='flex space-x-4'>
                         <button className='text-white'>Home</button>
                         <button className='text-white'>About</button>
                         <button className='text-white'>Mint</button>
                         <button className='text-white'>Community</button>
                    </div>
                    <div>
                         <button className='text-white'>Connect Wallet</button>
                    </div>
               </nav>
          </div>
     );
}

export default App;
