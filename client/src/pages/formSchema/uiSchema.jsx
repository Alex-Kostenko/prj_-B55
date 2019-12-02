const uiSchema = {
  'formTitle':{
    'ui:title': ' ',
    'ui:description': ' ',
    'ui:widget': 'FormTitle',
  },
  'subTitle-mainData':{
    'ui:title': ' ',
    'ui:widget': 'SubTitle',
  },
  'dateOfBirth': {
    'ui:title': ' ',
    'titleDateOfBirth':{},
    'mouth':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomDateMonth',
    },
    'year':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomDateYear',
      'ui:options': {
        'dateRange': [
          1980,
          2030
        ],
      }
    },
    'descriptioneDateOfBirth': {
      'ui:field': 'hidden',
      'ui:widget': '',
      'ui:title': ' ',
    },
  },
  'gender': {
    'ui:widget': 'CustomSelect',
    'ui:field': 'hidden',
  },
  'name': {
    'ui:widget': 'CustomInput',
    'ui:field': 'hidden',
  },
  // 'checkboxs': {
  //   'ui:widget': 'CustomMultiCheckBox',
  //   'ui:field': 'hidden',
  // },
  'checkboxs': {
    '1':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomCheckBox',
    },
    '2':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomCheckBox',
    },
    '3':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomCheckBox',
    },
    '4':{
      'ui:field': 'hidden',
      'ui:widget': 'CustomCheckBox',
    },
  },
  'radio': {
    'ui:widget': 'CustomRadioBtn',
    'ui:field': 'hidden',
  },
  'country':{
    'ui:widget': 'CustomSelect',
    'ui:field': 'hidden',
  },
  'aboutMe':{
    'ui:widget': 'CustomTextArea',
    'ui:field': 'hidden',
  },
  'subTitle-secondaryData':{
    'ui:title': ' ',
    'ui:widget': 'SubTitle',
  }
}

export default uiSchema;
