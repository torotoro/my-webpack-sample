class Age {
	private age: number;

	constructor(age: number) {
		this.age = age;
	}

	stringify() {
		var str: string;

		if (this.age < 0) {
			str = "Unknown";
		} else if (this.age < 2) {
			str = this.age.toString()+" year old";
		} else {
      str = this.age.toString()+" years old";
    }

		return str;
	}
}

export default class Animal {
  private name: string;
  private age: Age;

  constructor(arg:{name: string, age: number}) {
    this.name = arg.name;
    this.age = new Age(arg.age);
  }

  say(){
    return "This is a " + this.name + ". It is " + this.age.stringify() + ".";
  }
}
