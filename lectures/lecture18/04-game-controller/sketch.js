let x = 100;
let y = 200;
let width = 50;
let fillColor = 'lightblue';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

//moves the circle using keyboard
function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y=y-10;
        // console.log('The user just pressed the up arrow!');
    }

    if (ev.code === 'ArrowDown') {
        y=y+10;
    }

    if (ev.code === 'ArrowLeft') {
        x=x-10;
    }
    
    if (ev.code === 'ArrowRight') {
        x=x+10;
    }

    if (ev.code === 'Space') {
        width=width+5;
        //width += 10;    <--shortcut
    }

    if (ev.code === 'Minus') {
        width=width-5;
        //width -= 10;    <--shortcut
    }
    
    if (ev.code === 'KeyR') {
        fillColor='red';
    }

    if (ev.code === 'KeyB') {
        fillColor='blue';
    }


    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
