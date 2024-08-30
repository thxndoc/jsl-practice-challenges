### Practical Exercise: Theme Switcher for Fitness Tracker

Implement a feature that allows users to toggle between a light and dark theme for the fitness tracker. Use JavaScript to adjust CSS styles, enhancing the user experience.

1. **Setup**:
   - Define CSS classes for light and dark themes within your stylesheet. Include styles for background colors, text colors, and any other elements that should change between themes.
   ```css
   .dark-mode {
     background-color: #333;
     color: #fff;
   }
   ```

2. **Toggle Button**:
   - Add a button to your UI that users can click to switch themes. This button will trigger the theme change.
   ```html
   <button id="theme-switcher">Toggle Theme</button>
   ```

3. **JavaScript Logic**:
   - Add an event listener to the theme toggle button. When clicked, use `classList.toggle()` to apply the dark mode class to the body of the document, effectively changing the theme.
   ```javascript
   document.getElementById('theme-switcher').addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
   });
   ```

Manipulating CSS via JavaScript is a powerful tool for creating dynamic and responsive web interfaces. By learning to apply these techniques judiciously, you can significantly enhance the user experience of your fitness tracker. Remember, the goal is to improve usability and aesthetic appeal without sacrificing performance or maintainability.