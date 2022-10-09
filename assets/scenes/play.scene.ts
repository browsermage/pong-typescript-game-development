// import { OnUpdate } from "../../lib/interface/scene_hooks"

import { Scene } from "../../lib/core/scene"


// export function Scene(options: { name: string }) {
//     return (target: Function) => {
//         target.prototype.name = options.name
//     }
// }



// @Scene({
//     name: "play"
// })
export class PlayScene extends Scene {

    counter = 0

    update(): void {
        this.counter++
        console.log(this)
    }

    // enter(): void {}

    // exit(): void {}

    // render(): void {
    //     // this.draw.rectangle
    //     // this.context.save()
    //     // this.context.fillStyle = `rgba(${210},${120},${120}, 1`
    //     // this.context.fillRect(0,0, 10, 10)
    //     // this.context.restore()
    // }
}