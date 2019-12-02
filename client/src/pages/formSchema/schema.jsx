const schema = {
  title: "",
  type: "object",
  required: ['name'],
  properties: {
    'formTitle': { //formTitle
      type: "string",
      title: "Редактировать профиль",
      description: "Ответы на эти вопросы профиля помогут другим пользователям найти вас в результатах поиска и помогут нам найти для вас более точные соответствия. Ответьте на все вопросы ниже для завершения этого шага.",
    },
    'subTitle-mainData': { //subtitle
      type: "string",
      title: "Основные сведения о вас:",
    },
    'name': { //input text
      type: "string",
      title: "Имя:",
    },
    'gender': { //select
      type: "number",
      title: "Пол",
      enum: [0, 1],
      enumNames: ["female", "man"]
    },
    "dateOfBirth": {//input date
      type: "object",
      properties: {
        'titleDateOfBirth':{
          title: "Дата рождения:",
          type: "object",
        },
        'mouth':{
          type: "string",
        },
        'year':{
          type: "string",
        },
        'descriptioneDateOfBirth': {
          title: '',
          description: "* Для защиты Вашей конфиденциальности, мы сохраняем только месяц и год Вашего рождения",
          type: "object",
        },
      }
    },
    'country': {
      type: "string",
      title: "Страна",
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
  }
};

export default schema;
