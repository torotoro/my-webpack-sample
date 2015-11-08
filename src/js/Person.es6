class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say(){
    console.log("Hello! My name is", this.name, ". I'm", this.age, "years old.");
  }
}

(() => {
  let who = new Person("Taro", 30);
  who.say();
})();
