#### Practical Exercises

##### Formatting and Comparing Dates
1. Write a function that takes two `Date` objects as arguments and returns a string stating whether the first date is "earlier than", "later than", or "the same as" the second date.

Example:
```javascript
function compareDates(date1, date2) {
  if (date1 < date2) return "earlier than";
  if (date1 > date2) return "later than";
  return "the same as";
}
```

##### Calculating Time Intervals
2. Create a function that calculates the number of days between two dates.

Example:
```javascript
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const difference = date2 - date1;
  return Math.round(difference / oneDay);
}
```

3. Implement a function that adds a specified number of days to a given date and returns the new date.

Example:
```javascript
function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}
```

Through these exercises, you'll gain practical experience in handling and manipulating dates and times in JavaScript, enabling you to manage temporal data effectively in your applications.

