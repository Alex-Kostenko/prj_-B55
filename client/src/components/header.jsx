import React, {useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import { Layout, Menu } from 'antd';

import RenderSelectLang from "../components/selectLang";

const { Header } = Layout;


const RenderHeader = ( ) => {
  const location = useLocation().pathname;
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setCurrentLocation(location)
  })

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentLocation]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/">
          <Link to="/"> 
            LoginPage 
          </Link>
        </Menu.Item>
        <Menu.Item key="/registration">
          <Link to="/registration"> 
            RegisterPage 
          </Link>
        </Menu.Item>
        <Menu.Item key="/user">
          <Link to="/user">
            User
          </Link>
        </Menu.Item>
        <Menu.Item key="/editUser">
          <Link to="/editUser">
            UserInfo 
          </Link>
        </Menu.Item>
        <Menu.Item >
          <RenderSelectLang />
        </Menu.Item>
      </Menu>
      
    </Header>
  )
}

export default RenderHeader;
