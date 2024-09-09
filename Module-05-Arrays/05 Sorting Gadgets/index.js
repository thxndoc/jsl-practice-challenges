const mixedGadgets = [
    { name: "Batarang", owner: "Batman" },
    { name: "Caltrops", owner: "CatWoman" },
    { name: "Grapple Gun", owner: "Batman" },
    { name: "Clawed Gloves", owner: "CatWoman" },
    { name: "Smoke Bomb", owner: "Batman" },
    { name: "Cat o' Nine Tails", owner: "CatWoman" },
];

// Use filter method to create two arrays, one for Batman's gadgets and one for CatWoman's
// Hint: Use filter to filter objects based on the 'owner' property
const batmanGadgets = mixedGadgets.filter(gadget => gadget.owner === 'Batman');
const catwomanGadgets = mixedGadgets.filter(gadget => gadget.owner === 'CatWoman');
// Use map method to transform arrays into arrays of gadget names (strings)
// Hint: Use map to extract the 'name' property from each object
const batmanGadgetNames = batmanGadgets.map(gadget => gadget.name);
const catwomanGadgetNames = catwomanGadgets.map(gadget => gadget.name);

console.log(batmanGadgetNames);
console.log(catwomanGadgetNames);
