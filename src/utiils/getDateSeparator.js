"use strict";
const getDateSeparator = (dateString, prevDateString) => {
  const messageDateFormated = new Date(dateString);
  const currentDateFormated = new Date();

  const messageDate = new Date(
    messageDateFormated.getFullYear(),
    messageDateFormated.getMonth(),
    messageDateFormated.getDate(),
  );
  const currentDate = new Date(
    currentDateFormated.getFullYear(),
    currentDateFormated.getMonth(),
    currentDateFormated.getDate(),
  );

  const difference = Math.round(
    (currentDate - messageDate) / (1000 * 60 * 60 * 24),
  );

  const prevDate = new Date(prevDateString)
  if (messageDate.toDateString() === prevDate.toDateString()) {
    return null;
  }

  switch (difference) {
    case 0:
      return "Today";
    case 1:
      return "Yesterday";
    default:
      return messageDateFormated.toLocaleDateString("ru-Ru", {
        day: "numeric",
        month: "long",
      });
  }
};

export default getDateSeparator;
