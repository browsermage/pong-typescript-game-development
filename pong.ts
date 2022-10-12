import { GameCanvas } from "./lib/game_canvas"
import { PlayScene } from "./assets/scenes/play.scene"


export class PongGame extends GameCanvas {

    init() {  
        this.sceneManager.addScene("play", PlayScene)
        this.sceneManager.changeScene("play")
    }

    render() {}

    update() {}
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
