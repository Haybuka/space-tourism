import React from 'react'
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

const ballowc = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400",'700'],
  });
const Title = () => {
  return (
    <h1 className={`${ballowc.className} text-3xl uppercase tracking-wider mb-6`}>
    <span className='inline-block mr-4 font-bold opacity-25'>01</span>
    <span className='inline-block tracking-widest'>Pick your destination</span>
  </h1>
  )
}

export default Title