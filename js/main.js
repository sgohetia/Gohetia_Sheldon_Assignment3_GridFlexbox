(function () {
  console.log("linked!"); //This means that our JS is connected

  //This function here is for the burger menu icon toggled when the user clicks
  // main.js
  const burgerMenu = document.querySelector("#burger-menu");
  const mobileNavLinks = document.querySelector("#mobile-nav-links");

  burgerMenu.addEventListener("click", function () {
    mobileNavLinks.classList.toggle("hidden");
  });
})();
