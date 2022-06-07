"use strict";
exports.__esModule = true;
var block_1 = require("../Block/block");
var block_type_1 = require("../Block-types/block-type");
var block_douper_1 = require("../Block-douper/block-douper");
var type = [block_type_1["default"].Types.MINERAL];
var isDopuer = [block_douper_1["default"].Douper.DIAMOND];
var Diamond = new block_1["default"](3, 'Diamond', 'http:/dimandete.co', type, isDopuer);
console.table(Diamond);
