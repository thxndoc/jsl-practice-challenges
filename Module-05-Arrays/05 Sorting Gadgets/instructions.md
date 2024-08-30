### Practical Exercise: Refactor Existing Data Manipulation Task

Imagine you have a mixed array of Batman and CatWoman gadgets that you need to organize:

```javascript
const mixedGadgets = [
    { name: "Batarang", owner: "Batman" },
    { name: "Grapple Gun", owner: "Batman" },
    { name: "Whip", owner: "CatWoman" },
    { name: "Smoke Bomb", owner: "Batman" }
];
```

**Objective**: Separate the gadgets by owner using functional programming concepts, creating two arrays: one for Batman's gadgets and one for CatWoman's.

**Task**: 

1. Use the `filter` method to create two new arrays, `batmanGadgets` and `catwomanGadgets`, filtering the `mixedGadgets` array based on the `owner` property.
2. Use the `map` method to transform these arrays into arrays of gadget names (strings), excluding the `owner` property.

This exercise will help you practice applying functional programming principles to real-world data manipulation tasks, making your code more concise, readable, and easier to debug.
