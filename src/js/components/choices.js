const goodsChoices = new Choices(document.getElementById('goods-select'), {
  allowHTML: true,
  itemSelectText: '',
   shouldSort: false,
   position: 'bottom',
   searchEnabled: false,
});

const regionChoices = new Choices(document.getElementById('region-select'), {
  allowHTML: true,
  itemSelectText: '',
   shouldSort: false,
   position: 'bottom',
   searchEnabled: false,
   placeholder: true,
});

let input = document.querySelector(".input--header");
let icon = document.querySelector(".search");

input.addEventListener("input", () => {
  if (input.value !== "") icon.style.fill = "var(--primary)";
  else icon.style.fill = "var(--grey)";
});

