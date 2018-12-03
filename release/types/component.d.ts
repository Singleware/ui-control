/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Properties } from './properties';
/**
 * Component class.
 */
export declare class Component<T extends Properties> extends Class.Null implements JSX.ElementClass {
    /**
     * Component properties.
     * (Public at compile-time, Protected at run-time)
     */
    readonly properties: T;
    /**
     * Component children.
     */
    protected readonly children: any[];
    /**
     * Gets the property descriptor that corresponds to the specified property name and prototype source.
     * @param prototype Prototype source.
     * @param property Property name.
     * @returns Returns the corresponding property descriptor or undefined when the property was not found.
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
     * Gets the component instance.
     * @throws Always throw an exception when not implemented.
     */
    readonly element: any;
}
