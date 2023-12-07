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

document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validation(this) == true) {
      // document.querySelector(".popup").style.display = "none";
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

const comments = () => {
  return [
    {
      img: "/utils/images/person-1.png",
      fullname: "Адилов Таиржан",
      text: `В свои 30 лет решил освоить программирование.Никогда не сталкивался и понятия не имел что это такое. Данный курс
      в целом очень даже не плохой, мне нравится то, что практики больше, чем теории. Изначально я ожидал, что курс
      будет проходить, как уроки в школе, что тебе будут все разжевывать и объяснять от А до Я, как по мне курс рассчитан 
      что 60-75% информации более детально, ты сам должен изучить,так как преподаватель дает базовые знания в каждой 
      лекции, а более глубже ты должен капать сам,точно так же как в университете - 20% дает лектор, а остальные 80% 
      ищет и изучает сам студент,лично мое мнение. Думаю это правильный подход. Где-то я могу ошибаться, что 
      преподаватель дает базовые знания,так как я такой человек, который привык, что мне все объясняют индивидуально 
      и от корки до корки ))))`,
    },
    {
      img: "/utils/images/person-2.png",
      fullname: "Қабдешов Толағай",
      text: `Курс Python от qazdev впечатляет своей структурой и методикой преподавания. 
      Материал логичен и понятен, что значительно облегчает усвоение информации. Ожидания оправдались, 
      я получил много полезных знаний. Желал бы более широкого покрытия определенных тем и больше практики, 
      но в целом опыт обучения остается положительным. Благодарен за возможность углубить свои знания в Python.`,
    },
    {
      img: "/utils/images/person-3.png",
      fullname: "Блинов Евгений",
      text: `Курс превзошел мои ожидания, предоставив комплексное погружение в мир программирования на Python. 
      Очень благодарен менторам и наставникам за структурированный материал, который делает изучение простым 
      и увлекательным. Особенно ценю практический подход к обучению. 
      Возможность немедленно применять полученные знания через интересные проекты помогает лучше усвоить материал. 
      Преподаватели четко объясняют сложные концепции, делая их доступными даже для начинающих.

      В целом, курс оставил положительное впечатление, и я чувствую, что приобрел необходимые навыки программирования на Python. Благодарю команду DevPractice за отличную работу!`,
    },
    {
      img: "/utils/images/person-4.png",
      fullname: "Шатный Андрей",
      text: `Курс оказался исключительно полезным и информативным. Благодаря практико-ориентированному подходу, 
      я смог не только освоить теоретические аспекты языка программирования Python, 
      но и приобрести ценный опыт решения реальных задач. 
      Интерактивные упражнения и проекты позволили мне углубить понимание материала и развить навыки решения проблем. 
      Особенно мне запомнилось задание, связанное с разработкой приложения для списка дел с использованием Tkinter. 
      Это задание дало мне практические навыки работы с графическим интерфейсом пользователя и понимание сложностей, 
      связанных с обработкой исключений и управлением файлами. Также, 
      курс предложил множество заданий различной сложности, что помогло мне научиться адаптировать решения под разные 
      задачи и условия.`,
    },
    {
      img: "/utils/images/person-5.png",
      fullname: "Ермакбаева Елизавета",
      text: `Курс понравился. Классная обратная связь, в случае затруднительных моментов всегда можно обратиться 
      к преподавателю. Очень нравится обратная связь куратора, всегда выдает информацию вовремя и понятно ее структурирует, 
      отделяет для нас домашние задания, что облегчает процесс их поиска. 
      Очень интересная и понятная подача материала. Оперативный и понятный ответ преподавателя, что в случае затруднительных вопросов все расскажет, покажет и разъяснит по полочкам.`,
    },
    {
      img: "/utils/images/person-6.png",
      fullname: "Досимбекова Лаура",
      text: `Курс довольно емкий, интенсивный, ну и не легкий как оказалось мне) надо постоянно учить, изучать. Сразу 
      на домашнем задании практиковать. Курс включает в себе широкий спектр материалов и практических заданий, предоставляют всеми необходимы инструментами для обучения.  
      Куратор и преподаватели постоянно на связи, готовы помочь решить любые возникшие вопросы и разобрать касательно новых тем , такой подход обратной  связи дает возможность качественно получить  знание. Одна 
      из возможности обучиться каждому не смотря на занятость. Хочется дальше развивать и обучаться не останавливаться на этом. Выражаю огромную благодарность данной программе и школе.`,
    },
    {
      img: "/utils/images/person-7.png",
      fullname: "Сарсенбаев Тойлыбай",
      text: `Курс мне действительно нравится. Хочу выделить высокое качество съемки видеоуроков – это приятно, что обучение проходит с таким вниманием к деталям. Материалы организованы грамотно, их легко усваивать. 
      Преподаватель – прекрасный человек, спокойный, с хорошим юмором и готовностью всегда помочь и ответить на интересующие вопросы. Его поддержка значительно облегчает учебный процесс. Особенно ценю его доступность в онлайн созвонах, где он готов отвечать на вопросы касательно домашней работы и даже объяснять темы снова, если что-то не было понятно в видео-лекциях.
      В целом, мои ожидания оправдались. Начиная с базового уровня, курс постепенно усложняется, что помогает развивать навыки. Я бы с удовольствием рекомендовал этот курс.`,
    },
    {
      img: "/utils/images/person-8.png",
      fullname: "Зиянова Кымбат",
      text: `Курс меня действительно впечатляет. Особенно хочу выделить организацию и стиль преподавания, а также системность и структурированность материала – это аспекты, 
      которые мне особенно приглянулись.`,
    },
  ];
};
const allComments = comments();

const wrapper = document.querySelector(".item-5__wrapper");

allComments.forEach((comment) => {
  const commentWrapper = document.createElement("div");
  commentWrapper.className = "item-5__wrapper-items";

  const imgElement = document.createElement("img");
  imgElement.src = comment.img;
  imgElement.alt = "people";

  const commentTextWrapper = document.createElement("div");
  commentTextWrapper.className = "item-5__wrapper-comment";

  const h5Element = document.createElement("h5");
  h5Element.textContent = comment.fullname;

  const pElement = document.createElement("p");
  pElement.textContent = comment.text;

  commentTextWrapper.appendChild(h5Element);
  commentTextWrapper.appendChild(pElement);

  commentWrapper.appendChild(imgElement);
  commentWrapper.appendChild(commentTextWrapper);

  wrapper.appendChild(commentWrapper);
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item-5__wrapper-items");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}
