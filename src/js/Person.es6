export default class Person {
  constructor({name, age}) {
    this.sex = "Person";
    this.name = name;
    this.age = age;
  }

  say(){
    console.log("Hello! My name is", this.name, ". I'm", this.age, "years old.");
    console.log("I'm a", this.sex, ".");
  }
}
