var Failure = document.querySelector(".popup--failure");
var Success = document.querySelector(".popup--success");
var Btn = document.querySelector(".field-action__btn");
var PopupBtn = document.querySelectorAll(".popup__btn");

Btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(!document.getElementsByName("name")[0].value
    && !document.getElementsByName("surname")[0].value
    && !document.getElementsByName("email")[0].value) {
      Failure.classList.add("popup--show");
  } else {
    Success.classList.add("popup--show");
  }
});

for (var i = 0; i < PopupBtn.length; i++) {
  PopupBtn[i].addEventListener("click", function(event) {
    if (Success.classList.contains("popup--show")) {
      Success.classList.remove("popup--show");
    } else if (Failure.classList.contains("popup--show")) {
      Failure.classList.remove("popup--show");
    }
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (Success.classList.contains("popup--show")) {
      Success.classList.remove("popup--show");
    } else if (Failure.classList.contains("popup--show")) {
      Failure.classList.remove("popup--show");
    }
  }
});
