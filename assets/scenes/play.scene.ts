import { cls, fillRect } from "../../lib/core/draw"
import { Scene } from "../../lib/core/scene"



export class PlayScene extends Scene {

    name = "play"

    update(): void {}

    render(): void {
        cls()
        fillRect(10,10,50,50, "green")
    }

    enter(): void {
        
    }

    exit(): void {}

}