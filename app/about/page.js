// "use client";
// import { motion } from 'framer-motion';

// const About = () => {
//     return (
//         <div className="relative overflow-hidden">
//             {/* Background Animation */}
//             <div className="absolute inset-0 z-0  bg-gradient-to-br from-purple-900 via-blue-900 text-white"></div>
//             <div className="flex flex-col lg:flex-row items-center justify-between relative p-10 z-10">
//                 <div className="relative w-full md:w-1/2 mb-10 lg:mb-0">
//                     <div className="p-4 bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800 rounded-xl overflow-hidden">
//                         <motion.img
//                             src="https://www.shutterstock.com/image-photo/office-conference-room-meeting-diverse-260nw-2104484045.jpg"
//                             alt="Team working"
//                             className="w-full h-[400px] object-cover rounded-xl"
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                         />
//                     </div>
//                 </div>
//                 <div className="lg:w-1/2 lg:pl-10">
//                     <motion.h2
//                         className="text-4xl font-bold text-white mb-6"
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         About <span className="text-purple-300 cursor-pointer">Us</span>
//                     </motion.h2>
//                     <motion.p
//                         className="text-gray-200 mb-6"
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         123hpeasyprintsolutions is a leading technology solutions provider dedicated to helping businesses of all sizes achieve their digital transformation goals. Our team of experts specializes in delivering cutting-edge solutions in Digital Marketing, App Development, Web Designing & Development, Software Development, and Salesforce Development.
//                     </motion.p>
//                     <motion.p
//                         className="text-gray-200 mb-6"
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                     >
//                         With years of experience and a commitment to innovation, we provide tailored services that drive growth, improve efficiency, and enhance customer experiences. Whether you're a startup looking to establish a digital presence or a large enterprise seeking to optimize operations, we have the expertise to bring your vision to life.
//                     </motion.p>
//                     <motion.p
//                         className="text-gray-200 mb-6"
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.6 }}
//                     >
//                         At 123hpeasyprintsolutions, we believe in building long-term partnerships with our clients. We work closely with you to understand your business needs, offering personalized solutions that align with your goals and drive success. Our collaborative approach ensures that we are not just a service provider, but a true partner in your journey.
//                     </motion.p>
//                     <motion.p
//                         className="text-gray-200 mb-6"
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.8 }}
//                     >
//                         Let us help you navigate the digital landscape and unlock new opportunities for growth. Together, we can create strategies that not only enhance your online presence but also streamline your operations and elevate customer engagement.
//                     </motion.p>
//                     <motion.h2
//                         className="text-3xl font-bold text-white mb-6 mt-10"
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Why <span className="text-purple-300 cursor-pointer">Choose Us</span>?
//                     </motion.h2>
//                     <motion.p
//                         className="text-gray-200 mb-6"
//                         initial={{ y: -10, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         Our mission is to empower businesses with innovative technology solutions that are not only effective but also sustainable. We take pride in our ability to adapt to the ever-changing digital world, ensuring that our clients are always ahead of the curve.
//                     </motion.p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                         {[
//                             {
//                                 icon: '🚀',
//                                 title: 'Digital Transformation',
//                                 description: 'We help businesses embrace digital tools to enhance their operations and services.',
//                             },
//                             {
//                                 icon: '📈',
//                                 title: 'Growth Driven',
//                                 description: 'Our solutions are designed to drive growth and improve efficiency for all clients.',
//                             },
//                             {
//                                 icon: '🤝',
//                                 title: 'Partnership Focused',
//                                 description: 'We work closely with you to ensure solutions align with your business goals.',
//                             },
//                             {
//                                 icon: '🌟',
//                                 title: 'Customer Experience',
//                                 description: 'We prioritize enhancing customer experiences through innovative strategies.',
//                             },
//                         ].map(({ icon, title, description }, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="flex items-start bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <div className="text-blue-600 text-4xl mr-4">{icon}</div>
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//                                     <p className="text-gray-700">{description}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

"use client"

import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'AI expert with 15+ years in machine learning and business automation.',
      image: '/about1.jpg' // Replace with your actual image path
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Software architect specializing in scalable cloud solutions and integrations.',
      image: '/about3.jpg'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product visionary with a passion for user-centered design and innovation.',
      image: '/about4.jpg'
    },
    {
      id: 4,
      name: 'Priya Patel',
      role: 'Customer Success',
      bio: 'Dedicated to ensuring clients maximize value from our solutions.',
      image: '/about2.jpg'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company founded with vision for smart automation' },
    { year: '2019', event: 'Launched first AI-powered assistant product' },
    { year: '2020', event: 'Reached 100+ enterprise customers' },
    { year: '2021', event: 'Expanded to international markets' },
    { year: '2022', event: 'Named "Most Innovative AI Solution" by Tech Awards' },
    { year: '2023', event: 'Surpassed 500+ clients worldwide' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>About Us - 123hpsmartassistant</title>
        <meta name="description" content="Learn about our company and mission" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative bg-indigo-700 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                      <span className="block">Our Story at</span>
                      <span className="block text-indigo-200">123hpsmartassistant</span>
                    </h1>
                    <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Pioneering intelligent automation solutions that transform businesses through AI innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-indigo-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-bold text-indigo-600 opacity-20">123</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Empowering businesses through intelligent automation
              </p>
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                At 123hpsmartassistant, we believe that artificial intelligence should be accessible, practical, and transformative for businesses of all sizes. Our mission is to create smart solutions that automate complex processes, uncover valuable insights, and enable teams to focus on what matters most.
              </p>
              <p>
                Founded in 2018, we've grown from a small team of AI enthusiasts to a leading provider of enterprise automation solutions. What sets us apart is our commitment to building tools that adapt to your business - not the other way around.
              </p>
              <p>
                Every day, we're pushing the boundaries of what's possible with machine learning and natural language processing to create assistants that don't just respond, but anticipate and learn.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Principles that guide everything we do
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Innovation',
                    description: 'We constantly push boundaries to develop cutting-edge solutions that redefine what\'s possible with AI.',
                    icon: (
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Integrity',
                    description: 'We build trust through transparency, ethical AI practices, and responsible data handling.',
                    icon: (
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Customer Success',
                    description: 'Our solutions are measured by the value they create for our clients, not just technical achievements.',
                    icon: (
                      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                  },
                ].map((value) => (
                  <div key={value.name} className="pt-6">
                    <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                            {value.icon}
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Journey</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Milestones along the way
              </p>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div className="absolute left-1/2 w-0.5 h-full bg-indigo-200 transform -translate-x-1/2"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-md p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-50'}`}>
                      <div className="flex items-center mb-2">
                        <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-indigo-100 text-indigo-600'} text-lg font-bold`}>
                          {milestone.year}
                        </div>
                        <div className={`ml-4 text-lg font-bold ${index % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>
                          {milestone.event}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet Our Team</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The people behind 123hpsmartassistant
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Passionate experts dedicated to advancing AI for business transformation.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((person) => (
                <div key={person.id} className="flex flex-col items-center text-center">
                  <div className="relative h-40 w-40 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={person.image}
                      alt={person.name}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                  <p className="mt-2 text-gray-500">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to experience</span>
              <span className="block">smart automation?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Discover what 123hpsmartassistant can do for your business.
            </p>
            <button className="mt-8 w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
