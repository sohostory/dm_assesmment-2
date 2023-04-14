///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
  name: "pepperoni",
  price: 9,
  category: "entree",
  popularity: 10,
  rating: 1,
  tags: ["kids", "classic", "favorite"],
};

console.log("Problem 1:", pizza);

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log("Problem 2:", pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log("Problem 2:", pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let { price } = pizza;
console.log("Problem 2:", price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let { category } = pizza;
console.log("Problem 2:", category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
  {
    name: "calamari",
    price: 7,
    category: "appetizer",
    popularity: 5,
    rating: 4,
    tags: ["fried", "shareable"],
  },
  {
    name: "fried chicken",
    price: 13,
    category: "entree",
    popularity: 8,
    rating: 3,
    tags: ["fried", "shareable", "gameday"],
  },
  {
    name: "ceasar salad",
    price: 6,
    category: "salad",
    popularity: 8,
    rating: 6,
    tags: ["gluten-free", "shareable"],
  },
  {
    name: "pecan pie",
    price: 5,
    category: "dessert",
    popularity: 9,
    rating: 2,
    tags: ["pie", "must-have", "texas"],
  },
  {
    name: "meatball pasta",
    price: 15,
    category: "entree",
    popularity: 9,
    rating: 2,
    tags: ["pasta", "shareable", "kids"],
  },
];

console.log("Problem 3:", foodArr);

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter((food) => food.tags.includes("shareable"));
console.log("Problem 4:", filteredFood);

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

const filterByProperty = (property, number, type) => {
  const filterFoodArr = foodArr.filter((food) => {
    if (type === "above") {
      return food[property] > number;
    } else {
      return food[property] < number;
    }
  });

  return filterFoodArr;
};

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
const result = filterByProperty("price", 10, "below");
console.log("Problem 5:", result);
