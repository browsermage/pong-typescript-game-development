import Doodad from "../../lib/core/doodad"
import { fillRect } from "../../lib/core/draw"
import service_locator from "../../lib/core/service_locator"
import Time from "../../lib/core/time"
import { Computer } from "./computer"
import { Player } from "./player"

export class Ball extends Doodad {

    speed = 10
    time: Time
    velocity = {
        y: 0,
        x: 0
    }

    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)
        this.time = service_locator.get<Time>("Time")

        this.resetVelocity()
    }

    render() {
        fillRect(this.position.x, this.position.y, 2, 2, "white")
    }

    update() {  
        this.position.x += this.velocity.x * this.time.deltaTime
        this.position.y += this.velocity.y * this.time.deltaTime
    }

    resetVelocity () {
        this.velocity.x = Math.random() < 0.5 ? this.speed : -this.speed
        this.velocity.y = Math.random() < 0.5 ? this.speed : -this.speed
    }

    reset() {
        this.position.set(22,14)
        this.resetVelocity()
    }

    collides(paddle: Player | Computer) {
        if (this.position.x > paddle.position.x + 2 || paddle.position.x > this.position.x +  2) {
            return false
        }

        if (this.position.y > paddle.position.y + 6 || paddle.position.y > this.position.y +  2) {
            return false
        }
        return true
    }
}