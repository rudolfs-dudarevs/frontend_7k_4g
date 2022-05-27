document.cookie = "sessionId=kjhdfkjhn546534dsfdfsdsf";

let date = new Date();
// date.setDate(date.getDate() + 5);
// console.log(date);
date.setHours(date.getHours() + 1);

document.cookie = `sessionId=kjhdfkjhn546534dsfdfsdsf; expires=${date}`;

console.log(document.cookie);

