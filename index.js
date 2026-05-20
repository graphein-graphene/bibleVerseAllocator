
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
let verses = 0;
let people = 0;
verseDivision = [];
function rlQuestionVerses(){

    
    rl.question("How many verses?\n", 
    (answer) => {
        verses = parseInt(answer);
        if (isNaN(verses)) {
            console.log("invalid number, try again");
            rlQuestionVerses();
            return;
        }
        rlQuestionP();
        
    });

    
}

function rlQuestionP() {
    rl.question("\nHow many people?\n", 
        (answer) => {
            people = parseInt(answer);
            if (isNaN(people) || people <= 0) {
                console.log("invalid number, try again");
                rlQuestionP();
                return;
            } else if ((verses < people) || people <= 0) {
                
                console.log("\nToo few verses/too many people, try again.");
                rlQuestionVerses();
                return;
            }
            divvyMathy (verses, people);
            console.log(`Output:\n${verses} verses, ${people} people = ${verseDivision}`);

            rl.close();
        }

        
    );

}


function divvyMathy (verses, people) {
    verseDivision = [];
    let remainder = verses % people;

    let clean = remainder == 0;

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
function main() {
    
    rlQuestionVerses();
    
}
main();