// max-height is set for each [data-photos-grid]
// grid is closed when .photos-grid--closed is applied

const grids = [...document.querySelectorAll('[data-photos-grid]')];

const closeAllGrids = () => {
	for (const grid of grids) {
		grid.classList.add('photos-grid--closed');
	}
};

const refreshFullHeights = () => {
	for (const grid of grids) {
		const wasClosed = grid.classList.contains('photos-grid--closed');
		grid.classList.remove('photos-grid--closed');
		grid.style.maxHeight = `unset`;
		grid.style.maxHeight = `${grid.clientHeight}px`;
		if (wasClosed)
			grid.classList.add('photos-grid--closed');
	}
};



const renderBtns = () => {
	for(const grid of grids) {
		const btnOpen = document.createElement('button');
		const btnClose = document.createElement('button');
		btnOpen.classList.add('roll-btn');
		btnClose.classList.add('roll-btn', 'roll-btn--close');
		btnOpen.innerHTML = 'Zobrazit více fotek <div style="display: flex; align-items: center; width: 1em; margin-left: 0.2em;"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>';
		btnClose.innerHTML = 'Méně fotek <div style="display: flex; align-items: center; width: 1em; margin-left: 0.2em;"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></div>';
		btnOpen.addEventListener('click', () => grid.classList.remove('photos-grid--closed'));
		btnClose.addEventListener('click', () => grid.classList.add('photos-grid--closed'));
		grid.parentElement.appendChild(btnOpen);
		grid.parentElement.appendChild(btnClose);
	}

};

let refreshTimout = undefined;
const initAutoRefreshAfterResize = () => {
	const refreshDebounce_MS = 1300;
	const debounceRefresh = () => {
		clearTimeout(refreshTimout);
		refreshTimout = setTimeout(refreshFullHeights, refreshDebounce_MS);
	};
	window.addEventListener('resize', debounceRefresh);
};

const initGarellyRoll = () => {
	renderBtns();
	refreshFullHeights();
	closeAllGrids();
	initAutoRefreshAfterResize();
};

initGarellyRoll();
