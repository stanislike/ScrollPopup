let isAtTheBottom =
  window.innerHeight + window.scrollY >= document.body.offsetHeight;

let scrollValue =
  ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100;

let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "60px";
  } else if (window.scrollY === 0) {
    navbar.style.height = "90px";
  }

  if (scrollValue >= 45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  if (isAtTheBottom && playOnce) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
  } else {
    popup.style.opacity = "0";
    popup.style.transform = "translate(400px)";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translate(400px)";
  playOnce = false;
});
