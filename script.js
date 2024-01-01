let firstCard = 10
let secondCard = 12
let hasBlackjack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum===21){
        message = "Whoohoo you win"
        hasBlackjack = true
    }else {
        message = "You lose"
        isAlive=false
    }
    
    console.log(message)
}



