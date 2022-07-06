let clickpower = 1;
let score = 199;
let money = 50000;
let worker = [0, 1, 50, 1]; //[counter, clickpower, cost, moneyPerSec]
let factory = [0, 10, 1000, 30];
let shop = [0, 3, 300, 5];
let estate = [0, 50, 10000, 100]
let company = [0, 150, 20000, 250 ]
let politician = [0, 300, 30000, 400]
let state = [0, 1000, 50000, 1500]
let communism = [0, 10000000, 100000, 10000000 ]
let expand = 1.1;
let expandCost = 5000;
let expandCounter = 0;

let multiplier = 1.1;
let moneyPerSec = 0;

const coin = document.body.querySelector("#mainClicker");
const scoreAmount = document.querySelector("#clicksPerSecond");
const moneyScore = document.querySelector("#moneyAmount");
const coinImg = document.querySelector("#mainImg");

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

const buyEstate = document.querySelector(".estate");
const estatesCost = document.querySelector("#estateCost");
const estateAmount = document.querySelector("#estateAmount");

const buyCompany = document.querySelector(".company");
const companiesCost = document.querySelector("#companyCost");
const companyAmount = document.querySelector("#companyAmount");

const buyPolitician = document.querySelector(".politician");
const politiciansCost = document.querySelector("#politicianCost");
const politicianAmount = document.querySelector("#politicianAmount");

const buyState = document.querySelector(".state");
const statesCost = document.querySelector("#stateCost");
const stateAmount = document.querySelector("#stateAmount");

const buyCommunism = document.querySelector(".communism");
const communismsCost = document.querySelector("#communismCost");
const communismAmount = document.querySelector("#communismAmount");

const addToScoreAndMoney = function () {
  money = money + clickpower;
  score++;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
  betterCoin();
};

const betterCoin = function () {
  if (score == 200) {
    const container = document.querySelector("#upgradeButton");
    const buttonUpgrade = document.createElement("button");
    buttonUpgrade.innerText = "BETTER COIN";
    container.appendChild(buttonUpgrade);
    clickpower = clickpower * 2;

    buttonUpgrade.addEventListener("click", function () {
      coinImg.src = "./images/silver-coin.png";
      container.innerHTML = "";
    });
  } else if (score == 400) {
    const container = document.querySelector("#upgradeButton");
    const buttonUpgrade = document.createElement("button");
    buttonUpgrade.innerText = "EVEN BETTER COIN";
    container.appendChild(buttonUpgrade);
    clickpower = clickpower * 3;
    buttonUpgrade.addEventListener("click", function () {
      coinImg.src = "./images/gold-coin.png";
      container.innerHTML = "";
    });
  }
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
    moneyPerSec = Math.round(moneyPerSec * expand);
    expandCost = Math.round(expandCost * 1.1);
    expandsCost.innerHTML = expandCost;
    expandAmount.innerHTML = expandCounter;
  }
};

buyWorker.addEventListener("click", buy(worker, workersCost, workersAmount));

buyShop.addEventListener("click", buy(shop, shopsCost, shopAmount));

buyfactory.addEventListener("click", buy(factory, factorysCost, factoryAmount));

buyExpand.addEventListener("click", expandBuy);

buyEstate.addEventListener("click", buy(factory, factorysCost, factoryAmount));

buyfactory.addEventListener("click", buy(factory, factorysCost, factoryAmount));

buyfactory.addEventListener("click", buy(factory, factorysCost, factoryAmount));

buyfactory.addEventListener("click", buy(factory, factorysCost, factoryAmount));

buyfactory.addEventListener("click", buy(factory, factorysCost, factoryAmount));


coin.addEventListener("click", addToScoreAndMoney);

scoreAmount.innerHTML = score;
moneyScore.innerHTML = money;

setInterval(() => {
  money = money + moneyPerSec;
  scoreAmount.innerHTML = score;
  moneyScore.innerHTML = money;
}, 1000);
