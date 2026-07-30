const selectors = '.btn-r-1, .btn-r-2';
const selectorsActive = '.btn-r-1.active, .btn-r-2.active';

document.querySelectorAll(selectors).forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('active')) {
      document.querySelector(selectorsActive)?.classList.remove('active');
      button.classList.add('active');
    }
  });
});

function changePdf(pdfFile) {
  document.getElementById('pdf-viewer').src = pdfFile;
}
