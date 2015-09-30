// Exercise 32: Creating a mouse drag event
// For every mouse down event, return the mouse move event
// sequence until a mouse up event occurs.
(sprite, spriteContainer) => {
  var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
    spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
    spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),

    spriteMouseDrags = spriteMouseDowns.
        concatMap(mousedown =>
          spriteContainerMouseMoves.takeUntil(spriteContainerMouseUps));

  // For each mouse drag event, move the sprite to the absolute page position.
  spriteMouseDrags.forEach(dragPoint => {
    sprite.style.left = dragPoint.pageX + "px";
    sprite.style.top = dragPoint.pageY + "px";
  });
}
