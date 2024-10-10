window.addEventListener("load", function(){
  'use strict';

  /* =======================
  // Menu
  ======================= */

  /* Pour que le menu suive le scroll */
  const header = document.querySelector('.header');
  const compactClass = 'compact';
  const scrollTrigger = 100; // Distance en pixels à partir de laquelle le menu devient compact
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollTrigger) {
      header.classList.add(compactClass); // Ajoute la classe pour réduire la taille du menu
    } else {
      header.classList.remove(compactClass); // Retire la classe si on revient en haut de la page
    }
  });

  /* pour que le contenu suive la taille du menu en haut de page */
  window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
  
    function adjustContentPadding() {
      const headerHeight = header.offsetHeight;
      mainContent.style.paddingTop = `${headerHeight}px`;
    }
  
    // Ajuste la marge au chargement et au redimensionnement
    window.addEventListener('load', adjustContentPadding);
    window.addEventListener('resize', adjustContentPadding);
  });
  


  /* Menu normal fait par auteur */ 
  var body = document.querySelector("body"),
  contactBox = document.querySelector(".contact-modal"),
  contactOpenButton = document.querySelector(".cta-button"),
  contactCloseButton = document.querySelector(".contact-close"),
  menuOpenIcon = document.querySelector(".nav__icon-menu"),
  menuCloseIcon = document.querySelector(".nav__icon-close"),
  menuList = document.querySelector(".main-nav");

  menuOpenIcon.addEventListener("click", () => {
    menuOpen();
  });

  menuCloseIcon.addEventListener("click", () => {
    menuClose();
  });

  // contactOpenButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   contactOpen();
  // });

  // contactCloseButton.addEventListener("click", (e) => {
  //   contactClose();
  // });

  function menuOpen() {
    menuList.classList.add("is-open");
  }

  function menuClose() {
    menuList.classList.remove("is-open");
  }

  function contactOpen() {
    contactBox.classList.add("is-visible");
    menuList.classList.remove("is-open");
  }

  function contactClose() {
    contactBox.classList.remove("is-visible");
  }


  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    body.classList.add("is-in");
  },150)


  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 300);
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off), .project-content iframe:not(.reframe-off)");


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page img, .post img, .project-content img"),
  imageLink = document.querySelectorAll(".page a img, .post a img, .project-content a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense), .project-content img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* ============================
  // Smooth scrolling to section
  ============================ */
  document.querySelectorAll(".author__btn").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });


  /* ============================
  // Testimonials Slider
  ============================ */
  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: 1,
      gutter: 32,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1024: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ============================
  // iTyped
  ============================ */
  if (document.querySelector(".subscribe")) {
    var options = {
      strings: itype_text,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      onFinished: function(){}
    }

    ityped.init('#ityped', options);
  }


  /* ============================
  // Scroll to top
  ============================ */
  const btnScrollToTop = document.querySelector(".top");

  window.addEventListener("scroll", function () {
    window.scrollY > window.innerHeight ? btnScrollToTop.classList.add("is-active") : btnScrollToTop.classList.remove("is-active");
  });

  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});