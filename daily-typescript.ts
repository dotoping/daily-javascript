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