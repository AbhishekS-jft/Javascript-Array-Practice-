let arr=[1,2,3,4,5,6,7,8,false,"Not"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[11]);       //this index does not exist

// console.log("Length of Array is ",arr.length);
// console.log(arr[1]);
// arr[1]=10;
// console.log(arr[1]);
console.log("Type of Array in J.S.",typeof(arr));

// // Loop
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// Array Methods

// 1-toString() -> Converts an Array to String
let num=[1,2,3,4];
let b=num.toString();
// console.log(b);

//2-join("operator") -> Join all array elements using a seperator
let c=num.join("__");
console.log(c,typeof(c));

//3 pop->remove last element
num.pop()
console.log(num);

//4.push 
num.push(20);
console.log(num);

//5.shift-> remove first element and stores it
let r=num.shift();
console.log(num);
console.log(r);

//6.unshift->add first element and returns the length of Array
let p=num.unshift();
console.log(num);
console.log(r);

//7.delete- it delete an element but the lenth remains same
            // it shows empty,where the element has been deleted
delete num[0];
console.log(num);
console.log(num.length );

// Array of Objects 


// const items=[
//     {name:'ABC',price:100},
//     {name:'DEF',price:800},
//     {name:'PQR',price:10},
//     {name:'XYZ',price:1000},
//     {name:'BCD',price:100},
// ];

// const expensiveitems=items.some((item)=> {
//    return item.price>400000
// });

// 8. Prototype Functions

Array.prototype.newFunction=function(){
    for(let i=0;i<this.length;i++)
    {
        this[i]=this[i]*90;
    }
};

const A=[1,2,3];
A.newFunction();
console.log(A);
