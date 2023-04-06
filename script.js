// Wait for the DOM to load before running the script
$(document).ready(function () {
    const form = document.getElementById('gift-list-form');
    const giftList = document.getElementById('gift-list');
    const giftNameInput = document.getElementById('gift-name-input');
    const giftLinkInput = document.getElementById('gift-link-input');
  
    // Add a new gift item to the list
    function addGiftItem(name, link) {
      const li = document.createElement('li');
      li.innerHTML = `<a class="text-orange-500 hover:text-orange-700" href="${link}" target="_blank">${name}</a>`;
      giftList.querySelector('ul').appendChild(li);
    }
  
    // Handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = giftNameInput.value.trim();
      const link = giftLinkInput.value.trim();
      if (name && link) {
        addGiftItem(name, link);
        giftNameInput.value = '';
        giftLinkInput.value = '';
        giftNameInput.focus();
      }
    });
  });
  