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
 * Control helper class.
 */
let Helper = class Helper {
    /**
     * List all children that are instance of expected type in the provided element slot and executes the given callback for each child.
     * @param slot Element slot.
     * @param type Expected instance type.
     * @param callback Callback to be executed for each child.
     * @returns Returns the same value returned by the callback or undefined if the callback returns nothing.
     */
    static listChildByType(slot, type, callback) {
        const children = slot.assignedNodes();
        for (const child of children) {
            if (child instanceof type) {
                const result = callback(child);
                if (result !== void 0) {
                    return result;
                }
            }
        }
        return void 0;
    }
    /**
     * List all children that contains the expected property in the provided element slot and executes the given callback for each child.
     * @param slot Element slot.
     * @param property Expected property.
     * @param callback Callback to be executed for each child.
     * @returns Returns the same value returned by the callback or undefined if the callback returns nothing.
     */
    static listChildByProperty(slot, property, callback) {
        return this.listChildByType(slot, HTMLElement, (child) => {
            if (property in child) {
                const result = callback(child);
                if (result !== void 0) {
                    return result;
                }
            }
        });
    }
    /**
     * Gets the first child that is instance of the provided expected type from the specified element slot.
     * @param slot Element slot.
     * @param type Expected instance type.
     * @returns Returns the first child or undefined when there is no child found.
     */
    static getChildByType(slot, type) {
        return this.listChildByType(slot, type, (child) => child);
    }
    /**
     * Gets the first child that contains the expected property from the specified element slot.
     * @param slot Element slot.
     * @param property Expected property.
     * @returns Returns the first child or undefined when there is no child found.
     */
    static getChildByProperty(slot, property) {
        return this.listChildByProperty(slot, property, (child) => child);
    }
    /**
     * Gets the property value from the first child that contains the expected property in the specified element slot.
     * @param slot Element slot.
     * @param property Expected property.
     * @returns Returns the property value or undefined when there is no child found.
     */
    static getChildProperty(slot, property) {
        const child = this.getChildByProperty(slot, property);
        return child ? child[property] : void 0;
    }
    /**
     * Sets the specified property value to all elements in the specified element slot.
     * @param slot Element slot.
     * @param property Expected property.
     * @param value New property value.
     */
    static setChildrenProperty(slot, property, value) {
        this.listChildByProperty(slot, property, (child) => {
            child[property] = value;
        });
    }
    /**
     * Sets the property value into the first child that contains the expected property in the specified element slot.
     * @param slot Element slot.
     * @param property Expected property.
     * @param value New property value.
     * @returns Returns true when the child was found and updated, false otherwise.
     */
    static setChildProperty(slot, property, value) {
        const child = this.getChildByProperty(slot, property);
        if (child) {
            child[property] = value;
            return true;
        }
        return false;
    }
    /**
     * Assign all values mapped by the specified keys into the target object.
     * @param target Target object.
     * @param values Values to be assigned.
     * @param keys Keys to be assigned.
     */
    static assignProperties(target, values, keys) {
        for (const key of keys) {
            if (key in values) {
                if (!(key in target)) {
                    throw new Error(`Property '${key}' can't be assigned.`);
                }
                target[key] = values[key];
            }
        }
    }
};
__decorate([
    Class.Public()
], Helper, "listChildByType", null);
__decorate([
    Class.Public()
], Helper, "listChildByProperty", null);
__decorate([
    Class.Public()
], Helper, "getChildByType", null);
__decorate([
    Class.Public()
], Helper, "getChildByProperty", null);
__decorate([
    Class.Public()
], Helper, "getChildProperty", null);
__decorate([
    Class.Public()
], Helper, "setChildrenProperty", null);
__decorate([
    Class.Public()
], Helper, "setChildProperty", null);
__decorate([
    Class.Public()
], Helper, "assignProperties", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
