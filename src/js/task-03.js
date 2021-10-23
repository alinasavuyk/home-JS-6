const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const onLinkToGallery =document.querySelector('ul.gallery')

const itemEl = images.map(image => image.url)
//console.log(itemEl);



const elementToImages =itemEl.map( (item) => {
  const navLinkItemImages = document.createElement('li');
  navLinkItemImages.src = item;
  navLinkItemImages.width = 270;
  navLinkItemImages.classList.add("gallery__item")
  return navLinkItemImages;
})
onLinkToGallery.append(...elementToImages);
console.log(onLinkToGallery)
console.log(elementToImages)
//element.append(el1, el2, ...)

//const list = document.querySelector('ul.gallery');
//const elementToImages =images.map( ({url, alt}) => `<li class="gallery__item"> <img src=${url} alt=${alt}> </li>`).join('');

//list.insertAdjacentHTML('afterbegin', listItems);