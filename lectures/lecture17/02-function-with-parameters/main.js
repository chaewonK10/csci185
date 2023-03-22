// make a function:

function makeRed() {
    // turn the body tag's background to red
    document.querySelector("body").style.backgroundColor = 'red';
}

function makeBlue() {
    document.querySelector("body").style.backgroundColor = 'blue';
}

function makeGreen() {
    document.querySelector("body").style.backgroundColor = 'green';
}

function changeColor(color, selector) {

//go and select the selector that the user asked for
//and then set it's background color to the color the user asked for:
    document.querySelector(selector).style.backgroundColor = color;
}