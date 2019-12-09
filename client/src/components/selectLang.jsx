import React, { useEffect, useState } from "react";
import { Select } from 'antd';
const { Option } = Select;

const RenderSelectLang = () => {
  const [lang, setlang] = useState('Ukr')

  useEffect(() => {
    const currentLang = localStorage.getItem('lang');
    setlang(currentLang);
  }, []);

  const handleChange = (v) => { 
    localStorage.setItem('lang', v);
    setlang(v);
    document.location.reload(true);
  }

  return (
    <Select value={lang} onChange={handleChange}>
      <Option value="Ukr">Ukr</Option>
      <Option value="Eng">Eng</Option>
    </Select>
  )
}

export default RenderSelectLang;
