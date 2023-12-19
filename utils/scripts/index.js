function validation(form) {
  function createError(input, text) {
    input.setAttribute("placeholder", text);
    input.classList.add("error");
  }

  function removeError(input) {
    input.removeAttribute("placeholder");
    input.classList.remove("error");
  }

  let result = true;

  form.querySelectorAll("input").forEach((input) => {
    const fieldName = input.getAttribute("name");

    if (input.value == "") {
      createError(input, `Заполните поле "${fieldName}"`);
      result = false;
    } else {
      removeError(input);
    }
  });

  return result;
}

const popups = document.querySelector(".popup");
document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validation(this) == true) {
      popups.style.display = "none";
      alert("Данные успешно отправлены");
      const inputs = this.querySelectorAll("input");

      for (const input of inputs) {
        input.value = "";
        input.removeAttribute("placeholder");
      }
      setTimeout(() => {
        for (const input of inputs) {
          const fieldName = input.getAttribute("name");
          input.setAttribute("placeholder", `${fieldName}`);
        }
      }, 0);
    }
  });

function openPopup() {
  let popup = document.querySelector(".popup");
  popup.style.display = "flex";
}
function closePopup() {
  let popup = document.querySelector(".popup");
  popup.style.display = "none";
}

function openMenu() {
  let popup = document.querySelector(".menu-popup");
  popup.style.display = "flex";
}
function closeMenu() {
  let popup = document.querySelector(".menu-popup");
  popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector(".input-phone");
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  IMask(inputElement, maskOptions);
});

function hide(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("hide") == -1) {
    x.className += " hide";
  } else {
    x.className = x.className.replace(" hide", "");
  }
}
function plusOrMinus(id) {
  const coll = document.getElementById(id);
  if (coll.className.indexOf("plus") == -1) {
    coll.className += " plus";
    coll.className = coll.className.replace("minus", "");
  } else {
    coll.className += " minus";
    coll.className = coll.className.replace("plus", "");
  }
}
