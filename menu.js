const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slideImg');

// pool includes pictures of slide show
let pool = ["gallery/set.jpg", "gallery/slide1.jpg", "gallery/slide2.jpg", "gallery/slide3.jpg", "gallery/slide4.jpg", "gallery/slide5.jpg"];

let index = 0;

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);

function prevImage() {
  if (index == 0) {
    img.src = pool[pool.length - 1];
    index = pool.length - 1;
  } else {
    img.src = pool[index - 1];
    index -= 1;
    
  }
}

function nextImage() {
  if (index == pool.length - 1) {
    img.src = pool[0];
    index = 0;
  } else {
    img.src = pool[index + 1];
    index += 1;
  }
}