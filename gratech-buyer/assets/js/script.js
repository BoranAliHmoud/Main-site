/*-----------------------------------------------------------------

Template Name: Gratech - IT Service HTML Template
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Gratech - IT Service HTML5 Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. header
03. swiper slider
04. animated text with swiper slider
05. shop products count
06. image src change
07. hide & show a div
08. isotope
09. add class & remove class
10. magnificPopup
11. back to top
12. data backgrund
13. coundown by click
14. remove products
15. wow animation

------------------------------------------------------------------*/
var lang = $("html").attr("lang");

const keywords = {
  "terms-condition": {
    en: "Terms & Condition",
    ar: "الشروط والأحكام",
  },
  "privacy-policy": {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  DIGITRENDBS: {
    en: "DIGITRENDBS",
    ar: "التوجه الرقمي لحلول الاعمال",
  },
  "All-Copyright": {
    en: "All Copyright 2024",
    ar: "جميع الحقوق محفوظة 2024",
  },
  "Phone-Call": {
    en: "Phone Call",
    ar: "رقم الهاتف",
  },
  "E-Mail": {
    en: "E-Mail:",
    ar: "البريد الإلكتروني:",
  },
  address: {
    en: "Mohammad bin Abdulaziz Road, AlJedaie Office - Riyadh - KSA",
    ar: "طريق محمد بن عبدالعزيز، مكتب الجديعي - الرياض - المملكة العربية السعودية",
  },
  "Contact-Us": {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  "Quick-Link": {
    en: "Quick Link",
    ar: "روابط سريعة",
  },
  "About-Digitrend": {
    en: "About Digitrend",
    ar: "حول التوجه الرقمي لحلول الاعمال",
  },
  "Our-Services": {
    en: "Our Services",
    ar: "خدماتنا",
  },
  "data-security": {
    en: "Data Security",
    ar: "أمن البيانات",
  },
  "cyber-security": {
    en: "Cyber Security",
    ar: "الأمن السيبراني",
  },
  "web-development": {
    en: "Web Development",
    ar: "تطوير المواقع",
  },
  "seo-optimization": {
    en: "SEO Optimization",
    ar: "تحسين محركات البحث",
  },
  "it-management": {
    en: "IT Management",
    ar: "إدارة تقنية المعلومات",
  },
  services: {
    en: "Services",
    ar: "الخدمات",
  },
  about: {
    en: "About",
    ar: "حول",
  },
  AboutInfo: {
    en: "At Digitrend for Business solution , we are dedicated to helping businesses thrive in the digital age.",
    ar: "في شركة التوجه الرقمي لحلول الاعمال ، نحن ملتزمون بمساعدة الشركات على الازدهار في العصر الرقمي.",
  },
  contact: {
    en: "Contact",
    ar: "محتوى",
  },
  "IT-Solution": {
    en: "IT Solution",
    ar: "حلول تقنية المعلومات",
  },
};
function getKeyword(keyword) {
  return keywords[keyword]
    ? keywords[keyword][lang] || keywords[keyword].en
    : keyword;
}
var imagePath;

var urlPath;
var imageDir;
$(window).on("load", function () {
  var pathParts = window.location.pathname.split("/");
  imagePath = pathParts.length > 3 ? "../assets/images/" : "assets/images/";
  urlPath = pathParts.length > 3 ? "../" : "";

  if (lang === "ar") {
    imageDirRight = "left";
    imageDirLeft = "right";
  } else {
    imageDirRight = "right";
    imageDirLeft = "left";
  }
  $("body").prepend(
    `<header class="header-area">
        <div class="container header__container">
            <div class="header__main">
                <a href="${urlPath}index.html" class="logo">
                <img src="${imagePath}logo/logo.png" alt="logo">
                </a>
                <div class="main-menu">
                    <nav>
                        <ul>
                            <li><a href="${urlPath}about.html">${getKeyword(
      "about"
    )}</a></li>
                            <li>
                                <a href="#0">${getKeyword("services")}</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="${urlPath}service-solutions.html">IT Solutions</a>
                                    </li>
                                    <li>
                                        <a href="${urlPath}service.html">IT Services</a>
                                    </li>
                                    <li>
                                        <a href="${urlPath}service-details.html">Service Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="${urlPath}contact.html"> ${getKeyword(
      "contact"
    )}</a></li>
							 <li class="ml-20 d-none d-lg-block"><a class="search-trigger" href="#0"><svg width="17"
                                        height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_307_344)">
                                            <path
                                                d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
                                                fill="#fff" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_307_344">
                                                <rect width="16.2222" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </header>`
  );

  //Footer
  $("body").append(`<footer class="footer-area secondary-bg">
        <div class="footer-images footer__shape-regular-${imageDirLeft} wow slideIn${imageDirLeft}" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img src="${imagePath}shape/footer-regular-${imageDirLeft}.png" alt="shape">
        </div>
        <div class="footer-images footer__shape-solid-${imageDirLeft} wow slideIn${imageDirLeft}" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="${imagePath}shape/footer-solid-${imageDirLeft}.png" alt="shape">
        </div>
        <div class="footer-images footer__shape-solid-${imageDirRight} wow slideIn${imageDirRight}" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="${imagePath}shape/footer-regular-${imageDirRight}.png" alt="shape">
        </div>
        <div class="footer-images footer__shape-regular-${imageDirRight} wow slideIn${imageDirRight}" data-wow-delay="200ms" data-wow-duration="1500ms">
            <img src="${imagePath}shape/footer-solid-${imageDirRight}.png" alt="shape">
        </div>
        <div class="footer-images footer__shadow-shape">
            <img src="${imagePath}shape/footer-shadow-shape.png" alt="shodow">
        </div>
        <div class="container">
            <div class="footer__wrp pt-100 pb-100">
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <a href="index.html" class="logo mb-30">
                        <img src="${imagePath}/logo/logo.png" alt="image">
                    </a>
                    <p>
                    ${getKeyword("AboutInfo")}
                     </p>
                    <div class="social-icon">
                        <a href="#0"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#0"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#0"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#0"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">${getKeyword("IT-Solution")}</h3>
                    <ul>
                        <li><a href="${urlPath}service-details.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i> ${getKeyword("it-management")}</a></li>
                        <li><a href="${urlPath}service-details.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i>${getKeyword("seo-optimization")} </a>
                        </li>
                        <li><a href="${urlPath}service-details.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i>${getKeyword("web-development")} </a>
                        </li>
                        <li><a href="${urlPath}service-details.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i>${getKeyword("cyber-security")} </a></li>
                        <li><a href="${urlPath}service-details.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i>${getKeyword("data-security")} 
                                 </a></li>
                    </ul>
                </div>
                <div class="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">${getKeyword("Quick-Link")}</h3>
                    <ul>
                        <li><a href="about.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i>${getKeyword("About-Digitrend")}  </a></li>
                        <li><a href="service.html"><i class="fa-regular fa-angles-${imageDirRight} me-1"></i> ${getKeyword("Our-Services")}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">  ${getKeyword("Contact-Us")}</h3>
                    <p class="mb-20">             ${getKeyword(
                      "address"
                    )}    </p>
                    <ul class="footer-contact">
                        <li>
                            <i class="fa-regular fa-envelope"></i>
                            <div class="info">
                                <h5>
                                                            ${getKeyword(
                                                              "E-Mail"
                                                            )}     
 
                                </h5>
                                <p>info@digitrendbs.com​</p>
                            </div>
                        </li>
                        <li>
                            <i class="fa-duotone fa-phone"></i>
                            <div class="info">
                                <h5>
                             ${getKeyword("Phone-Call")}     
                                </h5>
                                <p>+966-533011408</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="container">
                <div
                    class="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center"> 
                    <p class="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; ${getKeyword(
                      "All-Copyright"
                    )}
                        by <a href="#0">${getKeyword("DIGITRENDBS")} </a></p>
                    <ul class="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <li><a href="#0">${getKeyword(
                          "terms-condition"
                        )}</a></li>
                        <li><a href="#0">${getKeyword(
                          "privacy-policy"
                        )} </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <div class="scroll-up">
        <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>`);
});
(function ($) {
  ("use strict");
  // Preloader area start here ***
  paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
  };

  Pace.on("done", function () {
    $("#preloader").addClass("isdone");
    $(".loading").addClass("isdone");
  });
  // Preloader area end here ***

  // Mouse cursor area start here ***
  function mousecursor() {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
  $(function () {
    mousecursor();
  });
  // Mouse cursor area end here ***

  // Header area start here ***
  // Mobile menu
  $(".header-area nav").meanmenu();
  // Menu Fixed
  var fixed_top = $(".header-area");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
    } else {
      fixed_top.removeClass("menu-fixed fadeInDown");
    }
  });
  // Header area end here ***

  // Menu active one page js area start here ***
  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop();

    $("section").each(function () {
      var offsetTop = $(this).offset().top;
      var height = $(this).height();
      var id = $(this).attr("id");

      if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
        $('nav a[href="#' + id + '"]').addClass("primary-color");
      } else {
        $('nav a[href="#' + id + '"]').removeClass("primary-color");
      }
    });
  });
  // Menu active one page js area end here ***

  // Dark mood area start here ***
  function setThemeColor(color) {
    const root = document.documentElement;
    root.setAttribute("data-theme", color);
  }
  // Dark mood area end here ***

  // FullScreen search area end here ***
  var $searchWrap = $(".search-wrap");
  var $navSearch = $(".nav-search");
  var $searchClose = $("#search-close");

  $(".search-trigger").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).addClass("open");
  });

  $(".search-close").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).removeClass("open");
  });

  function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
  }

  $(document.body).on("click", function (e) {
    closeSearch();
  });

  $(".search-trigger, .main-search-input").on("click", function (e) {
    e.stopPropagation();
  });
  // FullScreen search area end here ***

  // Banner Two slider area end here ***
  var sliderActive1 = ".banner__slider";
  var sliderInit1 = new Swiper(sliderActive1, {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner__dot",
      clickable: true,
    },
  });
  // Here this is use for animate ***
  function animated_swiper(selector, init) {
    var animated = function animated() {
      $(selector + " [data-animation]").each(function () {
        var anim = $(this).data("animation");
        var delay = $(this).data("delay");
        var duration = $(this).data("duration");
        $(this)
          .removeClass("anim" + anim)
          .addClass(anim + " animated")
          .css({
            webkitAnimationDelay: delay,
            animationDelay: delay,
            webkitAnimationDuration: duration,
            animationDuration: duration,
          })
          .one("animationend", function () {
            $(this).removeClass(anim + " animated");
          });
      });
    };
    animated();
    init.on("slideChange", function () {
      $(sliderActive1 + " [data-animation]").removeClass("animated");
    });
    init.on("slideChange", animated);
  }
  animated_swiper(sliderActive1, sliderInit1);
  // Banner Two slider area end here ***

  // Case slider area start here ***
  var swiper = new Swiper(".case__slider", {
    loop: "true",
    spaceBetween: 24,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".case__dot",
      clickable: true,
    },
  });
  var swiper = new Swiper(".case-two__slider", {
    loop: "true",
    spaceBetween: 24,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".case__arry-next",
      prevEl: ".case__arry-prev",
    },
    breakpoints: {
      1440: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  // Case slider area end here ***

  // Brand slider area start here ***
  var swiper = new Swiper(".brand__slider", {
    loop: "true",
    spaceBetween: 30,
    speed: 300,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  // Brand slider area end here ***

  // Testimonial area start here ***
  var swiper = new Swiper(".testimonial__slider", {
    loop: "true",
    spaceBetween: 30,
    speed: 300,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial__arry-next",
      prevEl: ".testimonial__arry-prev",
    },
  });
  var swiper = new Swiper(".testimonial-two__slider", {
    loop: "true",
    spaceBetween: 24,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".testimonial__dot",
      clickable: true,
    },
  });
  var swiper = new Swiper(".testimonial-three__slider", {
    loop: "true",
    spaceBetween: 24,
    speed: 300,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".testimonial-three__arry-next",
      prevEl: ".testimonial-three__arry-prev",
    },
  });
  // Testimonial area end here ***

  // Service slider area start here ***
  var swiper = new Swiper(".service-two__slider", {
    loop: "true",
    spaceBetween: 30,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service__arry-next",
      prevEl: ".service__arry-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
  // Service slider area end here ***

  // Hide & show by clicks js area start here ***
  $(document).on("click", "#openButton", function () {
    $("#targetElement").removeClass("sidebar__hide");
  });
  $(document).on("click", "#closeButton", function () {
    $("#targetElement").addClass("sidebar__hide");
  });
  // Hide & show by clicks js area end here ***

  // Hover over the elements with the class "service__item"
  $(".service__item").hover(
    // Function to run when the mouse enters the element
    function () {
      // Remove the "active" class from all elements
      $(".service__item").removeClass("active");
      // Add the "active" class to the currently hovered element
      $(this).addClass("active");
    }
  );
  // Hover add & remove js area end here ***

  // Background image date area start here ***
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
  // Background image date area end here ***

  // Video popup area start here ***
  $(".video-popup").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },

      srcAction: "iframe_src",
    },
  });
  // Video popup area end here ***

  // Counter up area start here ***
  $(".count").counterUp({
    delay: 30,
    time: 3000,
  });
  $(".progress-count").counterUp({
    delay: 30,
    time: 1000,
  });
  // Counter up area end here ***

  // Nice seclect area start here ***
  $(document).ready(function () {
    $("select").niceSelect();
  });
  // Nice seclect area end here ***

  // Footer image popup start here ***
  $(".footer-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // Footer image popup end here ***

  // Back to top area start here ***
  var scrollPath = document.querySelector(".scroll-up path");
  var pathLength = scrollPath.getTotalLength();
  scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
  scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
  scrollPath.style.strokeDashoffset = pathLength;
  scrollPath.getBoundingClientRect();
  scrollPath.style.transition = scrollPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updatescroll = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scroll = pathLength - (scroll * pathLength) / height;
    scrollPath.style.strokeDashoffset = scroll;
  };
  updatescroll();
  $(window).scroll(updatescroll);
  var offset = 50;
  var duration = 950;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".scroll-up").addClass("active-scroll");
    } else {
      jQuery(".scroll-up").removeClass("active-scroll");
    }
  });
  jQuery(".scroll-up").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });
  // Back to top area end here ***

  // WOW Animatin area start here ***
  new WOW().init();
  // WOW Animatin area start here ***
})(jQuery);
