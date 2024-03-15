function solution(fees, records) {
  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
  const calculate = (time) => {
    const [hour, min] = time.split(":").map(Number);
    return hour * 60 + min;
  };
  const obj = {};
  for (let i = 0; i < records.length; i++) {
    const [시각, 차량번호, 내역] = records[i].split(" ");
    if (내역 === "IN" && 차량번호 in obj) {
      obj[차량번호]["상태"] = "IN";
      obj[차량번호]["입차시간"] = calculate(시각);
    } else if (내역 === "IN") {
      obj[차량번호] = {
        상태: "IN",
        입차시간: calculate(시각),
        주차시간: 0,
      };
    } else if (내역 === "OUT") {
      obj[차량번호]["주차시간"] += calculate(시각) - obj[차량번호]["입차시간"];
      obj[차량번호]["상태"] = "OUT";
    }
  }

  for (const [차량번호, value] of Object.entries(obj)) {
    if (value["상태"] === "IN") {
      obj[차량번호]["주차시간"] += calculate("23:59") - obj[차량번호]["입차시간"];
    }
  }

  const answer = [];
  const arr = Object.entries(obj).sort((a, b) => a[0] - b[0]);
  for (let [차량번호, value] of arr) {
    if (value["주차시간"] < 기본시간) {
      answer.push(기본요금);
    } else {
      const 금액 = 기본요금 + Math.ceil((value["주차시간"] - 기본시간) / 단위시간) * 단위요금;
      answer.push(금액);
    }
  }
  return answer;
}
