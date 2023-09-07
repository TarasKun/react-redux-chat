export default {
    scrollToElement: element =>
        element.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
}
