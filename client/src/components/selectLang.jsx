import React from "react";
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;


const RenderSelectLang = () => {
  const { i18n } = useTranslation();

  const handleChange = (v) => {
    i18n.changeLanguage(v);
  }

  return (
    <Select 
      value={i18n.language} 
      onChange={handleChange}
      className="customSelect"
    >
      <Option value="ru-RU">  Ru  </Option>
      <Option value="en"> Eng </Option>
      <Option value="ua"> Ukr </Option>
    </Select>
  )
}

export default RenderSelectLang;
