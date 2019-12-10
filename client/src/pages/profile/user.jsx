import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router";
import { Icon, Upload, Modal } from 'antd';

import getBase64 from '../../utils/getBase64';
import updataUser from '../../utils/updataUser';

// import './style.css';

const RenderUser = () => {

  const [user, setUser] = useState(0);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    let currentUser;
    
    if (window.sessionStorage.getItem('currentUser')) {
      currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
    } else {
      currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }

    setUser(currentUser);

    if (currentUser && currentUser.imgList) {
      setSelectedFileList(currentUser.imgList.fileList)
    }

  }, []);

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const UploadButton = () => {
    return (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
  }

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = info => {
    setLoading(true)
    switch (info.file.status) {
      case "uploading":
        break;
      case "done":
        setLoading(false);
        uploadImg('imgList', info.fileList)
        break;

      default:
        setLoading(false);
    }
    setSelectedFileList(info.fileList);
  };

  const uploadImg = (name, imgList) => {
    let newUser = {...user};
    const obj = {};
    obj.file = {};
    obj.fileList = imgList;
    newUser[name] = obj;

    updataUser(newUser);
  }

  return (
    window.sessionStorage.getItem('currentUser') || window.localStorage.getItem('currentUser') ?
      <div className="clearfix">
        <Upload
          listType="picture-card"
          fileList={selectedFileList}
          onPreview={handlePreview}
          onChange={handleChange}
          customRequest={customRequest}
          multiple={true}
        >
          {selectedFileList && selectedFileList.length >= 9 ? null : <UploadButton />}
        </Upload>
        <Modal 
          visible={previewVisible} 
          footer={null} 
          onCancel={handleCancel}
        >
          <img 
            alt="example" 
            style={{ width: '100%' }} 
            src={previewImage} 
          />
        </Modal>
      </div>
      :
      <Redirect to='/'/>
  );
};

export default RenderUser;
