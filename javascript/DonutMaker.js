class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.multiplierCount = 0;
        this.multiplierPrice = 10;
    }

    getDonutCount() {
        return this.donutCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getMultiplierCount() {
        return this.multiplierCount;
    }

    addDonutCount() {
        let multiplier = this.multiplierCount * 1.2
        if (this.multiplierCount > 0) {
            this.donutCount += multiplier;
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
    }

    autoClickerPurchase() {
        if (this.donutCount >= this.autoClickerPrice) {
             this.donutCount -= this.autoClickerPrice;
             this.autoClickerCount++;
             let increaseCost = this.autoClickerPrice * .1;
             this.autoClickerPrice += increaseCost;
        }
    }

    multiplierPurchase() {
        if (this.donutCount >= this.multiplierPrice) {
            this.donutCount -= this.multiplierPrice;
            this.multiplierCount++;
            let increaseCost = this.multiplierPrice * .1;
            this.multiplierPrice += increaseCost;
       }
    }

    autoClicking() {
        let multiplier = this.multiplierCount * 1.2;
        if (this.multiplierCount > 0) {
            this.donutCount += multiplier;
        }
        else {
            this.donutCount += this.autoClickerCount;
        }
    }

    // Below is for testing
    setDonutCount(count) {
        this.donutCount = 0;
        this.donutCount += count;
    }

    getAutoClickerPrice() {
        return this.autoClickerPrice;
    }

    getMultiplierPrice() {
        return this.multiplierPrice;
    }
}