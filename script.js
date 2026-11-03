const dialog=document.querySelector('#reviews');document.querySelector('#reviews-open').addEventListener('click',()=>dialog.showModal());document.querySelectorAll('#reviews .close,#reviews-close').forEach(button=>button.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});

// Категория электросамокатов и галереи товаров
const scootersDialog = document.querySelector('#scooters');
const scootersOpen = document.querySelector('#scooters-open');
function openScooters() { scootersDialog.showModal(); scootersDialog.scrollTop = 0; }
scootersOpen.addEventListener('click', openScooters);
scootersOpen.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openScooters(); } });
scootersDialog.querySelector('.catalog-close').addEventListener('click', () => scootersDialog.close());
scootersDialog.addEventListener('click', event => { if(event.target === scootersDialog) { const r = scootersDialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) scootersDialog.close(); } });
document.querySelectorAll('.product-thumb').forEach(button => button.addEventListener('click', () => {
 const gallery = button.closest('.product-gallery');
 const main = gallery.querySelector('.product-main');
 main.src = button.dataset.image;
 main.alt = button.getAttribute('aria-label');
 gallery.querySelectorAll('.product-thumb').forEach(thumb => { thumb.classList.toggle('active', thumb === button); thumb.setAttribute('aria-pressed', String(thumb === button)); });
}));

// Каталог детского транспорта
const kidsDialog = document.querySelector('#kids-catalog');
const kidsOpen = document.querySelector('#kids-open');
function openKids() { kidsDialog.showModal(); kidsDialog.scrollTop = 0; }
kidsOpen.addEventListener('click', openKids);
kidsOpen.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openKids(); } });
kidsDialog.querySelector('.catalog-close').addEventListener('click', () => kidsDialog.close());
kidsDialog.addEventListener('click', event => { if (event.target === kidsDialog) { const r = kidsDialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) kidsDialog.close(); } });
// Вариант меняется только у выбранной модели. Фотогалерея общая для двух размеров.
document.querySelectorAll('.hoverboard-card .variant-button').forEach(button => button.addEventListener('click', () => {
 const card = button.closest('.hoverboard-card');
 const size = button.dataset.size;
 const large = size === '10.5';
 card.dataset.variant = size;
 card.querySelector('.variant-power').textContent = large ? '1000 Вт' : '500 Вт';
 card.querySelector('.product-price').textContent = large ? '11 500 ₽' : '9 500 ₽';
 card.querySelectorAll('.variant-button').forEach(option => { option.classList.toggle('active', option === button); option.setAttribute('aria-pressed', String(option === button)); });
 const buy = card.querySelector('.product-buy');
 buy.href = 'https://wa.me/79057538954?text=' + encodeURIComponent('Здравствуйте! Интересует ' + card.dataset.model + ' ' + size);
 buy.setAttribute('aria-label', 'Купить ' + card.dataset.model + ' ' + size + ' — написать Хасану в WhatsApp');
}));

// Запчасти: покрышки открываются по умолчанию.
const partsDialog = document.querySelector('#parts-catalog');
const partsOpen = document.querySelector('#parts-open');
function selectParts(key) {
 partsDialog.querySelectorAll('.parts-filter').forEach(button => { const active = button.dataset.parts === key; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
 partsDialog.querySelectorAll('.parts-panel').forEach(panel => { panel.hidden = panel.id !== 'parts-' + key; });
}
function openParts() { selectParts('tires'); partsDialog.showModal(); partsDialog.scrollTop = 0; }
partsOpen.addEventListener('click', openParts);
partsOpen.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openParts(); } });
partsDialog.querySelector('.catalog-close').addEventListener('click', () => partsDialog.close());
partsDialog.querySelectorAll('.parts-filter').forEach(button => button.addEventListener('click', () => selectParts(button.dataset.parts)));
partsDialog.addEventListener('click', event => { if (event.target === partsDialog) { const r = partsDialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) partsDialog.close(); } });
