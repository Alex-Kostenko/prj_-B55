import React, { useContext } from "react";
import { Select } from 'antd';
import { Lang } from './context'
const { Option } = Select;

const RenderSelectLang = () => {
  const [lang, setLang] = useContext(Lang);

  const handleChange = (v) => {
    localStorage.setItem('lang', JSON.stringify(v));
    setLang(v);
  }

  return (
    <Select 
      value={lang} 
      onChange={handleChange}
      className="customSelect"
    >
      <Option value="Ru">  Ru  </Option>
      <Option value="Eng"> Eng </Option>
      <Option value="Ukr"> Ukr </Option>
    </Select>
  )
}

export default RenderSelectLang;
