import { galleryItems } from "./gallery-items.js";

const galleryBoxrRef = document.querySelector('.gallery');
const createGalleryMarkup = createCardsImgMarkup(galleryItems);
galleryBoxrRef.insertAdjacentHTML('afterbegin', createGalleryMarkup);
galleryBoxrRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const pattern = basicLightbox.create(
    `<img src="${event.target.dataset.source}"width="1280">`,
    {
      onShow: (pattern) => {
        galleryBoxrRef.addEventListener('keydown', onGalleryClickEsc);
      },
      onClose: (pattern) => {
        galleryBoxrRef.removeEventListener("keydown", onGalleryClickEsc);
      },
    }
  );
    pattern.show();
    
    function onGalleryClickEsc(event) {
    if (event.code === 'Escape') {
      pattern.close();
    }
  }
}

function createCardsImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`;
    })
    .join("");
}
