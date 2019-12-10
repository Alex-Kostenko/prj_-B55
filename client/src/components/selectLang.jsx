import React, { useContext } from "react";
import { Select } from 'antd';
import { Lang } from './context'
const { Option } = Select;

const RenderSelectLang = () => {
  const [lang, setLang] = useContext(Lang);

  const handleChange = (v) => { 
    localStorage.setItem('lang', v);
    setLang(v);
  }

  return (
    <Select 
      value={lang} 
      onChange={handleChange}
    >
      <Option value="Ukr">Ukr</Option>
      <Option value="Eng">Eng</Option>
      <Option value="Ru">Ru</Option>
    </Select>
  )
}

export default RenderSelectLang;
