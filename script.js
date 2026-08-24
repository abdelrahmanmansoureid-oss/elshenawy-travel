/* ==========================================================================
   Elshenawy Travel Agency - Master JavaScript (script.js)
   Powered by GSAP, ScrollTrigger, AOS, and i18n
   ========================================================================== */

const WHATSAPP_NUMBER = "201550549488";

/* ==========================================
   Language Dictionaries (i18n)
   ========================================== */
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عن الشناوي",
    nav_services: "خدماتنا",
    nav_packages: "العروض والرحلات",
    nav_contact: "تواصل معنا",
    btn_lang: "English 🌐",
    btn_header_wa: "واتساب مباشر",

    hero_badge: "✈️ وكالة سياحية معتمدة",
    hero_title_1: "الشناوي للسياحة",
    hero_title_2: "رحلتك تبدأ من هنا",
    hero_slogan: "اسم له تاريخ",
    hero_desc: "نقدم أفضل خدمات التخطيط للسفر، حجوزات الطيران، برامج الحج والعمرة، والرحلات السياحية الداخلية والدولية بأعلى درجات الرفاهية والأمان.",
    hero_icon_flights: "حجوزات طيران",
    hero_icon_tours: "رحلات مميزة",
    hero_icon_hajj: "حج وعمرة",
    btn_explore: "استكشف الرحلات",
    btn_hero_wa: "تواصل عبر الواتساب",

    widget_title: "احجز رحلتك الآن",
    widget_service_label: "نوع الخدمة",
    widget_dest_label: "الوجهة",
    widget_date_label: "تاريخ السفر",
    widget_submit: "إرسال طلب الاستفسار عبر الواتساب",

    window_heading: "شاهد العالم بنظرة جديدة مع الشناوي",
    window_desc: "وجهتك القادمة تنتظرك بين السحاب.. اسم له تاريخ وثقة تمتد لعقود",

    about_tag: "من نحن",
    about_title: "الشناوي للسياحة والرحلات",
    about_slogan: "اسم له تاريخ.. وثقة تمتد لعقود",
    about_desc: "تأسست شركة الشناوي لتقديم مفهوم جديد وراقي في عالم السفر والسياحة. نتميز بخبرتنا الواسعة في تنظيم رحلات العمرة والحج، وحجوزات الطيران على كبرى الشركات العالمية، بالإضافة إلى تنظيم برامج الترفيه للرحلات الداخلية والخارجية.",
    about_feat_1: "خبرة وسيرة عريقة",
    about_feat_2: "دعم ومتابعة 24/7",
    about_feat_3: "أفضل أسعار الطيران",
    about_feat_4: "برامج حج وعمرة فاخرة",

    services_tag: "خدماتنا المتميزة",
    services_title: "نلبي جميع تطلعاتك في السفر",
    services_subtitle: "باقة شاملة ومتكاملة من الخدمات السياحية المصممة لراحتك",
    ser_1_title: "حجوزات الطيران",
    ser_1_desc: "تأكيد فوري لحجوزات الطيران على كبرى شركات الطيران العالمية والداخلي بأفضل الأسعار.",
    ser_2_title: "برامج الحج والعمرة",
    ser_2_desc: "رحلات إيمانية وتأشيرات وتسكين فاخر بالقرب من الحرمين مع مشرفين ذوي خبرة.",
    ser_3_title: "السياحة الخارجية",
    ser_3_desc: "رحلات متكاملة تشمل التذاكر، الفنادق، والجولات السياحية لأجمل الوجهات العالمية.",
    ser_4_title: "السياحة الداخلية",
    ser_4_desc: "رحلات الاستجمام في شرم الشيخ، الغردقة، الأقصر وأسوان، ومرسى علم بأسعار تنافسية.",
    ser_5_title: "التأشيرات والفيزا",
    ser_5_desc: "تسهيل وإنهاء إجراءات التأشيرات السياحية ودعوات الزيارة لمختلف دول العالم.",
    ser_6_title: "النقل السياحي والليموزين",
    ser_6_desc: "أسطول حديث من السيارات والسيارات الفارهة والحافلات السياحية المجهزة بالكامل.",
    ser_more: "احجز عبر الواتساب ➔",

    pkg_tag: "عروضنا الحصرية",
    pkg_title: "أحدث باقات السفر والرحلات",
    pkg_subtitle: "اختر وجهتك المفضلة واستمتع بتجربة سفر لا تُنسى",
    filter_all: "الكل",
    filter_hajj: "حج وعمرة",
    filter_domestic: "رحلات داخلية",
    filter_international: "رحلات دولية",

    pkg_1_tag: "VIP",
    pkg_1_title: "برنامج العمرة الفاخرة - مكة والمدينة",
    pkg_1_dur: "10 أيام / 9 ليالي",
    pkg_1_feat1: "فنادق 5 نجوم مطلة على الحرم",
    pkg_1_feat2: "طيران مباشر + انتقالات فاخرة",
    pkg_1_feat3: "المزارات الشريفة + مشرف دينى",

    pkg_2_tag: "الأكثر مبيعاً",
    pkg_2_title: "رحلة شرم الشيخ - منتجع 5 نجوم",
    pkg_2_dur: "4 أيام / 3 ليالي",
    pkg_2_feat1: "إقامة شاملة (إفطار + غداء + عشاء)",
    pkg_2_feat2: "ألعاب مائية + رحلة يخت مجانية",
    pkg_2_feat3: "انتقالات بأتوبيسات حديثة",

    pkg_3_tag: "عرض خاص",
    pkg_3_title: "عطلة دبي الساحرة - الإمارات",
    pkg_3_dur: "5 أيام / 4 ليالي",
    pkg_3_feat1: "تذاكر الطيران + التأشيرة السياحية",
    pkg_3_feat2: "فندق 4 نجوم شامل الإفطار",
    pkg_3_feat3: "جولة برج خليفة ورحلة سفاري",

    btn_book_wa: "احجز عبر الواتساب 📱",

    stat_1_num: "+15",
    stat_1_label: "عاماً من الخبرة والتميز",
    stat_2_num: "+25k",
    stat_2_label: "مسافر سعيد",
    stat_3_num: "100%",
    stat_3_label: "رضا العملاء وتأكيد الحجز",
    stat_4_num: "24/7",
    stat_4_label: "خدمة عملاء وواتساب مباشر",

    contact_tag: "تواصل معنا",
    contact_title: "نحن هنا لخدمتك دائماً",
    contact_subtitle: "تواصل معنا للاستفسار أو حجز رحلتك القادمة بكل سهولة",
    contact_info_title: "معلومات الاتصال",
    contact_add_label: "العنوان الرئيسي:",
    contact_add_val: "جمهورية مصر العربية - القاهرة",
    contact_phone_label: "الهاتف / الواتساب:",
    contact_email_label: "البريد الإلكتروني:",
    contact_email_val: "info@elshenawy-travel.com",
    wa_direct_title: "خدمة العملاء السريعة",
    wa_direct_desc: "راسلنا مباشرة على الواتساب للحصول على الرد الفوري",

    form_title: "أرسل لنا استفسارك",
    form_name: "الاسم بالكامل",
    form_phone: "رقم الهاتف",
    form_msg: "تفاصيل الاستفسار أو الرحلة المطلوب حجزها",
    form_submit: "إرسال الاستفسار عبر الواتساب 🚀",

    footer_desc: "الشناوي للسياحة والرحلات - اسم له تاريخ. نقدم أفضل خدمات السفر، الحج والعمرة، ورحلات الترفيه الداخلية والدولية.",
    footer_quick_links: "روابط سريعة",
    footer_services: "خدماتنا",
    footer_rights: "جميع الحقوق محفوظة © الشناوي للسياحة والرحلات 2026. تصميم وتطوير متكامل."
  },

  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_packages: "Tour Packages",
    nav_contact: "Contact Us",
    btn_lang: "العربية 🌐",
    btn_header_wa: "WhatsApp Direct",

    hero_badge: "✈️ Certified Travel Agency",
    hero_title_1: "Elshenawy Travel",
    hero_title_2: "Your Journey Starts Here",
    hero_slogan: "A name with a history",
    hero_desc: "Delivering world-class travel planning, flight bookings, Hajj & Umrah programs, and luxury domestic & international holiday tours.",
    hero_icon_flights: "Flight Booking",
    hero_icon_tours: "Special Tours",
    hero_icon_hajj: "Hajj & Umrah",
    btn_explore: "Explore Tours",
    btn_hero_wa: "Contact on WhatsApp",

    widget_title: "Book Your Journey",
    widget_service_label: "Service Type",
    widget_dest_label: "Destination",
    widget_date_label: "Travel Date",
    widget_submit: "Send WhatsApp Inquiry",

    window_heading: "Discover the World Above the Clouds with Elshenawy",
    window_desc: "Your next dream destination awaits... A name with a history",

    about_tag: "About Us",
    about_title: "Elshenawy Travel Agency",
    about_slogan: "A name with a history.. Trust extending for decades",
    about_desc: "Elshenawy Travel was established to redefine luxury travel and tourism experiences. We specialize in Hajj and Umrah pilgrimages, flight reservations across top global airlines, and curated domestic & international tour itineraries.",
    about_feat_1: "Decades of Legacy",
    about_feat_2: "24/7 Dedicated Support",
    about_feat_3: "Best Flight Rates",
    about_feat_4: "VIP Umrah & Hajj Tours",

    services_tag: "Our Premium Services",
    services_title: "Fulfilling All Your Travel Desires",
    services_subtitle: "Comprehensive travel solutions tailored for your maximum comfort and joy",
    ser_1_title: "Flight Bookings",
    ser_1_desc: "Instant confirmations for international & domestic flights at competitive rates.",
    ser_2_title: "Hajj & Umrah Programs",
    ser_2_desc: "Spiritual journeys with 5-star hotel accommodations near Haramain and expert guides.",
    ser_3_title: "International Tourism",
    ser_3_desc: "All-inclusive tour packages including flights, hotels, visas, and city excursions.",
    ser_4_title: "Domestic Tours",
    ser_4_desc: "Luxury holidays in Sharm El-Sheikh, Hurghada, Luxor, Aswan, and Marsa Alam.",
    ser_5_title: "Visa Assistance",
    ser_5_desc: "Fast-track processing for tourist visas and invitation letters worldwide.",
    ser_6_title: "Tourist Transport & Limousine",
    ser_6_desc: "Modern fleet of luxury VIP cars, SUVs, and fully equipped tourist buses.",
    ser_more: "Book via WhatsApp ➔",

    pkg_tag: "Exclusive Offers",
    pkg_title: "Popular Tour Packages",
    pkg_subtitle: "Choose your favorite destination and create unforgettable travel memories",
    filter_all: "All",
    filter_hajj: "Hajj & Umrah",
    filter_domestic: "Domestic",
    filter_international: "International",

    pkg_1_tag: "VIP",
    pkg_1_title: "Luxury Umrah Package - Makkah & Madinah",
    pkg_1_dur: "10 Days / 9 Nights",
    pkg_1_feat1: "5-Star Haram View Hotels",
    pkg_1_feat2: "Direct Flights + VIP Transport",
    pkg_1_feat3: "Guided Holy Site Tours",

    pkg_2_tag: "Best Seller",
    pkg_2_title: "Sharm El-Sheikh 5-Star Resort",
    pkg_2_dur: "4 Days / 3 Nights",
    pkg_2_feat1: "All-Inclusive (Breakfast, Lunch, Dinner)",
    pkg_2_feat2: "Aqua Park + Free Yacht Cruise",
    pkg_2_feat3: "Modern AC Bus Transfers",

    pkg_3_tag: "Special Deal",
    pkg_3_title: "Charming Dubai Holiday - UAE",
    pkg_3_dur: "5 Days / 4 Nights",
    pkg_3_feat1: "Flight Tickets + Tourist Visa",
    pkg_3_feat2: "4-Star Hotel with Breakfast",
    pkg_3_feat3: "Burj Khalifa & Desert Safari",

    btn_book_wa: "Book on WhatsApp 📱",

    stat_1_num: "+15",
    stat_1_label: "Years of Heritage",
    stat_2_num: "+25k",
    stat_2_label: "Happy Travelers",
    stat_3_num: "100%",
    stat_3_label: "Satisfaction Rate",
    stat_4_num: "24/7",
    stat_4_label: "Direct WhatsApp Support",

    contact_tag: "Contact Us",
    contact_title: "We Are Always Here For You",
    contact_subtitle: "Get in touch for inquiries or quick booking assistance",
    contact_info_title: "Contact Details",
    contact_add_label: "Main Address:",
    contact_add_val: "Cairo, Arab Republic of Egypt",
    contact_phone_label: "Phone / WhatsApp:",
    contact_email_label: "Email Address:",
    contact_email_val: "info@elshenawy-travel.com",
    wa_direct_title: "Quick Customer Care",
    wa_direct_desc: "Chat directly on WhatsApp for instant response",

    form_title: "Send Us an Inquiry",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_msg: "Inquiry details or desired tour package",
    form_submit: "Send WhatsApp Message 🚀",

    footer_desc: "Elshenawy Travel Agency - A name with a history. Providing top-tier travel planning, Hajj & Umrah, and luxury tours.",
    footer_quick_links: "Quick Links",
    footer_services: "Our Services",
    footer_rights: "All Rights Reserved © Elshenawy Travel 2026. Designed & Developed for Excellence."
  }
};

/* Current Active Language */
let currentLang = localStorage.getItem("elshenawy_lang") || "ar";

/* ==========================================
   DOM Load & Initialization
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  setupHeaderScroll();
  setupMobileMenu();
  setupPackageFilter();
  setupFormWhatsAppHandlers();
  animateStatsCounter();

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  // Initialize GSAP ScrollTrigger or Fallback for Airplane Window Scroll Animation
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    setupGSAPAirplaneWindow();
  } else {
    setupAirplaneWindowScrollFallback();
  }
});

/* ==========================================
   Language Switcher Functionality
   ========================================== */
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("elshenawy_lang", currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      element.placeholder = dict[key];
    }
  });

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.textContent = dict.btn_lang;
  }
}

/* ==========================================
   Header Scroll Effect
   ========================================== */
function setupHeaderScroll() {
  const header = document.getElementById("mainHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================
   GSAP & ScrollTrigger Airplane Window Animation
   ========================================== */
function setupGSAPAirplaneWindow() {
  gsap.registerPlugin(ScrollTrigger);

  const windowFrame = document.getElementById("airplaneWindow");
  const skyImg = document.querySelector(".window-sky-img");
  const overlayText = document.querySelector(".window-overlay-text");

  if (!windowFrame) return;

  gsap.timeline({
    scrollTrigger: {
      trigger: "#window-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: false
    }
  })
  .to(windowFrame, {
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    borderWidth: "0px",
    ease: "none"
  })
  .to(skyImg, {
    scale: 1.3,
    ease: "none"
  }, 0)
  .to(overlayText, {
    opacity: 0.2,
    scale: 1.15,
    ease: "none"
  }, 0);
}

/* Fallback Window Animation if GSAP is loading */
function setupAirplaneWindowScrollFallback() {
  const windowSection = document.getElementById("window-experience");
  const windowFrame = document.getElementById("airplaneWindow");
  const skyImg = document.querySelector(".window-sky-img");
  const overlayText = document.querySelector(".window-overlay-text");

  if (!windowSection || !windowFrame) return;

  window.addEventListener("scroll", () => {
    const rect = windowSection.getBoundingClientRect();
    const sectionHeight = windowSection.offsetHeight - window.innerHeight;
    
    let progress = -rect.top / sectionHeight;
    progress = Math.max(0, Math.min(1, progress));

    const isMobile = window.innerWidth < 768;
    const baseWidth = isMobile ? 260 : 360;
    const baseHeight = isMobile ? 380 : 520;
    const baseRadius = isMobile ? 130 : 180;
    const baseBorder = isMobile ? 12 : 20;

    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;

    const currentWidth = baseWidth + (targetWidth - baseWidth) * progress;
    const currentHeight = baseHeight + (targetHeight - baseHeight) * progress;
    const currentRadius = baseRadius * (1 - progress);
    const currentBorder = baseBorder * (1 - progress);

    windowFrame.style.width = `${currentWidth}px`;
    windowFrame.style.height = `${currentHeight}px`;
    windowFrame.style.borderRadius = `${currentRadius}px`;
    windowFrame.style.borderWidth = `${currentBorder}px`;

    if (skyImg) {
      skyImg.style.transform = `scale(${1.05 + progress * 0.25})`;
    }

    if (overlayText) {
      overlayText.style.opacity = `${1 - progress * 0.7}`;
      overlayText.style.transform = `scale(${1 + progress * 0.15})`;
    }
  });
}

/* ==========================================
   Mobile Navigation Menu
   ========================================== */
function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
    });
  }
}

/* ==========================================
   Package Filtering Logic
   ========================================== */
function setupPackageFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const packageCards = document.querySelectorAll(".package-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      packageCards.forEach(card => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "flex";
          if (typeof AOS !== "undefined") {
            AOS.refresh();
          }
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================
   WhatsApp Messenger Generators
   ========================================== */
function sendWhatsAppMessage(customText) {
  let message = customText;
  if (!message) {
    message = currentLang === "ar" 
      ? "مرحباً الشناوي للسياحة، أود الاستفسار عن برامج الرحلات وحجوزات الطيران."
      : "Hello Elshenawy Travel, I would like to inquire about tour packages and flight bookings.";
  }
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(whatsappUrl, "_blank");
}

function sendWidgetWhatsApp(event) {
  event.preventDefault();
  const service = document.getElementById("widgetService").value;
  const destination = document.getElementById("widgetDestination").value || (currentLang === "ar" ? "غير محدد" : "Not specified");
  const date = document.getElementById("widgetDate").value || (currentLang === "ar" ? "قريباً" : "Soon");

  const msgAR = `مرحباً الشناوي للسياحة، أود الاستفسار والحجز:\n- الخدمة: ${service}\n- الوجهة: ${destination}\n- تاريخ السفر: ${date}`;
  const msgEN = `Hello Elshenawy Travel, I would like to inquire/book:\n- Service: ${service}\n- Destination: ${destination}\n- Travel Date: ${date}`;

  sendWhatsAppMessage(currentLang === "ar" ? msgAR : msgEN);
}

function sendContactFormWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone").value;
  const message = document.getElementById("contactMessage").value;

  const msgAR = `طلب استفسار جديد من الموقع:\n- الاسم: ${name}\n- الهاتف: ${phone}\n- الرسالة: ${message}`;
  const msgEN = `New website inquiry:\n- Name: ${name}\n- Phone: ${phone}\n- Message: ${message}`;

  sendWhatsAppMessage(currentLang === "ar" ? msgAR : msgEN);
}

function setupFormWhatsAppHandlers() {
  const widgetForm = document.getElementById("widgetForm");
  if (widgetForm) {
    widgetForm.addEventListener("submit", sendWidgetWhatsApp);
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", sendContactFormWhatsApp);
  }
}

/* ==========================================
   Animated Number Counters
   ========================================== */
function animateStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !animated) {
      animated = true;
      statNumbers.forEach(stat => {
        const target = stat.innerText;
        stat.innerText = "0";
        let count = 0;
        const increment = Math.ceil(parseInt(target.replace(/[^0-9]/g, "")) / 40);

        const updateCount = () => {
          count += increment;
          const numLimit = parseInt(target.replace(/[^0-9]/g, ""));
          if (count < numLimit) {
            stat.innerText = (target.includes("+") ? "+" : "") + count + (target.includes("k") ? "k" : "") + (target.includes("%") ? "%" : "");
            setTimeout(updateCount, 40);
          } else {
            stat.innerText = target;
          }
        };
        updateCount();
      });
    }
  });
}
