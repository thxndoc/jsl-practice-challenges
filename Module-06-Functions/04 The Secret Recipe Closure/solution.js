function prepareMeal(mealType) {
    const secretIngredient = "11 herbs and spices";
    return function(sideDish) {
        const message = `Preparing a delicious ${mealType} with ${sideDish} and the secret ingredient: ${secretIngredient}.`;
        document.getElementById("message").textContent = message;
    };
}

document.getElementById("mealForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const mealType = document.getElementById("mealType").value;
    const sideDish = document.getElementById("sideDish").value;
    const mealPrep = prepareMeal(mealType);
    mealPrep(sideDish);
});