let num = [1,2,3];

function multiply() {
    let strr = String(num);
    for(i = 0; i > strr.length; i++) {
        let element = strr[i];
        let replaced = strr.replace(",", "*");
        console.log(replaced);
    }
}

multiply();

let numa = prompt("Введите число");

if(numa < 10 & numa > 0) {
    function ask() {
        let imagined = Math.random(1, );
        if(imagined == numa) {
            console.log("Вы угадали число ${imagined}");

        } else if(imagined !== numa) {
            console.log("Вы не угадали число ${imagined}, ваше число ${numa}");
        }
    }
    ask();
}

let arrr = [1,2,3];

let second = String(arrr).replace("[]", " ")
console.log(String(arrr) +=second);

function doubleArr() {
    let second = String(arrr).replace("[]", " ")
    console.log(String(arrr) +=second);
}

doubleArr();

let strFor = "SomeTestString";

function space() {
    let divided = strFor.split(" ");
    console.log(divided);
}

space();

let strt = prompt("Введите строку");

function reverseString() {
  if(typeof(strt) == "string") {
    let strSave = "";
    for(let i = strt.length; i >=0; i--) {
        strSave += strt[i];
    } console.log(strSave);
  } else {
    console.log("Стройка не найдена")
  }
}

reverseString();


let numm = prompt("Введите число");
let numStr = Number(numm);

function getArray() {
    if(numStr > 0 & numStr < 10 ) {
        for(; numStr < 10; numStr++) {
            console.log(numStr);
        }
    } else {
        console.log("Число не подходит");
    }
}

getArray();
