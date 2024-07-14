export const getId = (pathname) => {
  try {
    const segments = pathname.split("/");
    const id = segments[segments.length - 2]; // Получаем предпоследний сегмент
    return id;
  } catch (err) {
    return "error";
  }
};

export const getIdFromURL = (pathname) => {
  try {
    const id = pathname.substring(pathname.lastIndexOf("/") + 1); // Получаем последний сегмент
    return id;
  } catch (err) {
    return "";
  }
};

export const showOrHide = (review, showAllComments) => {
  let visibleComments;

  if (showAllComments) {
    visibleComments = review || []; // Проверяем, что review не является undefined
    return visibleComments;
  } else {
    visibleComments = [];
    if (review) {
      for (let i = 0; i < Math.min(review.length, 3); i++) {
        visibleComments.push(review[i]);
      }
    }
    return visibleComments;
  }
};

