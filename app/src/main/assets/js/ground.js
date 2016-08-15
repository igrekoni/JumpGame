var blocks = [];

dy2 = false;

var createBlock = function() {
  if (dy2 === false)
    dy2 = height - 240*del;
  else
    dy2 = blocks[blocks.length - 1].y - 200*del -
          math.random(200*del, 450*del);

  blocks.push(game.newImageObject({
    w : 800 * del, h : 240 * del,
    file : 'src/ground1.png',
    x : math.random(0, width - 200*del),
    y : dy2
  }));
};

var oldBlock;

var createLevel = function(i) {
  score = 0;
  OOP.forInt(i, function() {
    createBlock();
  });
  oldBlock = blocks[blocks.length - 1];
};

var rePositionBlock = function(el) {
  var x = math.random(0, width - 200*del),
      y = oldBlock.y - 200*del - math.random(200*del, 450*del);
  el.setPosition(v2d(x, y));
  oldBlock = el;
};

var drawLevel = function() {
  OOP.forArr(blocks, function(el) {

    if (camera.getPosition().y + height + 200*del < el.y) {
      rePositionBlock(el);
    }

    el.draw();

    if (pl.isStaticIntersect(el.getStaticBox()) && dy > 0) {
      if (pl.y + pl.h < el.y + el.h/3) {
        dy = -50 * del;
      }

    }
  });
};
