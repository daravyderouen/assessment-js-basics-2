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
let total = cart.reduce((sum, f) => sum + f.price, 0);

console.log(total)

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

function calcFinalPrice(cartTotal, couponValue, tax) {
    totalPrice=(cartTotal-couponValue)+(cartTotal*(tax*100))
    return totalPrice
}


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

class Customers { 
    constructor(customerName, phoneNumber, orderNumber, customerRating){
    this.customerName= customerName,
    this.phoneNumber = phoneNumber,
    this.orderNumber = orderNumber,
    this.customerRating = customerRating
    
}
}

//Each customer will have their own name, phone number, order number, and customer rating according to their own object. Each property describes that customer details. 




/*
    TEXT ANSWER HERE
*/
let customerName = "The name customer provides whether they call in the order or comes in to dine."

let phoneNumber = "The phone number the customer provides that is associated with the object phoneNumber in our data system."

let orderNumber = "The customer's order number that we can track it's status throughout the process in our database whether the back is working on it or it's done or has been served."

let customerRating = "The rating the customer provides for us whether is about the food or the quality in our service, or even our facility itself."


/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer1 = {
    customerName : 'Ben',
    phoneNumber : 3333333333,
    orderNumber : 34,
    customerRating : 8,
}

