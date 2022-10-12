import { GameCanvas } from "./lib/game_canvas"
import { PlayScene } from "./assets/scenes/play.scene"
import { Paddle } from "./assets/doodads/Paddle"


export class PongGame extends GameCanvas {

    player1 = new Paddle(50, 50)

    init() {  
        this.sceneManager.addScene("play", PlayScene)
        this.sceneManager.changeScene("play")
    }

    render() {
        console.log(this.player1)
        this.player1.render()
    }

    update() {}
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
