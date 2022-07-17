import Logo from '../assets/logo.png';

const Home = (() => {
    let img = new Image();
    img.src = Logo;
    img.classList.add('logo');
    let main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('center-align');
    main.append(img);
    return main;
})();

export default Home;