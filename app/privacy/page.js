// export default function Privacy() {
//   return (
//     <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white">
//       <h2 className="text-3xl font-bold text-white mb-8 text-center 2xl:mt-[-5px]">Privacy Policy</h2>
//       <div className="space-y-8 text-white">
        
//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Introduction</h3>
//           <p>
//             Welcome to 123hpeasyprintsolutions. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services or visit our website.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Information We Collect</h3>
//           <p>
//             We collect personal information that you provide to us when you engage with our services, which may include your name, email address, phone number, payment details, and any other relevant information necessary for delivering our services effectively.
//           </p>
//           <p>
//             Additionally, we may automatically collect information about your device, browser type, IP address, and how you interact with our website through cookies and similar technologies.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h3>
//           <p>
//             The information we collect is used to process your orders, deliver our services, improve user experience, and communicate with you. We may also use your information to send promotional offers and updates if you have opted in to receive them.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Information Sharing</h3>
//           <p>
//             We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in providing our services, as long as they agree to keep this information confidential.
//           </p>
//           <p>
//             We may also disclose your information when required by law or to protect our rights and property, or the safety of others.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Data Security</h3>
//           <p>
//             We implement various security measures to protect your personal information. Your data is stored on secure servers and is only accessible by authorized personnel who are bound by confidentiality agreements.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Your Consent</h3>
//           <p>
//             By using our website, you consent to our Privacy Policy and agree to its terms. If we make changes to our Privacy Policy, we will update the modification date. We encourage you to review this policy periodically.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Changes to Our Privacy Policy</h3>
//           <p>
//             123hpeasyprintsolutions may update this Privacy Policy from time to time. Significant changes will be communicated through a notice on our website. Changes will take effect immediately upon posting.
//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
//           <p>
//             If you have any questions or concerns about this Privacy Policy, please contact us at:
//           </p>
//           <p className="mt-4">
//             Email: support@123hpeasyprintsolutions.com <br />
//             Phone: +1-800-555-1234 <br />
//             Address: 123hpeasyprintsolutions, 123 Tech Drive, Innovation City, USA
//           </p>
//         </section>
        
//       </div>
//     </div>
//   );
// }


"use client"

import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Privacy Policy - 123hpsmartassistant</title>
        <meta name="description" content="How we collect, use, and protect your personal information" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 px-6 py-8 sm:px-10 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Privacy Policy
              </h1>
              <p className="mt-3 text-lg text-indigo-200">
                Effective Date: June 18, 2023
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="prose prose-indigo max-w-none">
              <p className="text-lg font-medium">
                At 123hpsmartassistant, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              <p className="mt-4">
                We collect several types of information from and about users of our services:
              </p>
              
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Personal Information</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (processed securely by our payment processors)</li>
                <li>Demographic information (job title, company name)</li>
              </ul>
              
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Usage Data</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>IP addresses and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our services</li>
                <li>Other diagnostic data</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              <p className="mt-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis to improve our services</li>
                <li>To monitor usage patterns and detect technical issues</li>
                <li>For compliance with legal obligations</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Legal Basis for Processing (GDPR)</h2>
              <p className="mt-4">
                For users in the European Economic Area (EEA), our legal basis for collecting and using personal information depends on the context:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>Contractual necessity:</strong> When we need the information to perform our contract with you</li>
                <li><strong>Legitimate interests:</strong> When processing serves our legitimate business interests</li>
                <li><strong>Legal compliance:</strong> When we need to comply with legal obligations</li>
                <li><strong>Consent:</strong> Where we've obtained your consent for specific processing</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Data Sharing and Disclosure</h2>
              <p className="mt-4">
                We may share your information in the following situations:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services for us</li>
                <li><strong>Business Transfers:</strong> In connection with any merger or sale of company assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Data Retention</h2>
              <p className="mt-4">
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Data Security</h2>
              <p className="mt-4">
                We implement appropriate technical and organizational measures to protect personal information, including:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Your Data Protection Rights</h2>
              <p className="mt-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Request transfer of data to another organization</li>
                <li><strong>Objection:</strong> Object to our processing of your data</li>
                <li><strong>Withdraw Consent:</strong> Where we rely on consent</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">8. California Privacy Rights (CCPA)</h2>
              <p className="mt-4">
                California residents have the right to:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Know what personal information is collected about them</li>
                <li>Request deletion of personal information</li>
                <li>Opt-out of the sale of personal information</li>
                <li>Not receive discriminatory treatment for exercising privacy rights</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Cookies and Tracking Technologies</h2>
              <p className="mt-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Authenticate users and prevent fraudulent use</li>
                <li>Remember user preferences and settings</li>
                <li>Analyze how our services perform</li>
                <li>Deliver targeted advertising (where permitted)</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">10. International Data Transfers</h2>
              <p className="mt-4">
                Your information may be transferred to — and maintained on — computers located outside of your country where data protection laws may differ. We implement appropriate safeguards for such transfers.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">11. Children's Privacy</h2>
              <p className="mt-4">
                Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">12. Changes to This Policy</h2>
              <p className="mt-4">
                We may update our Privacy Policy periodically. We will notify you of changes by updating the "Effective Date" and posting the new policy.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">13. Contact Us</h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy or wish to exercise your rights:
              </p>
              <ul className="mt-2 list-disc list-inside">
                <li>Email: privacy@123hpsmartassistant.com</li>
                <li>Mail: 123 Privacy Office, San Francisco, CA 94107</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <p className="font-medium text-indigo-700">
                  This Privacy Policy is compliant with GDPR, CCPA, and other major privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;