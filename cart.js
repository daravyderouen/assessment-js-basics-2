///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const higherFunction = (arr, cb) =>{
    let results = arr.map((element, index, array)=> {
        return cb(element.price)
        //cb()//children can always see the information of the parent but the parent can't see info of the children
    })
    return results
}

const calculateFinal = (parseInt) => {
    let reducer = cart.reduce(price.Math.floor)
    return reducer
}
let results = higherFunction(cart, calculateFinal)

console.log(higherFunction(calculateFinal))

//const summedPrice = cart.reduce(function (parseInt, currentValue){
    //return parseInt+ currentValue;
//});



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (arr, cb) =>{
    let results = arr.map((element, index, array)=> {
        return cb(element.cartTotal, element.couponValue, element.tax)
        
    })
    return results
}


const calculateBill = (price, taxRate, coupon) => {

     let tax = price * taxRate
     //console.log(price * taxRate)
     return (price + tax) - coupon
}

let results = calculateFinalPrice(cart, calculateBill)

console.log(results)
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/



/*
    TEXT ANSWER HERE
*/

const type = 'We offer 3 different types of Bella Vida Wines available to purchase: white, red & sparkling. Our wines are unlike the rest! It is rich with sweetness that is backed by fruity, ripe flavors.',
const pricePerBottle ='Each Bella Vida Wine bottle is $35. However, we are running a Halloween deal! Buy 2 for $60 and save more money!',
const typeOfCraftsmanship ='We take great pride in our Bella Vida Wines. Our wines are locally crafted at our family vineyard made here in America. Supporting the American dream & keeping it local. We also do not use any pesticides or GMO products on our vineyard and factory.',
const customersComments = 'We have received nothing but raved reviews about our Bella Vida Wines such as it is full, pleasant & well rounded. Where is your second bottle you ask? Why we have that in stock and waiting for you to pick it up today!'

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const bellaVidaWinesTheory = {
    typeof : ['White', 'Red', 'Sparkling'],
    pricePerBottle : 35, 
    typeOfCraftsmanship :'Organic & local vineyard',
    customersComments : ['full', 'pleasant', 'sweet & well rounded', 'Where\s my second bottle?']
};

