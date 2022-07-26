import { initialize } from './app';
// import Menu from './Components/Menu';
// import About from './Components/About';
import Contact from './Components/Contact';
import events from './util/events';

initialize();

let logo = document.querySelector('.main')!;
let title = document.querySelector('title')!;
let content = document.querySelector('.content')!;
let currentTab = 'homeBtn';

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
    title.textContent = `Jazz De Opus - ${_title}`;
}

const removeTabContainer = () => {
    let tabContainer = document.getElementById('tab-container');
    if (tabContainer) {
        content.removeChild(tabContainer);
    }
}
const asyncTab = async (component: string) => {
    const { default: mod } = await import(`./Components/${component}`);
    buildTab(mod);
}


const buildTab = (tab: HTMLDivElement) => {
    let tabContainer: HTMLDivElement = document.createElement('div');
    tabContainer.id = 'tab-container';
    tabContainer.append(tab);
    content.append(tabContainer);
}

const tabChange = async (data: string) => {
    currentTab = data;
    removeTabContainer();
    switch (data) {
        case 'homeBtn':
            toggleLogo('center');
            toggleTitle('Home');
            break;
        case 'menuBtn':
            toggleLogo('left');
            toggleTitle('Menu');
            await asyncTab('Menu');

            break;
        case 'aboutBtn':
            toggleLogo('left');
            toggleTitle('About');
            await asyncTab('About');
            break;
        case 'contactBtn':
            toggleLogo('left');
            toggleTitle('Contact');
            buildTab(Contact);
            break;
    }
}

events.on('tabChange', (data: string) => tabChange(data));

