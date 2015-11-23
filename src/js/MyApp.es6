//jshint esnext: true
import Man from 'Man';
import Animal from 'Animal';

//import Person from 'Person';
var taro = new Man();
var jiro = new Man({name:"Jiro", age:25});
var dog = new Animal({name:"Dog", age:1});

function addTextAsDiv (text) {
  var el = document.createElement("div");
  el.innerHTML = text;
  document.body.appendChild(el);
}
addTextAsDiv(taro.say());
addTextAsDiv(jiro.say());
addTextAsDiv(dog.say());

setTimeout(() => {
  require.ensure(["Woman"], function () {
    let Woman;
    let hanako;

    Woman = require("Woman");
    hanako = new Woman({name:'Hanako', age:40});
    hanako.say();
  });
}, 3000);
