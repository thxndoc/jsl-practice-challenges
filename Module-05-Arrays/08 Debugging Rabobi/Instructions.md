
#### Starter Code
```javascript
const movements = ["left", "right", "up", "down", "left", "right", "up", "down"];

function escapeTrap(movements) {
    // Rabobi tries to move in the opposite direction to escape
    let escapeMovements = [];
    for (let i = 0; i <= movements.length; i++) {
        switch(movements[i]) {
            case "left":
                escapeMovements.push("right");
                break;
            case "right":
                escapeMovements.push("left");
                break;
            // Add cases for "up" and "down"
        }
    }
    console.log(escapeMovements);
}

escapeTrap(movements);
```

**Issues to Debug**:
1. Rabobi is not moving in the opposite direction for all movements.
2. There's an off-by-one error in the loop causing undefined behavior.

**Refactor Tips**:
- Ensure all directions are covered in the switch statement.
- Correct the loop condition to avoid going beyond the array's bounds.