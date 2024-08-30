// Simulate the fetchData function from a module
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Wolverine", "Magneto", "Professor X", "Jean Grey", "Rogue"]), 1000);
  });
};

// Use the fetchData function to display data
fetchData().then((xMen) => {
  const content = document.getElementById('content');
  xMen.forEach((hero) => {
    const element = document.createElement('p');
    element.textContent = hero;
    content.appendChild(element);
  });
});
