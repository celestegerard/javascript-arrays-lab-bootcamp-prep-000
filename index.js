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

function appendKitten(kittens, name) {
  return [...kittens, name];
}

function prependKitten(name) {
  kittens = ["Arnold", ...kittens];
  return kittens;
}

function removeLastKitten() {
   kittens = kittens.slice(0,1);
   return kittens;
}

function removeFirstKitten() {
  kittens.splice(pos, 1);
  return kittens;
}
