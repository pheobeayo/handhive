"use client";
import React, { useState } from "react";
import HomeIcon from "../assets/nav/homeicon.svg";
import SkillsIcon from "../assets/nav/skillsicon.svg";
import CirclesIcon from "../assets/nav/circlesicon.svg";
import HomeFilled from "../assets/nav/homefilled.svg";
import SkillsFilled from "../assets/nav/skillsfilled.svg";
import CirclesFilled from "../assets/nav/circlesfilled.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const navs = [
    {
      icon: HomeIcon,
      filledIcon: HomeFilled,
      title: "Home",
      link: "/",
    },
    {
      icon: SkillsIcon,
      filledIcon: SkillsFilled,
      title: "Reviews",
      link: "/reviews",
    },
    {
      icon: SkillsIcon,
      filledIcon: CirclesFilled,
      title: "Errands",
      link: "/errands",
    },
    {
      icon: CirclesIcon,
      filledIcon: SkillsFilled,
      title: "Notifications",
      link: "/notifications",
    },
    
    {
      icon: SkillsIcon,
      filledIcon: SkillsFilled,
      title: "Message",
      link: "/message",
    },
  ];
  return (
    <div className="flex justify-center items-center px-3 max-w-md shadow-2xl h-[80px] bg-[#457B9D]">
      <div className="flex justify-between w-full">
        {navs.map((nav, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-white"
          >
            <Link
              href={nav.link}
              className={`flex flex-col justify-center items-center cursor-pointer ${
                nav.title == active ? "text-white" : "text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Image
                src={nav.title == active ? nav.filledIcon : nav.icon}
                alt="nav_icon"
              />
              <p className="text-xs mt-2">{nav.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;