var newGame = game.newTextObject({
  text: 'Новая игра',
  font: 'serif',
  size: 250*del,
  color: '#000'
});

newGame.setPositionCS(v2d(width/2, height/2));

var drawMenu = function() {
  // тут какая-то хуйня с фоном при повторном вызове меню
  fon.draw();
  newGame.draw();
  brush.drawTextLinesS({
    x: 20,
    y: 20,
    lines: ['Рекорд: '+Math.abs(oldScore)],
    font: 'serif',
    size: 140*del,
    color: '#000'
  });

  brush.drawTextLinesS({
    x: width/2,
    y: 20,
    lines: ['Последний: '+Math.abs(levelScore)],
    font: 'serif',
    size: 140*del,
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
