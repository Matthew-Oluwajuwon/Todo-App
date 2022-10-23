/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Modal } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../models/application/state";
import { LandingPage } from "../../../service/actions/actions";

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { landingPageState }: any = useSelector((state) => state);
  const state: State.LandingPage = landingPageState;

  const HandleCancel = useCallback(() => {
    dispatch({
      type: LandingPage.SET_LANDING_PAGE_STATE,
      payload: {
        ...state,
        SignUp: {
          ...state.SignUp,
          showSignUp: false,
        },
      },
    });
  }, [state]);

  const ShowLogin = useCallback(() => {
    dispatch({
      type: LandingPage.SET_LOGIN_PAGE_STATE,
      payload: {
        ...state,
        showMobileMenu: false,
        SignUp: {
          ...state.SignUp,
          showSignUp: false,
        },
        Login: {
          ...state.Login,
          showLogin: true,
        },
      },
    });
  }, [state]);

  return (
    <Modal
      title={<div className="text-center">Sign Up</div>}
      centered
      open={state.SignUp?.showSignUp}
      onCancel={HandleCancel}
      footer={null}
      className="rounded-lg"
    >
      <Form
        name="Login Form"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center flex items-center justify-center">
        Already have an account?&nbsp;
        <span
          onClick={ShowLogin}
          className="text-primary-color font-bold cursor-pointer"
        >
          Login
        </span>
      </div>
    </Modal>
  );
};
