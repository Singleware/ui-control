/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';

import { Properties } from './properties';

/**
 * Control component class.
 */
@Class.Describe()
export class Component<T extends Properties> implements JSX.ElementClass {
  /**
   * Component properties.
   */
  @Class.Protected()
  public readonly properties: T;

  /**
   * Component children.
   */
  @Class.Protected()
  protected readonly children: any[];

  /**
   * Binds the property descriptor from the specified prototype to be called with the specified context.
   * @param context Context.
   * @param prototype Source prototype.
   * @param property Property name.
   * @returns Returns a new property descriptor.
   * @throws Throws an error when the specified property was not found.
   */
  @Class.Protected()
  protected bindDescriptor(context: Object, prototype: Object, property: PropertyKey): PropertyDescriptor {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
    if (!descriptor) {
      throw new Error(`Property '${property as string}' was not found.`);
    }
    const newer = { ...descriptor };
    if (newer.value) {
      newer.value = newer.value.bind(context);
    } else {
      if (newer.get) {
        newer.get = newer.get.bind(context);
      }
      if (newer.set) {
        newer.set = newer.set.bind(context);
      }
    }
    return newer;
  }

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    this.properties = Object.freeze(properties || {}) as T;
    this.children = Object.freeze(children || []) as any[];
  }

  /**
   * Get control instance.
   * @throws Always throw an exception when it is not implemented.
   */
  @Class.Public()
  public get element(): HTMLElement {
    throw new Error(`Component not implemented.`);
  }
}
