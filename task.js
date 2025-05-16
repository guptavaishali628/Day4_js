//Q-->1-->Find the sum of all elements in the array:
// Given arr = [2,4,6,8,10]
function Sum(){
    let arr1=[2,4,6,8,10]
    let count=0
    for(let i=0; i<5; i++){
        count+=arr1[i]
    }
    console.log(count)
}
Sum()

//Q-->2-->Find the maximum number from the array:
// Given arr2=[3,7,2,9,5]
function MaxNum(){
    let arr2=[3,7,2,9,5]
    let max=arr2[0]
    for(let i = 0; i<5; i++){
        if(max<arr2[i]){
            max=arr2[i]
        }
    }
    console.log(max)
}
MaxNum()

//Q-->3--> Count even and odd number from array:
// given arr3=[1,2,3,4,5,6,7,8]
function CountEvenOdd(){
    let arr3=[1,2,3,4,5,6,7,8,10]
    //counters
    let evencount=0
    let oddcount=0
    for(let i=0; i<arr3.length; i++)
    {
        if(arr3[i]%2==0)
        {
            evencount++
        }
        else{
            oddcount++
        }
    }
    console.log("Even count = "+" "+evencount)
    console.log("Odd count = "+" "+oddcount)

}
CountEvenOdd()

//Q-->4-->check if given element is exist:
// Given num=9, Given arr4 = [3,5,9,11]
function CheckNumExist(){
    let arr4=[3,5,9,11]
    let num=9
    for(let i=0; i<arr4.length; i++){
        if(arr4[i]==num){
            console.log(num+" "+ "this number exist in the array ")
            return
        }
    }
    console.log("element don't found")
}
CheckNumExist()

//Q-->5-->merge two arrays without using concat function:
// arr5=[1,2,3] 
// arr6=[4,5,6]
function merge(){
    let arr5=[1,2,3] 
    let arr6=[4,5,6]
    let merged=[]
    for(let i=0; i<arr5.length; i++){
        merged[merged.length]=arr5[i]
    }
    for(let j=0; j<arr6.length; j++){
        merged[merged.length]=arr6[j]
    }
    console.log("merged array:"+" "+merged)
}
merge()

//Q-->6-->reverse an array without using reverse function:
function ReverseArray(){
    let arr7=[10,20,30,40,50]
    let start=0
    let end=arr7.length-1
    while(start<end){
        let temp=arr7[start]
        arr7[start]=arr7[end]
        arr7[end]=temp
        start++
        end--
    }
    console.log("Reversed Array"+" "+arr7)
}
ReverseArray