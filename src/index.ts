import Header from './Components/Header';

let content: HTMLDivElement = document.createElement('div');
content.id = 'content';
let text: HTMLDivElement = document.createElement('div');
text.textContent = 'Hello, Webpack & Typescript!';
content.append(text);

document.body.append(Header(), content);