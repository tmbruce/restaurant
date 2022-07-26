import Sax from '../assets/sax.jpg';
import createElement from "../util/CreateElement";
const About = ((): HTMLDivElement => {
    let aboutContainer: HTMLDivElement = document.createElement('div');
    aboutContainer.id = 'about';
    const img = new Image();
    img.src = Sax;
    img.className = 'jazz-image';
    img.loading = 'lazy';
    img.alt = 'Man playing saxophone';
    aboutContainer.append(img);
    const aboutHeadline = createElement('h1', 'about-headline', 'Jazz De Opus ⋅ Portland, Oregon');
    const aboutTagline = createElement('h1', 'about-tagline', '— EST. 1972 —');
    const aboutText: HTMLParagraphElement = document.createElement('p');
    aboutText.className = 'about-text';
    aboutText.textContent = `
        Unpretentious and inviting, this restaurant and lounge surrounds guests with wood and 
        warmth. During the day, the kitchen serves up a variety of steak and seafood dishes, 
        full-flavored and generous. When evening rolls around, the tack changes a bit, and 
        jazz musicians take to the small stage. Playing to patrons lit by candlelight, these 
        local and nationally known performers ply guests with soulful, rhythmic music. The 
        appreciative audience takes in the sounds, sipping wine and enjoying the night with 
        friends and companions. Open since 1972.
        
        Quisque malesuada magna lacus. Quisque gravida turpis dolor. Mauris ac vehicula ipsum. 
        Sed lacinia turpis erat, eu placerat erat condimentum nec. Maecenas eleifend mi dolor, 
        in aliquam nunc ultricies nec. Maecenas ut eros varius felis iaculis tempor eget eget eros. 
        Nunc fringilla odio nisl, ac condimentum mauris auctor at. Nam et porta magna, non 
        dignissim nibh. Aenean nec erat pharetra, fringilla erat quis, semper nulla.
        `
    aboutContainer.append(aboutHeadline, aboutTagline, aboutText);
    return aboutContainer;
})();

export default About;