var Tile5;
var Tile4;
var Tile3;
var Tile2;
var Tile1;

Tile5 = {
	'content': '555',
	'N': Tile1,
	'S': Tile2, 
	'E': Tile3,
	'W': Tile4
}

Tile4 = {
	'content': '444',
	'N': Tile5,
	'S': Tile1, 
	'E': Tile2,
	'W': Tile3
}

Tile3 = {
	'content': '333',
	'N': Tile4,
	'S': Tile5, 
	'E': Tile1,
	'W': Tile2
}

Tile2 = {
	'content': '222',
	'N': Tile3,
	'S': Tile4, 
	'E': Tile5,
	'W': Tile1
}
Tile1 = {
	'content': '111',
	'N': Tile2,
	'S': Tile3,
	'E': Tile4, 
	'W': Tile5
}

var KongziTile = Tile1;

export { Tile5, Tile4, Tile3, Tile2, Tile1,}