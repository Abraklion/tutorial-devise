
const btnMap = document.querySelector(".info__map");
const btnFeedback = document.querySelector(".info__contacts .info__button");

const modalFeedback = document.querySelector(".modal--feedback_off");
const modalMap = document.querySelector(".modal--map_off");

const btnMapClose = document.querySelector(".modal--map_off .modal__close");
const btnFeedbackClose = document.querySelector(".modal--feedback_off .modal__close");


// Показывает модальное окно c картой при клике на кнопку
btnMap.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalMap.classList.remove("modal--map_off");
  modalMap.classList.add("modal--map_on");
})

// Скрываем модальное окно c картой при клике на кнопку закрыть
btnMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalMap.classList.remove("modal--map_on");
  modalMap.classList.add("modal--map_off");
})


// Показывает модальное окно обратной связи при клике на кнопку "Напишите нам"
btnFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalFeedback.classList.remove("modal--feedback_off");
  modalFeedback.classList.add("modal--feedback_on");
})

// Скрываем модальное окно обратной связи при клике на кнопку закрыть
btnFeedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalFeedback.classList.remove("modal--feedback_on");
  modalFeedback.classList.add("modal--feedback_off");
})
