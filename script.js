let a = 0;
let o = 0;
let b = 0;

let amount = document.getElementById("rsamount");
function appleAdd() {
    let rupies = document.getElementById("rsamount").value;

    a++;
    fruitAmount = a * 10 + o * 15 + b * 7;
    if (fruitAmount >= rupies) {
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("apple").value = a;
        document.getElementById("bill").innerHTML = fruitAmount;
    }
}

function appleLess() {
    let rupies = document.getElementById("rsamount").value;

    a--;
    if (a < 0) {
        alert("Enter valid number")
    }
    else {
        fruitAmount = a * 10 + o * 15 + b * 7;
        if (fruitAmount <= 0) {
            alert("Enter valid number");
        }
        else {
            document.getElementById("apple").value = a;
            document.getElementById("bill").innerHTML = fruitAmount;
        }
    }
}
function orangeAdd() {
    let rupies = document.getElementById("rsamount").value;

    o++;
    fruitAmount = a * 10 + o * 15 + b * 7;
    if (fruitAmount >= rupies) {
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("orange").value = o;
        document.getElementById("bill").innerHTML = fruitAmount;
    }
}

function orangeLess() {
    let rupies = document.getElementById("rsamount").value;

    o--;
    if (o < 0) {
        alert("Enter valid number")
    }
    else {
        fruitAmount = a * 10 + o * 15 + b * 7;
        if (fruitAmount <= 0) {
            alert("Enter valid number");
        }
        else {
            document.getElementById("orange").value = o;
            document.getElementById("bill").innerHTML = fruitAmount;
        }
    }
}
function bananaAdd() {
    let rupies = document.getElementById("rsamount").value;

    b++;
    fruitAmount = a * 10 + o * 15 + b * 7;
    if (fruitAmount >= rupies) {
        alert("You have insuficiant balance!");
    }
    else {
        document.getElementById("banana").value = b;
        document.getElementById("bill").innerHTML = fruitAmount;
    }
}
function bananaLess() {
    let rupies = document.getElementById("rsamount").value;

    b--;
    if (b < 0) {
        alert("Enter valid number")
    }
    else {
        fruitAmount = a * 10 + o * 15 + b * 7;
        if (fruitAmount <= 0) {
            alert("Enter valid number");
        }
        else {
            document.getElementById("banana").value = b;
            document.getElementById("bill").innerHTML = fruitAmount;
        }
    }
}
