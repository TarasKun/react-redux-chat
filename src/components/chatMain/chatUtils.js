
const scrollToElement = element =>
    element.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

export default scrollToElement;