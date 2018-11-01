import { Properties } from './properties';
/**
 * Control component class.
 */
export declare class Component<T extends Properties> implements JSX.ElementClass {
    /**
     * Component properties.
     */
    readonly properties: T;
    /**
     * Component children.
     */
    protected readonly children: any[];
    /**
     * Gets the property descriptor that corresponds to the specified property name and source prototype.
     * @param prototype Source prototype.
     * @param property Property name.
     * @returns Returns a the corresponding property descriptor or undefined when the property was not found.
     */
    private getPropertyDescriptor;
    /**
     * Binds the property descriptor from the specified prototype to be called with this instance context.
     * @param prototype Source prototype.
     * @param property Property name.
     * @returns Returns a new property descriptor.
     * @throws Throws an error when the specified property was not found.
     */
    private bindDescriptor;
    /**
     * Bind all specified properties from this instance into the target object.
     * @param target Target object.
     * @param properties Properties to be assigned.
     */
    protected bindComponentProperties(target: HTMLElement, properties: string[]): void;
    /**
     * Assign all mapped values by the specified properties into this instance.
     * @param values Values to be assigned.
     * @param properties Properties to be assigned.
     * @throws Throws an error when some specified property does not exists in this instance.
     */
    protected assignComponentProperties(values: Object, properties: string[]): void;
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties?: T, children?: any[]);
    /**
     * Get control instance.
     * @throws Always throw an exception when it is not implemented.
     */
    readonly element: HTMLElement;
}
