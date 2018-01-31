/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

//var myFavoriteList = document.querySelectorAll("fav-list");

function addToList(event, list, newThing) {
event.preventDefault();
var newThing = document.getElementById("new-thing").value;
var node = document.createElement("LI");
    var textnode = document.createTextNode(newThing);
    node.appendChild(textnode);
    list.appendChild(node);


}

window.onload = function() {
  // when someone clicks the button...

var list = document.getElementById("fav-list");
document.getElementById("new-thing-button").addEventListener("click", function(event){addToList(event, list)});
document.getElementById("new-thing").value="";


  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

function inputRequired()
{
var newThing = document.forms("new-thing").value;
if (newThing == "")
{
alert("You must type in a value");
return false;
}

}



/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


