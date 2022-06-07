"use strict";
exports.__esModule = true;
var block_1 = require("../Block/block");
var block_type_1 = require("../Block-types/block-type");
var BlockType = [block_type_1["default"].Types.FIRE];
var LavaBlock = new block_1["default"](1, 'bloque lava', 'http:/lavablock.co', BlockType);
console.table(LavaBlock);
LavaBlock.userDamage();
