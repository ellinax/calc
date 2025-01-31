//더하기
function add(a, b) {
    return a + b;
}

// 빼기
function subtract(a, b) {
    return a - b;
}

// 곱하기
function multiply(a, b) {
    return a * b;
}

// 나누기
function div(a, b) {
    return a / b;
}

//git commit

function testAdd() {
    console.log(add(1, 1) === 2);
}

function testSubtract(){
    console.log(subtract(2, 1) === 1);
}

function testMultiply(){
    console.log(multiply(2, 3)===6);
}
function testDiv(){
    console.log(div(6, 3)===2);
}