import React, { FC, useState }  from 'react'
import styled from 'styled-components'
import { IdcardOutlined, HomeOutlined, MoneyCollectOutlined, PoundOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu, Input } from 'antd';  
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const OutWrapper = styled.div`
  margin-top: 15px;
`
const Wrapper =  styled.div`
    position: relative;
    margin: 0px auto;
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

const { Search } = Input;

const StyledSearch = styled(Search)`
  position: absolute;
  top: 7px;
  right: 24px;
`

interface IMenuItems{
  items?: ItemType[],
  needSearch?: boolean,
  defaultChoice?: string,
}

const headerItems: ItemType[] = [
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
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       {
    //         label: 'Option 1',
    //         key: 'setting:1',
    //       },
    //       {
    //         label: 'Option 2',
    //         key: 'setting:2',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       {
    //         label: 'Option 3',
    //         key: 'setting:3',
    //       },
    //       {
    //         label: 'Option 4',
    //         key: 'setting:4',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: '捐款',
    key: 'donations',
    icon: <PoundOutlined />,
    // disabled: true,
  },
];

const MainHeader: FC<IMenuItems> = ({
  items = headerItems,
  needSearch = true,
  defaultChoice = 'home',
}) =>{
    const navigate = useNavigate();
    const onSearch = (value: string) => {
      console.log(value);
    }

    const [current, setCurrent] = useState(defaultChoice);

    const onClick: MenuProps['onClick'] = e => {
      setCurrent(e.key);
      navigate(`/${e.key}`)
    };
  
    return (
        <OutWrapper>
          <Wrapper>
            {
              needSearch && (
                <StyledSearch placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
              )
            }
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          </Wrapper>
        </OutWrapper>
    );
}

export default MainHeader;
