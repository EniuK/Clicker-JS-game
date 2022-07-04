let clickpower = 1;
let score = 5000;
let money = 5000;
let worker = 0;
let expand = 0;
let factory = 0;
let shop = 0;
const multiplier = 1.1;
let workerCost = 50;
let shopCost = 300;
let factoryCost = 1000;

//main block
const coin = document.body.querySelector("#mainClicker");
const scoreAmount = document.querySelector("#clicksPerSecond");
const moneyScore = document.querySelector("#moneyAmount");
//worker functionality
const workersAmount = document.querySelector("#workerAmount");
const workersCost = document.querySelector("#workerCost");
const buyWorker = document.querySelector(".worker");
//shop functionality
const buyShop = document.querySelector(".shop");
const shopsCost = document.querySelector("#shopCost");
const shopAmount = document.querySelector("#shopAmount");
//factory functionality
const buyfactory = document.querySelector(".factory");
const factorysCost = document.querySelector("#factoryCost");
const factoryAmount = document.querySelector("#factoryAmount");

const addToScoreAndMoney = function () {
  score = score + clickpower;
  money = money + clickpower;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
};

const buy = function (type, cost, queryCost, queryCounter, typeClickpower) {
  return function () {
    if (money > cost - 1) {
      type++;
      const y = cost;
      money = money - cost;
      cost = Math.round(y * multiplier);
      queryCost.innerHTML = cost;
      queryCounter.innerHTML = type;
      scoreAmount.innerHTML = score;
      moneyScore.innerHTML = money;
      clickpower = clickpower + typeClickpower;
    }
  };
};

const buyExpand = function () {
    
};

//worker
buyWorker.addEventListener(
  "click",
  buy(worker, workerCost, workersCost, workersAmount, 1)
);
buyWorker.addEventListener("click", () => {
  worker += 1;
  workerCost = Math.round(workerCost * multiplier);
});
//shop
buyShop.addEventListener(
  "click",
  buy(shop, shopCost, shopsCost, shopAmount, 3)
);
buyShop.addEventListener("click", () => {
  shop += 1;
  shopCost = Math.round(shopCost * multiplier);
});
//factory
buyfactory.addEventListener(
  "click",
  buy(factory, factoryCost, factorysCost, factoryAmount, 10)
);
buyfactory.addEventListener("click", () => {
  factory += 1;
  factoryCost = Math.round(factoryCost * multiplier);
});

coin.addEventListener("click", addToScoreAndMoney);

scoreAmount.innerHTML = score;
moneyScore.innerHTML = money;

setInterval(() => {
  score = (score + worker * 1 + shop * 5 + factory * 30) ;
  money = money + worker * 1 + shop * 5 + factory * 30;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
}, 1000);
