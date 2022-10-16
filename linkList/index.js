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


// function uk(arr) {
//   let result =[];
//   for(let str of arr)
//   {
//     // if(!result.includes(str))
//     arr.push(str)
//   }
//   console.log(result)
  
// }

let s = ["Hare", "Krishna", "Hare", "Krishna","Krishna"];

//  uk(s) 


function my(s)
{
  let result=[]
  for(let str of s)
  {
    if(!result.includes(str))
{
  result.push(str)

}
  }
  return result
}

console.warn(my(s))