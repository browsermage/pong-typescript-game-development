/**
 * Provides properties and methods for manipulating the layout and presentation of the canvas element.
 */
export class CanvasRenderer {

    config = {
        resolution: {
            width: 640,
            height: 360
        }
    }

    context: CanvasRenderingContext2D
    canvas: HTMLCanvasElement 

    constructor(canvasElement: HTMLCanvasElement) {
        // create a canvas
        this.canvas = canvasElement
        
        // set the canvas to the configuration 
        this.canvas.height = this.config.resolution.height
        this.canvas.width = this.config.resolution.width

        // getting the context from the canvas
        // https://developer.chrome.com/blog/desynchronized/
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d", { 
            preserveDrawingBuffer: true,
            desynchronized: true, 
            alpha: true 
        }) 
        
        // crispy pixels for pixel art
        this.context.imageSmoothingEnabled = false               
    }
}