const forward_page1 = document.getElementsByClassName("forward_page1");
const forward_page2 = document.getElementsByClassName("forward_page2");

const page_1 = document.getElementById("page_1");
const page_2 = document.getElementById("page_2");

page_1.style.display = "block";
page_2.style.display = "none";

Array.from(forward_page1).forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    page_1.style.display = "block";
    page_2.style.display = "none";
  });
});

Array.from(forward_page2).forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    page_2.style.display = "block";
    page_1.style.display = "none";
  });
});