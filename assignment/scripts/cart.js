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
console.log(basket);

//Create a function called `listItems`.
function listItems(){
    for (item of basket) {
        console.log(item);
    }
}

//test listItems
listItems();

//Create a function called `empty`.
function empty() {
    basket = [];
}

//run empty 
empty();

//test empty
console.log(basket);

//Stretch Goals