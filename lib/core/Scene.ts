export abstract class Scene {
    /**
     *  the name of the Scene
     */
    abstract name: string

    /** 
     * A callback method that is invoked just before a new scene is added and run
     */
    abstract exit(): void

    /** 
     * A callback method that is called immediately after a scene has been initialized
     */
    abstract enter(): void
    
    /** 
     * A callback method that is invoked immediately after Doodad updates in the game loop,
     * and before any of the renders have been made.
     */
    abstract update(): void
    /** 
     * A callback method that is invoked immediately after Doodad renders in the game loop
     */
    abstract render(): void

}