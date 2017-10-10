//Use this file to implement Part One of your project
/*var animal = {};
animal.username = "John";
animal["tagline"] = "Wazzzuppp!!";


var count = 0;
for (var key in animal){
  if(key === "username"){
    console.log('Hi my name is ' + animal.username);
  }else if(key === 'tagline'){
    console.log('I like to say ' + animal.tagline);
  }
  count++
}
console.log(count);
//Array
var noiseArray  = ['first'];
noiseArray.unshift('zero');
noiseArray.push('second');
noiseArray[3] = 'third';
console.log(noiseArray);
console.log(noiseArray[noiseArray.length-1]);
animal.noises = noiseArray;
console.log(animal);
//
var animals  = [];
animals.push(animal);
var quackers  = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};
animals.push(quackers);
console.log(animals);*/
function AnimalTestUser(username){
  var otherArgs = [];
  if(arguments.length>1){
      for(var i = 1; i<arguments.length; i++){
          otherArgs.push(arguments[i]);
      }
  }
  return {
    username: username,
    otherArgs : otherArgs
  }
}
function AnimalCreator(username, species, tagline, noises){
  return{
      username: username,
      species : species,
      tagline: tagline,
      noises: noises,
      friends: []
  }
}
function addFriend (animal, friend) {
    animal.friends.push(friend);
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = AnimalCreator('Moo', 'cow', 'You can count on me!', ['mooo', 'mooo', 'mooo']);
var llama = AnimalCreator('Zeny', 'llama', 'You can count on me!', ['piu', 'piu', 'piu']);

addFriend(sheep, cow);
console.log(sheep);
// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: [{username: 'Moo', species: 'cow'...}]
// }
addFriend(sheep, llama);
console.log(sheep);
// { username: 'Cloud',
//  species: 'sheep',
//  tagline: 'You can count on me!',
//  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
// }