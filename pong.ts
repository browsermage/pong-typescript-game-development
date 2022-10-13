import { Computer } from "./assets/doodads/computer"
import { PlayScene } from "./assets/scenes/play.scene"
import { GameCanvas } from "./lib/game_canvas"

export class PongGame extends GameCanvas {

    computer = new Computer(0,0)

    constructor() {
        super()
        this.init()
    }

    start() {  
        this.sceneManager.addScene("play", PlayScene)
        this.sceneManager.changeScene("play")  
    }

    render() {
        this.computer.sprite.render()
        // clsColor(39,39,39,1)
    }

    update() {}
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
