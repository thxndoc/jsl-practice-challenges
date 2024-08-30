// Initial array representing Rabobi's movements (with intentional bugs)
const rabobiMovements = [2, -3, 1, -5, 4, -2, 6, -1];

// Function to find the first positive movement in the array (bug: it always returns null)
function findFirstPositive(movements) {
    for (let i = 0; i < movements.length; i++) {
        // Intentional bug: The condition always evaluates to false
        if (movements[i] > 0) {
            return movements[i];
        }
    }
    return null;
}

// Function to untangle Rabobi from the Green Goblin's trap (bug: it doesn't calculate the correct final position)
function untangleRabobi(movements) {
    const positiveMovement = findFirstPositive(movements);

    if (positiveMovement === null) {
        // Intentional bug: It returns a trapped message even if there is a positive movement
        return "Rabobi is trapped! No positive movement found.";
    }

    const untangledMovements = [];
    let sum = 0;

    for (let i = 0; i < movements.length; i++) {
        // Intentional bug: It doesn't correctly accumulate the sum
        sum += movements[i];
        untangledMovements.push(sum);
    }

    // Intentional bug: It displays the incorrect final position
    return `Rabobi is still trapped! Final position: ${positiveMovement}`;
}

// Call the untangleRabobi function and log the result
const result = untangleRabobi(rabobiMovements);
console.log(result);

// Now, let's explain the debugging process step by step:

// 1. **Bug 1 - `findFirstPositive` Function**:
//    - The bug: The `findFirstPositive` function always returns `null` because the condition `movements[i] > 0` is always evaluated as `false`.
//    - Debugging: To fix this bug, ensure that the condition checks each element in the `movements` array for positivity.

// 2. **Bug 2 - `untangleRabobi` Function**:
//    - The bug: The `untangleRabobi` function doesn't calculate the correct final position because it doesn't accumulate the sum correctly.
//    - Debugging: To fix this bug, make sure to accumulate the sum of movements correctly while pushing it into the `untangledMovements` array.

// 3. **Bug 3 - `untangleRabobi` Function**:
//    - The bug: The `untangleRabobi` function displays an incorrect final position message even when there is a positive movement.
//    - Debugging: To fix this bug, update the message to indicate Rabobi's successful escape and display the correct final position.

// After fixing these bugs, the code should correctly untangle Rabobi from the Green Goblin's trap and display the final position accurately.