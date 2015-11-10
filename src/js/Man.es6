import Person from "Person";

class Man extends Person {
  constructor({age = 30, name = "Taro"} = {}) {
    super({name, age});
    this.sex = "Male";
  }
}

export default Man;
