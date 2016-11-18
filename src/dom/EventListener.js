/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import isPassiveListenerSupports from '../support/isPassiveListenerSupports';

export type Options = boolean | {
  capture?: boolean,
  passive?: boolean
};

export type Listener = {
  remove: () => void
};

const EventListener = {
  listen(target: HTMLElement, eventType: string, callback: Function, passive?: boolean): Listener {
    const options = passive && isPassiveListenerSupports() ? { passive, capture: false } : false;

    target.addEventListener(eventType, callback, options);

    return {
      remove() {
        target.removeEventListener(eventType, callback, options);
      }
    };
  },

  capture(target: HTMLElement, eventType: string, callback: Function, passive?: boolean): Listener {
    const options = passive && isPassiveListenerSupports() ? { passive, capture: true } : true;

    target.addEventListener(eventType, callback, options);

    return {
      remove() {
        target.removeEventListener(eventType, callback, options);
      }
    };
  }
};

export default EventListener;
