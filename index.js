var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


const person = {
  name: "Sarah",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}

const collections = [1, [2, [4, [5, [6]], 3]]]
console.log(collections[1])
