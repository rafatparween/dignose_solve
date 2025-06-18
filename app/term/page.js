// 'use client';

// const Term = () => {
//     return (
//         <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white p-10">
//             <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

//             <div className="space-y-8 text-[white] leading-relaxed">
//                 <section>
//                     <h2 className="text-xl font-bold mb-2">Welcome to 123hpeasyprintsolutions</h2>
//                     <p>These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our services, you agree to be bound by the following terms. If you do not agree with these terms, please refrain from using our services.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
//                     <p>These terms and conditions govern your use of our website and services, including but not limited to Digital Marketing, App Development, Web Designing & Development, Software Development, and Salesforce Development. By using our website and services, you accept these terms in full. If you disagree with any part of these terms, you must not use our services.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">2. Services</h2>
//                     <p>123hpeasyprintsolutions offers technology and marketing services as outlined on our website. We reserve the right to modify or discontinue any service at any time without notice. The pricing and scope of services will be clearly communicated before the initiation of any project. Custom work will require specific contracts that outline the deliverables, timelines, and payment structure.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">3. Client Responsibilities</h2>
//                     <p>You, as the client, are responsible for providing accurate information necessary for the completion of services. This includes, but is not limited to, project details, content, and access to required platforms. Delays caused by the client’s failure to provide necessary information or approvals may impact the project timeline, and 123hpeasyprintsolutions is not responsible for these delays.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">4. Payment Terms</h2>
//                     <p>Payments for services are due as per the terms agreed upon at the start of the project. We may require an upfront deposit before starting work. All invoices are due within the agreed payment period. Late payments may incur a late fee or result in the suspension of services until the outstanding balance is settled.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">5. Intellectual Property</h2>
//                     <p>All intellectual property rights to the content created by 123hpeasyprintsolutions for your project remain the property of 123hpeasyprintsolutions until full payment is received. Upon full payment, the rights will be transferred to you, excluding proprietary tools or pre-existing code used in the project.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">6. Confidentiality</h2>
//                     <p>We respect your confidentiality and will not disclose any proprietary information shared with us during the course of the project. Likewise, you agree not to disclose any proprietary tools or techniques used by 123hpeasyprintsolutions.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">7. Warranties and Liability</h2>
//                     <p>We strive to provide quality work, but 123hpeasyprintsolutions does not guarantee uninterrupted or error-free service. All services are provided “as is,” without warranties. We are not liable for any damages resulting from the use or inability to use our services.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">8. Termination</h2>
//                     <p>Either party may terminate the agreement with written notice. If you terminate the project before completion, you are responsible for payment up to the termination date. 123hpeasyprintsolutions may also terminate the agreement due to non-compliance or non-payment.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">9. Dispute Resolution</h2>
//                     <p>In case of disputes, both parties agree to attempt resolution through negotiation. If unresolved, the matter will be handled according to the laws of your jurisdiction.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">10. Changes to Terms</h2>
//                     <p>123hpeasyprintsolutions may update these terms at any time. The latest version will be available on our website. It's your responsibility to review them periodically.</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-bold mb-2">11. Contact Us</h2>
//                     <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
//                     <p>Email: <a href="mailto:support@123hpeasyprintsolutions.com" className="underline">support@123hpeasyprintsolutions.com</a></p>
//                     <p>Phone: [Your contact number]</p>
//                     <p>Address: [Company address]</p>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Term;


"use client"

import Head from 'next/head';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Terms and Conditions - 123hpsmartassistant</title>
        <meta name="description" content="Terms and conditions for using 123hpsmartassistant services" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 px-6 py-8 sm:px-10 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Terms and Conditions
              </h1>
              <p className="mt-3 text-lg text-indigo-200">
                Last updated: June 18, 2023
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="prose prose-indigo max-w-none">
              <p className="text-lg font-medium">
                Please read these Terms and Conditions ("Terms") carefully before using the 123hpsmartassistant website and services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              <p className="mt-4">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">2. Use of Services</h2>
              <p className="mt-4">
                Our services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the services.
              </p>
              <p className="mt-2">
                You agree not to use the services:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>For any unlawful purpose</li>
                <li>To solicit others to perform or participate in any unlawful acts</li>
                <li>To violate any international, federal, or state regulations</li>
                <li>To infringe upon or violate our intellectual property rights</li>
                <li>To harass, abuse, insult, or discriminate based on protected characteristics</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Accounts</h2>
              <p className="mt-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
              <p className="mt-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of 123hpsmartassistant and its licensors. Our trademarks may not be used without prior written permission.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">5. User Content</h2>
              <p className="mt-4">
                You retain ownership of any content you submit through our services. By posting content, you grant us the right to use, modify, publicly perform, and distribute such content for operating and improving our services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Prohibited Uses</h2>
              <p className="mt-4">
                You may not use our services to:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Upload or transmit viruses or any malicious code</li>
                <li>Collect or track personal information of others</li>
                <li>Spam, phish, or engage in unethical marketing</li>
                <li>Interfere with or disrupt the service</li>
                <li>Bypass any measures we may use to restrict access</li>
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Termination</h2>
              <p className="mt-4">
                We may terminate or suspend your account immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Limitation of Liability</h2>
              <p className="mt-4">
                In no event shall 123hpsmartassistant be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the services.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">9. Governing Law</h2>
              <p className="mt-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">10. Changes to Terms</h2>
              <p className="mt-4">
                We reserve the right to modify these terms at any time. We will provide notice of any changes by updating the "Last updated" date. Your continued use after such changes constitutes acceptance.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">11. Contact Us</h2>
              <p className="mt-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="mt-2 list-disc list-inside">
                <li>By email: legal@123hpsmartassistant.com</li>
                <li>By visiting our contact page</li>
                <li>By mail: 123 Legal Street, San Francisco, CA 94107</li>
              </ul>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <p className="font-medium text-indigo-700">
                  These Terms and Conditions were created using templates from TermsFeed and modified for our specific business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
