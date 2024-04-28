import Header from "./components/Header";
import "./globals.css";

import { Mulish } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
