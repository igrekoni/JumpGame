var pjs = new PointJS('2d', 400, 400);
pjs.system.initFullPage();

var vector = pjs.vector;
var log = pjs.system.log;
var game = pjs.game;
var point = pjs.point;
var size = vector.size;
var v2d = vector.v2d;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;

var touch = pjs.touchControl;
touch.initTouchControl();

var width = game.getWH().w;
var height = game.getWH().h;

var del = height / 1000 / 5;

var dt;
var score = 0;
var levelScore = 0;
var tmpScore = localStorage.getItem('score');
var oldScore = tmpScore ? tmpScore : 0;
