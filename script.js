document.addEventListener("DOMContentLoaded", () => {
  const boxElement = document.getElementById("animatedBox");

  // Add the "show" class to trigger the animation
  setTimeout(() => {
    boxElement.classList.add("show");
  }, 500); // Delay before animation starts
});
