// Exercise 33: Improving our mouse drag event
// Project each mouse move object into a new object
// with adjusted pageX and pageY properties.
// Translate each page coordinate based on the value
// of the offsetX and offsetY properties in the
// contactPoint.
(sprite, spriteContainer) => {
  // All of the mouse event sequences look like this:
  // seq([ {pageX: 22, pageY: 3423, offsetX: 14, offsetY: 22} ,,, ])
  var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
    spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
    spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
    // Create a sequence that looks like this:
    // seq([ {pageX: 22, pageY:4080 },,,{pageX: 24, pageY: 4082},,, ])
    spriteMouseDrags =
      // For every mouse down event on the sprite...
      spriteMouseDowns.
        concatMap(contactPoint =>
          spriteContainerMouseMoves.
            takeUntil(spriteContainerMouseUps).
            map(movePoint =>
              ({
                pageX: movePoint.pageX - contactPoint.offsetX,
                pageY: movePoint.pageY - contactPoint.offsetY
              }))
        );

  // For each mouse drag event, move the sprite to the absolute page position.
  spriteMouseDrags.forEach(function(dragPoint) {
    sprite.style.left = dragPoint.pageX + "px";
    sprite.style.top = dragPoint.pageY + "px";
  });
}
