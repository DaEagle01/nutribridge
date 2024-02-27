export const handleSwitchMode = () => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    const rootElement = document.documentElement;

    if (!isDarkMode) {
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}
