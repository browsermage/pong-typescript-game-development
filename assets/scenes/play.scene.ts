import { Scene } from "../../lib/core/scene"
import { OnUpdate, OnRender } from "../../lib/interface/scene_hooks"

export class PlayScene extends Scene implements OnUpdate, OnRender {

    name = "play"
    counter = 0

    update(): void {
        // this.counter++
        // console.log(this)
    }

    render(): void {
    //   console.log("I am run")
    }

}