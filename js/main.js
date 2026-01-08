const contactBtn = document.querySelector(".Contact");
const contactBox = document.querySelector(".info-box");
const closeBtn = document.getElementById("CloseContact");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  contactBox.classList.remove("active");
});
