const Menu = ((): HTMLDivElement => {
    let menuContainer: HTMLDivElement = document.createElement('div');
    menuContainer.id = 'menu';

    return menuContainer;
})();

export default Menu;