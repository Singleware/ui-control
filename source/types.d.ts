/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Declares the callback to list children.
 */
export type Callback = (child: HTMLElement) => any;

/**
 * Type declaration for class constructors.
 */
export type Constructor<T extends HTMLElement = any> = Class.Constructor<T>;
