var newGame = game.newTextObject({
  text: 'Новая игра',
  font: 'serif',
  size: 250*del,
  color: '#000'
});

newGame.setPositionCS(v2d(width/2, height/2));

var drawMenu = function() {
  newGame.draw();
  brush.drawTextLinesS({
    x: newGame.x,
    y: newGame.y + newGame.h,
    lines: ['Рекорд: '+Math.abs(oldScore), 'Текущий: '+Math.abs(levelScore)],
    font: 'serif',
    size: 200*del,
    color: '#000'
  });

  if (touch.isPeekObject(newGame)) {
    pl.y = 0;
    pl.x = 0;
    dy2 = false;
    blocks = [];
    createLevel(12);
    return game.setLoop('game');
  }
};
