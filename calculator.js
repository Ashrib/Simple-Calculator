var inputData;
function getValue1() {
    var value = 1;
    screen(value)
};
function getValue2() {
    var value = 2;
    screen(value)
};
function getValue3() {
    var value = 3;
    screen(value)
};
function getValue4() {
    var value = 4;
    screen(value)
};
function getValue5() {
    var value = 5;
    screen(value)
};
function getValue6() {
    var value = 6;
    screen(value)
};
function getValue7() {
    var value = 7;
    screen(value)
};
function getValue8() {
    var value = 8;
    screen(value)
};
function getValue9() {
    var value = 9;
    screen(value)
};
function getValue0() {
    var value = 0;
    screen(value)
};
function point() {
    var value = ".";
    screen(value)
};
function add() {
    var value = "+";
    screen(value)
};
function minus() {
    var value = "-";
    screen(value)
};
function divide() {
    var value = "/";
    screen(value)
};
function multiply() {
    var value = "*";
    screen(value)
};
function equal() {
    var value = "=";
    screen(value)
};
function remove() {
    var value = ""
    screen(value)
};
function screen(v) {
    if (v === "=") {
        inputData = document.getElementById("screen");
        let data = inputData.innerText;
        let result = eval(data);
        document.getElementById("screen").innerText = result;
    } 
    else if(v === ""){
        document.getElementById("screen").innerText = null;
    }
    else {
        document.getElementById("screen").innerText += v;
    }
};