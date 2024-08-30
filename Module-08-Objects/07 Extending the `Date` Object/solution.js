// Extending the Date object to include a new method
Date.prototype.daysUntilNextInterestDate = function() {
  const today = new Date();
  const nextInterestDate = new Date(today.getFullYear(), today.getMonth() + 1, 1); // Assume interest is credited on the 1st of next month

  // Calculate the difference in days
  const diffTime = Math.abs(nextInterestDate - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  return diffDays;
};

// Usage
const today = new Date();
console.log(`Days until next interest date: ${today.daysUntilNextInterestDate()} days.`);
