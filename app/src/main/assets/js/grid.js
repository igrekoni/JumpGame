var sizeX = 200 * del,
    sizeY = 200 * del;

var drawGrid = function() {
  var x = width / sizeX,
      y = height / sizeY;
  OOP.forXY(x, y, function(x, y) {
    brush.drawRectS({
      x : (sizeX + 2)*x,
      y : (sizeY + 2)*y,
      fillColor : '#ffffff',
      w : sizeX, h : sizeY
    });
  });
};

var fon = game.newImageObject({
  x : 0, y : 0,
  //w : 1024 * del, h : 720 * del,
  w : width,
  h : height,
  file : 'src/bg.jpg'
});
