/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

declare module 'favico.js' {
  declare type FavicoOptions = {
    // Badge background color
    bgColor?: string,
    // Badge text color
    textColor?: string,
    // Text font family (Arial, Verdana, Times New Roman, serif, sans-serif,...)
    fontFamily?: string,
    // Font style (normal, italic, oblique, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900)
    fontStyle?: string,
    // Badge shape
    type?: 'circle' | 'rectangle',
    // Badge position
    position?: 'up' | 'down' | 'left' | 'upleft',
    // Badge animation type
    animation?: 'slide' | 'fade' | 'pop' | 'popFade' | 'none' | 'slide',
    // Image element ID if there is need to attach badge to regular image
    elementId?: false | string,
    // DOM element where to change "href" attribute (useful in case of multiple link icon elements)
    element?: false | string,
    // Method that will be called for each animation from with data URI parameter
    dataUrl?: false | string
  };

  declare class Favico {
    constructor(options: FavicoOptions): void;

    reset(): void;
    badge(value: number | string): void;
    image(value: HTMLImageElement): void;
    video(value: HTMLVideoElement | 'stop'): void;
    webcam(action?: 'stop'): void;
  }

  declare module.exports: typeof Favico;
}
