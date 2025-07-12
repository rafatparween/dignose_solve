// import { Inter } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Hewlett Printers Solution",
//   description: "Hewlett Printers Solution",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Tag (gtag.js) */}
//         <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=AW-17279567391"
//         />
//         <Script id="gtag-init" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'AW-17279567391');
//           `}
//         </Script>

//         {/* Google Font */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>

//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hewlett Hub Solutions",
  description: "Hewlett Hub Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google tag (gtag.js) for AW-17332366895 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17332366895"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17332366895');

            console.log("✅ Google Tag (AW-17332366895) initialized successfully.");
          `}
        </Script>

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
