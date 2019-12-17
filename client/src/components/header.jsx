import React, {useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import { Layout, Menu } from 'antd';

import RenderSelectLang from "../components/selectLang";

const { Header } = Layout;

const headerItem = [
  {
    title: 'Login Page',
    rout: '/'
  },
  {
    title: 'Register Page',
    rout: '/registration'
  },
  {
    title: 'User List',
    rout: '/userList'
  },
  {
    title: 'Avatar',
    rout: '/user'
  },
  {
    title: 'User Edit',
    rout: '/editUser'
  },
];


const RenderHeader = ( ) => {
  const location = useLocation().pathname;
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setCurrentLocation(location)
  }, [location])

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentLocation]}
        style={{ lineHeight: '64px' }}
      >

        {headerItem.map(item => 
          <Menu.Item key={item.rout}>
            <Link to={item.rout}>
              {item.title}
            </Link>
          </Menu.Item>
        )}

        <Menu.Item>
          <RenderSelectLang />
        </Menu.Item>
      </Menu>
      
    </Header>
  )
}

export default RenderHeader;
