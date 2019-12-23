import React, {useState, useEffect} from "react";
import { Row, Col } from 'antd';

import Loader from '../../components/loader'
import CustomPagination from '../../components/pagination'
import getCountUser from '../../utils/getCountAllUser';
import getPaginationUser from '../../utils/getPaginationUser';
import UserCard from '../../components/userCard';
import PaginationData from '../../utils/constructorPaginationData';

import "./style.css";


const UserList = () => {
  const [load, setload] = useState(true);
  const [userList, setUserList] = useState([]);
  const [paginationData, setPaginationData] = useState( new PaginationData(1, 1 ,6) );
  const [countUser, setCountUser ] = useState();

  const getAsCountUser = () => {
    getCountUser().then(setCountUser);
  };

  const onShowSizeChange = (currentPage, pageSize) => {
    setload(true);

    const pagination = new PaginationData(currentPage, (currentPage * pageSize) - pageSize, pageSize)
    console.log(pagination);
    setPaginationData(pagination);
  };

  useEffect(() => {
    const getUserList = async () => {
      const list = await getPaginationUser(paginationData.idFirst, paginationData.pageSize);
      setUserList(list);
    }
    getUserList();
    setTimeout(() => {
      setload(false);
    }, 300);
  }, [paginationData]);

  useEffect(getAsCountUser, []);

  return (
    load ? <Loader /> :
      <div className="userList">
        <Row className="userList__wrap" gutter={24}>
          {userList.map(item => 
            <Col sm={24} md={12} lg={8} xl={6} key={item._id}>
              <UserCard props={item} />
            </Col>
          )}
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <CustomPagination
              showSizeChanger={true}
              onShowSizeChange={onShowSizeChange}
              onChange={onShowSizeChange}
              current={parseInt(paginationData.numPage)}
              defaultPageSize={parseInt(paginationData.pageSize)}
              total={countUser}
            />
          </Col>
        </Row>
      </div>
  )
}

export default  UserList;
