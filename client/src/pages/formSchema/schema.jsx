import I18n from '../../i18n';

const schema = {
  title: "",
  type: "object",
  required: ['username'],
  properties: {
    'formTitle': { //formTitle
      type: "string",
      title: I18n.title,
      description: I18n.description,
    },
    'subTitle-mainData': { //subtitle
      type: "string",
      title: "Основные сведения о вас:",
    },
    'username': { //input text
      type: "string",
      title: I18n.userName,
    },
    'gender': { //select
      type: "number",
      title: I18n.gender,
      enum: [0, 1],
      enumNames: ["female", "man"]
    },
    "dateOfBirth": {//input date
      type: "object",
      properties: {
        'titleDateOfBirth':{
          title: I18n.date,
          type: "object",
        },
        'mouth':{
          type: "number",
        },
        'year':{
          type: "number",
        },
        'descriptioneDateOfBirth': {
          title: '',
          description: I18n.warning,
          type: "object",
        },
      }
    },
    'country': {
      type: "string",
      title: I18n.country,
      enum: ["ukr", "mol", "rus"],
      enumNames: ["Украина", "Молдова", "Россия"]
    },
    "checkboxs": {//input date
      title: "Отношения, которые вы ищете:",
      type: "object",
      properties: {
        '1': {
          title: 'Дружба',
          type: "boolean",
        },
        '2': {
          title: 'Романтические отношения / свидания',
          type: "boolean",
        },
        '3': {
          title: 'Друзья по переписке',
          type: "boolean",
        },
        '4': {
          title: 'Брак',
          type: "boolean",
        },
      }
    },
    "radio": { //radio
      type: "number",
      title: "Отношения, которые вы ищете:",
      enum: [ 0,1,2,3 ],
      enumNames: [
        "Друзья по переписке",
        "Дружба",
        "Романтические отношения / свидания",
        "Брак"
      ],
    },
    "aboutMe": { //textArea
      type: "string",
      title: "Немного о себе:",
    },
    'subTitle-secondaryData': { //subtitle
      type: "string",
      title: "Ваша внешность",
    },
    'lang': { //subtitle
      type: "string",
      title: "Владения языками:",
    },
  }
};

export default schema;
