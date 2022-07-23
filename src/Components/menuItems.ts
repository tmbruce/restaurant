interface menuItems {
    name: string;
    description: string;
    category: number;
    price: number;
}

const menuItems: menuItems[] = [
    {
        name: 'Black Truffle Risotto',
        description: 'Aged Parmesan, Australian Black Truffles, 3G Shaved Tableside',
        category: 1,
        price: 49
    },
    {
        name: 'Mediterranean Octopus',
        description: 'Braised Octopus, Chickpea Puree, Celery',
        category: 2,
        price: 24
    },
    {
        name: 'Zucchini Fritti',
        description: 'Oregano, Red Pepper Almond Dip',
        category: 2,
        price: 15
    },
    {
        name: 'Squash Blossoms',
        description: 'Buffalo Mozzarella, Diavolo Sauce',
        category: 2,
        price: 19
    },
    {
        name: 'Steak Tartare',
        description: 'Beeman Ranch Sirloin, Tuscan Olive Oil, Shaved Vacche Rosse',
        category: 3,
        price: 21
    },
    {
        name: 'A5 Wagyu Carpaccio',
        description: 'Vacche Rosse, Wild Arugula',
        category: 3,
        price: 38
    },
    {
        name: 'Maine Lobster Caprese',
        description: 'Buffalo Mozzarella, Basil',
        category: 3,
        price: 54
    },
    {
        name: 'Carbonara',
        description: 'Black Pepper Pancetta, Egg Yolk',
        category: 4,
        price: 19
    },
    {
        name: 'Parmesan Ricotta Gnocchi',
        description: 'Housemade Gnocchi, Sliced Black Truffle, Cream Sauce',
        category: 4,
        price: 43
    },
    {
        name: 'Cacio e Pepe',
        description: 'Toasted Pepper, Pecorino Romano',
        category: 4,
        price: 19
    }
];

export default menuItems;



// name: string;
// description: string;
// category: string
// price: number;