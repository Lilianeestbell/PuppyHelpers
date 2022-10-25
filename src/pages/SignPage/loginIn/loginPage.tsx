import React, { FC }  from 'react'
import styled from 'styled-components'
import { SmileOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Spin } from 'antd';  
import MainHeader from '../../components/Header';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
// import { FieldData } from 'rc-field-form/lib/interface';

const Wrapper =  styled.div`
    position: relative;
    margin: 70px auto;
    padding-left: 200px;
    #components-layout-demo-fixed .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        background: rgba(255, 255, 255, 0.2);
    }
    .site-layout .site-layout-background {
        background: #fff;
    }
    width: 1024px;
   /* .ant-menu-overflow .ant-menu .ant-menu-root .ant-menu-horizontal .ant-menu-light{
      margin: 0px auto;
   } */
`


const LoginPage: FC = () =>{
    // const navigate = useNavigate();
    const signupItems: ItemType[] = [
      {
        label: '登陆',
        key: 'login',
        icon: <SmileOutlined />,
      },
    ];

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    // const onFinishFailed = (errorInfo: any) => {
    //   console.log('Failed:', errorInfo);
    // };

    return (
      <div>
        <MainHeader items={signupItems} needSearch={false} defaultChoice='login' />
        <Spin spinning={false}>
          <Wrapper>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
  
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                 Or  <a href="">register now!</a>
              </Form.Item>
            </Form>
          </Wrapper>
        </Spin>
      </div>
    );
}

export default LoginPage;
