// JavaScript functions for scroll handling
globalThis.addScrollListener = (dotNetRef) => {
    const handleScroll = () => dotNetRef.invokeMethodAsync('OnScroll', window.scrollY);
    window.addEventListener('scroll', handleScroll);
};

globalThis.scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
};