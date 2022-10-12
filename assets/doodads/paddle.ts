import Doodad from "../../lib/core/doodad";
import { fillRect } from "../../lib/core/draw";

export class Paddle extends Doodad {
    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)
    }

    start() { }

    render() {

        // försöker få render att fungeram men den är undefined
        fillRect(this.position.x, this.position.y, 50, 50, "tomato")
    }

    update() {
        console.log("I do stuff")
    }
}