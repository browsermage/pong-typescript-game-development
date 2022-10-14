import Doodad from "../../lib/core/doodad";
import { fillRect } from "../../lib/core/draw";

export class Paddle extends Doodad {
    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)
    }

    start() { }

    render() {
        fillRect(this.position.x, this.position.y, 2, 6, "white")
    }

    update() {
    }
}