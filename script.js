let a = 0;
let o = 0;
let b = 0;

let amount= document.getElementById("rsamount");
function appleAdd() {
    let rupies = document.getElementById("rsamount").value;

    a++;
    fruitAmount= a*10+o*15+b*7;
    if (fruitAmount > rupies ){
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("apple").value = a;
        document.getElementById("totalamount").value = fruitAmount;
    }
}

function appleLess(){
    let rupies = document.getElementById("rsamount").value;

    a--;
    friutAmount= a*10+o*15+b*7;
    if (fruitAmount <= 0) {
        alert("Enter valid number");
    }
    else {
        document.getElementById("apple").value = a;
        document.queryseleector("totalamount").value = fruitAmount;
    }
}
function orangeAdd() {
    let rupies = document.getElementById("rsamount").value;

    o++;
    fruitAmount= a*10+o*15+b*7;
    if (fruitAmount > rupies ){
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("orange").value = o;
        document.getElementById("totalamount").value = fruitAmount;
    }
}

function orangeLess() {
    let rupies = document.getElementById("rsamount").value;

    o--;
    friutAmount= a*10+o*15+b*7;
    if (fruitAmount <= 0) {
        alert("Enter valid number");
    }
    else {
        document.getElementById("orange").value = o;
        document.queryseleector("totalamount").value = fruitAmount;
    }
}
function bananaAdd() {
    let rupies = document.getElementById("rsamount").value;

    b++;
    fruitAmount= a*10+o*15+b*7;
    if (fruitAmount > rupies ){
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("banana").value =b;
        document.getElementById("totalamount").value = fruitAmount;
    }
}
function bananaLess() {
    let rupies = document.getElementById("rsamount").value;

    b--;
    friutAmount= a*10+o*15+b*7;
    if (fruitAmount <= 0) {
        alert("Enter valid number");
    }
    else {
        document.getElementById("banana").value = b;
        document.queryseleector("totalamount").value = fruitAmount;
    }
}
