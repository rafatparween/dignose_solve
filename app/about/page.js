

// "use client"

// import Head from 'next/head';
// import Image from 'next/image';

// const AboutPage = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: 'Alex Johnson',
//       role: 'Founder & CEO',
//       bio: 'AI expert with 15+ years in machine learning and business automation.',
//       image: '/about1.jpg' // Replace with your actual image path
//     },
//     {
//       id: 2,
//       name: 'Sarah Chen',
//       role: 'CTO',
//       bio: 'Software architect specializing in scalable cloud solutions and integrations.',
//       image: '/about3.jpg'
//     },
//     {
//       id: 3,
//       name: 'Michael Rodriguez',
//       role: 'Head of Product',
//       bio: 'Product visionary with a passion for user-centered design and innovation.',
//       image: '/about4.jpg'
//     },
//     {
//       id: 4,
//       name: 'Priya Patel',
//       role: 'Customer Success',
//       bio: 'Dedicated to ensuring clients maximize value from our solutions.',
//       image: '/about2.jpg'
//     }
//   ];

//   const milestones = [
//     { year: '2018', event: 'Company founded with vision for smart automation' },
//     { year: '2019', event: 'Launched first AI-powered assistant product' },
//     { year: '2020', event: 'Reached 100+ enterprise customers' },
//     { year: '2021', event: 'Expanded to international markets' },
//     { year: '2022', event: 'Named "Most Innovative AI Solution" by Tech Awards' },
//     { year: '2023', event: 'Surpassed 500+ clients worldwide' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
//       <Head>
//         <title>About Us - 123hpsmartassistant</title>
//         <meta name="description" content="Learn about our company and mission" />
//       </Head>

//       <main>
//         {/* Hero Section */}
//         <div className="relative bg-indigo-700 overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//               <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
//                 <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                   <div className="sm:text-center lg:text-left">
//                     <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
//                       <span className="block">Our Story at</span>
//                       <span className="block text-indigo-200">123hpsmartassistant</span>
//                     </h1>
//                     <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                      Hewlett Printers Solution is an independent content platform dedicated to helping users resolve everyday printer issues through easy-to-understand troubleshooting guides and how-to articles. Our mission is to provide clear, step-by-step information for all major printer brands, including HP, Canon, Epson, Brother, and more.

// Whether you’re facing connectivity problems, ink cartridge errors, setup challenges, or offline issues, our articles aim to help users identify the cause and apply commonly effective solutions on their own.

// We do not offer live technical support, remote repair services, or hardware sales. All content is purely for educational and informational purposes to help users troubleshoot on their own.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//             <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-indigo-800">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-9xl font-bold text-indigo-600 opacity-20">123</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="py-16 bg-white overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
//             <div className="text-lg max-w-prose mx-auto">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Empowering businesses through intelligent automation
//               </p>
//             </div>
//             <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
//               <p>
//                 At 123hpsmartassistant, we believe that artificial intelligence should be accessible, practical, and transformative for businesses of all sizes. Our mission is to create smart solutions that automate complex processes, uncover valuable insights, and enable teams to focus on what matters most.
//               </p>
//               <p>
//                 Founded in 2018, we've grown from a small team of AI enthusiasts to a leading provider of enterprise automation solutions. What sets us apart is our commitment to building tools that adapt to your business - not the other way around.
//               </p>
//               <p>
//                 Every day, we're pushing the boundaries of what's possible with machine learning and natural language processing to create assistants that don't just respond, but anticipate and learn.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="py-16 bg-gray-50 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Principles that guide everything we do
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   {
//                     name: 'Innovation',
//                     description: 'We constantly push boundaries to develop cutting-edge solutions that redefine what\'s possible with AI.',
//                     icon: (
//                       <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     name: 'Integrity',
//                     description: 'We build trust through transparency, ethical AI practices, and responsible data handling.',
//                     icon: (
//                       <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     name: 'Customer Success',
//                     description: 'Our solutions are measured by the value they create for our clients, not just technical achievements.',
//                     icon: (
//                       <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                       </svg>
//                     ),
//                   },
//                 ].map((value) => (
//                   <div key={value.name} className="pt-6">
//                     <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
//                       <div className="-mt-6">
//                         <div>
//                           <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
//                             {value.icon}
//                           </span>
//                         </div>
//                         <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
//                         <p className="mt-5 text-base text-gray-500">{value.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className="py-16 bg-white overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Journey</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Milestones along the way
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="relative">
//                 <div className="absolute left-1/2 w-0.5 h-full bg-indigo-200 transform -translate-x-1/2"></div>
                
//                 {milestones.map((milestone, index) => (
//                   <div key={milestone.year} className={`relative mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
//                     <div className={`max-w-md p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-50'}`}>
//                       <div className="flex items-center mb-2">
//                         <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-indigo-100 text-indigo-600'} text-lg font-bold`}>
//                           {milestone.year}
//                         </div>
//                         <div className={`ml-4 text-lg font-bold ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>
//                           {milestone.event}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="py-16 bg-gray-50 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet Our Team</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 The people behind 123hpsmartassistant
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Passionate experts dedicated to advancing AI for business transformation.
//               </p>
//             </div>

//             <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//               {teamMembers.map((person) => (
//                 <div key={person.id} className="flex flex-col items-center text-center">
//                   <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-lg">
//                     <Image
//                       src={person.image}
//                       alt={person.name}
//                       layout="fill"
//                       objectFit="cover"
//                       className="hover:scale-105 transition duration-300"
//                     />
//                   </div>
//                   <h3 className="mt-6 text-lg font-medium text-gray-900">{person.name}</h3>
//                   <p className="text-indigo-600">{person.role}</p>
//                   <p className="mt-2 text-gray-500">{person.bio}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-indigo-700">
//           <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//               <span className="block">Ready to experience</span>
//               <span className="block">smart automation?</span>
//             </h2>
//             <p className="mt-4 text-lg leading-6 text-indigo-200">
//               Discover what 123hpsmartassistant can do for your business.
//             </p>
//             <button className="mt-8 w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle, faBullseye, faListAlt, faShieldAlt, faHandshake, faSmile } from '@fortawesome/free-solid-svg-icons';

// const content = [
//   {
//     id: 2,
//     title: 'Who We Are',
//     icon: faInfoCircle,
//     content:
//       'At Hewlett Hub Solutions ,we are your trusted specialists in resolving printer issues across all brands and models. With a strong focus on restoring your printers to full functionality, we ensure that your devices are up and running smoothly, minimizing downtime and frustration. Additionally, we offer a wide range of tech services designed to meet your every need.',
//   },
//   {
//     id: 3,
//     title: 'Our Mission',
//     icon: faBullseye,
//     content:
//       'Our mission is to deliver reliable and efficient solutions to all your tech challenges. We aim to simplify your tech experience by providing top-notch support and services, so you can enjoy a hassle-free experience with your technology. Your satisfaction and the seamless functioning of your devices are our top priorities.',
//   },
//   {
//     id: 4,
//     title: 'What We Offer',
//     icon: faListAlt,
//     content:
//       'We provide a comprehensive range of services, including Printer Repairs: Expert service for printers of all brands and models.New Computer Setup: Ensuring your new devices are configured and ready to go.Operating System Installations: Smooth installation or re-installation of operating systems.Software Configuration: Customized setup and configuration of software.Computer Repair: Expert repairs to keep your devices running smoothly.Data Backup and Transfer: Secure and efficient data management.Virus Removal and Cleanup: Thorough cleaning of your devices to protect your data and performance.',
//   },
//   {
//     id: 5,
//     title: 'Warranty and Returns',
//     icon: faShieldAlt,
//     content:
//       'We stand by the quality of our services and products. All services and products come with a warranty to ensure your satisfaction. If you’re not completely satisfied, we offer easy and hassle-free returns. Our goal is to provide you with peace of mind, knowing that your technology is in good hands.',
//   },
//   {
//     id: 6,
//     title: 'Our Commitment',
//     icon: faHandshake,
//     content:
//       'At Hewlett Hub Solutions, we are committed to providing exceptional service and support. We believe in building long-term relationships with our clients by offering dependable solutions and ensuring that your technology works seamlessly. Our team of experts is dedicated to your success, working tirelessly to resolve any tech issues you may encounter.',
//   },
//   {
//     id: 7,
//     title: 'Thank You',
//     icon: faSmile,
//     content:
//       'Thank you for choosing Hewlett Hub Solutions as your trusted partner for all your tech needs. We appreciate the opportunity to serve you and are committed to ensuring your satisfaction with our services. Your trust in us drives our dedication to delivering reliable, efficient, and high-quality solutions. We look forward to continuing to support you and helping you navigate your tech challenges with ease.',
//   },
// ];

// const About = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-10">
//       <div className="container mx-auto px-4 mt-20 bg-white shadow-lg p-8 rounded-lg">
//         <h1 className="text-[#0C71C3] text-4xl font-extrabold text-center mb-10">
//           Welcome to Hewlett Hub Solutions
//         </h1>
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {content.map((section) => (
//             <div
//               key={section.id}
//               className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//             >
//               {section.title && (
//                 <h2 className="text-3xl text-[#0C71C3] mb-4 text-center flex items-center justify-center space-x-4">
//                   <FontAwesomeIcon icon={section.icon} className="text-[#0C71C3] text-2xl" />
//                   <span>{section.title}</span>
//                 </h2>
//               )}
//               <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
//                 {section.content}
//               </p>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;

'use client';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                        Why Choose Hewlett Printers Solution for Digital Marketing & Development?
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        At Hewlett Printers Solution, we are more than just a digital marketing and development company—we are your strategic partner in growth. Whether you need a powerful website, an engaging app, or an effective digital marketing strategy, we provide tailored solutions that deliver real results.
                    </p>
                </div>

                {/* Section 1: Proven Expertise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">1. Proven Expertise in Web & App Development</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Custom Solutions:</strong> We don’t believe in one-size-fits-all. We create custom websites and apps tailored to your business needs.</li>
                            <li><strong>Cutting-Edge Technology:</strong> Our team specializes in responsive, high-performance, and secure websites and applications.</li>
                            <li><strong>Seamless UX/UI:</strong> Every project is designed with the user in mind, ensuring maximum engagement and satisfaction.</li>
                        </ul>
                    </div>

                    {/* Section 2: Digital Marketing */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">2. Result-Driven Digital Marketing</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>SEO Excellence:</strong> We implement advanced SEO strategies that improve search rankings and drive organic traffic.</li>
                            <li><strong>Social Media Growth:</strong> We help brands increase engagement and reach their target audience on platforms like Facebook, Instagram, LinkedIn, and more.</li>
                            <li><strong>Paid Advertising (PPC):</strong> Our Google Ads & social media advertising campaigns are optimized for maximum ROI.</li>
                            <li><strong>Content Marketing:</strong> From blogs to video content, we create compelling content that builds brand authority and connects with your audience.</li>
                        </ul>
                    </div>

                    {/* Section 3: Analytics */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">3. Data-Driven Strategy & Analytics</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Real-Time Performance Tracking:</strong> We use advanced analytics to track performance, optimize strategies, and improve conversions.</li>
                            <li><strong>A/B Testing & Optimization:</strong> We continually test and refine campaigns to ensure the highest possible success rates.</li>
                            <li><strong>Transparent Reporting:</strong> You’ll always know how your campaigns are performing with detailed reports and insights.</li>
                        </ul>
                    </div>
                </div>

                {/* Section 4: Testimonials */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-blue-600">Trusted by Businesses Worldwide</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our proven track record and commitment to excellence has earned us a strong reputation for trust, reliability, and innovation.
                    </p>
                </div>

                {/* Section 5: Scalable Services */}
                <div className="mt-16 bg-blue-600 text-white p-12 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold">5. Comprehensive & Scalable Services</h2>
                    <p className="mt-4 text-lg">
                        Whether you’re a startup, growing business, or established brand, our solutions scale with your needs. We offer end-to-end services, from website development to marketing execution, eliminating the need for multiple service providers.
                    </p>
                </div>

                {/* Section 6: Security */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">6. Security & Compliance You Can Trust</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Secure Web & App Development:</strong> We prioritize data security, encryption, and compliance with industry standards.</li>
                            <li><strong>Ad Policy Compliance:</strong> We ensure all digital marketing campaigns follow Google Ads, Facebook, and SEO best practices to avoid violations.</li>
                        </ul>
                    </div>

                    {/* Section 7: Support */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">7. Dedicated Customer Support</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>24/7 Support:</strong> Our team is available around the clock to assist with any questions or technical issues.</li>
                            <li><strong>Personalized Attention:</strong> We assign a dedicated project manager to every client for smooth communication and seamless execution.</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-blue-600">Get Started with Hewlett Printers Solution Today!</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Whether you need a stunning website, an engaging mobile app, or a data-driven digital marketing strategy, Hewlett Printers Solution is the partner you can trust to grow your business and maximize ROI.
                    </p>
                    <Link legacyBehavior href="/query">
                        <a className="mt-8 inline-block py-3 px-6 text-lg font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600">
                            Let’s Talk! – Contact us today for a free consultation!
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
