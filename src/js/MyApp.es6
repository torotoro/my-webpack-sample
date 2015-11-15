//jshint esnext: true
import Man from 'Man';

//import Person from 'Person';
var taro = new Man();
var jiro = new Man({name:"Jiro", age:25});

taro.say();
jiro.say();

setTimeout(() => {
  require.ensure(["Woman"], function () {
    let Woman;
    let hanako;

    Woman = require("Woman");
    hanako = new Woman({name:'Hanako', age:40});
    hanako.say();
  });
}, 3000);
