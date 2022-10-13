import { fillRect } from "../../lib/core/draw"
import { Scene } from "../../lib/core/scene"



export class PlayScene extends Scene {

    name = "play"

    update(): void {}

    render(): void {
        fillRect(100,10,50,50, "teal")
    }

    enter(): void {
        
    }

    exit(): void {}

}