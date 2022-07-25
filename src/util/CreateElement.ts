const createElement = (type: string, className: string, textContent?: string | number) => {
    let element = document.createElement(`${type}`);
    element.className = `${className}`;
    if (textContent) element.textContent = textContent.toString();
    return element;
}

export default createElement;