import React from "react";
import { Tourism } from "../space";
import { Tab } from "@headlessui/react";

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
            <Tab as="p" onClick={() => setImgSrc(destination.images.png)}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <span
                  className={
                    selected
                      ? "bg-blue-500 outline-none focus:border-none border-none text-white inline-block mr-4 pb-2 uppercase"
                      : " text-white outline-none focus:border-none border-none inline-block mr-4 uppercase cursor-pointer"
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
          console.log(destination);
          return (
            <Tab.Panel as="aside">
              <section>
                <h4 className="text-[100px]">{destination.name}</h4>
                <p className="text-lg my-8">{destination.description}</p>
              </section>
              <footer className="flex justify-between items-center border-t pt-6">
                <p>
                  <span className="block">AVG.DISTANCE</span>
                  <span className="block">{destination.distance}</span>
                </p>
                <p>
                  <span className="block">EST. TRAVEL TIME</span>
                  <span className="block">{destination.travel}</span>
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
