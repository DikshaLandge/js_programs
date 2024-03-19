// Two Sum: Given an array of integers, find two numbers such that they add up to a specific target.


function two_sum(arr,sum){
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                console.log(`${arr[i]}+${arr[j]}= ${sum}`);
            }
        }
    }

}two_sum([10,20,20,40,30,50,60],50);