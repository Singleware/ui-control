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
 * Element class.
 */
let Element = class Element extends HTMLElement {
    /**
     * Gets the first child element in the specified slot element.
     * @param slot Slot element.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns the first child element or undefined when the child was not found.
     */
    getChildElement(slot, required) {
        const child = slot.assignedNodes()[0];
        if (!child && required) {
            throw new Error(`There are no children in the '${slot.name}' slot.`);
        }
        return child;
    }
    /**
     * Gets the first child element in the specified slot element.
     * @param slot Slot element.
     * @throws Throws an error when there are no children in the specified slo.
     * @returns Returns the first child element.
     */
    getRequiredChildElement(slot) {
        return this.getChildElement(slot, true);
    }
    /**
     * Gets the specified property from the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param required Determines whether the property is required or not.
     * @throws Throws an error when there are no children in the specified slot and the property is required.
     * @returns Returns the property value.
     */
    getChildProperty(slot, property, required) {
        return this.getChildElement(slot, required)[property];
    }
    /**
     * Gets the specified property from the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns the property value.
     */
    getRequiredChildProperty(slot, property) {
        return this.getChildProperty(slot, property, true);
    }
    /**
     * Sets the specified property into the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param value Property value.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns true when the specified property has been assigned, false otherwise.
     */
    setChildProperty(slot, property, value, required) {
        const child = this.getChildElement(slot, required);
        if (property in child) {
            child[property] = value;
            return true;
        }
        return false;
    }
    /**
     * Sets the specified property into the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param value Property value.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns true when the specified property has been assigned, false otherwise.
     */
    setRequiredChildProperty(slot, property, value) {
        return this.setChildProperty(slot, property, value, true);
    }
    /**
     * Calls the specified method from the first child in the given slot element.
     * @param slot Slot element.
     * @param method Method name.
     * @param parameters Method parameters.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns the same value from the performed method.
     */
    callChildMethod(slot, method, parameters, required) {
        const child = this.getChildElement(slot, required);
        if (child[method] instanceof Function) {
            return child[method](...parameters);
        }
        return void 0;
    }
    /**
     * Calls the specified method from the first child in the given slot element.
     * @param slot Slot element.
     * @param method Method name.
     * @param parameters Method parameters.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns the same value from the performed method.
     */
    callRequiredChildMethod(slot, method, parameters) {
        return this.callChildMethod(slot, method, parameters, true);
    }
    /**
     * Updates the specified property name with the given value in the element.
     * @param property Property name.
     * @param value Property value.
     */
    updatePropertyState(property, value) {
        if (value) {
            this.setAttribute(property, value === true ? '' : value);
        }
        else {
            this.removeAttribute(property);
        }
    }
    /**
     * Update all element's children width the specified property name and value.
     * @param property Property name.
     * @param value Property value.
     */
    updateChildrenState(property, value) {
        for (const child of this.children) {
            if (property in child) {
                child[property] = value;
            }
        }
    }
};
__decorate([
    Class.Protected()
], Element.prototype, "getChildElement", null);
__decorate([
    Class.Protected()
], Element.prototype, "getRequiredChildElement", null);
__decorate([
    Class.Protected()
], Element.prototype, "getChildProperty", null);
__decorate([
    Class.Protected()
], Element.prototype, "getRequiredChildProperty", null);
__decorate([
    Class.Protected()
], Element.prototype, "setChildProperty", null);
__decorate([
    Class.Protected()
], Element.prototype, "setRequiredChildProperty", null);
__decorate([
    Class.Protected()
], Element.prototype, "callChildMethod", null);
__decorate([
    Class.Protected()
], Element.prototype, "callRequiredChildMethod", null);
__decorate([
    Class.Protected()
], Element.prototype, "updatePropertyState", null);
__decorate([
    Class.Protected()
], Element.prototype, "updateChildrenState", null);
Element = __decorate([
    Class.Describe()
], Element);
exports.Element = Element;
