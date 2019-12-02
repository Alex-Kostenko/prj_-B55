import React, {useState} from 'react';
import { 
  Select, 
  Input, 
  Checkbox, 
  Radio
} from 'antd';
import 'moment/locale/ru';
const { Option } = Select;
const { TextArea } = Input;
const moment = require('moment');


export const CustomSelect = (props) => {
  // console.log("select", props);

  const { schema, label, onChange, id, value } = props;
  const date = schema.enum;
  const dateTitle = schema.enumNames;

  return (
    <label className="form__itemWrap df">
      <div className="fb30">{label}</div>
      <Select name={label} id={id} onChange={(value) => onChange(value)} value={value} className="fb70">
        {date.map((item, i) =>
          <Option value={item} key={item} > 
            {dateTitle[i]}
          </Option>
        )}
      </Select>
    </label> 
  );
} //done

export const FormTitle = (props) => {
  // console.log("Input", props);
  const { label, schema } = props;
  const { description } = schema;

  return (
    <div>
      <h2 className="form__title form__itemWrap">
        {label}
      </h2>
      <h4 className="form__desc form__itemWrap">
        {description}
      </h4>
    </div>
  );
} //done

export const SubTitle = (props) => {
  // console.log("Input", props);
  const { label } = props;

  return (
    <h3 className="form__itemWrap form__title">
      {label}
    </h3>
  );
} 

export const CustomInput = (props) => {
  // console.log("Input", props);
  const { label, onChange, id, value } = props;

  return (
    <label className="form__itemWrap df">
      <div className="fb30"> {label} </div>
      <Input
        type="text"
        name={label}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        value={value}
        className="fb70"
      />
    </label>
  );
} //done

export const CustomMultiCheckBox = (props) => {

  const [allValue, setValue] = useState({})

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
    <div id={id} className="form__itemWrap">
      {label}
        {date.map((item, i) =>
          <label key={item} >
            <br />
            <Input
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
    <div id={id} className="form__itemWrap">
      {label}
      {date.map((item, i) =>
        <div key={item} >
          <Radio
            name={ id }
            value={ item }
            checked={String(item) === String(props.value)}
            onChange={(event) => onChange(event.target.value)}
          >
          {dateTitle[i]}
          </Radio>
        </div>
      )}
    </div>
  );
}

export const CustomDateYear = (props) => {

  const { options, onChange, id, value } = props;

  let yearList = []

  if (options) {
    const yearRange = options.dateRange;

    for (let i = yearRange[0]; i <= yearRange[1]; i++) {
      yearList.push(i)
    }
  }

  return (
    <Select name={id} onChange={(value) => onChange(value)} value={value}>
      <Option value="defaultYear" disabled defaultValue > Year </Option>
      {yearList.length && yearList.map((item, i) =>
        <Option value={item} key={i}> {item} </Option>
      )}
    </Select>
  );
} 

export const CustomDateMonth = (props) => {

  const { onChange, id, value } = props;

  moment.locale('ru');
  const month = moment.months();

  return (
    <Select name={id} onChange={(value) => onChange(value)} value={value} >
      <Option value="defaultMonth" disabled defaultValue > Month </Option>
      {month.map((item, i) =>
        <Option value={i+1} key={i}> {item} </Option>
      )}
    </Select>
  );
} 

export const CustomTextArea = (props) => {
  // console.log("textArea", props);
  const { label, onChange, id, value } = props;

  return (
    <label className="form__itemWrap">
      {label}
      <TextArea
        name={label}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        value={value}
      />
    </label>
  );
}

export const CustomCheckBox = (props) => {
  // console.log(props);
  const { onChange, id, label, value } = props

  return(
    <div>
      <Checkbox 
        id={id}  
        name={id} 
        checked={value} 
        onChange={(e) => onChange(e.target.checked)}
      >
        {label}
      </Checkbox>
    </div>
  );
}
