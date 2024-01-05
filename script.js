
let player = {
    name: "Gaston",
    chips: 100

}
let hasBlackjack = false
let isAlive = false
let message = ""
let sum = 0

let cardArray = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardArray.push(firstCard, secondCard)
    sum = firstCard+secondCard

    renderGame()
}

function getRandomCard(){
    let getCard = Math.ceil(Math.random()*13)
    if (getCard > 10){
        return 10
    }else if(getCard === 1){
        return 1
    }else{
        return getCard
    }
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
    
    cardsEl.textContent = "Cards: " 
    for (let i=0; i<cardArray.length; i++){
        cardsEl.textContent += cardArray[i] + " "

    }
    sumEl.textContent = "Sum :" + sum
    messageEl.textContent = message

}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        sum += newCard
        cardArray.push(newCard)
        renderGame()
    }
}


