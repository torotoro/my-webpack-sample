import Person from 'Person';
import Man from 'Man';

//import Person from 'Person';
var taro = new Man();
var jiro = new Man({name:"Jiro", age:25});
var hanako = new Person({name:'Hanako', age:40});

taro.say();
jiro.say();
hanako.say();
