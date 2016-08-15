var pl = game.newImageObject({
  x : 10, y : 10,
  w : 1024 * del, h : 720 * del,
  file : 'src/knight.png'
});

var dy = 2 * del;
var dmax = 50 * del;
var dx = 0;

var drawPlayer = function () {

  if (pl.y < score) {
    score = Math.ceil(pl.y);
  }

  pl.draw();
  pl.move(v2d(0, dy*dt));
  dy += dy < dmax ? del : 0;

  if (touch.isDown()) {
    if (touch.getPositionS().x > width / 2)
      dx = 30 * del;
    else
      dx = -30 * del;


    if (dx > 0) {
      pl.setFlip(1, 0);
      if (pl.x > width) {
        pl.x = -pl.w;
      }
    } else if (dx < 0) {
      pl.setFlip(0, 0);
      if (pl.x+pl.w < 0) {
        pl.x = width;
      }
    }

    pl.move(v2d(dx*dt, 0));

  }

  if (pl.getPositionS().y > score + 5000*del) {
    levelScore = score;
    if (score < oldScore) {
      oldScore = score;
      localStorage.setItem('score', score);
    }
    return game.setLoop('menu');
  }

  camera.moveTimeC(vector.pointPlus(v2d(width/2, pl.getPositionC().y), v2d(0, -500*del)), 10);
  fon.moveTimeC(vector.pointPlus(v2d(width/2, pl.getPositionC().y), v2d(0, -500*del)), 10);


};
