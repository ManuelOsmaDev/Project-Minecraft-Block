import block from "../Block/block";
import blockType from "../Block-types/block-type";
import dopuer from "../Block-douper/block-douper";


const type = [blockType.Types.MINERAL]
const isDopuer = [dopuer.Douper.DIAMOND]

const Diamond:block = new block(3,'Diamond','http:/dimandete.co',type , isDopuer)

console.table(Diamond)