import menuItems from "./menuItems";

class MenuItem {
    name: string;
    description: string;
    category: string
    price: number;
    constructor(name: string, description: string, category: string, price: number) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}

// type items = Object[
//     {name: 'food',
//     description: 'type of food',
//     category: 'pasta',
//     price: 0}
//     ];

for (let i = 0; i < menuItems.length; i++) {
    let food = new MenuItem(menuItems[i].name, menuItems[i].description, menuItems[i].category, menuItems[i].price);

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