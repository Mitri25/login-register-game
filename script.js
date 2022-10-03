

// switching login / registration section
const loginSection = document.getElementById("login-box");
const registrationSection = document.getElementById("registration-box");
const registrationSwitchButton = document.getElementById("registration-switch-btn");
const loginSwitchButton = document.getElementById("login-switch-btn");


registrationSwitchButton.addEventListener("click", showRegistration);

function showRegistration() {
    registrationSection.style.display = "block";
    loginSection.style.display = "none";
};

loginSwitchButton.addEventListener("click", showLogin);

function showLogin() {
    registrationSection.style.display = "none";
    loginSection.style.display = "block";
};

// login check
let login = "admin1234";
let loginField = document.getElementById("login-field");
let password = "password1234";
let passwordField = document.getElementById("password-field");
let loginPassed = false;
const loginSubmit = document.getElementById("login-submit-btn");

loginSubmit.addEventListener("click", passLogin);

function passLogin(e) {
    e.preventDefault();

    function loginCheck(login, loginField) {
        if (loginField.value == login) {
            return true;
        }
        else {
            return false;
        }
    };

    function passwordCheck(password, passwordField) {
        if (passwordField.value == password) {
            return true;
        }
        else {
            return false;
        }
    };

    let loginStatus = loginCheck(login, loginField);
    let passwordStatus = passwordCheck(password, passwordField);

    if (loginStatus && passwordStatus) {
        loginPassed = true;
        console.log("login OK");
    }
    else {
        window.alert("wrong login or password...");
    }
};


// registration check




// loginSubmit.addEventListener("click", test);

// function test(e) {
//     e.preventDefault();
//     console.log("test function");
// }

// const resetButtton = document.getElementsByClassName("reset-submit-btn");

// resetButtton[0].addEventListener("click", consoleMessage);

// function consoleMessage() {
//     console.log("reset button clicked...");
// };





// color buttons
const title = document.getElementById("main-title");

const colorButton = document.getElementById("change-color-btn").onclick = function () {
    if (title.style.color == "black") {
        title.style.color = "purple";
    }
    else {
        title.style.color = "black";
    }

};

const greenColorButton = document.getElementById("change-color-green-btn");
greenColorButton.addEventListener("click", changeGreen);

function changeGreen() {
    title.style.color = "green";
};

