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
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    console.warn("stack is empty");
  }
}
push(20);
push(19);
push(11);
push(12);
push(11);
push(8);
push(5);
pop();
pop();
pop();
console.warn(a);
console.warn(data);
