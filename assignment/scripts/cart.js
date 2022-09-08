console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Remove the /* */ to test all functions!

let basket = [];
function addItem ( item){
    basket.push(item);
    return true;
}
//testing addItem(). Should run function and log the array basket to the console with 'wood' as the only item. 
/*
addItem('wood');
console.log(basket);
*/

function listItems (){
    for( i = 0; i < basket.length; i++){
        console.log(basket[i] );
    }
}

//testing listItems(). Should run the function, logging fiddles, pizza pies, and skulls to the console on three separate lines

/*
basket = ['fiddles', 'pizza pies', 'skulls'];
listItems();
*/

function empty(){
    basket = [];
}

//testing function empty(). Should establish the listed items in the array, run the function, and then should log an empty array to the console

/*
basket = ['little doo dahs', 'widgets', 'curios'];
empty();
console.log(basket);
*/