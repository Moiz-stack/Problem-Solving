let number = 27;
let end = 0

let multiply=1

while (number > 10) {
    multiply=1
    while (number > 0) {
        end = number % 10
        number = Math.floor(number / 10)
        multiply = end*multiply
    }
    number = multiply
}




if (multiply < 10) {
    console.log("Your lucky number is: ", multiply)
}
else {
    console.log("Your bad")
}