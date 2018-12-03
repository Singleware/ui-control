/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Component } from './component';
export { Properties } from './properties';
/**
 * Declarations.
 */
import { Callback, Constructor } from './types';
/**
 * List all children of the expected type in the provided element slot and performs the given callback for each child.
 * @param slot Element slot.
 * @param type Expected instance type.
 * @param callback Callback to be performed.
 * @returns Returns the same value returned by the callback or undefined if the callback has no returns.
 */
export declare const listChildrenByType: <T extends HTMLElement>(slot: HTMLSlotElement, type: Constructor<T>, callback: Callback) => any;
/**
 * List all children that contains the expected property in the provided element slot and performs the given callback for each child.
 * @param slot Element slot.
 * @param property Expected property.
 * @param callback Callback to be executed for each child.
 * @returns Returns the same value returned by the callback or undefined if the callback has no returns.
 */
export declare const listChildrenByProperty: (slot: HTMLSlotElement, property: string | number | symbol, callback: Callback) => any;
/**
 * Gets the first child of the expected type from the specified element slot.
 * @param slot Element slot.
 * @param type Expected instance type.
 * @returns Returns the first child or undefined when there is no child found.
 */
export declare const getChildByType: <T extends HTMLElement>(slot: HTMLSlotElement, type: Constructor<T>) => HTMLElement | undefined;
/**
 * Gets the first child that contains the expected property from the specified element slot.
 * @param slot Element slot.
 * @param property Expected property.
 * @returns Returns the first child or undefined when there is no child found.
 */
export declare const getChildByProperty: (slot: HTMLSlotElement, property: string | number | symbol) => HTMLElement | undefined;
/**
 * Gets the property value from the first child that contains the expected property in the specified element slot.
 * @param slot Element slot.
 * @param property Expected property.
 * @returns Returns the property value or undefined when there is no child found.
 */
export declare const getChildProperty: (slot: HTMLSlotElement, property: string | number | symbol) => any;
/**
 * Sets the specified property value to all elements in the specified element slot.
 * @param slot Element slot.
 * @param property Expected property.
 * @param value New property value.
 */
export declare const setChildrenProperty: (slot: HTMLSlotElement, property: string | number | symbol, value: any) => void;
/**
 * Sets the property value into the first child that contains the expected property in the specified element slot.
 * @param slot Element slot.
 * @param property Expected property.
 * @param value New property value.
 * @returns Returns true when the child was found and updated, false otherwise.
 */
export declare const setChildProperty: (slot: HTMLSlotElement, property: string | number | symbol, value: any) => boolean;
