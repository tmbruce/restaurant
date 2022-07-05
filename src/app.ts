import Header from './Components/Header';

const initialize = (): void => {
    let content: HTMLDivElement = document.createElement('div');
    content.id = 'content';
    document.body.append(content);

    content.append(Header());
}