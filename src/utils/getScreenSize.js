export const getSize = () => {
    const width = window.innerWidth;
    if (width < 640) {
        return 'xs';
    } else if (width > 640 && width < 768) {
        return 'sm';
    } else if (width >= 640 && width < 768) {
        return 'md';
    } else if (width >= 768 && width < 1024) {
        return 'lg';
    } else if (width >= 1024 && width < 1280) {
        return 'xl';
    } else if (width >= 1280) {
        return '2xl';
    }
}