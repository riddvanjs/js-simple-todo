import { BACKDROP_CLASSES } from './constants';

export default class OffCanvas {
    constructor() {
        const bodyElement: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const addBtn: HTMLButtonElement = document.querySelector('.btn-add');
        const closeBtn: HTMLButtonElement = document.querySelector('.btn-close');
        const myOffCanvas: HTMLElement = document.querySelector('.off-canvas');
        const backdrop: HTMLElement = document.querySelector('.backdrop');

        const addListener = (): void => {
            this.toggleClassName(myOffCanvas, 'is-active');
            BACKDROP_CLASSES.forEach((className) => {
                this.toggleClassName(bodyElement, className);
            });
        };

        const closeListener = (): void => {
            this.toggleClassName(myOffCanvas, 'is-active');
            BACKDROP_CLASSES.forEach((className) => {
                this.toggleClassName(bodyElement, className);
            });
        };

        addBtn.addEventListener('click', addListener);
        closeBtn.addEventListener('click', closeListener);
        backdrop.addEventListener('click', closeListener);
    }

    toggleClassName(el, string): HTMLElement {
        if (el.classList.contains(string)) {
            return el.classList.remove(string);
        }

        return el.classList.add(string);
    }
}
