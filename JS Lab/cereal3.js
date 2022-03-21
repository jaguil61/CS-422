// DONE: create Cereal class with fields 'name', 'count', 'img' -- must be in this order!
class Cereal {
  constructor (name, count, img, id) {
    this.name = name;
    this.count = count;
    this.img = img;
    this.id = id;
  }
  
  // increments the count by one
  increCount () {
    this.count++;
    return this.count;
  }
}

// lines 17-20 creates the cereal instances and the cereal array
let frostedFlakes = new Cereal("Frosted Flakes", 0, "frostedFlakes.jpg", "ff-count");
let luckyCharms = new Cereal("Lucky Charms", 0, "luckyCharms.png", "lc-count");
let captainCrunch = new Cereal("Captain Crunch", 0, "capnCrunch.png", "cc-count");

let cerealArray = [frostedFlakes, luckyCharms, captainCrunch];

//DONE: Add a changeCerealName function that takes in a Cereal instance and sets the name
// using the 'name' field. (same as you did in exercise 1). Keep the function name as listed in the TODO
function changeCerealName(theCereal) {
  document.getElementById("cereal-name").innerHTML = theCereal.name;
}

//DONE: Add a changeCerealImg function that takes in a Cereal instance and sets the img
// using the 'img' field. (same as you did in exercise 1). Keep the function name as listed in the TODO
function changeCerealImg(theCereal) {
  document.getElementById("cereal-img").src = theCereal.img;
}

// IMPORTANT: this function also takes in a Cereal instance!
function incrementCerealCount(theCereal) {
  // DONE: This solution should not require an if
  // statement. The function body for incrementCerealCount() does not need to be longer than
  // two lines of code.
  // hint: You’re going to need to update the td element of a Cereal without knowing
  // whether it’s Frosted Flakes, Captain Crunch, or Lucky Charms. Think about how you can
  // augment the Cereal class to do this!

  theCereal.increCount();
  cerealArray.map(c => {document.getElementById(theCereal.id).innerHTML = theCereal.count});
}

// DONE: write the function changeCereal() USING ES6 SYNTAX. This function should do the following: 
// (1) generate a random index, which you will use to chose a cereal from the cereal array. 
//     you can do this with the following line of code:
//     let ind = Math.floor(Math.random() * 3);
// (2) get the cereal object from the cereal array using the index 'ind' generated above
// (3) call the appropriate functions (there should be 3!) to change the cereal name, image, and cereal counts
const changeCereal = () => { // <- ES6 Syntax 
  //create random index
  let ind = Math.floor(Math.random() * 3);

  //grab the element in the array based on the random index
  let theCereal = cerealArray[ind];

  //update html elements
  changeCerealName(theCereal);
  changeCerealImg(theCereal);
  incrementCerealCount(theCereal); 
};
