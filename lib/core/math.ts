
/**
 * Representation of 2D vectors and points.
 */
export class Vector2 {

    /** The vector's X component. */
    x: number

    /** The vector's Y component. */
    y: number
    
    /**
     * Constructs a new Vector2 from the given x and y.
     * @param x X component of the vector.
     * @param y Y component of the vector.
     */
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    /**
     * Set x and y components of an existing Vector2.
     * @param x X component of the vector.
     * @param y Y component of the vector.
     */
    set (x: number, y: number) {
        this.x = Math.round(x)
        this.y = Math.round(y)
    }
}    

/**
 * Returns a pseudorandom number within [min, max] (both inclusive).
 */
export function randomBetween(minInclusive: number, maxInclusive: number): number {
   return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive)
}