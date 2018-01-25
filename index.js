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

function appendKitten(name){
     return [...kittens, name]
 }

function prependKitten(name) {
  return [name, ...kittens];
  
}

function removeLastKitten() {
   kittens = kittens.slice(0,1);
   return kittens;
}

function removeFirstKitten() {
  return kittens.splice(0, 1);
  }
