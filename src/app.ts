import './reset.css';
import './style.css';
import events from './util/events';
import Header from './Components/Header';
import Home from './Components/Home';

export const initialize = () => {
    let content = document.querySelector('.content')!;
    content.append(Header(), Home);
    document.querySelector('#homeBtn')!.classList.toggle('active');

    const links: Element[] = Array.from(document.getElementsByClassName('nav-btn'));

    const setActiveTab = (tab: string) => {
        links.forEach(link => {
            if (link.id == tab) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault;
            setActiveTab(link.id);
            events.emit('activeTab', link.id);
        })
    });
}

