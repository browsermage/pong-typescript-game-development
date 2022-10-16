import { implementsRender, implementsUpdate } from "./interface/scene_hooks"
import { CanvasRenderer } from "./core/canvas_renderer"
import { SceneManager } from "./core/scene_manager"
import services from "./core/service_locator"
import {Input} from "./core/input"
import Time from "./core/time"

export abstract class GameCanvas extends HTMLCanvasElement {

    time: Time

    input: Input

    sceneManager: SceneManager

    canvasRenderer: CanvasRenderer

    constructor() {
        super()

        services.set("Time", new Time())
        services.set("Input", new Input())
        services.set("SceneManager", new SceneManager())
        services.set("CanvasRenderer", new CanvasRenderer(this))

        // gets the instance of the Time class
        this.time = services.get('Time')

        // gets the instance of the Input class
        this.input = services.get('Input')

        // gets the instance of the SceneManager class
        this.sceneManager = services.get('SceneManager')

        this.canvasRenderer = services.get("CanvasRenderer")
    }

    // basic game loop that uses deltatime to help us make the game frame-independent
    #loop (unscaledTime = 0) {
        this.canvasRenderer.reszie()

        // compute time elapsed since last frame a.k.a delta time
        this.time.deltaTime = Number(((unscaledTime - this.time.lastTime) / 1000))

        // deltaTime value is capped to maximumDeltaTime
        this.time.deltaTime = Math.min(this.time.deltaTime, this.time.maximumDeltaTime)

        // update the last time with the current time
        this.time.lastTime = unscaledTime

        // deltaTime is added to elapsed time so far
        this.time.elapsedTime += this.time.deltaTime

        // run updates 
        this.input.updateAxis()
        this.update()

        // if the current scene has implemented the update interface, run it
        if (implementsUpdate(this.sceneManager.current)) this.sceneManager.current.update()
     
        // run renders
        this.render()
        
        // if the current scene has implemented the render interface, run it

        if (implementsRender(this.sceneManager.current)) this.sceneManager.current.render()

        // reset and/or run destroy / remove / reset etc. on the things marked for destruction
        this.input.resetKeyPressedEvents()
       
        // notice the use of an arrow function here so that "this" does not get lost upon the next frame
        window.requestAnimationFrame((time) => this.#loop(time))
    }

    init() {
        // let's initialize the game when all the constructors have run
        this.start()

        // let's start the engines *VROOOOM*
        this.#loop()
    }

    abstract start(): void

    abstract update(): void

    abstract render(): void

}