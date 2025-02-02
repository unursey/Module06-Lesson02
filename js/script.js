"use strict";

document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <label class="form-group m-5">
    <input type="text" class="form-control" 
    name="task" placeholder="Введите текст">
  </label>

  <p class="text m-3">Здесь должен появиться Ваш текст.</p>
  `
);



// input.addEventListener('input', () => {
//   if (input.value.trim() !== '') {
//     setTimeout(() => {
//       p.textContent = input.value;
//       clearTimeout();
//     }, 300);
//   } else {
//     input.value = '';
//     input.focus();
//   }
// });

const foo = () => {
  const p = document.querySelector(".text");
  const input = document.querySelector(".form-control");

  input.focus();

  let t;

  input.addEventListener('input', () => {
    clearTimeout(t);

    t = setTimeout(() => {
      p.textContent = input.value;
    }, 300);
  });
};

foo();
