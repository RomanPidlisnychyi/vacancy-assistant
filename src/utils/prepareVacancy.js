export const prepareVacancy = vacancy => {
  const preperedVacancy = { ...vacancy };

  delete preperedVacancy.date;
  delete preperedVacancy._id;
  delete preperedVacancy.status;
  delete preperedVacancy.userId;
  delete preperedVacancy.__v;
  delete preperedVacancy.favorite;
  delete preperedVacancy.task;

  return Object.keys(preperedVacancy);
};
