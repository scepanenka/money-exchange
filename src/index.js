module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }

  let coins = {};

  if (currency >= 50) {
    coins.H = Math.trunc(currency / 50);
    currency = currency % 50;
  }

  if (currency >= 25) {
    coins.Q = Math.trunc(currency / 25);
    currency = currency % 25;
  }

  if (currency >= 10) {
    coins.D = Math.trunc(currency / 10);
    currency = currency % 10;
  }

  if (currency >= 5) {
    coins.N = Math.trunc(currency / 5);
    currency = currency % 5;
  }

  if (currency >= 1) {
    coins.P = currency;
  }

  return coins;
}