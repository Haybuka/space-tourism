import React, { use, useState } from "react";
import styles from "./crew.module.css";
import Title from "./title";
import places from "../../data.json";
import Image from "next/image";
// import DestinationTab from "./destinationTab";
import { Tourism } from "../space";
import CrewTab from "./crewTab";

const Index = () => {
  const [crew, setCrew] = useState<Tourism["crew"]>(places["crew"]);

  console.log(crew);
  const [imgSrc, setImgSrc] = useState("/assets/destination/image-moon.png");
  return (
    <section className={styles.crew}>
      <div className="w-full">
        <Title count={2} title="meet your crew" />
        <section className="flex justify-between items-center">
          <Image
            width={300}
            height={300}
            alt="destination"
            src={imgSrc}
            className="xl:translate-x-14"
          />
          <div>
            <CrewTab />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Index;
