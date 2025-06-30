function user() {
  let num = Math.floor(Math.random() * 10 + 1);
  let computer = parseInt(document.getElementById("computer").value);
  let text = document.getElementById("text");

  if (computer === num) {
    text.innerHTML = "you have won";
  } else {
    text.innerHTML = "computer generated: " + num;
  }
}
