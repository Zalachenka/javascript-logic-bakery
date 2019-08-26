const flour = 1
const sugar = 1.5
const eggs = 3
const milk = 2.5
const choco = 10
const deco = 3.5
const fruits = 5

blackForest = (flour*1)+(2*sugar)+(2*eggs)+(milk/2)+(2*choco)+(5*deco)
console.log(blackForest);

strawberriePie = (fruits*2)+(flour/2)+sugar+(eggs/2)+(milk/2)+(choco/2)+(deco*2)
console.log(strawberriePie);

coeff = prompt("Enter the margin coefficient you want to make on each cake");
let bfRealPrice = blackForest*coeff;
let spRealPrice = strawberriePie*coeff;

console.log("Black Forest:");
console.log("First price: "+blackForest);
console.log("Selling Price: "+bfRealPrice);

console.log("Strawberrie Pie:");
console.log("First price: "+strawberriePie);
console.log("Selling Price: "+spRealPrice);

const stores = 5
let sales = stores*0.9*(6*spRealPrice+6*bfRealPrice);
let treasury = 5*(6*blackForest+6*strawberriePie);
let benef = sales-treasury

console.log("The daily treasury to make the cakes is of "+treasury+" euros. All the sales combined after a day of work are worth "+sales+" euros. That makes a total of "+benef+" euros of benefice per day.")