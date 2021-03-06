// Exercise 27: Stock Ticker
// use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
// The pricesNASDAQ collection looks something like this...
/*  var pricesNASDAQ = [
    // ... from the NASDAQ's opening day
    {name: "ANGI", price: 31.22, timeStamp: new Date(2011,11,15) },
    {name: "MSFT", price: 32.32, timeStamp: new Date(2011,11,15) },
    {name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)},
    {name: "ANGI", price: 28.44, timeStamp: new Date(2011,11,16)},
    {name: "GOOG", price: 199.33, timeStamp: new Date(2011,11,16)},
    // ...and up to the present.
  ];
*/

function(pricesNASDAQ, printRecord) {
  var microsoftPrices,
    now = new Date(),
    tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);


  microsoftPrices =
    pricesNASDAQ.
      filter(priceRecord => priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo);

  // Print the trades to the output console
  microsoftPrices.forEach(printRecord);
}

