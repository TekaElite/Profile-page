const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayIndex = new Date().getDay();
const currentDay = daysOfWeek[currentDayIndex];
const currentUTCTime = new Date().toUTCString();

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDay;
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  currentUTCTime;
