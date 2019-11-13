const uiSchema = {
  // 'ui:field': 'hidden',
  "dateOfBirth": {
    'ui:field': 'hidden',
    "ui:widget": "CustomDateYearMonth",
    "ui:options": {
      "yearsRange": [
        1980,
        2030
      ],
    }
  },
  'gender': {
    "ui:widget": "CustomSelect",
    'ui:field': 'hidden',
  },
  'name': {
    'ui:widget': 'CustomInput',
    'ui:field': 'hidden',
  },
  'checkboxs': {
    'ui:widget': 'CustomMultiCheckBox',
    'ui:field': 'hidden',
  },
  'radio': {
    'ui:widget': 'CustomRadioBtn',
    'ui:field': 'hidden',
  },
  'country':{
    'ui:widget': 'CustomSelect',
    'ui:field': 'hidden',
  }
}

export default uiSchema;
