import React, {useState} from 'react';
import 'moment/locale/ru';

const moment = require('moment');

export const CustomSelect = (props) => {
  console.log("select", props);

  const { schema, label, onChange, id, value } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;

  return (
    <label>
      {label}
      <select name={label} id={id} onChange={(event) => onChange(event.target.value)} value={value}>
        {date.map((item, i) =>
          <option value={item} key={item} > 
            {dateTitle[i]}
          </option>
        )}
      </select>
    </label> 
  );
}

export const CustomInput = (props) => {
  // console.log("input", props);
  const { label, onChange, id, value } = props;

  return (
    <label>
      {label}
      <input
        type="text"
        name={label}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        value={value}
      />
    </label>
  );
}

export const CustomMultiCheckBox = (props) => {

  const [allValue, setValue] = useState({})

  // console.log("multiCheckBox", props);
  const { schema, label, onChange, id } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;
  const value = props.value;

  const handleChecked = (event) => {
    const mainObj = {...allValue}
    const name = event.target.value;
    const value = event.target.checked;

    mainObj[name] = value

    setValue(allValue[name] = mainObj)
    onChange(allValue[name] = mainObj)
  }

  return (
    <div id={id}>
      {label}
        {date.map((item, i) =>
          <label key={item} >
            <br />
            <input
              type="checkbox" 
              value={item} 
              checked={value[i] ? true : false }
              onChange={handleChecked}
            />
            { dateTitle[i] }
          </label>
        )}
    </div>
  );
}

export const CustomRadioBtn = (props) => {
  // console.log("radioBtn", props);
  const { schema, label, onChange, id } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;

  return (
    <div id={id}>
      {label}
      {date.map((item, i) =>
        <label key={item} >
          <br />
          <input
            type="radio"
            name={ id }
            value={ item }
            checked={String(item) === String(props.value)}
            onChange={(event) => onChange(event.target.value)}
          />
          {dateTitle[i]}
        </label>
      )}
    </div>
  );
}

export const CustomDateYear = (props) => {

  const { options,  onChange, id, value } = props;

  let yearList = []

  if (options) {
    const yearRange = options.dateRange;

    for (let i = yearRange[0]; i <= yearRange[1]; i++) {
      yearList.push(i)
    }
  }

  return (
    <select name={id} onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="defaultYear" disabled defaultValue > Year </option>
      {yearList.length && yearList.map((item, i) =>
        <option value={item} key={i}> {item} </option>
      )}
    </select>
  );
}

export const CustomDateMonth = (props) => {

  const { options,  onChange, id, value } = props;

  moment.locale('ru');
  const month = moment.months();

  return (
    <select name={id} onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="defaultMonth" disabled defaultValue > Month </option>
      {month.map((item, i) =>
        <option value={i+1} key={i}> {item} </option>
      )}
    </select>
  );
}

export const CustomTextArea = (props) => {
  // console.log("textArea", props);
  const { label, onChange, id, value } = props;

  return (
    <label>
      {label}
      <textarea
        type="text"
        name={label}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        value={value}
      />
    </label>
  );
}

export const CustomCheckBox = (props) => {
  console.log(props);
  const { onChange, id, label, value } = props

  return(
    <>
      <input id={id} type="checkbox" name={id} checked={value} onChange={(e) => onChange(e.target.checked)}/>
      {label}
    </>
  );
}
