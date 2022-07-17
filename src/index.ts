import { initialize } from './app';
import events from './util/events';

initialize();

let logo = document.querySelector('.main')!;

const toggleLogo = (position: string) => {
    if ((position == 'center') && logo.classList.contains('left-align')){
        logo.classList.toggle('center-align');
        logo.classList.toggle('left-align');
    } else if ((position == 'left') && logo.classList.contains('center-align')) {
        logo.classList.toggle('center-align');
        logo.classList.toggle('left-align');
    }
}

const tabChange = (data: string) => {
    switch (data) {
        case 'homeBtn':
            toggleLogo('center');
            break;
        case 'menuBtn':
            toggleLogo('left');
            break;
        case 'aboutBtn':
            toggleLogo('left');
            break;
        case 'contactBtn':
            toggleLogo('left');
            break;
    }
}

events.on('tabChange', (data: string) => tabChange(data));

