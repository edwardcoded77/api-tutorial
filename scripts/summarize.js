import pets from "../data.json";
console.log(pets.length);

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + ".";
}


function weightLine(pet) {
  let line = pet.name + " weighs up to ";
  line = line + pet.max_weight + " pounds.";
  return line;
}

function playScore(pet) {
  return pet.playfulness * 2;
}

function scoreLine(score) {
  return "Play score: " + score + " out of 10.";
}

function playfulVerdict(pet){
    if (pet.playfulness >= 4 ){
        return "very playful";
    } else {
        return "calm";
    }
}

let first = summarize(pets[0]);
let second = weightLine(pets[1]);
let third = scoreLine(playScore(pets[2]));
let fourth  = playfulVerdict(pets[0]);
let fifth   = playfulVerdict(pets[3]);

console.log(first);
console.log(second);
console.log(third);
console.log(fourth), console.log(fifth);
