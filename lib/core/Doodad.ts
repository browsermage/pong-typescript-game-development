import Component from "./component"
import { Vector2 } from "./math"

/**
 * Base class of all things in a scene
 * @abstract
 */
export default class Doodad {

    position = new Vector2(0,0)

    /**
     * All the components attached to the Doodad. 
     */
    components: Component[] = []

    /**
     * Adds a component of type to the Doodad.
     * @param   component   The component type to add to the Doodad
     */
    addComponent<T extends Component>(component: { new (doodad: Doodad): T }): void
    {
        this.components.push(new component(this))
    }

    /**
     * Returns the components of type if the Doodad has one attached.
     * @param   type    The component type to return     
     * @return  All components of given type attached to the Doodad
     */
    getComponents<T extends Component>(type: { new (doodad: Doodad): T }): T[]
    {
        return this.components.filter(component => component instanceof type)
    }
}