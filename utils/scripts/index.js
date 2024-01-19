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
// document
//   .getElementById("add-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     if (validation(this) == true) {
//       popups.style.display = "none";
//       alert("Данные успешно отправлены");
//       const inputs = this.querySelectorAll("input");

//       for (const input of inputs) {
//         input.value = "";
//         input.removeAttribute("placeholder");
//       }
//       setTimeout(() => {
//         for (const input of inputs) {
//           const fieldName = input.getAttribute("name");
//           input.setAttribute("placeholder", `${fieldName}`);
//         }
//       }, 0);
//     }
//   });
document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validation(this)) {
      // Получение данных формы
      const formData = new FormData(this);

      // Опции запроса
      const options = {
        method: "POST", // Метод запроса (замените на "GET" или "PUT", если необходимо)
        body: formData, // Данные формы
      };

      // Отправка зdапроса
      fetch("sendmail.php", options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Опционально: обработка ответа в формате JSON
        })
        .then((data) => {
          // Обработка успешного ответа от сервера
          popups.style.display = "none";
          alert("Данные успешно отправлены");

          // Сброс значений полей формы
          const inputs = this.querySelectorAll("input");
          for (const input of inputs) {
            input.value = "";
            input.removeAttribute("placeholder");
          }

          // Восстановление placeholder после задержки
          setTimeout(() => {
            for (const input of inputs) {
              const fieldName = input.getAttribute("name");
              input.setAttribute("placeholder", `${fieldName}`);
            }
          }, 0);
        })
        .catch((error) => {
          // Обработка ошибок
          console.error(
            "There was an error during the fetch operation:",
            error
          );
        });
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

document
  .getElementById("video-container")
  .addEventListener("click", function () {
    const video = document.getElementById("intro-video-wrapper");
    video.style.display = "flex";
    video.play();
  });

document
  .getElementById("intro-video-wrapper")
  .addEventListener("click", function () {
    const videoWrapper = document.getElementById("intro-video-wrapper");
    const video = document.querySelector(".intro-video");
    videoWrapper.style.display = "none";
    video.pause();
  });
