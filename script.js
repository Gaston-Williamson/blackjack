let firstCard = 10
let secondCard = 5

let hasBlackjack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard

let cardArray = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum===21){
        message = "Whoohoo you win"
        hasBlackjack = true
    }else {
        message = "You lose"
        isAlive=false
    }
    
    cardsEl.textContent = "Cards: " + cardArray
    sumEl.textContent = "Sum :" + sum
    messageEl.textContent = message

}

function newCard(){
    let newCard = 2
    sum += newCard
    cardArray.push(newCard)
    renderGame()
}


