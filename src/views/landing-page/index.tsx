import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlinePhone,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <header className="flex w-screen h-[70px] shadow-md bg-primary-color justify-around lg:pr-10 lg:pl-10 lg:justify-between items-center">
        <Link
          to={"/"}
          className="flex w-[fit-content] h-full items-center justify-center text-primary-white font-[logo-font] font-extrabold text-3xl text-shadow-md"
        >
          <img src={Logo} alt="logo" width={50} height={50} /> Todo App
        </Link>
        <Button className="hidden lg:block text-3xl ">
          <GiHamburgerMenu className="text-primary-white" />
        </Button>
        <ul className={`text-primary-white flex gap-10 lg:hiddens font-extralight lg:font-normal lg:grid lg:w-[70%] lg:bg-primary-color lg:h-screen lg:justify-center lg:place-content-start lg:py-[10rem] lg:text-xl lg:absolute lg:right-0 lg:top-0`}>
          <Link
            to={"/"}
            className="grid lg:flex  place-items-center hover:text-logo-color"
          >
            <AiOutlineHome />&nbsp;
            Home
          </Link>
          <Link
            to={"/About"}
            className="grid lg:flex place-items-center hover:text-logo-color"
          >
            <AiOutlineQuestionCircle />&nbsp;
            About
          </Link>
          <Link
            to={"/Contact-us"}
            className="grid lg:flex place-items-center hover:text-logo-color"
          >
            <AiOutlinePhone />&nbsp;
            Contact Us
          </Link>
          <Link
            to={"/Notification"}
            className="grid lg:flex place-items-center hover:text-logo-color"
          >
            <AiOutlineNotification />&nbsp;
            Notification
          </Link>
          <div className="text-primary-white gap-5 grid">
          <Button
            type="primary"
            className="bg-logo-color hover:bg-primary-color hover:outline hover:outline-1 rounded-md py-[10px] px-[50px]"
          >
            Login
          </Button>
          <Button type="default">Sign Up</Button>
        </div>
        </ul>
        <div className="text-primary-white gap-5 flex">
          <Button
            type="primary"
            className="bg-logo-color hover:bg-primary-color hover:outline hover:outline-1 rounded-md py-[10px] px-[20px]"
          >
            Login
          </Button>
          <Button type="default">Sign Up</Button>
        </div>
      </header>
      <section></section>
    </div>
  );
};
