import { CanvasRenderer } from "../core/canvas_renderer"
import service_locator from "../core/service_locator"
import Component from "../core/component"
import Doodad from "../core/doodad"


export default class Sprite extends Component {

    /** Texture object to draw */
    texture: ImageBitmap | undefined
    canvasRenderer: CanvasRenderer
    scale = 2

    constructor(doodad: Doodad) {
        super(doodad) 
        this.canvasRenderer = service_locator.get<CanvasRenderer>("CanvasRenderer")
    }

    /** TEMP Method, remove when I have proper scene image loading */
    async TEMPLOADIMAGE(url: string) {
        const image = new Image()
        image.src = url         
        
        image.onload = () => {
            this.setTextureFromImage(image)
        }
        
    }

    /** Takes an image and sets the texture property */
    async setTextureFromImage(image: ImageBitmapSource) {
        this.texture = await createImageBitmap(image)
    }

    /** Renders the defined texture on the canvas at the attached Doodad */
    render() {
        
        if (this.texture) {

            this.canvasRenderer.context.save()

            this.canvasRenderer.context.translate(this.doodad.position.x, this.doodad.position.y)

            this.canvasRenderer.context.drawImage(
                this.texture,
                0,
                0,
                160,160)

            // this.canvasRenderer.context.drawImage(
            //     this.texture,
            //     0,
            //     0,
            //     160,
            //     160,
            //     0,
            //     0,
            //     this.texture.width * this.scale,
            //     this.texture.height * this.scale
            // )
                
                this.canvasRenderer.context.restore()
        }
    }
}