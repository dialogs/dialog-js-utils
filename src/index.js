/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 * @flow strict
 */

import Field, { type FieldAction } from './redux/field';
import type { EmptyAction } from './redux/action';

/**
 * Core
 */
export { mapNotNull } from './core/mapNotNull';
export { calculateCursor } from './core/calculateCursor';
export { filterByQuery } from './core/filterByQuery';
export { formatTime } from './core/formatTime';
export { getReadableFileSize } from './core/getReadableFileSize';
export {
  parseJSONSchema,
  safelyParseJSONSchema,
  safelyParseJSON,
} from './core/JSONSchema';
export type {
  JSONSchemaProperty,
  JSONSchema,
  JSONValue,
} from './core/JSONSchema';

/**
 * DOM
 */
export { listen } from './dom/listen';
export { fileToBase64 } from './dom/fileToBase64';
export { selectFiles } from './dom/selectFiles';
export { selectText } from './dom/selectText';
export { hasSelection } from './dom/hasSelection';

/**
 * Support
 */
export { isElectron } from './support/isElectron';

/**
 * Redux
 */
export { Field };
export type { EmptyAction, FieldAction };
