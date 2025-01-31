function headerFixed() {
  const header = document.querySelector(".header__fixed");
  const advantages = document.querySelector(".advantages");
  const advantagesHeight = advantages.offsetHeight;

  window.addEventListener("scroll", () => {
    const scrollDistance = window.scrollY;
    const isWideScreen = window.innerWidth > 480;

    // Определяем пороги в зависимости от ширины экрана
    const activateThreshold = isWideScreen ? advantagesHeight - 700 : advantagesHeight - 1200;
    const deactivateThreshold = isWideScreen ? advantagesHeight + 350 : advantagesHeight - 200;

    if (scrollDistance >= activateThreshold) {
      header.classList.add("header__fixed--active");
    } else {
      header.classList.remove("header__fixed--active");
    }

    if (scrollDistance >= deactivateThreshold) {
      header.classList.remove("header__fixed--active");
    }
  });
}

headerFixed();


export default headerFixed;
