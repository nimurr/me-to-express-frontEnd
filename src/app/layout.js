import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Me To Express",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#e80a52"  // Change to your desired color
          height={6}        // Adjust the height in pixels
          speed={800}       // Animation speed in milliseconds
          showSpinner={false} // Hide the loading spinner
          easing="ease"     // Animation easing

        />
        {children}
      </body>
    </html>
  );
}
