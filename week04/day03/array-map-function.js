let numbers = [1,2,3,4,5];
// map function creates another array and applies the specified code on it
let result = numbers.map(function(value){ 
    return value*2;
});
// or 
let result2 = numbers.map(value => value*2); // for one line implementation
console.log(result);
console.log(result2);



// Another example about MAP in Arrays


let prices = [10 , 20 , 30 , 45 , 57];
let pricesAfterTax = prices.map(function(value){

    return value * 0.15 + value ;
})

console.log(pricesAfterTax);
