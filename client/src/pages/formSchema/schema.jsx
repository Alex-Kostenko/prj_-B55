const schema = {
  title: "Todo",
  type: "object",
  required: ['name'],
  properties: {
    'name': { //input text
      type: "string",
      title: "Имя",
    },
    'gender': { //select
      type: "number",
      title: "Пол",
      enum: [0, 1],
      enumNames: ["female", "man"]
    },
    "dateOfBirth": {//input date
      title: "Дата рождения:",
      type: "string",
      format: "date",
      description: "* Для защиты Вашей конфиденциальности, мы сохраняем только месяц и год Вашего рождения",
    },
    'country': {
      type: "number",
      title: "Страна",
      enum: ["ukr", "mol", "rus"],
      enumNames: ["Украина", "Молдова", "Россия"]
    },
    "checkboxs": { //ckeckboxs
      type: "number",
      title: "Отношения, которые вы ищете:",
      enum: [ 1,2,3,4 ],
      enumNames: [
        "Друзья по переписке",
        "Дружба",
        "Романтические отношения / свидания",
        "Брак"
      ],
    },
    "radio": { //radio
      type: "number",
      title: "Отношения, которые вы ищете:",
      enum: [ 1,2,3,4 ],
      enumNames: [
        "Друзья по переписке",
        "Дружба",
        "Романтические отношения / свидания",
        "Брак"
      ],
    },
    
  }
};

export default schema;
