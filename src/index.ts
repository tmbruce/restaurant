import './reset.css';
import './style.css';
import Header from './Components/Header';

let content: HTMLDivElement = document.createElement('div');
content.id = 'content';

content.append(Header());

document.body.append(content);

let homeBtn = document.querySelector('#homeBtn');
if (homeBtn) {homeBtn.classList.toggle('active')};
    