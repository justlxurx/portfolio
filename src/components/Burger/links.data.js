import uncover from "./../../assets/images/uncover.svg";

export const headerLinks = [
  {
    title: "О НАС",
    path: "/",
  },
  {
    title: "СТРАНЫ",
    image: uncover,
    subMenu: [
      { title: "Шенгенская зона", path: "/shengen" },
      { title: "Другие страны", path: "/others" },
    ],
  },
  {
    title: "УСЛУГИ",
    image: uncover,
    subMenu: [
      { title: "Страхование", path: "/services/insurance" },
      {
        title: "Переводы и нотариальное заверение",
        path: "/services/translations",
      },
      { title: "Многократные шенген визы", path: "/services/shengen-visas" },
      { title: "Апостилирование диплома", path: "/services/apostille" },
      {
        title: "Бронирование отелей и авиабилетов",
        path: "/services/hotel-flights",
      },
      {
        title: "Проверка документов",
        path: "/services/document-verification",
      },
    ],
  },
  {
    title: "частые вопросы",
    path: "/faq",
  },
  {
    title: "ОТЗЫВЫ",
    path: "/feedback",
  },
  {
    title: "КОНТАКТЫ",
    path: "/contact",
  },
];
