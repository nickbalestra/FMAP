// Exercise 31: Completing sequences with takeUntil()
// use Observable.fromEvent to convert the "click" event on the stop button to an Observable
// use takeUntil to complete the sequence when stopButtonClicks fires.
(pricesNASDAQ, printRecord, stopButton) => {
  var stopButtonClicks = Observable.fromEvent(stopButton, 'click');

  microsoftPrices =
    pricesNASDAQ.
      filter(priceRecord => priceRecord.name === "MSFT").
      takeUntil(stopButtonClicks);

  microsoftPrices.
    forEach(printRecord);
}
