var prompt = require('sync-prompt').prompt;

var people = [], dogs = [], cats = [], bees = [];

var person1 = {name:'bob', age:18, pets:[]};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('Is it a (d)og, (c)at or (b)ee? or (q)uit ');
while (option !== 'q'){
  switch(option){
    case 'd':
      var name = prompt ('What is your dogs name? ');
      var age = prompt('How old is your dog? ');
      var weight = prompt('How much does your dog weight? ');
      var dog = {name:name, age:age, weight:weight};
      dogs.push(dog);
      break;
    case 'c':
      var color = prompt ('What color is your cat? ');
      var length = prompt ('How long is your cats tail? ');
      var whisker = prompt ('How long is your cats whiskers? ');
      var cat = {color:color, length:length, whisker:whisker};
      cats.push(cat);
      break;
    case 'b':
      var small = prompt ('how small is your bee? ');
      var venom = prompt ('how much venom does your bee have? ');
      var stripes = prompt ('how many stripes does your bee have? ');
      var bee = {small:small, venom:venom, stripes:stripes};
      bees.push(bee);
      break;
  }
  option = prompt('Is it a (d)og, (c)at or (b)ee? or (q)uit ');
}


