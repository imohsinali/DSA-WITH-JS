let money = 100;
let totalapple = 0;

function buyapple(y) {
  //   console.warn(y);
  if (y > 0) {
    console.warn("i have ", y, totalapple);
    buymore(y);
  } else {
    console.warn(" i donot have money", totalapple);
  }
}
function buymore(x) {
  totalapple++;
  buyapple(x - 20);

  //   console.warn("buymore", x);
}

buyapple(money);

function test(x) {
  console.warn(x);
  if (x > 0) {
    test(x - 1);
  }
}

test(5);

function color() {
  let data = 20;
  console.warn(data);
}

function days() {
  color();
}

function fruits() {
  days();
}
function topfun() {
  fruits();
}

topfun();

//Head and Tail Recrucsion

function text(x) {
  console.warn(x); //head recursion 5 4 3 2 1 0
  if (x > 0) {
    test(x - 1);
  }
  // console.warn(x) //tail recursion 0 1 2 3 4 5
}

test(5);

//recursion array with reverse

let data = [3, 20, 9, 0];
let temp;

function reverseArray(data, start, end) {
  console.warn(data);

  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverseArray(data, start + 1, end - 1);
  }
}

reverseArray(data, 0, data.length - 1);

let data2 = [10, 20, 0, 15, 1];
data2.reverse();
// data2.sort((a, b) => b - a);
console.warn(data2);
