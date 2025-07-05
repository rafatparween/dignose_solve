// // pages/error.js
// export default function ErrorPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//         <div>
//             {/* <img src="https://www.qwebcare.com/help/images/hp-logo.gif"></img> */}
//         </div>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
//         {/* Blue Triangle */}
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-600" 
//              style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>



//         {/* Content */}
//         <div className="p-10">
//           <h1 className="text-2xl font-semibold mb-4">Installing</h1>
//           <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
//           <div className="flex justify-center mb-6">
//             <img
//               src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/printer_error.png" // Replace this with the actual path to the printer error image
//               alt="Printer Error"
//               width={150}
//               height={150}
//             />
//           </div>
//           <p className="text-gray-600 mb-4">
//           A problem occurred while preparing to install software to your system.please restart you computer,and run this installer again.if the problem persists,
       
//           </p>
//           <p className="text-gray-600 mb-4">
//             Please don't try to setup again 
//           </p>
//           <p className="font-semibold">Please Contact HP Support for</p>
//           <a href="#" className="text-blue-600 font-bold text-xl mt-4 inline-block">Through Chat</a>
//         </div>

//         {/* Footer */}
//         <div className="bg-white p-6 flex justify-center items-center">
//           <img
//             src="https://www.qwebcare.com/help/images/hp-logo.gif" // Replace this with the actual path to the HP logo
//             alt="HP Logo"
//             width={50}
//             height={50}
//           />
//           <span className="ml-4 text-blue-600 text-lg">24x7 HP Assistance</span>
//         </div>
//       </div>
//     </div>
//   );
// }




// pages/error.js
// 


import Image from "next/image";
// import JivoChat from "@/app/Jivochat";
export default function ErrorPage() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#C6D3DF] ">
          
    
            <div className="mb-6 flex justify-center">
              <Image
                src="/error.png" 
                alt="Printer Error"
                width={892}
                height={632}
              />
            
          </div>
          {/* <JivoChat/> */}
        </div>
      );
    };




// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white flex justify-center items-center px-4">
//       <div className="w-[819px] h-[600px] border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center items-center p-6">
//         {/* Exclamation Icon */}
//         <div className="w-[63px] h-[63px] rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
//           <span className="text-4xl text-red-600 font-bold">!</span>
//         </div>

//         {/* Alert Title */}
//         <h2 className="text-red-600 text-lg font-bold mb-[18px]">
//           Action Needed: Printer Issue Detected!
//         </h2>

//         {/* Error Message */}
//         <p className="text-[#000000] text-[19px] text-base mb-[20px]">
//           We couldn't complete your request due to the following reasons:
//         </p>

//         {/* Bullet Points */}
//         <ul className="text-[#000000] text-left text-[16px] mb-6 space-y-1">
//           <li>• Printer driver Installation Failed due to Fatal Error C0000022.</li>
//           <li>• Your device firewall may be blocking the installation process.</li>
//           <li>• Your computer registry file is corrupted.</li>
//         </ul>

//         {/* Resolution Message */}
//         <p className="text-[#000000] text-[19px] mb-4">
//           To resolve this issue, contact our Customer Support Team right now.
//         </p>

//         {/* Support Phone */}
//         <p className="text-[#000000] text-[25px] text-xl font-semibold mb-6">
//           Call for Support (Toll Free): <span className="text-black">1855-788-4770</span>
//         </p>

//         {/* Footer */}
//         <p className="text-black text-base text-center">
//           We appreciate your patience and are here to help you get connected as quickly as possible.
//         </p>
//       </div>
//     </div>
//   );
// }
