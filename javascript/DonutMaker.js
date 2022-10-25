class DonutMaker {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.multiplierCount = 0;
    }

    getDonutCount() {
        return this.donutCount;
    }

    addDonutCount() {
        this.donutCount++;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    addAutoClickerCount() {
        this.autoClickerCount++;
    }

    autoClickerPurchase() {
        if (this.donutCount >= this.autoClickerPrice) {
             this.donutCount -= this.autoClickerPrice;
             this.autoClickerCount++;
             let increaseCost = this.autoClickerPrice * .1;
             this.autoClickerPrice += increaseCost;
        }
    }

    autoClicking() {
        this.donutCount += this.autoClickerCount;
    }

    // For testing
    setDonutCount(count) {
        this.donutCount = 0;
        this.donutCount += count;
    }

     getAutoClickerPrice() {
        return this.autoClickerPrice;
    }
}