let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cadEl = document.getElementById("card-el")
let player = {
    name: "Adrian",
    chips: 145,
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    renderGame()
}
function getRandomCard(){
    let random = Math.floor(Math.random() * 13) + 1
    if(random > 10){
        return 10
    }else if(random === 1){
        return 11
    }else{
        return random
    }
    
}
function startGame(){
    isAlive = true
    let firstCard = Math.floor(Math.random() * 13) + 1
    let secondCard = Math.floor(Math.random() * 13) + 1
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cadEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cadEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if(sum <= 20){
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        message = "You`ve won"
        hasBlackJack = true
    }else{
        message = "You`ve lost"
        isAlive = false    
    }
    messageEl.textContent = message
    
    
}
function newCard(){
   
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}


