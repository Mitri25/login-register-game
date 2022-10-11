

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

// -------------------login check--------------------
let login = "admin1234";
let loginField = document.getElementById("login-field");
let password = "password1234";
let passwordField = document.getElementById("password-field");
let loginPassed = false;
const loginSubmit = document.getElementById("login-submit-btn");

loginSubmit.addEventListener("click", passLogin);

function passLogin(e) {
    e.preventDefault();

    if (login = sessionStorage.getItem("login")) {
        login = sessionStorage.getItem("login");
    };

    if (password = sessionStorage.getItem("password")) {
        password = sessionStorage.getItem("password");
    };


    function loginCheck(login, loginField) {
        if (loginField.value == login || loginField.value == "admin1234") {
            return true;
        }
        else {
            return false;
        }
    };

    function passwordCheck(password, passwordField) {
        if (passwordField.value == password || passwordField.value == "password1234") {
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
        window.location.href = "/game.html";
    }
    else {
        window.alert("wrong login or password...");
    }
};


// --------------------registration check-----------------
let registrationLoginField = document.getElementById("registration-login-field");
let registrationPasswordField = document.getElementById("registration-password-field");
let registrationPasswordFieldRepeat = document.getElementById("registration-password-field-repeat");
let registrationNicknameField = document.getElementById("registration-nickname-field");
let registrationEmailField = document.getElementById("registration-email-field");
let agreeCheckbox = document.getElementById("registration-agreement-checkbox");
const registrationSubmit = document.getElementById("registration-submit-btn");


registrationSubmit.addEventListener("click", passRegistration);

function passRegistration(e) {
    let successRegistrationMessage = document.getElementById("success-registration-message");
    let errorMessages = [];

    if (registrationLoginField.value.length < 6) {
        errorMessages.push("Login must be at least 6 characters\n");
    }

    if (registrationPasswordField.value.length < 7) {
        errorMessages.push("Password must be at least 7 characters\n");
    }

    if (registrationPasswordFieldRepeat.value != registrationPasswordField.value) {
        errorMessages.push("Your passwords are not equal! \n Password confirmation needs to be same as password\n");
    }

    if (registrationNicknameField.value.length < 3) {
        errorMessages.push("Nickname must be at least 3 characters\n");
    }

    function checkMail(emailField) {
        return emailField.value.includes("@") ? true : false;
    };

    let emailOK = checkMail(registrationEmailField);
    if (!emailOK) {
        errorMessages.push('Email does not contain "@"\n');
    }

    if (!agreeCheckbox.checked) {
        errorMessages.push("You need to agree with terms and conditions to proceed");
    }

    if (errorMessages.length > 0) {
        e.preventDefault();
        window.alert(errorMessages);
    }
    else {
        e.preventDefault();
        successRegistrationMessage.style.display = "block";
        sessionStorage.setItem("login", registrationLoginField.value);
        sessionStorage.setItem("password", registrationPasswordField.value);

    }



};




// // color buttons
// const title = document.getElementById("main-title");

// const colorButton = document.getElementById("change-color-btn").onclick = function () {
//     if (title.style.color == "black") {
//         title.style.color = "purple";
//     }
//     else {
//         title.style.color = "black";
//     }

// };

// const greenColorButton = document.getElementById("change-color-green-btn");
// greenColorButton.addEventListener("click", changeGreen);

// function changeGreen() {
//     title.style.color = "green";
// };

