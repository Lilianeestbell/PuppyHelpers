import React, { FC, useState }  from 'react'
import styled from 'styled-components'
import { IdcardOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const Wrapper =  styled.div`
    margin: 0px auto;
    position: fixed;
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
    width: 100%;
   /* .ant-menu-overflow .ant-menu .ant-menu-root .ant-menu-horizontal .ant-menu-light{
      margin: 0px auto;
   } */
`

const MainHeader: FC = () =>{
    const items: MenuProps['items'] = [
      {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
      },
      {
        label: '商城',
        key: 'business',
        icon: <MoneyCollectOutlined />,
        // disabled: true,
      },
      {
        label: '个人',
        key: 'personalInfo',
        icon: <IdcardOutlined />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              {
                label: 'Option 1',
                key: 'setting:1',
              },
              {
                label: 'Option 2',
                key: 'setting:2',
              },
            ],
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3',
              },
              {
                label: 'Option 4',
                key: 'setting:4',
              },
            ],
          },
        ],
      },
    ];

    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
        <Wrapper>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Wrapper>
    );
}

export default MainHeader;
