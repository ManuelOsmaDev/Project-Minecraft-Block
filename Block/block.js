"use strict";
exports.__esModule = true;
var block = /** @class */ (function () {
    function block(id, name, texture, type, douper) {
        this.id = id;
        this.name = name;
        this.texture = texture;
        this.type = type;
        this.douper = douper;
    }
    block.prototype.toString = function () {
        return [
            "Block Id: ".concat(this.id),
            "Block Name: ".concat(this.name),
            "Block Texture: ".concat(this.texture),
            "block duopuer: ".concat(this.douper),
            "block Type ".concat(this.type),
            "this block it gave something ".concat(this.douper)
        ];
    };
    Object.defineProperty(block.prototype, "blockDoouper", {
        get: function () {
            return this.douper;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "blockDouper", {
        set: function (douper) {
            this.douper = douper;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "blockId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "blockName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(block.prototype, "blockTexture", {
        get: function () {
            return this.texture;
        },
        set: function (texture) {
            this.texture = texture;
        },
        enumerable: false,
        configurable: true
    });
    block.prototype.DoupeSomething = function () {
        console.log("".concat(this.douper, " this block to give something now"));
    };
    block.prototype.userDamage = function () {
        console.log("".concat(this.name, " this's the damage the lava for user ").concat(Math.round(Math.random() * 10)));
    };
    return block;
}());
exports["default"] = block;
