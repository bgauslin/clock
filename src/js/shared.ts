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
  digital: boolean,
  seconds: boolean,
  theme: string,
}
