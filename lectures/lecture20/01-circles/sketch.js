function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //1. What do you want to repeat?
    //circle (x,size)
    //2.How long? 5times
    //3. what do you want to change each time?
    //y -> add 50 each time

    noFill();

    let counter = 0;
    while (counter < 16) {
        circle(100, counter*50, 50+counter*10);
        circle(300, counter*50, 50+counter*10);
        circle(500, counter*50, 50+counter*10);
        counter +=1;
    }
    
    //other option
    // let y = 200;
    // while (y <= 400) {
    //     circle(100, y, 50);
    //     y +=50;
    // }

    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
