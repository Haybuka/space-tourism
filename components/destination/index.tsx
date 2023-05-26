import React, { use, useState } from "react";
import styles from "./destination.module.css";
import Title from "./title";
import places from "../../data.json";
import Image from "next/image";
import DestinationTab from "./destinationTab";
import { Tourism } from "../space";

const Index = () => {
  const [destinations, setDestinations] = useState<Tourism["destinations"]>(
    places["destinations"]
  );
  const [imgSrc, setImgSrc] = useState("/assets/destination/image-moon.png");
  return (
    <section className={styles.destination}>
      <div className="w-full">
        <Title text="Pick your destination" index={2} />
        <section className="flex justify-between items-center">
          <Image
            width={300}
            height={300}
            alt="destination"
            src={imgSrc}
            className="xl:translate-x-14"
          />
          <div>
           <DestinationTab destinations={destinations} setImgSrc={setImgSrc} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Index;
