import { CanvasRenderer } from "./canvas_renderer"
import service_locator from "./service_locator"

/**
 * Draws a filled-in rectangle shape.
 * @param x The x coordinate of the upper left corner.
 * @param y The y coordinate of the upper left corner.
 * @param width The rectangle's width. Positive values are to the right, and negative to the left.
 * @param height The rectangle's height. Positive values are down, and negative are up.
 * @param color The color of the rectangle and fill. If omitted, the color from the draw state is used.
 * @example
 * 
 * function render() {
 *   cls()
 *   fillRect(10, 10, 100, 150, 'green')
 * }   
 */
export function fillRect(x:number, y:number, width:number , height:number, color?:string) {

    const canvasRenderer = service_locator.get<CanvasRenderer>("CanvasRenderer")

    canvasRenderer.context.save()

    if (color) canvasRenderer.context.fillStyle = color
    // move to the location to draw the rectangle
    canvasRenderer.context.translate(x, y)
    
    // draw the rectangle
    canvasRenderer.context.fillRect(0, 0, width, height)
 
    canvasRenderer.context.restore()
}

/**
 * Clears the Canvas to the specified colour.
 * @param red The red channel of the color to clear the screen to.
 * @param green The green channel of the color to clear the screen to.
 * @param blue The blue channel of the color to clear the screen to.
 * @param alpha The alpha channel of the color to clear the screen to.
 * @example
 * 
 * function render() {
 *   clsColor(255,255,255, 1)
 *   fillRect(10, 10, 100, 150, 'green')
 * } 
 */
 export function clsColor(red: number, green: number, blue: number, alpha: number) {

    const canvasRenderer = service_locator.get<CanvasRenderer>("CanvasRenderer")

    canvasRenderer.context.save()
    canvasRenderer.context.fillStyle = `rgba(${red},${green},${blue},${alpha})`
    canvasRenderer.context.fillRect(0,0, canvasRenderer.canvas.width, canvasRenderer.canvas.height)
    canvasRenderer.context.restore()
}

/**
 * The cls() method sets the pixels in the canvas area to transparent black.
 */
 export function cls() {
  const canvasRenderer = service_locator.get<CanvasRenderer>("CanvasRenderer")

  canvasRenderer.context.clearRect(0, 0, canvasRenderer.canvas.width, canvasRenderer.canvas.height)
}

/**
 * Renderes a text string using the font and text layout configuration as defined by the font, textAlign, textBaseline, and direction properties.
 * @param text A string specifying the text string to render into the context.
 * @param x The x-axis coordinate of the point at which to begin drawing the text, in pixels.
 * @param y The y-axis coordinate of the baseline on which to begin drawing the text, in pixels.
 */
 export function printf(text: string, x: number, y: number) {
    const canvasRenderer = service_locator.get<CanvasRenderer>("CanvasRenderer")
    canvasRenderer.context.fillStyle = "white"
    canvasRenderer.context.textAlign = "center"
    canvasRenderer.context.font = `normal 12px Pong Font`
    canvasRenderer.context.fillText(text, x, y)
}