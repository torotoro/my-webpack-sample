//jshint esnext: true
import Person from "Person";

class Man extends Person {
  constructor({age = 30, name = "Taro"} = {}) { // This line is detected warning because JSHint 2.8.0 is insufficient correspondence of destructuring features.
    super({name, age});
    this.sex = "Male";
  }
}

export default Man;
export {Person};
