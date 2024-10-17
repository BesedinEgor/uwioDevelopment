function headerFixed() {
  const header = document.querySelector(".header__fixed");
  const advantages = document.querySelector(".advantages");

  const advantagesHeight = advantages.offsetHeight;
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= advantagesHeight - 600) {
      header.classList.add("header__fixed--active");
    } else {
      header.classList.remove("header__fixed--active");
    }
  });
}

export default headerFixed;
