import React from "react";
import { Spin } from 'antd';

const Loader = () => {
  const style = { 
    display: 'flex', 
    width: '100%', 
    minHeight: '100vh', 
    justifyContent: 'center', 
    alignItems: 'center' 
  };

  return(
    <div style={style}>
      <Spin size="large" />
    </div>
  )
}

export default Loader;
