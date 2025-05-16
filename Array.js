// diffrence between primitive and non primitive dtype
// primitive = static memory allocation which are immuteable like string, they are also inbuilt
// Non-primitive = dynamic memory allocation which are nutuale like array, they are also user-defined

let Fruits = ["Apple","Banana","Mango"]
//let fru = new array(1,2,3,4,5)
console.log(Fruits)

//-----------------inbuild function in array-----------------------
//(1)-->pop()--> remove the last element from the array
Fruits.pop() 
console.log(Fruits)

//(2)-->shift()-->remove the first element from array
Fruits.shift() 
console.log(Fruits)

//(3)-->push-->add elemnt at the end of the array
Fruits.push("Grapes", "Orange")
console.log(Fruits)  

//(4)-->unshift-->add elemnt at the starting of the array
Fruits.unshift("Cherry")
console.log(Fruits) 

//(5)-->length()--<return length of the array
console.log(Fruits.length)

//(6)-->arrayname[index value]-->access elemnt from the array.
console.log(Fruits[0])

//(7)-->toString() or join(specially used in array)--->convert array or other dtypes into string
var string=Fruits.toString()
console.log(string)

var join = Fruits.join(" ") // we can also use separater her like ' ', -
console.log(join)

//(8)-->typeOf()-->used to check the type of the object.

console.log(typeof(join)) // ans=string
console.log(typeof(Fruits)) // ans=object

//(9)-->slice(startIndex, lastIndex)--> used to extract element from the middle

let Slice=Fruits.slice(1,3)
console.log(Slice)  

//(10)-->splice(kaha se add krna hai, delete count(kitne element delete krna hai), kya add krna h)--> add element in the middle and also used for delete element

console.log(Fruits)
Fruits.splice(2,1,"watermelon") // watermelon k bd k elements ko delete krta h
console.log(Fruits)

//(11)-->concat()--->used to join two arrays.
let arr1=[1,2]
let arr2=["vaishali","khushi"]
let arr3=[19,20]
let new_arr= arr1.concat(arr2,arr3)
// let final_arr=new_arr.concat(arr3)
console.log(new_arr)

//(12)-->reverse()-->reverse the array
let array = [1,2,3,4]
console.log(array.reverse())

//Q--> reverse a number = 75638
let num = 756238
let reverse_num = num.toString().split('').reverse().join('')
console.log(reverse_num)  // ans = string "83657"
console.log(Number(reverse_num)) // ans = 83657  in form of number

