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
