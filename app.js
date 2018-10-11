const accordionItemsEl = document.getElementsByClassName('accordion__item');

function accordion() {
  for (const item of accordionItemsEl) {
    const accHeader = item.firstElementChild;
    accHeader.addEventListener('click', function () {
      const accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) {
        accDetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = '+';
      } else {
        accDetails.style.maxHeight = `${accDetails.scrollHeight}px`;
        this.lastElementChild.innerHTML = '-';
      }
    });
  }
}

accordion();
