/**
 * @desciption
 * Provide a global point of access to a service without coupling users to the concrete class that implements it.
 * Readmore: {@link https://gameprogrammingpatterns.com/service-locator.html Game programming patterns}.
 * 
 */
const instances: {[key: string] : any} = {}

export default {

    set<T>(serviceId: string, instance: T) {
        // ... error handling ...
        instances[serviceId] = instance
    },

    get<T>(serviceId: string): T {

        const instance = instances[serviceId]
        // ... error handling ...
        return instance
    }
}