function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("#ffcc99")
    circle(700, 300, 400); //(x, y, diameter)


    fill("black")
    circle(600, 300, 40); //(x, y, diameter)

    fill("black")
    circle(800, 300, 40); //(x, y, diameter)

    fill("black")
    circle(700, 400, 60); //(x, y, diameter)


    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 100, 100); //(x, y, w, h)

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    point(600, 300);
    point(800, 300);
    stroke('black'); // Change the color
    strokeWeight(100); // Make the points 10 pixels in size


    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}