/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Element class.
 */
@Class.Describe()
export class Element extends HTMLElement {
  /**
   * Gets the first child element in the specified slot element.
   * @param slot Slot element.
   * @param required Determines whether the child is required or not.
   * @throws Throws an error when there are no children in the specified slot and the child is required.
   * @returns Returns the first child element or undefined when the child was not found.
   */
  @Class.Protected()
  protected getChildElement(slot: HTMLSlotElement, required: boolean): HTMLElement | undefined {
    const child = slot.assignedNodes()[0] as HTMLElement;
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
  @Class.Protected()
  protected getRequiredChildElement(slot: HTMLSlotElement): HTMLElement {
    return this.getChildElement(slot, true) as HTMLElement;
  }

  /**
   * Gets the specified property from the first child in the given slot element.
   * @param slot Slot element.
   * @param property Property name.
   * @param required Determines whether the property is required or not.
   * @throws Throws an error when there are no children in the specified slot and the property is required.
   * @returns Returns the property value.
   */
  @Class.Protected()
  protected getChildProperty(slot: HTMLSlotElement, property: string, required: boolean): any {
    return (this.getChildElement(slot, required) as any)[property];
  }

  /**
   * Gets the specified property from the first child in the given slot element.
   * @param slot Slot element.
   * @param property Property name.
   * @throws Throws an error when there are no children in the specified slot.
   * @returns Returns the property value.
   */
  @Class.Protected()
  protected getRequiredChildProperty(slot: HTMLSlotElement, property: string): any {
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
  @Class.Protected()
  protected setChildProperty(slot: HTMLSlotElement, property: string, value: any, required: boolean): boolean {
    const child = this.getChildElement(slot, required) as any;
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
  @Class.Protected()
  protected setRequiredChildProperty(slot: HTMLSlotElement, property: string, value: any): boolean {
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
  @Class.Protected()
  protected callChildMethod(slot: HTMLSlotElement, method: string, parameters: any[], required: boolean): any {
    const child = this.getChildElement(slot, required) as any;
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
  @Class.Protected()
  protected callRequiredChildMethod(slot: HTMLSlotElement, method: string, parameters: any[]): any {
    return this.callChildMethod(slot, method, parameters, true);
  }

  /**
   * Updates the specified property name with the given value in the element.
   * @param property Property name.
   * @param value Property value.
   */
  @Class.Protected()
  protected updatePropertyState(property: string, value: any): void {
    if (value) {
      this.setAttribute(property, value === true ? '' : value);
    } else {
      this.removeAttribute(property);
    }
  }

  /**
   * Update all element's children width the specified property name and value.
   * @param property Property name.
   * @param value Property value.
   */
  @Class.Protected()
  protected updateChildrenState(property: string, value: any): void {
    for (const child of this.children as any) {
      if (property in child) {
        child[property] = value;
      }
    }
  }
}
