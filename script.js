let clickpower = 1;
let score = 50000;
let money = 50000;
let worker = [0, 1, 50, 1]; //[counter, clickpower, cost, moneyPerSec]
let expand = 1.1;
let expandCounter = 0;
let factory = [0, 10, 1000, 30];
let shop = [0, 3, 300, 5];
const multiplier = 1.1;
let shopCost = 300;
let factoryCost = 1000;
let expandCost = 5000;

let moneyPerSec = 0;

const coin = document.body.querySelector("#mainClicker");
const scoreAmount = document.querySelector("#clicksPerSecond");
const moneyScore = document.querySelector("#moneyAmount");

const workersAmount = document.querySelector("#workerAmount");
const workersCost = document.querySelector("#workerCost");
const buyWorker = document.querySelector(".worker");

const buyShop = document.querySelector(".shop");
const shopsCost = document.querySelector("#shopCost");
const shopAmount = document.querySelector("#shopAmount");

const buyfactory = document.querySelector(".factory");
const factorysCost = document.querySelector("#factoryCost");
const factoryAmount = document.querySelector("#factoryAmount");

const buyExpand = document.querySelector(".expand");
const expandsCost = document.querySelector("#expandCost");
const expandAmount = document.querySelector("#expandAmount");

const addToScoreAndMoney = function () {
  score = score + clickpower;
  money = money + clickpower;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
};

const buy = function (type, queryCost, queryCounter) {
  return function () {
    if (money > type[2] - 1) {
      type[0]++;
      money = money - type[2];
      type[2] = Math.round(type[2] * multiplier);
      queryCost.innerHTML = type[2];
      queryCounter.innerHTML = type[0];
      scoreAmount.innerHTML = score;
      moneyScore.innerHTML = money;
      clickpower = clickpower + type[3];
      moneyPerSec = moneyPerSec + type[1];
    }
  };
};

const updateExpand = () => (moneyPerSec = Math.round(moneyPerSec * expand));

const expandBuy = function () {
  if (money > expandCost - 1) {
    money = money - expandCost;
    expandCounter++;
    console.log(moneyPerSec);
    moneyPerSec = Math.round(moneyPerSec * expand);
    expandCost = Math.round(expandCost * 1.1);
    expandsCost.innerHTML = expandCost;
    expandAmount.innerHTML = expandCounter;
    moneyPerSec = Math.round((worker * 1 + shop * 5 + factory * 30) * expand);
  }
};

buyWorker.addEventListener("click", buy(worker, workersCost, workersAmount));
buyWorker.addEventListener("click", () => {
  worker += 1;
  workerCost = Math.round(workerCost * multiplier);
});

buyShop.addEventListener(
  "click",
  buy(shop, shopCost, shopsCost, shopAmount, 5)
);
buyShop.addEventListener("click", () => {
  shop += 1;
  shopCost = Math.round(shopCost * multiplier);
});

buyfactory.addEventListener(
  "click",
  buy(factory, factoryCost, factorysCost, factoryAmount, 30)
);
buyfactory.addEventListener("click", () => {
  factory += 1;
  factoryCost = Math.round(factoryCost * multiplier);
});

buyExpand.addEventListener("click", expandBuy);

coin.addEventListener("click", addToScoreAndMoney);

scoreAmount.innerHTML = score;
moneyScore.innerHTML = money;

setInterval(() => {
  score = score + moneyPerSec;
  money = money + moneyPerSec;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
}, 1000);
