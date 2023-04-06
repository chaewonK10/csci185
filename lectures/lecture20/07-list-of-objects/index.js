const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Brenda", pic: "images/spongebob.png", score: 10} ,
    { name: "Wanda", pic: "images/spongebob.png", score: 960 },
    { name: "Maria", pic: "images/patrick.png", score: 980 },
    { name: "Jasper", pic: "images/spongebob.png", score: 600 },
    { name: "Malik", pic: "images/patrick.png", score: 40 }
];

function pointForWanda() {
    people[2].score += 10;
    showWinner();
}

function pointForMaria() {
    people[3].score += 10;
    showWinner();
}

function showWinner() {
    //if Wanda's score is larger than maria's --> show wanda(2)
    //otherwise, if maria's score is higher --> show Maria(3)
    //otherwiers, it's a tie!

    if (people[2].score == people[3].score) {
        document.querySelector(".players").innerHTML = "It's a tie!";
    } else if (people[2].score > people[3].score) {
        let template = `
            <div class="card">
                <div>
                    <img src="${people[2].pic}">
                    <p>${people[2].name} scored ${people[2].score} points</p>
                </div>
            </div>
        `;
        document.querySelector(".players").innerHTML = template;
    } else {
        let template = `
            <div class="card">
                <div>
                    <img src="${people[3].pic}">
                    <p>${people[3].name} scored ${people[3].score} points</p>
                </div>
            </div>
        `;
        document.querySelector(".players").innerHTML = template;
    }
    
    
        let template = `
            <div class="card">
                <div>
                <img src="${people[i].pic}">
                <p>${people[i].name} scored ${people[i].score} points</p>
                </div>
            </div>
`       ;
        document.querySelector(".players").innerHTML = template;
        ++i;


}


