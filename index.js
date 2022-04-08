const isWeekend = (date) => {
  return date.getUTCDay() === 6 || date.getUTCDay() === 0;
};

const isOutOfWorkingHours = (date) => {
  return date.getUTCHours() < 9 || date.getUTCHours() >= 17;
};
