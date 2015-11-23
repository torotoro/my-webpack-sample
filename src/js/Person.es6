//jshint esnext: true
export default class Person {
  constructor({name, age}) {
    this.sex = "Person";
    this.name = name;
    this.age = age;
  }

  say(){
    return "Hello! My name is" + this.name + ". I'm" + this.age + "years old.¥n"+"I'm a" + this.sex + ".";
  }
}
