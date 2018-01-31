var genders = ["male", "female"];
var names = ["Doctor Gonzo","Doonesbury","Periwinkle","Chipper","Elmer","Dolce","Babushka","Grover","Taxi","Rosebud","Ouija","Bossman","Truffles","Six Toes","Sadie","Seuss","Van Gogh","Bunk","Heidi"];
var dogs = [];

function adoptHandler(e) {
  e.preventDefault(); //stop form from submitting
  var dogBreed = document.querySelector("#rescue").value;
  adoptDog(genders[Math.floor(Math.random()*genders.length)], dogBreed, names[Math.floor(Math.random()*names.length)]);
}

document.querySelector("#selectDog").addEventListener("submit", adoptHandler);

document.querySelector("#addmore").addEventListener("click", adoptHandler);

function adoptDog(gender, breed, name) {
  document.getElementById("addmore").classList.remove("hidden");
  document.getElementById("done").classList.remove("hidden");
  console.log("Congratulations! Your new " + gender + " " + breed + " is named " +  name + "!");
  dogs.push("You've adopted a " + gender + " " + breed + " named " + name);
}

function finishHandler() {
  for (var i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
}

document.querySelector("#done").addEventListener("click", finishHandler);