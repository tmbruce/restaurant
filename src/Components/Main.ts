import Logo from '../assets/logo.png';

const createMain = () => {
    let img = new Image();
    img.src = Logo;
    img.classList.add('logo');
    let main = document.createElement('main');
    main.classList.add('main');
    main.append(img);
    return main;
}

export default createMain;