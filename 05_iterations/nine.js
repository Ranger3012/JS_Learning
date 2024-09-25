const myNum = [1,2,3,4,5];

const myTotal = myNum.reduce(function (acc, currentValue) {
    console.log(`acc: ${acc}, current_value: ${currentValue}`);
    return acc + currentValue
}, 0);
console.log(myTotal);

const myTotal2 = myNum.reduce( (acc, currentValue) => acc+currentValue, 0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 100
    },
    {
        itemName: "Python Course",
        price: 50
    }
]
const totalPrice = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(totalPrice);