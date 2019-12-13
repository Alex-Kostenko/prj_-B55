import React, {useState, useEffect} from "react";
import { Row, Col } from 'antd';

import getAllUser from '../../utils/getAllUser';
import UserCard from '../../components/userCard';

import "./style.css"

const UserList = () => {

  const [userList, setUserList] = useState([]);

  const getAllUserList = async () => {
    const list = await getAllUser();
    setUserList(list);
  }

  useEffect(()=>{
    getAllUserList();
  }, [])

  return (
    <Row className="userList__wrap" gutter={[24]}>
      {userList.map(item => 
        <Col sm={24} md={12} lg={8} xl={6} key={item._id}>
          <UserCard props={item} />
        </Col>
      )}
    </Row>
  )
}

export default UserList;
