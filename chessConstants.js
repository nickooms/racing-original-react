var SIZE = 20;
var D = 2.1;
var Y = SIZE * 2.5;
var SEGMENTS = 30;
var BUMP_SCALE = 1;
var SHININESS = 50;
var DISTANCE = SIZE * D;
var PIECES = [{
	name: 'pawn',
	height: 1.1,
	min: 0,
	step: 1,
	max: 8,
	row: 5
}, {
	name: 'tower',
	height: 1.2,
	min: 0,
	step: 7,
	max: 8,
	row: 7
}, {
	name: 'bishop',
	height: 1.4,
	min: 1,
	step: 5,
	max: 7,
	row: 7
}];
