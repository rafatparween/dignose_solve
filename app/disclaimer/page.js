// import React from 'react';

// export default function Disclaimer() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 overflow-hidden">
//       <div className="absolute inset-0 flex flex-wrap items-center justify-center">
//         {[...Array(50)].map((_, index) => (
//           <div
//             key={index}
//             className={`star w-2 h-2 ${Math.random() > 0.5 ? 'left-0' : 'right-0'}`}
//             style={{
//               left: `${Math.random() * 100}vw`,
//               top: `${Math.random() * 100}vh`,
//               animationDelay: `${Math.random() * 1.5}s`,
//               animationDuration: `${Math.random() * 1 + 1.5}s`,
//             }}
//           ></div>
//         ))}
//       </div>
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-20 z-10 relative 2xl:mt-[221px]">
//         <h1 className="mb-6 text-[32px] font-bold text-purple-500 cursor-pointer">Disclaimer</h1>
//         <p className="text-gray-700 mb-6">
//           If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <a href="mailto:support@123hpeasyprintsolutions.com" className="text-blue-600">support@123hpeasyprintsolutions.com</a>.
//         </p>
//         <h2 className="text-[32px] font-bold mb-4 text-purple-500 cursor-pointer">Disclaimer for 123hpeasyprintsolutions</h2>
//         <p className="text-gray-700 mb-6">
//           The information provided by 123hpeasyprintsolutions on our website and through our services is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to our website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
//         </p>
//         <p className="text-gray-700 mb-6">
//           Through our website, you may be able to link to other websites that are not under the control of 123hpeasyprintsolutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
//         </p>
//         <p className="text-gray-700 mb-6">
//           123hpeasyprintsolutions reserves the right to modify or update this disclaimer at any time. The most current version will be available on our website, and it is your responsibility to review it periodically.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client"

import Head from 'next/head';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Disclaimer - 123hpsmartassistant</title>
        <meta name="description" content="Legal disclaimer for 123hpsmartassistant services" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 px-6 py-8 sm:px-10 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Legal Disclaimer
              </h1>
              <p className="mt-3 text-lg text-indigo-200">
                Important information regarding your use of 123hpsmartassistant services
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="prose prose-indigo max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">Website Disclaimer</h2>
              <p className="mt-4">
                The information provided by 123hpsmartassistant ("we," "us," or "our") on our website, mobile application, or through any of our services is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">No Liability</h2>
              <p className="mt-4">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our services or reliance on any information provided. Your use of our services and your reliance on any information is solely at your own risk.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">External Links Disclaimer</h2>
              <p className="mt-4">
                Our services may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Professional Disclaimer</h2>
              <p className="mt-4">
                Our services cannot and do not contain specific professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Testimonials Disclaimer</h2>
              <p className="mt-4">
                Our services may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Errors and Omissions Disclaimer</h2>
              <p className="mt-4">
                While we have made every attempt to ensure that the information contained in our services has been obtained from reliable sources, 123hpsmartassistant is not responsible for any errors or omissions or for the results obtained from the use of this information.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Fair Use Disclaimer</h2>
              <p className="mt-4">
                Our services may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of technology, business, and other related subjects. We believe this constitutes a "fair use" of any such copyrighted material.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">No Warranties</h2>
              <p className="mt-4">
                All services are provided "as is," with all faults, and 123hpsmartassistant makes no express or implied representations or warranties of any kind related to our services or the materials contained on our services. Additionally, nothing contained on our services shall be construed as providing consult or advice to you.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this Disclaimer, you can contact us:
              </p>
              <ul className="mt-2 list-disc list-inside">
                <li>By email: legal@123hpsmartassistant.com</li>
                <li>By visiting our contact page</li>
                <li>By mail: 123 Legal Street, San Francisco, CA 94107</li>
              </ul>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <p className="font-medium text-indigo-700">
                  Last updated: June 18, 2023
                </p>
                <p className="mt-2 text-indigo-600">
                  This disclaimer was created using terms from disclaimertemplate.com and modified for our specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;