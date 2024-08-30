const mixedGadgets = [
    { name: "Batarang", owner: "Batman" },
    { name: "Caltrops", owner: "CatWoman" },
    { name: "Grapple Gun", owner: "Batman" },
    { name: "Clawed Gloves", owner: "CatWoman" },
    { name: "Smoke Bomb", owner: "Batman" },
    { name: "Cat o' Nine Tails", owner: "CatWoman" },
];

// Use filter to separate gadgets by owner
const batmanGadgets = mixedGadgets.filter(gadget => gadget.owner === "Batman");
const catwomanGadgets = mixedGadgets.filter(gadget => gadget.owner === "CatWoman");

// Use map to transform arrays into arrays of gadget names
const batmanGadgetNames = batmanGadgets.map(gadget => gadget.name);
const catwomanGadgetNames = catwomanGadgets.map(gadget => gadget.name);

console.log("Batman's Gadgets:", batmanGadgetNames);
console.log("CatWoman's Gadgets:", catwomanGadgetNames);


// This code first uses the filter method to create two new arrays, batmanGadgets and catwomanGadgets, by filtering the mixedGadgets array based on the owner property. Then, it uses the map method to transform these arrays into arrays of gadget names (strings), excluding the owner property. Finally, it prints out the two arrays of gadget names for Batman and CatWoman.