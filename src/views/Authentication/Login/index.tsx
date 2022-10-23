/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Modal } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../models/application/state';
import { LandingPage } from '../../../service/actions/actions';

export const Login: React.FC = () => {
    const dispatch = useDispatch();
  const { landingPageState }: any = useSelector((state) => state);
  const state: State.LandingPage = landingPageState;

    const HandleCancel = useCallback(
      () => {
        dispatch({
            type: LandingPage.SET_LANDING_PAGE_STATE,
            payload: {
                ...state,
                Login: {
                    ...state.Login,
                    showLogin: false
                }
            }
        })
      },
      [state],
    )
    

  return (
    <Modal
    title={<div className='text-center'>Login</div>}
    centered
    open={state.Login?.showLogin}
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </Modal>
  )
}
