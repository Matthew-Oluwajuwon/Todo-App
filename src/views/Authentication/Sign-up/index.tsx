/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Modal } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../models/application/state";
import { ApiRequest } from "../../../models/clients/api-request";
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

  const setRequest = useCallback(
    (state: State.LandingPage, value: any, key: keyof ApiRequest.SignUp) => {
      dispatch({
        type: LandingPage.SET_LANDING_PAGE_STATE,
        payload: {
          ...state,
          SignUp: {
            ...state.SignUp,
            request: {
              ...state.SignUp?.request,
              [key]: value,
            },
          },
        },
      });
    },
    [state]
  );

  const onFinish = useCallback(
    (state: State.LandingPage) => {
      dispatch({
        type: LandingPage.CREATE_USER,
        payload: {
          ...state,
          SignUp: {
            ...state.SignUp,
            processing: true,
          },
        },
      });
    },
    [state]
  );

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
        onFinish={() => onFinish(state)}
        autoComplete="off"
        fields={[
          {
            name: "name",
            value: state.SignUp?.request?.name,
          },
          {
            name: "email",
            value: state.SignUp?.request?.email,
          },
          {
            name: "password",
            value: state.SignUp?.request?.password,
          },
          {
            name: "username",
            value: state.SignUp?.request?.username,
          },
        ]}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input
            placeholder="John Taiwo"
            onChange={(e) => setRequest(state, e.target.value, "name")}
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Matarazy"
            onChange={(e) => setRequest(state, e.target.value, "username")}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            placeholder="example@gmail.com"
            onChange={(e) => setRequest(state, e.target.value, "email")}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) => setRequest(state, e.target.value, "password")}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={state.SignUp?.processing}
          >
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
