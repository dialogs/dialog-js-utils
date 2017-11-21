/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import Field, { type FieldAction } from './redux/field';
import type { EmptyAction } from './redux/action';

/**
 * Core
 */
export { calculateCursor } from './core/calculateCursor';
export { filterByQuery } from './core/filterByQuery';
export { formatTime } from './core/formatTime';
export { getReadableFileSize } from './core/getReadableFileSize';

/**
 * DOM
 */
export { listen } from './dom/listen';
export { fileToBase64 } from './dom/fileToBase64';
export { selectFiles } from './dom/selectFiles';
export { selectText } from './dom/selectText';

/**
 * Support
 */
export { isElectron } from './support/isElectron';

/**
 * Redux
 */
export { Field };
export type { EmptyAction, FieldAction };
