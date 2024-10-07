let num=parseInt(prompt("Enter the number"))
let sum=0
let start=0,end=0
let isCheck=false

let count=0;
let number=num

while(number>0){
    count=count+1
    number=Math.floor(number/10)
}


if(count==1){
    if(num==1 || num==100 || num==1000){
        console.log("Number is happy")
        isCheck=true
    }
    else{
        console.log("Number is sad")
    }
}

else if(count==2){

    for(let i=0;i<10;i++){

        start=Math.floor(num/10)
        end=num%10
        sum=(start)**2+(end)**2
        num=sum
        if(sum==1 || sum==100 || sum==1000){
            console.log("Number is happy")
            isCheck=true
            break
        }
    }
    
}

else if(count==3){

    for(let i=0;i<10;i++){
        start=Math.floor(num/10)
        end=num/10

        start=Math.floor(start/10)
        sum=(start)**2+(end)**2
        num=sum
        if(sum==1 || sum==100 || sum==1000){
            console.log("Number is happy")
            isCheck=true
            break
        }
    }
}

// if(!isCheck){
//     console.log("Number is Sad")
// }


// if(sum==1){
//     console.log("Number is happy")
// }
// else{
//     console.log("number is sad")
// }
