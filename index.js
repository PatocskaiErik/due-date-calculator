const isWeekend = (date) => {
  return date.getUTCDay() === 6 || date.getUTCDay() === 0;
};

const isOutOfWorkingHours = (date) => {
  return date.getUTCHours() < 9 || date.getUTCHours() >= 17;
};

const calculateDueDate = (date, turnaround) => {
  const turnaroundInMinutes = turnaround * 60;

  if (isWeekend(date)) {
    return "It's weekend";
  }

  if (isOutOfWorkingHours(date)) {
    return "Out of working hours";
  }

  let counter = 0;

  if (!isWeekend(date) || isOutOfWorkingHours(date)) {
    counter++;
  }
  if (counter < turnaroundInMinutes) {
    date.setUTCMinutes(date.getUTCMinutes() + 1);
  }
  return date;
};

const inputDate = new Date(Date.UTC(2022, 4, 8, 15, 0));
console.log(calculateDueDate(inputDate, 30));
