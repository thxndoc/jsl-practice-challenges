function orderFishAndChips() {
    console.log(fish); // What do you expect to happen?
    
    var fish = "Hake";
}

orderFishAndChips(); // Call the function

// Expected Output Explanation:

// The output will likely be `undefined`. This is because JavaScript hoists variable declarations to the top of their containing function or scope. In this case, the declaration `var fish` is hoisted to the top of the `orderFishAndChips` function, but its assignment (`fish = "Hake"`) remains at the bottom. As a result, when we try to `console.log` the value of `fish` before its assignment, it is considered declared but not yet assigned, so it holds the value `undefined`.