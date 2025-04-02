let dropdownOpened = false;

function handleDropdownClick(event) {
  if (window.matchMedia("(pointer: coarse)").matches) {
    if (!dropdownOpened) {
      event.preventDefault(); // Prevent immediate navigation
      dropdownOpened = true; // Mark dropdown as opened
    } else {
      dropdownOpened = false; // Reset state after activation
    }
  }
}
