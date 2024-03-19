//...............................1.fill()method:-  used to change elements inside an array.

// let arr=[2,3,4,5,6,7,8];
// let arr2=arr.fill(3);
// console.log(arr2);



// function fillMethod(arr,changeValue){

//     for(let i=0;i<arr.length;i++){
//         if(changeValue!=null){
//             arr[i]=changeValue;
//         }
//     }
// console.log(arr);
// }fillMethod([2,3,4,5,6,7,8,9],5);



//...............................2.inculdes()is used to check no is present in a array or not .if present it returns true else falsee.

// let arr=[2,3,4,5,6,7,8,9];
// let arr2=arr.includes(9);
// console.log(arr2);


// function includesMethod(arr,val){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===val){
//             return true;
//         }
//     }
       
//   return false;
        
    

// }let res=includesMethod([20,40,30,50,60,80],50);
// console.log(res);



//3........................find() checks that  value is present or not

// let arr=[2,3,4,5,6,7,8,9];
// let res=arr.find(findFunc);

// function findFunc(value){
//     return value===5;

// }
// console.log(`${res}  is present in an array.`);


// function findFunc(arr,val){

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===val)
//         {
//             return true;
//         }
//     }
//     return -1;

// }let res=findFunc([1,2,3,4,5,6,7],9);
// console.log(res);



//.................................4.findIndex()-

// let arr=[2,3,4,5,6,7,8,9];
// let index=arr.findIndex(findIndexFunc);

// function findIndexFunc(value){
//     return value===8;
// }
// console.log(index);



// function findIndexFunc(arr,val){
// let index;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===val){
//             index=i;
//             return index;
//         }
//     }
//     return -1;
// }let res=findIndexFunc([1,2,3,4,5,6,7,8],7);
// console.log(res);


//...........................................5.findLastIndex()

// let arr=[20,30,40,50,60,70,80,99];
// let index=arr.findLastIndex(lastIndexMethod);
// function lastIndexMethod(value){
//     return value < 80;
// }
// console.log(index);


// function lastIndexMethod(arr,val){
//     let index;
//     for(let i=arr.length;i>0;i--)
//     {
//         if(arr[i]<val){
//         index=i;
//         return index;

//         }
//     }
//     return -1;

// }let res=lastIndexMethod([20,30,40,50,60,70],60);
// console.log(res);


//.......................................6.indexOf()
// let arr=['diksha','sonu','aku'];
// let index=arr.indexOf('aku');
// console.log(index);
// arr[index]='anant';
// console.log(arr);
