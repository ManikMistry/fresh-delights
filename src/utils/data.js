import I5 from "../img/i5.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import r2 from "../img/r2.png";

export const heroData = [
  {
    id: 1,
    name: "StrawBerry Icecream",
    decp: "StrawBerry & Vanilla",
    price: "90",
    imageSrc: I5,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "105",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Combo",
    decp: "Mixed Chicken Plate",
    price: "290",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Chicken Biriyani",
    decp: "Biriyani",
    price: "180",
    imageSrc: r2,
  },
];

export const categories=[
    {
        id:1,
        name:"Chicken",
        urlParamName:"chicken"
    },
    {
        id:2,
        name:"Curry",
        urlParamName:"curry"
    },
    {
        id:3,
        name:"Rice",
        urlParamName:"rice"
    },
    {
        id:4,
        name:"Fish",
        urlParamName:"fish"
    },
    {
        id:5,
        name:"Fruits",
        urlParamName:"fruits"
    },
    {
        id:6,
        name:"IceCreams",
        urlParamName:"icecreams"
    },
    {
        id:7,
        name:"Soft Drinks",
        urlParamName:"drinks"
    }
]