import React from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import styles from "./home.module.css";
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
const Index = () => {
  return (
    <div className={styles.home}>
      <section className="w-[400px]">
        <h3 className={`${ballowc.className} uppercase text-3xl`}>
          So, you want to travel to
        </h3>
        <p className={`${bellefair.className} uppercase text-9xl my-10`}>
          space
        </p>
        <p className={`${ballow.className} text-xl`}>
          <span className="inline-block my-2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
          </span>
          <span className="inline-block my-2">
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </p>
      </section>
      <aside className="w-[250px] h-[250px] translate-y-[60px] bg-white flex justify-center items-center rounded-full">
        <Link
          href=""
          className={`${bellefair.className} uppercase text-black text-3xl`}
        >
          Explore
        </Link>
      </aside>
    </div>
  );
};

export default Index;
