import { comidaInterface } from "../interfaces/comidaInterface";

export const Comidas:comidaInterface[] = [
    {
      id: '1',
      name: 'Meat Pizza',
      ingredients: 'Mixed Pizza',
      price: '8.30',
      image: require('../images/meatPizza.png'),
    },
    {
      id: '2',
      name: 'Cheese Pizza',
      ingredients: 'Cheese Pizza',
      price: '7.10',
      image: require('../images/cheesePizza.png'),
    },
    {
      id: '3',
      name: 'Chicken Burger',
      ingredients: 'Fried Chicken',
      price: '5.10',
      image: require('../images/chickenBurger.png'),
    },
    {
      id: '4',
      name: 'Sushi Makizushi',
      ingredients: 'Salmon Meat',
      price: '9.55',
      image: require('../images/sushiMakizushi.png'),
    },
  ];