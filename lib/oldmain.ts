import Time from "./core/time"
import Input from "./core/input"

export const config = {
    resolution: {
        width: 640,
        height: 360
    }
}

// creating and setting up the canvas
export const canvas: HTMLCanvasElement = document.createElement("canvas")

// set the canvas to the configuration 
canvas.height = config.resolution.height
canvas.width = config.resolution.width

// add the canvas to the body
document.body.appendChild(canvas)

// getting the context from the canvas
export const context = <CanvasRenderingContext2D>canvas.getContext("2d", { desynchronized: true, alpha: false }) 

// crispy pixels for pixel art
context.imageSmoothingEnabled = false 

// sets up a new instance of the Input class
export const input = new Input()

// setting up a basic gameloop that uses deltatime to help us make the game frame-independent
const gameloop = (unscaledTime = 0) => {

    // compute time elapsed since last frame a.k.a delta time
    Time.deltaTime = Number(((unscaledTime - Time.lastTime) / 1000))

    // deltaTime value is capped to maximumDeltaTime
    Time.deltaTime = Math.min(Time.deltaTime, Time.maximumDeltaTime)

    // update the last time with the current time
    Time.lastTime = unscaledTime

    // deltaTime is added to elapsed time so far
    Time.time += Time.deltaTime

    // run updates 
    input.updateAxis()

    // _update()

    // // run renders
    // _draw()

    // run destroy / remove / reset etc. on the things marked for destruction
    input.resetKeyPressedEvents()

    window.requestAnimationFrame(gameloop)
}

// const background = new Image()
// background.src = "../../assets/sprites/background.png"

// const ground = new Image()
// ground.src = "../../assets/sprites/ground.png"

// export const bird = new Bird()

// let groundScroll = 0
// let backgroundScroll = 0

// const BACKGROUND_SCROLL_SPEED = 30
// const GROUND_SCROLL_SPEED = 60

// const BACKGROUND_LOOPING_POINT = 413
// const GROUND_LOOPING_POINT = 450

// export const state_machine = new StateMachine({
//     "title": TitleScreenState,
//     "play": PlayState,
//     "score": ScoreState,
//     "countdown": CountdownState
// })

// state_machine.setState("title")

// async function _init() {
//     await Font.newFont("FlappyFont", "flappy.ttf", "200%")

//     Font.setFont("FlappyFont")
// }

// function _update() {

//     backgroundScroll = (backgroundScroll + BACKGROUND_SCROLL_SPEED * Time.deltaTime) % BACKGROUND_LOOPING_POINT
//     groundScroll = (groundScroll + GROUND_SCROLL_SPEED * Time.deltaTime) % GROUND_LOOPING_POINT

//     state_machine.update()
    
// }

// function _draw() {
//     clsColor(55, 148, 110, 1)
    
//     context.drawImage(background, -backgroundScroll, 0)

//     state_machine.draw()

//     context.drawImage(ground, -groundScroll, config.resolution.height -16)

//     bird.sprite.draw()
// } 

gameloop()