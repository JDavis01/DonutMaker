export class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.multiplierCount = 0;
        this.multiplierPrice = 10;
        this.multiplier = 0;
    }

    getDonutCount() {
        return Math.round(this.donutCount * 10) / 10;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getMultiplierCount() {
        return this.multiplierCount;
    }

    getMultiplier() {
        return Math.round(this.multiplier * 10) / 10;
    }

    addDonutCount() {
        if (this.multiplierCount > 0) {
            this.donutCount += this.multiplier;
        }
        else {
            this.donutCount++;
        }
    }

    addAutoClickerCount() {
        this.autoClickerCount++;
    }

    addMultiplierCount() {
        this.multiplierCount++;
        this.multiplier = this.multiplierCount * 1.2;
    }

    autoClickerPurchase() {
        if (this.donutCount >= this.autoClickerPrice) {
            this.donutCount -= this.autoClickerPrice;
            this.addAutoClickerCount();
            let increaseCost = this.autoClickerPrice * .1;
            this.autoClickerPrice += increaseCost;
        }
    }

    multiplierPurchase() {
        if (this.donutCount >= this.multiplierPrice) {
            this.donutCount -= this.multiplierPrice;
            this.addMultiplierCount();
            let increaseCost = this.multiplierPrice * .1;
            this.multiplierPrice += increaseCost;
        }
    }

    autoClicking() {
        if (this.autoClickerCount > 0) {
            const numClicks = this.multiplier * this.autoClickerCount;
            if (this.multiplierCount > 0) {
                this.donutCount += numClicks;
            }
            else {
                this.donutCount += this.multiplier;
            }
        }
    }

    getAutoClickerPrice() {
        return Math.round(this.autoClickerPrice * 10) / 10;
    }

    getMultiplierPrice() {
        return Math.round(this.multiplierPrice * 10) / 10;
    }
}