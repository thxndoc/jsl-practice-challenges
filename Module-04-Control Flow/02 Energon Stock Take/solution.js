// Given data
const costPerUnit = 2.50;
const stockLevel = 30;

// Calculate total value without discount
const totalValueWithoutDiscount = costPerUnit * stockLevel;

// Apply discount if stock level is more than 20 units
let totalValueWithDiscount;

// Check if stock level is more than 20 units
if (stockLevel > 20) {
    // Apply 10% discount
    const discount = costPerUnit * 0.10;
    totalValueWithDiscount = (costPerUnit - discount) * stockLevel;
}

// Output results
console.log(`Total value without discount: R${totalValueWithoutDiscount.toFixed(2)}`);
if (totalValueWithDiscount !== undefined) {
    console.log(`Total value with discount: R${totalValueWithDiscount.toFixed(2)}`);
}