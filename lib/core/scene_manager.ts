import { implementsEnter, implementsExit } from "../interface/scene_hooks"
import { Scene } from "./scene"

export class SceneManager {

    scenes:  { [key: string]: new () => Scene } = {}
    current = {}

    addScene(name: string, scene:  new () =>  Scene) {
        this.scenes[name] = scene
    }

    changeScene(scene: string, params = {}) {

        // if the scene name does not exist in the scenes list, just return
        if(!(scene in this.scenes)) return

        // if the current scene has implemented OnExit run exit
        if (implementsExit(this.current)) this.current.exit()

        // instantiate and add the new scene to current
        this.current = new this.scenes[scene]()

        // if the current scene has implemented OnEnter run enter
        if (implementsEnter(this.current)) this.current.enter(params)
    }
}