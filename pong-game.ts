import { SceneManager } from "./lib/core/SceneManager"
import { GameCanvas } from "./lib/game-canvas"
import { Scene } from "./lib/core/Scene"

export class PongGame extends GameCanvas {

    init() {
        
        const sceneManager  = new SceneManager({
            "title": Scene
        })

        sceneManager.changeScene("title")
        
        // const background = new Doodad()

        // background.addComponent(Sprite)

        // const sprite = background.getComponents(Sprite)[0]

        // sprite.TEMPLOADIMAGE("./assets/sprites/robot.sprite.png")

        // console.log(sprite)
        // this.context.drawImage(sprite, 0, 0)
    }

    draw() {

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
