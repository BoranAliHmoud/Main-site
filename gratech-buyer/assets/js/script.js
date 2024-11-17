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
  addressjor: {
    en: "64  Queen Nour Street – Amman - Jordan ",
    ar: "64 شارع الملكة نور – عمان – الأردن ",
  },
  "Contact-Us": {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  "Contact-new": {
    en: "Contact us",
    ar: "تواصل معنا",
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
    en: "About us",
    ar: "من نحن",
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
  "technical-solutions": {
    en: "Technical Solutions",
    ar: "الحلول التقنية",
  },
  "digital-transformation": {
    en: "Digital Transformation",
    ar: "التحول الرقمي",
  },
  consultancy: {
    en: "Consultancy",
    ar: "الإستشارات",
  },
  "artificial-intelligence": {
    en: "Artificial Intelligence",
    ar: "الذكاء الصناعي",
  },
  "geographic-information-system": {
    en: "Geographic Information System",
    ar: "نظام المعلومات الجغرافية",
  },
  "manpower-outsourcing-services": {
    en: "Manpower Outsourcing Services",
    ar: "خدمات الاستعانة بمصادر خارجية للقوى العاملة",
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

function switchLanguage(lang) {
  const currentURL = window.location.href;
  const baseUrl = "http://127.0.0.1:5500/gratech-buyer";
  const pathArray = currentURL.split("/");
  const pageName = pathArray[pathArray.length - 1];
  const isArabic = pathArray.includes("ar");

  if (lang === "ar" && !isArabic) {
    // Switch to Arabic version by adding '/ar/'
    window.location.href = `${baseUrl}/ar/${pageName}`;
  } else if (lang === "en" && isArabic) {
    // Switch to English version by removing '/ar/'
    pathArray.splice(pathArray.indexOf("ar"), 1); // Remove 'ar' from path
    window.location.href = pathArray.join("/");
  }
}

// Attach click events to the buttons using jQuery

$(window).on("load", function () {
  // Get the current path to determine if we are in Arabic or not
  const pathParts = window.location.pathname.split("/");
  const isArabic = pathParts.includes("ar"); // Check if the current URL includes "/ar/"

  // Base URL for your site (gratech-buyer folder)
  const baseUrl = "http://127.0.0.1:5500/gratech-buyer";

  // This determines if we're working in Arabic or English
  const urlPath = isArabic ? "/ar/" : "/";

  // Dynamically calculate image path based on current location
  let imagePath = "assets/images/"; // Default image path (no subdirectories)

  // Check if we are in the Arabic folder ('/ar/')
  if (isArabic) {
    if (pathParts.length < 5) imagePath = "../assets/images/";
    else if (pathParts.length >= 5) imagePath = "../../assets/images/";
  } else {
    if (pathParts.length < 4) imagePath = "assets/images/";
    else if (pathParts.length >= 4) imagePath = "../assets/images/";
  }

  // Toggle left/right based on language
  let imageDirRight, imageDirLeft;
  if (lang === "ar") {
    imageDirRight = "left";
    imageDirLeft = "right";
  } else {
    imageDirRight = "right";
    imageDirLeft = "left";
  }

  // Prepend header with dynamic navigation
  $("body").prepend(
    `<header class="header-area">
        <div class="container header__container">
            <div class="header__main">
                <a href="${baseUrl}${urlPath}index.html" class="logo">
                <img src="${imagePath}logo/logo.png" alt="logo">
                </a>
                <div class="main-menu">
                    <nav>
                        <ul>
                            <li><a href="${baseUrl}${urlPath}about.html">${getKeyword(
      "about"
    )}</a></li>
                            <li>
                                <a href="${baseUrl}${urlPath}services/service.html">${getKeyword(
      "services"
    )}</a>
                               
                            </li>
                            <li><a href="${baseUrl}${urlPath}contact.html">${getKeyword(
      "Contact-new"
    )}</a></li>
                            <li class="ml-20 d-none d-lg-block">
                                <button class='lang-btn' id="ar-button">عربي<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="img" aria-labelledby="languageIconTitle" stroke="#fff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#fff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg> </button>
                                <button class='lang-btn' id="en-button">English<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="img" aria-labelledby="languageIconTitle" stroke="#fff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#fff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg> </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>`
  );
  if (isArabic) {
    $("#ar-button").hide(); // Hide the Arabic button if we're already on the Arabic page
    $("#en-button").show(); // Show the English button
  } else {
    $("#ar-button").show(); // Show the Arabic button
    $("#en-button").hide(); // Hide the English button if we're on the English page
  }
  // Language toggle buttons
  $("#ar-button").click(function () {
    switchLanguage("ar");
  });

  $("#en-button").click(function () {
    switchLanguage("en");
  });

  // Handle language switching
  function switchLanguage(lang) {
    let currentURL = window.location.href;
    const isInArabic = currentURL.includes("/ar/");

    let newURL = currentURL;

    // Check if we need to add or remove '/ar/'
    if (lang === "ar" && !isInArabic) {
      // If switching to Arabic, add '/ar/' to the URL
      newURL = currentURL.replace(baseUrl, baseUrl + "/ar");
    } else if (lang === "en" && isInArabic) {
      // If switching to English, remove '/ar/'
      newURL = currentURL.replace("/ar", "");
    }

    // Redirect to the new language URL
    window.location.href = newURL;
  }

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
                       
                        <a href="https://www.linkedin.com/company/digitrendbs" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">${getKeyword("Our-Services")}</h3>
                    <ul>
                        <li><a href="${baseUrl}${urlPath}services/technical-solutions.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i> ${getKeyword("technical-solutions")}</a></li>
                        <li><a href="${baseUrl}${urlPath}services/digital-transformation.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("digital-transformation")}</a></li>
                        <li><a href="${baseUrl}${urlPath}services/consultancy.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("consultancy")}</a></li>
                        <li><a href="${baseUrl}${urlPath}services/artificial-intelligence.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("artificial-intelligence")} </a></li>
                        <li><a href="${baseUrl}${urlPath}services/manpower-outsourcing-services.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("manpower-outsourcing-services")}</a></li>
                        <li><a href="${baseUrl}${urlPath}services/geographic-information-system.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("geographic-information-system")}</a></li>
                    </ul>
                </div>
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">${getKeyword("Quick-Link")}</h3>
                    <ul>
                        <li><a href="about.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i>${getKeyword("About-Digitrend")}  </a></li>
                        <li><a href="services/service.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i> ${getKeyword("Our-Services")}</a>
                        <li><a href="contact.html"><i class="fa-regular fa-angles-${imageDirRight} mx-1"></i> ${getKeyword("Contact-new")}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">  ${getKeyword("Contact-Us")}</h3>
                    <p class="mb-20">             ${getKeyword(
                      "address"
                    )}    </p>
<p class="mb-20">             ${getKeyword("addressjor")}    </p>
                    
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
                                <p>SA: +966-533011408 <br/> JO: +962-796660116</p>
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
                         <a href="#0">${getKeyword("DIGITRENDBS")} </a></p>
                   
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
    spaceBetween: 25,
    speed: 300,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
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
