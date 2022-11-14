function removeElements() {
    const content = document.querySelectorAll('div#content div');
    for (let element of content) {
        element.remove();
    }
}

export { removeElements };