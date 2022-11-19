console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` and set it to an empty array.
let basket = [];

//Create a function called `addItem`.
function addItem(item) {
    basket.push(item);
    return true;
}

//test addItem
console.log('Add bananas to basket:', addItem('bananas'));
console.log('Add eggs to basket:', addItem('eggs'));
console.log('Add jingle bells to basket:', addItem('jingle bells'));

//view basket
console.log('What is in the basket?', basket);

//Create a function called `listItems`.
function listItems(array) {
    for (let item of array) {
        console.log(item);
    }
}

//test listItems
listItems(basket);

//Create a function called `empty`.
function empty(array) {
    while (array.length > 0) {
        array.pop();
    }
}

//run empty 
empty(basket);

//test empty
console.log('The basket is empty:', basket);

//Stretch Goals

//_Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.

const maxItems = 5;

// 2. Create a function called isFull(). It should:
//  - return `false` if the basket contains *less* than max number of items
//  - return `true` otherwise (equal or more than maxItems)

function isFull(array) {
    if (array.length < 5) {
        return false;
    } else {
        return true;
    }
}

//test isFull()
console.log('Basket isFull? Should be false:', isFull(basket));
basket = ['garlic', 'veggie stock', 'onions', 'ginger', 'carrots']
console.log('Add soup ingredients to basket:', basket);
console.log('Basket isFull? Should be true:', isFull(basket));

// 3. Update the required `addItem` function to:
//  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//  - If an item was added to the array, return `true`
//  - If there was no room and the item could not be added return `false`

function addItem(item) {
    if (isFull(basket)) {
        return false;
    } else {
        basket.push(item);
        return true;
    }
}

//test checkAddItem()
console.log('should not add chocolate to basket and be false:', addItem('chocolate'));
console.log('What is in the basket?', basket);
console.log('empty basket to buy chocolate:', empty(basket));
console.log('check that basket is empty', basket);
console.log('should add chocolate and be true', addItem('chocolate'));
console.log('What is in the basket?', basket);

//__Using Array built-in functions!__

//4. Create a function called `removeItem`. It should:
//  - Take an input parameter for a string `item`
//  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//  - Return the item removed or `null` if the item was not found

function removeItem(item) {
    for (let y in basket) {
        if (basket[y] === item) {
            return basket.splice(basket.indexOf('item'), 1, );
        } else {
            return 'null'
        }
    }
}

//test removeItem
console.log('should be null, no soap in basket:', removeItem('soap'));
console.log('should remove chocolate, since there is chocolate in the basket:', removeItem('chocolate'));
console.log('The basket is empty again:', basket);