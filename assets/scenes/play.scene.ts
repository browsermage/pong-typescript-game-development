import { Scene } from "../../lib/core/scene"
import { Paddle } from "../doodads/paddle"

export class PlayScene extends Scene {

    name = "play"

    player1 = new Paddle(10, 50)
    player2 = new Paddle(150, 50)

    update(): void {
        this.player1.update()
        this.player2.update()
    }

    render(): void {
        this.player1.render()
        this.player2.render()
    }

    enter(): void {
        this.player1.position.set(4,8)
    }

    exit(): void {}

}