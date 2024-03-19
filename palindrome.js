// let num=212;
// let rev=0;
// let temp=num;
// while(num>=0){
//     let rem=num % 10;
//     let rev=(rev*10)+rem;
//     let num=num/10;
// }
// if(temp==rev){
//     console.log("no is palindrome");
// }
// else{
//     console.log("not palindrome");
// }

    

// let num=123;
// console.log(num);
// // let temp=num;
// let rev=0;

// while(num>=0){
//     let rem=parseInt(num%10);
//     rev=parseInt(rev*10)+rem;
//     num=parseInt(num/10);
// }

// if(temp==rev)
// {
//     console.log("number is palindrome");
// }
// else{
//     console.log("number is not palindrome");   
// }



let str="dad";
console.log(str);
let temp=str;
let rev=0;

while(str>0){
    let rem=parseInt(str%10);
    rev=parseInt((rev*10)+rem);
    str=parseInt(str/10);
}

if(temp==str)
{
    console.log("number is palindrome");
}
else{
    console.log("number is not palindrome");   
}




// let number=121;
