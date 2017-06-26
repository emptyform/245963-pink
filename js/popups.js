var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var formButton = document.querySelector(".field-action__btn");
var popupButton = document.querySelectorAll(".popup__btn");

formButton.addEventListener("click", function(event) {
  event.preventDefault();
  if(!document.getElementsByName("name")[0].value
    && !document.getElementsByName("surname")[0].value
    && !document.getElementsByName("email")[0].value) {
      popupFailure.classList.add("popup--show");
  } else {
    popupSuccess.classList.add("popup--show");
  }
});

for (var i = 0; i < popupButton.length; i++) {
  popupButton[i].addEventListener("click", function(event) {
    if (popupSuccess.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
    } else if (popupFailure.classList.contains("popup--show")) {
      popupFailure.classList.remove("popup--show");
    }
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupSuccess.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
    } else if (popupFailure.classList.contains("popup--show")) {
      popupFailure.classList.remove("popup--show");
    }
  }
});
