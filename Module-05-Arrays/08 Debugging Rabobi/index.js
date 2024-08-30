// Initial array representing Rabobi's movements 
const rabobiMovements = [2, -3, 1, -5, 4, -2, 6, -1];

// Function to find the first positive movement in the array
function findFirstPositive(movements) {
    for (let i = 0; i < movements.length; i++) {
        if (movements[i] > 0) {
            return movements[i];
        }
    }
    return null;
}

// Function to untangle Rabobi from the Green Goblin's trap
function untangleRabobi(movements) {
    const positiveMovement = findFirstPositive(movements);

    if (positiveMovement === null) {
        return "Rabobi is trapped! No positive movement found.";
    }

    const untangledMovements = [];
    let sum = 0;

    for (let i = 0; i < movements.length; i++) {
        sum += movements[i];
        untangledMovements.push(sum);
    }

    return `Rabobi is still trapped! Final position: ${positiveMovement}`;
}

const result = untangleRabobi(raboobooMovements);
console.log(result);
