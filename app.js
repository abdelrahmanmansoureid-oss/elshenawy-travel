/* ==========================================================================
   Elshenawy Travel Agency - React 18 & Tailwind CSS Application (app.js)
   DOMINANT SIGNATURE COLOR: Deep Imperial Purple (#452578)
   Includes Official Makkah & Madinah Photo (makkah-madinah.jpg)
   Includes Clean Segmented Capsule Language Toggle Switcher (عربي | EN - No Flag Icons)
   ========================================================================== */

const WHATSAPP_NUMBER = "201550549488";

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عن الشناوي",
    nav_services: "خدماتنا",
    nav_packages: "العروض والرحلات",
    nav_contact: "تواصل معنا",
    btn_header_wa: "واتساب مباشر",

    hero_badge: "✨ الشناوي للسياحة • اسم له تاريخ",
    hero_title_1: "الشناوي للسياحة",
    hero_title_2: "رحلتك تبدأ من هنا",
    hero_slogan: "اسم له تاريخ",
    hero_desc: "نصمم لك تجارب سفر فاخرة لا تُنسى. برامج الحج والعمرة، حجوزات الطيران العالمية، والرحلات السياحية بأعلى معايير الرفاهية.",
    hero_icon_flights: "حجوزات طيران",
    hero_icon_tours: "رحلات مميزة",
    hero_icon_hajj: "حج وعمرة",
    btn_explore: "استكشف العروض",
    btn_hero_wa: "تواصل عبر الواتساب",

    widget_title: "ابحث عن رحلتك القادمة",
    widget_service_label: "نوع الخدمة",
    widget_dest_label: "الوجهة المطلوبة",
    widget_date_label: "تاريخ السفر",
    widget_submit: "احجز عبر الواتساب",

    about_tag: "عراقة وتميز",
    about_title: "الشناوي للسياحة والرحلات",
    about_slogan: "اسم له تاريخ.. وثقة تمتد لعقود",
    about_desc: "تأسست شركة الشناوي لتقديم مفهوم جديد وراقي في عالم السفر والسياحة. نتميز بخبرتنا الواسعة في تنظيم رحلات العمرة والحج، وحجوزات الطيران على كبرى الشركات العالمية.",
    about_feat_1: "خبرة وسيرة عريقة",
    about_feat_2: "دعم ومتابعة 24/7",
    about_feat_3: "أفضل أسعار الطيران",
    about_feat_4: "برامج حج وعمرة مميزة",

    services_tag: "خدماتنا الحصرية",
    services_title: "تجارب سفر مصممة خصيصاً لك",
    services_subtitle: "باقة شاملة ومتكاملة من الخدمات السياحية الفاخرة",
    ser_1_title: "حجوزات الطيران",
    ser_1_desc: "تأكيد فوري لحجوزات الطيران على كبرى شركات الطيران العالمية بأفضل الأسعار.",
    ser_2_title: "برامج الحج والعمرة",
    ser_2_desc: "رحلات إيمانية بالقرب من الحرمين مع مشرفين متمرسين.",
    ser_3_title: "السياحة الخارجية",
    ser_3_desc: "عطلات متكاملة تشمل التذاكر، الفنادق، والجولات السياحية في أجمل دول العالم.",
    ser_4_title: "السياحة الداخلية",
    ser_4_desc: "استجمام في شرم الشيخ، الغردقة، الأقصر وأسوان بأسعار استثنائية.",
    ser_5_title: "التأشيرات والفيزا",
    ser_5_desc: "إجراءات سريعة لاستخراج التأشيرات السياحية ودعوات الزيارة.",
    ser_6_title: "الليموزين والنقل الفاخر",
    ser_6_desc: "أسطول حديث من السيارات الفارهة والحافلات السياحية المجهزة.",
    ser_more: "احجز مباشرة عبر الواتساب ➔",

    pkg_tag: "عروض مميزة",
    pkg_title: "أحدث باقات السفر والرحلات",
    pkg_subtitle: "اختر وجهتك المفضلة وانطلق في رحلة الأحلام",
    filter_all: "الكل",
    filter_hajj: "حج وعمرة",
    filter_domestic: "رحلات داخلية",
    filter_international: "رحلات دولية",

    pkg_1_tag: "VIP",
    pkg_1_title: "برنامج العمرة - مكة والمدينة",
    pkg_1_dur: "10 أيام / 9 ليالي",
    pkg_1_feat1: "فنادق 5 نجوم مطلة على الحرم",
    pkg_1_feat2: "طيران مباشر + انتقالات VIP",
    pkg_1_feat3: "المزارات الشريفة + مشرف دينى",

    pkg_2_tag: "الأكثر مبيعاً",
    pkg_2_title: "رحلة شرم الشيخ - منتجع 5 نجوم",
    pkg_2_dur: "4 أيام / 3 ليالي",
    pkg_2_feat1: "إقامة شاملة (Ultra All Inclusive)",
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
    stat_1_label: "عاماً من العراقة والتميز",
    stat_2_num: "+25k",
    stat_2_label: "مسافر سعيد",
    stat_3_num: "100%",
    stat_3_label: "تأكيد فوري ورضا تام",
    stat_4_num: "24/7",
    stat_4_label: "خدمة عملاء وواتساب مباشر",

    contact_tag: "تواصل معنا",
    contact_title: "جاهزون لمساعدتك في أي وقت",
    contact_subtitle: "تواصل معنا مباشرة للاستفسار أو حجز رحلتك القادمة",
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
    form_msg: "تفاصيل الاستفسار أو الرحلة",
    form_submit: "إرسال عبر الواتساب",

    footer_desc: "الشناوي للسياحة والرحلات - اسم له تاريخ. نقدم أفضل خدمات السفر، الحج والعمرة، ورحلات الترفيه الداخلية والدولية.",
    footer_quick_links: "روابط سريعة",
    footer_services: "خدماتنا",
    footer_rights: "جميع الحقوق محفوظة © الشناوي للسياحة والرحلات 2026."
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_packages: "Packages",
    nav_contact: "Contact",
    btn_header_wa: "WhatsApp Direct",

    hero_badge: "✨ Elshenawy Travel • A name with a history",
    hero_title_1: "Elshenawy Travel",
    hero_title_2: "Your Journey Starts Here",
    hero_slogan: "A name with a history",
    hero_desc: "Curating unforgettable luxury travel experiences. Hajj & Umrah packages, flight reservations, and holiday tours built with unmatched prestige.",
    hero_icon_flights: "Flight Booking",
    hero_icon_tours: "Special Tours",
    hero_icon_hajj: "Hajj & Umrah",
    btn_explore: "Explore Packages",
    btn_hero_wa: "Contact on WhatsApp",

    widget_title: "Find Your Next Journey",
    widget_service_label: "Service Type",
    widget_dest_label: "Destination",
    widget_date_label: "Travel Date",
    widget_submit: "Book on WhatsApp",

    about_tag: "Heritage & Excellence",
    about_title: "Elshenawy Travel Agency",
    about_slogan: "A name with a history.. Trust extending for decades",
    about_desc: "Elshenawy Travel was established to redefine luxury travel and tourism experiences. We specialize in Hajj and Umrah pilgrimages, flight reservations across top global airlines.",
    about_feat_1: "Decades of Heritage",
    about_feat_2: "24/7 VIP Assistance",
    about_feat_3: "Best Flight Rates",
    about_feat_4: "Umrah & Hajj Tours",

    services_tag: "Exclusive Services",
    services_title: "Bespoke Travel Solutions",
    services_subtitle: "Comprehensive premium services tailored for your ultimate delight",
    ser_1_title: "Flight Reservations",
    ser_1_desc: "Instant confirmations for international & domestic flights at competitive rates.",
    ser_2_title: "Hajj & Umrah Packages",
    ser_2_desc: "Spiritual journeys with 5-star hotel accommodations near Haramain.",
    ser_3_title: "International Tourism",
    ser_3_desc: "All-inclusive holiday packages in top global travel destinations.",
    ser_4_title: "Domestic Tours",
    ser_4_desc: "Luxury retreats in Sharm El-Sheikh, Hurghada, Luxor, and Aswan.",
    ser_5_title: "Visa Assistance",
    ser_5_desc: "Fast-track tourist visa issuance and official invitations worldwide.",
    ser_6_title: "Luxury Transport & Limousine",
    ser_6_desc: "Modern fleet of VIP cars, SUVs, and fully equipped buses.",
    ser_more: "Book Directly via WhatsApp ➔",

    pkg_tag: "Featured Offers",
    pkg_title: "Popular Holiday Packages",
    pkg_subtitle: "Select your dream destination and embark on a memorable journey",
    filter_all: "All",
    filter_hajj: "Hajj & Umrah",
    filter_domestic: "Domestic",
    filter_international: "International",

    pkg_1_tag: "VIP",
    pkg_1_title: "Umrah Package - Makkah & Madinah",
    pkg_1_dur: "10 Days / 9 Nights",
    pkg_1_feat1: "5-Star Haram View Hotels",
    pkg_1_feat2: "Direct Flights + VIP Transport",
    pkg_1_feat3: "Guided Holy Site Excursions",

    pkg_2_tag: "Best Seller",
    pkg_2_title: "Sharm El-Sheikh 5-Star Resort",
    pkg_2_dur: "4 Days / 3 Nights",
    pkg_2_feat1: "Ultra All Inclusive (Food & Drinks)",
    pkg_2_feat2: "Aqua Park + Free Yacht Cruise",
    pkg_2_feat3: "Modern AC Bus Transfers",

    pkg_3_tag: "Special Deal",
    pkg_3_title: "Charming Dubai Holiday - UAE",
    pkg_3_dur: "5 Days / 4 Nights",
    pkg_3_feat1: "Flights + Tourist Visa Included",
    pkg_3_feat2: "4-Star Hotel with Breakfast",
    pkg_3_feat3: "Burj Khalifa & Desert Safari",

    btn_book_wa: "Book on WhatsApp 📱",

    stat_1_num: "+15",
    stat_1_label: "Years of Excellence",
    stat_2_num: "+25k",
    stat_2_label: "Happy Travelers",
    stat_3_num: "100%",
    stat_3_label: "Instant Confirmation",
    stat_4_num: "24/7",
    stat_4_label: "Direct WhatsApp Support",

    contact_tag: "Contact Us",
    contact_title: "Always Ready To Assist You",
    contact_subtitle: "Get in touch directly for quick booking assistance",
    contact_info_title: "Contact Details",
    contact_add_label: "Main Address:",
    contact_add_val: "Cairo, Arab Republic of Egypt",
    contact_phone_label: "Phone / WhatsApp:",
    contact_email_label: "Email Address:",
    contact_email_val: "info@elshenawy-travel.com",
    wa_direct_title: "Quick Customer Support",
    wa_direct_desc: "Message us directly on WhatsApp for immediate response",

    form_title: "Send Us an Inquiry",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_msg: "Inquiry Details",
    form_submit: "Send via WhatsApp",

    footer_desc: "Elshenawy Travel Agency - A name with a history. Delivering top-tier travel planning, Hajj & Umrah, and luxury tours.",
    footer_quick_links: "Quick Links",
    footer_services: "Our Services",
    footer_rights: "All Rights Reserved © Elshenawy Travel 2026."
  }
};

const e = React.createElement;

function sendWhatsApp(text, lang) {
  let msg = text;
  if (!msg) {
    msg = lang === "ar"
      ? "مرحباً الشناوي للسياحة، أود الاستفسار عن برامج الرحلات وحجوزات الطيران."
      : "Hello Elshenawy Travel, I would like to inquire about tour packages and flight bookings.";
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* App Root Component */
function App() {
  const [lang, setLang] = React.useState(() => localStorage.getItem("elshenawy_lang") || "ar");
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [filter, setFilter] = React.useState("all");

  const [widgetService, setWidgetService] = React.useState("برامج العمرة والحج");
  const [widgetDest, setWidgetDest] = React.useState("");
  const [widgetDate, setWidgetDate] = React.useState("");

  const t = translations[lang];

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const nextLang = lang === "ar" ? "en" : "ar";
    setLang(nextLang);
    localStorage.setItem("elshenawy_lang", nextLang);
  };

  return e("div", { className: "min-h-screen bg-[#FAF9FC] text-[#452578] relative overflow-hidden" },
    /* Light Ambient Purple Glows */
    e("div", { className: "ambient-glow-top-light" }),
    e("div", { className: "ambient-glow-bottom-light" }),

    /* Header */
    e("header", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 py-3 shadow-md border-b border-[#452578]/15 backdrop-blur-xl' : 'bg-transparent py-6'}` },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto px-4 flex items-center justify-between" },
        e("a", { href: "#home", className: "flex items-center gap-3 group" },
          e("img", { src: "logo.png", alt: "Elshenawy Logo", className: "w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105" }),
          e("div", { className: "flex flex-col" },
            e("span", { className: "text-[#452578] text-xl font-extrabold tracking-tight" }, t.hero_title_1),
            e("span", { className: "text-[#C59210] text-xs font-bold tracking-wider" }, t.hero_slogan)
          )
        ),
        e("nav", { className: `md:flex items-center gap-8 ${mobileOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-6 border-b border-gray-200 shadow-2xl' : 'hidden'}` },
          e("a", { href: "#home", onClick: () => setMobileOpen(false), className: "text-[#452578] hover:text-[#C59210] font-bold text-sm transition-colors" }, t.nav_home),
          e("a", { href: "#about", onClick: () => setMobileOpen(false), className: "text-[#452578] hover:text-[#C59210] font-bold text-sm transition-colors" }, t.nav_about),
          e("a", { href: "#services", onClick: () => setMobileOpen(false), className: "text-[#452578] hover:text-[#C59210] font-bold text-sm transition-colors" }, t.nav_services),
          e("a", { href: "#packages", onClick: () => setMobileOpen(false), className: "text-[#452578] hover:text-[#C59210] font-bold text-sm transition-colors" }, t.nav_packages),
          e("a", { href: "#contact", onClick: () => setMobileOpen(false), className: "text-[#452578] hover:text-[#C59210] font-bold text-sm transition-colors" }, t.nav_contact)
        ),
        
        /* Action Buttons: WhatsApp + Segmented Capsule Language Toggle Switcher (No Flags) */
        e("div", { className: "flex items-center gap-3" },
          e("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", className: "bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-md transition-all" },
            e("i", { className: "fa-brands fa-whatsapp text-sm" }),
            e("span", { className: "hidden sm:inline" }, t.btn_header_wa)
          ),

          /* CAPSULE LANGUAGE TOGGLE WITHOUT FLAGS */
          e("button", {
            onClick: toggleLang,
            className: "lang-toggle-capsule p-1 rounded-full flex items-center gap-0.5 transition-all duration-300 cursor-pointer group select-none"
          },
            e("span", {
              className: `px-3.5 py-1 rounded-full text-xs font-black transition-all duration-300 ${lang === 'ar' ? 'bg-[#452578] text-white shadow-md' : 'text-[#452578]/70 group-hover:text-[#452578]'}`
            }, "عربي"),
            e("span", {
              className: `px-3.5 py-1 rounded-full text-xs font-black transition-all duration-300 ${lang === 'en' ? 'bg-[#452578] text-white shadow-md' : 'text-[#452578]/70 group-hover:text-[#452578]'}`
            }, "EN")
          ),

          e("button", { onClick: () => setMobileOpen(!mobileOpen), className: "md:hidden text-[#452578] text-2xl" },
            e("i", { className: `fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}` })
          )
        )
      )
    ),

    /* HERO SECTION */
    e("section", { className: "relative min-h-screen flex items-center pt-36 pb-20 hero-light-bg text-[#452578] overflow-hidden", id: "home" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto px-4 relative z-10" },
        
        /* Hero Badge Pill */
        e("div", { className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#452578]/10 border border-[#452578]/25 text-[#452578] text-xs font-extrabold mb-8 shadow-sm backdrop-blur-md" },
          e("i", { className: "fa-solid fa-sparkles text-[#C59210]" }),
          e("span", null, t.hero_badge)
        ),

        /* Editorial Headlines */
        e("div", { className: "grid md:grid-cols-12 gap-12 items-center mb-16" },
          e("div", { className: "md:col-span-8" },
            e("h1", { className: "text-4xl sm:text-6xl font-black leading-tight tracking-tight mb-4 text-[#452578]" },
              e("span", { className: "text-[#452578] block" }, t.hero_title_1),
              e("span", { className: "block text-[#C59210] mt-1" }, t.hero_title_2)
            ),
            e("p", { className: "text-[#452578]/80 text-base sm:text-lg leading-relaxed max-w-2xl font-medium" }, t.hero_desc)
          ),
          e("div", { className: "md:col-span-4 flex flex-col gap-4 sm:flex-row md:flex-col justify-end" },
            e("a", { href: "#packages", className: "bg-[#452578] hover:bg-[#361C60] text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-102 border border-[#C59210]/40" },
              e("span", null, t.btn_explore),
              e("i", { className: "fa-solid fa-arrow-left text-[#C59210]" })
            ),
            e("button", { onClick: () => sendWhatsApp(null, lang), className: "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 px-8 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 transition-all shadow-md" },
              e("i", { className: "fa-brands fa-whatsapp text-lg" }),
              e("span", null, t.btn_hero_wa)
            )
          )
        ),

        /* Bento Search Widget */
        e("div", { className: "bento-card-light p-6 sm:p-8 shadow-xl border-2 border-[#452578]/15" },
          e("form", {
            onSubmit: (ev) => {
              ev.preventDefault();
              const destVal = widgetDest || (lang === "ar" ? "غير محدد" : "Not specified");
              const dateVal = widgetDate || (lang === "ar" ? "قريباً" : "Soon");
              const msg = lang === "ar"
                ? `مرحباً الشناوي للسياحة، أود الاستفسار والحجز:\n- الخدمة: ${widgetService}\n- الوجهة: ${destVal}\n- تاريخ السفر: ${dateVal}`
                : `Hello Elshenawy Travel, I would like to inquire/book:\n- Service: ${widgetService}\n- Destination: ${destVal}\n- Travel Date: ${dateVal}`;
              sendWhatsApp(msg, lang);
            },
            className: "grid md:grid-cols-4 gap-6 items-end"
          },
            e("div", null,
              e("label", { className: "block text-xs font-bold text-[#452578] mb-2" }, t.widget_service_label),
              e("select", {
                value: widgetService,
                onChange: (ev) => setWidgetService(ev.target.value),
                className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] font-bold focus:outline-none focus:border-[#452578]"
              },
                e("option", { value: "برامج العمرة والحج" }, "برامج العمرة والحج / Hajj & Umrah"),
                e("option", { value: "حجوزات الطيران" }, "حجوزات الطيران / Flight Booking"),
                e("option", { value: "رحلات خارجية" }, "رحلات خارجية / International Tours"),
                e("option", { value: "رحلات داخلية" }, "رحلات داخلية / Domestic Tours"),
                e("option", { value: "استخراج التأشيرات" }, "استخراج التأشيرات / Visa Assistance")
              )
            ),
            e("div", null,
              e("label", { className: "block text-xs font-bold text-[#452578] mb-2" }, t.widget_dest_label),
              e("input", {
                type: "text",
                placeholder: lang === "ar" ? "مثال: مكة، شرم الشيخ، دبي" : "e.g. Makkah, Sharm, Dubai",
                value: widgetDest,
                onChange: (ev) => setWidgetDest(ev.target.value),
                className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] placeholder-gray-400 font-semibold focus:outline-none focus:border-[#452578]"
              })
            ),
            e("div", null,
              e("label", { className: "block text-xs font-bold text-[#452578] mb-2" }, t.widget_date_label),
              e("input", {
                type: "date",
                value: widgetDate,
                onChange: (ev) => setWidgetDate(ev.target.value),
                className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] font-semibold focus:outline-none focus:border-[#452578]"
              })
            ),
            e("button", { type: "submit", className: "w-full bg-[#452578] hover:bg-[#361C60] text-white font-extrabold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all" },
              e("i", { className: "fa-brands fa-whatsapp text-base text-[#25D366]" }),
              e("span", null, t.widget_submit)
            )
          )
        )

      )
    ),

    /* BENTO GRID ABOUT US SECTION */
    e("section", { className: "py-24 bg-[#FAF9FC] relative", id: "about" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto" },
        e("div", { className: "text-center max-w-2xl mx-auto mb-16" },
          e("span", { className: "text-[#C59210] font-bold text-xs uppercase tracking-widest block mb-2" }, t.about_tag),
          e("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#452578] mb-4" }, t.about_title),
          e("p", { className: "text-[#C59210] font-bold text-base" }, t.about_slogan)
        ),

        /* Bento Grid */
        e("div", { className: "grid md:grid-cols-12 gap-6" },
          /* Box 1: 15+ Years Badge */
          e("div", { className: "md:col-span-4 bento-card-light p-8 flex flex-col justify-between border-2 border-[#452578]/15" },
            e("div", { className: "text-6xl font-black text-[#452578] mb-4" }, "+15"),
            e("div", null,
              e("h3", { className: "text-xl font-bold text-[#452578] mb-2" }, t.about_feat_1),
              e("p", { className: "text-[#452578]/70 text-xs leading-relaxed font-medium" }, t.about_desc)
            )
          ),

          /* Box 2: Official Brand Graphic Banner */
          e("div", { className: "md:col-span-8 bento-card-light overflow-hidden p-0 relative min-h-[300px] border-2 border-[#452578]/15" },
            e("img", { src: "hero-banner.jpg", alt: "Elshenawy Brand Showcase", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105" }),
            e("div", { className: "absolute inset-0 bg-gradient-to-t from-[#452578]/95 via-[#452578]/40 to-transparent p-8 flex flex-col justify-end text-white" },
              e("span", { className: "text-xs font-bold text-[#F3C669] uppercase tracking-wider mb-1" }, t.hero_slogan),
              e("h3", { className: "text-2xl font-extrabold text-white" }, t.hero_title_2)
            )
          ),

          /* Box 3: Feature Highlights */
          e("div", { className: "md:col-span-12 grid sm:grid-cols-3 gap-6" },
            e("div", { className: "bento-card-light p-6 flex items-center gap-4 border border-[#452578]/15" },
              e("div", { className: "w-12 h-12 rounded-2xl bg-[#452578] text-white flex items-center justify-center text-xl shrink-0 shadow-md" }, e("i", { className: "fa-solid fa-headset text-[#C59210]" })),
              e("div", null,
                e("h4", { className: "font-bold text-[#452578] text-sm" }, t.about_feat_2),
                e("p", { className: "text-[#452578]/70 text-xs font-medium" }, "دعم فوري على مدار الساعة")
              )
            ),
            e("div", { className: "bento-card-light p-6 flex items-center gap-4 border border-[#452578]/15" },
              e("div", { className: "w-12 h-12 rounded-2xl bg-[#452578] text-white flex items-center justify-center text-xl shrink-0 shadow-md" }, e("i", { className: "fa-solid fa-tags text-[#C59210]" })),
              e("div", null,
                e("h4", { className: "font-bold text-[#452578] text-sm" }, t.about_feat_3),
                e("p", { className: "text-[#452578]/70 text-xs font-medium" }, "أسعار تنافسية وحصرية")
              )
            ),
            e("div", { className: "bento-card-light p-6 flex items-center gap-4 border border-[#452578]/15" },
              e("div", { className: "w-12 h-12 rounded-2xl bg-[#452578] text-white flex items-center justify-center text-xl shrink-0 shadow-md" }, e("i", { className: "fa-solid fa-kaaba text-[#C59210]" })),
              e("div", null,
                e("h4", { className: "font-bold text-[#452578] text-sm" }, t.about_feat_4),
                e("p", { className: "text-[#452578]/70 text-xs font-medium" }, "خدمات فاخرة بالقرب من الحرمين")
              )
            )
          )
        )
      )
    ),

    /* SERVICES CARDS */
    e("section", { className: "py-24 bg-[#F5F2F9]", id: "services" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto" },
        e("div", { className: "text-center max-w-2xl mx-auto mb-16" },
          e("span", { className: "text-[#C59210] font-bold text-xs uppercase tracking-widest block mb-2" }, t.services_tag),
          e("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#452578] mb-3" }, t.services_title),
          e("p", { className: "text-[#452578]/70 text-sm font-medium" }, t.services_subtitle)
        ),

        e("div", { className: "grid md:grid-cols-3 gap-6" },
          [
            { icon: "fa-plane", title: t.ser_1_title, desc: t.ser_1_desc },
            { icon: "fa-kaaba", title: t.ser_2_title, desc: t.ser_2_desc },
            { icon: "fa-earth-americas", title: t.ser_3_title, desc: t.ser_3_desc },
            { icon: "fa-umbrella-beach", title: t.ser_4_title, desc: t.ser_4_desc },
            { icon: "fa-passport", title: t.ser_5_title, desc: t.ser_5_desc },
            { icon: "fa-car-side", title: t.ser_6_title, desc: t.ser_6_desc }
          ].map((ser, i) =>
            e("div", { key: i, className: "bento-card-light p-8 flex flex-col justify-between border-2 border-[#452578]/10" },
              e("div", null,
                e("div", { className: "w-14 h-14 rounded-2xl bg-[#452578] text-[#C59210] flex items-center justify-center text-xl mb-6 shadow-md" }, e("i", { className: `fa-solid ${ser.icon}` })),
                e("h3", { className: "text-xl font-extrabold text-[#452578] mb-3" }, ser.title),
                e("p", { className: "text-[#452578]/75 text-xs leading-relaxed mb-6 font-medium" }, ser.desc)
              ),
              e("button", { onClick: () => sendWhatsApp(`استفسار عن ${ser.title}`, lang), className: "text-[#452578] font-extrabold text-xs flex items-center gap-2 hover:text-[#C59210] transition-colors" }, t.ser_more)
            )
          )
        )
      )
    ),

    /* TOUR PACKAGES */
    e("section", { className: "py-24 bg-[#FAF9FC]", id: "packages" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto" },
        e("div", { className: "text-center max-w-2xl mx-auto mb-12" },
          e("span", { className: "text-[#C59210] font-bold text-xs uppercase tracking-widest block mb-2" }, t.pkg_tag),
          e("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#452578] mb-3" }, t.pkg_title),
          e("p", { className: "text-[#452578]/75 text-sm font-medium" }, t.pkg_subtitle)
        ),

        /* Filter Pills */
        e("div", { className: "flex justify-center gap-3 mb-12 flex-wrap" },
          ["all", "hajj", "domestic", "international"].map((cat) =>
            e("button", {
              key: cat,
              onClick: () => setFilter(cat),
              className: `px-6 py-2.5 rounded-full text-xs font-extrabold transition-all ${filter === cat ? 'bg-[#452578] text-white shadow-md' : 'bg-white text-[#452578] border border-[#452578]/20 hover:border-[#452578]'}`
            }, t[`filter_${cat}`])
          )
        ),

        /* Package Cards */
        e("div", { className: "grid md:grid-cols-3 gap-8" },
          [
            { cat: "hajj", tag: t.pkg_1_tag, title: t.pkg_1_title, dur: t.pkg_1_dur, img: "makkah-madinah.jpg", f1: t.pkg_1_feat1, f2: t.pkg_1_feat2, f3: t.pkg_1_feat3 },
            { cat: "domestic", tag: t.pkg_2_tag, title: t.pkg_2_title, dur: t.pkg_2_dur, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop", f1: t.pkg_2_feat1, f2: t.pkg_2_feat2, f3: t.pkg_2_feat3 },
            { cat: "international", tag: t.pkg_3_tag, title: t.pkg_3_title, dur: t.pkg_3_dur, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop", f1: t.pkg_3_feat1, f2: t.pkg_3_feat2, f3: t.pkg_3_feat3 }
          ].filter(p => filter === "all" || p.cat === filter).map((pkg, idx) =>
            e("div", { key: idx, className: "bento-card-light overflow-hidden flex flex-col justify-between p-0 border-2 border-[#452578]/10" },
              e("div", null,
                e("div", { className: "relative h-60 overflow-hidden" },
                  e("img", { src: pkg.img, alt: pkg.title, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105" }),
                  e("span", { className: "absolute top-4 right-4 bg-[#452578] text-[#C59210] px-3 py-1 rounded-full text-xs font-extrabold shadow-md border border-[#C59210]/30" }, pkg.tag)
                ),
                e("div", { className: "p-6" },
                  e("div", { className: "text-xs text-[#C59210] mb-2 font-bold" }, pkg.dur),
                  e("h3", { className: "text-lg font-extrabold text-[#452578] mb-4" }, pkg.title),
                  e("div", { className: "space-y-2 mb-6" },
                    e("div", { className: "text-xs text-[#452578]/80 font-semibold flex items-center gap-2" }, e("i", { className: "fa-solid fa-check text-[#25D366]" }), pkg.f1),
                    e("div", { className: "text-xs text-[#452578]/80 font-semibold flex items-center gap-2" }, e("i", { className: "fa-solid fa-check text-[#25D366]" }), pkg.f2),
                    e("div", { className: "text-xs text-[#452578]/80 font-semibold flex items-center gap-2" }, e("i", { className: "fa-solid fa-check text-[#25D366]" }), pkg.f3)
                  )
                )
              ),
              e("div", { className: "p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-4" },
                e("span", { className: "text-sm font-extrabold text-[#452578]" }, "أفضل سعر"),
                e("button", { onClick: () => sendWhatsApp(`حجز ${pkg.title}`, lang), className: "bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-md" }, t.btn_book_wa)
              )
            )
          )
        )
      )
    ),

    /* STATS STRIP */
    e("section", { className: "py-20 bg-[#452578] text-white shadow-xl" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center" },
        e("div", null, e("div", { className: "text-5xl font-black text-[#C59210] mb-2" }, t.stat_1_num), e("div", { className: "text-xs text-gray-200 font-semibold" }, t.stat_1_label)),
        e("div", null, e("div", { className: "text-5xl font-black text-[#C59210] mb-2" }, t.stat_2_num), e("div", { className: "text-xs text-gray-200 font-semibold" }, t.stat_2_label)),
        e("div", null, e("div", { className: "text-5xl font-black text-[#C59210] mb-2" }, t.stat_3_num), e("div", { className: "text-xs text-gray-200 font-semibold" }, t.stat_3_label)),
        e("div", null, e("div", { className: "text-5xl font-black text-[#C59210] mb-2" }, t.stat_4_num), e("div", { className: "text-xs text-gray-200 font-semibold" }, t.stat_4_label))
      )
    ),

    /* CONTACT SECTION */
    e("section", { className: "py-24 bg-[#FAF9FC]", id: "contact" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto" },
        e("div", { className: "text-center max-w-2xl mx-auto mb-16" },
          e("span", { className: "text-[#C59210] font-bold text-xs uppercase tracking-widest block mb-2" }, t.contact_tag),
          e("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#452578] mb-3" }, t.contact_title),
          e("p", { className: "text-[#452578]/70 text-sm font-medium" }, t.contact_subtitle)
        ),
        e("div", { className: "grid md:grid-cols-2 gap-12" },
          e("div", { className: "bg-[#452578] text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between border-2 border-[#C59210]/30" },
            e("div", null,
              e("h3", { className: "text-2xl font-bold text-[#C59210] mb-8" }, t.contact_info_title),
              e("div", { className: "space-y-6 text-sm" },
                e("div", { className: "flex items-center gap-4" }, e("i", { className: "fa-solid fa-location-dot text-[#C59210] text-lg" }), t.contact_add_val),
                e("div", { className: "flex items-center gap-4" }, e("i", { className: "fa-brands fa-whatsapp text-[#C59210] text-lg" }), "+20 155 054 9488"),
                e("div", { className: "flex items-center gap-4" }, e("i", { className: "fa-regular fa-envelope text-[#C59210] text-lg" }), t.contact_email_val)
              )
            ),
            e("div", { className: "mt-8 pt-6 border-t border-white/10 flex items-center justify-between" },
              e("span", { className: "text-xs text-gray-200 font-semibold" }, t.wa_direct_title),
              e("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", className: "bg-[#25D366] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg" }, "+201550549488")
            )
          ),
          e("div", { className: "bento-card-light p-10 border-2 border-[#452578]/15" },
            e("h3", { className: "text-xl font-extrabold text-[#452578] mb-6" }, t.form_title),
            e("form", {
              onSubmit: (ev) => {
                ev.preventDefault();
                sendWhatsApp(`طلب استفسار جديد عبر الموقع`, lang);
              },
              className: "space-y-4"
            },
              e("input", { type: "text", placeholder: t.form_name, required: true, className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] font-bold focus:outline-none focus:border-[#452578]" }),
              e("input", { type: "tel", placeholder: t.form_phone, required: true, className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] font-bold focus:outline-none focus:border-[#452578]" }),
              e("textarea", { placeholder: t.form_msg, required: true, rows: 4, className: "w-full bg-[#FAF9FC] border border-[#452578]/20 rounded-xl px-4 py-3 text-sm text-[#452578] font-bold focus:outline-none focus:border-[#452578]" }),
              e("button", { type: "submit", className: "w-full bg-[#452578] hover:bg-[#361C60] text-white font-extrabold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl transition-all" },
                e("i", { className: "fa-brands fa-whatsapp text-lg text-[#25D366]" }),
                e("span", null, t.form_submit)
              )
            )
          )
        )
      )
    ),

    /* FOOTER */
    e("footer", { className: "bg-[#452578] text-white pt-16 pb-8 border-t border-[#C59210]/30" },
      e("div", { className: "w-[90%] max-w-[1240px] mx-auto flex flex-col items-center gap-4 text-center text-xs text-gray-200 font-semibold" },
        e("img", { src: "logo.png", alt: "Elshenawy Logo Footer", className: "w-12 h-12 object-contain" }),
        e("div", null, t.footer_rights)
      )
    ),

    /* FLOATING WHATSAPP BUTTON */
    e("a", { href: `https://wa.me/${WHATSAPP_NUMBER}`, target: "_blank", className: "fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50 wa-pulse-btn hover:scale-110 transition-transform" },
      e("i", { className: "fa-brands fa-whatsapp" })
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
