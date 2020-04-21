import Button from './Button';
import Tooltip from './Tooltip';

// eslint-disable-next-line no-console
console.log('it works!');

const button = new Button(document.body, 'Click to toggle popover!', { class: 'button' });
button.bindToDOM('afterbegin');

const tooltip = new Tooltip('Заголовок тултипа', 'Какое-то сообщение при клике на кнопку');

button.element.addEventListener('click', (event) => {
    event.preventDefault();
    tooltip.toggle();
    tooltip.calcPosition(event.currentTarget);
});
