import Sax from '../assets/sax.jpg';
const About = ((): HTMLDivElement => {
    let aboutContainer: HTMLDivElement = document.createElement('div');
    aboutContainer.id = 'about';
    const img = new Image();
    img.src = Sax;
    img.className = 'jazz-image';
    aboutContainer.append(img);
    const aboutText: HTMLParagraphElement = document.createElement('p');
    aboutText.className = 'about-text';
    aboutText.textContent = `Unpretentious and inviting, this restaurant and lounge surrounds guests with wood and warmth. During the day, the kitchen serves up a variety of steak and seafood dishes, full-flavored and generous. When evening rolls around, the tack changes a bit, and jazz musicians take to the small stage. Playing to patrons lit by candlelight, these local and nationally known performers ply guests with soulful, rhythmic music. The appreciative audience takes in the sounds, sipping wine and enjoying the night with friends and companions. Open since 1972.`
    aboutContainer.append(aboutText);
    return aboutContainer;
})();

export default About;