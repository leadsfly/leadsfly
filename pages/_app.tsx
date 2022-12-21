import 'normalize.css/normalize.css';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'
import { Playfair_Display } from '@next/font/google'
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Navbar from '../scenes/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight:['400','600'],
  variable:'--font-osans'
})
const PlayfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight:['400','600'],
  variable:'--font-pfair'
})
// className={`${OpenSans.variable} font-playfair`}
export default function App({ Component, pageProps }: AppProps)
 {
    const [selectedPage, setSelectedPage] = useState("home");
 
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");


  
  return (
    <main className={`${OpenSans.variable} font-opensans bg-deep-blue`}>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Navbar>
      <Component {...pageProps} />
    </main>
  );
}
