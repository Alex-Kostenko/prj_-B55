import React, {useState} from 'react';
import 'moment/locale/ru';

const moment = require('moment');

export const CustomSelect = (props) => {
  console.log("select", props);

  const { schema, label, onChange, id } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;

  return (
    <label>
      {label}
      <select name={label} id={id} onChange={(event) => onChange(event.target.value)}>
        {date.map((item, i) =>
          <option value={item} key={item}> 
            {dateTitle[i]}
          </option>
        )}
      </select>
    </label> 
  );
}

export const CustomInput = (props) => {
  console.log("input", props);
  const { label, onChange, id } = props;

  return (
    <label>
      {label}
      <input
        type="text"
        name={label}
        onChange={(event) => onChange(event.target.value)}
        id={id}
      />
    </label>
  );
}

export const CustomMultiCheckBox = (props) => {

  const [allValue, setValue] = useState({})

  console.log("multiCheckBox", props);
  const { schema, label, onChange, id } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;

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
              onChange={handleChecked}
            />
            { dateTitle[i] }
          </label>
        )}
    </div>
  );
}

export const CustomRadioBtn = (props) => {
  console.log("radioBtn", props);
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
            onChange={(event) => onChange(event.target.value)}
          />
          {dateTitle[i]}
        </label>
      )}
    </div>
  );
}

export const CustomDateYearMonth = (props) => {
  console.log("customDateYearMonth", props);
  moment.locale('ru');
  const month = moment.months();
  const { options, label, onChange, id, schema } = props;
  const yearRange = options.yearsRange;
  const description = schema.description || null;

  const [date, setDate] = useState([]);

  const handleChange = (value, name) => {
    const mainObj = { ...date }

    mainObj[name] = value;

    setDate(date[name] = mainObj)
    onChange(date[name] = mainObj)
  }

  const RenderYearList = () => {
    let yearList = []

    for (let i = yearRange[0]; i <= yearRange[1]; i++) {
      yearList.push(i)
    }

    return (
      <select name="id" onChange={(e)=>handleChange(e.target.value, 'year')}>
        {yearList.map((item, i) =>
          <option value={item} key={i}> {item} </option>
        )}
      </select>
    );
  }

  return (
    <div id={id}>
      {label}
      <select name="id" onChange={(e) => handleChange(e.target.value, 'month')}>
        {month.map(( item, i ) =>
          <option value={i-1} key={i}> {item} </option>
        )}
      </select>
      <RenderYearList />
      <div> {description} </div>
    </div>
  );
}
