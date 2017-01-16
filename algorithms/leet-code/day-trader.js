function fn(prices) {
  let profit = 0;
  let least = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < least) least = prices[i];
    if (prices[i] - least > profit) profit = prices[i] - least;
  }
  return profit;
}