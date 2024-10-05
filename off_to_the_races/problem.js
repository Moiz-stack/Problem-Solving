let speed_p1=6;
let speed_p2=7;
let speed_p3=8;

let kickoff_p1=10;
let kickoff_p2=0;
let kickoff_p3=20;

let time_p1=(100-kickoff_p1)/speed_p1;
let time_p2=(100-kickoff_p2)/speed_p2;
let time_p3=(100-kickoff_p3)/speed_p3;

let winner=[]

if(time_p1<=time_p2 && time_p1<=time_p3){
    winner.push(1)

    if(time_p2<=time_p3){
        winner.push(2,3)
    }
    else{
        winner.push(3,2)
    }
}
else if(time_p2<=time_p1 &&time_p2<=time_p3){
    winner.push(2)
    if(time_p1<=time_p3){
        winner.push(1,3)
    }
    else{
        winner.push(3,1)
    }
}
else{
    winner.push(3)
    if(time_p1<=time_p2){
        winner.push(1,2)
    }
    else{
        winner.push(2,1)
    }
}

winner.forEach(element => {
    console.log(element)
});