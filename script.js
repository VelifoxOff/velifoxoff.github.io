document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Light';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Light';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        }

        setTimeout(() => {
            document.body.style.transition = '';
        }, 10);
    });
});
