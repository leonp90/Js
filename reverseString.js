// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223 

//String Methods
function reverse (n){
	return n.split("").reverse().join("");
}
//Loop
function reverse(n) {
    var newStr = "";
    for (var i = n.length - 1; i >= 0; i--) {
        newString += n[i];
    }
    return newStr;
}

//Recursion
function reverse(n) {
  return (n === '') ? '' : reverse(n.substr(1)) + str.charAt(0);
}