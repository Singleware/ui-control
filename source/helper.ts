/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Callback } from './types';

/**
 * Control helper class.
 */
@Class.Describe()
export class Helper {
  /**
   * List all children that contains the expected property in the element slot and executes the given callback for each result.
   * @param slot Element slot.
   * @param property Expected property.
   * @param callback Callback to be executed for each element found.
   * @returns Returns the same value returned by the callback or undefined if the callback returns nothing.
   */
  @Class.Public()
  public static listChildByProperty(slot: HTMLSlotElement, property: PropertyKey, callback: Callback): any {
    const children = slot.assignedNodes();
    for (const child of children) {
      if (child instanceof HTMLElement && property in child) {
        const result = callback(child);
        if (result !== void 0) {
          return result;
        }
      }
    }
    return void 0;
  }

  /**
   * Gets the first child that contains the expected property from the specified element slot.
   * @param slot Element slot.
   * @param property Expected property.
   * @returns Returns the first child or undefined when there is no child found.
   */
  @Class.Public()
  public static getChildByProperty(slot: HTMLSlotElement, property: PropertyKey): HTMLElement | undefined {
    return Helper.listChildByProperty(slot, property, (child: HTMLElement) => {
      return child;
    });
  }

  /**
   * Gets the property value from the first child that contains the expected property in the specified element slot.
   * @param slot Element slot.
   * @param property Expected property.
   * @returns Returns the property value or undefined when there is no child found.
   */
  @Class.Public()
  public static getChildProperty(slot: HTMLSlotElement, property: PropertyKey): any {
    const child = Helper.getChildByProperty(slot, property);
    return child ? (<any>child)[property] : void 0;
  }

  /**
   * Sets the specified property value to all elements in the specified element slot.
   * @param slot Element slot.
   * @param property Expected property.
   * @param value New property value.
   */
  @Class.Public()
  public static setChildrenProperty(slot: HTMLSlotElement, property: PropertyKey, value: any): void {
    Helper.listChildByProperty(slot, property, (child: any) => {
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
  @Class.Public()
  public static setChildProperty(slot: HTMLSlotElement, property: PropertyKey, value: any): boolean {
    const child = Helper.getChildByProperty(slot, property);
    if (child) {
      (<any>child)[property] = value;
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
  @Class.Public()
  public static assignProperties(target: Object, values: Object, keys: string[]): void {
    for (const key of keys) {
      if (key in values) {
        if (!(key in target)) {
          throw new Error(`Property '${key}' can't be assigned.`);
        }
        (<any>target)[key] = (<any>values)[key];
      }
    }
  }
}
