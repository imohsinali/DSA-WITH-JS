let data = [];
let currentSize = data.length;
let max = 5;
function enqueue(neVal) {
  if (currentSize >= max) {
    console.warn("Stack is full");
  } else {
    data.unshift(neVal);
  }
  currentSize++;
}

function dequeue() {
  if (currentSize <= 0) {
    console.warn("stack is empty");
  } else {
    currentSize--;

    data[currentSize];
  }
  data.length = currentSize;
}
enqueue(5);
enqueue(6);
console.warn(data);
