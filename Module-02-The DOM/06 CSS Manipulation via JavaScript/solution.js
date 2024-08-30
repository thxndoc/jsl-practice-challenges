// 🚨 Lesson 6: CSS Manipulation via JavaScript
// Function to toggle light and dark mode
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);


