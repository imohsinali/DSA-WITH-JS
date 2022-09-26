const falltenArray = (array, depth = 1) => {
    let result = [];
    array.forEach((arr) => {
      if (Array.isArray(arr) && depth > 0) {
        result.push(...falltenArray(arr, depth - 1));
      } else result.push(arr);
    });
    return result;
  };

  function fun() {
    for (var a = 0; a < 3; a++) {
      setTimeout(function log() {
        // let v = fun();
        // console.log(v);
        // console.log(a);
        // return log();
      });
    }
  }
  fun();
  const ar = [1, 2, 3, [1, 2, 3, [4, 5, 6]], 3];

  console.log(ar.flat(1));

