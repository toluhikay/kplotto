const test = document.querySelectorAll(".draw-dates");

test.forEach((cur) => {
  cur.addEventListener("click", (event) => {
    const selected_draw = event.currentTarget.closest("div").childNodes[3];

    selected_draw.classList.toggle("active");
  });
});

let nav = document.querySelector(".hamburger-menu");
let nextHeader = document.querySelector(".next-header");


nav.addEventListener("click", ()=>{
    nextHeader.classList.toggle("slide");
});
