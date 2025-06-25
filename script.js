function checkCode() {
  const code = [
    document.getElementById("digit1").value,
    document.getElementById("digit2").value,
    document.getElementById("digit3").value,
    document.getElementById("digit4").value
  ].join("");

  if (code === "0210") {
    document.getElementById("lock-screen").classList.add("hidden");
    const msgScreen = document.getElementById("message-screen");
    msgScreen.classList.remove("hidden");
    setTimeout(() => msgScreen.classList.add("show"), 100); // petite transition
  } else {
    document.getElementById("hint").classList.remove("hidden");
  }
}