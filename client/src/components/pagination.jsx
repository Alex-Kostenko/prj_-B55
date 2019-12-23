import React from "react";
import { Pagination } from 'antd';

const CustomPagination = (props) => {
  console.log(props);
  
  const { showSizeChanger ,onChange, current, total, defaultPageSize, onShowSizeChange } = props;

  return(
    <Pagination
      showSizeChanger={showSizeChanger}
      pageSizeOptions={['6', '12', '15', '21']}
      onShowSizeChange={onShowSizeChange}
      onChange={onChange}
      current={current}
      defaultPageSize={defaultPageSize}
      total={total}
      className="userList__pagination"
    />
  );
}

export default CustomPagination;
