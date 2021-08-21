var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
// function parameter, return type
function sendGreeting(message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'Daniel'; }
    console.log(message + ", " + userName);
}
sendGreeting();
sendGreeting('Hello');
sendGreeting('Hello', 'John');
// arrow function
var sendGreetingArrow = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'Daniel'; }
    return console.log(message + ", " + userName);
};
