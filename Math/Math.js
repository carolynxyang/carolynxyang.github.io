var a = prompt("Please enter side a")
var b = prompt("Please enter side b")
var c = prompt("Please enter side c")

var area = function (a, b, c){
	var s = ( a + b + c)/2;
  console.log(Math.sqrt( s*(s - a)*( s - b )*( s-c )))
}

area(a,b,c)