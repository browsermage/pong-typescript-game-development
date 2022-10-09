import { GameCanvas } from "./lib/game_canvas"
import { PlayScene } from "./assets/scenes/play.scene"

export class PongGame extends GameCanvas {

    init() {
        
        this.sceneManager.addScene("play", PlayScene)

        this.sceneManager.changeScene("play")
        
        // const background = new Doodad()

        // background.addComponent(Sprite)

        // const sprite = background.getComponents(Sprite)[0]

        // sprite.TEMPLOADIMAGE("./assets/sprites/robot.sprite.png")

        // console.log(sprite)
        // this.context.drawImage(sprite, 0, 0)
    }

    render() {

        const red = 240
        const green = 200
        const blue = 120

        this.context.save()
        this.context.fillStyle = `rgba(${red},${green},${blue}, 1`
        this.context.fillRect(0,0, this.width, this.height)
        this.context.restore()
    }

    update() {

    }
}

customElements.define("pong-game", PongGame, { extends: 'canvas' })
