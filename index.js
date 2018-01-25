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

function prependKitten(name) {
  kittens = ["Arnold", ...kittens];
  return kittens;
}

function removeLastKitten() {
   kittens = kittens.slice(0,1);
   return kittens;
}

function removeFirstKitten() {
  kittens = kittens.slice(1,2);
  return kittens;
}
