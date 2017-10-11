//Use this file to implement Part One of your project
var animal = {};
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
//Array
var noiseArray  = ['first'];
noiseArray.unshift('zero');
noiseArray.push('second');
noiseArray[3] = 'third';
animal.noises = noiseArray;
//
var animals  = [];
animals.push(animal);
var quackers  = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};
animals.push(quackers);
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
    animal.friends.push(friend.username);
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = AnimalCreator('Moo', 'cow', 'You can count on me!', ['mooo', 'mooo', 'mooo']);
var llama = AnimalCreator('Zeny', 'llama', 'You can count on me!', ['piu', 'piu', 'piu']);

addFriend(sheep, cow);
addFriend(sheep, llama);
addFriend(llama, cow);
addFriend(cow, llama);
var myFarm = [sheep, cow, llama];
function addMatchesArray(farm) {
    for(var i = 0; i < farm.length; i++){
        farm[i].matches = [] ;
    }
}
addMatchesArray(myFarm);
function giveMatches (farm) {
    for(var i = 0; i < farm.length; i++){
        farm[i].matches.push(farm[i].friends[0]) ;
    }
}
giveMatches(myFarm);
console.log(animals);
//Nesting
var friends = [];
for(var i = 0; i<animals.length; i++){

}
