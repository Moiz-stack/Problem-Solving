// let number=121
// let number1=number
// let str_number
// let n=''


// while (number > 0) {
//     let digit = number % 10;  // Get the last digit
//     str_number=digit.toString()
//     n=n+str_number
//     number = Math.floor(number / 10);  // Remove the last digit
//     // console.log(digit)
//     // console.log(number)
// }


// let final=parseInt(n)

// if(final==number1){  
//     console.log("Palindrome")       
// }
// else{
//     console.log("Not Palindrome")
// }


//Optimised Code


let number=121
let number1=number
let reverse=0

while(number1>0){
    let digit=number1%10
    reverse=reverse*10+digit
    number1=Math.floor(number1/10)
}

if(number==reverse){    
    console.log("Palindrome")   
}
else{
    console.log("Not Palindrome")
}
