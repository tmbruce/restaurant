const createHeader = (): Element => {
    let nav: Element = document.createElement('nav');
    let title: Element = document.createElement('h1');
    title.textContent = 'Jazz De Opus';
    nav.append(title);
    return nav;
}

export default createHeader;