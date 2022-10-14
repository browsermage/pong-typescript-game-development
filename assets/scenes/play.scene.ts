import { clsColor, printf } from "../../lib/core/draw"
import { Scene } from "../../lib/core/scene"
import { Paddle } from "../doodads/paddle"

export class PlayScene extends Scene {

    name = "play"

    player = new Paddle(2, 5)
    computer = new Paddle(42, 16)

    enter(): void {
        document.querySelector(".computer")?.setAttribute("data-animation-state", "idle")
        document.querySelector<HTMLAudioElement>("[data-audio='game-start']")?.play()
    }

    update(): void {
        this.player.update()
        this.computer.update()
    }

    render(): void {
        printf("0",17,12)
        printf("0",30,12)
        // clsColor(100,0,0,1)
        this.player.render()
        this.computer.render()
    }

    exit(): void {
        document.querySelector(".computer")?.removeAttribute("data-animation-state")
    }

}