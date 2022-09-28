const app = (x) => {
  // console.warn(x);

  if (x < 10) {
    app(1 + x);
    // console.warn(x);
  }
};

app(0);

//5! 5 *4 *3 *2 *1

const fun = (n) => {
  if (n === 0) {
    return 1;
  }
  return fun(n - 1) * n;
};

console.warn(fun(5));

//basic recursion is direct recursion and the above example is direct recursion


