import services from "../../lib/core/service_locator"
import { Scene } from "../../lib/core/scene"
import { Input } from "../../lib/core/input"
import { SceneManager } from "../../lib/core/scene_manager"
import { printf } from "../../lib/core/draw"

export class StartScene extends Scene {

    name = "start"
    input: Input
    sceneManager: SceneManager 
    
    constructor() {
        super()
        this.input = services.get<Input>('Input')
        this.sceneManager = services.get<SceneManager>('SceneManager')
    }

    enter(): void {}

    update(): void {
        if (!this.input || !this.sceneManager) return

        if (this.input.getKeyPressed("Space")) {
            this.sceneManager.changeScene("play")  
        }
    }

    render(): void {
        printf("PONG", 23, 16)
    }


    exit(): void {}

}