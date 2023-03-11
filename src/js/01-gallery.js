

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


let GalleryEl = document.querySelector('.gallery');
const photo = galleryItems.map(({preview, original, description}) => { 
    return `<a class = 'gallery__item' href = '${original}'>
    <img class = 'gallery__image' src = '${preview}' data-source = '${original}' alt = '${description}'/>
    </a>`
  }).join('');
GalleryEl.innerHTML = photo

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
