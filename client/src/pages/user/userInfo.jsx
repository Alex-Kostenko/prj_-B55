import React from 'react';
import Form from "react-jsonschema-form";
import schema from "../formSchema/schema";
import widgets from "../formSchema/widgets";
import uiSchema from "../formSchema/uiSchema";

function ErrorListTemplate(props) {
  const { errors } = props;
  console.log(errors);
  
  return (
    <ul>
      {errors.map(error => (
        <li key={error.stack}>
          {error.stack}
        </li>
      ))}
    </ul>
  );
}



const log = (type) => console.log.bind(console, type);

const UserInfo = () => {

  const formData = {
    'name': 'UserName',
    'gender': 1,
    'dateOfBirth': {'mouth': 5, 'year': 2000},
    'country': "ukr",
    'checkboxs': { 1: true },
    'radio': 2,
    'aboutMe': 'about user about user about user'
  };

  return (
    <Form 
      schema={schema}
      widgets={widgets}
      formData={formData}
      uiSchema={uiSchema}
      ErrorList={ErrorListTemplate} 
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")} 
    />
  );
};

export default UserInfo;
