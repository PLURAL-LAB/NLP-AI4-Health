import type { Metadata } from "next";
import { DM_Sans,Raleway,Roboto} from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NLP-AI4Health",
  description: "NLP-AI4Health: Second Workshop on Integrating NLP and AI for Multilingual and Patient-Centric Healthcare Communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${raleway.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
