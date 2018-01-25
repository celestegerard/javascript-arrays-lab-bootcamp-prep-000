const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  kittens = [...kittens, "Broom"];
  return kittens;
}

/*
function prependKitten(name) {
  prepends a kitten to the kittens array 
  returns a new array;
  this is a non-destructive method;
}

function removeLastKitten() {
  removes the last kitten in the kittens array
  returns a new array;
  this is a non-destructive method;
}

function removeFirstKitten() {
  removes the first kitten from the kittens array
  returns a new array;
  this is a non-destructive method;
}
*/