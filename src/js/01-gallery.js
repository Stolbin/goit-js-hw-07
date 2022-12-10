import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryRef = document.createElement('div');
galleryRef.classList = 'gallery__item';



function createGallary() {
const galleryItemRef = document.createElement('a');
galleryItemRef.classList = 'gallery__link';
galleryItemRef.setAttribute('href', 'large-image.jpg' );
galleryItemRef = document.createDocumentFragment();
    for (let i = 0; i < galleryItems.length; i += 1) {
        const galleryImgRef = `<img
        class="gallery__image"
        src="small-image.jpg"
        data-source="large-image.jpg"
        alt="${galleryItems.description}"
        />`;
        galleryItemRef.appendChild(galleryImgRef.preview);
    }
    galleryRef.appendChild(galleryItemRef);
};

gallery.insertAdjacentHTML('afterbegin', galleryRef);
console.log(gallery);