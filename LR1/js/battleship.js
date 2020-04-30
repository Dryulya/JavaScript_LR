var locations = new Array(7);
var randTo5 = function () {
    return Math.round((Math.random() * 5));
};
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var random_position = randTo5();
locations[random_position] = true;
locations[random_position + 1] = true;
locations[random_position + 2] = true;

while (!isSunk) {
    guess = prompt("Ready, aim fire! (enter a number between 0-6): ");

    if (guess === null || guess === '' || isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses++;
        if (locations[guess]) {
            locations[guess] = false;
            alert("HIT!");
            hits++;
            if (hits === 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}
var stats = "You took " + guesses
    + " guesses to sink the battleship, which means your shooting accuracy was " + (3 / guesses);

alert(stats);
