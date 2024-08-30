let actorsList = [
    { name: "Chadwick Boseman", yearOfBirth: 1976, fromAfrica: false },
    { name: "Lupita Nyong'o", yearOfBirth: 1983, fromAfrica: true },
    { name: "Michael B. Jordan", yearOfBirth: 1987, fromAfrica: false },
    { name: "Danai Gurira", yearOfBirth: 1978, fromAfrica: true },
    { name: "Letitia Wright", yearOfBirth: 1993, fromAfrica: false },
    { name: "Winston Duke", yearOfBirth: 1986, fromAfrica: false },
    { name: "Angela Bassett", yearOfBirth: 1958, fromAfrica: false },
    { name: "Forest Whitaker", yearOfBirth: 1961, fromAfrica: false },
    { name: "Daniel Kaluuya", yearOfBirth: 1989, fromAfrica: true },
    { name: "Martin Freeman", yearOfBirth: 1971, fromAfrica: false },
];

// Task 1: Create a new array `actorNames` that contains only the names of the actors using the `map` method.
let actorNames = actorsList.map(actor => actor.name);
console.log(actorNames);

// Task 2: Use the `filter` method to create a new array `africanActors` that contains only the actors from Africa.
let africanActors = actorsList.filter(actor => actor.fromAfrica);
console.log(africanActors);
