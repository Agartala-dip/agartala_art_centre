// Display time-based greeting
window.onload = function () {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greetingText = "";

  if (hour < 12) {
    greetingText = "🌅 Good Morning! Welcome to Agartala Art Centre.";
  } else if (hour < 18) {
    greetingText = "☀️ Good Afternoon! Keep creating beautiful art!";
  } else {
    greetingText = "🌙 Good Evening! Relax with your imagination and colors.";
  }

  greetingElement.textContent = greetingText;
};
window.onload = function () {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greetingText = "";

  if (hour < 12) {
    greetingText = "🌅 Good Morning! Welcome to Agartala Art Centre.";
  } else if (hour < 18) {
    greetingText = "☀️ Good Afternoon! Keep creating beautiful art!";
  } else {
    greetingText = "🌙 Good Evening! Relax with your imagination and colors.";
  }

  greetingElement.textContent = greetingText;
};