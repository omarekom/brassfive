const gallerySections = document.querySelectorAll('.gallery-section');
const photosGrids = document.querySelectorAll('.photos-grid');

const storeInitialHeights = () => {
  // Opening
  gallerySections.forEach(section => {
    section.classList.remove('roll-closed');
  });
  // Storing heights of photo grids
  photosGrids.forEach(grid => {
    grid.dataset.initialHeight = grid.clientHeight;
  });
  // Default closing
  gallerySections.forEach(section => {
    section.classList.add('roll-closed');
  });
}
storeInitialHeights();

// Each time window resizes initial heights must be remeasured
window.addEventListener('resize', storeInitialHeights);


// Adding buttons
gallerySections.forEach(section => {
  // open
  let btnOpen = document.createElement('a');
  btnOpen.classList.add('roll-control', 'roll-btn-open');
  btnOpen.innerHTML = 'Zobrazit více fotek <div style="display: flex; align-items: center; width: 1em; margin-left: 0.2em;"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>';

  // close
  let btnClose = document.createElement('a');
  if(section.id) {
    // btnClose.href = '#' + section.id;
  }
  btnClose.classList.add('roll-control', 'roll-btn-close');
  btnClose.innerHTML = 'Méně fotek <div style="display: flex; align-items: center; width: 1em; margin-left: 0.2em;"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></div>';

  // adding
  section.appendChild(btnOpen);
  section.appendChild(btnClose);
});

const rollOpenBtns = document.querySelectorAll('.roll-btn-open');
const rollCloseBtns = document.querySelectorAll('.roll-btn-close');

// Making buttons work
rollOpenBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const photosGrid = btn.parentElement.querySelector('.photos-grid');
    photosGrid.style.maxHeight = photosGrid.dataset.initialHeight + 'px';
    // class for hiding right btns
    photosGrid.parentElement.classList.remove('roll-closed');
  });
});

rollCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const photosGrid = btn.parentElement.querySelector('.photos-grid');
    photosGrid.style.maxHeight = '';
    // class for hiding right btns
    photosGrid.parentElement.classList.add('roll-closed');

    // scrolling
    const headerHeight = document.querySelector('header').clientHeight;
    const sectionDistanceToTop = window.pageYOffset + photosGrid.parentElement.getBoundingClientRect().top;
    window.scroll(0, sectionDistanceToTop - headerHeight);
  });
});
