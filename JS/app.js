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

function main() {
    var userName = getUserInput("Please enter your name:");
    var userGender = getUserInput("Please enter your gender (Male or Female):");
    var userAge = getUserInput("Please enter your age:");

    if (isNaN(userAge) || userAge <= 0) {
        showAlert("Please enter a valid age greater than zero.");
        userAge = getUserInput("Please enter your true age:");
    }

    var welMessage = confirm("Do you want to skip the welcoming message?");
    if (!welMessage) {
        greetUser(userGender, userName);
    }

    var likesProgramming = getUserInput("Do you like programming? (yes/no)").toLowerCase();
    if (likesProgramming === "no") {
        showAlert("You don't really fit in with us!");
    }else if (likesProgramming === "yes"){
        showAlert("That's really nice!")
    }


    var wantsUpdates = getUserInput("Would you like to receive updates from us? (yes/no)").toLowerCase();
    if (wantsUpdates === "no") {
        showAlert("You won't receive updates from us.");
    }

    var loveCats = getUserInput("Do you love cats? (yes/no)").toLowerCase();

    if (loveCats === "no") {
        showAlert("You should see some cats to change your mind, then come back!");
        return redirectToCuteCatsPage();
    }else if (loveCats === "yes"){
        showAlert("I love you so!");
    }

    var dataList = [];

    dataList.push("Name: " + userName);
    dataList.push("Gender: " + userGender);
    dataList.push("Age: " + userAge);
    dataList.push("Likes Programming: " + likesProgramming);
    dataList.push("Loves cats: " + loveCats);
    dataList.push("Wants Updates: " + wantsUpdates);

    for (let i = 0; i < dataList.length; i++) {
        console.log(dataList[i]);
    }
}

main();