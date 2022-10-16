import Doodad from "../../lib/core/doodad"
import { fillRect } from "../../lib/core/draw"
import service_locator from "../../lib/core/service_locator"
import Time from "../../lib/core/time"

export class Computer extends Doodad {

    speed =  50
    time: Time
    velocity = {
        y: 0,
        x: 0
    }
    direction = false

    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)
        this.time = service_locator.get<Time>("Time")

        // not the smartest AI I give you that 😅
        setInterval(() => this.direction = !this.direction, 1000)
    }

    render() {
        fillRect(this.position.x, this.position.y, 2, 6, "white")
    }

    update() {  
        // move the paddle up or down depending on the direction
        if (this.direction) {
            this.position.y = Math.min(16, this.position.y + 10 * this.time.deltaTime)
           } else {
            this.position.y = Math.max(4, this.position.y + -10 * this.time.deltaTime)
        }
    }
}