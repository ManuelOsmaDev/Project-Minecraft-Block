import block from "../Block/block";
import blockType from "../Block-types/block-type";

const BlockType = [blockType.Types.FIRE];

const LavaBlock: block = new block(1,'bloque lava','http:/lavablock.co', BlockType);

console.table(LavaBlock)


LavaBlock.userDamage();