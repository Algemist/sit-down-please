import noUiSlider from "nouislider";
const rangeSlider = document.getElementById("range-slider");
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 200000,
    },
  });

  const input1 = document.getElementById("range-input-1");
  const input2 = document.getElementById("range-input-2");
  const inputs = [input1, input2];
  const handles = document.querySelectorAll(".noUi-handle");
  const connect = document.querySelector(".noUi-connect");

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });

  const rangeInputs = document.querySelectorAll(".custom-range__digit");
const tagsContainer = document.getElementById("catalog-tags");

  if (rangeInputs) {
    rangeInputs.forEach((el) => {
      el.addEventListener("change", () => {
        const tag = document.createElement("div");
        const tagText = document.createElement("span");
        const tagCloseIcon = document.createElement("button");

        tag.classList.add("tag");
        tag.style.backgroundColor = '#fff5d1';
        el.previousElementSibling.textContent == 'до' ? tag.id = 'range-before' : tag.id = 'range-after';
        tagText.classList.add("tag__value");
        tagCloseIcon.classList.add("tag__icon");
        tagCloseIcon.classList.add("btn-reset");
        tagCloseIcon.addEventListener("click", (el) => {
          el.target.parentElement.id == 'range-before' ? document.getElementById('range-slider').noUiSlider.set([null, 200000]) : document.getElementById('range-slider').noUiSlider.set([0, null]);
          el.target.parentElement.remove();
        });
        tagText.textContent = el.previousElementSibling.textContent + ' ' + el.value;
        tag.append(tagText, tagCloseIcon);
        if (document.getElementById(tag.id)) {
          document.getElementById(tag.id).remove();
        }
        tagsContainer.append(tag);
      });
    });
  }

  handles.forEach((el) => {
    el.addEventListener('focus', () => {
      connect.style.background = 'var(--primary-shade)';
    });

    el.addEventListener('blur', () => {
      connect.style.background = 'var(--primary)';
    })
  });
}
