/**
 * Provides properties and methods for manipulating the layout and presentation of the canvas element.
 */
export class CanvasRenderer {

    config = {
        resolution: {
            width: 160,
            height: 160
        }
    }

    context: CanvasRenderingContext2D
    canvas: HTMLCanvasElement 

    constructor(canvasElement: HTMLCanvasElement) {
        // create a canvas
        this.canvas = canvasElement

        this.canvas.style.imageRendering = "pixelated"
        
        // const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.

        this.canvas.style.width = `${this.config.resolution.height}px`
        this.canvas.style.height = `${this.config.resolution.width}px`

        // // set the canvas to the configuration 
        // this.canvas.height = Math.floor(this.config.resolution.height * scale)
        // this.canvas.width = Math.floor(this.config.resolution.width * scale)


        
        // getting the context from the canvas
        // https://developer.chrome.com/blog/desynchronized/
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d", { 
            preserveDrawingBuffer: true,
            desynchronized: true, 
            alpha: true 
        }) 
        
        
        this.context.imageSmoothingEnabled = false               
    }

    reszie() {
        const dpr = window.devicePixelRatio
        // Set the canvas width and height, taking pixel ratio into account
        this.canvas.width = Math.floor(this.config.resolution.width * dpr)
        this.canvas.height = Math.floor(this.config.resolution.height * dpr)

        // Scale the canvas based on pixel ratio
        this.context.scale(dpr, dpr)

        // crispy pixels for pixel art
        this.context.imageSmoothingEnabled = false  
    }
}