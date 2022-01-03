const buttons0rder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');
const order = overlayOrder.querySelector('.modal__order');

buttons0rder.forEach((button0rder) => {
  button0rder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
    order.value = button0rder.dataset.order;
  });
})

overlayOrder.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active');
  }
});








