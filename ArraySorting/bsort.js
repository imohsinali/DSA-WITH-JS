let data = [40, 30, 12, 25];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    console.warn(i, j);
    console.warn(data[j]);
    if (data[j] > data[j + 1]) {
      console.warn("cn", j, data[j], data[j + 1]);
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
      break;
    }
  }
}
console.warn(data);
