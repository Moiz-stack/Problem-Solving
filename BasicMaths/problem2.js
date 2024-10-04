let arr=[]
let number=9012345
let lastDigit=0;

while(number>0){
    lastDigit=number%10
    number=Math.floor(number/10)  
    arr.push(lastDigit);
}

console.log(arr)