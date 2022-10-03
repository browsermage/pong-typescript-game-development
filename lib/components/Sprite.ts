import Component from "../core/Component"
import Doodad from "../core/Doodad"
import { context } from "../main"

export default class Sprite extends Component {

    /** Texture object to draw */
    texture: ImageBitmap

    constructor(doodad: Doodad) {
        super(doodad) 
    }

    /** TEMP Method, remove when I have proper scene image loading */
    TEMPLOADIMAGE(url: string): void {
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

    /** Draws the defined texture on the canvas at the attached Doodad */
    draw() {
        
        if (this.texture) {

            context.save()

            context.translate(
                this.doodad.position.x, 
                this.doodad.position.y
                )

            context.drawImage(
                this.texture, 
                0,
                0,
                this.texture.width,
                this.texture.height
                )
                
            context.restore()
        }
    }
}