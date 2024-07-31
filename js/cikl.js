let str = "easycode";

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let charUp = char.toUpperCase();
    console.log(charUp);

}

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}

for(let item in list) {
    if(typeof list[item] === "string") {
       let output = list[item].toUpperCase();
       console.log(output);
    }
}