const inputs = document.querySelectorAll(".catalog__checkbox");
const tagsContainer = document.getElementById("catalog-tags");

if (inputs) {
  inputs.forEach((el) => {
    el.addEventListener("change", () => {
      if (el.checked) {
        const tag = document.createElement("div");
        const tagText = document.createElement("span");
        const tagCloseIcon = document.createElement("button");

        tag.classList.add("tag");
        tag.id = el.value;
        tagText.classList.add("tag__value");
        tagCloseIcon.classList.add("tag__icon");
        tagCloseIcon.classList.add("btn-reset");

        if (el.classList.contains('catalog__checkbox_color')) tag.style.backgroundColor = '#eaeaea';
        if (el.classList.contains('catalog__checkbox_discount')) tag.style.backgroundColor = '#ebd1ff';


        tagCloseIcon.addEventListener("click", function () {
          closeOnIcon(el.value);
        });
        el.parentNode.textContent.trim() == "Не важно"
          ? (tagText.textContent = "Без скидки")
          : (tagText.textContent = el.parentNode.textContent.trim());
        tag.append(tagText, tagCloseIcon);
        tagsContainer.append(tag);
      } else {
        const tag = document.getElementById(el.value);
        tag.remove();
      }
    });
  });
}

function closeOnIcon(str) {
  const input = document.querySelectorAll(`input[value=${str}]`);
  const tag = document.getElementById(str);
  input.forEach((el) => {
    el.checked = false;
  });
  tag.remove();
}
