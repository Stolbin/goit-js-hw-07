import { galleryItems } from "./gallery-items.js";

const galleryBoxRef = document.querySelector('.gallery');
const createGallery = createCardsImg(galleryItems);
galleryBoxRef.insertAdjacentHTML('afterbegin', createGallery);
galleryBoxRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280px">`,
    {
      onShow: (instance) => {
        galleryBoxRef.addEventListener('keydown', onGalleryClickEsc);
      },
      onClose: (instance) => {
        galleryBoxRef.removeEventListener("keydown", onGalleryClickEsc);
      },
    }
  )
    instance.show();
    
    function onGalleryClickEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

function createCardsImg(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`;
    })
    .join("");
}
