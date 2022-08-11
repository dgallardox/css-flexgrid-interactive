let flexSelect = document.getElementById('flex-select');
let root = document.querySelector(":root");

flexSelect.addEventListener('change', function () {
  flexSelection = flexSelect.options[flexSelect.selectedIndex].text;
  root.style.setProperty("--flexSelection", flexSelection);
}
);