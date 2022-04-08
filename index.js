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
  while (counter < turnaroundInMinutes) {
    date.setUTCMinutes(date.getUTCMinutes() + 1);
    if (!(isWeekend(date) || isOutOfWorkingHours(date))) {
      counter++;
    }
  }
  return date;
};

const inputDate = new Date(Date.UTC(2022, 5, 2, 15, 10));
console.log(calculateDueDate(inputDate, 10));
