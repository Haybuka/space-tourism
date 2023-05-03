import Link from "next/link";
import React from "react";
import styles from "./navigation.module.css";
import Image from "next/image";
const Navigation = () => {
  const navItems = [
    {
      path: "/",
      name: "Home",
      id: 0,
    },
    {
      path: "/destination",
      name: "destination",
      id: 1,
    },
    {
      path: "/crew",
      name: "crew",
      id: 2,
    },
    {
      path: "/technology",
      name: "technology",
      id: 3,
    },
  ];
  return (
    <header className="fixed w-full">
      <nav
        className={`${styles.navigation} flex justify-between py-10 pl-10 items-center`}
      >
        <h3>
          <Image
            alt="logo"
            src="/assets/shared/logo.svg"
            width={40}
            height={40}
          />
        </h3>
        <ul className={`${styles.navleft} flex py-3 w-[800px] pl-[100px]`}>
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="mx-2 text-white uppercase text-[14px]"
            >
              <li>
                <span className="inline-block mx-1">0{item.id}</span>
                <span className="inline-block mx-1">{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
