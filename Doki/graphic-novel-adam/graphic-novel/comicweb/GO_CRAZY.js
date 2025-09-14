const pages = [
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/1.jpg', alt: 'Seite 1' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/2.jpg', alt: 'Seite 2' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/3.png', alt: 'Seite 3' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/4.png', alt: 'Seite 4' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/5.png', alt: 'Seite 5' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/6.png', alt: 'Seite 6' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/7.png', alt: 'Seite 7' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/8.png', alt: 'Seite 8' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/9.png', alt: 'Seite 9' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/10.jpg', alt: 'Seite 10' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/11.jpg', alt: 'Seite 11' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/12.png', alt: 'Seite 12' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/13.png', alt: 'Seite 13' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/14.png', alt: 'Seite 14' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/15.png', alt: 'Seite 15' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/16.png', alt: 'Seite 16' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/17.png', alt: 'Seite 17' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/18.png', alt: 'Seite 18' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/19.png', alt: 'Seite 19' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/20.jpg', alt: 'Seite 20' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/21.png', alt: 'Seite 21' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/22.jpg', alt: 'Seite 22' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/23.png', alt: 'Seite 23' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/24.jpg', alt: 'Seite 24' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/25.png', alt: 'Seite 25' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/26.png', alt: 'Seite 26' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/text.png', alt: 'Seite 27' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/27.jpg', alt: 'Seite 28' },
  { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/28.png', alt: 'Seite 29' }
];

let currentPageIndex = 1;

const leftPage = document.getElementById('leftPage');
const leftContent = document.getElementById('leftContent');
const leftPageNum = document.getElementById('leftPageNum');

const rightPage = document.getElementById('rightPage');
const rightContent = document.getElementById('rightContent');
const rightPageNum = document.getElementById('rightPageNum');

document.addEventListener('DOMContentLoaded', () => {
  showCover();

  setTimeout(() => {
    const ring = document.querySelector('.pulse-ring');
    if (ring) ring.classList.add('visible');
  }, 3000);
});

function showCover() {
  const coverImage = document.getElementById('coverImage');
  coverImage.src = pages[0].content;
  coverImage.alt = pages[0].alt;
}

function startComic() {
  const ring = document.querySelector('.pulse-ring');
  if (ring) ring.classList.remove('visible');

  document.getElementById('comicContainer').classList.remove('cover-mode');
  document.getElementById('comicBook').style.display = 'flex';
  document.getElementById('coverPage').style.display = 'none';

  updatePageContent();
}

function updatePageContent() {
  const isMobile = window.innerWidth <= 768;
  const currentPage = pages[currentPageIndex];

  updateSinglePage(leftPage, leftContent, currentPage, leftPageNum, currentPageIndex + 1);

  if (!isMobile && pages[currentPageIndex + 1]) {
    updateSinglePage(rightPage, rightContent, pages[currentPageIndex + 1], rightPageNum, currentPageIndex + 2);
    rightPage.style.display = 'flex';
  } else {
    rightPage.style.display = 'none';
  }
}

function updateSinglePage(pageEl, contentEl, data, pageNumEl, num) {
  if (data?.content) {
    contentEl.innerHTML = `
      <div class="image-content">
        <img src="${data.content}" alt="${data.alt}" class="comic-image" onerror="handleImageError(this)">
      </div>`;
  } else {
    contentEl.innerHTML = `<div class="image-content"><div class="image-placeholder">Bild fehlt</div></div>`;
  }
  pageNumEl.textContent = num;
}

function handleImageError(img) {
  img.parentElement.innerHTML = '<div class="image-placeholder">Bild nicht gefunden</div>';
}

function nextPage() {
  const isMobile = window.innerWidth <= 768;
  const step = isMobile ? 1 : 2;
  if (currentPageIndex + step < pages.length) {
    currentPageIndex += step;
    updatePageContent();
  }
}

function previousPage() {
  const isMobile = window.innerWidth <= 768;
  const step = isMobile ? 1 : 2;
  if (currentPageIndex - step >= 1) {
    currentPageIndex -= step;
    updatePageContent();
  }
}

// Touch-/Klick-Navigation für mobile Geräte
document.getElementById('comicBook').addEventListener('click', () => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    nextPage();
  }
});

// Optional: Tastatursteuerung auf Desktop
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') previousPage();
  else if (e.key === 'ArrowRight') nextPage();
});