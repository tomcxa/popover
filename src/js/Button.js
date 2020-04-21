/* eslint-disable quotes */
export default class Button {
    constructor(parentEl, text = '', options = {}) {
        this.parentEl = parentEl;
        this.text = text;
        this.options = options;
    }

    get HTML() {
        return `<button type=${this.options.type || "submit"} 
        class=${this.options.class || "btn"}>${this.text}</button>`;
    }

    get element() {
        return this.parentEl.querySelector('.button');
    }

    bindToDOM(where) {
        this.parentEl.insertAdjacentHTML(where, this.HTML);
    }
}
