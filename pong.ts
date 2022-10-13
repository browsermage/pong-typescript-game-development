import { GameCanvas } from "./lib/game_canvas"
import { PlayScene } from "./assets/scenes/play.scene"
import { Paddle } from "./assets/doodads/paddle"


export class PongGame extends GameCanvas {
   
    player1 = new Paddle(50, 50)
    player2 = new Paddle(150, 50)

    constructor() {
        super()
        this.init()
    }

    start() {  
        this.player1.position.set(10,10)
        this.sceneManager.addScene("play", PlayScene)
        this.sceneManager.changeScene("play")
        
    }

    render() {
        this.player1.render()
        this.player2.render()
    }

    update() {}
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
