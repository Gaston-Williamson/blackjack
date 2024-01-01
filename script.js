let firstCard = 10
let secondCard = 12
let hasBlackjack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard

if (sum <= 20){
    console.log("Do you want to draw a new card?")
}else if(sum===21){
    console.log("Whoohoo you win")
    hasBlackjack = true
}else {
    console.log("You lose")
    isAlive=false
}


console.log(hasBlackjack)
console.log(isAlive)