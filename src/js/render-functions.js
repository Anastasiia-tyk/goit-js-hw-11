// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

export function renderImages(images) {
const markup = images.map(({image}) => {
    return `
    <li class="gallery-item">
	<a class="gallery-link" href="${image.largeImageURL}">
	<img 
	class="gallery-image" 
	src="${image.webformatURL}" 
	alt="${image.tags}" 
	/>
	</a>
    <div class="info">
        <p><b>Likes:</b>${image.likes}</p>
        <p><b>Views:</b>${image.views}</p>
        <p><b>Comments:</b>${image.comments}</p>
        <p><b>Downloads:</b>${image.downloads}</p>
    </div>
    </li>
    `;
}).join('');

galleryList.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();
}

