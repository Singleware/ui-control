"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Component class.
 */
let Component = class Component extends Class.Null {
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties, children) {
        super();
        this.properties = Object.freeze(properties || {});
        this.children = Object.freeze(children || []);
    }
    /**
     * Gets the property descriptor that corresponds to the specified property name and prototype source.
     * @param prototype Prototype source.
     * @param property Property name.
     * @returns Returns the corresponding property descriptor or undefined when the property was not found.
     */
    getPropertyDescriptor(prototype, property) {
        let descriptor;
        while (!(descriptor = Object.getOwnPropertyDescriptor(prototype, property))) {
            if (!(prototype = Reflect.getPrototypeOf(prototype))) {
                break;
            }
        }
        return descriptor;
    }
    /**
     * Binds the property descriptor from the specified prototype to be called with this instance context.
     * @param prototype Source prototype.
     * @param property Property name.
     * @returns Returns a new property descriptor.
     * @throws Throws an error when the specified property was not found.
     */
    bindDescriptor(prototype, property) {
        const descriptor = this.getPropertyDescriptor(prototype, property);
        if (!descriptor) {
            throw new Error(`Property '${property}' was not found.`);
        }
        const newer = { ...descriptor };
        if (newer.value) {
            newer.value = newer.value.bind(this);
        }
        else {
            if (newer.get) {
                newer.get = newer.get.bind(this);
            }
            if (newer.set) {
                newer.set = newer.set.bind(this);
            }
        }
        return newer;
    }
    /**
     * Bind all specified properties from this instance into the target object.
     * @param target Target object.
     * @param properties Properties to be assigned.
     */
    bindComponentProperties(target, properties) {
        const prototype = Reflect.getPrototypeOf(this);
        for (const property of properties) {
            Reflect.defineProperty(target, property, this.bindDescriptor(prototype, property));
        }
    }
    /**
     * Assign all mapped values by the specified properties into this instance.
     * @param values Values to be assigned.
     * @param properties Properties to be assigned.
     * @throws Throws an error when some specified property does not exists in this instance.
     */
    assignComponentProperties(values, properties) {
        for (const property of properties) {
            if (property in values) {
                if (!(property in this)) {
                    throw new Error(`Property '${property}' can't be assigned.`);
                }
                this[property] = values[property];
            }
        }
    }
    /**
     * Gets the component instance.
     * @throws Always throw an exception when not implemented.
     */
    get element() {
        throw new Error(`Component not implemented.`);
    }
};
__decorate([
    Class.Protected()
], Component.prototype, "properties", void 0);
__decorate([
    Class.Protected()
], Component.prototype, "children", void 0);
__decorate([
    Class.Private()
], Component.prototype, "getPropertyDescriptor", null);
__decorate([
    Class.Private()
], Component.prototype, "bindDescriptor", null);
__decorate([
    Class.Protected()
], Component.prototype, "bindComponentProperties", null);
__decorate([
    Class.Protected()
], Component.prototype, "assignComponentProperties", null);
__decorate([
    Class.Public()
], Component.prototype, "element", null);
Component = __decorate([
    Class.Describe()
], Component);
exports.Component = Component;
