import React from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

const ballowc = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TitlePropType = {
  index: number;
  text: string;
};
const Title = ({ text, index }: TitlePropType) => {
  return (
    <h1
      className={`${ballowc.className} text-3xl uppercase tracking-wider mb-6`}
    >
      <span className="inline-block mr-4 font-bold opacity-25">0{index}</span>
      <span className="inline-block tracking-widest">{text}</span>
    </h1>
  );
};

export default Title;
