/**
 * Element class.
 */
export declare class Element extends HTMLElement {
    /**
     * Gets the first child element in the specified slot element.
     * @param slot Slot element.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns the first child element or undefined when the child was not found.
     */
    protected getChildElement(slot: HTMLSlotElement, required: boolean): HTMLElement | undefined;
    /**
     * Gets the first child element in the specified slot element.
     * @param slot Slot element.
     * @throws Throws an error when there are no children in the specified slo.
     * @returns Returns the first child element.
     */
    protected getRequiredChildElement(slot: HTMLSlotElement): HTMLElement;
    /**
     * Gets the specified property from the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param required Determines whether the property is required or not.
     * @throws Throws an error when there are no children in the specified slot and the property is required.
     * @returns Returns the property value.
     */
    protected getChildProperty(slot: HTMLSlotElement, property: string, required: boolean): any;
    /**
     * Gets the specified property from the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns the property value.
     */
    protected getRequiredChildProperty(slot: HTMLSlotElement, property: string): any;
    /**
     * Sets the specified property into the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param value Property value.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns true when the specified property has been assigned, false otherwise.
     */
    protected setChildProperty(slot: HTMLSlotElement, property: string, value: any, required: boolean): boolean;
    /**
     * Sets the specified property into the first child in the given slot element.
     * @param slot Slot element.
     * @param property Property name.
     * @param value Property value.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns true when the specified property has been assigned, false otherwise.
     */
    protected setRequiredChildProperty(slot: HTMLSlotElement, property: string, value: any): boolean;
    /**
     * Calls the specified method from the first child in the given slot element.
     * @param slot Slot element.
     * @param method Method name.
     * @param parameters Method parameters.
     * @param required Determines whether the child is required or not.
     * @throws Throws an error when there are no children in the specified slot and the child is required.
     * @returns Returns the same value from the performed method.
     */
    protected callChildMethod(slot: HTMLSlotElement, method: string, parameters: any[], required: boolean): any;
    /**
     * Calls the specified method from the first child in the given slot element.
     * @param slot Slot element.
     * @param method Method name.
     * @param parameters Method parameters.
     * @throws Throws an error when there are no children in the specified slot.
     * @returns Returns the same value from the performed method.
     */
    protected callRequiredChildMethod(slot: HTMLSlotElement, method: string, parameters: any[]): any;
    /**
     * Updates the specified property name with the given value in the element.
     * @param property Property name.
     * @param value Property value.
     */
    protected updatePropertyState(property: string, value: any): void;
    /**
     * Update all element's children width the specified property name and value.
     * @param property Property name.
     * @param value Property value.
     */
    protected updateChildrenState(property: string, value: any): void;
}
