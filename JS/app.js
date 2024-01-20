function getUserInput(promptMessage) {
    return window.prompt(promptMessage);
}

function showAlert(message) {
    alert(message);
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

    if (userAge <= 0) {
        showAlert("Your age should not be less or equal to ZERO!");
        userAge = getUserInput("Please enter your true age:");
    }

    var welMessage = confirm("Do you want to skip the welcoming message?");
    if (!welMessage) {
        greetUser(userGender, userName);
    }

    console.log("Name: " + userName);
    console.log("Gender: " + userGender);
    console.log("Age: " + userAge);

    var likesProgramming = getUserInput("Do you like programming? (yes/no)").toLowerCase().trim();
    if (likesProgramming === "no") {
        showAlert("You don't really fit in with us!");
        return;
    }

    var wantsUpdates = getUserInput("Would you like to receive updates from us? (yes/no)").toLowerCase().trim();
    var loveCats = getUserInput("Do you love cats? (yes/no)").toLowerCase().trim();

    if (loveCats === "no") {
        showAlert("You should see some cats to change your mind, then come back!");
        redirectToCuteCatsPage();
        return;
    }

    showAlert("I love you so");

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