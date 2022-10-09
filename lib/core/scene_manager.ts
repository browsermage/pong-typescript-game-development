import { implementsEnter, implementsExit } from "../interface/scene_hooks"


export class SceneManager {

    scenes:  { [key: string]: any } = {}
    current: any

    constructor(scenes = {})
    {
        this.scenes = scenes 
        // this.current = new Scene()
        this.current = {}
    }

    addScene(name: string, scene: any) {
        this.scenes[name] = scene
    }

    changeScene(scene: string, params = {}) {

        if(!(scene in this.scenes)) return

        if (implementsExit(this.current)) this.current.exit()
        
        this.current = new this.scenes[scene]()
        
        if (implementsEnter(this.current)) this.current.enter(params)
    }
}