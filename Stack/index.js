let data = [];
let currentSize = data.length;
let max = 5;
function push(neVal) {
  if (currentSize >= max) {
    console.warn("Stack is full");
  } else {
    data[currentSize] = neVal;
  }
  currentSize++;
}

function pop() {
  if (currentSize <= 0) {
    console.warn("stack is empty");
  } else {
    currentSize--;

    data[currentSize];
  }
  data.length = currentSize;
}
push(20);
push(19);
push(11);
push(12);
pop();
pop();
pop();
console.warn(data);
