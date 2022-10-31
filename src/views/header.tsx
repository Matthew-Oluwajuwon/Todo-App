/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LandingPage } from "../service/actions/actions";
import { State } from "../models/application/state";
import { AiOutlineSend, AiOutlineDelete } from "react-icons/ai";
import { Table } from "antd";
import { ApiResponse } from "../models/clients/api-response";
import { BsPen } from "react-icons/bs";

export const Header = () => {
  const dispatch = useDispatch();
  const { landingPageState }: any = useSelector((state) => state);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ApiResponse.Todos[]>([]);
  const [data, setData] = useState<[]>([])
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const date = new Date();
    const getHour = date.getHours()
    const getMin = date.getMinutes()
    const getTime = `${getHour}:${getMin}${getHour > 12 ? "pm" : "am"}`

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, author: "Matthew Oluwajuwon", time: getTime }])
      setTodo('')
      sessionStorage.setItem("Todos", JSON.stringify(todos))
    }
  }
  
  const onDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
    
  }

  useEffect(() => {
    
    setData(JSON.parse(sessionStorage.getItem("Todos") as any))
  }, [])
  

  const columns = [
    {
      title: "SN",
      dataIndex: "id",
      width: "5%",
      key: "1",
    },
    {
      title: "Todo",
      dataIndex: "todo",
      width: "35%",
      key: "2",
    },
    {
      title: "Author",
      dataIndex: "author",
      width: "20%",
      key: "3",
    },
    {
      title: "Time",
      dataIndex: "time",
      width: "20%",
      key: "4",
    },
    {
      title: "Perform Actions",
      dataIndex: "",
      key: "5",
      width: "25%",
      fixed: "right",
      render: (_: any, record: ApiResponse.Todos) => {
        return (
          <span className="flex gap-5">
            <button className="flex items-center justify-center outline outline-1 py-1 px-2 rounded-sm">
              Edit&nbsp; <BsPen />
            </button>
            <button onClick={() => onDelete(record.id)} className="flex items-center justify-center outline outline-1 py-1 px-2 rounded-sm text-primary-white outline-primary-red bg-primary-red">
              Delete&nbsp; <AiOutlineDelete />
            </button>
            {/* <button className="flex items-center justify-center outline outline-1 py-1 px-2 rounded-sm outline-primary-green text-primary-green">
              Done&nbsp; <AiOutlineCheck />
            </button> */}
          </span>
        );
      },
    },
  ];

  return (
    <div className="h-full w-full">
      <header className="flex w-screen h-[8vh] shadow-md bg-primary-color justify-between lg:pr-10 lg:pl-10 px-10 items-center">
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
          } font-extralight lg:font-normal lg:grid lg:w-[60%] lg:bg-primary-color lg:h-screen lg:justify-center lg:place-content-start lg:py-[10rem] lg:text-md lg:absolute lg:right-0 lg:top-0`}
        >
          <div
            className="text-3xl hidden lg:block absolute top-10 right-10"
            onClick={CloseMobileMenu}
          ></div>
          <Link
            to={"/"}
            className="grid lg:flex text-primary-white  place-items-center hover:text-logo-color"
          >
            &nbsp; Home
          </Link>
          <Link
            to={"/About"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            &nbsp; About
          </Link>
          <Link
            to={"/Contact-us"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            &nbsp; Contact Us
          </Link>
          <Link
            to={"/Notification"}
            className="grid lg:flex place-items-center text-primary-white hover:text-logo-color"
          >
            &nbsp; Notification
          </Link>
        </ul>
      </header>
      <div className="w-full flex justify-start flex-col items-center bg-primary-grey h-[92vh]">
        <section className="bg-primary-white shadow-lg max-w-[50%] w-[40%] h-[5rem] mt-10 mb-[-20px] flex justify-center items-center">
          <form className="w-full h-full flex justify-center items-center" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter a task"
              className="w-[75%] h-[50%] outline outline-1 px-10 text-lg rounded-sm"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <button
              type="submit"
              className="w-[10%] h-[50%] flex justify-center items-center outline outline-1 rounded-sm hover:bg-primary-color hover:text-primary-white"
            >
              <AiOutlineSend className="text-3xl text-primary-color hover:text-primary-white" />
            </button>
          </form>
        </section>
        <section className="bg-primary-white shadow-lg max-w-[40%] w-[40%] h-[35rem] my-10 flex justify-center items-start overflow-auto">
          <Table
            bordered
            columns={columns as any}
            dataSource={data as any}
            className="w-full"
          />
        </section>
      </div>
    </div>
  );
};
