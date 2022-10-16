import { printf } from "../../lib/core/draw"
import { randomBetween } from "../../lib/core/math"
import { Scene } from "../../lib/core/scene"
import { Ball } from "../doodads/ball"
import { Computer } from "../doodads/computer"
import { Player } from "../doodads/player"

export class PlayScene extends Scene {

    name = "play"

    player = new Player(2, 5)
    computer = new Computer(42, 16)
    ball = new Ball(22,14)

    score = {
        p1: 0,
        p2: 0
    }

    sounds: HTMLAudioElement[] = []

    constructor() {
        super()
    }

    enter(): void {
        document.querySelector(".computer")?.setAttribute("data-animation-state", "idle")
        document.querySelector<HTMLAudioElement>("[data-audio='game-start']")?.play()
    }

    update(): void {
               
        this.ball.update()
        this.player.update()
        this.computer.update() 
       
        // check if ball is in a goal zones
        if (this.ball.position.x < 0) {
            document.querySelector<HTMLAudioElement>("[data-audio='win-sound']")?.play()
            this.score.p2++
    
            if (this.score.p2 >= 10) {
                this.score = {
                    p1: 0,
                    p2: 0
                }
            } else {
                this.ball.reset()
            }
        }


        // check if ball is in a goal zones
        if (this.ball.position.x > 42) {
            document.querySelector<HTMLAudioElement>("[data-audio='win-sound']")?.play()
            this.score.p1++

            if (this.score.p1 >= 10) {
                this.score = {
                    p1: 0,
                    p2: 0
                }
            } else {
                this.ball.reset()
            }
        }



        // checks if the ball is hitting the player
        if (this.ball.collides(this.player)) {
            this.ball.velocity.x = -this.ball.velocity.x * 1.1
            this.ball.position.x = this.player.position.x + 2
       
            if (this.ball.velocity.y < 0) {
                this.ball.velocity.y = -randomBetween(22,50)
            } else {
                this.ball.velocity.y =randomBetween(22,50)
            }
            document.querySelector<HTMLAudioElement>("[data-audio='paddle-hit']")?.play()
        }

        // checks if the ball is hitting the computer paddle
        if (this.ball.collides(this.computer)) {
            this.ball.velocity.x = -this.ball.velocity.x * 1.1
            this.ball.position.x = this.computer.position.x - 2
       
            if (this.ball.velocity.y < 0) {
                this.ball.velocity.y = -randomBetween(22,50)
            } else {
                this.ball.velocity.y = randomBetween(22,50)
            }
            document.querySelector<HTMLAudioElement>("[data-audio='paddle-hit']")?.play()
        }

        // calculates if the ball is hitting a wall, if so change velocity
        if (this.ball.position.y <= 2) {
            this.ball.position.y = 2
            this.ball.velocity.y = -this.ball.velocity.y
            document.querySelector<HTMLAudioElement>("[data-audio='wall-hit']")?.play()
        }

        if (this.ball.position.y >= 22) {
            this.ball.position.y = 22
            this.ball.velocity.y = -this.ball.velocity.y
            document.querySelector<HTMLAudioElement>("[data-audio='wall-hit']")?.play()
        }


    }

    render(): void {
        printf(this.score.p1.toString(),17,12)
        printf(this.score.p2.toString(),30,12)
        this.player.render()
        this.computer.render()
        this.ball.render()
    }

    exit(): void {
        document.querySelector(".computer")?.removeAttribute("data-animation-state")
    }

}