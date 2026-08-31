
let button = document.getElementById("summarize-button");
let output = document.getElementById("output");

function summarize(pet) {
  return pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.";
}

// function summarize(pet) {
//     console.log(pet.name + " is a " + pet.breed);
// }

button.addEventListener("click", function () {
  output.textContent = summarize(pets[0]);
});
