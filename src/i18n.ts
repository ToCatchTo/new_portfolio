import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  cz: {
    translation: {
      // Navbar
      "nav_about": "O MNĚ",
      "nav_experience": "ZKUŠENOSTI",
      "nav_projects": "PROJEKTY",
      "nav_contact": "KONTAKT",
      "cv_button": "CV.PDF",
      // Header & Cards
      "header_loc_label": "LOKACE",
      "header_loc_value": "CZ, Pardubice",
      "header_status_label": "AKTUÁLNÍ_STATUS",
      "header_status_value": "Otevřený spolupráci",
      "header_spec_label": "OBLAST_SPECIALIZACE",
      "header_spec_value": "Vývoj webů",
      "header_study_label": "FÁZE_STUDIA",
      "header_study_value": "2. ročník VŠ",
      // Hero Section
      "hero_overline": "PROFIL_UŽIVATELE",
      "hero_name": "TOMÁŠ TERČ",
      "hero_desc_1": "Frontend vývojář lokalizovaný v ",
      "hero_desc_country": "České republice",
      "hero_desc_2": ". Zaměřuji se na tvorbu čistých, strukturovaných a praktických webových stránek.",
      "hero_contact_btn": "KONTAKTOVAT",
      "hero_work_btn": "MOJE PRÁCE",
      // Technologies Small (Sidebar)
      "tech_small_overline": "UKÁZKA_ZKUŠENOSTÍ",
      "tech_small_title": "TECHNOLOGIE",
      "tech_small_button": "ZOBRAZIT VŠECHNY ZKUŠENOSTI",
      "tech_small_continue_text": "a mnoho dalších...",
      // About
      "about_overline": "BLIŽŠÍ_PŘEDSTAVENÍ",
      "about_title": "O MNĚ",
      "about_description": "Jsem frontend vývojář specializující se na vývoj webových aplikací s využitím moderních technologií. V posledních několika letech jsem pracoval na řadě projektů zaměřených na webové stránky. V současné době studuji na Univerzitě Hradec Králové, kde se dále věnuji webovému vývoji. Podívejte se na mou práci a pokud se vám líbí, neváhejte mě kontaktovat!",
      // Experience
      "experience_overline": "OVLÁDANÉ_TECHNOLOGIE",
      "experience_title": "ZKUŠENOSTI",
      "exp_col_languages": "PROGRAMOVACÍ_JAZYKY",
      "exp_col_tech": "TECHNOLOGIE",
      "exp_col_tools": "NÁSTROJE",
      // Projects
      "projects_overline": "PRÁCE_NA_PROJEKTECH",
      "projects_title": "PROJEKTY",
      "projects_view_btn": "PROHLÉDNOUT SI PROJEKT",
      "project_discit_desc": "Co je discgolf? Tato otázka by se mohla zajímat mnoho z vás a na této stránce se dozvíte vše, co o tomto krásném sportu potřebujete vědět. Ti, kteří discgolf již znají, si také přijdou na své s aplikacemi pro hraní.",
      // Contact
      "contact_overline": "KONTAKTNÍ_FORMULÁŘ",
      "contact_title": "KONTAKT",
      "contact_email_placeholder": "Email",
      "contact_subject_placeholder": "Předmět",
      "contact_message_placeholder": "Dobrý den, píši ohledně...",
      "contact_gdpr_text": "Odesláním formuláře berete na vědomí zpracování osobních údajů za účelem vyřízení vašeho dotazu.",
      "contact_more_info": "Více informací",
      "contact_send": "ODESLAT",
      "contact_sending": "ODESÍLÁNÍ...",
      "contact_success": "Zpráva byla úspěšně odeslána!",
      "contact_error": "Něco se nepovedlo. Zkuste to prosím znovu.",
      "contact_error_email": "Neplatný formát e-mailu",
      // Footer
      "footer_email": "Email",
      "footer_linkedin": "LinkedIn"
    }
  },
  en: {
    translation: {
      "nav_about": "ABOUT ME",
      "nav_experience": "EXPERIENCE",
      "nav_projects": "PROJECTS",
      "nav_contact": "CONTACT",
      "cv_button": "CV.PDF",
      "header_loc_label": "LOCATION",
      "header_loc_value": "CZ, Pardubice",
      "header_status_label": "CURRENT_STATUS",
      "header_status_value": "Open to work",
      "header_spec_label": "SPECIALIZATION",
      "header_spec_value": "Web Development",
      "header_study_label": "STUDY_PHASE",
      "header_study_value": "2nd year University",
      "hero_overline": "USER_PROFILE",
      "hero_name": "TOMÁŠ TERČ",
      "hero_desc_1": "Frontend developer based in the ",
      "hero_desc_country": "Czech Republic",
      "hero_desc_2": ". I focus on creating clean, structured, and practical websites.",
      "hero_contact_btn": "CONTACT ME",
      "hero_work_btn": "MY WORK",
      "tech_small_overline": "SKILL_PREVIEW",
      "tech_small_title": "TECHNOLOGIES",
      "tech_small_button": "VIEW ALL SKILLS",
      "tech_small_continue_text": "and many more...",
      "about_overline": "GETTING_TO_KNOW_ME",
      "about_title": "ABOUT ME",
      "about_description": "I am a frontend developer specializing in building web applications using modern technologies. Over the past few years, I have worked on numerous web projects. Currently, I am studying at the University of Hradec Králové, where I continue to focus on web development. Take a look at my work and if you like it, feel free to contact me!",
      "experience_overline": "MASTERED_TECHNOLOGIES",
      "experience_title": "EXPERIENCE",
      "exp_col_languages": "PROGRAMMING_LANGUAGES",
      "exp_col_tech": "TECHNOLOGIES",
      "exp_col_tools": "TOOLS",
      "projects_overline": "PROJECT_PORTFOLIO",
      "projects_title": "PROJECTS",
      "projects_view_btn": "VIEW PROJECT",
      "project_discit_desc": "What is discgolf? This question might interest many of you, and on this page, you will learn everything you need to know about this beautiful sport. Those who already know discgolf will also enjoy the apps for playing.",
      "contact_overline": "CONTACT_FORM",
      "contact_title": "CONTACT",
      "contact_email_placeholder": "Email",
      "contact_subject_placeholder": "Subject",
      "contact_message_placeholder": "Hello, I am writing regarding...",
      "contact_gdpr_text": "By submitting the form, you acknowledge the processing of personal data to handle your inquiry.",
      "contact_more_info": "More information",
      "contact_send": "SEND",
      "contact_sending": "SENDING...",
      "contact_success": "Message sent successfully!",
      "contact_error": "Something went wrong. Please try again.",
      "contact_error_email": "Invalid email format",
      "footer_email": "Email",
      "footer_linkedin": "LinkedIn"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'cz',
    interpolation: { escapeValue: false }
  });

export default i18n;