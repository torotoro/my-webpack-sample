import Person from "Person";

export default class Man extends Person {
  constructor(name = "Taro", age = 30) {
    super(name, age);
    this.sex = "Male";
  }
}
