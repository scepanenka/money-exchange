module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    let coins = {};

    if (currency / 50 >= 1) {
        coins.H = Math.floor(currency / 50);
        currency = currency % 50;
    }

    if (currency / 25 >= 1) {
        coins.Q = Math.floor(currency / 25);
        currency = currency % 25;
    }

    if (currency / 10 >= 1) {
        coins.D = Math.floor(currency / 10);
        currency = currency % 10;
    }

    if (currency / 5 >= 1) {
        coins.N = Math.floor(currency / 5);
        currency = currency % 5;
    }

    if (currency >= 1) {
        coins.P = currency;
    }

    return coins;
}
