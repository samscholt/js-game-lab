let userHealth = 40;
let grantHealth = 10;
let grantDeaths = 0;
let userName;

function playGame() {
    while (userHealth > 0 && grantDeaths < 3) {
        fight();

        if (grantHealth <= 0) {
            grantDeaths++;
            console.log(`Grant has been defeated ${grantDeaths} out of the necessary 3 times.`);

            // reset Grant's health for the next round
            grantHealth = 10;
        }
    }

    if (userHealth <= 0 && grantDeaths >= 3) {
        // user and Grant both defeated
        console.log("Unbelievable! You have both perished and it is a draw.");
    } else if (userHealth <= 0) {
        // user defeated
        console.log("Grant has defeated you! Better luck next time.");
    } else {
        // Grant defeated
        console.log("You emerge from battle victorious! Congratulations!");
    }
}

function fight() {
    userHealth -= getRandomDamage(1, 2);
    grantHealth -= getRandomDamage(1, 2);

    console.log(`${userName} has ${userHealth} health left.`);
    console.log(`Grant has ${grantHealth} health left.`);
}

function getRandomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let willingToPlay = prompt("Do you want to play?");

if (willingToPlay.toLowerCase() === "yes") {       // be nice to user - make their answer not case sensitive
    userName = prompt("Excellent! What is your name?");

    playGame();
}