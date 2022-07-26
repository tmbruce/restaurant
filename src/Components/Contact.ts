import createElement from "../util/CreateElement";
import Map from '../assets/map.png';

const Contact = ((): HTMLDivElement => {
    let contactContainer: HTMLDivElement = document.createElement('div');
    contactContainer.id = 'contact';
    let mapImg = new Image();
    mapImg.src = Map;
    mapImg.className = 'map-img';
    mapImg.loading = 'lazy';
    mapImg.alt = 'Map to location';
    let name = createElement('p', 'store-name', 'Jazz De Opus')
    let time = createElement('p', 'store-hours', 'Open Everyday, 4pm - 12am');
    let address = createElement('p', 'store-address', '33 NW 2nd Ave');
    contactContainer.append(mapImg, name, time, address);
    return contactContainer;
})();

export default Contact;