import '../app';
import Button from '../Button';

describe('Should test app', () => {
    const button = new Button(document.body, '1234');
    test('should be render button', () => {
        button.bindToDOM('afterbegin');

        expect(document.body.innerHTML).toEqual(button.HTML);
    });

    // test('should toggle tooltip', () => {
    //     const tooltip = document.querySelector('.tooltip');

    //     button.click();

    //     expect(tooltip.classList.contains('tooltip-active')).toBeTruthy();
    // });
});
