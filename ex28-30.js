// Exercise 28: Subscribing to an event
button => {
  // the button click handler
  var handler = ev => {
    // Unsubscribe from the button event.
    button.removeEventListener("click", handler);

    alert("Button was clicked. Unsubscribing from event.");
  };
  // add the button click handler
  button.addEventListener("click", handler);
}


// Exercise 29: Traversing an Event
button => {
  var buttonClicks = Observable.fromEvent(button, "click");

  // In the case of an Observable, forEach returns a subscription object.
  var subscription =
    buttonClicks.
      forEach(clickEvent => {
        alert("Button was clicked. Stopping Traversal.");
        // Stop traversing the button clicks
        subscription.dispose();
      });
}


// Exercise 30: Completing Sequences with take()
button => {
  var buttonClicks = Observable.fromEvent(button, "click");

  // Use take() to listen for only one button click
  // and unsubscribe.
  buttonClicks.
    take().
    forEach(clickEvent =>
      alert("Button was clicked once. Stopping Traversal.")
    )
}