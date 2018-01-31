//Global Variables (create var to store robot & carolyn's history)

var robotHistory = []; // use [] when you separate items into list
var carolynHistory = [];


//Functions

//Update (update includes four parameters: input-conversation evt.target.value, chatPane-Carolyn/Robot, speechBubbble, historyArray-robotHistory/carolynHistory)
function update(input, chatPane, speechBubble, historyArray) {

	historyArray.push(input); //push new input to the end of historyArray
	document.getElementById(chatPane).innerHTML = ""; //clear chatPane 
	for (var i = 0; i < historyArray.length; i++){
		document.getElementById(chatPane).innerHTML += "<div class=\""+speechBubble+"\">" + historyArray[i] + "</div>"
	} 
	// += means x=x+y
	// <div>conversation</div> it seperates with next line.
	// "<div>" +  _____ + "</div>"   add "", otherwise it will read as math equation < small > big
	// add \, " quote can be active in javascript
	// "+____+" inside quote, it unquotes the "speechBubble", speechBubble becomes a variable, it can be right/left now.
	
	return historyArray;
}

//Names
var names = ["Bryan A.","Christie","Mark","Richard","Bailey","Bryan D.","David","Derek","Elaine","Ellen","Emily","Joe M.","Joe W.","Kenneth","Liana","Morris","Rebecca","Zach"];

function wednesdayNames(){
	names = shuffle(names); 
	return names[0] + ", " + names[1] + ", " + names[2]+ ".";
}

function shuffle(a) { //shuffle
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//Three Answers
var threeanswers = ["Yes, Carolyn.","I'm on it.","Sent."];

function pickanswer(){
	return threeanswers[Math.floor(Math.random()*threeanswers.length)];
}

//Responds (switch is used to perform different actions based on different conditions. carolyn line vs. robot line)
function respond(input){
	switch (input){
		case "I want to schedule a study group.":
			return "Who do you want to invite?";
		case "Please invite people who have time available on Wednesday 11AM.":
			return "Here are the people who have an opening on their calendar: " + wednesdayNames(); //function wednames
		case "Please send an invite to their email.":
			return pickanswer(); //function pickanswer
		default:
			return "¯\\_(ツ)_/¯ Sorry";
	}
}


//Event Handler: Things that happen to HTML elements. User's action: click, submit, input field was changed
//("keyup" occus when the user release a key.) document.getElementById("x").addEventListener("keyup", myFunction);
document.getElementById("chatInput").addEventListener("keyup", function(evt) {
	if(evt.keyCode==13){  //keyCode==13, "Enter" key
		carolynHistory = update(evt.target.value, "Carolyn", "speechbubbleleft", carolynHistory); 
		response = respond(evt.target.value); //Find Robot's respond
		evt.target.value = ""; //clear form field after user tap Enter
		robotHistory = update(response, "Robot", "speechbubbleright", robotHistory);
	    
	}
});

document.getElementById("chatForm").addEventListener("submit",function(evt){
	evt.preventDefault(); //prevent reload page after submit
});


//Global Programs, call functions

//Opening
robotHistory = update("What can I help you with?", "Robot", "speechbubbleright", robotHistory);

