import { PlayScene } from "./assets/scenes/play.scene"
import { StartScene } from "./assets/scenes/start.scene"
import { GameCanvas } from "./lib/game_canvas"

export class PongGame extends GameCanvas {

    constructor() {
        super()
        this.init()
    }

    start() {  
        this.sceneManager.addScene("play", PlayScene)
        this.sceneManager.addScene("start", StartScene)
        this.sceneManager.changeScene("play")  
    }

    render() {}

    update() {}
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
