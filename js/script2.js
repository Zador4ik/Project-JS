const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);

const result = 108 + 223 - (2 * 5);
console.log(result)

const value = 27.5;
const valueHigh = Math.round(value);
console.log(valueHigh);

const valueDown = Math.floor(value);
console.log(valueDown);

const valueCeil = Math.ceil(value);
console.log(valueCeil);

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `has  bots in stock`;
console.log(companyName,message); // "Cyberdyne Systems has 200 bots in stock"

let weight = '88,3';
let height = '1.75';

weight = parseInt(weight);
height = parseInt(height);

const bmi = weight / (height * height);
const fixedBmi = bmi.toFixed(1);
console.log(fixedBmi);

