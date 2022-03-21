// DONE: create Cereal class with fields 'name', 'count', 'img' -- must be in this order!
class Cereal {
  constructor (name, count, img) {
    this.name = name;
    this.count = count;
    this.img = img;
  }
}

// lines 10-13 creates the cereal instances and the cereal array
let frostedFlakes = new Cereal("Frosted Flakes", 0, "frostedFlakes.jpg");
let luckyCharms = new Cereal("Lucky Charms", 0, "luckyCharms.png");
let captainCrunch = new Cereal("Captain Crunch", 0, "capnCrunch.png");

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
  // DONE: create 3 if statements, checking if the cereal name is "Frosted Flakes",
  // "Lucky Charms", or "Captain Crunch".
  // hint: you can access the name of the cereal using cereal.name

  // DONE: inside each if statement, grab the td element with the corresponding id
  // and set the contents (the cereal count) to the current cereal count + 1.
  // Reference the html file to get the id! 
  // DONE: increment the cereal count of the current instance.

  if (theCereal.name == "Frosted Flakes") {
    theCereal.count += 1;
    //console.log("ff-count = " + theCereal.count); // for debugging purposes
    document.getElementById("ff-count").innerHTML = theCereal.count;
  }

  else if (theCereal.name == "Lucky Charms") {
    theCereal.count += 1;
    //console.log("lc-count = " + theCereal.count); // for debugging purposes
    document.getElementById("lc-count").innerHTML = theCereal.count;
  }

  else { //theCereal.name == "Captain Crunch"
    theCereal.count += 1;
    //console.log("cc-count = " + theCereal.count); // for debugging purposes
    document.getElementById("cc-count").innerHTML = theCereal.count;
  }
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
