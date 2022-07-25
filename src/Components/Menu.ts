import menuItems from "./menuItems";
import createElement from "../util/CreateElement";

class MenuItem {
    name: string;
    description: string;
    category: number
    price: number;
    constructor(name: string, description: string, category: number, price: number) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}

const createFoodItem = (item: MenuItem): HTMLDivElement  => {
    const foodItem = createElement('div', 'food-item');
    const foodName = createElement('h2', 'food-title', item.name);
    const foodDesc = createElement('h3', 'food-desc', item.description);
    const foodPrice = createElement('h2', 'food-price', item.price)
    const foodDetail = createElement('div', 'food-detail');
    foodDetail.append(foodName, foodDesc);
    foodItem.append(foodDetail, foodPrice);
    return <HTMLDivElement>foodItem;
}
let cat1: HTMLDivElement[] = [];
let cat2: HTMLDivElement[] = [];
let cat3: HTMLDivElement[] = [];
let cat4: HTMLDivElement[] = [];

for (let i = 0; i < menuItems.length; i++) {
    let food = new MenuItem(menuItems[i].name, menuItems[i].description, menuItems[i].category, menuItems[i].price);
    const foodElement = createFoodItem(food);
    switch (food.category){
        case 1:
            cat1.push(foodElement);
            break;
        case 2:
            cat2.push(foodElement);
            break;
        case 3:
            cat3.push(foodElement);
            break;
        case 4:
            cat4.push(foodElement);
            break;
    }
}

const Menu = ((): HTMLDivElement => {
    const menuContainer = createElement('div', 'menu');
    const title = createElement('h1', 'menu-title', 'Jazz De Opus');
    menuContainer.append(title);
    const specials = createElement('h2', 'food-head', 'Daily Special');
    menuContainer.append(specials, ...cat1);
    const coldAnti = createElement('div', 'food-head', 'Cold Antipasti');
    menuContainer.append(coldAnti, ...cat2);
    const hotAnti = createElement('div', 'food-head', 'Hot Antipasti');
    menuContainer.append(hotAnti, ...cat3);
    const housePasta = createElement('div', 'food-head', 'Housemade Pasta');
    menuContainer.append(housePasta, ...cat4);



    return <HTMLDivElement>menuContainer;
})();

export default Menu;