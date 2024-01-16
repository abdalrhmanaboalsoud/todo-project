var userName = window.prompt("Please enter your name:");
var userGender = window.prompt("Please enter your gender (Male or Female):");
var userAge = window.prompt("Please enter your age:");
if (userAge <= 0) {
    alert(" Your age should not be less or equal to ZERO!")
    let userAge = window.prompt("Please enter your true age:");
}

var welMessage = confirm("Do you want to skip the welcoming message?")
if (!welMessage) {
    if (userGender === "male") {
        alert("Hello Mr. " + userName);
    } else if (userGender === "female") {
        alert("Hello Ms. " + userName);
    } else {
        alert("Welcome to our website! Thank you for visiting.");
    }
}
console.log(userName);
console.log(userGender);
console.log(userAge);

