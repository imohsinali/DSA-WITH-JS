class Node {
  constructor(value) {
    this.value = value;
    this.next=null
  }
}
// const newNode=new Node(5)
// const newNode1=new Node(51)
// 
// console.warn(newNode)
// console.warn(newNode1)
// 
// 
class linkList {
    constructor(value)
    {
        const newNode= new Node(value)
        this.head=newNode
        this.tail=this.head//newNode
        this.length=1
    }
    push(value)
    {
        const newNode= new Node(value)
        if(!this.head)
        {
        this.head=newNode
        this.tail=newNode
             
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
}


const linklist=new linkList(5)
linklist.push(3)

console.warn(linklist)

