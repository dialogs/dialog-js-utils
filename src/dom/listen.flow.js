// @flow strict

type EventListenerOptionsOrUseCapture = {
  capture?: boolean,
  passive?: boolean,
};

type MouseEventHandler = (event: MouseEvent) => mixed;
type MouseEventListener = MouseEventHandler;
type FocusEventHandler = (event: FocusEvent) => mixed;
type FocusEventListener = FocusEventHandler;
type KeyboardEventHandler = (event: KeyboardEvent) => mixed;
type KeyboardEventListener = KeyboardEventHandler;
type InputEventHandler = (event: InputEvent) => mixed;
type InputEventListener = InputEventHandler;
type TouchEventHandler = (event: TouchEvent) => mixed;
type TouchEventListener = TouchEventHandler;
type WheelEventHandler = (event: WheelEvent) => mixed;
type WheelEventListener = WheelEventHandler;
type AbortProgressEventHandler = (event: ProgressEvent) => mixed;
type AbortProgressEventListener = AbortProgressEventHandler;
type ProgressEventHandler = (event: ProgressEvent) => mixed;
type ProgressEventListener = ProgressEventHandler;
type DragEventHandler = (event: DragEvent) => mixed;
type DragEventListener = DragEventHandler;
type PointerEventHandler = (event: PointerEvent) => mixed;
type PointerEventListener = PointerEventHandler;
type AnimationEventHandler = (event: AnimationEvent) => mixed;
type AnimationEventListener = AnimationEventHandler;
type ClipboardEventHandler = (event: ClipboardEvent) => mixed;
type ClipboardEventListener = ClipboardEventHandler;
type TransitionEventHandler = (event: TransitionEvent) => mixed;
type TransitionEventListener = TransitionEventHandler;
type BeforeUnloadEventHandler = (event: BeforeUnloadEvent) => mixed;
type BeforeUnloadEventListener = BeforeUnloadEventHandler;

type MouseEventTypes =
  | 'contextmenu'
  | 'mousedown'
  | 'mouseenter'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'click'
  | 'dblclick';
type FocusEventTypes = 'blur' | 'focus' | 'focusin' | 'focusout';
type KeyboardEventTypes = 'keydown' | 'keyup' | 'keypress';
type InputEventTypes = 'input' | 'beforeinput';
type TouchEventTypes = 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel';
type WheelEventTypes = 'wheel';
type AbortProgressEventTypes = 'abort';
type ProgressEventTypes =
  | 'abort'
  | 'error'
  | 'load'
  | 'loadend'
  | 'loadstart'
  | 'progress'
  | 'timeout';
type DragEventTypes =
  | 'drag'
  | 'dragend'
  | 'dragenter'
  | 'dragexit'
  | 'dragleave'
  | 'dragover'
  | 'dragstart'
  | 'drop';
type PointerEventTypes =
  | 'pointerover'
  | 'pointerenter'
  | 'pointerdown'
  | 'pointermove'
  | 'pointerup'
  | 'pointercancel'
  | 'pointerout'
  | 'pointerleave'
  | 'gotpointercapture'
  | 'lostpointercapture';
type AnimationEventTypes =
  | 'animationstart'
  | 'animationend'
  | 'animationiteration';
type ClipboardEventTypes = 'clipboardchange' | 'cut' | 'copy' | 'paste';
type TransitionEventTypes =
  | 'transitionrun'
  | 'transitionstart'
  | 'transitionend'
  | 'transitioncancel';
type BeforeUnloadEventTypes = 'beforeunload';

interface ListenFn {
  (
    target: EventTarget,
    type: MouseEventTypes,
    listener: MouseEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: FocusEventTypes,
    listener: FocusEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: KeyboardEventTypes,
    listener: KeyboardEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: InputEventTypes,
    listener: InputEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: TouchEventTypes,
    listener: TouchEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: WheelEventTypes,
    listener: WheelEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: AbortProgressEventTypes,
    listener: AbortProgressEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: ProgressEventTypes,
    listener: ProgressEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: DragEventTypes,
    listener: DragEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: PointerEventTypes,
    listener: PointerEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };

  (
    target: EventTarget,
    type: AnimationEventTypes,
    listener: AnimationEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: ClipboardEventTypes,
    listener: ClipboardEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: TransitionEventTypes,
    listener: TransitionEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
  (
    target: EventTarget,
    type: BeforeUnloadEventTypes,
    listener: BeforeUnloadEventListener,
    optionsOrUseCapture: EventListenerOptionsOrUseCapture,
  ): {
    remove: () => mixed,
  };
}

declare module.exports: {
  listen: ListenFn,
};
