import React from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import styles from './crew.module.css'

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});
const ballow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
});

const ballowc = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});
const CrewTab = () => {
  return (
    <aside>
      <section>
        <h4
          className={`${bellefair.className} text-[100px] uppercase leading-[100px] my-8`}
        >
          {/* {destination.name} */} Name
        </h4>
        <p className={`${ballow.className} text-lg my-8`}>
          {/* {destination.description} */} Description
        </p>
      </section>
      <footer className="flex justify-between items-center border-t pt-6">
        <p>
          <span
            className={`${ballowc.className} block uppercase text-sm tracking-widest`}
          >
            AVG. DISTANCE
          </span>
          <span className={`${bellefair.className} block uppercase text-2xl`}>
            {/* {destination.distance} */} Distance
          </span>
        </p>
        <p>
          <span
            className={`${ballowc.className} block uppercase text-sm tracking-widest`}
          >
            EST. TRAVEL TIME
          </span>
          <span className={`${bellefair.className} block uppercase text-2xl`}>
            {/* {destination.travel} */} Travel
          </span>
        </p>
      </footer>
    </aside>
  );
};

export default CrewTab;
