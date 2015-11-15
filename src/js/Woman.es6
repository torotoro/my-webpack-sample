//jshint esnext: true
import Person from "Person";

class Woman extends Person {
  constructor({age = 20, name = "Hanako"} = {}) { // This line is detected warning because JSHint 2.8.0 is insufficient correspondence of destructuring features.
    super({name, age});
    this.sex = "Female";
  }
}

// Exporting declarationes
export default Woman;
export {Person};
module.exports = Woman; // To use for a AMD style require function
