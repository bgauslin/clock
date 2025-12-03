export const STORAGE_ITEM = 'clock';

export enum Events {
  Click = 'click',
  KeyDown = 'keydown',
  Settings = 'settingsChanged',
  TouchEnd = 'touchend',
  TouchStart = 'touchstart',
  TransitionEnd = 'transitionend',
}

export interface Settings {
  seconds: boolean,
  theme: string,
  theming: boolean,
}
