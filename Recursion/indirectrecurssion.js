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
