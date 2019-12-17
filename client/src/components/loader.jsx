import React from "react";
import { Spin } from 'antd';

const Loader = () => {
  const style = { 
    position: 'absolute',
    display: 'flex',
    minWidth: '100%',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2',
    background: 'white',
    overflow: 'hidden',
    top: '65px',
    left: '0',
  };

  return(
    <div style={style}>
      <Spin size="large" />
    </div>
  )
}

export default Loader;
