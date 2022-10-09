import Input from "./core/input"
import { SceneManager } from "./core/scene_manager"
import Time from "./core/time"
import { implementsRender, implementsUpdate } from "./interface/scene_hooks"

export abstract class GameCanvas extends HTMLCanvasElement {

    config = {
        resolution: {
            width: 640,
            height: 360
        }
    }

    context: CanvasRenderingContext2D
    
    // sets up a new instance of the Time class
    time = new Time()

    // sets up a new instance of the Input class
    input = new Input()

    // sets up a new instance of the SceneManager class
    sceneManager = new SceneManager()

    constructor() {
        // must always call super() first
        super() 

        // set the canvas to the configuration 
        this.height = this.config.resolution.height
        this.width = this.config.resolution.width

        // getting the context from the canvas
        // https://developer.chrome.com/blog/desynchronized/
        this.context = <CanvasRenderingContext2D>this.getContext("2d", { 
            preserveDrawingBuffer: true,
            desynchronized: true, 
            alpha: true 
        }) 
        
        // crispy pixels for pixel art
        this.context.imageSmoothingEnabled = false 

        this.init()

        this.#loop()
   
    }

    // basic game loop that uses deltatime to help us make the game frame-independent
    #loop (unscaledTime = 0) {

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
        window.requestAnimationFrame(() => this.#loop())
    }

    abstract init(): void

    abstract update(): void

    abstract render(): void

}