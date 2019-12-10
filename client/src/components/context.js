import React, { useState, createContext } from 'react';

export const Lang = createContext([{}, () => { }]);

const LangProvider = (props) => {
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')));

  return (
    <Lang.Provider value={[lang, setLang]}>
      {props.children}
    </Lang.Provider>
  );
}

export default LangProvider;
