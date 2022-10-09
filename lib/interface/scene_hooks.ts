/**
 * A scene lifecycle hook that is called directly after Doodad updates.
 * Define an `update()` method to handle any additional update tasks. 
 */
export interface OnUpdate {
    /** 
     * A callback method that is invoked immediately after Doodad updates in the game loop,
     * and before any of the renders have been made.
     */
    update(): void
}
  
/**
 * A scene lifecycle hook that is called just before a new scene is added and run
 * Define an `exit()` method to handle any additional exit tasks. 
 */
export interface OnExit {
    /** 
     * A callback method that is invoked just before a new scene is added and run
     */
    exit(): void
}

/**
 * A scene lifecycle hook that is called immediately after a scene has been initialized
 * Define an `enter()` method to handle any additional exit tasks. 
 */
export interface OnEnter {
    /** 
     * A callback method that is called immediately after a scene has been initialized
     */
    enter(params: any): void
}

/**
 * A callback method that is invoked immediately after Doodad renders in the game loop,
 * Define an `render()` method to handle any additional exit tasks. 
 */
export interface OnRender {
    /** 
     * A callback method that is invoked immediately after Doodad renders in the game loop
     */
    render(): void
}

/**
 * User Defined Type Guard for Update
 */
export const implementsUpdate = (arg: any): arg is OnUpdate => {
    return Reflect.has(arg, 'update')
} 

/**
 * User Defined Type Guard for Exit
 */
export const implementsExit = (arg: any): arg is OnExit => {
    return Reflect.has(arg, 'exit')
} 

/**
 * User Defined Type Guard for Enter
 */
export const implementsEnter = (arg: any): arg is OnEnter => {
    return Reflect.has(arg, 'enter')
} 

/**
 * User Defined Type Guard for Render
 */
export const implementsRender = (arg: any): arg is OnRender => {
    return Reflect.has(arg, 'render')
} 

// export function Scene(options: { name: string }) {
//     return (target: Function) => {
//         target.prototype.name = options.name
//     }
// }

// export interface Scene {
//     name: string
// }