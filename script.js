const output = document.getElementById("output");
const button = document.getElementById("start");

let verses, people;
let verseDivision = [];

function divvyMathy (verses, people) {
    verseDivision = [];
    for (let i = 0; i < people; i++) {
        verseDivision.push(0);
    }
    

    while (verses >= 1) {
        for (let i = 0; i < people; i++) {
            if (verses >= 1) {
                verseDivision[i] ++;
                verses --;
            } else {break;}
        }
    }
}

button.addEventListener("click", function questionCallback() {
    verses = parseInt(prompt("how many verses?"));
    if (isNaN(verses)) {
        alert("invalid number, try again");
        questionCallback();
        return;
    }
    people = parseInt(prompt("how many people?"));

    if (isNaN(people) || people <= 0) {
        alert("invalid number, try again");
        questionCallback();
        return;
    } else if ((verses < people)) {
        alert("\nToo few verses/too many people, try again.");
        questionCallback();
        return;
    }
    divvyMathy (verses, people);
    output.textContent = `${verses} verses, ${people} people = ${verseDivision}`;
});

