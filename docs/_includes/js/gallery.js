function resizeGalleries() {
  document.querySelectorAll('.gallery-wrapper').forEach(function(grid) {
    layoutGallery(grid);
  });
}

function layoutGallery(grid) {
  const items = Array.from(grid.querySelectorAll(':scope > .gallery'));
  if (!items.length) return;

  grid.classList.remove('is-masonry');
  grid.style.removeProperty('--gallery-layout-height');
  grid.style.setProperty('--gallery-count', items.length);

  items.forEach(function(item) {
    item.style.removeProperty('position');
    item.style.removeProperty('top');
    item.style.removeProperty('left');
    item.style.removeProperty('width');
  });

  const styles = window.getComputedStyle(grid);
  const columns = styles.getPropertyValue('grid-template-columns').split(' ').filter(Boolean);
  const columnCount = Math.max(1, columns.length);
  const columnWidth = parseFloat(columns[0]);
  const gap = parseFloat(styles.getPropertyValue('column-gap')) || 0;
  const paddingTop = parseFloat(styles.getPropertyValue('padding-top')) || 0;
  const paddingRight = parseFloat(styles.getPropertyValue('padding-right')) || 0;
  const paddingBottom = parseFloat(styles.getPropertyValue('padding-bottom')) || 0;
  const paddingLeft = parseFloat(styles.getPropertyValue('padding-left')) || 0;
  const columnHeights = Array(columnCount).fill(paddingTop);

  if (!columnWidth) return;

  grid.classList.add('is-masonry');

  items.forEach(function(item) {
    const column = columnHeights.indexOf(Math.min.apply(null, columnHeights));
    const left = paddingLeft + column * (columnWidth + gap);
    const top = columnHeights[column];

    item.style.position = 'absolute';
    item.style.left = left + 'px';
    item.style.top = top + 'px';
    item.style.width = columnWidth + 'px';

    columnHeights[column] = top + item.getBoundingClientRect().height + gap;
  });

  const contentBottom = Math.max.apply(null, columnHeights) - gap;
  const layoutHeight = contentBottom + paddingBottom;
  grid.style.setProperty('--gallery-layout-height', layoutHeight + 'px');
}

function closeGalleryLightbox() {
  const lightbox = document.querySelector('.gallery-lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('is-open');
  document.body.classList.remove('gallery-lightbox-open');
  window.setTimeout(function() {
    lightbox.remove();
  }, 180);
}

function openGalleryLightbox(item) {
  const image = item.querySelector('.gallery-image');
  const caption = item.querySelector('figcaption');
  if (!image) return;

  closeGalleryLightbox();

  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = `
    <figure class="gallery-lightbox-card">
      <img class="gallery-lightbox-image" src="${image.currentSrc || image.src}" alt="${image.alt || ''}">
      ${caption ? `<figcaption class="gallery-lightbox-caption">${caption.innerHTML}</figcaption>` : ''}
    </figure>
  `;

  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) closeGalleryLightbox();
  });

  document.body.appendChild(lightbox);
  document.body.classList.add('gallery-lightbox-open');
  requestAnimationFrame(function() {
    lightbox.classList.add('is-open');
  });
}

function setupGalleryLightbox() {
  document.querySelectorAll('.gallery-wrapper > .gallery').forEach(function(item) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('click', function() {
      openGalleryLightbox(item);
    });
    item.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openGalleryLightbox(item);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  resizeGalleries();
  setupGalleryLightbox();

  window.addEventListener('load', resizeGalleries);
  window.addEventListener('resize', resizeGalleries);

  document.querySelectorAll('.gallery-image').forEach(function(image) {
    image.addEventListener('load', resizeGalleries);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeGalleryLightbox();
  });
});
