/**
 * Provides properties and methods for manipulating the layout and presentation of the canvas element.
 */
export class CanvasRenderer {

    config = {
        resolution: {
            width: 46,
            height: 26
        }
    }

    context: CanvasRenderingContext2D
    canvas: HTMLCanvasElement 

    constructor(canvasElement: HTMLCanvasElement) {
        // create a canvas
        this.canvas = canvasElement

        this.canvas.style.imageRendering = "pixelated"
        
        this.canvas.style.width = `${this.config.resolution.width}px`
        this.canvas.style.height = `${this.config.resolution.height}px`
        
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