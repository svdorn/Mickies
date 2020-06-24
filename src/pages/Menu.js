import React, { Component } from "react";

import "./Menu.css";

const menuItems = [
  {
    name: "Breakfast",
    description: "",
    types: [
      {
        name: "Mickie's Specialties",
        description: "",
        footnotes: [],
        items: [
          {
            name: "Scrambler",
            description:
              "Layer of yanks, three eggs (scrambled unless specified otherwise), one meat or two veggies, cheese (cheddar by default), gravy (on top, side, or none), and toast. Additional veggies may be added for $.50 each. Additional meats and cheeses are $1 each.",
            price: "$10"
          },
          {
            name: "Breakfast Sandwich",
            description:
              "Bagel or English Muffin or Toast, Bacon or Ham or Sausage, American or Cheddar or Swiss or Pepperjack, and 1 Egg cooked any style",
            price: "$6",
            footnotes: "*May add up to 2 veggies free of charge, upon request"
          },
          {
            name: "Steak and Eggs",
            description:
              "Hand-cut sirloin averaging 10 oz., 2 eggs, toast, and yanks.",
            price: "$14"
          },
          {
            name: "Pork Chops and Eggs",
            description:
              "Two marinated boneless pork chops, 2 eggs, toast and yanks.",
            price: "$12"
          },
          {
            name: "French Toast",
            description: "2 cinnamon rolls cut in half, battered, and grilled.",
            price: "$7",
            footnotes: "Half order available for - $5"
          }
        ]
      },
      {
        name: "Eggs & Toast",
        description: "",
        footnotes: [
          "Any egg after the first - $1.50",
          "Egg whites - +$.50 per egg"
        ],
        items: [
          { name: "1 Egg no toast", description: "", price: "$1.50" },
          {
            name: "2 Eggs no toast",
            description: "",
            price: "$3"
          },
          {
            name: "2 Eggs and toast",
            description: "",
            price: "$4"
          }
        ]
      },
      {
        name: "Omelet",
        description: "",
        footnotes: [],
        items: [
          {
            name: "Plain Omelet with Toast",
            description: "",
            price: "$4"
          },
          {
            name: "Veggie Omelet w/ Yanks",
            description:
              "Onions, peppers, mushrooms, broccoli, spinach, tomato, and choice of cheese",
            price: "$10"
          },
          {
            name: "Chili Cheese Omelet w/Yanks",
            description:
              "American cheese omelet with homemade chili and cheddar on top",
            price: "$10"
          },
          {
            name: "Reuben Omelet w/Yanks",
            description: "Corned beef, Swiss, thousand island, and sauerkraut",
            price: "$10"
          },
          {
            name: "Oriental Chicken Omelet w/Yanks",
            description:
              "Bamboo shoots, water chestnuts, baby corn, bean sprouts, onions, peppers, mushrooms, chicken breast, and stir-fry sauce. Cheese may be added to for no additional charge.",
            price: "$10"
          }
        ]
      },
      {
        name: "Pancakes",
        description: "Listed price is 2 pancakes. Subtract $2 for 1 pancake.",
        items: [
          {
            name: "Buttermilk Pancakes",
            description: "",
            price: "$7"
          },
          {
            name: "Whole Grain Pancakes",
            description: "",
            price: "$7"
          },
          {
            name: "Cornmeal Pancakes",
            description: "",
            price: "$7"
          },
          {
            name: "Blueberry Pancakes",
            description: "",
            price: "$8"
          },
          {
            name: "Chocolate Chip Pancakes",
            description:
              "White chocolate chips, Milk chocolate chips, Cocoa Powder, and Vanilla Syrup",
            price: "$8"
          },
          {
            name: "Strawberry Pancakes",
            description: "Strawberries and Whipped Cream on Top",
            price: "$8"
          },
          {
            name: "Banana Cinnamon Nut Pancakes",
            description: "Whole grain batter base (Walnuts)",
            price: "$8"
          },
          {
            name: "Griddle Cakes",
            description:
              "Whole grain batter, apples, cinnamon, raisins, oatmeal",
            price: "$8"
          }
        ]
      }
    ]
  },
  {
    name: "Lunch",
    description: "",
    types: []
  },
  {
    name: "Dinner",
    description: "",
    types: []
  },
  {
    name: "Drinks",
    description: "",
    types: []
  }
];

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <h1 className="header">Menu</h1>
        </div>
        <div className="container">
          {menuItems.map(category => (
            <div className="category">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <div>
                {category.types.map(subcategory => (
                  <div className="sub-category">
                    <h3>{subcategory.name}</h3>
                    <p>{subcategory.description}</p>
                    <ul className="item-container">
                      {subcategory.items.map(item => (
                        <li className="item">
                          <div>
                            <b>{item.name}</b>
                            <b>{item.price}</b>
                          </div>
                          <p>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
