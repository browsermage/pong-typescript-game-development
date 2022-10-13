import Sprite from "../../lib/components/sprite"
import Doodad from "../../lib/core/doodad"

export class Computer extends Doodad {

    sprite: Sprite

    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)

        this.addComponent(Sprite)
        this.sprite = this.getComponents(Sprite)[0]
        this.sprite.TEMPLOADIMAGE("../../assets/sprites/robot.sprite.png")
    }

    start() { }

    render() {
        console.log("sdsdf")
    }

    update() {
    }
}