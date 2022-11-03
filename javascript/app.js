import {DonutMaker} from "./DonutMaker.js"
let dm = new DonutMaker();
const donutCount = document.querySelector(".donut-count");
const donutButton = document.querySelector(".donut-button");
const autoClickerCount = document.querySelector(".auto-clicker-count");
const autoClickerPrice = document.querySelector(".auto-clicker-price");
const autoClickerButton = document.querySelector(".auto-clicker-button");
const multiplierCount = document.querySelector(".multiplier-count");
const multiplierPrice = document.querySelector(".multiplier-price");
const multiplierButton = document.querySelector(".multiplier-button");
const clickValue = document.querySelector(".donut-value");
const reset = document.querySelector(".reset-game");

donutButton.onclick = function() {
    dm.addDonutCount();
    donutCount.innerHTML = "Donut Count: " + dm.getDonutCount();
}

autoClickerButton.onclick = function() {
    dm.autoClickerPurchase();
    autoClickerCount.innerHTML = "Auto Clicker Count: " + dm.getAutoClickerCount();
    autoClickerPrice.innerHTML = "Price: " + dm.getAutoClickerPrice() + " donuts";
    donutCount.innerHTML = "Donut Count: " + dm.getDonutCount();
    if (dm.getDonutCount() < dm.getAutoClickerPrice()) {
        autoClickerButton.style.color = "gray";
    }
}

multiplierButton.onclick = function() {
    dm.multiplierPurchase();
    multiplierCount.innerHTML = "Donut Multiplier Count: " + dm.getMultiplierCount();
    multiplierPrice.innerHTML = "Price: " + dm.getMultiplierPrice() + " donuts";
    donutCount.innerHTML = "Donut Count: " + dm.getDonutCount();
    if (dm.getDonutCount() < dm.getMultiplierPrice()) {
        multiplierButton.style.color = "gray";
    }
    clickValue.innerHTML = "Click Value: " + dm.getMultiplier();
}
setInterval(autoClick, 1000);

function autoClick() {
    dm.autoClicking();
    donutCount.innerHTML = "Donut Count: " + dm.getDonutCount();
    if (dm.getDonutCount() >= dm.getAutoClickerPrice()) {
        autoClickerButton.style.color = "black";
    }
    if (dm.getDonutCount() >= dm.getMultiplierPrice()) {
        multiplierButton.style.color = "black";
    }
}

donutButton.addEventListener('click', () => {
    if (dm.getDonutCount() >= dm.getAutoClickerPrice()) {
        autoClickerButton.style.color = "black";
    }
    else {
        autoClickerButton.style.color = "gray";
    }
    if (dm.getDonutCount() >= dm.getMultiplierPrice()) {
        multiplierButton.style.color = "black";
    }
    else {
        multiplierButton.style.color = "gray";
    }
})

reset.onclick = function() {
    dm = new DonutMaker();
    donutCount.innerHTML = "Donut Count: " + dm.getDonutCount();
    autoClickerCount.innerHTML = "Auto Clicker Count: " + dm.getAutoClickerCount();
    autoClickerPrice.innerHTML = "Price: " + dm.getAutoClickerPrice() + " donuts";
    multiplierCount.innerHTML = "Donut Multiplier Count: " + dm.getMultiplierCount();
    multiplierPrice.innerHTML = "Price: " + dm.getMultiplierPrice() + " donuts";
    clickValue.innerHTML = "Click Value: " + dm.getMultiplier();
    autoClickerButton.style.color = "gray";
    multiplierButton.style.color = "gray";
}