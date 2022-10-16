import Doodad from "../../lib/core/doodad";
import { fillRect } from "../../lib/core/draw";
import { Input } from "../../lib/core/input"
import service_locator from "../../lib/core/service_locator";
import Time from "../../lib/core/time";

export class Player extends Doodad {

    speed =  50
    input: Input
    time: Time
    velocity = {
        y: 0,
        x: 0
    }

    constructor(x: number, y: number) {
        super()
        this.position.set(x, y)
        this.input = service_locator.get<Input>("Input")
        this.time = service_locator.get<Time>("Time")
    }

    render() {
        fillRect(this.position.x, this.position.y, 2, 6, "white")
    }

    update() {
        // paddle movement
        if (this.input.getKeyDown("KeyW")) {
            this.velocity.y = -this.speed
        } 
        else if (this.input.getKeyDown("KeyS")) {
            this.velocity.y = this.speed
        }
        else {
            this.velocity.y = 0
        }
        
        // set the velocity of the paddle with delta time to make it frame independent 
        if (this.velocity.y < 0) {
            this.position.y = Math.max(4, this.position.y + this.velocity.y * this.time.deltaTime)
           } else {
            this.position.y = Math.min(16, this.position.y + this.velocity.y * this.time.deltaTime)
        }
    }
}