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
