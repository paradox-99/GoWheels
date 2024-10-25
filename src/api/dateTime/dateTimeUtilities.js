

export const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

export const getMaxDate = () => {
    const today = new Date();
    const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
    const maxYYYY = nextMonth.getFullYear();
    const maxMM = String(nextMonth.getMonth() + 1).padStart(2, '0');
    const maxDD = String(nextMonth.getDate()).padStart(2, '0');
    return `${maxYYYY}-${maxMM}-${maxDD}`;
};

export const getNowTime = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
};

export const calculateMaxUntilDate = (selectedDate) => {
    const selectedDateObj = new Date(selectedDate);
    const maxDateObj = new Date(selectedDateObj.setDate(selectedDateObj.getDate() + 10));
    const maxYYYY = maxDateObj.getFullYear();
    const maxMM = String(maxDateObj.getMonth() + 1).padStart(2, '0');
    const maxDD = String(maxDateObj.getDate()).padStart(2, '0');
    return `${maxYYYY}-${maxMM}-${maxDD}`;
};

export const calculateMinUntilTime = (selectedTimeValue) => {
    const fromTimeObj = new Date(`1970-01-01T${selectedTimeValue}`);
    fromTimeObj.setHours(fromTimeObj.getHours() + 10);

    const minHours = String(fromTimeObj.getHours()).padStart(2, "0");
    const minMinutes = String(fromTimeObj.getMinutes()).padStart(2, "0");
    
    return `${minHours}:${minMinutes}`;
};

export const calculateHoursDifference = (fromDate, fromTime, untilDate, untilTime) => {
    const fromDateTime = new Date(`${fromDate}T${fromTime}`);
    const untilDateTime = new Date(`${untilDate}T${untilTime}`);
    const timeDiff = (untilDateTime - fromDateTime) / (1000 * 60 * 60);
    const absoluteTimeDiff = Math.ceil(timeDiff);
    return absoluteTimeDiff
}

export const calculateTimeDifference = (startTime, endTime) => {

    const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;

  let diffMinutes = endTotalMinutes - startTotalMinutes;

  if (diffMinutes < 0) {
    diffMinutes += 24 * 60;
  }
  const diffHours = diffMinutes / 60;
  return diffHours;
}