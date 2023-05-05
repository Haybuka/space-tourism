import React from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import { Tourism } from "../space";
import { Tab } from "@headlessui/react";
import styles from './destination.module.css'

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


type destinationTabProp = {
  destinations: Tourism["destinations"];
  setImgSrc: React.Dispatch<React.SetStateAction<string>>;
};
const DestinationTab = ({ destinations, setImgSrc }: destinationTabProp) => {
  return (
    <Tab.Group as="div" className="md:w-[500px]">
      <Tab.List className="flex">
        {destinations.map((destination, id) => {
          console.log(destination);
          return (
            <Tab onClick={() => setImgSrc(destination.images.png)} className={`${ballowc.className} tracking-widest focus:outline-none outline-none`}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <span
                  className={
                    selected
                      ? `${styles.active} `
                      : ` ${styles.inactive} `
                  }
                >
                  {destination.name}
                </span>
              )}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {destinations.map((destination, id) => {
         
          return (
            <Tab.Panel as="aside">
              <section>
                <h4 className={`${bellefair.className} text-[100px] uppercase leading-[100px] my-8`}>{destination.name}</h4>
                <p className={`${ballow.className} text-lg my-8`}>{destination.description}</p>
              </section>
              <footer className="flex justify-between items-center border-t pt-6">
                <p>
                  <span className={`${ballowc.className} block uppercase text-sm tracking-widest`}>AVG.  DISTANCE</span>
                  <span className={`${bellefair.className} block uppercase text-2xl`}>{destination.distance}</span>
                </p>
                <p>
                  <span className={`${ballowc.className} block uppercase text-sm tracking-widest`}>EST. TRAVEL TIME</span>
                  <span className={`${bellefair.className} block uppercase text-2xl`}>{destination.travel}</span>
                </p>
              </footer>
            </Tab.Panel>
          );
        })}
     
      </Tab.Panels>
    </Tab.Group>
  );
};

export default DestinationTab;
