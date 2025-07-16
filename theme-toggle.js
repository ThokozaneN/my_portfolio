// theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    const body = document.body;

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        lightIcon.classList.remove('active');
        darkIcon.classList.add('active');
    }

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            lightIcon.classList.add('active');
            darkIcon.classList.remove('active');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            lightIcon.classList.remove('active');
            darkIcon.classList.add('active');
        }
    });

    // Listen for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        if (!localStorage.getItem('theme')) {
            if (newColorScheme === 'dark') {
                body.setAttribute('data-theme', 'dark');
                lightIcon.classList.remove('active');
                darkIcon.classList.add('active');
            } else {
                body.removeAttribute('data-theme');
                lightIcon.classList.add('active');
                darkIcon.classList.remove('active');
            }
        }
    });
});