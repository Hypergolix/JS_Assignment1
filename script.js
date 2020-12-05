// Careful with "Global" variables
let teamOGArr = [97, 112, 101];                  // Array for team OG
let teamAArr = [109, 95, 106];                   // Array for team Alliance
// Unsure of behaviour when 1 is false, 2 is true
let rule1 = true;                                // True enables the above 100 score rule
let rule2 = true;                                // Enables second rule

let total = [0, 0];                              // First stores teamOG average, second stores teamATotal average

function calcAvg(teamArray) {
    let avg = 0;
    for (let i = 0; i < teamArray.length; i++) { // Or 3
        if (rule1 === true) {
            if (teamArray[i] >= 100) {
                console.log("Team array index", teamArray[i]);
                // CHECK THIS :)
                avg = avg + teamArray[i];        // Value of each element is added together 
            }
        } else {
            avg = avg + teamArray[i];
        }
    }
    avg = avg / teamArray.length;                // Calculates the mean, total value divided by number of values
    console.log("average", avg);
    // CHECK HERE ASWELL
    return avg;                                  // Returns the average
}

// Just prints averages for each team 
total[0] = calcAvg(teamOGArr);                   // Get avg for team OG
console.log("Team OG average: " + total[0]);

total[1] = calcAvg(teamAArr);                    // Get avg for team Alliance
console.log("Team Alliance average: " + total[1]);

// Come back to this, unsure if a function is needed
function winCheck() {
    if (total[0] < total[1]) {                   // If true, team Alliance wins
        console.log("Team Alliance Wins!");
    } else {
        console.log("Team OG Wins!");
    }
    // HELENA: this does not work because the output is not showing the console, right?
    // and why is that? Think about where this code lives, in what scope does it exist?
}

// This works but try other solutions below
// If false, it's a tie 
if (rule2 === true) {
    if (total[0] >= 100 || total[1] >= 100) {
        if (total[0] !== total[1]) {
            winCheck();
        } else {
            console.log("It's a tie.");         // Results in tie if the totals aren't equal
        }
    } else {
        console.log("Neither team won.");
    }
} else {
    if (total[0] !== total[1]) {
        winCheck();
    } else {
        console.log("It's a tie.");             // Repeat code
    }
}
// HELENA: in order to calcualte the Bonus 2 you need to use the AND operator



// Could use concatenation so it's "Team " + ${name attributed to highest value variable} + " wins!" ? 
// The names would have to be stored (plaintext is fine) and attributed to the highest score from total array. 
// Switch might be useful here
// Come back to this, no time


// Switch? Case 1: is OG larger than A? Might be redundant.
// Check if draw first when using if/else.
// Might be over-engineering, check if totals really need to be stored.

// Switch 
// Case 1: 

// New method: Add all the values in the arrays and check them against eachother.
