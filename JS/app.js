"use strict";

function showAlert(message) {
    alert(message);
}

function getUserInput(promptMessage) {
    var userInput = window.prompt(promptMessage);

    if (userInput === null || userInput === "") {
        showAlert("Invalid input.");
        return "invalid";
    } else {
        return userInput;
    }
}

function greetUser(gender, name) {
    if (gender === "male") {
        showAlert("Hello Mr. " + name);
    } else if (gender === "female") {
        showAlert("Hello Ms. " + name);
    } else {
        showAlert("Welcome to our website! Thank you for visiting.");
    }
}

function redirectToCuteCatsPage() {
    window.location.href = "https://www.pinterest.com/search/pins/?q=cute%20cats&rs=typed";
}

function askName() {
    return getUserInput("Please enter your name:");
}

function askGender() {
    return getUserInput("Please enter your gender (Male or Female):");
}

function askAge() {
    var age = getUserInput("Please enter your age:");

    if (isNaN(age) || age <= 0) {
        showAlert("Please enter a valid age greater than zero.");
        age = getUserInput("Please enter your true age:");
    }

    return age;
}

function askSkipWelcomingMessage() {
    return confirm("Do you want to skip the welcoming message?");
}

function askLikesProgramming() {
    var response = getUserInput("Do you like programming? (yes/no)").toLowerCase();

    if (response === "no") {
        showAlert("You don't really fit in with us!");
    } else if (response === "yes") {
        showAlert("That's really nice!");
    }

    return response;
}

function askWantsUpdates() {
    var response = getUserInput("Would you like to receive updates from us? (yes/no)").toLowerCase();

    if (response === "no") {
        showAlert("You won't receive updates from us.");
    }

    return response;
}

function askLoveCats() {
    var response = getUserInput("Do you love cats? (yes/no)").toLowerCase();

    if (response === "no") {
        showAlert("You should see some cats to change your mind, then come back!");
        redirectToCuteCatsPage();
    } else if (response === "yes") {
        showAlert("I love you so!");
    }

    return response;
}

function main() {
    var userName = askName();
    var userGender = askGender();
    var userAge = askAge();

    if (!askSkipWelcomingMessage()) {
        greetUser(userGender, userName);
    }

    var likesProgramming = askLikesProgramming();
    var wantsUpdates = askWantsUpdates();
    var loveCats = askLoveCats();

    var dataList = [
        "Name: " + userName,
        "Gender: " + userGender,
        "Age: " + userAge,
        "Likes Programming: " + likesProgramming,
        "Loves cats: " + loveCats,
        "Wants Updates: " + wantsUpdates
    ];

    for (let i = 0; i < dataList.length; i++) {
        console.log(dataList[i]);
    }
}

main();