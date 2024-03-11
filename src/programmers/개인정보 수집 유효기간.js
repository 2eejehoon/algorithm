function solution(today, terms, privacies) {
  const answer = [];
  const termObj = {};
  for (let i = 0; i < terms.length; i++) {
    const [type, month] = terms[i].split(" ");
    termObj[type] = Number(month) * 28;
  }
  const [yearOfToday, monthOfToday, dayOfToday] = today.split(".").map(Number);
  const daysOfToday = yearOfToday * 12 * 28 + monthOfToday * 28 + dayOfToday;
  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(" ");
    const [year, month, day] = date.split(".").map(Number);
    const days = year * 12 * 28 + month * 28 + day;
    if (days - daysOfToday + termObj[type] <= 0) {
      answer.push(i + 1);
    }
  }
  return answer;
}
