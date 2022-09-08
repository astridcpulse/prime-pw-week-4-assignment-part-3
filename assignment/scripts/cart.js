console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem ( item){
    basket.push(item);
    return true;
}

addItem('wood');
// console.log(basket);

function listItems (){
    for( i = 0; i < basket.length; i++){
        console.log(basket[i] );
    }
}

listItems();

function empty(){
    basket = [];
}

empty();

console.log(basket);