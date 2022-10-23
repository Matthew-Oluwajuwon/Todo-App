/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlinePhone,
  AiOutlineQuestionCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { State } from "../../models/application/state";
import { useDispatch } from "react-redux";
import { LandingPage } from "../../service/actions/actions";
import { Login } from "../Authentication/Login";

export const LandingPageComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { landingPageState }: any = useSelector((state) => state);
  const state: State.LandingPage = landingPageState;
  const ShowMobileMenu = useCallback(() => {
    dispatch({
      type: LandingPage.SET_LANDING_PAGE_STATE,
      payload: {
        ...state,
        showMobileMenu: true,
      },
    });
  }, [state]);

  const CloseMobileMenu = useCallback(() => {
    dispatch({
      type: LandingPage.SET_LANDING_PAGE_STATE,
      payload: {
        ...state,
        showMobileMenu: false,
      },
    });
  }, [state]);

  const ShowLogin = useCallback(
    () => {
      dispatch({
        type: LandingPage.SET_LOGIN_PAGE_STATE,
        payload: {
            ...state,
            showMobileMenu: false,
            Login: {
                ...state.Login,
                showLogin: true
            }
        }
      })
    },
    [state],
  )
  

  return (
    <div>
        <Login />
      <header className="flex w-screen h-[70px] shadow-md bg-primary-color justify-around lg:pr-10 lg:pl-10 lg:justify-between items-center">
        <Link
          to={"/"}
          className="flex w-[fit-content] h-full items-center justify-center text-primary-white font-[logo-font] font-extrabold text-3xl lg:text-xl text-shadow-md"
        >
          <img src={Logo} alt="logo" width={50} height={50} /> Todo App
        </Link>
        <button className="hidden lg:block text-3xl" onClick={ShowMobileMenu}>
          <GiHamburgerMenu className="text-primary-white" />
        </button>
        <ul
          className={`text-primary-white flex gap-10 lg:${
            state.showMobileMenu ? "block" : "hidden"
          } font-extralight lg:font-normal lg:grid lg:w-[60%] lg:bg-primary-color lg:h-screen lg:justify-center lg:place-content-start lg:py-[10rem] lg:text-xl lg:absolute lg:right-0 lg:top-0`}
        >
          <div
            className="text-3xl hidden lg:block absolute top-10 right-10"
            onClick={CloseMobileMenu}
          >
            <AiOutlineClose />
          </div>
          <Link
            to={"/"}
            className="grid lg:flex text-primary-white  place-items-center hover:text-logo-color"
          >
            <AiOutlineHome />
            &nbsp; Home
          </Link>
          <Link
            to={"/About"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            <AiOutlineQuestionCircle />
            &nbsp; About
          </Link>
          <Link
            to={"/Contact-us"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            <AiOutlinePhone />
            &nbsp; Contact Us
          </Link>
          <Link
            to={"/Notification"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            <AiOutlineNotification />
            &nbsp; Notification
          </Link>
          <div className="text-primary-white gap-5 lg:grid hidden">
            <button
              
              className="bg-logo-color hover:bg-primary-color hover:outline hover:outline-1 rounded-md py-[10px] px-[50px]"
              onClick={ShowLogin}
            >
              Login
            </button>
            <button >Sign Up</button>
          </div>
        </ul>
        <div className="text-primary-white gap-5 flex lg:hidden">
          <button
            
            className="bg-logo-color hover:bg-primary-color hover:outline hover:outline-1 rounded-md py-[10px] px-[20px]"
            onClick={ShowLogin}
          >
            Login
          </button>
          <button >Sign Up</button>
        </div>
      </header>
      <section></section>
    </div>
  );
};
