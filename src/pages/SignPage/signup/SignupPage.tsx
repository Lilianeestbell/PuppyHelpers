import React, { FC }  from 'react'
import styled from 'styled-components'
import { UserAddOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin } from 'antd';  
import MainHeader from '../../components/Header';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useSelector } from '../../redux/hooks';


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
`


const SignupPage: FC = (children:any) => {
    const signList = useSelector((state) => state.auth)
    console.log('signList: ', signList);
    const signupItems: ItemType[] = [
      {
        label: '注册',
        key: 'register',
        icon: <UserAddOutlined />,
      },
    ];

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div>
        <MainHeader items={signupItems} needSearch={false} defaultChoice='register' />
        <Spin spinning={false}>
          <Wrapper>
            {/* signUP now! */}
                <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                // onValuesChange={(_, allFields) => {
                //   onChange(allFields);
                // }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
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
                <Form.Item
                  label="Password Confirmation"
                  name="passwordConfirmation"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                  dependencies={['password']} 
                  // hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 80, span: 16 }}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
          </Wrapper>
        </Spin>
      </div>
    );
}

export default SignupPage;
