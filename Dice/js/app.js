/*

Create a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Use the html and css code included in the starter code folder to get started.

Follow the steps below to write your code.
    * generate a random number between 1 - 6 and store to a variable, random1
    * generate a random number between 1 - 6 and store to a variable, random2
    * combine 'dice-' and random1 to form the random class for the first die, firstDie
    * combine 'dice-' and random2 to form the random class for the second die, secondDie
    * get the first die by ID and update the class to firstDie (hint: document.getElementById)
    * get the first die by ID and update the class to secondDie (hint:document.getElementById)

Check to see if the "Roll the Dice" button has been clicked; if it has, run the diceRoll function 
(hint: document.getElementById)

*/

document.getElementById("roll-dice").onclick = function (){
	var random1 = Math.floor(Math.random()*5)+1; //(0, 1, 2, 3, 4, 5)+1
	var random2 = Math.floor(Math.random()*5)+1;
	var firstDie = "dice-" + random1; //dice-1,2,3,4,5,6
	var secondDie = "dice-" + random2;
	document.getElementById("first-die").className = firstDie; //className (find "class = dice dice-2", change class name to "dice-n", image will be change to "dice-n")
	document.getElementById("second-die").className = secondDie;

}