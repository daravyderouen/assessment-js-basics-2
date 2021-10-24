/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/

//CODE HERE

class Tickets  {
    constructor (items, orderTime, customerID){
        this.items = items,
        this.orderTime = orderTime,
        this.customerID = customerID,
        this.status = 'queued';
        
    };

    updateStatus=(newStatus)=>{
        newStatus = this.status;
    } 
      
    getStatus () {
        console.log(`The order for` ,this.customerID,`is now`, this.status,`.`) 
    }
    
    }    //const results = () =>{
        
        
    
    

    let ticket1 = new Tickets( 'pizza, bread', 7, 44, 345, 'done')
        
    const {status: ticket1Status}=ticket1
    const {customerID: ticket1CustomerID}=ticket1
  ticket1.getStatus()

    //}
//let phrase = updateStatus(results)

/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered at: 7:03 PM
    customer: 575
*/

//CODE HERE

const firstTicket = {
    items : 'Asian Cajun Pizza, Bella Noche Lasgna, bruschettta',
    orderTime : 7,
    customerID : 335,
    status : 'cooking'
}


/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE

//const { status: secondTicketStatus}= secondTicket

console.log(firstTicket.status)