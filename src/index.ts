import './reset.css';
import './style.css';
import Header from './Components/Header';

let content: HTMLDivElement = document.createElement('div');
content.id = 'content';

document.body.append(Header(), content);