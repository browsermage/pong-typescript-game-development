import { Scene } from "./Scene";

export class SceneManager {

    scenes:  { [key: string]: Scene } = {}
    current: Scene

    constructor(scenes = {})
    {
        this.scenes = scenes 
        this.current = new Scene()
    }

    changeScene(scene: string, params = {}) {
        console.log(this.scenes)
        console.assert(this.scenes[scene], `Can not find a scene with the name ${scene}`)

        this.current.exit()
        this.current = new this.scenes[scene]()
        this.current.enter(params)
    }
}