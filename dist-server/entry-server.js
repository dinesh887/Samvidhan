import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, useContext, useRef, useMemo } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useNavigate, Link, NavLink, useLocation, useSearchParams, useParams, Routes, Route } from "react-router-dom";
import * as Icons from "lucide-react";
import { Sun, Moon, Search, X, Menu, ArrowRight, Star, ExternalLink, Lightbulb, ArrowUpDown, BookOpen, ShieldAlert, ScrollText, Sparkles, HelpCircle, Link2, ChevronLeft, ChevronRight, Trophy, RotateCcw, Check, Lock, ChevronDown } from "lucide-react";
function ChakraMark({ className = "", spokes = 24 }) {
  const lines = Array.from({ length: spokes }, (_, i) => {
    const angle = 360 / spokes * i;
    return /* @__PURE__ */ jsx(
      "line",
      {
        x1: "50",
        y1: "50",
        x2: "50",
        y2: "8",
        stroke: "currentColor",
        strokeWidth: "1.4",
        transform: `rotate(${angle} 50 50)`
      },
      i
    );
  });
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className, "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "46", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "4", fill: "currentColor" }),
    lines
  ] });
}
const LanguageContext = createContext(null);
const STORAGE_KEY$2 = "samvidhan_language";
const STRINGS = {
  en: {
    nav_home: "Home",
    nav_articles: "Articles",
    nav_categories: "Categories",
    nav_rights: "Fundamental Rights",
    nav_amendments: "Amendments",
    nav_quiz: "Quiz",
    nav_about: "About",
    nav_duties: "Fundamental Duties",
    nav_directive: "Directive Principles",
    nav_bookmarks: "Saved Articles",
    search_placeholder: "Search Article number, rights or keywords...",
    search_button: "Search",
    popular_searches: "Popular searches",
    hero_badge: "Indian Constitution",
    hero_heading_1: "Know Your Constitution.",
    hero_heading_2: "Know Your Rights.",
    hero_desc: "Explore the Constitution of India and understand its Articles, Rights, Duties and Amendments in simple and easy language.",
    stat_articles: "Articles",
    stat_parts: "Parts",
    stat_schedules: "Schedules",
    stat_amendments: "Amendments",
    explore_heading: "Explore the Constitution",
    important_articles: "Important Articles You Should Know",
    view_all_articles: "View all Articles",
    learn_more: "Learn More",
    view_details: "View Details",
    did_you_know: "Did you know?",
    footer_tagline: "Know Your Constitution. Know Your Rights.",
    footer_disclaimer_title: "Disclaimer",
    footer_disclaimer: "This website is created for educational and informational purposes only. It does not provide legal advice. For legal matters, consult a qualified legal professional.",
    footer_copyright: "© 2026 Samvidhan.",
    articles_page_title: "Constitutional Articles",
    articles_page_sub: "Search and explore the Articles of the Indian Constitution.",
    filter_all: "All Articles",
    sort_asc: "Article Number: Ascending",
    sort_desc: "Article Number: Descending",
    no_results: "No articles match your search.",
    official_text: "Official Constitutional Text",
    simple_explanation: "Simple Explanation",
    marathi_explanation: "सोप्या मराठीत",
    very_simple: "Very Simple",
    easy_example: "Easy Example",
    related_articles: "Related Articles",
    save_article: "Save Article",
    saved: "Saved",
    source_label: "Source",
    last_verified: "Last Verified",
    verify_notice: "This content is a sample educational structure. Please verify all constitutional text against an authoritative source before relying on it.",
    rights_title: "Fundamental Rights",
    rights_sub: "Understand your fundamental rights, guaranteed by the Constitution.",
    duties_title: "Fundamental Duties",
    duties_sub: "Know your duties as a citizen of India.",
    directive_title: "Directive Principles of State Policy",
    directive_sub: "Guidelines that shape governance and public policy.",
    amendments_title: "Constitutional Amendments",
    amendments_sub: "Explore important changes made to the Constitution over time.",
    quiz_title: "Test Your Constitution Knowledge",
    quiz_start: "Start Quiz",
    quiz_next: "Next",
    quiz_finish: "Finish",
    quiz_score: "Your Score",
    quiz_correct: "Correct Answers",
    quiz_wrong: "Wrong Answers",
    quiz_percentage: "Percentage",
    quiz_excellent: "Excellent!",
    quiz_keep_learning: "Keep Learning!",
    quiz_try_again: "Try Again",
    quiz_question: "Question",
    quiz_of: "of",
    bookmarks_title: "My Saved Articles",
    bookmarks_empty: "No saved Articles yet.",
    about_title: "About Samvidhan",
    about_body: "Samvidhan is an educational platform created to help people understand the Constitution of India in simple and accessible language.",
    about_mission_title: "Our Mission",
    about_mission_body: "Make constitutional knowledge easy and accessible.",
    about_intro: "Welcome to Samvidhan – a platform dedicated to making the Constitution of India simple, accessible and easy to understand for everyone.",
    about_goal: "Our goal is to provide clear and informative content about the Constitution of India, Fundamental Rights and Duties, constitutional provisions, important Articles, Amendments, Schedules and other important aspects of the Indian Constitution.",
    about_mission_detail: "The Constitution of India is the foundation of our democracy. However, constitutional information can sometimes be difficult to understand because of complex legal language.",
    about_mission_detail_2: "At Samvidhan, our mission is to present constitutional information in a simple, structured and easy-to-understand format so that students, citizens, competitive exam aspirants and anyone interested in the Constitution can learn about it easily.",
    about_find_title: "What You Will Find on Samvidhan",
    about_find_1: "Information about the Constitution of India",
    about_find_2: "Articles and constitutional provisions",
    about_find_3: "Fundamental Rights and Fundamental Duties",
    about_find_4: "Directive Principles of State Policy",
    about_find_5: "Constitutional Amendments",
    about_find_6: "Schedules of the Constitution",
    about_find_7: "Important constitutional facts",
    about_find_8: "Educational and informative articles",
    about_find_9: "Information useful for students and competitive exam preparation",
    about_commitment_title: "Our Commitment",
    about_commitment: "We aim to provide accurate, useful and regularly updated information. We make reasonable efforts to verify the information published on this website using reliable and publicly available sources.",
    about_independent: "Samvidhan is an independent informational and educational website. It is not affiliated with or operated by the Government of India unless specifically stated on a particular page.",
    about_contact: "If you find an error, outdated information or have a suggestion, please contact us.",
    about_email: "Email:",
    about_thanks: "Thank you for visiting Samvidhan.",
    about_tagline: "Samvidhan – Know Your Constitution.",
    contact_title: "Contact Us",
    contact_intro: "We would love to hear from you.",
    contact_intro_detail: "If you have a question, suggestion, feedback, correction or notice an error on our website, please feel free to contact us.",
    contact_get_in_touch: "Get in Touch",
    contact_can_contact: "You can contact us regarding:",
    contact_item_1: "Suggestions and feedback",
    contact_item_2: "Correction of information",
    contact_item_3: "Website-related issues",
    contact_item_4: "Content-related queries",
    contact_item_5: "Copyright concerns",
    contact_item_6: "General enquiries",
    contact_response: "We try to review and respond to genuine enquiries as soon as possible.",
    contact_corrections: "Content Corrections",
    contact_corrections_detail: "We make reasonable efforts to ensure that the information published on Samvidhan is accurate and useful.",
    contact_corrections_request: "If you believe that any information on the website is incorrect, incomplete or outdated, please email us with the relevant page URL and details of the correction.",
    contact_corrections_thanks: "We appreciate your help in improving the accuracy and quality of our content.",
    contact_thanks: "Thank you for getting in touch with Samvidhan.",
    category: "Category",
    read_time: "min read",
    search_results_for: "Search results for",
    clear_search: "Clear search",
    nav_premium: "Premium",
    common_easy: "Easy",
    common_medium: "Medium",
    common_hard: "Hard",
    nav_preamble: "Preamble",
    nav_faq: "FAQ",
    footer_navigation: "Navigation",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    nav_dashboard: "Dashboard",
    nav_open_menu: "Open menu",
    nav_close_menu: "Close menu",
    dashboard_title: "Dashboard",
    dashboard_welcome: "Welcome back!",
    dashboard_intro: "Continue your journey of learning the Indian Constitution.",
    exam_title: "Exam Preparation",
    exam_sub: "Structured Constitution and polity practice for MPSC and UPSC learners.",
    exam_mpsc: "MPSC Constitution Preparation",
    exam_upsc: "UPSC Polity Preparation",
    exam_mpsc_desc: "A practical path from foundational Articles to Maharashtra-focused revision.",
    exam_upsc_desc: "Build conceptual depth and practise the reasoning expected in civil services exams.",
    notes_title: "Premium Notes",
    notes_sub: "Compact, searchable note architecture ready for verified study content.",
    progress_title: "My Progress",
    progress_sub: "A clear view of your practice habits. Account sync will be added with authentication.",
    learn_title: "Learn Indian Constitution",
    learn_sub: "Choose a path that matches your curiosity, then build from reliable constitutional concepts.",
    advanced_title: "Advanced Quiz",
    advanced_sub: "Challenge your understanding with focused, exam-oriented practice.",
    learn_article: "Article Explained",
    learn_article_desc: "Read clear explanations of individual Articles.",
    learn_rights: "Fundamental Rights Explained",
    learn_rights_desc: "Understand rights, remedies and real-world meaning.",
    learn_basics: "Constitution Basics",
    learn_basics_desc: "Start with the structure and language of the Constitution.",
    learn_amendments: "Important Amendments",
    learn_amendments_desc: "Trace the changes that shaped constitutional practice.",
    learn_mpsc: "MPSC Preparation",
    learn_mpsc_desc: "Build a focused foundation for MPSC polity study.",
    learn_upsc: "UPSC Preparation",
    learn_upsc_desc: "Develop depth through structured polity practice.",
    dashboard_learning: "My Learning",
    dashboard_saved: "Saved Articles",
    dashboard_recent_quiz: "Recent Quiz",
    dashboard_quiz_progress: "Quiz Progress",
    dashboard_premium_status: "Premium Status",
    dashboard_recommended_topics: "Recommended Topics",
    dashboard_quick_actions: "Quick Actions",
    dashboard_continue: "Continue Learning",
    dashboard_explore: "Explore Articles",
    dashboard_take_quiz: "Take a Quiz",
    dashboard_view_progress: "View Progress",
    dashboard_bookmarks: "My Bookmarks",
    dashboard_empty: "No saved articles yet.",
    dashboard_empty_help: "Start exploring the Constitution and save important Articles.",
    dashboard_activity: "Recent Activity",
    dashboard_your_progress: "Your Progress",
    dashboard_completed: "Quizzes Completed",
    dashboard_average: "Average Score",
    dashboard_best: "Best Score",
    dashboard_questions: "Questions Answered",
    dashboard_correct: "Correct Answers",
    dashboard_accuracy: "Accuracy",
    dashboard_premium: "Premium",
    dashboard_free: "Free Plan",
    dashboard_member: "Premium Member",
    dashboard_upgrade: "Upgrade to Premium",
    dashboard_recommended: "Recommended for You",
    dashboard_important: "Important Articles",
    dashboard_rights: "Fundamental Rights",
    dashboard_duties: "Fundamental Duties",
    dashboard_amendments: "Constitutional Amendments",
    dashboard_view_all: "View All",
    dashboard_no_activity: "No recent activity yet.",
    premium_title: "Premium",
    premium_hero: "Unlock More. Learn Better.",
    premium_features: "Premium Features",
    premium_monthly: "Monthly Plan",
    premium_yearly: "Yearly Plan",
    premium_upgrade: "Upgrade Now",
    premium_best: "Best Value",
    premium_ad_free: "Ad-Free Experience",
    premium_content: "Premium Content",
    premium_quiz: "Advanced Quiz",
    premium_exam: "Exam Preparation",
    premium_tracking: "Progress Tracking",
    premium_current: "Current plan",
    premium_choose: "Choose plan",
    premium_unlock: "Upgrade to unlock this content.",
    premium_view_plans: "View Premium Plans",
    common_reading_list: "Reading list",
    common_link_soon: "Link coming soon",
    common_buy: "Buy book",
    common_practice: "Practice now",
    common_open_note: "Open note",
    common_all_topics: "All topics",
    common_all_levels: "All levels",
    common_topic: "Topic",
    common_difficulty: "Difficulty",
    common_question: "Question",
    common_view_progress: "View my progress",
    common_study_tracks: "Study tracks",
    common_revision_library: "Revision library",
    common_learning_record: "Learning record",
    common_my_learning_space: "My learning space",
    common_start_learning: "Start learning",
    common_quick_links: "Quick links",
    common_plan: "Plan",
    common_saved_list: "Your personal reading list",
    common_no_attempts: "No attempts yet",
    common_current_access: "Current access",
    common_not_started: "Not started",
    common_free_access: "Basic access",
    common_everything_monthly: "Everything in Monthly",
    common_full_year: "Full-year access",
    common_advanced_revision: "Advanced revision tools",
    common_what_adds: "What Premium adds",
    common_explore_exam: "Explore exam preparation",
    common_challenge: "Challenge your understanding with focused, exam-oriented practice.",
    common_premium_notes: "Premium Notes",
    common_compact_notes: "Compact, searchable note architecture ready for verified study content.",
    common_topics_practiced: "Topics practiced",
    common_guided_start: "A guided starting point",
    common_choose_path: "Choose a path that matches your curiosity, then build from reliable constitutional concepts.",
    common_start: "Start learning",
    common_current_plan: "Current plan",
    common_free: "Free",
    common_premium_member: "Premium",
    common_unlock: "Unlock Premium",
    common_continue: "Continue learning",
    common_not_available: "—",
    common_book_cover: "Book cover",
    common_account_sync: "Account sync will be added with authentication."
  },
  mr: {
    nav_home: "मुख्यपृष्ठ",
    nav_articles: "कलमे",
    nav_categories: "श्रेणी",
    nav_rights: "मूलभूत अधिकार",
    nav_amendments: "दुरुस्त्या",
    nav_quiz: "प्रश्नमंजुषा",
    nav_about: "आमच्याविषयी",
    nav_duties: "मूलभूत कर्तव्ये",
    nav_directive: "मार्गदर्शक तत्त्वे",
    nav_bookmarks: "जतन केलेली कलमे",
    search_placeholder: "कलम क्रमांक, अधिकार किंवा कीवर्ड शोधा...",
    search_button: "शोधा",
    popular_searches: "लोकप्रिय शोध",
    hero_badge: "भारतीय संविधान",
    hero_heading_1: "आपले संविधान जाणून घ्या.",
    hero_heading_2: "आपले अधिकार समजून घ्या.",
    hero_desc: "भारतीय संविधानातील कलमे, अधिकार, कर्तव्ये आणि दुरुस्त्या सोप्या भाषेत समजून घ्या.",
    stat_articles: "कलमे",
    stat_parts: "भाग",
    stat_schedules: "परिशिष्टे",
    stat_amendments: "दुरुस्त्या",
    explore_heading: "संविधान जाणून घ्या",
    important_articles: "महत्त्वाची कलमे जी तुम्हाला माहीत असावीत",
    view_all_articles: "सर्व कलमे पहा",
    learn_more: "अधिक जाणून घ्या",
    view_details: "तपशील पहा",
    did_you_know: "तुम्हाला माहिती आहे का?",
    footer_tagline: "आपले संविधान जाणून घ्या. आपले अधिकार समजून घ्या.",
    footer_disclaimer_title: "अस्वीकरण",
    footer_disclaimer: "ही वेबसाइट केवळ शैक्षणिक आणि माहितीच्या उद्देशाने तयार करण्यात आली आहे. ही कायदेशीर सल्ला सेवा नाही. कायदेशीर बाबींसाठी पात्र कायदे तज्ज्ञांचा सल्ला घ्या.",
    footer_copyright: "© २०२६ संविधान.",
    articles_page_title: "संवैधानिक कलमे",
    articles_page_sub: "भारतीय संविधानातील कलमे शोधा आणि जाणून घ्या.",
    filter_all: "सर्व कलमे",
    sort_asc: "कलम क्रमांक: चढत्या क्रमाने",
    sort_desc: "कलम क्रमांक: उतरत्या क्रमाने",
    no_results: "तुमच्या शोधाशी जुळणारे कोणतेही कलम नाही.",
    official_text: "अधिकृत संवैधानिक मजकूर",
    simple_explanation: "सोपे स्पष्टीकरण (इंग्रजी)",
    marathi_explanation: "सोप्या मराठीत",
    very_simple: "अगदी सोपे",
    easy_example: "सोपे उदाहरण",
    related_articles: "संबंधित कलमे",
    save_article: "कलम जतन करा",
    saved: "जतन केले",
    source_label: "स्रोत",
    last_verified: "शेवटची पडताळणी",
    verify_notice: "हा मजकूर एक नमुना शैक्षणिक रचना आहे. यावर अवलंबून राहण्यापूर्वी कृपया सर्व संवैधानिक मजकूर अधिकृत स्रोताकडून पडताळून पहा.",
    rights_title: "मूलभूत अधिकार",
    rights_sub: "संविधानाने हमी दिलेले तुमचे मूलभूत अधिकार समजून घ्या.",
    duties_title: "मूलभूत कर्तव्ये",
    duties_sub: "भारताचा नागरिक म्हणून तुमची कर्तव्ये जाणून घ्या.",
    directive_title: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे",
    directive_sub: "शासन आणि सार्वजनिक धोरणाला दिशा देणारी मार्गदर्शक तत्त्वे.",
    amendments_title: "संविधान दुरुस्त्या",
    amendments_sub: "कालांतराने संविधानात झालेले महत्त्वाचे बदल जाणून घ्या.",
    quiz_title: "तुमच्या संविधानाच्या ज्ञानाची चाचणी घ्या",
    quiz_start: "प्रश्नमंजुषा सुरू करा",
    quiz_next: "पुढे",
    quiz_finish: "समाप्त करा",
    quiz_score: "तुमचे गुण",
    quiz_correct: "बरोबर उत्तरे",
    quiz_wrong: "चुकीची उत्तरे",
    quiz_percentage: "टक्केवारी",
    quiz_excellent: "उत्कृष्ट!",
    quiz_keep_learning: "शिकत रहा!",
    quiz_try_again: "पुन्हा प्रयत्न करा",
    quiz_question: "प्रश्न",
    quiz_of: "पैकी",
    bookmarks_title: "माझी जतन केलेली कलमे",
    bookmarks_empty: "अजून कोणतेही कलम जतन केलेले नाही.",
    about_title: "संविधान विषयी",
    about_body: "संविधान हे भारतीय संविधान सर्वसामान्य लोकांना सोप्या आणि समजण्यासारख्या भाषेत समजावून सांगण्यासाठी तयार केलेले शैक्षणिक व्यासपीठ आहे.",
    about_mission_title: "आमचे ध्येय",
    about_mission_body: "संवैधानिक ज्ञान सोपे आणि सहज उपलब्ध करून देणे.",
    about_intro: "संविधान – भारताच्या संविधानाची माहिती सोप्या, स्पष्ट आणि सर्वांना सहज समजेल अशा पद्धतीने उपलब्ध करून देण्यासाठी तयार केलेले एक शैक्षणिक आणि माहितीपर व्यासपीठ आहे.",
    about_goal: "भारताचे संविधान, मूलभूत अधिकार आणि कर्तव्ये, संविधानातील महत्त्वाचे अनुच्छेद, घटनादुरुस्त्या, अनुसूच्या आणि संविधानाशी संबंधित इतर महत्त्वाच्या विषयांची माहिती सोप्या भाषेत उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.",
    about_mission_detail: "भारताचे संविधान हा आपल्या लोकशाहीचा पाया आहे. मात्र संविधानातील कायदेशीर आणि तांत्रिक भाषा अनेकदा समजण्यास कठीण वाटू शकते.",
    about_mission_detail_2: "Samvidhan चे उद्दिष्ट संविधानातील माहिती सोप्या, व्यवस्थित आणि समजण्यास सुलभ स्वरूपात मांडणे आहे, जेणेकरून विद्यार्थी, नागरिक, स्पर्धा परीक्षांची तयारी करणारे विद्यार्थी आणि संविधानाबद्दल जाणून घेण्याची इच्छा असणाऱ्या प्रत्येकाला त्याचा सहज अभ्यास करता येईल.",
    about_find_title: "Samvidhan वर तुम्हाला काय मिळेल?",
    about_find_1: "भारताच्या संविधानाची माहिती",
    about_find_2: "संविधानातील अनुच्छेद आणि तरतुदी",
    about_find_3: "मूलभूत अधिकार आणि मूलभूत कर्तव्ये",
    about_find_4: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे",
    about_find_5: "संविधानातील घटनादुरुस्त्या",
    about_find_6: "संविधानाच्या अनुसूच्या",
    about_find_7: "संविधानाशी संबंधित महत्त्वाची तथ्ये",
    about_find_8: "शैक्षणिक आणि माहितीपर लेख",
    about_find_9: "विद्यार्थी आणि स्पर्धा परीक्षांसाठी उपयुक्त माहिती",
    about_commitment_title: "आमची बांधिलकी",
    about_commitment: "आम्ही अचूक, उपयुक्त आणि शक्य तितकी अद्ययावत माहिती देण्याचा प्रयत्न करतो. वेबसाइटवर प्रकाशित केलेली माहिती विश्वसनीय आणि सार्वजनिकरित्या उपलब्ध स्रोतांच्या आधारे तपासण्याचा आम्ही वाजवी प्रयत्न करतो.",
    about_independent: "Samvidhan हे एक स्वतंत्र शैक्षणिक आणि माहितीपर व्यासपीठ आहे. एखाद्या पृष्ठावर स्पष्टपणे नमूद केले नसल्यास, ही वेबसाइट भारत सरकारशी संलग्न किंवा भारत सरकारद्वारे चालवली जात नाही.",
    about_contact: "वेबसाइटवरील कोणतीही माहिती चुकीची किंवा कालबाह्य असल्याचे आढळल्यास किंवा तुमच्याकडे काही सूचना असल्यास आमच्याशी संपर्क साधा.",
    about_email: "ईमेल:",
    about_thanks: "Samvidhan ला भेट दिल्याबद्दल धन्यवाद.",
    about_tagline: "Samvidhan – आपले संविधान जाणून घ्या.",
    contact_title: "आमच्याशी संपर्क साधा",
    contact_intro: "तुमचे प्रश्न, सूचना आणि अभिप्राय जाणून घेण्यास आम्हाला आनंद होईल.",
    contact_intro_detail: "वेबसाइटशी संबंधित काही प्रश्न असल्यास, सूचना किंवा अभिप्राय द्यायचा असल्यास किंवा वेबसाइटवरील कोणतीही माहिती चुकीची अथवा कालबाह्य असल्याचे आढळल्यास आमच्याशी संपर्क साधा.",
    contact_get_in_touch: "संपर्क",
    contact_can_contact: "तुम्ही खालील बाबींसाठी आमच्याशी संपर्क साधू शकता:",
    contact_item_1: "सूचना आणि अभिप्राय",
    contact_item_2: "माहितीमध्ये दुरुस्ती",
    contact_item_3: "वेबसाइटशी संबंधित समस्या",
    contact_item_4: "सामग्रीशी संबंधित प्रश्न",
    contact_item_5: "कॉपीराइटशी संबंधित बाबी",
    contact_item_6: "सामान्य चौकशी",
    contact_response: "आम्ही प्राप्त झालेल्या योग्य चौकशीचे शक्य तितक्या लवकर परीक्षण करून उत्तर देण्याचा प्रयत्न करतो.",
    contact_corrections: "माहितीमध्ये दुरुस्ती",
    contact_corrections_detail: "Samvidhan वर प्रकाशित केलेली माहिती अचूक आणि उपयुक्त असावी यासाठी आम्ही वाजवी प्रयत्न करतो.",
    contact_corrections_request: "वेबसाइटवरील कोणतीही माहिती चुकीची, अपूर्ण किंवा कालबाह्य असल्याचे तुम्हाला वाटत असल्यास, संबंधित पृष्ठाची लिंक आणि दुरुस्तीची माहिती आम्हाला ईमेलद्वारे पाठवा.",
    contact_corrections_thanks: "वेबसाइटवरील माहितीची अचूकता आणि गुणवत्ता सुधारण्यासाठी तुमचे सहकार्य आमच्यासाठी महत्त्वाचे आहे.",
    contact_thanks: "Samvidhan शी संपर्क साधल्याबद्दल धन्यवाद.",
    category: "श्रेणी",
    read_time: "मिनिट वाचन",
    search_results_for: "यासाठी शोध निकाल",
    clear_search: "शोध साफ करा",
    nav_premium: "प्रीमियम",
    common_easy: "सोपे",
    common_medium: "मध्यम",
    common_hard: "कठीण",
    nav_preamble: "उद्देशिका",
    nav_faq: "प्रश्नोत्तरे",
    footer_navigation: "नेव्हिगेशन",
    footer_privacy: "गोपनीयता धोरण",
    footer_terms: "नियम आणि अटी",
    nav_dashboard: "डॅशबोर्ड",
    nav_open_menu: "मेनू उघडा",
    nav_close_menu: "मेनू बंद करा",
    dashboard_title: "डॅशबोर्ड",
    dashboard_welcome: "पुन्हा स्वागत आहे!",
    dashboard_intro: "भारतीय संविधान शिकण्याचा तुमचा प्रवास सुरू ठेवा.",
    exam_title: "परीक्षा तयारी",
    exam_sub: "MPSC आणि UPSC विद्यार्थ्यांसाठी संविधान आणि राज्यशास्त्राचा संरचित सराव.",
    exam_mpsc: "MPSC संविधान तयारी",
    exam_upsc: "UPSC राज्यशास्त्र तयारी",
    exam_mpsc_desc: "मूलभूत कलमांपासून महाराष्ट्र-केंद्रित उजळणीपर्यंतचा व्यावहारिक मार्ग.",
    exam_upsc_desc: "नागरी सेवा परीक्षांसाठी आवश्यक संकल्पनात्मक सखोलता आणि तर्क विकसित करा.",
    notes_title: "प्रीमियम नोंदी",
    notes_sub: "पडताळलेल्या अभ्यास सामग्रीसाठी संक्षिप्त आणि शोधता येणारी नोंद रचना.",
    progress_title: "माझी प्रगती",
    progress_sub: "तुमच्या सरावाची स्पष्ट नोंद. प्रमाणीकरण जोडल्यानंतर खाते समक्रमण उपलब्ध होईल.",
    learn_title: "भारतीय संविधान शिका",
    learn_sub: "तुमच्या आवडीनुसार मार्ग निवडा आणि विश्वसनीय संवैधानिक संकल्पनांपासून पुढे जा.",
    advanced_title: "प्रगत प्रश्नमंजुषा",
    advanced_sub: "केंद्रित, परीक्षाभिमुख सरावाने तुमचे ज्ञान तपासा.",
    learn_article: "कलमाचे स्पष्टीकरण",
    learn_article_desc: "वैयक्तिक कलमांची स्पष्ट स्पष्टीकरणे वाचा.",
    learn_rights: "मूलभूत अधिकारांचे स्पष्टीकरण",
    learn_rights_desc: "अधिकार, उपाय आणि त्यांचा वास्तविक अर्थ समजून घ्या.",
    learn_basics: "संविधानाची मूलतत्त्वे",
    learn_basics_desc: "संविधानाची रचना आणि भाषा समजून सुरुवात करा.",
    learn_amendments: "महत्त्वाच्या दुरुस्त्या",
    learn_amendments_desc: "संवैधानिक व्यवहार घडवणारे बदल जाणून घ्या.",
    learn_mpsc: "MPSC तयारी",
    learn_mpsc_desc: "MPSC राज्यशास्त्राच्या अभ्यासासाठी केंद्रित पाया तयार करा.",
    learn_upsc: "UPSC तयारी",
    learn_upsc_desc: "संरचित राज्यशास्त्राच्या सरावातून सखोलता वाढवा.",
    dashboard_learning: "माझे शिक्षण",
    dashboard_saved: "जतन केलेली कलमे",
    dashboard_recent_quiz: "अलीकडील प्रश्नमंजुषा",
    dashboard_quiz_progress: "प्रश्नमंजुषेची प्रगती",
    dashboard_premium_status: "प्रीमियम स्थिती",
    dashboard_recommended_topics: "शिफारस केलेले विषय",
    dashboard_quick_actions: "जलद पर्याय",
    dashboard_continue: "शिकणे सुरू ठेवा",
    dashboard_explore: "कलमे पहा",
    dashboard_take_quiz: "प्रश्नमंजुषा सोडवा",
    dashboard_view_progress: "प्रगती पहा",
    dashboard_bookmarks: "माझी जतन केलेली कलमे",
    dashboard_empty: "अजून कोणतेही कलम जतन केलेले नाही.",
    dashboard_empty_help: "संविधानातील महत्त्वाची कलमे शोधा आणि जतन करा.",
    dashboard_activity: "अलीकडील कृती",
    dashboard_your_progress: "तुमची प्रगती",
    dashboard_completed: "पूर्ण केलेल्या प्रश्नमंजुषा",
    dashboard_average: "सरासरी गुण",
    dashboard_best: "सर्वोत्तम गुण",
    dashboard_questions: "उत्तर दिलेले प्रश्न",
    dashboard_correct: "बरोबर उत्तरे",
    dashboard_accuracy: "अचूकता",
    dashboard_premium: "प्रीमियम",
    dashboard_free: "मोफत योजना",
    dashboard_member: "प्रीमियम सदस्य",
    dashboard_upgrade: "प्रीमियममध्ये अपग्रेड करा",
    dashboard_recommended: "तुमच्यासाठी शिफारस",
    dashboard_important: "महत्त्वाची कलमे",
    dashboard_rights: "मूलभूत अधिकार",
    dashboard_duties: "मूलभूत कर्तव्ये",
    dashboard_amendments: "संविधान दुरुस्त्या",
    dashboard_view_all: "सर्व पहा",
    dashboard_no_activity: "अलीकडील कोणतीही कृती नाही.",
    premium_title: "प्रीमियम",
    premium_hero: "अधिक शिका. अधिक चांगले समजून घ्या.",
    premium_features: "प्रीमियम वैशिष्ट्ये",
    premium_monthly: "मासिक योजना",
    premium_yearly: "वार्षिक योजना",
    premium_upgrade: "आता अपग्रेड करा",
    premium_best: "सर्वोत्तम पर्याय",
    premium_ad_free: "जाहिरातमुक्त अनुभव",
    premium_content: "प्रीमियम सामग्री",
    premium_quiz: "प्रगत प्रश्नमंजुषा",
    premium_exam: "स्पर्धा परीक्षा तयारी",
    premium_tracking: "प्रगतीचे निरीक्षण",
    premium_current: "सध्याची योजना",
    premium_choose: "योजना निवडा",
    premium_unlock: "हे सामग्री पाहण्यासाठी अपग्रेड करा.",
    premium_view_plans: "प्रीमियम योजना पहा",
    common_reading_list: "वाचन यादी",
    common_link_soon: "लिंक लवकरच उपलब्ध होईल",
    common_buy: "पुस्तक खरेदी करा",
    common_practice: "आता सराव करा",
    common_open_note: "नोंद उघडा",
    common_all_topics: "सर्व विषय",
    common_all_levels: "सर्व स्तर",
    common_topic: "विषय",
    common_difficulty: "कठीणता",
    common_question: "प्रश्न",
    common_view_progress: "माझी प्रगती पहा",
    common_study_tracks: "अभ्यास मार्ग",
    common_revision_library: "उजळणी संग्रह",
    common_learning_record: "शिकण्याची नोंद",
    common_my_learning_space: "माझे शिक्षण क्षेत्र",
    common_start_learning: "शिकायला सुरुवात करा",
    common_quick_links: "जलद दुवे",
    common_plan: "योजना",
    common_saved_list: "तुमची वैयक्तिक वाचन यादी",
    common_no_attempts: "अजून प्रयत्न केलेले नाहीत",
    common_current_access: "सध्याचा प्रवेश",
    common_not_started: "सुरू केलेले नाही",
    common_free_access: "मूलभूत प्रवेश",
    common_everything_monthly: "मासिक योजनेतील सर्व सुविधा",
    common_full_year: "पूर्ण वर्षाचा प्रवेश",
    common_advanced_revision: "प्रगत उजळणी साधने",
    common_what_adds: "प्रीमियममध्ये काय मिळते",
    common_explore_exam: "परीक्षा तयारी पहा",
    common_challenge: "केंद्रित, परीक्षाभिमुख सरावाने तुमचे ज्ञान तपासा.",
    common_premium_notes: "प्रीमियम नोंदी",
    common_compact_notes: "पडताळलेल्या अभ्यास सामग्रीसाठी संक्षिप्त आणि शोधता येणारी नोंद रचना.",
    common_topics_practiced: "सराव केलेले विषय",
    common_guided_start: "मार्गदर्शित सुरुवात",
    common_choose_path: "तुमच्या आवडीनुसार मार्ग निवडा आणि विश्वसनीय संवैधानिक संकल्पनांपासून पुढे जा.",
    common_start: "शिकायला सुरुवात करा",
    common_current_plan: "सध्याची योजना",
    common_free: "मोफत",
    common_premium_member: "प्रीमियम",
    common_unlock: "प्रीमियम मिळवा",
    common_continue: "शिकणे सुरू ठेवा",
    common_not_available: "—",
    common_book_cover: "पुस्तकाचे मुखपृष्ठ",
    common_account_sync: "प्रमाणीकरण जोडल्यानंतर खाते समक्रमण उपलब्ध होईल."
  }
};
function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY$2) || "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY$2, language);
    } catch {
    }
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = (lang) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => prev === "en" ? "mr" : "en");
  const t = (key) => {
    var _a;
    return ((_a = STRINGS[language]) == null ? void 0 : _a[key]) ?? STRINGS.en[key] ?? key;
  };
  const pick = (obj) => obj ? obj[language] ?? obj.en : "";
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, setLanguage, toggleLanguage, t, pick }, children });
}
function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
function LanguageToggle({ compact = false }) {
  const { language, setLanguage } = useLanguage();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white/60 dark:bg-white/5 p-0.5 text-sm",
      role: "group",
      "aria-label": "Language selector",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setLanguage("en"),
            "aria-pressed": language === "en",
            className: `px-3 py-1 rounded-full transition-colors ${language === "en" ? "bg-navy text-paper dark:bg-saffron dark:text-ink" : "text-navy/70 dark:text-ink-dark/70 hover:text-navy dark:hover:text-ink-dark"}`,
            children: "EN"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setLanguage("mr"),
            "aria-pressed": language === "mr",
            lang: "mr",
            className: `px-3 py-1 rounded-full transition-colors font-devSans ${language === "mr" ? "bg-navy text-paper dark:bg-saffron dark:text-ink" : "text-navy/70 dark:text-ink-dark/70 hover:text-navy dark:hover:text-ink-dark"}`,
            children: "मराठी"
          }
        )
      ]
    }
  );
}
const ThemeContext = createContext(null);
const STORAGE_KEY$1 = "samvidhan_theme";
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY$1);
      if (stored) return stored;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY$1, theme);
    } catch {
    }
  }, [theme]);
  const toggleTheme = () => setTheme((prev) => prev === "dark" ? "light" : "dark");
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme, setTheme }, children });
}
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggleTheme,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      "aria-pressed": isDark,
      className: "flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 dark:border-ink-dark/20 text-navy dark:text-ink-dark hover:bg-navy/5 dark:hover:bg-white/10 transition-colors",
      children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 17 }) : /* @__PURE__ */ jsx(Moon, { size: 17 })
    }
  );
}
function Navbar() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/articles", label: t("nav_articles") },
    { to: "/fundamental-rights", label: t("nav_rights") },
    { to: "/amendments", label: t("nav_amendments") },
    { to: "/quiz", label: t("nav_quiz") },
    { to: "/about", label: t("nav_about") }
    // { to: '/premium', label: t('nav_premium') },
    // { to: '/dashboard', label: t('nav_dashboard') },
  ];
  const linkClass = ({ isActive }) => `text-sm font-medium transition-colors hover:text-saffron ${isActive ? "text-saffron" : "text-navy/80 dark:text-ink-dark/80"}`;
  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/articles?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setOpen(false);
      setQuery("");
    }
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 border-b border-navy/10 dark:border-ink-dark/10 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", "aria-label": "Samvidhan home", children: [
        /* @__PURE__ */ jsx(ChakraMark, { className: "h-7 w-7 text-navy dark:text-saffron" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold tracking-tight text-navy dark:text-ink-dark", children: "SAMVIDHAN" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-7", "aria-label": "Primary", children: links.map((l) => /* @__PURE__ */ jsx(NavLink, { to: l.to, className: linkClass, lang: language, children: l.label }, l.to)) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setSearchOpen((v) => !v),
            "aria-label": t("search_button"),
            "aria-expanded": searchOpen,
            className: "flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 dark:border-ink-dark/20 text-navy dark:text-ink-dark hover:bg-navy/5 dark:hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ jsx(Search, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        /* @__PURE__ */ jsx(ThemeToggle, {})
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "lg:hidden flex h-9 w-9 items-center justify-center rounded-full text-navy dark:text-ink-dark",
          onClick: () => setOpen((v) => !v),
          "aria-label": open ? t("nav_close_menu") : t("nav_open_menu"),
          "aria-expanded": open,
          children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
        }
      )
    ] }),
    searchOpen && /* @__PURE__ */ jsx("div", { className: "border-t border-navy/10 dark:border-ink-dark/10 bg-paper dark:bg-paper-dark", children: /* @__PURE__ */ jsxs("form", { onSubmit: submitSearch, className: "mx-auto max-w-3xl px-4 py-3 flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          autoFocus: true,
          type: "search",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: t("search_placeholder"),
          lang: language,
          className: "flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2 text-sm text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "rounded-full bg-navy dark:bg-saffron px-4 py-2 text-sm font-medium text-paper dark:text-ink",
          children: t("search_button")
        }
      )
    ] }) }),
    open && /* @__PURE__ */ jsxs("div", { className: "lg:hidden border-t border-navy/10 dark:border-ink-dark/10 bg-paper dark:bg-paper-dark px-4 py-4", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1", "aria-label": "Mobile", children: [
        links.map((l) => /* @__PURE__ */ jsx(
          NavLink,
          {
            to: l.to,
            onClick: () => setOpen(false),
            lang: language,
            className: ({ isActive }) => `rounded-lg px-3 py-2.5 text-base font-medium ${isActive ? "bg-navy/5 dark:bg-white/10 text-saffron" : "text-navy dark:text-ink-dark"}`,
            children: l.label
          },
          l.to
        )),
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/fundamental-duties",
            onClick: () => setOpen(false),
            lang: language,
            className: "rounded-lg px-3 py-2.5 text-base font-medium text-navy dark:text-ink-dark",
            children: t("nav_duties")
          }
        ),
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/bookmarks",
            onClick: () => setOpen(false),
            lang: language,
            className: "rounded-lg px-3 py-2.5 text-base font-medium text-navy dark:text-ink-dark",
            children: t("nav_bookmarks")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submitSearch, className: "mt-3 flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "search",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: t("search_placeholder"),
            lang: language,
            className: "flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2 text-sm"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "rounded-full bg-navy dark:bg-saffron px-4 py-2 text-sm font-medium text-paper dark:text-ink",
            children: t("search_button")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        /* @__PURE__ */ jsx(ThemeToggle, {})
      ] })
    ] })
  ] });
}
const AuthContext = createContext(null);
const INITIAL_USER = { id: "demo-user", name: "Constitution learner", email: "demo@samvidhan.local", plan: "free" };
function AuthProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER);
  const isPremium = (user == null ? void 0 : user.plan) === "premium";
  const upgradeToPremium = () => setUser((current) => ({ ...current, plan: "premium" }));
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: { user, isPremium, upgradeToPremium }, children });
}
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
const monetizationConfig = {
  ads: { enabled: false }
};
function Advertisement({ placement = "banner", className = "" }) {
  const { isPremium } = useAuth();
  useRef(null);
  const configured = monetizationConfig.ads.enabled;
  useEffect(() => {
  }, [configured]);
  return null;
}
function Footer() {
  const { t, language } = useLanguage();
  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/articles", label: t("nav_articles") },
    { to: "/fundamental-rights", label: t("nav_rights") },
    { to: "/fundamental-duties", label: t("nav_duties") },
    { to: "/amendments", label: t("nav_amendments") },
    { to: "/learn", label: t("nav_preamble") },
    { to: "/faq", label: t("nav_faq") },
    { to: "/about", label: t("nav_about") },
    { to: "/contact", label: t("contact_title") },
    { to: "/privacy-policy", label: t("footer_privacy") },
    { to: "/terms", label: t("footer_terms") },
    { to: "/disclaimer", label: t("footer_disclaimer_title") }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "mt-16 border-t border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.03]", children: [
    /* @__PURE__ */ jsx(Advertisement, { placement: "banner" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ChakraMark, { className: "h-6 w-6 text-navy dark:text-saffron" }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: "SAMVIDHAN" })
          ] }),
          /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-sm text-base leading-7 text-ink/70 dark:text-ink-dark/70", children: t("footer_tagline") }),
          /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-sm text-sm leading-6 text-ink/60 dark:text-ink-dark/60", children: language === "mr" ? "संविधान हे स्वतंत्र शैक्षणिक व्यासपीठ आहे." : "Samvidhan is an independent educational platform." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-navy dark:text-ink-dark", children: t("footer_navigation") }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              lang: language,
              className: "py-1 text-base leading-6 text-ink/70 dark:text-ink-dark/70 hover:text-saffron transition-colors",
              children: l.label
            }
          ) }, l.to)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8 border-t border-navy/10 pt-6 dark:border-ink-dark/10", children: [
        /* @__PURE__ */ jsx("h3", { lang: language, className: "text-base font-semibold text-navy dark:text-ink-dark", children: t("footer_disclaimer_title") }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-4xl text-sm leading-6 text-ink/70 dark:text-ink-dark/70", children: t("footer_disclaimer") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center justify-between gap-3 border-t border-navy/10 pt-5 sm:flex-row dark:border-ink-dark/10", children: [
        /* @__PURE__ */ jsx("p", { lang: language, className: "text-xs text-ink/45 dark:text-ink-dark/45", children: t("footer_copyright") }),
        /* @__PURE__ */ jsx(ChakraMark, { className: "h-5 w-5 text-navy/30 dark:text-ink-dark/25", spokes: 24 })
      ] })
    ] })
  ] });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const popularKeys = ["Article 14", "Article 19", "Article 21", "Article 32"];
function SearchBar({ large = false }) {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/articles?q=${encodeURIComponent(q)}`);
  };
  const runPopular = (term) => {
    navigate(`/articles?q=${encodeURIComponent(term)}`);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: submit,
        className: `flex items-stretch gap-2 rounded-2xl border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 p-1.5 shadow-sm ${large ? "shadow-navy/5" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center gap-2 pl-3", children: [
            /* @__PURE__ */ jsx(Search, { size: 18, className: "shrink-0 text-navy/40 dark:text-ink-dark/40" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "search",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: t("search_placeholder"),
                lang: language,
                className: "w-full bg-transparent py-3 text-sm sm:text-base text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "shrink-0 rounded-xl bg-navy dark:bg-saffron px-5 sm:px-7 text-sm sm:text-base font-medium text-paper dark:text-ink transition-colors hover:bg-navy-light dark:hover:bg-saffron-light",
              children: t("search_button")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxs("span", { lang: language, className: "text-xs text-ink/50 dark:text-ink-dark/50", children: [
        t("popular_searches"),
        ":"
      ] }),
      popularKeys.map((term) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => runPopular(term),
          className: "rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 py-1 text-xs text-navy/70 dark:text-ink-dark/70 hover:border-saffron/50 hover:text-saffron transition-colors",
          children: term
        },
        term
      ))
    ] })
  ] });
}
const categories = [
  {
    key: "fundamental-rights",
    icon: "Scale",
    title: { en: "Fundamental Rights", mr: "मूलभूत अधिकार" },
    description: {
      en: "Understand your fundamental rights.",
      mr: "तुमचे मूलभूत अधिकार समजून घ्या."
    },
    path: "/fundamental-rights"
  },
  {
    key: "citizenship",
    icon: "Users",
    title: { en: "Citizenship", mr: "नागरिकत्व" },
    description: {
      en: "Who is a citizen of India, and how citizenship works.",
      mr: "भारताचा नागरिक कोण आहे आणि नागरिकत्व कसे कार्य करते."
    },
    path: "/articles?category=citizenship"
  },
  {
    key: "union-government",
    icon: "Landmark",
    title: { en: "Union Government", mr: "केंद्र सरकार" },
    description: {
      en: "Explore Articles Constitutional Articles and understand their meaning.",
      mr: "केंद्र सरकारशी संबंधित कलमे आणि त्यांचा अर्थ जाणून घ्या."
    },
    path: "/articles?category=union-government"
  },
  {
    key: "state-government",
    icon: "Building2",
    title: { en: "State Government", mr: "राज्य सरकार" },
    description: {
      en: "How state governments are structured and empowered.",
      mr: "राज्य सरकारांची रचना आणि अधिकार कसे ठरतात."
    },
    path: "/articles?category=state-government"
  },
  {
    key: "judiciary",
    icon: "Gavel",
    title: { en: "Judiciary", mr: "न्यायव्यवस्था" },
    description: {
      en: "Learn about landmark Supreme Court judgments.",
      mr: "सर्वोच्च न्यायालयाच्या महत्त्वाच्या निकालांबद्दल जाणून घ्या."
    },
    path: "/articles?category=judiciary"
  },
  {
    key: "emergency-provisions",
    icon: "AlertTriangle",
    title: { en: "Emergency Provisions", mr: "आणीबाणी तरतुदी" },
    description: {
      en: "What happens to governance during a declared emergency.",
      mr: "आणीबाणी जाहीर झाल्यावर शासनव्यवस्थेत काय बदल होतात."
    },
    path: "/articles?category=emergency-provisions"
  }
];
const exploreCards = [
  {
    icon: "ScrollText",
    title: { en: "Articles", mr: "कलमे" },
    description: {
      en: "Explore Constitutional Articles and understand their meaning.",
      mr: "संवैधानिक कलमे जाणून घ्या आणि त्यांचा अर्थ समजून घ्या."
    },
    path: "/articles"
  },
  {
    icon: "Scale",
    title: { en: "Fundamental Rights", mr: "मूलभूत अधिकार" },
    description: { en: "Understand your fundamental rights.", mr: "तुमचे मूलभूत अधिकार समजून घ्या." },
    path: "/fundamental-rights"
  },
  {
    icon: "HeartHandshake",
    title: { en: "Fundamental Duties", mr: "मूलभूत कर्तव्ये" },
    description: { en: "Know your duties as a citizen.", mr: "नागरिक म्हणून तुमची कर्तव्ये जाणून घ्या." },
    path: "/fundamental-duties"
  },
  {
    icon: "Landmark",
    title: { en: "Directive Principles", mr: "मार्गदर्शक तत्त्वे" },
    description: {
      en: "Learn about the principles guiding the government.",
      mr: "शासनाला दिशा देणाऱ्या तत्त्वांबद्दल जाणून घ्या."
    },
    path: "/directive-principles"
  },
  {
    icon: "PenLine",
    title: { en: "Amendments", mr: "दुरुस्त्या" },
    description: {
      en: "Explore important Constitutional Amendments.",
      mr: "महत्त्वाच्या संविधान दुरुस्त्यांबद्दल जाणून घ्या."
    },
    path: "/amendments"
  },
  {
    icon: "Gavel",
    title: { en: "Important Cases", mr: "महत्त्वाचे खटले" },
    description: {
      en: "Learn about landmark Supreme Court judgments.",
      mr: "सर्वोच्च न्यायालयाच्या महत्त्वाच्या निकालांबद्दल जाणून घ्या."
    },
    path: "/articles?category=judiciary"
  }
];
const heroStats = [
  { key: "stat_articles", value: "470+", verified: false },
  { key: "stat_parts", value: "25", verified: false },
  { key: "stat_schedules", value: "12", verified: false },
  { key: "stat_amendments", value: "106+", verified: false }
];
function getCategoryByKey(key) {
  return categories.find((c) => c.key === key);
}
function Hero() {
  const { t, language } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-navy/10 dark:border-ink-dark/10", children: [
    /* @__PURE__ */ jsx(
      ChakraMark,
      {
        className: "pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] text-navy/[0.05] dark:text-saffron/[0.06] sm:-right-16 sm:-top-16",
        spokes: 24
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1.5 text-xs font-medium text-saffron-dark dark:text-saffron-light", children: [
          "🇮🇳 ",
          t("hero_badge")
        ] }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            lang: language,
            className: "font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy dark:text-ink-dark sm:text-5xl lg:text-6xl",
            children: [
              t("hero_heading_1"),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-saffron", children: t("hero_heading_2") })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-lg",
            children: t("hero_desc")
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-8 max-w-2xl", children: /* @__PURE__ */ jsx(SearchBar, { large: true }) })
      ] }),
      /* @__PURE__ */ jsx("dl", { className: "relative mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-6", children: heroStats.map((stat) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] px-5 py-6 text-center",
          children: [
            /* @__PURE__ */ jsx("dt", { lang: language, className: "text-sm font-medium text-ink/55 dark:text-ink-dark/55", children: t(stat.key) }),
            /* @__PURE__ */ jsx("dd", { className: "font-display mt-2 text-3xl font-semibold text-navy dark:text-saffron sm:text-4xl", children: stat.value })
          ]
        },
        stat.key
      )) })
    ] })
  ] });
}
function DynamicIcon({ name, className, size, strokeWidth }) {
  const IconComponent = Icons[name] || Icons.BookOpen;
  return /* @__PURE__ */ jsx(IconComponent, { className, size, strokeWidth });
}
function CategoryCard({ icon, title, description, path }) {
  const { pick, language } = useLanguage();
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: path,
      className: "group relative flex flex-col rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 transition-colors hover:border-saffron/40",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 dark:bg-white/10 text-navy dark:text-saffron-light", children: /* @__PURE__ */ jsx(DynamicIcon, { name: icon, size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display mt-4 text-lg font-semibold text-navy dark:text-ink-dark", children: pick(title) }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick(description) }),
        /* @__PURE__ */ jsx("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-saffron", children: /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "transition-transform group-hover:translate-x-1" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-6 bottom-0 h-px scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100" })
      ]
    }
  );
}
const BookmarkContext = createContext(null);
const STORAGE_KEY = "samvidhan_bookmarks";
function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch {
    }
  }, [bookmarks]);
  const isBookmarked = (id) => bookmarks.includes(id);
  const toggleBookmark = (id) => {
    setBookmarks((prev) => prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]);
  };
  return /* @__PURE__ */ jsx(BookmarkContext.Provider, { value: { bookmarks, isBookmarked, toggleBookmark }, children });
}
function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarks must be used within BookmarkProvider");
  return ctx;
}
function BookmarkButton({ articleId, size = "default" }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t } = useLanguage();
  const saved = isBookmarked(articleId);
  const base = size === "small" ? "h-8 w-8" : "gap-2 px-4 py-2 rounded-full";
  if (size === "small") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => toggleBookmark(articleId),
        "aria-pressed": saved,
        "aria-label": saved ? t("saved") : t("save_article"),
        className: `flex items-center justify-center ${base} rounded-full border transition-colors ${saved ? "border-saffron bg-saffron/10 text-saffron" : "border-navy/15 dark:border-ink-dark/20 text-navy/60 dark:text-ink-dark/60 hover:text-saffron hover:border-saffron/40"}`,
        children: /* @__PURE__ */ jsx(Star, { size: 16, fill: saved ? "currentColor" : "none" })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: () => toggleBookmark(articleId),
      "aria-pressed": saved,
      className: `inline-flex items-center ${base} font-medium text-sm border transition-colors ${saved ? "border-saffron bg-saffron/10 text-saffron" : "border-navy/20 dark:border-ink-dark/25 text-navy dark:text-ink-dark hover:border-saffron/50 hover:text-saffron"}`,
      children: [
        /* @__PURE__ */ jsx(Star, { size: 16, fill: saved ? "currentColor" : "none" }),
        saved ? t("saved") : t("save_article")
      ]
    }
  );
}
function ArticleCard({ article }) {
  const { pick, t, language } = useLanguage();
  const category = getCategoryByKey(article.categoryKey);
  const numeral = article.id.replace(
    /[a-z]/gi,
    (match) => match.toUpperCase()
  );
  const articleTitle = pick(article.title);
  const articleNumber = article.articleNumber || `Article ${numeral}`;
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group flex rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] overflow-hidden transition-colors hover:border-saffron/40",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex w-16 sm:w-20 shrink-0 flex-col items-center justify-center border-r border-navy/10 dark:border-ink-dark/10 bg-navy/[0.03] dark:bg-white/[0.02] px-2 py-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-wide text-ink/40 dark:text-ink-dark/40", children: "Art." }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold text-navy dark:text-saffron-light", children: numeral })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  lang: language,
                  className: "font-display text-base font-semibold text-navy dark:text-ink-dark sm:text-lg",
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: `/article/${article.id}`,
                      "aria-label": `${articleNumber}: ${articleTitle}`,
                      className: "transition-colors hover:text-saffron focus:outline-none focus:text-saffron",
                      children: articleTitle
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/article/${article.id}`,
                  lang: language,
                  className: "mt-1 inline-block text-xs text-saffron hover:underline",
                  children: articleNumber
                }
              ),
              category && /* @__PURE__ */ jsx(
                "span",
                {
                  lang: language,
                  className: "ml-2 mt-1 inline-block text-xs text-leaf dark:text-leaf-light",
                  children: pick(category.title)
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              BookmarkButton,
              {
                articleId: article.id,
                size: "small"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              lang: language,
              className: "mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60",
              children: pick(article.simpleExplanation)
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/article/${article.id}`,
              "aria-label": `${t("view_details")}: ${articleTitle}`,
              className: "mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-saffron transition-colors hover:text-saffron/80 hover:underline focus:outline-none focus:underline",
              children: [
                t("view_details"),
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const articles = [
  {
    id: "14",
    articleNumber: "Article 14",
    title: { en: "Right to Equality", mr: "समानतेचा अधिकार" },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "The State must treat everyone equally before the law and give everyone equal protection of the law, regardless of who they are.",
      mr: "राज्याने कायद्यासमोर प्रत्येकाशी समान वागणूक दिली पाहिजे आणि कायद्याचे समान संरक्षण दिले पाहिजे."
    },
    verySimple: {
      en: "No one is above the law, and no one is left out of its protection.",
      mr: "कोणीही कायद्यापेक्षा मोठा नाही आणि कोणालाही त्याच्या संरक्षणापासून वंचित ठेवले जात नाही."
    },
    example: {
      en: "If two people are treated differently by the government without a valid legal reason, Article 14 may be relevant.",
      mr: "सरकारने दोन व्यक्तींना वैध कारणाशिवाय वेगळी वागणूक दिल्यास, कलम १४ लागू होऊ शकते."
    },
    keywords: ["equality", "equal protection", "rule of law", "समानता"],
    relatedIds: ["19", "21", "32"],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "18",
    articleNumber: "Article 18",
    title: { en: "Abolition of Titles", mr: "पदव्यांचे निर्मूलन" },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "No title, not being a military or academic distinction, shall be conferred by the State. No citizen of India shall accept any title from any foreign State.",
      mr: "राज्य कोणतीही पदवी, लष्करी किंवा शैक्षणिक विशेषण वगळता, प्रदान करणार नाही. भारताचा कोणताही नागरिक कोणत्याही परदेशी राज्याकडून कोणतीही पदवी स्वीकारणार नाही.",
      verified: true
    },
    simpleExplanation: {
      en: "Article 18 abolishes titles that create artificial social distinctions. However, military and academic distinctions are excluded from this prohibition. The Article also places constitutional restrictions on accepting titles, presents, emoluments or offices from foreign States.",
      mr: "कलम १८ सामाजिक भेद निर्माण करणाऱ्या पदव्यांच्या प्रथेला प्रतिबंध करते. मात्र लष्करी आणि शैक्षणिक विशेषणे याला अपवाद आहेत. तसेच परदेशी राज्यांकडून पदवी, भेटवस्तू, मानधन किंवा पद स्वीकारण्याबाबत संविधानात काही निर्बंध आहेत."
    },
    verySimple: {
      en: "The State cannot give titles that create social distinctions. Military and academic distinctions are exceptions.",
      mr: "सामाजिक भेद निर्माण करणाऱ्या पदव्या राज्य देऊ शकत नाही. लष्करी आणि शैक्षणिक विशेषणे याला अपवाद आहेत."
    },
    example: {
      en: "A government cannot confer a title simply to create a special social status for a person. Academic and military distinctions are treated as exceptions under Article 18.",
      mr: "एखाद्या व्यक्तीला विशेष सामाजिक दर्जा निर्माण करण्यासाठी सरकार पदवी देऊ शकत नाही. मात्र शैक्षणिक आणि लष्करी विशेषणे कलम १८ अंतर्गत अपवाद आहेत."
    },
    keywords: ["article 18", "abolition of titles", "titles in India", "fundamental rights", "equality", "Indian Constitution", "कलम १८", "पदव्यांचे निर्मूलन", "समानता", "मूलभूत अधिकार", "भारतीय संविधान"],
    relatedIds: ["15", "16", "17", "19"],
    source: { name: "Legislative Department, Ministry of Law and Justice, Government of India", url: "https://www.legislative.gov.in/" },
    lastVerified: "2026-09-21"
  },
  {
    id: "19",
    articleNumber: "Article 19",
    title: {
      en: "Protection of Certain Rights Regarding Freedom of Speech, etc.",
      mr: "भाषणस्वातंत्र्य इत्यादी संबंधी काही अधिकारांचे संरक्षण"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions or co-operative societies; to move freely throughout the territory of India; to reside and settle in any part of the territory of India; and to practise any profession, or to carry on any occupation, trade or business, subject to the Constitution.",
      mr: "सर्व नागरिकांना भाषण व अभिव्यक्ती स्वातंत्र्य, शांततेने व निःशस्त्र एकत्र जमण्याचे स्वातंत्र्य, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य, भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचे स्वातंत्र्य, भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य आणि कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य आहे; हे अधिकार संविधानातील तरतुदींच्या अधीन आहेत.",
      verified: true
    },
    simpleExplanation: {
      en: "Article 19 protects important freedoms of citizens. These include freedom of speech and expression, peaceful assembly, forming associations or unions or co-operative societies, moving freely throughout India, residing and settling anywhere in India, and practising a profession or carrying on an occupation, trade or business. These freedoms are subject to reasonable restrictions permitted by the Constitution.",
      mr: "कलम १९ नागरिकांच्या काही महत्त्वाच्या स्वातंत्र्यांचे संरक्षण करते. यामध्ये भाषण व अभिव्यक्ती स्वातंत्र्य, शांततेने एकत्र जमणे, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करणे, भारतभर मुक्तपणे फिरणे, भारतात कुठेही राहणे व स्थायिक होणे आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य यांचा समावेश होतो. ही स्वातंत्र्ये संविधानाने परवानगी दिलेल्या वाजवी निर्बंधांच्या अधीन आहेत."
    },
    verySimple: {
      en: "Citizens have important freedoms such as speaking, peacefully gathering, forming groups, moving around India, living anywhere in India and carrying on a profession, subject to constitutional restrictions.",
      mr: "नागरिकांना बोलण्याचे, शांततेने एकत्र जमण्याचे, संघटना स्थापन करण्याचे, भारतात मुक्तपणे फिरण्याचे, कुठेही राहण्याचे आणि व्यवसाय करण्याचे महत्त्वाचे स्वातंत्र्य आहे; मात्र हे अधिकार संविधानातील निर्बंधांच्या अधीन आहेत."
    },
    example: {
      en: "A citizen may express an opinion, peacefully assemble with others, form an association, travel to another part of India, settle there, or practise a profession, subject to applicable constitutional and legal restrictions.",
      mr: "एखादा नागरिक आपले मत व्यक्त करू शकतो, शांततेने इतरांसोबत एकत्र जमू शकतो, संघटना स्थापन करू शकतो, भारतातील दुसऱ्या भागात प्रवास करू शकतो, तेथे स्थायिक होऊ शकतो किंवा व्यवसाय करू शकतो; मात्र लागू असलेल्या घटनात्मक आणि कायदेशीर निर्बंधांचे पालन करावे लागते."
    },
    keywords: ["article 19", "freedom of speech", "freedom of expression", "freedom of movement", "freedom of association", "right to profession", "fundamental rights", "Indian Constitution", "कलम १९", "भाषण स्वातंत्र्य", "अभिव्यक्ती स्वातंत्र्य", "हालचालीचे स्वातंत्र्य", "संघटना स्थापन करण्याचे स्वातंत्र्य", "मूलभूत अधिकार", "भारतीय संविधान"],
    relatedIds: ["18", "20", "21"],
    source: { name: "Legislative Department, Ministry of Law and Justice, Government of India", url: "https://www.legislative.gov.in/" },
    lastVerified: "2026-09-21"
  },
  {
    id: "21",
    articleNumber: "Article 21",
    title: { en: "Protection of Life and Personal Liberty", mr: "जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण" },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "Every person has legal protection regarding life and personal liberty, subject to constitutional and legal provisions.",
      mr: "प्रत्येक व्यक्तीच्या जीवन आणि वैयक्तिक स्वातंत्र्याला कायद्याने संरक्षण दिले जाते."
    },
    verySimple: {
      en: "The government cannot take away your life or freedom except according to a lawful procedure.",
      mr: "शासन कायदेशीर प्रक्रियेशिवाय तुमचे जीवन किंवा स्वातंत्र्य हिरावून घेऊ शकत नाही."
    },
    example: {
      en: "Courts have interpreted this Article to cover matters like personal dignity and a clean environment, beyond just physical life.",
      mr: "न्यायालयांनी हे कलम केवळ शारीरिक जीवनापुरते मर्यादित न ठेवता वैयक्तिक प्रतिष्ठा आणि स्वच्छ पर्यावरणासारख्या बाबींनाही लागू केले आहे."
    },
    keywords: ["life", "liberty", "personal freedom", "due process", "जीवन", "स्वातंत्र्य"],
    relatedIds: ["14", "21a", "32"],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "21a",
    articleNumber: "Article 21A",
    title: { en: "Right to Education", mr: "शिक्षणाचा अधिकार" },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "The State must provide free and compulsory education to children within an age range defined by law.",
      mr: "कायद्याने ठरवलेल्या वयोगटातील मुलांना राज्याने मोफत आणि सक्तीचे शिक्षण दिले पाहिजे."
    },
    verySimple: {
      en: "Every child has a right to go to school for free.",
      mr: "प्रत्येक मुलाला मोफत शाळेत जाण्याचा अधिकार आहे."
    },
    example: {
      en: "A government school that refuses to admit an eligible child without valid reason may be acting against this Article.",
      mr: "वैध कारणाशिवाय पात्र मुलाला प्रवेश नाकारणारी सरकारी शाळा या कलमाच्या विरोधात वागत असू शकते."
    },
    keywords: ["education", "children", "school", "शिक्षण"],
    relatedIds: ["21", "14"],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "32",
    articleNumber: "Article 32",
    title: { en: "Right to Constitutional Remedies", mr: "संवैधानिक उपायांचा अधिकार" },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "Citizens can approach the Supreme Court directly if their fundamental rights are violated, and the Court can issue appropriate orders or writs.",
      mr: "मूलभूत अधिकारांचे उल्लंघन झाल्यास नागरिक थेट सर्वोच्च न्यायालयात दाद मागू शकतात, आणि न्यायालय योग्य आदेश किंवा रिट जारी करू शकते."
    },
    verySimple: {
      en: 'If your rights are violated, you can go straight to the Supreme Court for help. Dr. B. R. Ambedkar called this the "heart and soul" of the Constitution.',
      mr: 'तुमच्या अधिकारांचे उल्लंघन झाल्यास तुम्ही थेट सर्वोच्च न्यायालयात मदतीसाठी जाऊ शकता. डॉ. बाबासाहेब आंबेडकरांनी याला संविधानाचा "आत्मा" म्हटले आहे.'
    },
    example: {
      en: "A person whose right to equality was violated can file a writ petition in the Supreme Court under this Article.",
      mr: "ज्या व्यक्तीच्या समानतेच्या अधिकाराचे उल्लंघन झाले आहे ती या कलमाखाली सर्वोच्च न्यायालयात रिट याचिका दाखल करू शकते."
    },
    keywords: ["remedies", "writ", "supreme court", "enforcement", "उपाय", "रिट"],
    relatedIds: ["14", "21"],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "5",
    articleNumber: "Article 5",
    title: { en: "Citizenship at the Commencement of the Constitution", mr: "संविधान अंमलात येताना नागरिकत्व" },
    categoryKey: "citizenship",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "This Article laid out the rules for who was considered a citizen of India when the Constitution came into force.",
      mr: "संविधान लागू झाले तेव्हा भारताचा नागरिक कोण मानला जाईल, याचे नियम या कलमात दिले आहेत."
    },
    verySimple: {
      en: "It decided who automatically became an Indian citizen in 1950.",
      mr: "इ.स. १९५० मध्ये आपोआप भारताचा नागरिक कोण बनला हे यात ठरवले गेले."
    },
    example: {
      en: "Someone born in India and residing there at the time the Constitution began would generally fall under this Article.",
      mr: "संविधान लागू झाले त्यावेळी भारतात जन्मलेली आणि वास्तव्यास असलेली व्यक्ती साधारणपणे या कलमाखाली येते."
    },
    keywords: ["citizenship", "nationality", "नागरिकत्व"],
    relatedIds: [],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "79",
    articleNumber: "Article 79",
    title: { en: "Constitution of Parliament", mr: "संसदेची रचना" },
    categoryKey: "union-government",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "This Article establishes Parliament, consisting of the President and the two Houses — the Lok Sabha and the Rajya Sabha.",
      mr: "या कलमानुसार राष्ट्रपती आणि दोन सभागृहे — लोकसभा आणि राज्यसभा — मिळून संसद स्थापन केली जाते."
    },
    verySimple: {
      en: "India's Parliament has three parts: the President, the Lok Sabha, and the Rajya Sabha.",
      mr: "भारताच्या संसदेत तीन भाग आहेत: राष्ट्रपती, लोकसभा आणि राज्यसभा."
    },
    example: {
      en: "A new law generally needs to be passed by both the Lok Sabha and Rajya Sabha before it goes to the President.",
      mr: "नवीन कायदा राष्ट्रपतींकडे जाण्यापूर्वी साधारणपणे लोकसभा आणि राज्यसभा या दोन्ही सभागृहांनी मंजूर करणे आवश्यक असते."
    },
    keywords: ["parliament", "lok sabha", "rajya sabha", "संसद"],
    relatedIds: [],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "153",
    articleNumber: "Article 153",
    title: { en: "Governors of States", mr: "राज्यांचे राज्यपाल" },
    categoryKey: "state-government",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "This Article requires that every State have a Governor, who acts as the head of the State executive.",
      mr: "या कलमानुसार प्रत्येक राज्याला राज्यपाल असणे आवश्यक आहे, जो राज्याच्या कार्यकारी मंडळाचा प्रमुख असतो."
    },
    verySimple: {
      en: "Each state has a Governor, similar to how the country has a President.",
      mr: "देशाला राष्ट्रपती असतात त्याचप्रमाणे प्रत्येक राज्याला राज्यपाल असतात."
    },
    example: {
      en: "A Governor giving assent to a state legislature bill is acting within the role described near this Article.",
      mr: "राज्य विधानसभेच्या विधेयकाला संमती देणारे राज्यपाल या कलमाजवळ वर्णन केलेल्या भूमिकेत कार्य करत असतात."
    },
    keywords: ["governor", "state executive", "राज्यपाल"],
    relatedIds: [],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "124",
    articleNumber: "Article 124",
    title: { en: "Establishment of the Supreme Court", mr: "सर्वोच्च न्यायालयाची स्थापना" },
    categoryKey: "judiciary",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "This Article establishes the Supreme Court of India as the apex court, along with rules for the appointment of judges.",
      mr: "या कलमानुसार भारताचे सर्वोच्च न्यायालय हे सर्वोच्च न्यायसंस्था म्हणून स्थापन केले जाते, तसेच न्यायाधीशांच्या नियुक्तीचे नियमही यात दिले आहेत."
    },
    verySimple: {
      en: "This is the Article that creates the Supreme Court, the highest court in the country.",
      mr: "या कलमामुळेच देशातील सर्वोच्च न्यायालय अस्तित्वात आले आहे."
    },
    example: {
      en: "When the Supreme Court hears a final appeal in a major case, it is exercising authority rooted in this Article.",
      mr: "सर्वोच्च न्यायालय एखाद्या मोठ्या खटल्यातील अंतिम अपील ऐकते तेव्हा ते या कलमात नमूद अधिकाराचा वापर करत असते."
    },
    keywords: ["supreme court", "judges", "judiciary", "न्यायालय"],
    relatedIds: ["32"],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "352",
    articleNumber: "Article 352",
    title: { en: "Proclamation of Emergency", mr: "आणीबाणीची घोषणा" },
    categoryKey: "emergency-provisions",
    officialText: {
      en: "Verified official constitutional text should be inserted here from an authoritative source.",
      mr: "अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.",
      verified: false
    },
    simpleExplanation: {
      en: "This Article allows the President to proclaim a national Emergency if the security of India is threatened by war, external aggression, or armed rebellion.",
      mr: "युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाळीमुळे भारताच्या सुरक्षेला धोका असल्यास राष्ट्रपती राष्ट्रीय आणीबाणी जाहीर करू शकतात, अशी तरतूद या कलमात आहे."
    },
    verySimple: {
      en: "It gives the President special emergency powers during a serious national crisis.",
      mr: "गंभीर राष्ट्रीय संकटाच्या वेळी राष्ट्रपतींना विशेष आणीबाणी अधिकार देते."
    },
    example: {
      en: "India has invoked provisions related to this Article in the past during periods of declared national emergency.",
      mr: "भारताने भूतकाळात जाहीर राष्ट्रीय आणीबाणीच्या काळात या कलमाशी संबंधित तरतुदींचा वापर केला आहे."
    },
    keywords: ["emergency", "proclamation", "national security", "आणीबाणी"],
    relatedIds: [],
    source: { name: "Ministry of Law and Justice, Government of India", url: "" },
    lastVerified: null
  },
  {
    id: "15",
    articleNumber: "Article 15",
    title: {
      en: "Prohibition of Discrimination",
      mr: "भेदभावास प्रतिबंध"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.",
      mr: "राज्य कोणत्याही नागरिकाविरुद्ध केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यांपैकी कोणत्याही कारणावरून भेदभाव करणार नाही.",
      verified: true
    },
    simpleExplanation: {
      en: "Article 15 prohibits the State from discriminating against citizens on specified grounds such as religion, race, caste, sex and place of birth. The Constitution also permits certain special provisions for disadvantaged groups.",
      mr: "कलम १५ राज्याला धर्म, वंश, जात, लिंग आणि जन्मस्थान यांसारख्या ठरावीक आधारांवर नागरिकांमध्ये भेदभाव करण्यास प्रतिबंध करते. संविधानाने परवानगी दिलेल्या परिस्थितीत वंचित किंवा मागास घटकांसाठी विशेष तरतुदी करण्याची मुभाही राज्याला आहे."
    },
    verySimple: {
      en: "The government cannot discriminate against citizens simply because of their religion, race, caste, sex or place of birth.",
      mr: "केवळ धर्म, जात, वंश, लिंग किंवा जन्मस्थानाच्या आधारावर सरकार नागरिकांशी भेदभाव करू शकत नाही."
    },
    example: {
      en: "If a government authority refuses a public benefit to an eligible citizen only because of their caste or religion, Article 15 may become relevant.",
      mr: "एखाद्या पात्र नागरिकाला केवळ त्याच्या जातीमुळे किंवा धर्मामुळे सरकारी सुविधा नाकारली गेल्यास कलम १५ संबंधित ठरू शकते."
    },
    keywords: [
      "article 15",
      "prohibition of discrimination",
      "discrimination in India",
      "fundamental rights",
      "equality",
      "caste discrimination",
      "religion",
      "Indian Constitution",
      "कलम १५",
      "भेदभावास प्रतिबंध",
      "समानता",
      "मूलभूत अधिकार",
      "भारतीय संविधान"
    ],
    relatedIds: ["16", "17"],
    source: {
      name: "Ministry of Law and Justice, Government of India",
      url: ""
    },
    lastVerified: null
  },
  {
    id: "16",
    articleNumber: "Article 16",
    title: {
      en: "Equality of Opportunity in Public Employment",
      mr: "सार्वजनिक नोकरीतील समान संधी"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.",
      mr: "राज्याच्या अंतर्गत कोणत्याही पदावरील नोकरी किंवा नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असेल.",
      verified: true
    },
    simpleExplanation: {
      en: "Article 16 guarantees equality of opportunity for citizens in matters relating to employment or appointment to offices under the State. The Constitution also provides for certain forms of reservation and special measures in public employment.",
      mr: "कलम १६ राज्याच्या अंतर्गत नोकरी किंवा पदावर नियुक्तीच्या बाबतीत नागरिकांना समान संधी देण्याची हमी देते. सार्वजनिक नोकरीमध्ये काही प्रकारच्या आरक्षणासाठी आणि विशेष तरतुदींसाठी संविधानात तरतूद करण्यात आली आहे."
    },
    verySimple: {
      en: "Citizens should get equal opportunity when applying for government jobs, subject to the Constitution and laws.",
      mr: "सरकारी नोकरी मिळवताना नागरिकांना संविधान आणि कायद्याच्या चौकटीत समान संधी मिळाली पाहिजे."
    },
    example: {
      en: "If a citizen applies for a government job, the selection process must provide equality of opportunity in accordance with constitutional and legal rules.",
      mr: "एखादा नागरिक सरकारी नोकरीसाठी अर्ज करत असल्यास, निवड प्रक्रिया संविधान आणि कायद्यानुसार समान संधीच्या तत्त्वावर आधारित असली पाहिजे."
    },
    keywords: [
      "article 16",
      "equality of opportunity",
      "government jobs",
      "public employment",
      "reservation",
      "fundamental rights",
      "Indian Constitution",
      "कलम १६",
      "समान संधी",
      "सरकारी नोकरी",
      "सार्वजनिक रोजगार",
      "आरक्षण",
      "मूलभूत अधिकार"
    ],
    relatedIds: ["15", "17"],
    source: {
      name: "Ministry of Law and Justice, Government of India",
      url: ""
    },
    lastVerified: null
  },
  {
    id: "17",
    articleNumber: "Article 17",
    title: {
      en: "Abolition of Untouchability",
      mr: "अस्पृश्यता निर्मूलन"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law.",
      mr: "अस्पृश्यता नष्ट करण्यात आली आहे आणि तिचे कोणत्याही स्वरूपातील आचरण निषिद्ध आहे. अस्पृश्यतेमुळे उद्भवणारी कोणतीही अयोग्यता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध असेल.",
      verified: true
    },
    simpleExplanation: {
      en: "Article 17 abolishes untouchability and prohibits its practice in any form. It also provides that enforcing any disability arising from untouchability is punishable according to law.",
      mr: "कलम १७ अस्पृश्यता नष्ट करते आणि कोणत्याही स्वरूपात तिच्या प्रथेवर बंदी घालते. अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अयोग्यता लागू करणे कायद्यानुसार दंडनीय आहे."
    },
    verySimple: {
      en: "Untouchability is abolished. No person can be denied rights or treated unfairly because of the practice of untouchability.",
      mr: "अस्पृश्यता पूर्णपणे रद्द करण्यात आली आहे. अस्पृश्यतेच्या आधारावर कोणालाही अधिकारांपासून वंचित करता किंवा अन्यायकारक वागणूक देता येत नाही."
    },
    example: {
      en: "If a person is denied access to a public place because of the practice of untouchability, the matter may attract legal consequences under the Constitution and relevant law.",
      mr: "अस्पृश्यतेच्या प्रथेच्या आधारावर एखाद्या व्यक्तीला सार्वजनिक ठिकाणी प्रवेश नाकारला गेल्यास संविधान आणि संबंधित कायद्यानुसार कायदेशीर परिणाम होऊ शकतात."
    },
    keywords: [
      "article 17",
      "abolition of untouchability",
      "untouchability in India",
      "fundamental rights",
      "equality",
      "Indian Constitution",
      "कलम १७",
      "अस्पृश्यता निर्मूलन",
      "समानता",
      "मूलभूत अधिकार",
      "भारतीय संविधान"
    ],
    relatedIds: ["15", "16"],
    source: {
      name: "Ministry of Law and Justice, Government of India",
      url: ""
    },
    lastVerified: null
  }
];
function getArticleById(id) {
  if (!id) return void 0;
  return articles.find(
    (a) => a.id.toLowerCase() === String(id).toLowerCase()
  );
}
function getRelatedArticles(article, limit = 6) {
  if (!article) return [];
  const manualIds = Array.isArray(article.relatedIds) ? article.relatedIds.map(String) : [];
  const articleKeywords = new Set(
    Array.isArray(article.keywords) ? article.keywords.map(
      (keyword) => String(keyword).toLowerCase().trim()
    ) : []
  );
  const articleNumber = Number(
    String(article.id).replace(/[^0-9]/g, "")
  );
  const scoredArticles = articles.filter((candidate) => candidate.id !== article.id).map((candidate) => {
    let score = 0;
    if (manualIds.includes(candidate.id)) {
      score += 100;
    }
    if (article.categoryKey && candidate.categoryKey === article.categoryKey) {
      score += 30;
    }
    const candidateKeywords = Array.isArray(candidate.keywords) ? candidate.keywords.map(
      (keyword) => String(keyword).toLowerCase().trim()
    ) : [];
    const sharedKeywords = candidateKeywords.filter(
      (keyword) => articleKeywords.has(keyword)
    ).length;
    score += sharedKeywords * 10;
    const candidateNumber = Number(
      String(candidate.id).replace(/[^0-9]/g, "")
    );
    if (Number.isFinite(articleNumber) && Number.isFinite(candidateNumber)) {
      const difference = Math.abs(
        articleNumber - candidateNumber
      );
      if (difference <= 3) {
        score += 8;
      } else if (difference <= 10) {
        score += 4;
      }
    }
    return {
      article: candidate,
      score
    };
  });
  return scoredArticles.sort((a, b) => b.score - a.score).slice(0, limit).map(({ article: relatedArticle }) => relatedArticle);
}
const facts = [
  {
    en: "The original Constitution of India was handwritten and calligraphed, not typed or printed.",
    mr: "भारतीय संविधानाची मूळ प्रत टंकलिखित किंवा मुद्रित नसून हस्तलिखित व सुलेखन केलेली आहे."
  },
  {
    en: "The Constituent Assembly took nearly three years to draft the Constitution.",
    mr: "संविधान तयार करण्यासाठी संविधान सभेला जवळपास तीन वर्षे लागली."
  },
  {
    en: "India is often described as having one of the longest written constitutions of any sovereign country.",
    mr: "भारताचे संविधान जगातील सार्वभौम देशांच्या सर्वात लांब लिखित संविधानांपैकी एक मानले जाते."
  },
  {
    en: "The Preamble was amended once, by the 42nd Amendment in 1976.",
    mr: "प्रस्तावनेत केवळ एकदाच, १९७६ मधील ४२व्या दुरुस्तीने बदल करण्यात आला."
  },
  {
    en: "B. R. Ambedkar chaired the Drafting Committee of the Constituent Assembly.",
    mr: "डॉ. बाबासाहेब आंबेडकर हे संविधान सभेच्या मसुदा समितीचे अध्यक्ष होते."
  },
  {
    en: "The Constitution recognises 22 languages in its Eighth Schedule.",
    mr: "संविधानाच्या आठव्या परिशिष्टात २२ भाषांना मान्यता दिली आहे."
  },
  {
    en: "Fundamental Duties, added in 1976, were inspired in part by the constitution of the erstwhile Soviet Union.",
    mr: "१९७६ मध्ये जोडलेली मूलभूत कर्तव्ये अंशतः पूर्वीच्या सोव्हिएत संघाच्या संविधानापासून प्रेरित होती."
  }
];
function getTodaysFact() {
  const start = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 0);
  const diff = /* @__PURE__ */ new Date() - start;
  const dayOfYear = Math.floor(diff / (1e3 * 60 * 60 * 24));
  return facts[dayOfYear % facts.length];
}
function AffiliateDisclosure() {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsx("p", { lang: language, className: "text-xs leading-relaxed text-ink/50 dark:text-ink-dark/50", children: language === "mr" ? "या पेजवरील काही लिंक Affiliate Links असू शकतात. तुमच्यावर कोणताही अतिरिक्त खर्च न होता आम्हाला कमिशन मिळू शकते." : "Some links on this page may be affiliate links. We may earn a commission at no additional cost to you." });
}
function RecommendedBooks({ books: books2 }) {
  const { pick } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: "Reading list" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-3xl font-semibold text-navy dark:text-ink-dark", children: pick({ en: "Recommended Books", mr: "शिफारस केलेली पुस्तके" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: books2.map((book) => /* @__PURE__ */ jsxs("article", { className: "flex gap-4 rounded-2xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-24 w-16 shrink-0 items-center justify-center bg-navy/[0.06] text-center text-[10px] text-ink/40 dark:bg-white/10", children: "Book cover" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-saffron", children: [
          book.category,
          " · ",
          book.language
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display mt-1 font-semibold text-navy dark:text-ink-dark", children: pick(book.title) }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink/50 dark:text-ink-dark/50", children: book.author }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ink/60 dark:text-ink-dark/60", children: pick(book.description) }),
        /* @__PURE__ */ jsx("a", { href: book.affiliateUrl || void 0, "aria-disabled": !book.affiliateUrl, className: `mt-3 inline-flex items-center gap-1.5 text-sm font-medium ${book.affiliateUrl ? "text-saffron" : "pointer-events-none text-ink/35"}`, children: book.affiliateUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "Buy book ",
          /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
        ] }) : "Link coming soon" })
      ] })
    ] }, book.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(AffiliateDisclosure, {}) })
  ] });
}
const books = [
  { id: "book-constitution", title: { en: "Introduction to the Constitution of India", mr: "भारतीय संविधानाची ओळख" }, author: "D. D. Basu", description: { en: "A clear foundation for understanding constitutional structure and ideas.", mr: "संविधानाची रचना आणि विचार समजून घेण्यासाठी स्पष्ट मार्गदर्शक." }, image: "", affiliateUrl: "", category: "Indian Constitution", language: "English" },
  { id: "book-polity", title: { en: "Indian Polity", mr: "भारतीय राजव्यवस्था" }, author: "M. Laxmikanth", description: { en: "A structured reference for competitive exam preparation.", mr: "स्पर्धा परीक्षांच्या तयारीसाठी संरचित संदर्भग्रंथ." }, image: "", affiliateUrl: "", category: "UPSC / MPSC", language: "English" }
];
const FEATURED_IDS = ["14", "19", "21", "21a", "32"];
function Home() {
  const { t, pick, language } = useLanguage();
  const fact = getTodaysFact();
  const featured = FEATURED_IDS.map((id) => articles.find((a) => a.id === id)).filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Advertisement, { placement: "banner" }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("explore_heading") }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: exploreCards.map((card) => /* @__PURE__ */ jsx(CategoryCard, { ...card }, card.path)) })
    ] }),
    /* @__PURE__ */ jsx(RecommendedBooks, { books }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.02]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("important_articles") }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/articles",
            className: "inline-flex items-center gap-1.5 text-sm font-medium text-saffron",
            children: [
              t("view_all_articles"),
              " ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2", children: featured.map((article) => /* @__PURE__ */ jsx(ArticleCard, { article }, article.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6 sm:flex-row sm:items-center sm:p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold", children: /* @__PURE__ */ jsx(Lightbulb, { size: 22 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("did_you_know") }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-1.5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(fact) })
      ] })
    ] }) })
  ] });
}
const siteConfig = {
  name: "Samvidhan",
  url: "https://www.mysamvidhan.in",
  defaultTitle: "Samvidhan | Understand the Constitution of India",
  defaultDescription: "Understand the Constitution of India with simple explanations in English and Marathi."
};
const seoRoutes = {
  "/": { title: { en: siteConfig.defaultTitle, mr: "संविधान | भारताचे संविधान समजून घ्या" }, description: { en: siteConfig.defaultDescription, mr: "भारतीय संविधान, कलमे, मूलभूत अधिकार, कर्तव्ये आणि दुरुस्त्या सोप्या भाषेत समजून घ्या." }, priority: "1.0", changefreq: "weekly" },
  "/articles": { title: { en: "Constitutional Articles | Samvidhan", mr: "संवैधानिक कलमे | संविधान" }, description: { en: "Search and understand the Constitutional Articles of India with clear explanations.", mr: "भारतीय संविधानातील कलमे शोधा आणि स्पष्ट स्पष्टीकरणांसह समजून घ्या." }, priority: "0.9", changefreq: "weekly" },
  "/fundamental-rights": { title: { en: "Fundamental Rights | Samvidhan", mr: "मूलभूत अधिकार | संविधान" }, description: { en: "Understand the Fundamental Rights guaranteed by the Constitution of India.", mr: "भारतीय संविधानाने दिलेले मूलभूत अधिकार समजून घ्या." }, priority: "0.8", changefreq: "monthly" },
  "/fundamental-duties": { title: { en: "Fundamental Duties | Samvidhan", mr: "मूलभूत कर्तव्ये | संविधान" }, description: { en: "Learn the Fundamental Duties of citizens of India.", mr: "भारताच्या नागरिकांची मूलभूत कर्तव्ये जाणून घ्या." }, priority: "0.8", changefreq: "monthly" },
  "/directive-principles": { title: { en: "Directive Principles of State Policy | Samvidhan", mr: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे | संविधान" }, description: { en: "Explore the Directive Principles that guide governance and public policy.", mr: "शासन आणि सार्वजनिक धोरणाला दिशा देणारी मार्गदर्शक तत्त्वे जाणून घ्या." }, priority: "0.8", changefreq: "monthly" },
  "/amendments": { title: { en: "Constitutional Amendments | Samvidhan", mr: "संविधान दुरुस्त्या | संविधान" }, description: { en: "Study important Constitutional Amendments and how India's Constitution has evolved.", mr: "महत्त्वाच्या संविधान दुरुस्त्या आणि संविधानातील बदलांचा अभ्यास करा." }, priority: "0.8", changefreq: "monthly" },
  "/quiz": { title: { en: "Constitution Quiz | Samvidhan", mr: "संविधान प्रश्नमंजुषा | संविधान" }, description: { en: "Test your knowledge of the Constitution of India with a free quiz.", mr: "मोफत प्रश्नमंजुषेद्वारे भारतीय संविधानाचे तुमचे ज्ञान तपासा." }, priority: "0.7", changefreq: "monthly" },
  "/faq": { title: { en: "Indian Constitution FAQs | Frequently Asked Questions – Samvidhan", mr: "भारतीय संविधान FAQ | वारंवार विचारले जाणारे प्रश्न – Samvidhan" }, description: { en: "Find answers to frequently asked questions about the Constitution of India, Fundamental Rights, Duties, Articles, Amendments, Preamble and more.", mr: "भारतीय संविधान, मूलभूत अधिकार, कर्तव्ये, कलमे, उद्देशिका, घटनादुरुस्ती आणि इतर महत्त्वाच्या विषयांवरील वारंवार विचारले जाणारे प्रश्न व उत्तरे जाणून घ्या." }, priority: "0.8", changefreq: "monthly" },
  "/about": { title: { en: "About Samvidhan", mr: "संविधान विषयी" }, description: { en: "Learn about Samvidhan, an independent educational platform for constitutional knowledge.", mr: "संविधान या स्वतंत्र शैक्षणिक व्यासपीठाविषयी जाणून घ्या." }, priority: "0.5", changefreq: "yearly" },
  "/contact": { title: { en: "Contact Samvidhan", mr: "संविधानशी संपर्क साधा" }, description: { en: "Contact Samvidhan with questions, suggestions, feedback or corrections.", mr: "प्रश्न, सूचना, अभिप्राय किंवा दुरुस्त्यांसाठी संविधानशी संपर्क साधा." }, priority: "0.4", changefreq: "yearly" },
  "/privacy": { title: { en: "Privacy Policy | Samvidhan", mr: "गोपनीयता धोरण | संविधान" }, description: { en: "Read the Samvidhan Privacy Policy covering information, cookies, analytics and advertising.", mr: "माहिती, कुकीज, विश्लेषण आणि जाहिरातींसंबंधी संविधानचे गोपनीयता धोरण वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/privacy-policy": { title: { en: "Privacy Policy | Samvidhan", mr: "गोपनीयता धोरण | संविधान" }, description: { en: "Read the Samvidhan Privacy Policy covering information, cookies, analytics and advertising.", mr: "माहिती, कुकीज, विश्लेषण आणि जाहिरातींसंबंधी संविधानचे गोपनीयता धोरण वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/terms": { title: { en: "Terms & Conditions | Samvidhan", mr: "नियम आणि अटी | संविधान" }, description: { en: "Read the Samvidhan Terms and Conditions for using this educational website.", mr: "या शैक्षणिक वेबसाइटच्या वापरासाठी संविधानचे नियम आणि अटी वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/disclaimer": { title: { en: "Disclaimer | Samvidhan", mr: "अस्वीकरण | संविधान" }, description: { en: "Read the Samvidhan educational and informational content disclaimer.", mr: "संविधानच्या शैक्षणिक आणि माहितीपर सामग्रीचे अस्वीकरण वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/learn": { title: { en: "Learn Indian Constitution | Samvidhan", mr: "भारतीय संविधान शिका | संविधान" }, description: { en: "Learn the Indian Constitution through guided Articles, Rights and exam preparation paths.", mr: "मार्गदर्शित कलमे, अधिकार आणि परीक्षा तयारीच्या माध्यमातून भारतीय संविधान शिका." }, priority: "0.8", changefreq: "monthly" },
  "/exam-preparation": { title: { en: "Exam Preparation | Samvidhan", mr: "परीक्षा तयारी | संविधान" }, description: { en: "Prepare for MPSC and UPSC Constitution and polity examinations.", mr: "MPSC आणि UPSC संविधान व राज्यशास्त्र परीक्षांची तयारी करा." }, priority: "0.7", changefreq: "monthly" },
  "/premium": { title: { en: "Samvidhan Premium | Learn Better", mr: "संविधान प्रीमियम | अधिक चांगले शिका" }, description: { en: "Explore structured constitutional revision, advanced practice and exam preparation.", mr: "संरचित संविधान उजळणी, प्रगत सराव आणि परीक्षा तयारीचा अनुभव घ्या." }, priority: "0.5", changefreq: "monthly" },
  "/article/:id": { indexable: true, changefreq: "monthly", priority: "0.7" },
  "/dashboard": { indexable: false },
  "/progress": { indexable: false },
  "/premium-quiz": { indexable: false },
  "/notes": { indexable: false },
  "/bookmarks": { indexable: false }
};
function getSeoRoute(pathname) {
  if (seoRoutes[pathname]) return seoRoutes[pathname];
  if (pathname.startsWith("/article/")) return seoRoutes["/article/:id"];
  return { title: { en: siteConfig.defaultTitle, mr: "संविधान | भारताचे संविधान समजून घ्या" }, description: { en: siteConfig.defaultDescription, mr: "भारतीय संविधानाबद्दल सोप्या भाषेत जाणून घ्या." }, indexable: false };
}
const SITE_URL$1 = siteConfig.url.replace(/\/+$/, "");
function setMeta(attribute, value, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
function setLink(rel, href) {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`
  );
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}
function PageMeta() {
  const { pathname } = useLocation();
  const { language, pick } = useLanguage();
  useEffect(() => {
    console.log("PageMeta running:", pathname);
    const config = getSeoRoute(pathname);
    const article = pathname.startsWith("/article/") ? getArticleById(pathname.split("/").pop()) : null;
    const title = article ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan` : pick(config.title);
    const description = article ? pick(article.simpleExplanation) : pick(config.description);
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = cleanPath === "/" ? SITE_URL$1 : `${SITE_URL$1}${cleanPath}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta(
      "name",
      "robots",
      config.indexable === false ? "noindex, nofollow" : "index, follow"
    );
    setLink("canonical", canonicalUrl);
  }, [pathname, language, pick]);
  return null;
}
function searchArticles(query, list = articles) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return list;
  return list.filter((article) => {
    const numberMatch = article.articleNumber.toLowerCase().includes(q);
    const idMatch = article.id.toLowerCase() === q.replace(/^article\s*/i, "");
    const titleEnMatch = article.title.en.toLowerCase().includes(q);
    const titleMrMatch = article.title.mr.includes(query || "");
    const keywordMatch = article.keywords.some((k) => k.toLowerCase().includes(q));
    const category = getCategoryByKey(article.categoryKey);
    const categoryMatch = category && (category.title.en.toLowerCase().includes(q) || category.title.mr.includes(query || ""));
    return numberMatch || idMatch || titleEnMatch || titleMrMatch || keywordMatch || categoryMatch;
  });
}
function filterByCategory(list, categoryKey) {
  if (!categoryKey || categoryKey === "all") return list;
  return list.filter((a) => a.categoryKey === categoryKey);
}
function sortArticles(list, direction = "asc") {
  const parseNum = (a) => parseFloat(a.id.replace(/[^0-9.]/g, "")) || 0;
  return [...list].sort(
    (a, b) => direction === "asc" ? parseNum(a) - parseNum(b) : parseNum(b) - parseNum(a)
  );
}
function Articles() {
  const { t, pick, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [sort, setSort] = useState("asc");
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    setCategory(searchParams.get("category") || "all");
  }, [searchParams]);
  const results = useMemo(() => {
    let list = searchArticles(query, articles);
    list = filterByCategory(list, category);
    list = sortArticles(list, sort);
    return list;
  }, [query, category, sort]);
  const updateParams = (next) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };
  const isFiltered = Boolean(query || category !== "all");
  const pageTitle = language === "mr" ? "भारतीय संविधानातील सर्व कलमे | MySamvidhan" : "Indian Constitution Articles | MySamvidhan";
  const pageDescription = language === "mr" ? "भारतीय संविधानातील कलमे सोप्या मराठी आणि इंग्रजी भाषेत जाणून घ्या. मूलभूत अधिकार, नागरिकत्व, संसद, न्यायपालिका आणि इतर घटनात्मक तरतुदी समजून घ्या." : "Explore Articles of the Indian Constitution in simple English and Marathi. Learn about Fundamental Rights, citizenship, Parliament, judiciary and other constitutional provisions.";
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: pageTitle,
        description: pageDescription,
        canonical: "/articles",
        robots: isFiltered ? "noindex, follow" : "index, follow"
      }
    ),
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          lang: language,
          className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl",
          children: t("articles_page_title")
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          lang: language,
          className: "mt-2 max-w-3xl text-ink/60 dark:text-ink-dark/60",
          children: t("articles_page_sub")
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          lang: language,
          className: "mt-5 max-w-4xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70",
          children: language === "mr" ? /* @__PURE__ */ jsx("p", { children: "भारतीय संविधानातील विविध कलमे नागरिकांचे अधिकार, कर्तव्ये, शासनव्यवस्था आणि देशाच्या घटनात्मक रचनेशी संबंधित महत्त्वाच्या तरतुदी स्पष्ट करतात. MySamvidhan वर ही कलमे सोप्या मराठी आणि इंग्रजी भाषेत समजून घेता येतात." }) : /* @__PURE__ */ jsx("p", { children: "The Articles of the Indian Constitution define important provisions relating to fundamental rights, citizenship, government, Parliament, judiciary and the constitutional framework of India. Explore these Articles in simple English and Marathi on MySamvidhan." })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "search",
            value: query,
            onChange: (e) => {
              setQuery(e.target.value);
              updateParams({ q: e.target.value });
            },
            placeholder: t("search_placeholder"),
            lang: language,
            className: "flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
          }
        ),
        query && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setQuery("");
              updateParams({ q: "" });
            },
            className: "flex items-center gap-1 rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 text-sm text-ink/60 dark:text-ink-dark/60",
            children: [
              /* @__PURE__ */ jsx(X, { size: 14 }),
              t("clear_search")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setCategory("all");
              updateParams({ category: "all" });
            },
            className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === "all" ? "border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink" : "border-navy/15 dark:border-ink-dark/20 text-navy/70 dark:text-ink-dark/70"}`,
            children: t("filter_all")
          }
        ),
        categories.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setCategory(c.key);
              updateParams({ category: c.key });
            },
            lang: language,
            className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === c.key ? "border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink" : "border-navy/15 dark:border-ink-dark/20 text-navy/70 dark:text-ink-dark/70"}`,
            children: pick(c.title)
          },
          c.key
        )),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSort(
              (current) => current === "asc" ? "desc" : "asc"
            ),
            className: "ml-auto flex items-center gap-1.5 rounded-full border border-navy/15 dark:border-ink-dark/20 px-3.5 py-1.5 text-xs font-medium text-navy/70 dark:text-ink-dark/70",
            children: [
              /* @__PURE__ */ jsx(ArrowUpDown, { size: 13 }),
              sort === "asc" ? t("sort_asc") : t("sort_desc")
            ]
          }
        )
      ] })
    ] }),
    query && /* @__PURE__ */ jsxs(
      "p",
      {
        lang: language,
        className: "mt-6 text-sm text-ink/50 dark:text-ink-dark/50",
        children: [
          t("search_results_for"),
          ' "',
          query,
          '" — ',
          results.length
        ]
      }
    ),
    results.length > 0 && /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": language === "mr" ? "भारतीय संविधानाची कलमे" : "Articles of the Indian Constitution",
        className: "mt-8",
        children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: results.map((article) => /* @__PURE__ */ jsx(
          ArticleCard,
          {
            article
          },
          article.id
        )) })
      }
    ),
    results.length > 3 && /* @__PURE__ */ jsx(Advertisement, { placement: "article" }),
    !isFiltered && results.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-12 border-t border-navy/10 dark:border-ink-dark/10 pt-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          BookOpen,
          {
            size: 18,
            className: "text-saffron"
          }
        ),
        /* @__PURE__ */ jsx(
          "h2",
          {
            lang: language,
            className: "font-display text-xl font-semibold text-navy dark:text-ink-dark",
            children: language === "mr" ? "संविधानाची कलमे" : "Articles of the Indian Constitution"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "p",
        {
          lang: language,
          className: "mt-2 text-sm text-ink/60 dark:text-ink-dark/60",
          children: language === "mr" ? "खालील कलमांवर क्लिक करून त्यांचे सविस्तर स्पष्टीकरण वाचा." : "Open an Article to read its detailed explanation in English and Marathi."
        }
      ),
      /* @__PURE__ */ jsx(
        "nav",
        {
          "aria-label": language === "mr" ? "संविधानातील कलमांचे दुवे" : "Constitution Article links",
          className: "mt-5 flex flex-wrap gap-2",
          children: articles.map((article) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/article/${article.id}`,
              className: "rounded-full border border-navy/10 dark:border-ink-dark/15 px-3 py-1.5 text-xs text-navy/75 dark:text-ink-dark/75 transition-colors hover:border-saffron/50 hover:text-saffron",
              children: article.articleNumber
            },
            article.id
          ))
        }
      )
    ] }),
    results.length === 0 && /* @__PURE__ */ jsx(
      "p",
      {
        lang: language,
        className: "mt-16 text-center text-ink/50 dark:text-ink-dark/50",
        children: t("no_results")
      }
    )
  ] });
}
const clean = (value = "") => String(value).replace(/\s+/g, " ").trim();
const unique = (items) => [
  ...new Set(
    items.map(clean).filter(Boolean)
  )
];
function generateArticleSEO(article) {
  var _a, _b;
  if (!article) return null;
  const rawArticleNumber = clean(article.articleNumber || "");
  const number = rawArticleNumber.replace(/^article\s*/i, "").replace(/^कलम\s*/i, "").trim();
  const englishTitle = clean(
    typeof article.title === "object" ? (_a = article.title) == null ? void 0 : _a.en : article.title
  );
  const marathiTitle = clean(
    typeof article.title === "object" ? (_b = article.title) == null ? void 0 : _b.mr : ""
  );
  const articleKeyword = `Article ${number}`;
  const marathiKeyword = `कलम ${number}`;
  const keywords = unique([
    // English keywords
    articleKeyword,
    `${articleKeyword} Indian Constitution`,
    `${articleKeyword} of Indian Constitution`,
    `${articleKeyword} explained`,
    `What is ${articleKeyword}`,
    `${articleKeyword} meaning`,
    `${articleKeyword} in simple words`,
    `${articleKeyword} explanation`,
    `${articleKeyword} India`,
    `${articleKeyword} constitution`,
    // Marathi keywords
    marathiKeyword,
    `${marathiKeyword} भारतीय संविधान`,
    `भारतीय संविधान ${marathiKeyword}`,
    `${marathiKeyword} मराठीत`,
    `${marathiKeyword} म्हणजे काय`,
    `${marathiKeyword} माहिती`,
    `${marathiKeyword} स्पष्टीकरण`,
    // Article-specific title keywords
    englishTitle,
    marathiTitle,
    // Existing keywords from article
    ...Array.isArray(article.keywords) ? article.keywords : []
  ]);
  const titleEn = `${articleKeyword} – ${englishTitle || "Indian Constitution"}`;
  const titleMr = `${marathiKeyword} – ${marathiTitle || "भारतीय संविधान"}`;
  const descriptionEn = `${articleKeyword} of the Indian Constitution explained in simple English and Marathi. Learn its meaning, key provisions, importance and constitutional context.`;
  const descriptionMr = `भारतीय संविधानातील ${marathiKeyword} सोप्या मराठी आणि इंग्रजी भाषेत समजून घ्या. ${marathiTitle || "या कलमाचा"} अर्थ, प्रमुख तरतुदी आणि महत्त्व जाणून घ्या.`;
  return {
    title: titleEn,
    titleEn,
    titleMr,
    description: descriptionEn,
    descriptionEn,
    descriptionMr,
    primaryKeyword: articleKeyword,
    keywords,
    canonicalPath: `/article/${article.id}`,
    robots: "index, follow"
  };
}
function ArticleDetails() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { id } = useParams();
  const { t, pick, language } = useLanguage();
  const article = getArticleById(id || "");
  if (!article) {
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsx(
        PageMeta,
        {
          title: "Article Not Found | MySamvidhan",
          description: "The requested article could not be found on MySamvidhan.",
          robots: "noindex, follow"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: "Article not found" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/articles",
          className: "mt-4 inline-block text-saffron",
          children: "← Back to Articles"
        }
      )
    ] });
  }
  const category = getCategoryByKey(article.categoryKey);
  const related = getRelatedArticles(article);
  const seo = generateArticleSEO(article);
  const rawNumber = String(article.articleNumber || "");
  const articleNumber = rawNumber.replace(/^article\s*/i, "").replace(/^कलम\s*/i, "").trim();
  const englishArticle = `Article ${articleNumber}`;
  const marathiArticle = `कलम ${articleNumber}`;
  const englishFAQs = [
    {
      question: `What is ${englishArticle} of the Indian Constitution?`,
      answer: ((_a = article.simpleExplanation) == null ? void 0 : _a.en) || ((_b = article.verySimple) == null ? void 0 : _b.en) || ""
    },
    {
      question: `What does ${englishArticle} mean?`,
      answer: ((_c = article.verySimple) == null ? void 0 : _c.en) || ((_d = article.simpleExplanation) == null ? void 0 : _d.en) || ""
    },
    {
      question: `Why is ${englishArticle} important?`,
      answer: ((_e = article.simpleExplanation) == null ? void 0 : _e.en) || ((_f = article.example) == null ? void 0 : _f.en) || ""
    }
  ];
  const marathiFAQs = [
    {
      question: `${marathiArticle} म्हणजे काय?`,
      answer: ((_g = article.simpleExplanation) == null ? void 0 : _g.mr) || ((_h = article.verySimple) == null ? void 0 : _h.mr) || ""
    },
    {
      question: `${marathiArticle} चा अर्थ काय आहे?`,
      answer: ((_i = article.verySimple) == null ? void 0 : _i.mr) || ((_j = article.simpleExplanation) == null ? void 0 : _j.mr) || ""
    },
    {
      question: `${marathiArticle} चे महत्त्व काय आहे?`,
      answer: ((_k = article.simpleExplanation) == null ? void 0 : _k.mr) || ((_l = article.example) == null ? void 0 : _l.mr) || ""
    }
  ];
  const faqs2 = language === "mr" ? marathiFAQs : englishFAQs;
  Number(
    articleNumber.replace(/\D/g, "")
  );
  const allArticles = Array.isArray(
    article.allArticles
  ) ? article.allArticles : [];
  let previousArticle = null;
  let nextArticle = null;
  if (allArticles.length > 0) {
    const sortedArticles = [...allArticles].filter(Boolean).sort((a, b) => {
      const aNum = Number(
        String(a.articleNumber || "").replace(/\D/g, "")
      );
      const bNum = Number(
        String(b.articleNumber || "").replace(/\D/g, "")
      );
      return aNum - bNum;
    });
    const currentIndex = sortedArticles.findIndex(
      (item) => item.id === article.id
    );
    if (currentIndex > 0) {
      previousArticle = sortedArticles[currentIndex - 1];
    }
    if (currentIndex >= 0 && currentIndex < sortedArticles.length - 1) {
      nextArticle = sortedArticles[currentIndex + 1];
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: language === "mr" ? seo.titleMr : seo.titleEn,
        description: language === "mr" ? seo.descriptionMr : seo.descriptionEn,
        canonical: seo.canonicalPath,
        robots: seo.robots
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16", children: [
      /* @__PURE__ */ jsxs("header", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-saffron", children: language === "mr" ? marathiArticle : englishArticle }),
        /* @__PURE__ */ jsx(
          "h1",
          {
            lang: language,
            className: "font-display mt-1 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl",
            children: pick(article.title)
          }
        ),
        category && /* @__PURE__ */ jsxs(
          "span",
          {
            lang: language,
            className: "mt-3 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf dark:text-leaf-light",
            children: [
              t("category"),
              ": ",
              pick(category.title)
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            lang: language,
            className: "font-display text-xl font-semibold text-navy dark:text-ink-dark",
            children: language === "mr" ? `${marathiArticle} म्हणजे काय?` : `What is ${englishArticle}?`
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80",
            children: pick(article.simpleExplanation)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/[0.06] p-4 text-xs leading-relaxed text-ink/70 dark:text-ink-dark/70", children: [
        /* @__PURE__ */ jsx(
          ShieldAlert,
          {
            size: 16,
            className: "mt-0.5 shrink-0 text-gold"
          }
        ),
        /* @__PURE__ */ jsx("p", { lang: language, children: t("verify_notice") })
      ] }),
      /* @__PURE__ */ jsx(Advertisement, { placement: "article" }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                ScrollText,
                {
                  size: 18,
                  className: "text-saffron"
                }
              ),
              t("official_text")
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-3 rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 text-sm italic leading-relaxed text-ink/70 dark:text-ink-dark/70",
            children: pick(article.officialText)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                BookOpen,
                {
                  size: 18,
                  className: "text-saffron"
                }
              ),
              language === "mr" ? "सोप्या भाषेत स्पष्टीकरण" : `${englishArticle} Explained in Simple Words`
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80",
            children: pick(article.simpleExplanation)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                Sparkles,
                {
                  size: 18,
                  className: "text-saffron"
                }
              ),
              language === "mr" ? `${marathiArticle} सोप्या भाषेत` : `${englishArticle} in Simple Words`
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-3 rounded-xl bg-navy/[0.04] dark:bg-white/[0.05] p-5 text-base leading-relaxed text-navy dark:text-ink-dark",
            children: pick(article.verySimple)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                Lightbulb,
                {
                  size: 18,
                  className: "text-saffron"
                }
              ),
              language === "mr" ? `${marathiArticle} चे उदाहरण` : `${englishArticle} Example`
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70",
            children: pick(article.example)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                HelpCircle,
                {
                  size: 20,
                  className: "text-saffron"
                }
              ),
              language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "Frequently Asked Questions"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-4", children: faqs2.map((faq, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5",
            children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  lang: language,
                  className: "font-semibold text-navy dark:text-ink-dark",
                  children: faq.question
                }
              ),
              faq.answer && /* @__PURE__ */ jsx(
                "p",
                {
                  lang: language,
                  className: "mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70",
                  children: faq.answer
                }
              )
            ]
          },
          index
        )) })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            lang: language,
            className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark",
            children: [
              /* @__PURE__ */ jsx(
                Link2,
                {
                  size: 18,
                  className: "text-saffron"
                }
              ),
              t("related_articles")
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: related.map((r) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/article/${r.id}`,
            className: "rounded-full border border-navy/15 dark:border-ink-dark/20 px-4 py-2 text-sm text-navy dark:text-ink-dark hover:border-saffron/50 hover:text-saffron transition-colors",
            children: [
              r.articleNumber,
              " · ",
              pick(r.title)
            ]
          },
          r.id
        )) })
      ] }),
      (previousArticle || nextArticle) && /* @__PURE__ */ jsxs(
        "nav",
        {
          "aria-label": "Article navigation",
          className: "mt-10 grid gap-4 sm:grid-cols-2",
          children: [
            previousArticle ? /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/article/${previousArticle.id}`,
                className: "rounded-xl border border-navy/10 dark:border-ink-dark/10 p-4 transition hover:border-saffron/50",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-ink/50 dark:text-ink-dark/50", children: [
                    /* @__PURE__ */ jsx(ChevronLeft, { size: 16 }),
                    language === "mr" ? "मागील कलम" : "Previous Article"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-1 font-medium text-navy dark:text-ink-dark", children: [
                    previousArticle.articleNumber,
                    " – ",
                    pick(previousArticle.title)
                  ] })
                ]
              }
            ) : /* @__PURE__ */ jsx("div", {}),
            nextArticle && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/article/${nextArticle.id}`,
                className: "rounded-xl border border-navy/10 dark:border-ink-dark/10 p-4 text-right transition hover:border-saffron/50",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2 text-xs text-ink/50 dark:text-ink-dark/50", children: [
                    language === "mr" ? "पुढील कलम" : "Next Article",
                    /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-1 font-medium text-navy dark:text-ink-dark", children: [
                    nextArticle.articleNumber,
                    " – ",
                    pick(nextArticle.title)
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 dark:border-ink-dark/10 pt-6 text-xs text-ink/45 dark:text-ink-dark/45", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          t("source_label"),
          ":",
          " ",
          ((_m = article.source) == null ? void 0 : _m.name) || "—"
        ] }),
        /* @__PURE__ */ jsx(
          BookmarkButton,
          {
            articleId: article.id
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Advertisement, { placement: "article" })
    ] })
  ] });
}
const fundamentalRights = [
  {
    id: "right-to-equality",
    icon: "Scale",
    title: { en: "Right to Equality", mr: "समानतेचा अधिकार" },
    explanation: {
      en: "Guarantees equality before the law and equal protection of the laws, and prohibits discrimination on grounds such as religion, race, caste, sex, or place of birth.",
      mr: "कायद्यासमोर समानता आणि कायद्याचे समान संरक्षण याची हमी देते, तसेच धर्म, वंश, जात, लिंग किंवा जन्मस्थान यांसारख्या कारणांवरून भेदभाव करण्यास मनाई करते."
    },
    articleIds: ["14"]
  },
  {
    id: "right-to-freedom",
    icon: "Wind",
    title: { en: "Right to Freedom", mr: "स्वातंत्र्याचा अधिकार" },
    explanation: {
      en: "Covers freedoms such as speech and expression, peaceful assembly, movement, and the right to practise any profession, subject to reasonable restrictions.",
      mr: "भाषण व अभिव्यक्ती स्वातंत्र्य, शांततापूर्ण संमेलन, संचार आणि कोणताही व्यवसाय करण्याचा अधिकार यांचा समावेश करते, वाजवी निर्बंधांच्या अधीन राहून."
    },
    articleIds: ["19", "21", "21a"]
  },
  {
    id: "right-against-exploitation",
    icon: "ShieldOff",
    title: { en: "Right against Exploitation", mr: "शोषणाविरुद्धचा अधिकार" },
    explanation: {
      en: "Prohibits human trafficking, forced labour, and the employment of children in hazardous work.",
      mr: "मानवी तस्करी, वेठबिगारी आणि बालकांना धोकादायक कामांवर नियुक्त करण्यास प्रतिबंध करते."
    },
    articleIds: []
  },
  {
    id: "right-to-freedom-of-religion",
    icon: "Landmark",
    title: { en: "Right to Freedom of Religion", mr: "धार्मिक स्वातंत्र्याचा अधिकार" },
    explanation: {
      en: "Gives every person the freedom of conscience and the right to freely profess, practise, and propagate religion, within public order and morality.",
      mr: "प्रत्येक व्यक्तीला सद्सद्विवेकबुद्धीचे स्वातंत्र्य आणि सार्वजनिक सुव्यवस्था व नैतिकतेच्या मर्यादेत धर्माचे पालन, आचरण व प्रसार करण्याचा अधिकार देते."
    },
    articleIds: []
  },
  {
    id: "cultural-educational-rights",
    icon: "BookOpen",
    title: { en: "Cultural and Educational Rights", mr: "सांस्कृतिक आणि शैक्षणिक अधिकार" },
    explanation: {
      en: "Protects the right of communities to preserve their language, script and culture, and to establish and administer educational institutions.",
      mr: "समुदायांना त्यांची भाषा, लिपी आणि संस्कृती जपण्याचा तसेच शैक्षणिक संस्था स्थापन करून चालवण्याचा अधिकार देते."
    },
    articleIds: ["21a"]
  },
  {
    id: "right-to-constitutional-remedies",
    icon: "Gavel",
    title: { en: "Right to Constitutional Remedies", mr: "संवैधानिक उपायांचा अधिकार" },
    explanation: {
      en: "Allows citizens to move the Supreme Court directly for the enforcement of their fundamental rights.",
      mr: "नागरिकांना त्यांच्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी थेट सर्वोच्च न्यायालयात जाण्याची मुभा देते."
    },
    articleIds: ["32"]
  }
];
function FundamentalRights() {
  const { t, pick, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("rights_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("rights_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-4", children: fundamentalRights.map((right) => {
      const relatedArticles = right.articleIds.map((id) => getArticleById(id)).filter(Boolean);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col gap-4 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:flex-row sm:items-start",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf/10 text-leaf", children: /* @__PURE__ */ jsx(DynamicIcon, { name: right.icon, size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: pick(right.title) }),
              /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: pick(right.explanation) }),
              relatedArticles.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: relatedArticles.map((a) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/article/${a.id}`,
                  className: "rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 py-1 text-xs text-navy/70 dark:text-ink-dark/70 hover:border-saffron/50 hover:text-saffron transition-colors",
                  children: a.articleNumber
                },
                a.id
              )) })
            ] })
          ]
        },
        right.id
      );
    }) })
  ] });
}
const fundamentalDuties = [
  {
    number: 1,
    en: "Respect the Constitution, the national flag, and the national anthem.",
    mr: "संविधान, राष्ट्रध्वज आणि राष्ट्रगीत यांचा आदर करणे.",
    explanation: {
      en: "Hold the symbols and ideals of the nation in respect in daily life.",
      mr: "दैनंदिन जीवनात राष्ट्राच्या प्रतीकांचा आणि आदर्शांचा सन्मान राखणे."
    }
  },
  {
    number: 2,
    en: "Cherish the noble ideals of the freedom struggle.",
    mr: "स्वातंत्र्यलढ्यातील उदात्त आदर्श जपणे.",
    explanation: {
      en: "Remember and value the sacrifices that shaped an independent India.",
      mr: "स्वतंत्र भारत घडवणाऱ्या त्यागाचे स्मरण आणि जपणूक करणे."
    }
  },
  {
    number: 3,
    en: "Uphold the sovereignty, unity and integrity of India.",
    mr: "भारताचे सार्वभौमत्व, एकता आणि अखंडता जपणे.",
    explanation: {
      en: "Act in ways that protect the country as one unified nation.",
      mr: "देशाला एकसंध राष्ट्र म्हणून सुरक्षित ठेवणाऱ्या पद्धतीने वागणे."
    }
  },
  {
    number: 4,
    en: "Defend the country and render national service when called upon.",
    mr: "देशाचे संरक्षण करणे आणि बोलावल्यास राष्ट्रीय सेवा बजावणे.",
    explanation: {
      en: "Be willing to serve the nation in times of need.",
      mr: "गरजेच्या वेळी राष्ट्रसेवेसाठी तत्पर राहणे."
    }
  },
  {
    number: 5,
    en: "Promote harmony and the spirit of common brotherhood among all citizens.",
    mr: "सर्व नागरिकांमध्ये सलोखा आणि बंधुभाव वाढवणे.",
    explanation: {
      en: "Treat fellow citizens with respect regardless of religion, region or language.",
      mr: "धर्म, प्रदेश किंवा भाषेचा भेद न करता सहनागरिकांशी आदराने वागणे."
    }
  },
  {
    number: 6,
    en: "Value and preserve the rich heritage of the composite culture.",
    mr: "संमिश्र संस्कृतीचा समृद्ध वारसा जपणे आणि त्याचे मूल्य राखणे.",
    explanation: {
      en: "Protect India's shared cultural heritage for future generations.",
      mr: "भावी पिढ्यांसाठी भारताचा सामायिक सांस्कृतिक वारसा जपणे."
    }
  },
  {
    number: 7,
    en: "Protect the natural environment including forests, lakes, rivers and wildlife.",
    mr: "वने, तलाव, नद्या आणि वन्यजीव यांसह नैसर्गिक पर्यावरणाचे रक्षण करणे.",
    explanation: {
      en: "Take personal responsibility for protecting nature.",
      mr: "निसर्ग रक्षणाची वैयक्तिक जबाबदारी स्वीकारणे."
    }
  },
  {
    number: 8,
    en: "Develop scientific temper, humanism and the spirit of inquiry.",
    mr: "वैज्ञानिक दृष्टिकोन, मानवतावाद आणि शोधक वृत्ती विकसित करणे.",
    explanation: {
      en: "Approach problems with reason and evidence.",
      mr: "समस्यांकडे तर्क आणि पुराव्यांच्या आधारे पाहणे."
    }
  },
  {
    number: 9,
    en: "Safeguard public property and renounce violence.",
    mr: "सार्वजनिक मालमत्तेचे रक्षण करणे आणि हिंसाचाराचा त्याग करणे.",
    explanation: {
      en: "Protect shared community resources and resolve disputes peacefully.",
      mr: "सामायिक सार्वजनिक साधनसंपत्तीचे रक्षण करणे आणि वाद शांततेने सोडवणे."
    }
  },
  {
    number: 10,
    en: "Strive towards excellence in all spheres of individual and collective activity.",
    mr: "वैयक्तिक आणि सामूहिक कार्यक्षेत्रात उत्कृष्टतेसाठी प्रयत्नशील राहणे.",
    explanation: {
      en: "Keep improving so the nation as a whole keeps rising.",
      mr: "सतत सुधारणा करत राहून राष्ट्राची प्रगती साधणे."
    }
  },
  {
    number: 11,
    en: "Provide opportunities for education to a child or ward between ages 6 and 14.",
    mr: "६ ते १४ वयोगटातील मुलास/पाल्यास शिक्षणाची संधी उपलब्ध करून देणे.",
    explanation: {
      en: "Parents and guardians share responsibility for a child's schooling.",
      mr: "मुलाच्या शिक्षणाची जबाबदारी पालकांनी उचलणे."
    }
  }
];
function FundamentalDuties() {
  const { t, pick, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("duties_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("duties_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: fundamentalDuties.map((duty) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex gap-4 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-display shrink-0 text-2xl font-semibold text-saffron/70", children: String(duty.number).padStart(2, "0") }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { lang: language, className: "text-sm font-medium leading-snug text-navy dark:text-ink-dark", children: pick({ en: duty.en, mr: duty.mr }) }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-1.5 text-xs leading-relaxed text-ink/55 dark:text-ink-dark/55", children: pick(duty.explanation) })
          ] })
        ]
      },
      duty.number
    )) })
  ] });
}
const directiveIntro = {
  what: {
    en: "The Directive Principles of State Policy (Part IV) are guidelines the State is expected to keep in mind while making laws and policy. Unlike Fundamental Rights, they are not directly enforceable in court.",
    mr: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे (भाग IV) ही कायदे आणि धोरणे बनवताना राज्याने लक्षात ठेवावीत अशी मार्गदर्शक तत्त्वे आहेत. मूलभूत अधिकारांप्रमाणे ती न्यायालयात थेट लागू करता येत नाहीत."
  },
  why: {
    en: "They express the social and economic goals of a welfare state — things like reducing inequality, ensuring a living wage, and providing free legal aid — that a young republic aspired to work towards.",
    mr: "असमानता कमी करणे, उपजीविकेस पुरेसे वेतन सुनिश्चित करणे, मोफत कायदेशीर मदत पुरवणे यांसारखी कल्याणकारी राज्याची सामाजिक व आर्थिक उद्दिष्टे ती व्यक्त करतात."
  },
  how: {
    en: "While not enforceable directly, courts often read Directive Principles alongside Fundamental Rights when interpreting the Constitution, and governments use them to justify welfare legislation.",
    mr: "थेट लागू करता येत नसली तरी, संविधानाचा अर्थ लावताना न्यायालये अनेकदा मार्गदर्शक तत्त्वांचा मूलभूत अधिकारांसोबत विचार करतात, आणि सरकार कल्याणकारी कायद्यांचे समर्थन करण्यासाठी त्यांचा वापर करते."
  }
};
const directiveExamples = [
  {
    title: { en: "Equal pay for equal work", mr: "समान कामासाठी समान वेतन" },
    example: {
      en: "Guides laws that require men and women to be paid equally for the same job.",
      mr: "समान कामासाठी स्त्री-पुरुषांना समान वेतन देणाऱ्या कायद्यांना दिशा देते."
    }
  },
  {
    title: { en: "Free legal aid", mr: "मोफत कायदेशीर मदत" },
    example: {
      en: "Encourages the State to ensure justice is not denied to anyone due to lack of money.",
      mr: "पैशांच्या अभावामुळे कोणालाही न्याय नाकारला जाऊ नये यासाठी राज्याला प्रोत्साहन देते."
    }
  },
  {
    title: { en: "Village panchayats", mr: "ग्रामपंचायती" },
    example: {
      en: "Encouraged the organisation of village panchayats as units of local self-government.",
      mr: "स्थानिक स्वराज्य संस्था म्हणून ग्रामपंचायतींच्या स्थापनेस प्रोत्साहन दिले."
    }
  }
];
function DirectivePrinciples() {
  const { t, pick, language } = useLanguage();
  const blocks = [
    { key: "what", label: { en: "What are Directive Principles?", mr: "मार्गदर्शक तत्त्वे म्हणजे काय?" } },
    { key: "why", label: { en: "Why are they important?", mr: "ती महत्त्वाची का आहेत?" } },
    { key: "how", label: { en: "How do they guide the Government?", mr: "ती शासनाला कशी दिशा देतात?" } }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("directive_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("directive_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: blocks.map((b) => /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: pick(b.label) }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(directiveIntro[b.key]) })
    ] }, b.key)) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: language === "mr" ? "उदाहरणे" : "Examples in practice" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid gap-4 sm:grid-cols-3", children: directiveExamples.map((ex, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5",
          children: [
            /* @__PURE__ */ jsx("h3", { lang: language, className: "text-sm font-semibold text-navy dark:text-ink-dark", children: pick(ex.title) }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-xs leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick(ex.example) })
          ]
        },
        i
      )) })
    ] })
  ] });
}
const amendments = [
  {
    id: "1",
    number: "1st Amendment",
    year: 1951,
    title: { en: "Reasonable Restrictions & Land Reform", mr: "वाजवी निर्बंध व जमीन सुधारणा" },
    explanation: {
      en: "Added grounds for reasonable restrictions on free speech and shielded land reform laws from certain court challenges.",
      mr: "भाषण स्वातंत्र्यावरील वाजवी निर्बंधांसाठी नवीन कारणे जोडली आणि जमीन सुधारणा कायद्यांना काही न्यायालयीन आव्हानांपासून संरक्षण दिले."
    },
    verified: false
  },
  {
    id: "42",
    number: "42nd Amendment",
    year: 1976,
    title: { en: 'The "Mini-Constitution" Amendment', mr: '"लघु-संविधान" दुरुस्ती' },
    explanation: {
      en: 'Made wide-ranging changes, including adding the words "Socialist" and "Secular" to the Preamble and introducing Fundamental Duties.',
      mr: 'प्रस्तावनेत "समाजवादी" आणि "धर्मनिरपेक्ष" हे शब्द जोडणे आणि मूलभूत कर्तव्ये समाविष्ट करणे यांसह अनेक व्यापक बदल केले.'
    },
    verified: false
  },
  {
    id: "44",
    number: "44th Amendment",
    year: 1978,
    title: { en: "Restoring Checks After the Emergency", mr: "आणीबाणीनंतर पुनर्संतुलन" },
    explanation: {
      en: "Reversed several changes made by the 42nd Amendment and reinstated safeguards, including making the right to property a legal (not fundamental) right.",
      mr: "४२व्या दुरुस्तीतील अनेक बदल रद्द केले आणि सुरक्षा उपाय पुनर्स्थापित केले, तसेच मालमत्तेचा अधिकार मूलभूत ऐवजी कायदेशीर अधिकार बनवला."
    },
    verified: false
  },
  {
    id: "73",
    number: "73rd Amendment",
    year: 1992,
    title: { en: "Panchayati Raj", mr: "पंचायती राज" },
    explanation: {
      en: "Gave constitutional status to rural local self-government institutions (Panchayati Raj).",
      mr: "ग्रामीण स्थानिक स्वराज्य संस्थांना (पंचायती राज) संवैधानिक दर्जा दिला."
    },
    verified: false
  },
  {
    id: "86",
    number: "86th Amendment",
    year: 2002,
    title: { en: "Right to Education", mr: "शिक्षणाचा अधिकार" },
    explanation: {
      en: "Inserted Article 21A, making free and compulsory education a fundamental right for children in a defined age group.",
      mr: "कलम २१अ समाविष्ट केले, ज्यामुळे ठराविक वयोगटातील मुलांसाठी मोफत व सक्तीचे शिक्षण मूलभूत अधिकार बनले."
    },
    verified: false
  },
  {
    id: "101",
    number: "101st Amendment",
    year: 2016,
    title: { en: "Goods and Services Tax (GST)", mr: "वस्तू आणि सेवा कर (जीएसटी)" },
    explanation: {
      en: "Introduced a unified Goods and Services Tax framework across the country.",
      mr: "संपूर्ण देशभर एकसंध वस्तू व सेवा कर प्रणाली लागू केली."
    },
    verified: false
  }
];
function Amendments() {
  const { t, pick, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("amendments_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("amendments_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-4", children: amendments.map((a) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col gap-3 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:flex-row sm:items-start sm:gap-6",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-baseline gap-2 sm:w-32 sm:flex-col sm:items-start sm:gap-0", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-semibold text-navy dark:text-saffron-light", children: a.year }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-ink/50 dark:text-ink-dark/50", children: a.number })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { lang: language, className: "text-base font-semibold text-navy dark:text-ink-dark", children: pick(a.title) }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-1.5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: pick(a.explanation) })
          ] })
        ]
      },
      a.id
    )) })
  ] });
}
function QuizCard({ question, index, total, selected, onSelect, showResult }) {
  const { pick, t, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("span", { lang: language, className: "text-sm font-medium text-saffron", children: [
      t("quiz_question"),
      " ",
      index + 1,
      " ",
      t("quiz_of"),
      " ",
      total
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 w-full rounded-full bg-navy/10 dark:bg-white/10", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-1.5 rounded-full bg-saffron transition-all duration-300",
        style: { width: `${(index + 1) / total * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display mt-6 text-xl font-semibold leading-snug text-navy dark:text-ink-dark sm:text-2xl", children: pick(question.question) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3", children: question.options.map((opt, i) => {
      const isSelected = selected === i;
      const isCorrect = i === question.correctIndex;
      let stateClass = "border-navy/15 dark:border-ink-dark/20 hover:border-saffron/50";
      if (showResult) {
        if (isCorrect) stateClass = "border-leaf bg-leaf/10 text-leaf-dark dark:text-leaf-light";
        else if (isSelected && !isCorrect) stateClass = "border-red-400 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-300";
        else stateClass = "border-navy/10 dark:border-ink-dark/10 opacity-60";
      } else if (isSelected) {
        stateClass = "border-navy bg-navy/5 dark:border-saffron dark:bg-saffron/10";
      }
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          disabled: showResult,
          onClick: () => onSelect(i),
          lang: language,
          className: `rounded-xl border px-4 py-3 text-left text-sm sm:text-base transition-colors ${stateClass}`,
          children: pick(opt)
        },
        i
      );
    }) })
  ] });
}
const quizData = [
  {
    id: "q1",
    question: {
      en: "Which Article guarantees the Right to Equality before the law?",
      mr: "कायद्यासमोर समानतेच्या अधिकाराची हमी कोणते कलम देते?"
    },
    options: [
      { en: "Article 14", mr: "कलम १४" },
      { en: "Article 19", mr: "कलम १९" },
      { en: "Article 21", mr: "कलम २१" },
      { en: "Article 32", mr: "कलम ३२" }
    ],
    correctIndex: 0
  },
  {
    id: "q2",
    question: {
      en: 'Which Article is known as the "heart and soul" of the Constitution?',
      mr: 'संविधानाचा "आत्मा" कोणते कलम मानले जाते?'
    },
    options: [
      { en: "Article 21", mr: "कलम २१" },
      { en: "Article 32", mr: "कलम ३२" },
      { en: "Article 14", mr: "कलम १४" },
      { en: "Article 356", mr: "कलम ३५६" }
    ],
    correctIndex: 1
  },
  {
    id: "q3",
    question: {
      en: "The Right to Education is covered under which Article?",
      mr: "शिक्षणाचा अधिकार कोणत्या कलमाखाली येतो?"
    },
    options: [
      { en: "Article 19", mr: "कलम १९" },
      { en: "Article 21A", mr: "कलम २१अ" },
      { en: "Article 29", mr: "कलम २९" },
      { en: "Article 45", mr: "कलम ४५" }
    ],
    correctIndex: 1
  },
  {
    id: "q4",
    question: {
      en: "Fundamental Duties were added to the Constitution by which Amendment?",
      mr: "मूलभूत कर्तव्ये कोणत्या दुरुस्तीने संविधानात समाविष्ट करण्यात आली?"
    },
    options: [
      { en: "1st Amendment", mr: "पहिली दुरुस्ती" },
      { en: "42nd Amendment", mr: "४२वी दुरुस्ती" },
      { en: "44th Amendment", mr: "४४वी दुरुस्ती" },
      { en: "73rd Amendment", mr: "७३वी दुरुस्ती" }
    ],
    correctIndex: 1
  },
  {
    id: "q5",
    question: {
      en: "Which part of the Constitution contains the Directive Principles of State Policy?",
      mr: "संविधानाच्या कोणत्या भागात राज्याच्या धोरणाची मार्गदर्शक तत्त्वे आहेत?"
    },
    options: [
      { en: "Part III", mr: "भाग ३" },
      { en: "Part IV", mr: "भाग ४" },
      { en: "Part V", mr: "भाग ५" },
      { en: "Part IV-A", mr: "भाग ४-अ" }
    ],
    correctIndex: 1
  },
  {
    id: "q6",
    question: {
      en: "Who is regarded as the chief architect of the Indian Constitution?",
      mr: "भारतीय संविधानाचे प्रमुख शिल्पकार म्हणून कोणाला ओळखले जाते?"
    },
    options: [
      { en: "Jawaharlal Nehru", mr: "जवाहरलाल नेहरू" },
      { en: "B. R. Ambedkar", mr: "बाबासाहेब आंबेडकर" },
      { en: "Sardar Patel", mr: "सरदार पटेल" },
      { en: "Rajendra Prasad", mr: "राजेंद्र प्रसाद" }
    ],
    correctIndex: 1
  },
  {
    id: "q7",
    question: {
      en: "The 101st Amendment introduced which major tax reform?",
      mr: "१०१व्या दुरुस्तीने कोणती मोठी कर सुधारणा लागू केली?"
    },
    options: [
      { en: "Income Tax", mr: "आयकर" },
      { en: "GST", mr: "जीएसटी" },
      { en: "Wealth Tax", mr: "संपत्ती कर" },
      { en: "Service Tax", mr: "सेवा कर" }
    ],
    correctIndex: 1
  },
  {
    id: "q8",
    question: {
      en: "A national Emergency can be proclaimed under which Article?",
      mr: "राष्ट्रीय आणीबाणी कोणत्या कलमाखाली जाहीर केली जाऊ शकते?"
    },
    options: [
      { en: "Article 352", mr: "कलम ३५२" },
      { en: "Article 356", mr: "कलम ३५६" },
      { en: "Article 360", mr: "कलम ३६०" },
      { en: "Article 370", mr: "कलम ३७०" }
    ],
    correctIndex: 0
  }
];
function Quiz() {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const question = quizData[index];
  const isLast = index === quizData.length - 1;
  const handleSelect = (i) => {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    setAnswers((prev) => [...prev, i === question.correctIndex]);
  };
  const handleNext = () => {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setShowResult(false);
  };
  const restart = () => {
    setIndex(0);
    setSelected(null);
    setShowResult(false);
    setAnswers([]);
    setFinished(false);
  };
  if (finished) {
    const correct = answers.filter(Boolean).length;
    const wrong = answers.length - correct;
    const percentage = Math.round(correct / answers.length * 100);
    const excellent = percentage >= 70;
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-lg px-4 sm:px-6 py-16 sm:py-24 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10 text-saffron", children: /* @__PURE__ */ jsx(Trophy, { size: 28 }) }),
      /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-2xl font-semibold text-navy dark:text-ink-dark", children: excellent ? t("quiz_excellent") : t("quiz_keep_learning") }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-8", children: [
        /* @__PURE__ */ jsx("span", { lang: language, className: "text-sm text-ink/50 dark:text-ink-dark/50", children: t("quiz_score") }),
        /* @__PURE__ */ jsxs("p", { className: "font-display mt-1 text-5xl font-semibold text-navy dark:text-saffron", children: [
          percentage,
          "%"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-semibold text-leaf", children: correct }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-1 text-ink/50 dark:text-ink-dark/50", children: t("quiz_correct") })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-semibold text-red-400", children: wrong }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-1 text-ink/50 dark:text-ink-dark/50", children: t("quiz_wrong") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: restart,
          lang: language,
          className: "mt-8 inline-flex items-center gap-2 rounded-full bg-navy dark:bg-saffron px-6 py-3 text-sm font-medium text-paper dark:text-ink",
          children: [
            /* @__PURE__ */ jsx(RotateCcw, { size: 16 }),
            " ",
            t("quiz_try_again")
          ]
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark sm:text-3xl", children: t("quiz_title") }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
      QuizCard,
      {
        question,
        index,
        total: quizData.length,
        selected,
        onSelect: handleSelect,
        showResult
      }
    ) }),
    /* @__PURE__ */ jsx(Advertisement, { placement: "article" }),
    showResult && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: handleNext,
        lang: language,
        className: "mt-6 w-full rounded-full bg-navy dark:bg-saffron py-3 text-sm font-medium text-paper dark:text-ink sm:w-auto sm:px-8",
        children: isLast ? t("quiz_finish") : t("quiz_next")
      }
    )
  ] });
}
function Bookmarks() {
  const { t, language } = useLanguage();
  const { bookmarks } = useBookmarks();
  const saved = articles.filter((a) => bookmarks.includes(a.id));
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("bookmarks_title") }),
    saved.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 dark:bg-white/10 text-navy/30 dark:text-ink-dark/30", children: /* @__PURE__ */ jsx(Star, { size: 24 }) }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-4 text-ink/50 dark:text-ink-dark/50", children: t("bookmarks_empty") })
    ] }) : /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2", children: saved.map((article) => /* @__PURE__ */ jsx(ArticleCard, { article }, article.id)) })
  ] });
}
function About() {
  const { t, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("about_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("about_intro") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("about_goal") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("about_mission_title") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_mission_detail") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_mission_detail_2") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("about_find_title") }),
      /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: Array.from({ length: 9 }, (_, index) => /* @__PURE__ */ jsx("li", { lang: language, children: t(`about_find_${index + 1}`) }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("about_commitment_title") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_commitment") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_independent") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_contact") }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink/65 dark:text-ink-dark/65", children: [
        /* @__PURE__ */ jsx("span", { lang: language, children: t("about_email") }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@mysamvidhan.in", className: "text-saffron hover:underline", children: "info@mysamvidhan.in" })
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("about_thanks") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 font-display text-base font-semibold text-navy dark:text-ink-dark", children: t("about_tagline") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "text-sm font-semibold text-navy dark:text-ink-dark", children: t("footer_disclaimer_title") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("footer_disclaimer") })
    ] })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-lg px-4 py-24 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/60 dark:text-ink-dark/60", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-block text-saffron", children: "← Back to Home" })
  ] });
}
function PremiumBadge() {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-saffron/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-saffron", children: t("premium_title") });
}
function PricingCard({ plan }) {
  const { isPremium, upgradeToPremium } = useAuth();
  const { t } = useLanguage();
  const labels = {
    "Basic access": "common_free_access",
    Articles: "nav_articles",
    "Basic quiz": "quiz_title",
    Bookmarks: "nav_bookmarks",
    "Premium content": "premium_content",
    "Advanced quiz": "premium_quiz",
    "Exam preparation": "premium_exam",
    Notes: "common_premium_notes",
    "Progress tracking": "premium_tracking",
    "Ad-free experience": "premium_ad_free",
    "Everything in Monthly": "common_everything_monthly",
    "Full-year access": "common_full_year",
    "Advanced revision tools": "common_advanced_revision"
  };
  const planName = plan.id === "monthly" ? t("premium_monthly") : plan.id === "yearly" ? t("premium_yearly") : t("common_free");
  return /* @__PURE__ */ jsxs("article", { className: `relative rounded-2xl border p-6 ${plan.id === "yearly" ? "border-saffron bg-saffron/[0.06]" : "border-navy/10 bg-white/60 dark:border-ink-dark/10 dark:bg-white/[0.04]"}`, children: [
    plan.badge && /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-5 text-xs font-semibold text-saffron", children: t("premium_best") }),
    /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold tracking-wider text-navy dark:text-ink-dark", children: planName }),
    /* @__PURE__ */ jsxs("p", { className: "font-display mt-5 text-4xl font-semibold text-navy dark:text-saffron-light", children: [
      plan.price,
      /* @__PURE__ */ jsx("small", { className: "text-sm font-normal text-ink/50", children: plan.cadence })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 text-sm text-ink/70 dark:text-ink-dark/70", children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(Check, { size: 16, className: "shrink-0 text-leaf" }),
      t(labels[feature] || feature)
    ] }, feature)) }),
    plan.id !== "free" && /* @__PURE__ */ jsx("button", { type: "button", onClick: upgradeToPremium, disabled: isPremium, className: "mt-7 w-full rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-paper disabled:opacity-50 dark:bg-saffron dark:text-ink", children: isPremium ? t("premium_current") : t("premium_choose") })
  ] });
}
function PremiumContent({ children, title }) {
  const { isPremium } = useAuth();
  const { t } = useLanguage();
  if (isPremium) return children;
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-saffron/30 bg-saffron/[0.06] p-8 text-center", children: [
    /* @__PURE__ */ jsx(Lock, { className: "mx-auto text-saffron", size: 24 }),
    /* @__PURE__ */ jsx("h2", { className: "font-display mt-3 text-xl font-semibold text-navy dark:text-ink-dark", children: title || t("premium_content") }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ink/60 dark:text-ink-dark/60", children: t("premium_unlock") }),
    /* @__PURE__ */ jsx(Link, { to: "/premium", className: "mt-5 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-paper dark:bg-saffron dark:text-ink", children: t("premium_view_plans") })
  ] });
}
const plans = [
  { id: "free", name: "FREE", price: "₹0", cadence: "", features: ["Basic access", "Articles", "Basic quiz", "Bookmarks"] },
  { id: "monthly", name: "MONTHLY", price: "₹99", cadence: "/month", features: ["Premium content", "Advanced quiz", "Exam preparation", "Notes", "Progress tracking", "Ad-free experience"] },
  { id: "yearly", name: "YEARLY", price: "₹799", cadence: "/year", badge: "Best Value", features: ["Everything in Monthly", "Full-year access", "Advanced revision tools"] }
];
const premiumContent = [
  { id: "deep-dive", title: { en: "Article 21: Deep-dive revision", mr: "कलम २१: सखोल उजळणी" }, description: { en: "Case-law context, exam cues and a compact revision checklist.", mr: "न्यायालयीन संदर्भ, परीक्षेतील मुद्दे आणि उजळणी यादी." } },
  { id: "amendments", title: { en: "Amendments exam map", mr: "दुरुस्त्यांचा परीक्षाभिमुख नकाशा" }, description: { en: "Connect landmark amendments to the ideas they changed.", mr: "महत्त्वाच्या दुरुस्त्या आणि त्यांनी बदललेल्या तरतुदी जोडा." } }
];
function Premium() {
  const { language, t, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx(PremiumBadge, {}),
      /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-4 text-4xl font-semibold text-navy dark:text-ink-dark sm:text-5xl", children: t("premium_title") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-4 text-xl text-ink/65 dark:text-ink-dark/65", children: t("premium_hero") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-xl leading-relaxed text-ink/60 dark:text-ink-dark/60", children: t("common_challenge") })
    ] }),
    /* @__PURE__ */ jsx("h2", { lang: language, className: "sr-only", children: t("premium_features") }),
    /* @__PURE__ */ jsx("section", { className: "mt-12 grid gap-5 md:grid-cols-3", children: plans.map((plan) => /* @__PURE__ */ jsx(PricingCard, { plan }, plan.id)) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("common_what_adds") }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: t("common_choose_path") }),
        /* @__PURE__ */ jsxs(Link, { to: "/exam-preparation", className: "mt-5 inline-block text-sm font-medium text-saffron", children: [
          t("common_explore_exam"),
          " →"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: premiumContent.map((item) => /* @__PURE__ */ jsx(PremiumContent, { title: pick(item.title), children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-leaf/20 bg-leaf/[0.05] p-5", children: [
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display font-semibold text-navy dark:text-ink-dark", children: pick(item.title) }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm text-ink/60 dark:text-ink-dark/60", children: pick(item.description) })
      ] }) }, item.id)) })
    ] })
  ] });
}
function ExamCard({ exam }) {
  const { t } = useLanguage();
  const featureKeys = { "Important Articles": "dashboard_important", "Previous year questions": "dashboard_recent_quiz", "Daily MCQ": "dashboard_take_quiz", "Topic-wise quiz": "dashboard_quiz_progress", "Quick revision": "common_advanced_revision", "Important Amendments": "dashboard_amendments", "Advanced MCQ": "dashboard_take_quiz", "Topic-wise practice": "common_practice", "Revision notes": "common_premium_notes" };
  return /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-saffron", children: exam.code }),
    /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-2xl font-semibold text-navy dark:text-ink-dark", children: exam.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: exam.description }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm text-ink/70 dark:text-ink-dark/70", children: exam.features.map((feature) => /* @__PURE__ */ jsxs("li", { children: [
      "• ",
      t(featureKeys[feature] || feature)
    ] }, feature)) }),
    /* @__PURE__ */ jsxs(Link, { to: "/premium-quiz", className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-saffron", children: [
      t("common_practice"),
      " ",
      /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
    ] })
  ] });
}
const exams = [{ code: "MPSC", title: "MPSC Constitution Preparation", description: "A practical path from foundational Articles to Maharashtra-focused revision.", features: ["Important Articles", "Previous year questions", "Daily MCQ", "Topic-wise quiz", "Quick revision", "Important Amendments"] }, { code: "UPSC", title: "UPSC Polity Preparation", description: "Build conceptual depth and practise the reasoning expected in civil services exams.", features: ["Important Articles", "Previous year questions", "Advanced MCQ", "Topic-wise practice", "Revision notes"] }];
function ExamPreparation() {
  const { t } = useLanguage();
  const localizedExams = exams.map((exam) => ({ ...exam, title: t(exam.code === "MPSC" ? "exam_mpsc" : "exam_upsc"), description: t(exam.code === "MPSC" ? "exam_mpsc_desc" : "exam_upsc_desc") }));
  useEffect(() => {
    document.title = `${t("exam_title")} | Samvidhan`;
  }, [t]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: t("common_study_tracks") }),
      /* @__PURE__ */ jsx("h1", { className: "font-display mt-3 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("exam_title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("exam_sub") }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: localizedExams.map((exam) => /* @__PURE__ */ jsx(ExamCard, { exam }, exam.code)) })
    ] }),
    /* @__PURE__ */ jsx(RecommendedBooks, { books })
  ] });
}
function PremiumQuiz() {
  const { t, pick } = useLanguage();
  const [difficulty, setDifficulty] = useState(t("common_all_levels"));
  const [category, setCategory] = useState(t("common_all_topics"));
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    document.title = `${t("advanced_title")} | Samvidhan`;
  }, [t]);
  const question = quizData[0];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-14 sm:px-6", children: [
    /* @__PURE__ */ jsx(PremiumBadge, {}),
    /* @__PURE__ */ jsx("h1", { className: "font-display mt-4 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("advanced_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/60 dark:text-ink-dark/60", children: t("advanced_sub") }),
    /* @__PURE__ */ jsx(PremiumContent, { title: t("advanced_title"), children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm text-ink/70 dark:text-ink-dark/70", children: [
          t("common_topic"),
          /* @__PURE__ */ jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "mt-2 block w-full rounded-lg border border-navy/15 bg-transparent p-2.5", children: [
            /* @__PURE__ */ jsx("option", { children: t("common_all_topics") }),
            /* @__PURE__ */ jsx("option", { children: t("dashboard_rights") }),
            /* @__PURE__ */ jsx("option", { children: t("nav_articles") }),
            /* @__PURE__ */ jsx("option", { children: t("dashboard_amendments") }),
            /* @__PURE__ */ jsx("option", { children: t("common_all_topics") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "text-sm text-ink/70 dark:text-ink-dark/70", children: [
          t("common_difficulty"),
          /* @__PURE__ */ jsxs("select", { value: difficulty, onChange: (e) => setDifficulty(e.target.value), className: "mt-2 block w-full rounded-lg border border-navy/15 bg-transparent p-2.5", children: [
            /* @__PURE__ */ jsx("option", { children: t("common_all_levels") }),
            /* @__PURE__ */ jsx("option", { children: "Easy" }),
            /* @__PURE__ */ jsx("option", { children: "Medium" }),
            /* @__PURE__ */ jsx("option", { children: "Hard" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 border-t border-navy/10 pt-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-saffron", children: [
          t("common_question"),
          " 1 · ",
          category,
          " · ",
          difficulty
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-xl font-semibold text-navy dark:text-ink-dark", children: pick(question.question) }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-2", children: question.options.map((option, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelected(index), className: `rounded-lg border p-3 text-left text-sm ${selected === index ? "border-saffron bg-saffron/10" : "border-navy/10"}`, children: pick(option) }, option.en)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/progress", className: "mt-6 inline-block text-sm font-medium text-saffron", children: [
          t("common_view_progress"),
          " →"
        ] })
      ] })
    ] }) })
  ] });
}
function NotesCard({ note, onOpen }) {
  const { pick, t } = useLanguage();
  return /* @__PURE__ */ jsxs("article", { className: "flex flex-col rounded-2xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-saffron", children: note.category }),
      /* @__PURE__ */ jsx(PremiumBadge, {})
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display mt-4 text-lg font-semibold text-navy dark:text-ink-dark", children: pick(note.title) }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick(note.description) }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-ink/45 dark:text-ink-dark/45", children: note.language }),
    /* @__PURE__ */ jsxs("button", { type: "button", onClick: onOpen, className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-saffron", children: [
      t("common_open_note"),
      " ",
      /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
    ] })
  ] });
}
const notes = [
  { id: "rights-revision", title: { en: "Fundamental Rights: Quick Revision", mr: "मूलभूत अधिकार: जलद उजळणी" }, category: "Fundamental Rights", description: { en: "A concise map of Part III, remedies and landmark Articles.", mr: "भाग III, उपाय आणि महत्त्वाच्या कलमांचा संक्षिप्त नकाशा." }, language: "English + Marathi" },
  { id: "amendments-revision", title: { en: "Important Amendments", mr: "महत्त्वाच्या दुरुस्त्या" }, category: "Important Amendments", description: { en: "Revision prompts for amendments frequently asked in exams.", mr: "परीक्षेत वारंवार विचारल्या जाणाऱ्या दुरुस्त्यांसाठी उजळणी." }, language: "English + Marathi" },
  { id: "mpsc-revision", title: { en: "MPSC Constitution Revision", mr: "MPSC संविधान उजळणी" }, category: "MPSC Revision", description: { en: "A focused checklist for Maharashtra public service preparation.", mr: "महाराष्ट्र लोकसेवा परीक्षेच्या तयारीसाठी केंद्रित यादी." }, language: "Marathi" }
];
function Notes() {
  const { t, pick } = useLanguage();
  const [open, setOpen] = useState(null);
  useEffect(() => {
    document.title = `${t("notes_title")} | Samvidhan`;
  }, [t]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: t("common_revision_library") }),
    /* @__PURE__ */ jsx("h1", { className: "font-display mt-3 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("notes_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("notes_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: notes.map((note) => /* @__PURE__ */ jsx(NotesCard, { note, onOpen: () => setOpen(note) }, note.id)) }),
    open && /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(PremiumContent, { title: pick(open.title), children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-leaf/20 bg-leaf/[0.05] p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(open.title) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: pick(open.description) })
    ] }) }) })
  ] });
}
function ProgressCard({ label, value, detail, progress = 0 }) {
  return /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60 dark:text-ink-dark/60", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-3xl font-semibold text-navy dark:text-saffron-light", children: value }),
    detail && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink/45 dark:text-ink-dark/45", children: detail }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 h-1.5 overflow-hidden rounded-full bg-navy/10 dark:bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-saffron", style: { width: `${progress}%` } }) })
  ] });
}
function Dashboard() {
  const { user, isPremium } = useAuth();
  const { bookmarks } = useBookmarks();
  const { t, language } = useLanguage();
  useEffect(() => {
    document.title = `${t("dashboard_title")} | Samvidhan`;
  }, [t, language]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: t("common_my_learning_space") }),
        /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-3 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("dashboard_welcome") }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-ink/60 dark:text-ink-dark/60", children: t("dashboard_intro") })
      ] }),
      isPremium ? /* @__PURE__ */ jsx(PremiumBadge, {}) : /* @__PURE__ */ jsx(Link, { to: "/premium", className: "rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-paper dark:bg-saffron dark:text-ink", children: t("dashboard_upgrade") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("dashboard_learning") }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_saved"), value: bookmarks.length, detail: t("common_saved_list"), progress: Math.min(bookmarks.length * 10, 100) }),
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_recent_quiz"), value: t("common_not_available"), detail: t("common_no_attempts"), progress: 0 }),
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_premium_status"), value: isPremium ? t("dashboard_member") : t("dashboard_free"), detail: t("common_current_access"), progress: isPremium ? 100 : 25 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("dashboard_quick_actions") }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-3", children: [["/articles", "dashboard_explore"], ["/premium-quiz", "dashboard_take_quiz"], ["/progress", "dashboard_view_progress"], ["/bookmarks", "dashboard_bookmarks"]].map(([path, key]) => /* @__PURE__ */ jsxs(Link, { to: path, className: "rounded-xl border border-navy/10 px-4 py-3 text-sm font-medium text-navy dark:border-ink-dark/10 dark:text-ink-dark", children: [
        t(key),
        " →"
      ] }, path)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("dashboard_your_progress") }),
        /* @__PURE__ */ jsx(Link, { to: "/progress", className: "text-sm font-medium text-saffron", children: t("dashboard_view_all") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_completed"), value: "0", progress: 0 }),
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_average"), value: t("common_not_available"), progress: 0 }),
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_questions"), value: "0", progress: 0 }),
        /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_accuracy"), value: t("common_not_available"), progress: 0 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("dashboard_recommended") }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-3", children: [["/articles", "dashboard_important"], ["/fundamental-rights", "dashboard_rights"], ["/fundamental-duties", "dashboard_duties"], ["/amendments", "dashboard_amendments"]].map(([path, key]) => /* @__PURE__ */ jsx(Link, { to: path, className: "rounded-xl border border-navy/10 px-4 py-3 text-sm text-navy dark:border-ink-dark/10 dark:text-ink-dark", children: t(key) }, path)) })
    ] })
  ] });
}
function Progress() {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("progress_title")} | Samvidhan`;
  }, [t]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: t("common_learning_record") }),
    /* @__PURE__ */ jsx("h1", { className: "font-display mt-3 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("progress_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/60 dark:text-ink-dark/60", children: t("progress_sub") }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_completed"), value: "0", progress: 0 }),
      /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_average"), value: t("common_not_available"), progress: 0 }),
      /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_questions"), value: "0", progress: 0 }),
      /* @__PURE__ */ jsx(ProgressCard, { label: t("dashboard_accuracy"), value: t("common_not_available"), progress: 0 })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-12 max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: t("common_topics_practiced") }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-4", children: [["dashboard_rights"], ["nav_articles"], ["dashboard_amendments"]].map(([key]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: t(key) }),
          /* @__PURE__ */ jsx("span", { className: "text-ink/45", children: t("common_not_started") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 rounded-full bg-navy/10", children: /* @__PURE__ */ jsx("div", { className: "h-full w-0 rounded-full bg-saffron" }) })
      ] }, key)) })
    ] })
  ] });
}
const topics = [["learn_article", "learn_article_desc", "/articles"], ["learn_rights", "learn_rights_desc", "/fundamental-rights"], ["learn_basics", "learn_basics_desc", "/articles"], ["learn_amendments", "learn_amendments_desc", "/amendments"], ["learn_mpsc", "learn_mpsc_desc", "/exam-preparation"], ["learn_upsc", "learn_upsc_desc", "/exam-preparation"]];
function Learn() {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = `${t("learn_title")} | Samvidhan`;
  }, [t]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: t("common_guided_start") }),
    /* @__PURE__ */ jsx("h1", { className: "font-display mt-3 text-4xl font-semibold text-navy dark:text-ink-dark", children: t("learn_title") }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: t("learn_sub") }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: topics.map(([titleKey, descKey, path]) => /* @__PURE__ */ jsxs(Link, { to: path, className: "rounded-2xl border border-navy/10 bg-white/60 p-6 transition-colors hover:border-saffron/40 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: t(titleKey) }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: t(descKey) }),
      /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-block text-sm font-medium text-saffron", children: [
        t("common_start_learning"),
        " →"
      ] })
    ] }, titleKey)) })
  ] });
}
function Contact() {
  const { t, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("contact_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("contact_intro") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("contact_intro_detail") }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("contact_get_in_touch") }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink/65 dark:text-ink-dark/65", children: [
        /* @__PURE__ */ jsx("span", { lang: language, children: t("about_email") }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@mysamvidhan.in", className: "text-saffron hover:underline", children: "info@mysamvidhan.in" })
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 text-sm text-ink/65 dark:text-ink-dark/65", children: t("contact_can_contact") }),
      /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: Array.from({ length: 6 }, (_, index) => /* @__PURE__ */ jsx("li", { lang: language, children: t(`contact_item_${index + 1}`) }, index)) }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("contact_response") })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: t("contact_corrections") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("contact_corrections_detail") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("contact_corrections_request") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("contact_corrections_thanks") })
    ] }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-8 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: t("contact_thanks") })
  ] });
}
const privacyPolicy = {
  title: { en: "Privacy Policy", mr: "गोपनीयता धोरण" },
  lastUpdated: { en: "Last Updated:", mr: "शेवटचे अद्यतन:" },
  date: { en: "September 4, 2026", mr: "4 सप्टेंबर 2026" },
  intro: {
    en: "At Samvidhan, accessible from https://www.mysamvidhan.in/, we respect the privacy of our visitors. This Privacy Policy explains what information may be collected when you use our website and how that information may be used.",
    mr: "Samvidhan वर येणाऱ्या वापरकर्त्यांच्या गोपनीयतेचा आम्ही आदर करतो. या गोपनीयता धोरणामध्ये आमच्या वेबसाइटचा वापर करताना कोणती माहिती गोळा केली जाऊ शकते आणि तिचा वापर कशासाठी केला जाऊ शकतो याची माहिती दिली आहे."
  },
  sections: [
    {
      title: { en: "Information We Collect", mr: "आम्ही कोणती माहिती गोळा करतो?" },
      paragraphs: [
        { en: "We may collect information that you voluntarily provide to us, such as your name and email address, when you contact us through our website or email.", mr: "तुम्ही वेबसाइट किंवा ईमेलद्वारे आमच्याशी संपर्क साधताना स्वेच्छेने दिलेली माहिती, जसे की तुमचे नाव आणि ईमेल पत्ता, आम्ही गोळा करू शकतो." },
        { en: "We may also automatically collect certain non-personally identifiable information, such as browser type, device information, pages visited, approximate location and general website usage information.", mr: "याशिवाय ब्राउझरचा प्रकार, डिव्हाइसची माहिती, भेट दिलेली पृष्ठे, अंदाजे स्थान आणि वेबसाइट वापरण्याशी संबंधित सामान्य माहिती यांसारखी काही वैयक्तिक ओळख न पटवणारी माहिती आपोआप गोळा केली जाऊ शकते." },
        { en: "This information may be used to understand how visitors use our website and to improve our services and user experience.", mr: "ही माहिती वेबसाइटचा वापर समजून घेण्यासाठी आणि आमच्या सेवा व वापरकर्त्यांचा अनुभव सुधारण्यासाठी वापरली जाऊ शकते." }
      ]
    },
    { title: { en: "Cookies", mr: "कुकीज" }, paragraphs: [{ en: "Samvidhan may use cookies and similar technologies to improve website functionality, understand website traffic and provide a better user experience.", mr: "Samvidhan वेबसाइटची कार्यक्षमता सुधारण्यासाठी, वेबसाइटवरील वाहतूक समजून घेण्यासाठी आणि चांगला वापरकर्ता अनुभव देण्यासाठी कुकीज आणि तत्सम तंत्रज्ञानाचा वापर करू शकते." }, { en: "Third-party services used on our website may also use cookies in accordance with their own privacy policies.", mr: "वेबसाइटवर वापरल्या जाणाऱ्या तृतीय-पक्ष सेवाही त्यांच्या स्वतःच्या गोपनीयता धोरणानुसार कुकीजचा वापर करू शकतात." }] },
    { title: { en: "Google Analytics", mr: "Google Analytics" }, paragraphs: [{ en: "We may use Google Analytics or similar analytics services to understand website traffic and user interactions.", mr: "वेबसाइटवरील वाहतूक आणि वापरकर्त्यांच्या परस्परसंवादाचे विश्लेषण करण्यासाठी आम्ही Google Analytics किंवा तत्सम विश्लेषण सेवा वापरू शकतो." }, { en: "These services may collect information such as pages visited, approximate geographic location, device type and browser information.", mr: "या सेवांद्वारे भेट दिलेली पृष्ठे, अंदाजे भौगोलिक स्थान, डिव्हाइसचा प्रकार आणि ब्राउझरची माहिती यांसारखी माहिती गोळा केली जाऊ शकते." }] },
    { title: { en: "Google AdSense and Advertising", mr: "Google AdSense आणि जाहिराती" }, paragraphs: [{ en: "We may display advertisements through third-party advertising services, including Google AdSense.", mr: "आमच्या वेबसाइटवर Google AdSense सारख्या तृतीय-पक्ष जाहिरात सेवांद्वारे जाहिराती प्रदर्शित केल्या जाऊ शकतात." }, { en: "Advertising providers may use cookies or similar technologies to display relevant advertisements and measure advertising performance.", mr: "जाहिरात सेवा पुरवठादार संबंधित जाहिराती दाखवण्यासाठी आणि जाहिरातींच्या कार्यक्षमतेचे मोजमाप करण्यासाठी कुकीज किंवा तत्सम तंत्रज्ञानाचा वापर करू शकतात." }, { en: "Google's use of advertising information is governed by its applicable policies and privacy practices.", mr: "Google द्वारे जाहिरातींसाठी माहितीचा वापर त्याच्या लागू धोरणे आणि गोपनीयता पद्धतीनुसार केला जातो." }] },
    {
      title: { en: "How We Use Information", mr: "माहितीचा वापर कशासाठी केला जातो?" },
      list: [
        { en: "Operate and maintain the website", mr: "वेबसाइट चालवणे आणि देखभाल करणे" },
        { en: "Improve website content and user experience", mr: "वेबसाइटवरील सामग्री आणि वापरकर्ता अनुभव सुधारणे" },
        { en: "Understand website traffic and usage", mr: "वेबसाइटवरील वाहतूक आणि वापर समजून घेणे" },
        { en: "Respond to enquiries and feedback", mr: "प्रश्न आणि अभिप्रायांना उत्तर देणे" },
        { en: "Detect and prevent misuse or security issues", mr: "गैरवापर किंवा सुरक्षा समस्या ओळखणे आणि प्रतिबंध करणे" },
        { en: "Display and measure relevant advertising", mr: "संबंधित जाहिराती दाखवणे आणि त्यांच्या कार्यक्षमतेचे मोजमाप करणे" }
      ]
    },
    { title: { en: "Third-Party Links", mr: "तृतीय-पक्ष वेबसाइटच्या लिंक" }, paragraphs: [{ en: "Our website may contain links to third-party websites. We are not responsible for the privacy practices, content or policies of external websites.", mr: "आमच्या वेबसाइटवर तृतीय-पक्ष वेबसाइटच्या लिंक असू शकतात. त्या वेबसाइटच्या गोपनीयता पद्धती, सामग्री किंवा धोरणांसाठी Samvidhan जबाबदार राहणार नाही." }] },
    { title: { en: "Data Security", mr: "माहितीची सुरक्षितता" }, paragraphs: [{ en: "We take reasonable measures to protect information submitted through our website. However, no method of transmission or storage over the internet can be guaranteed to be completely secure.", mr: "वेबसाइटद्वारे सादर केलेल्या माहितीचे संरक्षण करण्यासाठी आम्ही वाजवी सुरक्षा उपाययोजना करतो. मात्र इंटरनेटवर माहिती पाठवण्याची किंवा साठवण्याची कोणतीही पद्धत पूर्णपणे सुरक्षित असल्याची हमी देता येत नाही." }] },
    { title: { en: "Changes to This Privacy Policy", mr: "गोपनीयता धोरणातील बदल" }, paragraphs: [{ en: 'We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised "Last Updated" date.', mr: 'आमच्या वेबसाइट, सेवा किंवा लागू आवश्यकतांमध्ये बदल झाल्यास आम्ही हे गोपनीयता धोरण वेळोवेळी अपडेट करू शकतो. बदल झाल्यानंतर या पृष्ठावर सुधारित "शेवटचे अद्यतन" तारीख दिली जाईल.' }] }
  ],
  contact: { title: { en: "Contact Us", mr: "आमच्याशी संपर्क" }, body: { en: "If you have questions about this Privacy Policy, please contact us:", mr: "या गोपनीयता धोरणाबाबत काही प्रश्न असल्यास आमच्याशी संपर्क साधा:" }, email: { en: "Email:", mr: "ईमेल:" } }
};
function Privacy() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick(privacyPolicy.title) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-ink/55 dark:text-ink-dark/55", children: [
      /* @__PURE__ */ jsx("span", { lang: language, children: pick(privacyPolicy.lastUpdated) }),
      " ",
      pick(privacyPolicy.date)
    ] }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(privacyPolicy.intro) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: privacyPolicy.sections.map((section) => {
      var _a;
      return /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(section.title) }),
        (_a = section.paragraphs) == null ? void 0 : _a.map((paragraph, index) => /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(paragraph) }, index)),
        section.list && /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: section.list.map((item) => /* @__PURE__ */ jsx("li", { lang: language, children: pick(item) }, item.en)) })
      ] }, section.title.en);
    }) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(privacyPolicy.contact.title) }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(privacyPolicy.contact.body) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink/70 dark:text-ink-dark/70", children: [
        /* @__PURE__ */ jsx("span", { lang: language, children: pick(privacyPolicy.contact.email) }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@mysamvidhan.in", className: "text-saffron hover:underline", children: "info@mysamvidhan.in" })
      ] })
    ] })
  ] });
}
const termsConditions = {
  title: { en: "Terms & Conditions", mr: "नियम आणि अटी" },
  lastUpdated: { en: "Last Updated:", mr: "शेवटचे अद्यतन:" },
  date: { en: "September 4, 2026", mr: "4 सप्टेंबर 2026" },
  intro: {
    en: "Welcome to Samvidhan. By accessing and using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.",
    mr: "Samvidhan वेबसाइटवर आपले स्वागत आहे. या वेबसाइटचा वापर करून तुम्ही या नियम आणि अटींचे पालन करण्यास सहमती दर्शवता. या अटींच्या कोणत्याही भागाशी तुम्ही सहमत नसल्यास कृपया वेबसाइटचा वापर करू नका."
  },
  sections: [
    { title: { en: "Website Purpose", mr: "वेबसाइटचा उद्देश" }, paragraphs: [{ en: "Samvidhan is an independent educational and informational website created to make information about the Constitution of India easier to understand and access.", mr: "Samvidhan ही भारताच्या संविधानाशी संबंधित माहिती सोप्या पद्धतीने समजून घेता यावी आणि सहज उपलब्ध व्हावी यासाठी तयार केलेली स्वतंत्र शैक्षणिक आणि माहितीपर वेबसाइट आहे." }, { en: "The content published on this website is intended for general educational and informational purposes only.", mr: "वेबसाइटवर प्रकाशित केलेली सामग्री केवळ सामान्य शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे." }] },
    { title: { en: "Accuracy of Information", mr: "माहितीची अचूकता" }, paragraphs: [{ en: "We make reasonable efforts to provide accurate and up-to-date information. However, we do not guarantee that all information published on the website is complete, accurate, current or free from errors.", mr: "अचूक आणि अद्ययावत माहिती देण्यासाठी आम्ही वाजवी प्रयत्न करतो. मात्र वेबसाइटवर प्रकाशित केलेली प्रत्येक माहिती पूर्णपणे अचूक, संपूर्ण, अद्ययावत किंवा त्रुटीविरहित असेल याची आम्ही हमी देत नाही." }, { en: "Constitutional, legal and government-related information may change over time. Visitors should verify important information using official government or authoritative sources where appropriate.", mr: "संविधान, कायदे आणि सरकारी माहितीमध्ये कालांतराने बदल होऊ शकतात. महत्त्वाच्या बाबींसाठी वापरकर्त्यांनी आवश्यकतेनुसार अधिकृत सरकारी किंवा विश्वसनीय स्रोतांमधून माहितीची पडताळणी करावी." }] },
    { title: { en: "Not Legal Advice", mr: "कायदेशीर सल्ला नाही" }, paragraphs: [{ en: "The information available on Samvidhan is provided for educational and informational purposes and should not be considered legal advice.", mr: "Samvidhan वर उपलब्ध माहिती केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे. ती कायदेशीर सल्ला म्हणून समजू नये." }, { en: "For specific legal matters or professional advice, please consult a qualified legal professional.", mr: "विशिष्ट कायदेशीर बाबींसाठी किंवा व्यावसायिक सल्ल्यासाठी पात्र कायदेशीर तज्ज्ञाचा सल्ला घ्यावा." }] },
    { title: { en: "Intellectual Property", mr: "बौद्धिक संपदा" }, paragraphs: [{ en: "Unless otherwise stated, the original content, text, graphics, design and other materials created for Samvidhan are protected by applicable intellectual property laws.", mr: "वेगळे नमूद केले नसल्यास, Samvidhan साठी तयार केलेली मूळ सामग्री, मजकूर, ग्राफिक्स, डिझाइन आणि इतर साहित्य लागू बौद्धिक संपदा कायद्यांद्वारे संरक्षित आहे." }, { en: "You may access and use the website for personal, educational and non-commercial purposes.", mr: "तुम्ही वेबसाइटचा वैयक्तिक, शैक्षणिक आणि गैर-व्यावसायिक वापर करू शकता." }, { en: "You may not reproduce, republish, distribute, modify or commercially exploit our original content without prior written permission, except where permitted by applicable law.", mr: "लागू कायद्याने परवानगी दिलेली नसल्यास आमची मूळ सामग्री पूर्वपरवानगीशिवाय पुनर्प्रकाशित, वितरित, बदलणे किंवा व्यावसायिक वापरासाठी वापरणे अनुमत नाही." }] },
    { title: { en: "Third-Party Content and Links", mr: "तृतीय-पक्ष सामग्री आणि लिंक" }, paragraphs: [{ en: "Our website may contain links to external websites or references to third-party information.", mr: "आमच्या वेबसाइटवर बाह्य वेबसाइटच्या लिंक किंवा तृतीय-पक्षाच्या माहितीचे संदर्भ असू शकतात." }, { en: "These links are provided for convenience and informational purposes. Samvidhan does not control and is not responsible for the content, availability or policies of third-party websites.", mr: "या लिंक केवळ सोयीसाठी आणि माहितीच्या उद्देशाने दिल्या जातात. तृतीय-पक्ष वेबसाइटवरील सामग्री, उपलब्धता किंवा धोरणांवर Samvidhan चे नियंत्रण नाही आणि त्यासाठी Samvidhan जबाबदार राहणार नाही." }] },
    { title: { en: "Website Availability", mr: "वेबसाइटची उपलब्धता" }, paragraphs: [{ en: "We aim to keep the website available and functioning properly, but we do not guarantee uninterrupted, error-free or continuous availability.", mr: "वेबसाइट शक्य तितकी उपलब्ध आणि व्यवस्थित कार्यरत ठेवण्याचा आम्ही प्रयत्न करतो. मात्र वेबसाइट सतत, त्रुटीविरहित किंवा कोणत्याही व्यत्ययाशिवाय उपलब्ध राहील याची हमी देता येत नाही." }, { en: "We may modify, suspend or discontinue any part of the website without prior notice.", mr: "आम्ही कोणत्याही पूर्वसूचनेशिवाय वेबसाइटच्या कोणत्याही भागात बदल करू शकतो, तो तात्पुरता बंद करू शकतो किंवा सेवा थांबवू शकतो." }] },
    { title: { en: "Limitation of Liability", mr: "दायित्वाची मर्यादा" }, paragraphs: [{ en: "Samvidhan and its owners or contributors shall not be liable for any direct or indirect loss or damage arising from the use of, or reliance on, information available on this website, to the extent permitted by applicable law.", mr: "लागू कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत, या वेबसाइटवरील माहितीच्या वापरामुळे किंवा त्यावर अवलंबून राहिल्यामुळे होणाऱ्या कोणत्याही प्रत्यक्ष किंवा अप्रत्यक्ष नुकसानासाठी Samvidhan, त्याचे मालक किंवा योगदानकर्ते जबाबदार राहणार नाहीत." }] },
    { title: { en: "Changes to These Terms", mr: "नियमांमधील बदल" }, paragraphs: [{ en: "We may update these Terms & Conditions from time to time. Changes will become effective when published on this page.", mr: "आम्ही वेळोवेळी या नियम आणि अटींमध्ये बदल करू शकतो. बदल या पृष्ठावर प्रकाशित केल्यापासून लागू होतील." }] }
  ],
  contact: { title: { en: "Contact Us", mr: "आमच्याशी संपर्क" }, body: { en: "If you have any questions regarding these Terms & Conditions, please contact us:", mr: "या नियम आणि अटींबाबत काही प्रश्न असल्यास आमच्याशी संपर्क साधा:" }, email: { en: "Email:", mr: "ईमेल:" } }
};
function Terms() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick(termsConditions.title) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-ink/55 dark:text-ink-dark/55", children: [
      /* @__PURE__ */ jsx("span", { lang: language, children: pick(termsConditions.lastUpdated) }),
      " ",
      pick(termsConditions.date)
    ] }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(termsConditions.intro) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: termsConditions.sections.map((section) => /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(section.title) }),
      section.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(paragraph) }, index))
    ] }, section.title.en)) }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(termsConditions.contact.title) }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(termsConditions.contact.body) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink/70 dark:text-ink-dark/70", children: [
        /* @__PURE__ */ jsx("span", { lang: language, children: pick(termsConditions.contact.email) }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@mysamvidhan.in", className: "text-saffron hover:underline", children: "info@mysamvidhan.in" })
      ] })
    ] })
  ] });
}
function Disclaimer() {
  const { t, language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("footer_disclaimer_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: t("footer_disclaimer") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: "Samvidhan is an independent educational and informational website. Constitutional information can change and should be checked against current authoritative sources for legal or official use." })
  ] });
}
const faqCategories = [
  { key: "general", title: { en: "General", mr: "सामान्य प्रश्न" } },
  { key: "preamble", title: { en: "Preamble", mr: "उद्देशिका" } },
  { key: "rights", title: { en: "Fundamental Rights", mr: "मूलभूत अधिकार" } },
  { key: "duties", title: { en: "Fundamental Duties", mr: "मूलभूत कर्तव्ये" } },
  { key: "directive", title: { en: "Directive Principles", mr: "राज्याच्या मार्गदर्शक तत्त्वे" } },
  { key: "government", title: { en: "Parliament & Government", mr: "संसद व शासन" } },
  { key: "judiciary", title: { en: "Judiciary", mr: "न्यायव्यवस्था" } },
  { key: "amendments", title: { en: "Amendments", mr: "घटनादुरुस्ती" } },
  { key: "important", title: { en: "Other Important Questions", mr: "इतर महत्त्वाचे प्रश्न" } }
];
const faqs = [
  { id: "what-is-constitution", category: "general", question: { en: "What is the Constitution of India?", mr: "भारताचे संविधान म्हणजे काय?" }, answer: { en: "The Constitution of India is the supreme law of the country. It establishes the structure, powers and responsibilities of government and protects the rights of people.", mr: "भारताचे संविधान हा देशाचा सर्वोच्च कायदा आहे. ते शासनाची रचना, अधिकार आणि जबाबदाऱ्या निश्चित करते तसेच लोकांच्या अधिकारांचे संरक्षण करते." } },
  { id: "when-adopted", category: "general", question: { en: "When was the Constitution of India adopted?", mr: "भारताचे संविधान कधी स्वीकारले गेले?" }, answer: { en: "The Constituent Assembly adopted the Constitution on 26 November 1949. It came into force on 26 January 1950, which is celebrated as Republic Day.", mr: "संविधान सभेने २६ नोव्हेंबर १९४९ रोजी संविधान स्वीकारले. ते २६ जानेवारी १९५० रोजी लागू झाले आणि हा दिवस प्रजासत्ताक दिन म्हणून साजरा केला जातो." } },
  { id: "longest-written", category: "general", question: { en: "Why is the Indian Constitution considered a detailed written Constitution?", mr: "भारतीय संविधान सविस्तर लिखित संविधान का मानले जाते?" }, answer: { en: "It describes institutions of government, powers, procedures, rights, duties and relations between different levels of government in considerable detail. This detail supports a large and diverse democracy.", mr: "यामध्ये शासनसंस्था, अधिकार, प्रक्रिया, अधिकार व कर्तव्ये तसेच शासनाच्या विविध स्तरांमधील संबंध यांचे सविस्तर वर्णन आहे. ही सविस्तरता मोठ्या आणि विविधतापूर्ण लोकशाहीला आधार देते." } },
  { id: "constituent-assembly", category: "general", question: { en: "What was the Constituent Assembly?", mr: "संविधान सभा म्हणजे काय?" }, answer: { en: "The Constituent Assembly was the representative body that discussed and drafted the Constitution of India. It worked through committees and debates before adopting the final document.", mr: "संविधान सभा ही भारताचे संविधान तयार करणारी प्रतिनिधी संस्था होती. अंतिम दस्तऐवज स्वीकारण्यापूर्वी तिने समित्या आणि चर्चांद्वारे काम केले." } },
  { id: "ambedkar-role", category: "general", question: { en: "What was Dr. B. R. Ambedkar’s role in making the Constitution?", mr: "संविधान निर्मितीत डॉ. बाबासाहेब आंबेडकरांची भूमिका काय होती?" }, answer: { en: "Dr. B. R. Ambedkar chaired the Drafting Committee of the Constituent Assembly. He played a major role in shaping and presenting the draft Constitution for discussion.", mr: "डॉ. बाबासाहेब आंबेडकर संविधान सभेच्या मसुदा समितीचे अध्यक्ष होते. संविधानाचा मसुदा तयार करून तो चर्चेसाठी मांडण्यात त्यांची महत्त्वाची भूमिका होती." } },
  { id: "preamble-purpose", category: "preamble", question: { en: "What is the purpose of the Preamble?", mr: "उद्देशिकेचा उद्देश काय आहे?" }, answer: { en: "The Preamble states the constitutional vision and the broad ideals that guide the Republic. It describes India as sovereign, socialist, secular, democratic and republican, and promises justice, liberty, equality and fraternity.", mr: "उद्देशिका संविधानाची दृष्टी आणि प्रजासत्ताकाला मार्गदर्शन करणारी व्यापक मूल्ये सांगते. ती भारताला सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाहीवादी आणि प्रजासत्ताक म्हणून वर्णन करते तसेच न्याय, स्वातंत्र्य, समता आणि बंधुता यांचे आश्वासन देते." } },
  { id: "preamble-part", category: "preamble", question: { en: "Is the Preamble a part of the Constitution?", mr: "उद्देशिका संविधानाचा भाग आहे का?" }, answer: { en: "Yes. The Supreme Court held in the Kesavananda Bharati case that the Preamble is part of the Constitution. It helps explain the Constitution’s objectives, though it does not by itself grant a separate legal power.", mr: "होय. केशवानंद भारती प्रकरणात सर्वोच्च न्यायालयाने उद्देशिका संविधानाचा भाग असल्याचे स्पष्ट केले. ती संविधानाची उद्दिष्टे समजून घेण्यास मदत करते, मात्र स्वतःहून स्वतंत्र कायदेशीर अधिकार देत नाही." } },
  { id: "fundamental-rights", category: "rights", question: { en: "What are Fundamental Rights?", mr: "मूलभूत अधिकार म्हणजे काय?" }, answer: { en: "Fundamental Rights are constitutional guarantees that protect important freedoms and equality. They are mainly contained in Part III of the Constitution.", mr: "मूलभूत अधिकार हे महत्त्वाचे स्वातंत्र्य आणि समानतेचे संरक्षण करणारे संवैधानिक अधिकार आहेत. ते प्रामुख्याने संविधानाच्या भाग III मध्ये दिले आहेत." }, link: "/fundamental-rights", linkLabel: { en: "Explore Fundamental Rights", mr: "मूलभूत अधिकार पहा" } },
  { id: "right-to-equality", category: "rights", question: { en: "Which Article deals with equality before law?", mr: "कायद्यासमोर समानतेशी संबंधित कलम कोणते?" }, answer: { en: "Article 14 guarantees equality before the law and equal protection of the laws. It requires the State to treat people fairly under the constitutional framework.", mr: "कलम १४ कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण यांची हमी देते. संवैधानिक चौकटीत राज्याने लोकांशी न्याय्य वागणे आवश्यक आहे." }, link: "/article/14", linkLabel: { en: "Read Article 14", mr: "कलम १४ वाचा" } },
  { id: "article-21", category: "rights", question: { en: "Why is Article 21 important?", mr: "कलम २१ महत्त्वाचे का आहे?" }, answer: { en: "Article 21 protects life and personal liberty according to procedure established by law. Judicial decisions have interpreted its protection broadly over time.", mr: "कलम २१ कायद्याने स्थापित केलेल्या प्रक्रियेनुसार जीवन आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते. न्यायालयीन निर्णयांनी कालांतराने या संरक्षणाचा व्यापक अर्थ लावला आहे." }, link: "/article/21", linkLabel: { en: "Read Article 21", mr: "कलम २१ वाचा" } },
  { id: "constitutional-remedies", category: "rights", question: { en: "What is the Right to Constitutional Remedies?", mr: "संवैधानिक उपायांचा अधिकार म्हणजे काय?" }, answer: { en: "It allows a person to approach the Supreme Court for enforcement of Fundamental Rights under Article 32. High Courts also have important writ jurisdiction under Article 226.", mr: "कलम ३२ अंतर्गत मूलभूत अधिकारांच्या अंमलबजावणीसाठी व्यक्तीला सर्वोच्च न्यायालयात जाण्याचा अधिकार मिळतो. कलम २२६ अंतर्गत उच्च न्यायालयांनाही महत्त्वाचे लेखी अधिकारक्षेत्र आहे." }, link: "/article/32", linkLabel: { en: "Read Article 32", mr: "कलम ३२ वाचा" } },
  { id: "duties-number", category: "duties", question: { en: "How many Fundamental Duties are there?", mr: "मूलभूत कर्तव्ये किती आहेत?" }, answer: { en: "The Constitution currently lists eleven Fundamental Duties for citizens in Article 51A. They encourage respect for constitutional values, the nation, the environment and public responsibility.", mr: "संविधानाच्या कलम ५१अ मध्ये नागरिकांसाठी सध्या अकरा मूलभूत कर्तव्ये दिली आहेत. ती संवैधानिक मूल्ये, राष्ट्र, पर्यावरण आणि सार्वजनिक जबाबदारीचा आदर करण्यास प्रोत्साहन देतात." }, link: "/fundamental-duties", linkLabel: { en: "Explore Fundamental Duties", mr: "मूलभूत कर्तव्ये पहा" } },
  { id: "duties-added", category: "duties", question: { en: "Which Amendment added the Fundamental Duties?", mr: "मूलभूत कर्तव्ये कोणत्या दुरुस्तीने समाविष्ट झाली?" }, answer: { en: "The 42nd Constitutional Amendment added the Fundamental Duties in 1976. The duty relating to providing educational opportunities to children was added later by the 86th Amendment.", mr: "१९७६ मध्ये ४२व्या संविधान दुरुस्तीने मूलभूत कर्तव्ये समाविष्ट केली. मुलांना शैक्षणिक संधी देण्याशी संबंधित कर्तव्य नंतर ८६व्या दुरुस्तीने जोडले गेले." } },
  { id: "directive-principles", category: "directive", question: { en: "What are the Directive Principles of State Policy?", mr: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे म्हणजे काय?" }, answer: { en: "They are principles in Part IV that guide the State in making laws and policies for social and economic welfare. They are not enforceable by courts, but are fundamental to governance.", mr: "ही भाग IV मधील तत्त्वे आहेत जी सामाजिक आणि आर्थिक कल्याणासाठी कायदे व धोरणे बनवताना राज्याला मार्गदर्शन करतात. त्यांची न्यायालयाद्वारे अंमलबजावणी करता येत नाही, परंतु ती शासनासाठी मूलभूत आहेत." }, link: "/directive-principles", linkLabel: { en: "Explore Directive Principles", mr: "मार्गदर्शक तत्त्वे पहा" } },
  { id: "rights-directives-difference", category: "directive", question: { en: "How are Fundamental Rights different from Directive Principles?", mr: "मूलभूत अधिकार आणि मार्गदर्शक तत्त्वांमध्ये काय फरक आहे?" }, answer: { en: "Fundamental Rights are generally enforceable through courts and protect individual freedoms. Directive Principles guide governance and welfare policy but are not directly enforceable by courts.", mr: "मूलभूत अधिकारांची साधारणपणे न्यायालयामार्फत अंमलबजावणी करता येते आणि ते व्यक्तिस्वातंत्र्याचे संरक्षण करतात. मार्गदर्शक तत्त्वे शासन व कल्याणकारी धोरणांना दिशा देतात, परंतु त्यांची थेट न्यायालयीन अंमलबजावणी करता येत नाही." } },
  { id: "parliament-parts", category: "government", question: { en: "What are the two Houses of Parliament?", mr: "संसदेची दोन सभागृहे कोणती?" }, answer: { en: "The Parliament of India consists of the President and two Houses: the Rajya Sabha, or Council of States, and the Lok Sabha, or House of the People.", mr: "भारताची संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली आहे: राज्यसभा आणि लोकसभा." } },
  { id: "lok-sabha-term", category: "government", question: { en: "What is the normal term of the Lok Sabha?", mr: "लोकसभेचा सामान्य कार्यकाळ किती असतो?" }, answer: { en: "The normal term of the Lok Sabha is five years from the date appointed for its first meeting, unless it is dissolved earlier. The Constitution provides special rules during a Proclamation of Emergency.", mr: "लोकसभेचा सामान्य कार्यकाळ तिच्या पहिल्या बैठकीसाठी ठरवलेल्या तारखेपासून पाच वर्षांचा असतो, जोपर्यंत ती आधी विसर्जित होत नाही. आणीबाणीच्या घोषणेदरम्यान संविधानात विशेष तरतुदी आहेत." } },
  { id: "president-election", category: "government", question: { en: "How is the President of India elected?", mr: "भारताच्या राष्ट्रपतींची निवड कशी होते?" }, answer: { en: "The President is elected indirectly by an electoral college consisting of elected members of both Houses of Parliament and elected members of the Legislative Assemblies of the States and eligible Union Territories.", mr: "राष्ट्रपतींची अप्रत्यक्ष निवड संसदच्या दोन्ही सभागृहांतील निवडून आलेले सदस्य आणि राज्ये व पात्र केंद्रशासित प्रदेशांच्या विधानसभांतील निवडून आलेले सदस्य असलेल्या निर्वाचक मंडळाद्वारे केली जाते." } },
  { id: "council-ministers", category: "government", question: { en: "Who aids and advises the President?", mr: "राष्ट्रपतींना कोण मदत आणि सल्ला देते?" }, answer: { en: "The Council of Ministers, with the Prime Minister at its head, aids and advises the President. The President generally acts in accordance with that advice under the constitutional system.", mr: "पंतप्रधानांच्या नेतृत्वाखालील मंत्रिपरिषद राष्ट्रपतींना मदत आणि सल्ला देते. संवैधानिक व्यवस्थेनुसार राष्ट्रपती सामान्यतः त्या सल्ल्यानुसार कार्य करतात." } },
  { id: "supreme-court", category: "judiciary", question: { en: "What is the role of the Supreme Court?", mr: "सर्वोच्च न्यायालयाची भूमिका काय आहे?" }, answer: { en: "The Supreme Court is the highest court in India. It settles certain constitutional and legal disputes, protects constitutional rights through its jurisdiction and provides authoritative interpretations of law.", mr: "सर्वोच्च न्यायालय हे भारतातील सर्वोच्च न्यायालय आहे. ते संवैधानिक आणि कायदेशीर वाद सोडवते, आपल्या अधिकारक्षेत्रातून संवैधानिक अधिकारांचे संरक्षण करते आणि कायद्याचा अधिकृत अर्थ स्पष्ट करते." } },
  { id: "judicial-review", category: "judiciary", question: { en: "What is judicial review?", mr: "न्यायालयीन पुनरावलोकन म्हणजे काय?" }, answer: { en: "Judicial review is the power of courts to examine whether laws and executive actions comply with the Constitution. A measure that violates the Constitution may be invalidated to the extent of the violation.", mr: "न्यायालयीन पुनरावलोकन म्हणजे कायदे आणि कार्यकारी कृती संविधानाशी सुसंगत आहेत का हे तपासण्याचा न्यायालयांचा अधिकार. संविधानाचे उल्लंघन करणारी तरतूद उल्लंघनाच्या मर्यादेपर्यंत अवैध ठरवली जाऊ शकते." } },
  { id: "independent-judiciary", category: "judiciary", question: { en: "Why is an independent judiciary important?", mr: "स्वतंत्र न्यायव्यवस्था महत्त्वाची का आहे?" }, answer: { en: "An independent judiciary can decide disputes impartially, interpret the Constitution and protect rights without improper pressure. Judicial independence supports the rule of law and separation of powers.", mr: "स्वतंत्र न्यायव्यवस्था वादांचा निष्पक्ष निर्णय घेऊ शकते, संविधानाचा अर्थ स्पष्ट करू शकते आणि अनुचित दबावाशिवाय अधिकारांचे संरक्षण करू शकते. न्यायालयीन स्वातंत्र्य कायद्याचे राज्य आणि सत्ताविभाजनाला आधार देते." } },
  { id: "amendment-meaning", category: "amendments", question: { en: "What is a Constitutional Amendment?", mr: "संविधान दुरुस्ती म्हणजे काय?" }, answer: { en: "A Constitutional Amendment is a formal change to the text or operation of the Constitution made through the procedure prescribed by Article 368 and other applicable provisions.", mr: "संविधान दुरुस्ती म्हणजे कलम ३६८ आणि इतर लागू तरतुदींमध्ये सांगितलेल्या प्रक्रियेनुसार संविधानाच्या मजकुरात किंवा कार्यपद्धतीत केला जाणारा औपचारिक बदल." }, link: "/amendments", linkLabel: { en: "Explore Amendments", mr: "दुरुस्त्या पहा" } },
  { id: "amendment-procedure", category: "amendments", question: { en: "How is the Constitution amended?", mr: "संविधानात दुरुस्ती कशी केली जाते?" }, answer: { en: "The procedure varies according to the provision being changed. Many amendments require a special majority in Parliament, while some also require ratification by at least half of the State Legislatures.", mr: "बदलल्या जाणाऱ्या तरतुदीनुसार प्रक्रिया वेगवेगळी असते. अनेक दुरुस्त्यांसाठी संसदेत विशेष बहुमत आवश्यक असते, तर काही दुरुस्त्यांना किमान निम्म्या राज्यांच्या विधानमंडळांची मान्यता देखील आवश्यक असते." } },
  { id: "basic-structure", category: "amendments", question: { en: "What is the basic structure doctrine?", mr: "मूलभूत रचना सिद्धांत म्हणजे काय?" }, answer: { en: "The basic structure doctrine means that Parliament’s power to amend the Constitution cannot be used to destroy its basic features. The Supreme Court developed this doctrine in the Kesavananda Bharati decision.", mr: "मूलभूत रचना सिद्धांतानुसार संविधानात दुरुस्ती करण्याचा संसदेचा अधिकार संविधानाची मूलभूत वैशिष्ट्ये नष्ट करण्यासाठी वापरता येत नाही. सर्वोच्च न्यायालयाने केशवानंद भारती निकालात हा सिद्धांत विकसित केला." } },
  { id: "citizenship", category: "important", question: { en: "Where are citizenship provisions found in the Constitution?", mr: "नागरिकत्वाच्या तरतुदी संविधानाच्या कोणत्या भागात आहेत?" }, answer: { en: "Citizenship provisions are found in Part II of the Constitution, covering Articles 5 to 11. Parliament has power to make laws on citizenship subject to the constitutional framework.", mr: "नागरिकत्वाच्या तरतुदी संविधानाच्या भाग II मध्ये, कलम ५ ते ११ मध्ये आहेत. संवैधानिक चौकटीच्या अधीन राहून नागरिकत्वाबाबत कायदे करण्याचा अधिकार संसदेला आहे." } },
  { id: "emergency-types", category: "important", question: { en: "What are the constitutional types of Emergency?", mr: "संविधानातील आणीबाणीचे प्रकार कोणते?" }, answer: { en: "The Constitution provides for National Emergency under Article 352, President’s Rule in a State under Article 356 and Financial Emergency under Article 360. Each has distinct constitutional conditions and effects.", mr: "संविधानात कलम ३५२ अंतर्गत राष्ट्रीय आणीबाणी, कलम ३५६ अंतर्गत राज्यातील राष्ट्रपती राजवट आणि कलम ३६० अंतर्गत आर्थिक आणीबाणीची तरतूद आहे. प्रत्येकासाठी वेगळ्या संवैधानिक अटी आणि परिणाम आहेत." } },
  { id: "federal-system", category: "important", question: { en: "Is India a federal or unitary country?", mr: "भारत संघराज्यात्मक आहे की एकात्मक?" }, answer: { en: "India has a constitutional system with federal features, including governments at the Union and State levels, while also giving the Union important powers. It is often described as a federation with a strong Union.", mr: "भारताच्या व्यवस्थेत संघ आणि राज्य पातळीवरील सरकारांसह संघराज्यात्मक वैशिष्ट्ये आहेत, परंतु संघाला महत्त्वाचे अधिकारही दिले आहेत. म्हणून भारताचे वर्णन मजबूत संघ असलेले संघराज्य असे केले जाते." } },
  { id: "schedules", category: "important", question: { en: "What are Schedules in the Constitution?", mr: "संविधानातील अनुसूच्या म्हणजे काय?" }, answer: { en: "Schedules contain supplementary details connected with constitutional provisions, such as allocation of subjects, forms, administration of certain areas and recognised languages. They support the operation of the main constitutional text.", mr: "अनुसूच्यांमध्ये संवैधानिक तरतुदींशी संबंधित पूरक तपशील, जसे विषयांचे वाटप, नमुने, काही क्षेत्रांचे प्रशासन आणि मान्यताप्राप्त भाषा दिल्या आहेत. त्या संविधानाच्या मुख्य मजकुराच्या अंमलबजावणीला मदत करतात." } },
  { id: "rule-of-law", category: "important", question: { en: "What does the rule of law mean?", mr: "कायद्याचे राज्य म्हणजे काय?" }, answer: { en: "The rule of law means that public power must operate within the law and that everyone is subject to the law. It rejects arbitrary exercise of power and supports equality before law.", mr: "कायद्याचे राज्य म्हणजे सार्वजनिक सत्ता कायद्याच्या चौकटीत चालली पाहिजे आणि प्रत्येकजण कायद्याच्या अधीन असला पाहिजे. हे मनमानी सत्तावापराला नाकारते आणि कायद्यासमोर समानतेला आधार देते." } },
  { id: "separation-powers", category: "important", question: { en: "What is separation of powers?", mr: "सत्ताविभाजन म्हणजे काय?" }, answer: { en: "Separation of powers distributes public functions among the legislature, executive and judiciary. In India, these institutions have distinct roles with constitutional checks and interaction rather than a completely rigid separation.", mr: "सत्ताविभाजनात सार्वजनिक कार्ये विधिमंडळ, कार्यपालिका आणि न्यायपालिका यांच्यात विभागली जातात. भारतात या संस्थांची भूमिका वेगळी असली तरी त्यांच्यात संवैधानिक नियंत्रण आणि परस्परसंवाद आहे; पूर्णपणे कठोर विभाजन नाही." } }
];
function FAQ() {
  const { language, pick } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [openId, setOpenId] = useState(null);
  useEffect(() => {
    setOpenId(null);
  }, [language, category, query]);
  const visibleFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    return faqs.filter((faq) => {
      const matchesCategory = category === "all" || faq.category === category;
      const searchable = `${pick(faq.question)} ${pick(faq.answer)}`.toLocaleLowerCase(language);
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, language, pick, query]);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16", children: [
    /* @__PURE__ */ jsxs("nav", { "aria-label": language === "mr" ? "मार्गक्रमण" : "Breadcrumb", className: "mb-8 text-sm text-ink/50 dark:text-ink-dark/50", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-saffron", children: language === "mr" ? "मुख्यपृष्ठ" : "Home" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", "aria-hidden": "true", children: "→" }),
      /* @__PURE__ */ jsx("span", { lang: language, children: language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "FAQ" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: language === "mr" ? "माहिती केंद्र" : "Knowledge centre" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-3 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "Frequently Asked Questions" }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-2xl text-ink/60 dark:text-ink-dark/60", children: language === "mr" ? "भारतीय संविधानाबद्दल सामान्य आणि परीक्षाभिमुख प्रश्नांची स्पष्ट उत्तरे शोधा." : "Find clear answers to common and exam-focused questions about the Constitution of India." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 relative", children: [
      /* @__PURE__ */ jsx(Search, { size: 18, className: "pointer-events-none absolute left-4 top-3.5 text-ink/40 dark:text-ink-dark/40" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "faq-search", className: "sr-only", children: language === "mr" ? "वारंवार विचारले जाणारे प्रश्न शोधा" : "Search FAQs" }),
      /* @__PURE__ */ jsx("input", { id: "faq-search", type: "search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: language === "mr" ? "वारंवार विचारले जाणारे प्रश्न शोधा..." : "Search FAQs...", lang: language, className: "w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none dark:border-ink-dark/20 dark:bg-white/5 dark:text-ink-dark dark:placeholder:text-ink-dark/40" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap gap-2", "aria-label": language === "mr" ? "प्रश्नांच्या श्रेणी" : "FAQ categories", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCategory("all"), className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === "all" ? "border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink" : "border-navy/15 text-navy/70 dark:border-ink-dark/20 dark:text-ink-dark/70"}`, children: language === "mr" ? "सर्व प्रश्न" : "All FAQs" }),
      faqCategories.map((item) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCategory(item.key), lang: language, className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === item.key ? "border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink" : "border-navy/15 text-navy/70 dark:border-ink-dark/20 dark:text-ink-dark/70"}`, children: pick(item.title) }, item.key))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white/60 dark:divide-ink-dark/10 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: visibleFaqs.map((faq) => {
      const isOpen = openId === faq.id;
      return /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs("button", { id: `faq-question-${faq.id}`, type: "button", "aria-expanded": isOpen, "aria-controls": `faq-answer-${faq.id}`, onClick: () => setOpenId(isOpen ? null : faq.id), className: "flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-navy dark:text-ink-dark sm:px-6", children: [
          /* @__PURE__ */ jsx("span", { lang: language, children: pick(faq.question) }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `shrink-0 text-saffron transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
        ] }) }),
        /* @__PURE__ */ jsx("div", { id: `faq-answer-${faq.id}`, role: "region", "aria-labelledby": `faq-question-${faq.id}`, className: `grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "px-5 pb-5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:px-6", children: [
          " ",
          /* @__PURE__ */ jsx("p", { lang: language, children: pick(faq.answer) }),
          faq.link && /* @__PURE__ */ jsxs(Link, { to: faq.link, lang: language, className: "mt-3 inline-block text-sm font-medium text-saffron", children: [
            pick(faq.linkLabel),
            " →"
          ] })
        ] }) }) })
      ] }, faq.id);
    }) }),
    visibleFaqs.length === 0 && /* @__PURE__ */ jsx("p", { lang: language, className: "mt-12 text-center text-sm text-ink/55 dark:text-ink-dark/55", children: language === "mr" ? "कोणतेही प्रश्न सापडले नाहीत. दुसरा शब्द वापरून शोधा." : "No FAQs found. Try a different search term." })
  ] });
}
const SCHEMA_ID = "samvidhan-jsonld";
const SITE_URL = siteConfig.url.replace(/\/$/, "");
function upsertSchema(graph) {
  let script = document.head.querySelector(`#${SCHEMA_ID}`);
  if (!script) {
    script = document.createElement("script");
    script.id = SCHEMA_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  });
}
function removeSchema() {
  var _a;
  (_a = document.head.querySelector(`#${SCHEMA_ID}`)) == null ? void 0 : _a.remove();
}
function SchemaJsonLd() {
  const { pathname } = useLocation();
  const { language, pick } = useLanguage();
  useEffect(() => {
    const config = getSeoRoute(pathname);
    const article = pathname.startsWith("/article/") ? getArticleById(pathname.split("/").pop()) : null;
    if (config.indexable === false || pathname.startsWith("/article/") && !article) {
      removeSchema();
      return;
    }
    const canonical = `${SITE_URL}${pathname}`;
    const pageTitle = article ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan` : pick(config.title);
    const pageDescription = article ? pick(article.simpleExplanation) : pick(config.description);
    const pageId = `${canonical}#webpage`;
    const breadcrumbId = `${canonical}#breadcrumb`;
    const articleId = article ? `${canonical}#article` : null;
    const faqPageId = `${canonical}#faq`;
    const organizationDescription = language === "mr" ? "भारतीय संविधान समजून घेणे सोपे करणारे स्वतंत्र शैक्षणिक आणि माहितीपर व्यासपीठ." : "An independent educational and informational platform that makes the Constitution of India easy to understand.";
    const graph = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        description: organizationDescription
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: siteConfig.name,
        url: SITE_URL,
        description: organizationDescription,
        publisher: {
          "@id": `${SITE_URL}#organization`
        },
        inLanguage: language,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/articles?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          "@id": `${SITE_URL}#website`
        },
        about: {
          "@id": `${SITE_URL}#organization`
        },
        breadcrumb: {
          "@id": breadcrumbId
        },
        inLanguage: language,
        ...article ? {
          mainEntity: {
            "@id": articleId
          }
        } : {},
        ...pathname === "/faq" ? {
          mainEntity: {
            "@id": faqPageId
          }
        } : {}
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: article ? [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "mr" ? "मुख्यपृष्ठ" : "Home",
            item: SITE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: language === "mr" ? "सर्व कलमे" : "Articles",
            item: `${SITE_URL}/articles`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pick(article.title),
            item: canonical
          }
        ] : [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "mr" ? "मुख्यपृष्ठ" : "Home",
            item: SITE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pathname === "/faq" ? language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "FAQ" : pageTitle,
            item: canonical
          }
        ]
      }
    ];
    if (article) {
      const relatedArticles = getRelatedArticles(article, 6);
      const articleSchema = {
        "@type": "Article",
        "@id": articleId,
        headline: pick(article.title),
        description: pageDescription,
        mainEntityOfPage: {
          "@id": pageId
        },
        url: canonical,
        inLanguage: language,
        isPartOf: {
          "@id": `${SITE_URL}#website`
        },
        publisher: {
          "@id": `${SITE_URL}#organization`
        },
        ...article.articleNumber ? {
          articleSection: article.articleNumber
        } : {},
        ...article.categoryKey ? {
          keywords: [
            article.articleNumber,
            article.categoryKey,
            "Indian Constitution",
            "भारतीय संविधान"
          ].filter(Boolean).join(", ")
        } : {},
        ...article.lastVerified ? {
          dateModified: article.lastVerified
        } : {},
        ...relatedArticles.length ? {
          isBasedOn: relatedArticles.map(
            (relatedArticle) => `${SITE_URL}/article/${relatedArticle.id}`
          )
        } : {}
      };
      graph.push(articleSchema);
    }
    if (pathname === "/faq") {
      graph.push({
        "@type": "FAQPage",
        "@id": faqPageId,
        url: canonical,
        name: pageTitle,
        inLanguage: language,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: pick(faq.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: pick(faq.answer)
          }
        }))
      });
    }
    upsertSchema(graph);
  }, [pathname, language, pick]);
  return null;
}
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-paper",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(PageMeta, {}),
    /* @__PURE__ */ jsx(SchemaJsonLd, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { id: "main-content", className: "flex-1", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/articles", element: /* @__PURE__ */ jsx(Articles, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/article/:id", element: /* @__PURE__ */ jsx(ArticleDetails, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/fundamental-rights", element: /* @__PURE__ */ jsx(FundamentalRights, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/fundamental-duties", element: /* @__PURE__ */ jsx(FundamentalDuties, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/directive-principles", element: /* @__PURE__ */ jsx(DirectivePrinciples, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/amendments", element: /* @__PURE__ */ jsx(Amendments, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/quiz", element: /* @__PURE__ */ jsx(Quiz, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/bookmarks", element: /* @__PURE__ */ jsx(Bookmarks, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(Privacy, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(Privacy, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(Terms, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/disclaimer", element: /* @__PURE__ */ jsx(Disclaimer, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQ, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/premium", element: /* @__PURE__ */ jsx(Premium, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/exam-preparation", element: /* @__PURE__ */ jsx(ExamPreparation, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/premium-quiz", element: /* @__PURE__ */ jsx(PremiumQuiz, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/notes", element: /* @__PURE__ */ jsx(Notes, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/dashboard", element: /* @__PURE__ */ jsx(Dashboard, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/progress", element: /* @__PURE__ */ jsx(Progress, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/learn", element: /* @__PURE__ */ jsx(Learn, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(BookmarkProvider, { children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(App, {}) }) }) }) }) }) })
  );
}
export {
  render
};
