import Doodad from "./Doodad"

export default abstract class Component
{
    /** 
     * The Doodad this component is attached to. A component is always attached to a Doodad.
     */
    doodad: Doodad

    constructor(doodad: Doodad) 
    {
        this.doodad = doodad
    }   
}