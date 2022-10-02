
const title = document.getElementById("main-title");

const colorButton = document.getElementById("change-color-btn").onclick = function () {
    if (title.style.color == "black") {
        title.style.color = "purple";
    }
    else {
        title.style.color = "black";
    }

}

const greenColorButton = document.getElementById("change-color-green-btn");
greenColorButton.addEventListener("click", changeGreen);

function changeGreen() {
    title.style.color = "green";
}

