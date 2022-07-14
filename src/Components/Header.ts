const navLinks = (): HTMLDivElement => {
    let links = document.createElement('div');
    links.className = 'links';
    const createBtn = (id: string, text: string) => {
        let btn = document.createElement('button');
        btn.id = id;
        btn.textContent = text;
        btn.className = 'nav-btn'
        links.append(btn);
    } 

    createBtn('homeBtn', 'Home');
    createBtn('menuBtn', 'Menu');
    createBtn('aboutBtn', 'About');
    createBtn('contactBtn', 'Contact');

    return links;
}
const createHeader = (): HTMLDivElement => {
    let nav: HTMLDivElement = document.createElement('div');
    nav.className = 'nav'
    let title = document.createElement('h1');
    title.textContent = 'Jazz De Opus';
    title.className = 'title';
    nav.append(title, navLinks());
    return nav;
}

export default createHeader;