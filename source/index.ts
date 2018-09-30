/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Component } from './component';
export { Properties } from './properties';

import { Helper } from './helper';

// Aliases
export const listChildrenByType = Helper.listChildrenByType;
export const listChildrenByProperty = Helper.listChildrenByProperty;

export const getChildByType = Helper.getChildByType;
export const getChildByProperty = Helper.getChildByProperty;

export const getChildProperty = Helper.getChildProperty;
export const setChildProperty = Helper.setChildProperty;

export const setChildrenProperty = Helper.setChildrenProperty;
