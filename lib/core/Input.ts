export default class Input {

    /** The value will be in the range -1...1 for keyboard and joystick input devices. */
    axis = {
        horizontal: 0,
        vertical: 0
    }

    #keyEvents: { [key: string]: boolean } = {}

    #keyPressedEvents:{ [key: string]: boolean } = {}

    constructor() {

        document.addEventListener("keydown", (event) => {
            this.#keyEvents[event.code] = true

            if (!event.repeat) {
                this.#keyPressedEvents[event.code] = true
            }  
        })
        
        document.addEventListener("keyup", (event) => {
            delete this.#keyEvents[event.code]
        })
    }

    /**
     * Returns true during the frame the user pressed the given key.
     * Call this function from the Update function, since the state gets reset each frame.
     * @param code The KeyboardEvent.code property represents a physical key on the keyboard
     * @return Returns true when the key was clicked
     */
    getKeyPressed(code: string): boolean {
        if (this.#keyPressedEvents[code]) return true
    
        return false
    }

    /**
     * Returns whether the given key is held down.
     * The return is true when the key is pressed down, and false when released.
     * @param code The KeyboardEvent.code property represents a physical key on the keyboard
     * @return Returns true when the key is being held down
     */
    getKeyDown(code: string): boolean {

        if (this.#keyEvents[code]) return true

        return false
    }
    
    resetKeyPressedEvents() {
        this.#keyPressedEvents = {}
    }

    updateAxis() {
        this.axis = { 
            horizontal: 0, 
            vertical: 0 
        }

        if (this.getKeyDown("KeyD")) {
            this.axis.horizontal = 1
        }
        
        if (this.getKeyDown("KeyA")) {
            this.axis.horizontal = -1
        }

        if (this.getKeyDown("KeyW")) {
            this.axis.vertical = -1
        }

        if (this.getKeyDown("KeyS")) {
            this.axis.vertical = 1
        }
    }
}