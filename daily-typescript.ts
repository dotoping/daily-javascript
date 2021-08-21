// type aliases
type NumOrStr = number | string;

let itemPrice: number;

const setItemPrice = (price: NumOrStr): void => {
    if (typeof price === 'string') {
        itemPrice = 0;
    } else {
        itemPrice = price;
    }
};

setItemPrice(50);

// function parameter, return type
function sendGreeting(message = 'Hello', userName = 'Daniel'): void {
    console.log(`${message}, ${userName}`);
}

sendGreeting();
sendGreeting('Hello');
sendGreeting('Hello', 'John');

// arrow function
const sendGreetingArrow = (message = 'Hello', userName = 'Daniel'): void => console.log(
    `${message}, ${userName}`
);



