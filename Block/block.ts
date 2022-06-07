class block{
    private id:number
    private name:string
    private texture:string
    private douper?: string[]
    private type: string[]
    


    constructor(id:number,name:string,texture:string,type:string[],douper?: string[]){
        this.id = id
        this.name = name
        this.texture = texture
        this.type = type
        this.douper = douper
    }

    public toString():string[]{
        return[
            `Block Id: ${this.id}`,
            `Block Name: ${this.name}`,
            `Block Texture: ${this.texture}`,
            `block duopuer: ${this.douper}`,
            `block Type ${this.type}`,
            `this block it gave something ${this.douper}`
        ]
    }
    get blockDoouper():string[]{
        return this.douper
    }
    set blockDouper(douper:string[]){
        this.douper = douper
    }

    get blockId():number{
        return this.id
    }
    get blockName():string{
        return this.name
    }
    get blockTexture():string{
        return this.texture
    }
    set blockId(id:number){
        this.id = id
    }
    set blockName(name:string){
        this.name = name
    }
    set blockTexture(texture: string){
        this.texture = texture
    }
    public DoupeSomething(){
        console.log(`${this.douper} this block to give something now`)
    }

    public userDamage(){
        console.log(`${this.name} this's the damage the lava for user ${Math.round(Math.random()* 10)}`)
    }


}

export default block