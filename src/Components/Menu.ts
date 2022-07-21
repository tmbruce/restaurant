class MenuItem {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}

const Menu = ((): HTMLDivElement => {
    let menuContainer: HTMLDivElement = document.createElement('div');
    menuContainer.id = 'menu';
    let title: HTMLHeadingElement = document.createElement('h1');
    title.className = 'menu-title';
    title.textContent = 'Jazz De Opus';
    menuContainer.append(title);

    return menuContainer;
})();

export default Menu;