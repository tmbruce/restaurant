const navLinks = (): HTMLDivElement => {
    let links = document.createElement('div');

    return links;
}
const createHeader = (): HTMLDivElement => {
    let nav: HTMLDivElement = document.createElement('div');
    nav.className = 'nav'
    let title = document.createElement('h1');
    title.textContent = 'Jazz De Opus';
    nav.append(title, navLinks());
    return nav;
}

export default createHeader;