const comments = () => {
  return [
    {
      img: "/utils/images/person-1.png",
      fullname: "Адилов Таиржан",
      text: `В 30 лет решил освоить программирование. Данный курс мне нравится: больше практики, чем теории. Ожидал классического урока, но курс рассчитан на самостоятельное изучение (60-75% информации). Преподаватель дает базовые знания, а глубже нужно копать самому — похоже на университетский подход, где лектор дает 20%, а студент исследует остальные 80%. Это мне подходит, хотя привык к индивидуальному обучению.`,
    },
    {
      img: "/utils/images/person-2.png",
      fullname: "Қабдешов Толағай",
      text: `Курс Python от qazdev впечатляет своей структурой и методикой преподавания. Материал логичен и понятен, 
что значительно облегчает усвоение информации. Ожидания оправдались, 
я получил много полезных знаний. 
Желал бы более широкого покрытия определенных тем и больше практики, 
но в целом опыт обучения остается положительным. Благодарен за возможность углубить свои знания в Python.`,
    },
    {
      img: "/utils/images/person-3.png",
      fullname: "Блинов Евгений",
      text: `Курс Python от qazdev впечатляет своей структурой и методикой преподавания. Материал логичен и понятен, 
что значительно облегчает усвоение информации. Ожидания оправдались, 
я получил много полезных знаний. 
Желал бы более широкого покрытия определенных тем и больше практики, 
но в целом опыт обучения остается положительным. Благодарен за возможность углубить свои знания в Python.`,
    },
    {
      img: "/utils/images/person-4.png",
      fullname: "Шатный Андрей",
      text: `Практико-ориентированный подход позволил освоить теорию Python и получить опыт решения реальных задач. Интерактивные упражнения и проекты углубили понимание материала и развили навыки решения проблем. Особенно запомнилось создание приложения списка дел с использованием Tkinter — это дало опыт работы с GUI и понимание обработки исключений и управления файлами. `,
    },
    {
      img: "/utils/images/person-5.png",
      fullname: "Ермакбаева Елизавета",
      text: `Курс понравился. Очень нравится обратная связь куратора, всегда выдает информацию вовремя и понятно ее структурирует, отделяет для нас домашние задания, что облегчает процесс их поиска. 
Очень интересная и понятная подача материала. Оперативный и понятный ответ преподавателя, что в случае затруднительных вопросов все расскажет, покажет и разъяснит по полочкам.`,
    },
    {
      img: "/utils/images/person-6.png",
      fullname: "Досимбекова Лаура",
      text: `Курс интенсивный и содержательный, требует постоянного обучения и практики. Кураторы и преподаватели всегда на связи, готовы помочь и разъяснить новые темы, обеспечивая качественное обучение. Программа доступна для всех, даже при занятости. Желание продолжать развиваться и учиться не иссякает. Благодарю программу и школу за возможность обучения.`,
    },
    {
      img: "/utils/images/person-7.png",
      fullname: "Сарсенбаев Тойлыбай",
      text: `Курс впечатляет. Высокое качество видеоуроков и внимание к деталям делают обучение приятным. Материалы организованы грамотно и легко усваиваются. Преподаватель — отличный специалист, доброжелательный и готовый помочь. Его поддержка в онлайн созвонах значительно облегчает учебный процесс. Курс соответствует ожиданиям, постепенно усложняясь и развивая навыки. Рекомендую этот курс.`,
    },
    {
      img: "/utils/images/person-8.png",
      fullname: "Зиянова Кымбат",
      text: `Курс меня действительно впечатляет. Особенно хочу выделить организацию и стиль преподавания, а также системность и структурированность материала – это аспекты, которые мне особенно приглянулись.`,
    },
  ];
};
const allComments = comments();

const container = document.querySelector(".item-5");
//const wrapper = document.querySelector(".item-5__wrapper");
const topWrapper = document.createElement("div");
topWrapper.className = "item-5-top";

const headerWrapper = document.createElement("div");
headerWrapper.className = "item-5__heading";

const span = document.createElement("span");
span.className = "add-dot";

const textElement = document.createElement("p");
textElement.textContent = "Отзывы наших учеников";

const buttonWrapper = document.createElement("div");
buttonWrapper.className = "item-5-slider-button-wrapper";

const button1 = document.createElement("button");
button1.className = "item-5-button-left";
button1.setAttribute("onclick", "plusDivs(-1)");

const button2 = document.createElement("button");
button2.className = "item-5-button-right";
button2.setAttribute("onclick", "plusDivs(1)");

const blocksWrapper = document.createElement("div");
blocksWrapper.className = "item-5-button";

headerWrapper.appendChild(span);
headerWrapper.appendChild(textElement);
buttonWrapper.appendChild(button1);
buttonWrapper.appendChild(button2);
topWrapper.appendChild(headerWrapper);
topWrapper.appendChild(buttonWrapper);
container.appendChild(topWrapper);
container.appendChild(blocksWrapper);

allComments.forEach((comment) => {
  const item5 = document.createElement("div");
  item5.className = "item-5__wrapper";

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

  item5.appendChild(commentWrapper);
  blocksWrapper.appendChild(item5);
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
    slideIndex = slideIndex - 1;
  }
  if (n < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < x.length; i++) {
    //x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}
