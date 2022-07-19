import { initialize } from './app';
import Menu from './Components/Menu';
import events from './util/events';

initialize();

let logo = document.querySelector('.main')!;
let title = document.querySelector('title')!;
let content = document.querySelector('.content')!;

const toggleLogo = (position: string) => {
    if ((position == 'center') && logo.classList.contains('left-align')){
        logo.classList.toggle('center-align');
        logo.classList.toggle('left-align');
    } else if ((position == 'left') && logo.classList.contains('center-align')) {
        logo.classList.toggle('center-align');
        logo.classList.toggle('left-align');
    }
}

const toggleTitle = (_title: string) => {
    let titleText = `Jazz De Opus - ${_title}`;
    title.textContent = titleText;
}

const removeTabContainer = () => {
    let tabContainer = document.getElementById('tab-container');
    if (tabContainer) {
        tabContainer.style.animationName = 'tab-out';
        setTimeout(() => {
            if (tabContainer)
            content.removeChild(tabContainer);
        }, 400);
    }
}

const buildTab = (tab: HTMLDivElement) => {
    let tabContainer: HTMLDivElement = document.createElement('div');
    tabContainer.id = 'tab-container';
    tabContainer.append(tab);
    content.append(tabContainer);
}

const tabChange = (data: string) => {
    removeTabContainer();
    switch (data) {
        case 'homeBtn':
            toggleLogo('center');
            toggleTitle('Home');
            break;
        case 'menuBtn':
            toggleLogo('left');
            toggleTitle('Menu');
            buildTab(Menu);
            break;
        case 'aboutBtn':
            toggleLogo('left');
            toggleTitle('About');
            break;
        case 'contactBtn':
            toggleLogo('left');
            toggleTitle('Contact');
            break;
    }
}

events.on('tabChange', (data: string) => tabChange(data));

