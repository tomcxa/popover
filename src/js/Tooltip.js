export default class Tooltip {
    constructor(title, message) {
        this.parentEl = document.body;
        this.el = document.createElement('div');
        this.title = title;
        this.message = message;

        this.setup();
    }

    setup() {
        this.el.classList.add('tooltip');
        this.el.insertAdjacentHTML('afterbegin', `<h3>${this.title}</h3><p>${this.message}</p>`);
        this.parentEl.insertAdjacentElement('afterbegin', this.el);
    }

    toggle() {
        this.el.classList.toggle('tooltip-active');
    }

    // show() {
    //     this.el.classList.add('.tooltip-active');
    // }

    // hide() {
    //     this.el.classList.remove('.tooltip-active');
    // }

    calcPosition(parentEl) {
        const { top, left } = parentEl.getBoundingClientRect();
        this.el.style.top = `${window.scrollY + top + parentEl.offsetHeight}px`;
        this.el.style.left = `${window.scrollX + left
            + (parentEl.offsetWidth - this.el.offsetWidth) / 2}px`;
    }
}
