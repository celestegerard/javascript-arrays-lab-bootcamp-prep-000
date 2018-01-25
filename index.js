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
  return kittens = [...kittens, "Broom"];
}

function prependKitten(name) {
  return kittens = ["Arnold", ...kittens];
}

function removeLastKitten() {
   kittens = kittens.slice(0,1);
}

function removeFirstKitten() {
  removes the first kitten from the kittens array
  returns a new array;
  this is a non-destructive method;
}
*/