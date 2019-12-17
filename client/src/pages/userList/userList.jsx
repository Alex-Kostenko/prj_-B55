import React, {useState, useEffect} from "react";
import { Row, Col, Pagination } from 'antd';
import Loader from '../../components/loader'

import getCountUser from '../../utils/getCountAllUser';
import getPaginationUser from '../../utils/getPaginationUser';
import UserCard from '../../components/userCard';

import "./style.css"

const UserList = () => {
  const [load, setload] = useState(true);
  const [userList, setUserList] = useState([]);
  const [paginationData, setPaginationData] = useState({numPage: 1, idFirst:1 ,pageSize: 6});
  const [countUser, setCountUser ] = useState();

  const getAsCountUser = async () => {
    const count = await getCountUser();
    setCountUser(count);
  }

  const onShowSizeChange = (currentPage, pageSize) => {
    setload(true);
    let obj = {};
    obj.numPage = currentPage;
    obj.idFirst = (currentPage * pageSize) - pageSize;
    obj.pageSize = pageSize;
    setPaginationData(obj)
  }

  useEffect(() => {
    const getUserList = async () => {
      const list = await getPaginationUser(paginationData.idFirst, paginationData.pageSize);
      setUserList(list);
    }

    getUserList();

    setTimeout(() => {
      setload(false);
    }, 300);
  }, [paginationData])

  useEffect(() => {
    getAsCountUser();
  }, [])

  return (
    <>
      { load ? <Loader /> :
        <Row className="userList__wrap" gutter={24} justify={'center'}>
          {userList.map(item => 
            <Col sm={24} md={12} lg={8} xl={6} key={item._id}>
              <UserCard props={item} />
            </Col>
          )}
          <Col sm={24}>
            <Pagination
              showSizeChanger
              pageSizeOptions={['6', '12', '15', '21']}
              onShowSizeChange={onShowSizeChange}
              onChange={onShowSizeChange}
              current={parseInt(paginationData.numPage)}
              defaultPageSize={parseInt(paginationData.pageSize)}
              total={countUser}
              className="userList__pagination"
            />
          </Col>
        </Row>
      }
    </>
  )
}

export default UserList;
