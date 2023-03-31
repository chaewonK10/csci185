function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 200, 'yellow', 'green');
    makeCreature(500, 300, 'blue', 'white');
    makeCreature(500, 100, 'purple', 'pink');


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor) {
    // your creature:
    fill(fillColor)
    //face:
    circle(x, y, 300)

    fill(eyeColor)
    //left eye:
    ellipse(x - 50, y - 50, 30, 40)
    //right eye:
    ellipse(x + 50, y - 50, 30, 40)

    

}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'yellow', 'black')
}