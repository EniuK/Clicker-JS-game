

let moneyValue = 'bronze'
let clickpower = 1
let score = 5000
let money = 5000
let worker = 0
let expand = 1000
let factory = 0
let shop = 0
const multipier = 1.1
let workerCost = 50
let shopCost = 300
let factoryCost = 1000

//main block
const coin = document.body.querySelector('#mainClicker')
const scoreAmount = document.querySelector('#clicksPerSecond')
const moneyScore = document.querySelector('#moneyAmount')
//worker functionality
const workersAmount = document.querySelector('#workerAmount')
const workersCost = document.querySelector('#workerCost')
const buyWorker = document.querySelector('.worker')
//shop functionality
const buyShop = document.querySelector('.shop')
const shopsCost = document.querySelector('#shopCost')
const shopAmount = document.querySelector('#shopAmount')
//factory functionality
const buyfactory = document.querySelector('.factory')
const factorysCost = document.querySelector('#factoryCost')
const factoryAmount = document.querySelector('#factoryAmount')

const addToScoreAndMoney = function()  {
    score = score + clickpower
    money = money + clickpower
    scoreAmount.innerHTML = score
    moneyScore.innerHTML = money
     
}

const workerBuy = function(){
    if(money > workerCost -1){
    worker = worker + 1
    money = money - workerCost
    workerCost = Math.round(workerCost*multipier)
    workersCost.innerHTML = workerCost
    workersAmount.innerHTML = worker
    scoreAmount.innerHTML = score
    moneyScore.innerHTML = money
    clickpower = clickpower + 1
    }else{
        return
    }
}

const shopBuy = function(){
    if(money > shopCost -1){
    shop = shop + 1
    money = money - shopCost
    shopCost = Math.round(shopCost*multipier)
    shopsCost.innerHTML = shopCost
    shopAmount.innerHTML = shop
    scoreAmount.innerHTML = score
    moneyScore.innerHTML = money
    clickpower = clickpower + 3
    }else{
        return
    }
}

const factoryBuy = function(){
    if(money > factoryCost -1){
    factory = factory + 1
    money = money - factoryCost
    factoryCost = Math.round(factoryCost*multipier)
    factorysCost.innerHTML = factoryCost
    factoryAmount.innerHTML = factory
    scoreAmount.innerHTML = score
    moneyScore.innerHTML = money
    clickpower = clickpower + 10
    }else{
        return
    }
}


buyWorker.addEventListener(
    "click",
    workerBuy
)

buyShop.addEventListener(
    'click',
    shopBuy
)

buyfactory.addEventListener(
    'click',
    factoryBuy
)

coin.addEventListener(
    "click",
    addToScoreAndMoney
)



scoreAmount.innerHTML = score
moneyScore.innerHTML = money

setInterval(() => {
    score = score + worker*1 + shop*5 + factory*30
    money = money + worker*1 + shop*5 + factory*30
    scoreAmount.innerHTML = score
    moneyScore.innerHTML = money
}, 1000);