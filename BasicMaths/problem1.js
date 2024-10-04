let count=0;

let number=12345678910;
while(number>0){
    count=count+1
    number=Math.floor(number/10)
}

console.log(count)