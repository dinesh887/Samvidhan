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
    nav_current_affairs: "Current Affairs",
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
    current_affairs_read_more: "Read More",
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
    nav_current_affairs: "चालू घडामोडी",
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
    current_affairs_read_more: "अधिक वाचा",
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
    { to: "/current-affairs", label: t("nav_current_affairs") },
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
    title: {
      en: "Right to Equality",
      mr: "समानतेचा अधिकार"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
      mr: "राज्य भारताच्या राज्यक्षेत्रात कोणत्याही व्यक्तीस कायद्यासमोर समानता किंवा कायद्यांचे समान संरक्षण नाकारू शकणार नाही.",
      verified: true
    },
    simpleExplanation: {
      en: `Article 14 is one of the Fundamental Rights guaranteed by the Constitution of India. It provides that the State shall not deny any person equality before the law or equal protection of the laws within the territory of India.

The provision applies to every person, not only to citizens. This is important because the wording of Article 14 uses the expression "any person". It therefore protects individuals within the territory of India against unequal treatment by the State in matters covered by the constitutional guarantee.

Article 14 contains two closely connected ideas: equality before the law and equal protection of the laws. Equality before the law reflects the principle that no person is above the law and that the law should not arbitrarily give one person a superior legal status over another. Equal protection of the laws focuses on providing equal legal protection to people who are similarly situated.

Article 14 does not mean that every person must always be treated identically in every situation. Constitutional law can permit reasonable distinctions when there is a valid basis for treating different groups differently. The important question is whether the classification or distinction has a constitutionally acceptable basis and is connected with the purpose of the law.

For this reason, Article 14 is not simply a rule saying "everyone must receive exactly the same treatment". It is a broader constitutional guarantee against arbitrary State action and unjustified unequal treatment.`,
      mr: `कलम 14 हे भारतीय संविधानातील मूलभूत अधिकारांपैकी एक महत्त्वाचे कलम आहे. भारताच्या राज्यक्षेत्रात कोणत्याही व्यक्तीस कायद्यासमोर समानता किंवा कायद्यांचे समान संरक्षण नाकारले जाऊ नये, अशी घटनात्मक हमी या कलमातून दिली आहे.

या कलमात "any person" म्हणजेच "कोणतीही व्यक्ती" असा उल्लेख असल्यामुळे कलम 14 चे संरक्षण केवळ भारतीय नागरिकांपुरते मर्यादित नाही. भारताच्या राज्यक्षेत्रात असलेल्या व्यक्तींशी राज्याकडून होणाऱ्या वागणुकीच्या संदर्भात या घटनात्मक हमीचे महत्त्व आहे.

कलम 14 मध्ये दोन महत्त्वाच्या संकल्पना आहेत—कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण. कायद्यासमोर समानता या तत्त्वाचा अर्थ असा की कोणतीही व्यक्ती कायद्यापेक्षा वरचढ नसावी आणि कोणालाही मनमानी पद्धतीने विशेष कायदेशीर दर्जा दिला जाऊ नये. कायद्यांचे समान संरक्षण म्हणजे समान परिस्थितीत असलेल्या व्यक्तींना कायद्याचे समान संरक्षण मिळणे.

कलम 14 चा अर्थ प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी तंतोतंत समान वागणूक दिलीच पाहिजे असा नाही. संविधान काही परिस्थितीत वैध आणि तर्कसंगत वर्गीकरणाला परवानगी देते. मात्र अशा वर्गीकरणाला घटनात्मक आधार असणे आणि कायद्याच्या उद्देशाशी त्याचा योग्य संबंध असणे आवश्यक असते.

म्हणूनच कलम 14 हे केवळ "सर्वांना सारखे वागवा" एवढे साधे तत्त्व नाही. राज्याच्या मनमानी कृतीपासून आणि योग्य घटनात्मक आधार नसलेल्या असमान वागणुकीपासून संरक्षण देणारी ही व्यापक घटनात्मक हमी आहे.`
    },
    verySimple: {
      en: `Article 14 means that every person is entitled to equality before the law and equal protection of the laws. The State cannot make arbitrary or unjustified distinctions between people.`,
      mr: `कलम 14 म्हणजे प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण मिळण्याची घटनात्मक हमी. राज्याला मनमानी किंवा योग्य आधार नसलेला भेद करता येत नाही.`
    },
    example: {
      en: `Suppose a government authority has to provide a public benefit to people who satisfy the same eligibility conditions. If the authority gives the benefit to one person but denies it to another person who is in the same relevant circumstances, without a valid legal or constitutional reason, Article 14 may become relevant.

Consider another example. A law may create different rules for two groups of people. The mere fact that the groups are treated differently does not automatically mean that Article 14 has been violated. The distinction may be constitutionally permissible if there is a valid basis for the classification and the distinction has a rational connection with the purpose of the law.

For example, laws may sometimes prescribe different rules for children and adults because their circumstances and legal needs are different. The constitutional question is not simply whether the treatment is identical, but whether the distinction has a legitimate and constitutionally acceptable basis.

These examples are intended to explain the basic concept of Article 14 and should not be treated as a legal conclusion about any particular real-life case.`,
      mr: `समजा एखाद्या सरकारी योजनेचा लाभ मिळण्यासाठी दोन व्यक्ती समान पात्रता पूर्ण करतात. तरीही संबंधित प्राधिकरणाने कोणतेही वैध कायदेशीर किंवा घटनात्मक कारण नसताना एका व्यक्तीला लाभ दिला आणि दुसऱ्या समान परिस्थितीतील व्यक्तीला लाभ नाकारला, तर अशा वागणुकीच्या संदर्भात कलम 14 चा प्रश्न निर्माण होऊ शकतो.

दुसरे उदाहरण पाहूया. एखाद्या कायद्यात दोन वेगवेगळ्या गटांसाठी वेगवेगळे नियम केले असतील, तर केवळ वेगळी वागणूक आहे म्हणून कलम 14 चे उल्लंघन झाले असे आपोआप म्हणता येत नाही. जर त्या वर्गीकरणाला वैध आधार असेल आणि त्याचा कायद्याच्या उद्देशाशी तर्कसंगत संबंध असेल, तर असे वर्गीकरण घटनात्मकदृष्ट्या मान्य असू शकते.

उदाहरणार्थ, मुले आणि प्रौढ यांच्या परिस्थिती आणि कायदेशीर गरजा वेगळ्या असल्यामुळे काही कायद्यांमध्ये त्यांच्यासाठी वेगवेगळ्या तरतुदी असू शकतात. त्यामुळे कलम 14 समजताना प्रत्येकाला प्रत्येक परिस्थितीत अगदी समान वागणूक मिळते का, एवढेच पाहिले जात नाही; त्या फरकाला घटनात्मकदृष्ट्या योग्य आधार आहे का, हेही महत्त्वाचे असते.

ही उदाहरणे कलम 14 ची मूलभूत संकल्पना समजावण्यासाठी आहेत. एखाद्या विशिष्ट प्रकरणाबाबत कायदेशीर निष्कर्ष म्हणून त्यांचा वापर करू नये.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 14 of the Indian Constitution?",
          content: `Article 14 is a Fundamental Right that guarantees equality before the law and equal protection of the laws to every person within the territory of India. It is part of the Right to Equality under Part III of the Constitution.

The provision is important because it places a constitutional requirement on the State to avoid arbitrary and unjustified unequal treatment. Its protection extends to every person within the territory of India, subject to the constitutional framework.`
        },
        {
          heading: "What does equality before law mean?",
          content: `Equality before law is one of the two expressions used in Article 14. In simple terms, it reflects the principle that people are subject to the law and that no person should receive an arbitrary superior legal position merely because of status or identity.

The principle is connected with the idea that the legal system should operate according to law rather than personal privilege. It does not mean that every person must receive identical treatment in every circumstance.`
        },
        {
          heading: "What is equal protection of laws?",
          content: `Equal protection of laws is the second important expression in Article 14. It focuses on the application of legal protection to people who are similarly situated.

This principle recognizes that people in materially different circumstances may sometimes require different legal treatment. The constitutional concern is whether the distinction has a valid basis and whether the different treatment is connected with the purpose of the law.`
        },
        {
          heading: "Does Article 14 apply to all persons or only citizens?",
          content: `Article 14 uses the expression "any person". Therefore, unlike some Fundamental Rights that are specifically expressed in terms of citizens, Article 14 is framed as a guarantee to every person within the territory of India.

This distinction is useful when studying the Fundamental Rights because the Constitution does not use identical language for every right. The exact wording of each Article determines its scope.`
        },
        {
          heading: "Does Article 14 mean everyone must be treated exactly the same?",
          content: `No. Article 14 does not require identical treatment in every situation. Constitutional equality can permit reasonable classification where people or circumstances are genuinely different.

For example, legislation may distinguish between categories of people when the distinction has a valid basis and is connected to the objective of the law. The existence of a classification by itself is therefore not enough to establish a violation of Article 14.`
        },
        {
          heading: "Article 14 and reasonable classification",
          content: `The concept of reasonable classification is important when studying Article 14. A classification separates people or situations into groups for the purpose of applying different legal rules.

For a classification to be constitutionally sustainable, the distinction must have a rational basis and must be related to the objective sought to be achieved by the law. The exact application of these principles depends on the facts and legal context of a case.`
        },
        {
          heading: "Article 14 and arbitrary State action",
          content: `Article 14 is also important in the constitutional examination of arbitrary State action. Government authorities exercise powers under the Constitution and laws, and those powers cannot be treated as unlimited simply because they are exercised by a public authority.

Where State action creates unequal treatment without an adequate constitutional or legal basis, Article 14 may become relevant. Whether a particular action is constitutionally valid depends on the applicable law and the facts of the individual matter.`
        },
        {
          heading: "Article 14 and the Right to Equality",
          content: `Article 14 is the first provision in the constitutional group commonly described as the Right to Equality. Articles 15, 16, 17 and 18 contain additional constitutional protections and principles relating to equality and discrimination.

Studying these provisions together helps explain the broader constitutional approach to equality. Article 14 provides the general constitutional guarantee of equality before law and equal protection of laws, while the following Articles address more specific situations.`
        },
        {
          heading: "Article 14 and Articles 15 and 16",
          content: `Article 14, Article 15 and Article 16 are closely connected but they address different constitutional situations.

Article 14 provides equality before law and equal protection of laws to every person. Article 15 specifically deals with discrimination against citizens on certain specified grounds. Article 16 deals with equality of opportunity for citizens in matters relating to employment or appointment to offices under the State.

Understanding these differences helps avoid treating all equality-related provisions as if they had exactly the same scope.`
        },
        {
          heading: "Why is Article 14 important?",
          content: `Article 14 is important because equality is a foundational principle of the constitutional system. It provides a standard against which certain forms of unequal treatment by the State can be examined.

The provision is relevant to constitutional studies because it combines the ideas of equality before law and equal protection of laws. It also provides an important framework for understanding why constitutionally valid distinctions can sometimes exist while arbitrary discrimination cannot simply be justified by making a distinction.`
        },
        {
          heading: "Common misunderstandings about Article 14",
          content: `One common misunderstanding is that Article 14 requires identical treatment for every person in every situation. The constitutional concept of equality allows distinctions where they are based on constitutionally acceptable grounds.

Another misunderstanding is that Article 14 applies only to Indian citizens. The text uses the expression "any person", making the provision broader in wording than rights that are expressly limited to citizens.

A third misunderstanding is that any difference in treatment automatically violates Article 14. The legal analysis generally requires examination of the nature of the classification, its basis, its purpose and the constitutional context.`
        },
        {
          heading: "Why should students study Article 14?",
          content: `Article 14 is an important topic for students studying the Indian Constitution, Fundamental Rights, law and competitive examinations.

It provides the foundation for understanding constitutional equality and helps students distinguish between equality before law, equal protection of laws, reasonable classification and arbitrary State action.

For exams such as UPSC, MPSC, Police Bharti and other competitive examinations, learning the exact constitutional wording together with its basic meaning and related Articles provides a stronger conceptual understanding than memorizing a one-line definition.`
        },
        {
          heading: "Key points to remember about Article 14",
          content: `Article 14 guarantees equality before the law and equal protection of the laws.

It applies to every person within the territory of India.

The Article contains two closely connected concepts: equality before law and equal protection of laws.

Article 14 does not require identical treatment in every situation.

Constitutionally permissible classification may allow different treatment where there is a valid basis connected with the purpose of the law.

Articles 15 and 16 provide more specific equality-related protections and should be studied alongside Article 14.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 14 म्हणजे काय?",
          content: `कलम 14 हे भारतीय संविधानातील मूलभूत अधिकारांपैकी एक महत्त्वाचे कलम आहे. भारताच्या राज्यक्षेत्रात प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण मिळावे, अशी घटनात्मक हमी या कलमातून दिली आहे.

कलम 14 हे संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा महत्त्वाचा आधार आहे. राज्याकडून होणाऱ्या मनमानी किंवा योग्य घटनात्मक आधार नसलेल्या असमान वागणुकीच्या संदर्भात या कलमाचे विशेष महत्त्व आहे.`
        },
        {
          heading: "कायद्यासमोर समानता म्हणजे काय?",
          content: `कायद्यासमोर समानता ही कलम 14 मधील दोन प्रमुख संकल्पनांपैकी एक आहे. सोप्या भाषेत, कोणतीही व्यक्ती कायद्यापेक्षा वरचढ नसावी आणि केवळ सामाजिक किंवा इतर दर्जामुळे एखाद्याला मनमानी पद्धतीने विशेष कायदेशीर स्थान मिळू नये, हा या तत्त्वाचा मूलभूत अर्थ आहे.

याचा अर्थ प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी समान वागणूक दिलीच पाहिजे असा नाही. समानतेचा घटनात्मक अर्थ परिस्थितीनुसार अधिक व्यापक आहे.`
        },
        {
          heading: "कायद्यांचे समान संरक्षण म्हणजे काय?",
          content: `कायद्यांचे समान संरक्षण म्हणजे समान परिस्थितीत असलेल्या व्यक्तींना कायद्याचे समान संरक्षण मिळणे. राज्याने कायदा लागू करताना समान स्वरूपाच्या परिस्थितींमध्ये अनावश्यक किंवा मनमानी फरक करू नये, हा यामागील महत्त्वाचा विचार आहे.

मात्र परिस्थिती खरोखरच वेगळी असल्यास संविधान काही वैध वर्गीकरणांना परवानगी देऊ शकते. त्यामुळे समान संरक्षण समजताना व्यक्तींच्या परिस्थितीचा आणि कायद्याच्या उद्देशाचा संदर्भ महत्त्वाचा ठरतो.`
        },
        {
          heading: "कलम 14 सर्व व्यक्तींना लागू होते का?",
          content: `होय. कलम 14 मध्ये "any person" म्हणजेच "कोणतीही व्यक्ती" असा शब्दप्रयोग आहे. त्यामुळे हे कलम केवळ भारतीय नागरिकांपुरते मर्यादित नसून भारताच्या राज्यक्षेत्रातील प्रत्येक व्यक्तीच्या संदर्भात घटनात्मक हमी देते.

मूलभूत अधिकारांचा अभ्यास करताना हा फरक महत्त्वाचा आहे, कारण संविधानातील सर्व अधिकारांसाठी समान शब्दरचना वापरलेली नाही.`
        },
        {
          heading: "कलम 14 म्हणजे सर्वांना अगदी सारखी वागणूक देणे का?",
          content: `नाही. कलम 14 चा अर्थ प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी एकसारखी वागणूक मिळाली पाहिजे असा नाही.

काही परिस्थितीत व्यक्ती किंवा गट यांच्यातील वास्तविक फरक लक्षात घेऊन कायद्यात वेगवेगळ्या तरतुदी असू शकतात. मात्र अशा फरकाला वैध आधार असणे आणि त्या वर्गीकरणाचा कायद्याच्या उद्देशाशी योग्य संबंध असणे महत्त्वाचे आहे.

त्यामुळे "वेगळी वागणूक" आणि "घटनाबाह्य भेदभाव" या दोन गोष्टी नेहमी समान नसतात.`
        },
        {
          heading: "कलम 14 आणि वाजवी वर्गीकरण",
          content: `कलम 14 समजताना वाजवी वर्गीकरण ही संकल्पना महत्त्वाची आहे. एखाद्या कायद्याच्या उद्देशाने लोक किंवा परिस्थिती यांचे वेगवेगळे वर्ग तयार केले जाऊ शकतात.

अशा वर्गीकरणामागे वैध आणि तर्कसंगत आधार असणे तसेच त्या वर्गीकरणाचा कायद्याने साध्य करायच्या उद्देशाशी संबंध असणे आवश्यक असते. एखाद्या विशिष्ट प्रकरणात वर्गीकरण घटनात्मकदृष्ट्या योग्य आहे का, हे त्या प्रकरणातील तथ्ये आणि लागू कायद्यावर अवलंबून असते.`
        },
        {
          heading: "कलम 14 आणि राज्याची मनमानी कृती",
          content: `राज्य किंवा सरकारी प्राधिकरणाला संविधान आणि कायद्याच्या चौकटीत काम करावे लागते. केवळ एखादी कृती सरकारी प्राधिकरणाने केली आहे म्हणून ती कोणत्याही घटनात्मक तपासणीच्या पलीकडे जात नाही.

जर राज्याची कृती योग्य घटनात्मक किंवा कायदेशीर आधाराशिवाय व्यक्तींमध्ये असमान वागणूक निर्माण करत असेल, तर कलम 14 चा प्रश्न उपस्थित होऊ शकतो. मात्र एखादी विशिष्ट कृती घटनात्मकदृष्ट्या वैध आहे का, हे संबंधित तथ्ये आणि कायदेशीर चौकटीच्या आधारे ठरवावे लागते.`
        },
        {
          heading: "कलम 14 आणि समानतेचा अधिकार",
          content: `कलम 14 हे संविधानातील समानतेशी संबंधित मूलभूत अधिकारांच्या सुरुवातीच्या तरतुदींपैकी एक आहे. त्यानंतर कलम 15, 16, 17 आणि 18 मध्ये समानता, भेदभाव आणि सामाजिक विशेषाधिकारांशी संबंधित अधिक विशिष्ट घटनात्मक तरतुदी आहेत.

या सर्व कलमांचा एकत्र अभ्यास केल्यास संविधानातील समानतेची व्यापक रचना अधिक स्पष्टपणे समजते.`
        },
        {
          heading: "कलम 14, 15 आणि 16 मधील फरक",
          content: `कलम 14, 15 आणि 16 हे समानतेशी संबंधित असले तरी त्यांचा विषय आणि घटनात्मक आवाका समान नाही.

कलम 14 प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देते. कलम 15 नागरिकांविरुद्ध विशिष्ट आधारांवर होणाऱ्या भेदभावाशी संबंधित आहे. कलम 16 राज्याच्या अंतर्गत नोकरी किंवा नियुक्तीमध्ये नागरिकांना समान संधी देण्याशी संबंधित आहे.

त्यामुळे समानतेशी संबंधित सर्व कलमे एकाच अर्थाने लागू होतात असे समजणे योग्य नाही.`
        },
        {
          heading: "कलम 14 महत्त्वाचे का आहे?",
          content: `समानता हा भारतीय संविधानाच्या मूलभूत तत्त्वांपैकी एक आहे. राज्याकडून होणाऱ्या विशिष्ट प्रकारच्या असमान वागणुकीचे घटनात्मक परीक्षण करण्यासाठी कलम 14 महत्त्वाची चौकट देते.

कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण या दोन संकल्पना समजून घेण्यासाठी हे कलम विशेष महत्त्वाचे आहे. तसेच वैध वर्गीकरण आणि मनमानी भेदभाव यातील फरक समजण्यासही ते मदत करते.`
        },
        {
          heading: "कलम 14 बाबत सामान्य गैरसमज",
          content: `एक सामान्य गैरसमज असा आहे की कलम 14 मुळे प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी समान वागणूक मिळाली पाहिजे. प्रत्यक्षात घटनात्मक समानता काही वैध वर्गीकरणांना परवानगी देते.

दुसरा गैरसमज असा आहे की कलम 14 केवळ भारतीय नागरिकांसाठी आहे. मात्र कलमाच्या शब्दरचनेत "any person" असा उल्लेख असल्यामुळे त्याचा आवाका अधिक व्यापक आहे.

तिसरा गैरसमज असा आहे की कोणतीही वेगळी वागणूक म्हणजे कलम 14 चे उल्लंघन. प्रत्यक्ष घटनात्मक विश्लेषणात त्या वर्गीकरणाचा आधार, उद्देश आणि त्यांच्यातील संबंध यांचा विचार केला जातो.`
        },
        {
          heading: "विद्यार्थ्यांनी कलम 14 का अभ्यासावे?",
          content: `भारतीय संविधान, मूलभूत अधिकार, कायदा आणि स्पर्धा परीक्षांचा अभ्यास करणाऱ्या विद्यार्थ्यांसाठी कलम 14 हा महत्त्वाचा विषय आहे.

या कलमामुळे घटनात्मक समानता, कायद्यासमोर समानता, कायद्यांचे समान संरक्षण, वाजवी वर्गीकरण आणि राज्याची मनमानी कृती यांसारख्या संकल्पना समजून घेण्याचा आधार मिळतो.

UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी केवळ एक ओळ पाठ करण्याऐवजी कलमाचा अचूक मजकूर, त्याचा साधा अर्थ आणि संबंधित कलमांशी असलेला संबंध समजून घेणे अधिक उपयुक्त ठरते.`
        },
        {
          heading: "कलम 14 चे महत्त्वाचे मुद्दे",
          content: `कलम 14 प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देण्याची घटनात्मक हमी देते.

हे कलम भारताच्या राज्यक्षेत्रातील प्रत्येक व्यक्तीच्या संदर्भात लागू होते.

कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण या दोन महत्त्वाच्या संकल्पना कलम 14 मध्ये आहेत.

कलम 14 चा अर्थ प्रत्येक परिस्थितीत सर्वांना तंतोतंत समान वागणूक देणे असा नाही.

वैध आधार आणि कायद्याच्या उद्देशाशी तर्कसंगत संबंध असलेल्या काही वर्गीकरणांना घटनात्मक चौकटीत मान्यता मिळू शकते.

कलम 15 आणि 16 ही समानतेशी संबंधित अधिक विशिष्ट घटनात्मक तरतुदी आहेत आणि त्यांचा कलम 14 सोबत अभ्यास करणे उपयुक्त ठरते.`
        }
      ]
    },
    keywords: [
      "Article 14",
      "Article 14 of Indian Constitution",
      "Article 14 Indian Constitution",
      "Article 14 explained",
      "What is Article 14",
      "Article 14 right to equality",
      "Right to Equality",
      "equality before law",
      "equal protection of laws",
      "Article 14 in simple words",
      "Article 14 reasonable classification",
      "Article 14 arbitrary action",
      "Article 14 Fundamental Rights",
      "Article 14 and Article 15",
      "Article 14 and Article 16",
      "art 14",
      "14 article",
      "कलम 14",
      "कलम 14 भारतीय संविधान",
      "कलम 14 मराठीत",
      "कलम 14 म्हणजे काय",
      "समानतेचा अधिकार",
      "कायद्यासमोर समानता",
      "कायद्यांचे समान संरक्षण",
      "वाजवी वर्गीकरण"
    ],
    relatedIds: ["15", "16", "17", "18", "19", "21"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "18",
    articleNumber: "Article 18",
    title: {
      en: "Abolition of Titles",
      mr: "पदव्या रद्द करणे"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Abolition of titles.—(1) No title, not being a military or academic distinction, shall be conferred by the State. (2) No citizen of India shall accept any title from any foreign State. (3) No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State. (4) No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.",
      mr: "पदव्या रद्द करणे.—(1) लष्करी किंवा शैक्षणिक सन्मान वगळता, राज्य कोणतीही पदवी प्रदान करणार नाही. (2) भारताचा कोणताही नागरिक कोणत्याही परकीय राज्याकडून कोणतीही पदवी स्वीकारणार नाही. (3) भारताचा नागरिक नसलेली कोणतीही व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे कोणतेही पद धारण करत असताना, राष्ट्रपतींच्या संमतीशिवाय कोणत्याही परकीय राज्याकडून कोणतीही पदवी स्वीकारणार नाही. (4) राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे कोणतेही पद धारण करणारी कोणतीही व्यक्ती, राष्ट्रपतींच्या संमतीशिवाय, कोणत्याही परकीय राज्याकडून किंवा त्याच्या अधीन कोणतीही भेट, मानधन किंवा कोणत्याही प्रकारचे पद स्वीकारणार नाही.",
      verified: true
    },
    simpleExplanation: {
      en: `Article 18 deals with the abolition of titles and forms part of the Right to Equality under Part III of the Constitution. Its basic purpose is to prevent the State from creating a system of official titles that could create artificial social distinctions or hereditary-style honours among citizens.

The Article does not prohibit every form of honour or recognition. It specifically allows military and academic distinctions. For example, academic qualifications and distinctions associated with education are not prohibited by Article 18, and military distinctions are also expressly excluded from the prohibition.

Article 18 also places restrictions on accepting titles and certain benefits from foreign States. Indian citizens cannot accept a title from a foreign State. In the case of a person who is not an Indian citizen and holds an office of profit or trust under the State, acceptance of a foreign title requires the President's consent. Similarly, a person holding an office of profit or trust under the State requires the President's consent to accept certain presents, emoluments or offices from or under a foreign State.

Therefore, Article 18 is concerned with maintaining equality in the constitutional system and preventing official titles or foreign honours from creating a separate class of privileged citizens.`,
      mr: `कलम 18 हे समानतेच्या अधिकाराचा भाग असून ते संविधानाच्या भाग III मध्ये समाविष्ट आहे. राज्याकडून अशा अधिकृत पदव्या देण्यास प्रतिबंध करणे हा त्याचा मुख्य उद्देश आहे, ज्यामुळे नागरिकांमध्ये कृत्रिम सामाजिक भेद किंवा विशेष दर्जाची व्यवस्था निर्माण होऊ शकते.

कलम 18 प्रत्येक प्रकारच्या सन्मानाला प्रतिबंध करत नाही. लष्करी आणि शैक्षणिक सन्मानांना या कलमातून स्पष्टपणे अपवाद देण्यात आला आहे. त्यामुळे शैक्षणिक पात्रता किंवा शैक्षणिक क्षेत्रातील सन्मान आणि लष्करी सन्मान यांना कलम 18 मधील पदव्यांवरील बंदी लागू होत नाही.

या कलमात परकीय राज्यांकडून पदवी किंवा काही प्रकारचे लाभ स्वीकारण्याबाबतही तरतुदी आहेत. भारताचा नागरिक कोणत्याही परकीय राज्याकडून पदवी स्वीकारू शकत नाही. भारताचा नागरिक नसलेली व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करत असल्यास, परकीय राज्याकडून पदवी स्वीकारण्यासाठी राष्ट्रपतींची संमती आवश्यक आहे. त्याचप्रमाणे राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला परकीय राज्याकडून किंवा त्याच्या अधीन काही भेट, मानधन किंवा पद स्वीकारण्यासाठी राष्ट्रपतींची संमती आवश्यक आहे.

म्हणूनच कलम 18 चे महत्त्व समानतेच्या घटनात्मक तत्त्वाशी जोडलेले आहे. अधिकृत पदव्या किंवा परकीय सन्मानांच्या माध्यमातून समाजात विशेषाधिकार असलेला स्वतंत्र वर्ग निर्माण होऊ नये, यासाठी या कलमात मर्यादा घालण्यात आल्या आहेत.`
    },
    verySimple: {
      en: "Article 18 prevents the State from conferring titles, except military and academic distinctions. It also restricts Indian citizens from accepting titles from foreign States and places certain conditions on people holding offices under the State who receive honours or benefits from foreign States.",
      mr: "कलम 18 नुसार राज्य लष्करी आणि शैक्षणिक सन्मान वगळता कोणत्याही पदव्या देऊ शकत नाही. तसेच भारताच्या नागरिकांना परकीय राज्यांकडून पदव्या स्वीकारण्यास मनाई आहे आणि राज्याच्या अधीन पद धारण करणाऱ्या व्यक्तींवर परकीय राज्यांकडून मिळणाऱ्या काही सन्मान किंवा लाभांबाबत मर्यादा आहेत."
    },
    example: {
      en: `Suppose the State creates an official title and begins attaching that title to certain citizens as a permanent mark of social status. Article 18 prevents the State from establishing such titles, unless the distinction falls within the constitutional exceptions for military or academic distinctions.

For another example, imagine an Indian citizen is offered an official title by a foreign State. Article 18 expressly says that an Indian citizen cannot accept such a title.

A separate situation applies to a person holding an office of profit or trust under the State. If that person is offered a present, emolument or office by or under a foreign State, the Constitution requires the President's consent before it can be accepted, subject to the terms of Article 18.`,
      mr: `समजा राज्य एखाद्या व्यक्तीला कायमस्वरूपी सामाजिक दर्जा दर्शवणारी अधिकृत पदवी देण्याची व्यवस्था तयार करते. अशा प्रकारची पदवी कलम 18 च्या तरतुदींशी विसंगत ठरू शकते. मात्र लष्करी किंवा शैक्षणिक सन्मानांना या कलमात स्पष्ट अपवाद आहे.

दुसरे उदाहरण घेऊया. एखाद्या भारतीय नागरिकाला परकीय राज्याकडून अधिकृत पदवी देण्याची ऑफर मिळाली, तर कलम 18 नुसार भारतीय नागरिकाला अशी पदवी स्वीकारता येत नाही.

तसेच राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला परकीय राज्याकडून भेट, मानधन किंवा पद देण्याची ऑफर मिळाल्यास, संविधानातील तरतुदीनुसार राष्ट्रपतींची संमती आवश्यक ठरू शकते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 18 of the Indian Constitution?",
          content: "Article 18 is a provision under the Right to Equality in Part III of the Indian Constitution. It deals with the abolition of titles and prevents the State from conferring titles, except for military and academic distinctions. The Article also regulates the acceptance of titles and certain benefits from foreign States."
        },
        {
          heading: "Why was Article 18 included in the Constitution?",
          content: "Article 18 reflects the constitutional principle that citizens should not be divided into officially recognised classes through State-created titles. The provision was designed to discourage systems of official distinction that could create artificial social hierarchies and special status based on titles."
        },
        {
          heading: "What does abolition of titles mean?",
          content: "Abolition of titles means that the State cannot confer titles as official markers of social rank, subject to the exceptions expressly recognised by the Constitution. Article 18 therefore addresses State-created titles rather than every form of achievement, recognition or professional qualification."
        },
        {
          heading: "Are academic distinctions prohibited under Article 18?",
          content: "No. Article 18 expressly excludes academic distinctions from its prohibition. Academic qualifications and recognised distinctions connected with education are therefore not treated as prohibited titles under this provision."
        },
        {
          heading: "Are military distinctions prohibited under Article 18?",
          content: "No. Military distinctions are also expressly excluded from the prohibition contained in Article 18. This means that the constitutional restriction on titles does not prevent the State from recognising military service through appropriate military distinctions."
        },
        {
          heading: "Can an Indian citizen accept a title from a foreign State?",
          content: "Article 18(2) provides that no citizen of India shall accept any title from any foreign State. This is a constitutional restriction specifically directed at foreign titles and is separate from the exceptions for military and academic distinctions recognised under Article 18(1)."
        },
        {
          heading: "What does Article 18 say about non-citizens?",
          content: "Article 18(3) deals with a person who is not an Indian citizen and who holds an office of profit or trust under the State. Such a person cannot accept a title from a foreign State without the consent of the President."
        },
        {
          heading: "What are the rules regarding foreign presents and offices?",
          content: "Article 18(4) states that a person holding an office of profit or trust under the State cannot, without the consent of the President, accept any present, emolument or office of any kind from or under a foreign State. This provision addresses potential constitutional concerns connected with foreign benefits or positions."
        },
        {
          heading: "Is every award or honour prohibited by Article 18?",
          content: "Article 18 should not be understood as a general prohibition on every award, recognition or honour. The constitutional text specifically prohibits titles while expressly preserving military and academic distinctions. The nature and legal character of a particular recognition therefore matter when considering Article 18."
        },
        {
          heading: "How is Article 18 connected with the Right to Equality?",
          content: "Article 18 is included within the constitutional provisions dealing with the Right to Equality. Its restrictions on State-conferred titles support the broader constitutional approach of avoiding officially created distinctions that could place some citizens in a separate class based merely on titles."
        },
        {
          heading: "What is the difference between a title and an academic qualification?",
          content: "A title under Article 18 refers to the kind of distinction that the State is constitutionally restricted from conferring, subject to the stated exceptions. An academic qualification or distinction is expressly excluded from this prohibition. Therefore, educational degrees and academic distinctions should not automatically be treated as prohibited titles."
        },
        {
          heading: "Why is Article 18 important?",
          content: "Article 18 is important because it establishes constitutional limits on official titles and regulates the acceptance of certain foreign honours and benefits by persons connected with State offices. It forms part of the constitutional framework supporting equality and preventing officially created title-based distinctions among citizens."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 18 म्हणजे काय?",
          content: "कलम 18 हे संविधानाच्या भाग III मधील समानतेच्या अधिकाराशी संबंधित आहे. या कलमानुसार राज्याला लष्करी किंवा शैक्षणिक सन्मान वगळता पदव्या प्रदान करण्यास मनाई आहे. तसेच परकीय राज्यांकडून पदव्या आणि काही प्रकारचे लाभ स्वीकारण्याबाबतही या कलमात नियम आहेत."
        },
        {
          heading: "कलम 18 संविधानात का समाविष्ट करण्यात आले?",
          content: "राज्याच्या माध्यमातून नागरिकांमध्ये अधिकृत पदव्यांच्या आधारे वेगळा सामाजिक दर्जा निर्माण होऊ नये, हा या तरतुदीमागील महत्त्वाचा घटनात्मक विचार आहे. पदव्यांमुळे निर्माण होणारी कृत्रिम सामाजिक श्रेणी टाळण्याच्या दृष्टीने कलम 18 महत्त्वाचे आहे."
        },
        {
          heading: "पदव्या रद्द करणे म्हणजे काय?",
          content: "पदव्या रद्द करणे म्हणजे राज्याने नागरिकांना अधिकृत सामाजिक दर्जा दर्शविणाऱ्या पदव्या प्रदान करू नयेत, असा घटनात्मक नियम. मात्र संविधानाने लष्करी आणि शैक्षणिक सन्मानांना स्पष्टपणे अपवाद दिला आहे."
        },
        {
          heading: "कलम 18 अंतर्गत शैक्षणिक सन्मानांना मनाई आहे का?",
          content: "नाही. कलम 18 मध्ये शैक्षणिक सन्मानांना स्पष्टपणे अपवाद देण्यात आला आहे. त्यामुळे शिक्षणाशी संबंधित शैक्षणिक पात्रता किंवा मान्यताप्राप्त शैक्षणिक सन्मानांना कलम 18 मधील पदव्यांवरील बंदी लागू होत नाही."
        },
        {
          heading: "लष्करी सन्मानांना कलम 18 लागू होते का?",
          content: "नाही. लष्करी सन्मानांनाही कलम 18 मधील पदव्यांवरील बंदीतून स्पष्टपणे वगळण्यात आले आहे. त्यामुळे लष्करी सेवेशी संबंधित घटनात्मकदृष्ट्या मान्य सन्मान या तरतुदीच्या सामान्य बंदीत येत नाहीत."
        },
        {
          heading: "भारतीय नागरिक परकीय राज्याकडून पदवी स्वीकारू शकतो का?",
          content: "कलम 18(2) नुसार भारताचा कोणताही नागरिक कोणत्याही परकीय राज्याकडून पदवी स्वीकारू शकत नाही. ही तरतूद परकीय राज्यांकडून मिळणाऱ्या पदव्यांशी संबंधित स्वतंत्र घटनात्मक मर्यादा आहे."
        },
        {
          heading: "भारताचा नागरिक नसलेल्या व्यक्तीबाबत कलम 18 काय सांगते?",
          content: "कलम 18(3) नुसार भारताचा नागरिक नसलेली व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करत असल्यास, राष्ट्रपतींच्या संमतीशिवाय परकीय राज्याकडून पदवी स्वीकारू शकत नाही."
        },
        {
          heading: "परकीय राज्याकडून मिळणाऱ्या भेटवस्तू किंवा पदांबाबत काय नियम आहेत?",
          content: "कलम 18(4) नुसार राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला राष्ट्रपतींच्या संमतीशिवाय परकीय राज्याकडून किंवा त्याच्या अधीन कोणतीही भेट, मानधन किंवा कोणत्याही प्रकारचे पद स्वीकारता येत नाही."
        },
        {
          heading: "कलम 18 प्रत्येक पुरस्काराला प्रतिबंध करते का?",
          content: "नाही. कलम 18 चा अर्थ प्रत्येक पुरस्कार, सन्मान किंवा मान्यतेवर सर्वसाधारण बंदी असा नाही. संविधानातील मजकूर विशेषतः पदव्यांबाबत नियम करतो आणि लष्करी व शैक्षणिक सन्मानांना स्पष्ट अपवाद देतो."
        },
        {
          heading: "कलम 18 आणि समानतेचा अधिकार यांचा संबंध काय?",
          content: "कलम 18 हे समानतेच्या अधिकाराशी संबंधित घटनात्मक तरतुदींच्या समूहात येते. राज्याकडून निर्माण होणाऱ्या पदवी-आधारित विशेष सामाजिक भेदांना मर्यादा घालून हे कलम समानतेच्या व्यापक घटनात्मक तत्त्वाला आधार देते."
        },
        {
          heading: "पदवी आणि शैक्षणिक पात्रता यात काय फरक आहे?",
          content: "कलम 18 मधील पदवी म्हणजे राज्याकडून प्रदान केली जाणारी अशी अधिकृत उपाधी ज्यावर या कलमात मर्यादा घातल्या आहेत. त्याउलट शैक्षणिक पात्रता किंवा शैक्षणिक सन्मान यांना संविधानाने स्पष्ट अपवाद दिला आहे. त्यामुळे प्रत्येक शैक्षणिक पदवीला कलम 18 अंतर्गत प्रतिबंधित पदवी समजणे योग्य नाही."
        },
        {
          heading: "कलम 18 चे महत्त्व काय आहे?",
          content: "कलम 18 चे महत्त्व राज्याकडून दिल्या जाणाऱ्या अधिकृत पदव्यांवर घटनात्मक मर्यादा घालण्यात आणि परकीय राज्यांकडून पदवी किंवा काही लाभ स्वीकारण्याच्या बाबतीत नियम निश्चित करण्यात आहे. हे कलम समानतेच्या घटनात्मक चौकटीतील एक महत्त्वाची तरतूद आहे."
        }
      ]
    },
    keywords: [
      "Article 18",
      "Article 18 Indian Constitution",
      "Abolition of Titles",
      "Article 18 explained",
      "Article 18 in Marathi",
      "कलम 18",
      "कलम 18 भारतीय संविधान",
      "पदव्या रद्द करणे",
      "Right to Equality",
      "Fundamental Rights Article 18"
    ],
    relatedIds: ["14", "15", "16", "17", "19"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "19",
    articleNumber: "Article 19",
    title: {
      en: "Protection of Certain Rights Regarding Freedom of Speech, etc.",
      mr: "भाषणस्वातंत्र्य इत्यादींबाबत काही अधिकारांचे संरक्षण"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Protection of certain rights regarding freedom of speech, etc.—(1) All citizens shall have the right—(a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions or co-operative societies; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (g) to practise any profession, or to carry on any occupation, trade or business. (2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence. (3) Nothing in sub-clause (b) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order, reasonable restrictions on the exercise of the right conferred by the said sub-clause. (4) Nothing in sub-clause (c) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order or morality, reasonable restrictions on the exercise of the right conferred by the said sub-clause. (5) Nothing in sub-clauses (d) and (e) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing reasonable restrictions on the exercise of any of the rights conferred by the said sub-clauses either in the interests of the general public or for the protection of the interests of any Scheduled Tribe. (6) Nothing in sub-clause (g) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the general public, reasonable restrictions on the exercise of the right conferred by the said sub-clause, and, in particular, nothing in the said sub-clause shall affect the operation of any existing law in so far as it relates to or prevent the State from making any law relating to—(i) the professional or technical qualifications necessary for practising any profession or carrying on any occupation, trade or business, or (ii) the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise.",
      mr: "भाषणस्वातंत्र्य इत्यादींबाबत काही अधिकारांचे संरक्षण.—(1) सर्व नागरिकांना—(a) भाषण व अभिव्यक्तीचे स्वातंत्र्य; (b) शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचे स्वातंत्र्य; (c) संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य; (d) भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचे स्वातंत्र्य; (e) भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य; आणि (g) कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य असे अधिकार असतील. (2) खंड (1) मधील उपखंड (a) मुळे मिळणाऱ्या अधिकाराच्या वापरावर भारताचे सार्वभौमत्व व अखंडता, राज्याची सुरक्षा, परकीय राज्यांशी मैत्रीपूर्ण संबंध, सार्वजनिक सुव्यवस्था, सभ्यता किंवा नीतिमत्ता यांच्या हितासाठी किंवा न्यायालयाचा अवमान, मानहानी किंवा गुन्ह्यास प्रवृत्त करणे यासंबंधी वाजवी निर्बंध घालणाऱ्या विद्यमान कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (3) उपखंड (b) मधील अधिकारावर भारताचे सार्वभौमत्व व अखंडता किंवा सार्वजनिक सुव्यवस्थेच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (4) उपखंड (c) मधील अधिकारावर भारताचे सार्वभौमत्व व अखंडता, सार्वजनिक सुव्यवस्था किंवा नीतिमत्ता यांच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (5) उपखंड (d) आणि (e) मधील अधिकारांवर सर्वसामान्य जनतेच्या हितासाठी किंवा कोणत्याही अनुसूचित जमातीच्या हितांचे संरक्षण करण्यासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (6) उपखंड (g) मधील अधिकारावर सर्वसामान्य जनतेच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. विशेषतः, कोणताही व्यवसाय किंवा उपजीविका, व्यापार किंवा उद्योग करण्यासाठी आवश्यक असलेल्या व्यावसायिक किंवा तांत्रिक पात्रतेसंबंधी कायदे तसेच राज्य किंवा राज्याच्या मालकीच्या किंवा नियंत्रणाखालील महामंडळाकडून व्यापार, व्यवसाय, उद्योग किंवा सेवा चालविण्याबाबतचे कायदे यांवर या उपखंडाचा परिणाम होणार नाही.",
      verified: true
    },
    simpleExplanation: {
      en: `Article 19 is one of the important provisions under the Right to Freedom in Part III of the Indian Constitution. It protects certain freedoms of Indian citizens and provides a constitutional framework within which these freedoms can be exercised.

The Article protects freedom of speech and expression, peaceful assembly without arms, forming associations or unions or co-operative societies, free movement throughout India, residing and settling in any part of India, and practising a profession or carrying on an occupation, trade or business.

These freedoms are important, but they are not expressed as completely unrestricted rights. The Constitution itself allows the State to impose reasonable restrictions in specified circumstances. The restrictions are different for different freedoms and must be connected with the grounds specifically mentioned in Article 19.

For example, freedom of speech and expression is subject to restrictions relating to matters such as the sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation and incitement to an offence.

Similarly, the right to assemble peacefully may be subject to reasonable restrictions in the interests of the sovereignty and integrity of India or public order. The freedom to form associations can also be regulated on specified constitutional grounds.

The freedoms of movement and residence may be subject to reasonable restrictions in the interests of the general public or for protecting the interests of Scheduled Tribes. The freedom to practise a profession or carry on a trade, occupation or business may also be regulated in the general public interest, including through requirements concerning professional or technical qualifications.

Therefore, Article 19 establishes both individual freedoms and the constitutional framework for regulating those freedoms through specified reasonable restrictions.`,
      mr: `कलम 19 हे भारतीय संविधानाच्या भाग III मधील स्वातंत्र्याच्या अधिकारातील एक महत्त्वाचे कलम आहे. हे भारतीय नागरिकांना काही मूलभूत स्वातंत्र्यांचे संरक्षण देते आणि ही स्वातंत्र्ये कोणत्या घटनात्मक चौकटीत वापरली जाऊ शकतात हे स्पष्ट करते.

कलम 19 अंतर्गत भाषण व अभिव्यक्तीचे स्वातंत्र्य, शांततेने व शस्त्रांशिवाय एकत्र येण्याचे स्वातंत्र्य, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य, भारतभर मुक्तपणे फिरण्याचे स्वातंत्र्य, भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य यांचा समावेश होतो.

ही स्वातंत्र्ये महत्त्वाची असली तरी ती पूर्णपणे अमर्यादित नाहीत. संविधान स्वतःच काही विशिष्ट परिस्थितींमध्ये राज्याला वाजवी निर्बंध घालण्याची परवानगी देते. प्रत्येक स्वातंत्र्यासाठी निर्बंधांची घटनात्मक कारणे वेगवेगळी आहेत आणि ती कलम 19 मध्ये नमूद केलेल्या आधारांशी संबंधित असणे आवश्यक आहे.

उदाहरणार्थ, भाषण व अभिव्यक्तीच्या स्वातंत्र्यावर भारताचे सार्वभौमत्व व अखंडता, राज्याची सुरक्षा, परकीय राज्यांशी मैत्रीपूर्ण संबंध, सार्वजनिक सुव्यवस्था, सभ्यता किंवा नीतिमत्ता, न्यायालयाचा अवमान, मानहानी आणि गुन्ह्यास प्रवृत्त करणे यांसारख्या बाबींशी संबंधित वाजवी निर्बंध लागू होऊ शकतात.

त्याचप्रमाणे शांततेने एकत्र येण्याच्या अधिकारावर भारताचे सार्वभौमत्व व अखंडता किंवा सार्वजनिक सुव्यवस्थेच्या हितासाठी वाजवी निर्बंध लागू होऊ शकतात. संघटना स्थापन करण्याच्या अधिकारावरही संविधानात नमूद केलेल्या आधारांवर निर्बंध असू शकतात.

भारतभर फिरण्याचा आणि भारताच्या कोणत्याही भागात राहण्याचा अधिकार सर्वसामान्य जनतेच्या हितासाठी किंवा अनुसूचित जमातींच्या हितांचे संरक्षण करण्यासाठी वाजवी निर्बंधांच्या अधीन असू शकतो. व्यवसाय किंवा व्यापार करण्याच्या स्वातंत्र्यावरही सर्वसामान्य जनतेच्या हितासाठी नियम लागू होऊ शकतात. काही व्यवसायांसाठी आवश्यक व्यावसायिक किंवा तांत्रिक पात्रताही कायद्याद्वारे निश्चित केली जाऊ शकते.

म्हणून कलम 19 हे केवळ स्वातंत्र्यांची यादी नाही. हे नागरिकांच्या स्वातंत्र्यांचे संरक्षण आणि सार्वजनिक हितासाठी संविधानाने मान्य केलेले वाजवी नियमन यांच्यातील घटनात्मक चौकट स्पष्ट करते.`
    },
    verySimple: {
      en: "Article 19 gives Indian citizens important freedoms, including freedom of speech and expression, peaceful assembly, forming associations, movement, residence and settlement, and practising a profession or carrying on a trade or business. These freedoms are subject to reasonable restrictions permitted by the Constitution.",
      mr: "कलम 19 भारतीय नागरिकांना भाषण व अभिव्यक्ती, शांततेने एकत्र येणे, संघटना स्थापन करणे, भारतभर फिरणे, कुठेही राहणे व स्थायिक होणे आणि व्यवसाय किंवा व्यापार करण्याचे स्वातंत्र्य देते. या अधिकारांवर संविधानाने मान्य केलेले वाजवी निर्बंध लागू होऊ शकतात."
    },
    example: {
      en: `Suppose a citizen wants to express an opinion on a public issue. Article 19(1)(a) protects freedom of speech and expression. However, the Constitution also permits reasonable restrictions on this freedom on the specific grounds mentioned in Article 19(2).

Consider another situation where citizens want to organise a peaceful gathering without weapons. Article 19(1)(b) recognises the right to assemble peacefully and without arms. This right can also be subject to reasonable restrictions permitted under Article 19(3), including restrictions connected with public order.

A different example concerns employment or business. A citizen may choose a profession or conduct a trade or business, but laws may prescribe professional or technical qualifications for certain professions and may regulate activities in the general public interest.

These examples show that Article 19 protects important freedoms while also recognising that their exercise operates within a constitutional framework of specified restrictions.`,
      mr: `समजा एखाद्या नागरिकाला एखाद्या सार्वजनिक विषयावर आपले मत व्यक्त करायचे आहे. कलम 19(1)(a) भाषण व अभिव्यक्तीच्या स्वातंत्र्याचे संरक्षण करते. मात्र कलम 19(2) मध्ये नमूद केलेल्या विशिष्ट आधारांवर या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.

दुसरे उदाहरण म्हणजे नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येऊन सभा आयोजित करायची आहे. कलम 19(1)(b) अशा शांततापूर्ण एकत्र येण्याच्या अधिकाराला मान्यता देते. मात्र सार्वजनिक सुव्यवस्थेसह संविधानात नमूद केलेल्या आधारांवर या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.

व्यवसायाचे उदाहरण घेतल्यास, एखाद्या नागरिकाला व्यवसाय, व्यापार किंवा उपजीविका करण्याचे स्वातंत्र्य आहे. परंतु काही व्यवसायांसाठी आवश्यक व्यावसायिक किंवा तांत्रिक पात्रता कायद्याने निश्चित केली जाऊ शकते आणि सार्वजनिक हितासाठी त्या क्षेत्राचे नियमन केले जाऊ शकते.

यावरून दिसते की कलम 19 नागरिकांच्या महत्त्वाच्या स्वातंत्र्यांचे संरक्षण करते आणि त्याच वेळी त्यांच्या वापरासाठी संविधानाने ठरवलेली नियमनाची चौकटही निश्चित करते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 19 of the Indian Constitution?",
          content: "Article 19 is part of the Right to Freedom in Part III of the Constitution. It protects certain freedoms of Indian citizens, including speech and expression, peaceful assembly, associations, movement, residence and settlement, and profession, occupation, trade or business."
        },
        {
          heading: "What freedoms are guaranteed under Article 19?",
          content: "Article 19(1) recognises six currently operative categories of freedom for citizens: freedom of speech and expression; peaceful assembly without arms; forming associations, unions or co-operative societies; moving freely throughout India; residing and settling in any part of India; and practising a profession or carrying on an occupation, trade or business."
        },
        {
          heading: "Is Article 19 available to all persons?",
          content: "The rights listed in Article 19(1) are expressly described as rights of all citizens. Therefore, the constitutional wording of Article 19 distinguishes these freedoms from provisions that apply to every person irrespective of citizenship."
        },
        {
          heading: "What is freedom of speech and expression under Article 19?",
          content: "Article 19(1)(a) protects freedom of speech and expression for citizens. The constitutional protection covers the exercise of this freedom within the framework of Article 19, including the specific grounds on which reasonable restrictions may be imposed under clause (2)."
        },
        {
          heading: "Are there restrictions on freedom of speech?",
          content: "Yes. Article 19(2) expressly permits reasonable restrictions on freedom of speech and expression on specified grounds. These include the sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation and incitement to an offence."
        },
        {
          heading: "What is the right to peaceful assembly?",
          content: "Article 19(1)(b) gives citizens the right to assemble peaceably and without arms. Article 19(3) allows reasonable restrictions on this right in the interests of the sovereignty and integrity of India or public order."
        },
        {
          heading: "What is the freedom to form associations?",
          content: "Article 19(1)(c) protects the right of citizens to form associations or unions or co-operative societies. Article 19(4) permits reasonable restrictions on this freedom in the interests of the sovereignty and integrity of India, public order or morality."
        },
        {
          heading: "Can citizens freely move anywhere in India?",
          content: "Article 19(1)(d) recognises the freedom of citizens to move freely throughout the territory of India. Article 19(5) allows reasonable restrictions in the interests of the general public or for the protection of the interests of any Scheduled Tribe."
        },
        {
          heading: "Can a citizen live and settle anywhere in India?",
          content: "Article 19(1)(e) protects the right of citizens to reside and settle in any part of India. This right is subject to reasonable restrictions permitted by Article 19(5), including restrictions in the interests of the general public or for protecting the interests of Scheduled Tribes."
        },
        {
          heading: "What is the right to practise a profession or carry on business?",
          content: "Article 19(1)(g) protects the right of citizens to practise a profession or carry on an occupation, trade or business. Article 19(6) allows reasonable restrictions in the general public interest and recognises provisions relating to professional or technical qualifications and State participation in trade, business, industry or services."
        },
        {
          heading: "What does reasonable restriction mean in Article 19?",
          content: "Article 19 does not describe its protected freedoms as absolute. Instead, clauses (2) to (6) specify circumstances in which laws may impose reasonable restrictions. The permissible grounds differ depending on the particular freedom involved."
        },
        {
          heading: "What happened to Article 19(1)(f)?",
          content: "The original right contained in Article 19(1)(f), relating to property, was omitted by the Constitution (Forty-fourth Amendment) Act, 1978 with effect from 20 June 1979. The currently operative text therefore moves from sub-clause (e) to sub-clause (g)."
        },
        {
          heading: "Why is Article 19 important?",
          content: "Article 19 is important because it constitutionally protects several freedoms that affect communication, participation in society, movement, residence and economic activity. At the same time, it provides specific constitutional grounds for reasonable restrictions, creating a framework for balancing these freedoms with specified public interests."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 19 म्हणजे काय?",
          content: "कलम 19 हे संविधानाच्या भाग III मधील स्वातंत्र्याच्या अधिकाराचा भाग आहे. हे भारतीय नागरिकांना भाषण व अभिव्यक्ती, शांततेने एकत्र येणे, संघटना स्थापन करणे, भारतभर फिरणे, राहणे व स्थायिक होणे आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्यासंबंधी काही स्वातंत्र्यांचे संरक्षण देते."
        },
        {
          heading: "कलम 19 अंतर्गत कोणती स्वातंत्र्ये आहेत?",
          content: "कलम 19(1) अंतर्गत सध्या लागू असलेल्या सहा प्रमुख स्वातंत्र्यांमध्ये भाषण व अभिव्यक्तीचे स्वातंत्र्य, शांततेने व शस्त्रांशिवाय एकत्र येण्याचे स्वातंत्र्य, संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य, भारतभर मुक्तपणे फिरण्याचे स्वातंत्र्य, भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य यांचा समावेश होतो."
        },
        {
          heading: "कलम 19 सर्व व्यक्तींना लागू होते का?",
          content: "कलम 19(1) मधील अधिकार संविधानाच्या भाषेत सर्व नागरिकांना दिले आहेत. त्यामुळे या कलमातील स्वातंत्र्ये नागरिकांशी संबंधित आहेत. संविधानातील काही इतर मूलभूत अधिकार मात्र प्रत्येक व्यक्तीला लागू होतात."
        },
        {
          heading: "कलम 19 अंतर्गत भाषण व अभिव्यक्तीचे स्वातंत्र्य काय आहे?",
          content: "कलम 19(1)(a) भारतीय नागरिकांच्या भाषण व अभिव्यक्तीच्या स्वातंत्र्याचे संरक्षण करते. या स्वातंत्र्याचा वापर संविधानाच्या चौकटीत होतो आणि कलम 19(2) मध्ये नमूद केलेल्या आधारांवर वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "भाषण व अभिव्यक्तीच्या स्वातंत्र्यावर निर्बंध असू शकतात का?",
          content: "होय. कलम 19(2) नुसार भारताचे सार्वभौमत्व व अखंडता, राज्याची सुरक्षा, परकीय राज्यांशी मैत्रीपूर्ण संबंध, सार्वजनिक सुव्यवस्था, सभ्यता किंवा नीतिमत्ता, न्यायालयाचा अवमान, मानहानी आणि गुन्ह्यास प्रवृत्त करणे या आधारांवर वाजवी निर्बंध घालता येऊ शकतात."
        },
        {
          heading: "शांततेने एकत्र येण्याचा अधिकार म्हणजे काय?",
          content: "कलम 19(1)(b) नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचा अधिकार देते. कलम 19(3) नुसार भारताचे सार्वभौमत्व व अखंडता किंवा सार्वजनिक सुव्यवस्थेच्या हितासाठी या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "संघटना स्थापन करण्याचा अधिकार काय आहे?",
          content: "कलम 19(1)(c) नागरिकांना संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचा अधिकार देते. भारताचे सार्वभौमत्व व अखंडता, सार्वजनिक सुव्यवस्था किंवा नीतिमत्ता यांच्या हितासाठी या अधिकारावर कलम 19(4) अंतर्गत वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "भारतात नागरिकांना मुक्तपणे कुठेही फिरता येते का?",
          content: "कलम 19(1)(d) नागरिकांना भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचा अधिकार देते. मात्र सर्वसामान्य जनतेच्या हितासाठी किंवा अनुसूचित जमातींच्या हितांचे संरक्षण करण्यासाठी कलम 19(5) अंतर्गत वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "नागरिक भारतात कुठेही राहू व स्थायिक होऊ शकतो का?",
          content: "कलम 19(1)(e) नागरिकांना भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य देते. मात्र कलम 19(5) नुसार सर्वसामान्य जनतेच्या हितासाठी किंवा अनुसूचित जमातींच्या हितांचे संरक्षण करण्यासाठी वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "व्यवसाय किंवा व्यापार करण्याचा अधिकार काय आहे?",
          content: "कलम 19(1)(g) नागरिकांना कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य देते. कलम 19(6) नुसार सर्वसामान्य जनतेच्या हितासाठी वाजवी निर्बंध लागू होऊ शकतात. काही व्यवसायांसाठी आवश्यक व्यावसायिक किंवा तांत्रिक पात्रतेबाबतही कायदे करता येतात."
        },
        {
          heading: "कलम 19 मधील वाजवी निर्बंध म्हणजे काय?",
          content: "कलम 19 मधील स्वातंत्र्ये पूर्णपणे अमर्यादित नाहीत. खंड (2) ते (6) मध्ये प्रत्येक संबंधित अधिकारावर कोणत्या परिस्थितीत कायद्याद्वारे वाजवी निर्बंध लागू करता येतात हे नमूद केले आहे. प्रत्येक स्वातंत्र्यासाठी निर्बंधांची घटनात्मक कारणे वेगवेगळी आहेत."
        },
        {
          heading: "कलम 19(1)(f) चे काय झाले?",
          content: "कलम 19(1)(f) मधील मालमत्तेशी संबंधित मूलभूत अधिकार 44व्या घटनादुरुस्ती अधिनियम, 1978 द्वारे वगळण्यात आला आणि ही दुरुस्ती 20 जून 1979 पासून प्रभावी झाली. त्यामुळे सध्याच्या कलम 19 मध्ये (e) नंतर थेट (g) येतो."
        },
        {
          heading: "कलम 19 चे महत्त्व काय आहे?",
          content: "कलम 19 महत्त्वाचे आहे कारण ते नागरिकांच्या संवाद, सामाजिक सहभाग, हालचाल, निवास आणि आर्थिक क्रियाकलापांशी संबंधित अनेक स्वातंत्र्यांना घटनात्मक संरक्षण देते. त्याच वेळी या स्वातंत्र्यांवर विशिष्ट सार्वजनिक हितांच्या आधारावर वाजवी निर्बंध लावण्यासाठी संविधानिक चौकटही उपलब्ध करून देते."
        }
      ]
    },
    keywords: [
      "Article 19",
      "Article 19 Indian Constitution",
      "Article 19 freedoms",
      "freedom of speech and expression",
      "freedom of assembly",
      "freedom of association",
      "freedom of movement in India",
      "freedom of residence",
      "freedom of profession",
      "reasonable restrictions Article 19",
      "Article 19 in Marathi",
      "कलम 19",
      "कलम 19 भारतीय संविधान",
      "भाषण स्वातंत्र्य",
      "स्वातंत्र्याचा अधिकार"
    ],
    relatedIds: ["14", "15", "16", "17", "18", "21"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "21",
    articleNumber: "Article 21",
    title: {
      en: "Protection of Life and Personal Liberty",
      mr: "जीवन व व्यक्तिगत स्वातंत्र्याचे संरक्षण"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Protection of life and personal liberty.—No person shall be deprived of his life or personal liberty except according to procedure established by law.",
      mr: "जीवन व व्यक्तिगत स्वातंत्र्याचे संरक्षण.—कायद्याने स्थापित केलेल्या प्रक्रियेनुसारच एखाद्या व्यक्तीस तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येईल.",
      verified: true
    },
    simpleExplanation: {
      en: `Article 21 is one of the most important Fundamental Rights in Part III of the Indian Constitution. It protects the life and personal liberty of every person and places a constitutional requirement on the State when a person may be deprived of these interests.

The wording of Article 21 is significant because it uses the expression "No person". Unlike some rights in Part III that are specifically available to citizens, Article 21 protects every person. Its protection therefore extends beyond Indian citizens.

The Article states that no person shall be deprived of life or personal liberty except according to procedure established by law. This means that deprivation of life or personal liberty cannot simply be arbitrary; there must be a legally established procedure.

The constitutional understanding of Article 21 has developed significantly through judicial interpretation. The protection is not limited to mere physical existence. The Supreme Court has interpreted Article 21 in relation to various aspects of a dignified life and personal liberty, while the exact scope of individual rights depends on constitutional interpretation and the facts of each case.

Article 21 is also closely connected with other Fundamental Rights. Constitutional protections relating to equality, freedoms, criminal procedure, privacy, education, legal assistance and other aspects of personal liberty can interact with Article 21 depending on the circumstances.

Therefore, Article 21 provides a broad constitutional protection for life and personal liberty and requires deprivation of these interests to follow a legally established procedure.`,
      mr: `कलम 21 हे भारतीय संविधानाच्या भाग III मधील अत्यंत महत्त्वाच्या मूलभूत अधिकारांपैकी एक आहे. हे प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते आणि एखाद्या व्यक्तीला या अधिकारांपासून वंचित करताना राज्यासाठी घटनात्मक मर्यादा निश्चित करते.

कलम 21 मधील "No person" म्हणजे "कोणतीही व्यक्ती" हे शब्द महत्त्वाचे आहेत. भाग III मधील काही अधिकार केवळ नागरिकांना दिलेले आहेत; परंतु कलम 21 प्रत्येक व्यक्तीला लागू होते. त्यामुळे या कलमाचे संरक्षण केवळ भारतीय नागरिकांपुरते मर्यादित नाही.

या कलमानुसार कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येत नाही. म्हणजेच जीवन किंवा व्यक्तिगत स्वातंत्र्य हिरावून घेण्याची कारवाई मनमानी पद्धतीने करता येत नाही; त्यासाठी कायद्याने स्थापित केलेली प्रक्रिया असणे आवश्यक आहे.

न्यायालयीन व्याख्येमुळे कलम 21 च्या अर्थाची व्याप्ती कालांतराने विकसित झाली आहे. जीवनाचा अर्थ केवळ शारीरिक अस्तित्व एवढाच मर्यादित न ठेवता मानवी प्रतिष्ठेशी संबंधित विविध पैलूंचा विचार न्यायालयीन निर्णयांमध्ये करण्यात आला आहे. मात्र एखाद्या विशिष्ट अधिकाराची नेमकी घटनात्मक व्याप्ती ही संबंधित घटनात्मक तरतुदी, न्यायालयीन व्याख्या आणि प्रकरणाच्या परिस्थितीवर अवलंबून असते.

कलम 21 चा संबंध इतर मूलभूत अधिकारांशीही आहे. समानता, स्वातंत्र्य, फौजदारी प्रक्रिया, गोपनीयता, शिक्षण, कायदेशीर मदत आणि व्यक्तिगत स्वातंत्र्याशी संबंधित इतर घटनात्मक संरक्षणे परिस्थितीनुसार कलम 21 शी जोडली जाऊ शकतात.

म्हणून कलम 21 हे जीवन आणि व्यक्तिगत स्वातंत्र्याचे व्यापक घटनात्मक संरक्षण देते आणि या अधिकारांपासून वंचित करण्यासाठी कायद्याने स्थापित केलेल्या प्रक्रियेचे पालन आवश्यक करते.`
    },
    verySimple: {
      en: "Article 21 protects the life and personal liberty of every person. It says that no person can be deprived of life or personal liberty except according to a procedure established by law.",
      mr: "कलम 21 प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते. कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येत नाही."
    },
    example: {
      en: `Suppose a person is taken into custody by a public authority and their personal liberty is affected. The State cannot treat deprivation of liberty as something that can be done without legal authority and procedure. Article 21 requires that deprivation of personal liberty must take place according to a procedure established by law.

Another example can be understood through the idea of personal dignity. Life under the Constitution is not understood merely as continuing to exist physically. Judicial interpretation of Article 21 has connected the protection of life with various conditions necessary for living with human dignity.

The exact legal protection available in a particular situation depends on the applicable law, constitutional provisions and judicial interpretation. Article 21 therefore operates as an important constitutional safeguard whenever State action affects a person's life or personal liberty.`,
      mr: `समजा एखाद्या सार्वजनिक प्राधिकरणाकडून एखाद्या व्यक्तीला ताब्यात घेतले जाते आणि तिच्या व्यक्तिगत स्वातंत्र्यावर परिणाम होतो. व्यक्तीचे स्वातंत्र्य हिरावून घेणे ही कायदेशीर अधिकार आणि प्रक्रिया नसतानाही करता येणारी कृती नाही. कलम 21 नुसार व्यक्तिगत स्वातंत्र्यापासून वंचित करण्याची कारवाई कायद्याने स्थापित केलेल्या प्रक्रियेनुसार असणे आवश्यक आहे.

जीवनाच्या अधिकाराचे उदाहरण मानवी प्रतिष्ठेच्या संदर्भातूनही समजता येते. संविधानाच्या दृष्टीने जीवनाचा अर्थ केवळ शारीरिक अस्तित्व टिकून राहणे एवढाच मर्यादित नाही. न्यायालयीन व्याख्येमध्ये कलम 21 अंतर्गत मानवी प्रतिष्ठेशी संबंधित विविध पैलूंचा विचार करण्यात आला आहे.

एखाद्या विशिष्ट परिस्थितीत नेमके कोणते कायदेशीर संरक्षण लागू होईल हे संबंधित कायदा, संविधानातील इतर तरतुदी आणि न्यायालयीन व्याख्येवर अवलंबून असते. त्यामुळे एखाद्या व्यक्तीच्या जीवनावर किंवा व्यक्तिगत स्वातंत्र्यावर राज्याच्या कारवाईचा परिणाम होत असल्यास कलम 21 महत्त्वाचे घटनात्मक संरक्षण प्रदान करते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 21 of the Indian Constitution?",
          content: "Article 21 provides constitutional protection for life and personal liberty. It states that no person shall be deprived of life or personal liberty except according to procedure established by law. It is included in Part III under Fundamental Rights."
        },
        {
          heading: "What does Article 21 protect?",
          content: "The text of Article 21 expressly protects two closely connected interests: life and personal liberty. Its wording applies to every person and not only to Indian citizens."
        },
        {
          heading: "Does Article 21 apply to all persons?",
          content: 'Yes. Article 21 uses the expression "No person", making its constitutional protection applicable to every person. This is different from certain Fundamental Rights whose text specifically refers to citizens.'
        },
        {
          heading: "What does personal liberty mean under Article 21?",
          content: "Personal liberty refers broadly to an individual’s freedom from unlawful or constitutionally impermissible deprivation of liberty. The scope of personal liberty has been developed through constitutional and judicial interpretation and can include different aspects of individual freedom depending on the circumstances."
        },
        {
          heading: "What does the right to life mean under Article 21?",
          content: "Article 21 expressly protects life. Through judicial interpretation, the meaning of protection of life has been considered in connection with living with human dignity and other interests necessary for meaningful human existence. The precise scope of particular protections depends on constitutional interpretation and applicable law."
        },
        {
          heading: "What is procedure established by law?",
          content: "Article 21 requires deprivation of life or personal liberty to take place according to a procedure established by law. Therefore, State action affecting these interests must have a legal basis and follow the applicable legal procedure."
        },
        {
          heading: "Is the right under Article 21 absolute?",
          content: "Article 21 protects life and personal liberty, but its text itself recognises that deprivation may occur according to procedure established by law. The validity of a particular deprivation therefore depends on the applicable constitutional requirements, law and judicial interpretation."
        },
        {
          heading: "Article 21 and human dignity",
          content: "Judicial interpretation has connected the protection of life under Article 21 with the concept of human dignity. As a result, the constitutional understanding of life is not limited to mere physical existence and may encompass conditions associated with a dignified life."
        },
        {
          heading: "Article 21 and privacy",
          content: "The constitutional protection of privacy has been recognised as an aspect of the freedoms and protections guaranteed by the Constitution, including Article 21. The Supreme Court recognised privacy as a constitutionally protected right in its interpretation of the Constitution."
        },
        {
          heading: "Article 21 and personal freedom",
          content: "Article 21 provides a constitutional safeguard when State action affects an individual's personal liberty. Other constitutional provisions, including Article 22 concerning arrest and detention in certain cases, can also become relevant depending on the circumstances."
        },
        {
          heading: "Why is Article 21 important?",
          content: "Article 21 is important because it establishes constitutional protection for life and personal liberty for every person. Its broad wording and subsequent constitutional interpretation have made it relevant to many issues concerning individual dignity, liberty and State action."
        },
        {
          heading: "Article 21 in simple words",
          content: "In simple terms, Article 21 means that every person has constitutional protection for life and personal liberty, and the State cannot deprive a person of these except according to a legally established procedure."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 21 म्हणजे काय?",
          content: "कलम 21 प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे घटनात्मक संरक्षण करते. कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येत नाही. हे कलम मूलभूत अधिकारांच्या भाग III मध्ये आहे."
        },
        {
          heading: "कलम 21 कोणत्या अधिकारांचे संरक्षण करते?",
          content: "कलम 21 च्या मजकुरात जीवन आणि व्यक्तिगत स्वातंत्र्य या दोन महत्त्वाच्या बाबींचे स्पष्ट संरक्षण केले आहे. या कलमातील संरक्षण प्रत्येक व्यक्तीला लागू होते; ते केवळ भारतीय नागरिकांपुरते मर्यादित नाही."
        },
        {
          heading: "कलम 21 सर्व व्यक्तींना लागू होते का?",
          content: 'होय. कलम 21 मध्ये "No person" म्हणजे "कोणतीही व्यक्ती" असे शब्द वापरले आहेत. त्यामुळे हे संरक्षण प्रत्येक व्यक्तीला लागू होते. काही इतर मूलभूत अधिकारांच्या बाबतीत संविधानात विशेषतः नागरिकांचा उल्लेख करण्यात आला आहे.'
        },
        {
          heading: "कलम 21 मधील व्यक्तिगत स्वातंत्र्य म्हणजे काय?",
          content: "व्यक्तिगत स्वातंत्र्याचा व्यापक अर्थ व्यक्तीला कायदेशीर किंवा घटनात्मक आधाराशिवाय स्वातंत्र्यापासून वंचित न करण्याशी संबंधित आहे. व्यक्तिगत स्वातंत्र्याची नेमकी व्याप्ती न्यायालयीन व घटनात्मक व्याख्येतून विकसित झाली आहे आणि परिस्थितीनुसार त्यात व्यक्तिस्वातंत्र्याचे विविध पैलू समाविष्ट होऊ शकतात."
        },
        {
          heading: "कलम 21 मधील जीवनाचा अधिकार म्हणजे काय?",
          content: "कलम 21 जीवनाचे संरक्षण करते. न्यायालयीन व्याख्येमध्ये जीवनाचा विचार मानवी प्रतिष्ठेसह केला गेला आहे. त्यामुळे जीवनाचा घटनात्मक अर्थ केवळ शारीरिक अस्तित्वापुरता मर्यादित न राहता मानवी जीवनाशी संबंधित इतर पैलूंशी जोडला जाऊ शकतो."
        },
        {
          heading: "कायद्याने स्थापित केलेली प्रक्रिया म्हणजे काय?",
          content: "कलम 21 नुसार जीवन किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करण्याची कारवाई कायद्याने स्थापित केलेल्या प्रक्रियेनुसार झाली पाहिजे. म्हणजेच अशा राज्यकारवाईला कायदेशीर आधार असणे आणि लागू असलेल्या कायदेशीर प्रक्रियेचे पालन करणे आवश्यक आहे."
        },
        {
          heading: "कलम 21 मधील अधिकार पूर्णपणे अमर्यादित आहे का?",
          content: "कलम 21 जीवन आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते; मात्र त्याच मजकुरात कायद्याने स्थापित केलेल्या प्रक्रियेनुसार वंचित करण्याची शक्यता नमूद आहे. त्यामुळे एखाद्या विशिष्ट परिस्थितीत झालेली कारवाई संविधान, संबंधित कायदा आणि न्यायालयीन व्याख्येच्या चौकटीत तपासली जाते."
        },
        {
          heading: "कलम 21 आणि मानवी प्रतिष्ठा",
          content: "न्यायालयीन व्याख्येमध्ये कलम 21 अंतर्गत जीवनाच्या संरक्षणाचा संबंध मानवी प्रतिष्ठेशी जोडला गेला आहे. त्यामुळे संविधानातील जीवनाचा अर्थ केवळ जिवंत राहणे एवढाच नसून मानवी प्रतिष्ठेशी संबंधित परिस्थितींचाही विचार त्यात केला जाऊ शकतो."
        },
        {
          heading: "कलम 21 आणि गोपनीयतेचा अधिकार",
          content: "गोपनीयतेचे घटनात्मक संरक्षण हे संविधानातील स्वातंत्र्य आणि अधिकारांच्या चौकटीत मान्य करण्यात आले आहे आणि त्याचा संबंध कलम 21 शीही जोडला गेला आहे. सर्वोच्च न्यायालयाने गोपनीयतेला घटनात्मक संरक्षण असलेला अधिकार म्हणून मान्यता दिली आहे."
        },
        {
          heading: "कलम 21 आणि व्यक्तिगत स्वातंत्र्य",
          content: "राज्याच्या कारवाईमुळे एखाद्या व्यक्तीच्या व्यक्तिगत स्वातंत्र्यावर परिणाम होत असल्यास कलम 21 महत्त्वाचे घटनात्मक संरक्षण देते. परिस्थितीनुसार अटक आणि स्थानबद्धतेशी संबंधित कलम 22 सारख्या इतर घटनात्मक तरतुदीही लागू होऊ शकतात."
        },
        {
          heading: "कलम 21 चे महत्त्व काय आहे?",
          content: "कलम 21 महत्त्वाचे आहे कारण ते प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे घटनात्मक संरक्षण निश्चित करते. त्यातील व्यापक शब्दरचना आणि त्यानंतर झालेल्या न्यायालयीन व्याख्येमुळे मानवी प्रतिष्ठा, स्वातंत्र्य आणि राज्याच्या कारवाईशी संबंधित अनेक विषयांमध्ये या कलमाला महत्त्व प्राप्त झाले आहे."
        },
        {
          heading: "सोप्या भाषेत कलम 21",
          content: "सोप्या भाषेत सांगायचे झाल्यास, प्रत्येक व्यक्तीच्या जीवनाला आणि व्यक्तिगत स्वातंत्र्याला संविधानाचे संरक्षण आहे आणि कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय राज्य एखाद्या व्यक्तीला या अधिकारांपासून वंचित करू शकत नाही."
        }
      ]
    },
    keywords: [
      "Article 21",
      "Article 21 Indian Constitution",
      "Right to Life",
      "Right to Personal Liberty",
      "Article 21 explained",
      "Article 21 in Marathi",
      "Right to Life and Personal Liberty",
      "Protection of Life and Personal Liberty",
      "कलम 21",
      "कलम 21 भारतीय संविधान",
      "जीवनाचा अधिकार",
      "व्यक्तिगत स्वातंत्र्य",
      "मूलभूत अधिकार",
      "Right to Privacy Article 21"
    ],
    relatedIds: ["19", "20", "21A", "22", "32"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "21A",
    articleNumber: "Article 21A",
    title: {
      en: "Right to Education",
      mr: "शिक्षणाचा अधिकार"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: "Right to education.—The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
      mr: "शिक्षणाचा अधिकार.—राज्य, कायद्याद्वारे ठरवील अशा रीतीने, सहा ते चौदा वर्षे वयोगटातील सर्व बालकांना मोफत व सक्तीचे शिक्षण देईल.",
      verified: true
    },
    simpleExplanation: {
      en: `Article 21A establishes the Right to Education as a Fundamental Right under Part III of the Indian Constitution. It requires the State to provide free and compulsory education to all children between the ages of six and fourteen years.

The provision was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002. The amendment was brought into effect from 1 April 2010. With this constitutional change, the right to elementary education for children in the specified age group became part of the Fundamental Rights framework.

The words "free" and "compulsory" are important in Article 21A. Free education means that a child within the specified age group should not be prevented from receiving the prescribed education because of fees or expenses that would prevent access to education. Compulsory education refers to the State's responsibility to ensure that children in the specified age group receive education in accordance with the legal framework.

Article 21A does not itself describe every operational detail of how education must be provided. Instead, it states that education shall be provided in such manner as the State may, by law, determine. Parliament enacted the Right of Children to Free and Compulsory Education Act, 2009 to give effect to this constitutional provision. The Act came into force on 1 April 2010.

The constitutional provision is specifically concerned with children from six to fourteen years of age. It is therefore important to distinguish Article 21A from other constitutional provisions concerning early childhood care, education and broader educational policy.

Article 21A is also connected with Article 45 and Article 51A(k). The Eighty-sixth Amendment changed Article 45 to focus on early childhood care and education for children below six years and added a fundamental duty concerning educational opportunities for children between six and fourteen years.

Therefore, Article 21A provides a constitutional foundation for free and compulsory education for children in the specified age group and places responsibility on the State to implement this right through the legal framework.`,
      mr: `कलम 21A भारतीय संविधानाच्या भाग III अंतर्गत शिक्षणाचा अधिकार हा मूलभूत अधिकार म्हणून निश्चित करते. या कलमानुसार सहा ते चौदा वर्षे वयोगटातील सर्व बालकांना मोफत आणि सक्तीचे शिक्षण देण्याची जबाबदारी राज्यावर आहे.

कलम 21A हे संविधानाच्या 86व्या घटनादुरुस्ती अधिनियम, 2002 द्वारे समाविष्ट करण्यात आले. ही घटनादुरुस्ती 1 एप्रिल 2010 पासून प्रभावी झाली. त्यामुळे निश्चित वयोगटातील बालकांच्या प्राथमिक शिक्षणाचा अधिकार मूलभूत अधिकारांच्या घटनात्मक चौकटीचा भाग बनला.

कलम 21A मधील "मोफत" आणि "सक्तीचे" हे दोन्ही शब्द महत्त्वाचे आहेत. मोफत शिक्षणाचा अर्थ असा की निश्चित वयोगटातील बालकाला शिक्षण घेण्यापासून शुल्क किंवा अशा खर्चामुळे वंचित राहावे लागू नये, ज्यामुळे शिक्षण मिळणे अडथळ्यात येईल. सक्तीचे शिक्षण म्हणजे निश्चित वयोगटातील मुलांना शिक्षण मिळेल याची खात्री करण्याची जबाबदारी राज्याची आहे.

कलम 21A मध्ये शिक्षणाची अंमलबजावणी नेमकी कोणत्या पद्धतीने केली जाईल याचे सर्व तपशील दिलेले नाहीत. त्याऐवजी राज्य कायद्याद्वारे ठरवेल अशा पद्धतीने हे शिक्षण देण्याची तरतूद करण्यात आली आहे. या घटनात्मक तरतुदीची अंमलबजावणी करण्यासाठी संसदने Right of Children to Free and Compulsory Education Act, 2009 अर्थात बालकांचा मोफत आणि सक्तीच्या शिक्षणाचा अधिकार अधिनियम, 2009 केला. हा कायदा 1 एप्रिल 2010 पासून लागू झाला.

कलम 21A विशेषतः सहा ते चौदा वर्षे वयोगटातील बालकांशी संबंधित आहे. त्यामुळे लहान वयातील बालकांची काळजी व शिक्षण आणि व्यापक शैक्षणिक धोरणांशी संबंधित इतर घटनात्मक तरतुदींपासून कलम 21A वेगळे समजणे आवश्यक आहे.

कलम 21A चा संबंध कलम 45 आणि कलम 51A(k) शीही आहे. 86व्या घटनादुरुस्तीमुळे कलम 45 मध्ये सहा वर्षांखालील बालकांसाठी प्रारंभिक बालसंगोपन व शिक्षणावर भर देण्यात आला आणि सहा ते चौदा वर्षे वयोगटातील मुलांना शिक्षणाच्या संधी उपलब्ध करून देण्याबाबत पालक किंवा पालकत्व असलेल्या व्यक्तीस मूलभूत कर्तव्याची तरतूद करण्यात आली.

म्हणून कलम 21A हे निश्चित वयोगटातील बालकांसाठी मोफत आणि सक्तीच्या शिक्षणाला घटनात्मक आधार देते आणि या अधिकाराची अंमलबजावणी कायदेशीर चौकटीत करण्याची जबाबदारी राज्यावर ठेवते.`
    },
    verySimple: {
      en: "Article 21A gives children between six and fourteen years of age a Fundamental Right to free and compulsory education. The State must provide this education in the manner determined by law.",
      mr: "कलम 21A नुसार सहा ते चौदा वर्षे वयोगटातील बालकांना मोफत आणि सक्तीच्या शिक्षणाचा मूलभूत अधिकार आहे. हे शिक्षण कायद्याने ठरविलेल्या पद्धतीने देण्याची जबाबदारी राज्याची आहे."
    },
    example: {
      en: `Suppose a child is eight years old and is within the age group covered by Article 21A. The constitutional provision requires the State to provide free and compulsory education to that child in accordance with the applicable legal framework.

For example, if a family is unable to afford the prescribed cost of elementary education, the constitutional framework is intended to ensure that a child in the six-to-fourteen age group is not denied the opportunity to receive education merely because of such financial circumstances.

Another important point is that Article 21A does not operate by prescribing every detail of the education system itself. The Constitution leaves the manner of implementation to be determined by law. The Right of Children to Free and Compulsory Education Act, 2009 provides the principal statutory framework for giving effect to this right.

Thus, Article 21A can be understood as the constitutional guarantee, while the legislation provides the detailed framework through which the guarantee is implemented.`,
      mr: `समजा एखादे मूल आठ वर्षांचे आहे आणि ते कलम 21A मध्ये नमूद केलेल्या वयोगटात येते. अशा मुलाला लागू असलेल्या कायदेशीर चौकटीप्रमाणे मोफत आणि सक्तीचे शिक्षण मिळावे, अशी घटनात्मक तरतूद कलम 21A करते.

उदाहरणार्थ, एखाद्या कुटुंबाला शिक्षणाचा आवश्यक खर्च परवडत नसेल, तर केवळ त्या आर्थिक परिस्थितीमुळे सहा ते चौदा वर्षे वयोगटातील मुलाला शिक्षणाच्या संधीपासून वंचित ठेवले जाऊ नये, हा या घटनात्मक अधिकाराचा मूलभूत उद्देश आहे.

कलम 21A शिक्षण व्यवस्थेतील प्रत्येक बाब स्वतः ठरवत नाही, हेही महत्त्वाचे आहे. शिक्षण कोणत्या पद्धतीने उपलब्ध करून द्यायचे हे कायद्याद्वारे ठरविण्याची तरतूद संविधानात आहे. या अधिकाराची अंमलबजावणी करण्यासाठी Right of Children to Free and Compulsory Education Act, 2009 हा महत्त्वाचा कायदेशीर आधार आहे.

म्हणून कलम 21A ला घटनात्मक हमी आणि संबंधित कायद्याला त्या हमीची अंमलबजावणी करणारी सविस्तर कायदेशीर चौकट असे समजता येते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 21A of the Indian Constitution?",
          content: "Article 21A is the constitutional provision dealing with the Right to Education. It requires the State to provide free and compulsory education to all children between six and fourteen years of age in the manner determined by law."
        },
        {
          heading: "What is the Right to Education under Article 21A?",
          content: "Article 21A makes the right to free and compulsory education for children aged six to fourteen years a Fundamental Right. It places a constitutional responsibility on the State to provide this education through the legal framework."
        },
        {
          heading: "Who is covered under Article 21A?",
          content: "Article 21A specifically covers children who are six to fourteen years of age. The constitutional text refers to all children within this age group."
        },
        {
          heading: "What does free education mean under Article 21A?",
          content: 'The term "free" relates to ensuring that a child covered by Article 21A can receive the prescribed education without financial barriers that would prevent access to elementary education. The detailed conditions and implementation are governed by the applicable law.'
        },
        {
          heading: "What does compulsory education mean under Article 21A?",
          content: 'The term "compulsory" reflects the responsibility of the State to ensure that children in the specified age group receive education within the legal framework. Article 21A therefore places an obligation on the State rather than treating education merely as an optional service.'
        },
        {
          heading: "When was Article 21A added to the Constitution?",
          content: "Article 21A was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002. The provision came into effect on 1 April 2010. The amendment made education for children in the six-to-fourteen age group part of the Fundamental Rights framework."
        },
        {
          heading: "What is the Right of Children to Free and Compulsory Education Act, 2009?",
          content: "The Right of Children to Free and Compulsory Education Act, 2009 is the principal legislation enacted to give effect to the constitutional requirement under Article 21A. The Act came into force on 1 April 2010."
        },
        {
          heading: "Article 21A and Article 45",
          content: "The Eighty-sixth Amendment also changed Article 45. The revised Article 45 directs the State to endeavour to provide early childhood care and education for all children until they complete the age of six years. This complements the age group covered by Article 21A."
        },
        {
          heading: "Article 21A and Article 51A(k)",
          content: "The Eighty-sixth Amendment added Article 51A(k), which concerns the fundamental duty of a parent or guardian to provide opportunities for education to their child or ward between six and fourteen years of age. This provision exists alongside the State obligation under Article 21A."
        },
        {
          heading: "Is Article 21A available to adults?",
          content: "Article 21A specifically concerns children between six and fourteen years of age. It should therefore not be described as a constitutional Fundamental Right under Article 21A for every age group."
        },
        {
          heading: "Why is Article 21A important?",
          content: "Article 21A is important because it places free and compulsory education for children aged six to fourteen within the Fundamental Rights framework. It provides a constitutional foundation for the State's responsibility to ensure access to education for children in the specified age group."
        },
        {
          heading: "Article 21A in simple words",
          content: "In simple terms, Article 21A means that every child between six and fourteen years of age has a constitutional right to free and compulsory education, with the manner of providing that education determined by law."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 21A म्हणजे काय?",
          content: "कलम 21A हे शिक्षणाच्या अधिकाराशी संबंधित घटनात्मक तरतूद आहे. सहा ते चौदा वर्षे वयोगटातील सर्व बालकांना कायद्याने ठरविलेल्या पद्धतीने मोफत आणि सक्तीचे शिक्षण देण्याची जबाबदारी या कलमाद्वारे राज्यावर ठेवण्यात आली आहे."
        },
        {
          heading: "कलम 21A अंतर्गत कोणती मुले येतात?",
          content: "कलम 21A विशेषतः सहा ते चौदा वर्षे वयोगटातील बालकांना लागू होते. संविधानातील या तरतुदीत या वयोगटातील सर्व बालकांचा उल्लेख आहे."
        },
        {
          heading: "कलम 21A मधील मोफत शिक्षण म्हणजे काय?",
          content: 'कलम 21A मधील "मोफत" या संकल्पनेचा संबंध बालकाला शिक्षण घेण्यापासून आर्थिक अडथळ्यांमुळे वंचित राहावे लागू नये याच्याशी आहे. याची सविस्तर अंमलबजावणी संबंधित कायदेशीर चौकटीद्वारे केली जाते.'
        },
        {
          heading: "कलम 21A मधील सक्तीचे शिक्षण म्हणजे काय?",
          content: "सक्तीचे शिक्षण म्हणजे निश्चित वयोगटातील बालकांना शिक्षण मिळेल याची खात्री करण्याची जबाबदारी राज्यावर असणे. त्यामुळे शिक्षण ही केवळ ऐच्छिक सरकारी सेवा न राहता घटनात्मक जबाबदारीच्या चौकटीत येते."
        },
        {
          heading: "कलम 21A संविधानात कधी समाविष्ट करण्यात आले?",
          content: "कलम 21A हे संविधानाच्या 86व्या घटनादुरुस्ती अधिनियम, 2002 द्वारे समाविष्ट करण्यात आले. हे कलम 1 एप्रिल 2010 पासून प्रभावी झाले. त्यामुळे सहा ते चौदा वर्षे वयोगटातील बालकांचे शिक्षण मूलभूत अधिकारांच्या चौकटीत आले."
        },
        {
          heading: "Right of Children to Free and Compulsory Education Act, 2009 म्हणजे काय?",
          content: "कलम 21A ची अंमलबजावणी करण्यासाठी संसदने Right of Children to Free and Compulsory Education Act, 2009 केला. हा कायदा 1 एप्रिल 2010 पासून लागू झाला आणि शिक्षणाच्या घटनात्मक अधिकारासाठी सविस्तर कायदेशीर चौकट उपलब्ध करून देतो."
        },
        {
          heading: "कलम 21A आणि कलम 45 यांचा संबंध",
          content: "86व्या घटनादुरुस्तीमुळे कलम 45 मध्येही बदल करण्यात आला. सुधारित कलम 45 नुसार सहा वर्षे पूर्ण होईपर्यंतच्या बालकांसाठी प्रारंभिक बालसंगोपन आणि शिक्षण उपलब्ध करून देण्यासाठी राज्याने प्रयत्न करावेत. त्यामुळे कलम 45 आणि कलम 21A वेगवेगळ्या वयोगटांशी संबंधित आहेत."
        },
        {
          heading: "कलम 21A आणि कलम 51A(k) यांचा संबंध",
          content: "86व्या घटनादुरुस्तीमुळे कलम 51A(k) समाविष्ट करण्यात आले. सहा ते चौदा वर्षे वयोगटातील मुलांना शिक्षणाच्या संधी उपलब्ध करून देणे हे पालक किंवा पालकत्व असलेल्या व्यक्तीच्या मूलभूत कर्तव्याशी ही तरतूद संबंधित आहे. हे कलम 21A मधील राज्याच्या जबाबदारीसोबत कार्य करते."
        },
        {
          heading: "कलम 21A प्रौढ व्यक्तींना लागू होते का?",
          content: "नाही. कलम 21A विशेषतः सहा ते चौदा वर्षे वयोगटातील बालकांच्या शिक्षणाशी संबंधित आहे. त्यामुळे प्रत्येक वयोगटासाठी कलम 21A अंतर्गत समान मूलभूत अधिकार असल्याचे म्हणणे योग्य नाही."
        },
        {
          heading: "कलम 21A चे महत्त्व काय आहे?",
          content: "कलम 21A महत्त्वाचे आहे कारण सहा ते चौदा वर्षे वयोगटातील बालकांसाठी मोफत आणि सक्तीचे शिक्षण मूलभूत अधिकारांच्या घटनात्मक चौकटीत आणले आहे. त्यामुळे या वयोगटातील बालकांना शिक्षण उपलब्ध करून देण्याची राज्याची जबाबदारी स्पष्ट होते."
        },
        {
          heading: "सोप्या भाषेत कलम 21A",
          content: "सोप्या भाषेत सांगायचे झाल्यास, सहा ते चौदा वर्षे वयोगटातील प्रत्येक बालकाला मोफत आणि सक्तीच्या शिक्षणाचा घटनात्मक अधिकार आहे आणि हे शिक्षण कोणत्या पद्धतीने दिले जाईल हे कायद्याद्वारे ठरवले जाते."
        }
      ]
    },
    keywords: [
      "Article 21A",
      "Article 21A Indian Constitution",
      "Right to Education",
      "Right to Education in India",
      "Article 21A explained",
      "Article 21A in Marathi",
      "Right to Education Fundamental Right",
      "free and compulsory education",
      "86th Constitutional Amendment",
      "RTE Act 2009",
      "कलम 21A",
      "कलम 21A भारतीय संविधान",
      "शिक्षणाचा अधिकार",
      "मोफत व सक्तीचे शिक्षण",
      "मूलभूत अधिकार शिक्षण"
    ],
    relatedIds: ["21", "45", "51A", "32"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "32",
    articleNumber: "Article 32",
    title: {
      en: "Right to Constitutional Remedies",
      mr: "घटनात्मक उपाययोजनांचा अधिकार"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: `Remedies for enforcement of rights conferred by this Part.—
(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.

(2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part.

(3) Without prejudice to the powers conferred on the Supreme Court by clauses (1) and (2), Parliament may by law empower any other court to exercise within the local limits of its jurisdiction all or any of the powers exercisable by the Supreme Court under clause (2).

(4) The right guaranteed by this article shall not be suspended except as otherwise provided for by this Constitution.`,
      mr: `या भागाने प्रदान केलेल्या अधिकारांच्या अंमलबजावणीसाठी उपाययोजना.—
(1) या भागाने प्रदान केलेल्या अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयाकडे दाद मागण्याचा अधिकार हमीपूर्वक प्रदान करण्यात आला आहे.

(2) या भागाने प्रदान केलेल्या कोणत्याही अधिकाराच्या अंमलबजावणीसाठी, योग्य वाटतील अशा निर्देश, आदेश किंवा रिट जारी करण्याचा अधिकार सर्वोच्च न्यायालयाला असेल. यामध्ये हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी यांच्या स्वरूपातील रिट्सचा समावेश होतो.

(3) खंड (1) आणि (2) द्वारे सर्वोच्च न्यायालयाला प्रदान केलेल्या अधिकारांना बाधा न आणता, संसद कायद्याद्वारे इतर कोणत्याही न्यायालयाला त्याच्या स्थानिक अधिकारक्षेत्रात खंड (2) अंतर्गत सर्वोच्च न्यायालयाला वापरता येणाऱ्या सर्व किंवा कोणत्याही अधिकारांचा वापर करण्यास सक्षम करू शकते.

(4) या अनुच्छेदाद्वारे हमी दिलेला अधिकार या संविधानात अन्यथा तरतूद केल्याशिवाय निलंबित केला जाणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 32 is a provision in Part III of the Indian Constitution that provides a constitutional remedy for the enforcement of Fundamental Rights.

It gives a person the right to approach the Supreme Court through appropriate proceedings when a Fundamental Right guaranteed by Part III needs to be enforced. Therefore, Article 32 is not merely about declaring Fundamental Rights; it provides a constitutional mechanism for seeking their enforcement.

Under Article 32(2), the Supreme Court can issue directions, orders and writs for the enforcement of Fundamental Rights. The Constitution specifically mentions five types of writs: habeas corpus, mandamus, prohibition, quo warranto and certiorari.

The five writs have different purposes. Habeas corpus is associated with protection against unlawful detention. Mandamus generally concerns the performance of a public legal duty. Prohibition is generally used to prevent a judicial or quasi-judicial authority from proceeding beyond its jurisdiction. Certiorari is generally concerned with reviewing the legality of proceedings or orders of a lower judicial or quasi-judicial authority. Quo warranto concerns the legal authority of a person to hold a public office.

Article 32(3) provides that Parliament may by law empower another court to exercise some or all of the powers that the Supreme Court can exercise under Article 32(2), within that court's local jurisdiction.

Article 32(4) states that the right guaranteed by Article 32 shall not be suspended except as otherwise provided by the Constitution.

Article 32 therefore creates an important constitutional connection between Fundamental Rights and judicial remedies for their enforcement.`,
      mr: `भारतीय संविधानाच्या भाग III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय उपलब्ध करून देणारा अनुच्छेद म्हणजे अनुच्छेद 32.

या अनुच्छेदामुळे Part III मध्ये हमी दिलेल्या मूलभूत अधिकारांची अंमलबजावणी करण्यासाठी व्यक्ती योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागू शकते. त्यामुळे मूलभूत अधिकार केवळ संविधानातील तरतुदी न राहता त्यांच्या अंमलबजावणीसाठी घटनात्मक न्यायालयीन उपाय देखील उपलब्ध होतो.

अनुच्छेद 32(2) नुसार सर्वोच्च न्यायालयाला मूलभूत अधिकारांच्या अंमलबजावणीसाठी निर्देश, आदेश आणि रिट जारी करण्याचा अधिकार आहे. संविधानात पाच रिट्सचा विशेष उल्लेख आहे: हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी.

या पाच रिट्सचे उद्देश वेगवेगळे आहेत. हेबियस कॉर्पसचा संबंध बेकायदेशीर ताब्यापासून संरक्षणाशी असतो. मँडमसचा संबंध सार्वजनिक कायदेशीर कर्तव्य पार पाडण्याच्या निर्देशाशी असतो. प्रोहिबिशनचा संबंध न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाला अधिकारक्षेत्राच्या पलीकडे कार्यवाही करण्यापासून रोखण्याशी असतो. सर्टिओरारीचा संबंध कनिष्ठ न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाच्या कार्यवाही किंवा आदेशाच्या कायदेशीरतेच्या परीक्षणाशी असतो. क्वो वॉरंटोचा संबंध एखाद्या व्यक्तीला सार्वजनिक पद धारण करण्याचा कायदेशीर अधिकार आहे का याच्या परीक्षणाशी असतो.

अनुच्छेद 32(3) नुसार संसद कायद्याद्वारे इतर न्यायालयांना त्यांच्या स्थानिक अधिकारक्षेत्रात अनुच्छेद 32(2) अंतर्गत सर्वोच्च न्यायालयाला उपलब्ध असलेल्या काही किंवा सर्व अधिकारांचा वापर करण्यास सक्षम करू शकते.

अनुच्छेद 32(4) नुसार संविधानात अन्यथा तरतूद केलेली नसल्यास या अनुच्छेदाद्वारे हमी दिलेला अधिकार निलंबित केला जाऊ शकत नाही.

त्यामुळे अनुच्छेद 32 हा मूलभूत अधिकार आणि त्यांच्या न्यायालयीन अंमलबजावणीमधील महत्त्वाचा घटनात्मक दुवा आहे.`
    },
    verySimple: {
      en: `Article 32 gives a constitutional right to approach the Supreme Court for enforcement of Fundamental Rights guaranteed by Part III of the Constitution.

The Supreme Court can issue appropriate directions, orders and writs, including habeas corpus, mandamus, prohibition, quo warranto and certiorari.`,
      mr: `अनुच्छेद 32 मुळे Part III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालयात दाद मागण्याचा घटनात्मक अधिकार मिळतो.

सर्वोच्च न्यायालय योग्य निर्देश, आदेश आणि हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी यांसारख्या रिट्स जारी करू शकते.`
    },
    example: {
      en: `Suppose a person's Fundamental Right guaranteed under Part III is violated through State action. The person may seek enforcement of that Fundamental Right through appropriate proceedings under Article 32 before the Supreme Court.

For example, where the circumstances involve unlawful detention and a Fundamental Right is affected, habeas corpus may become relevant. In another type of constitutional dispute, a different writ may be appropriate depending on the nature of the authority involved, the legal duty or jurisdictional issue, and the relief sought.

The important point is that Article 32 is specifically concerned with enforcement of Fundamental Rights guaranteed by Part III.`,
      mr: `समजा, राज्याच्या कृतीमुळे एखाद्या व्यक्तीच्या Part III अंतर्गत हमी दिलेल्या मूलभूत अधिकाराचा प्रश्न निर्माण झाला. अशा परिस्थितीत त्या अधिकाराच्या अंमलबजावणीसाठी व्यक्ती अनुच्छेद 32 अंतर्गत योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागू शकते.

उदाहरणार्थ, एखाद्या व्यक्तीला बेकायदेशीरपणे ताब्यात ठेवले असल्याचा आणि मूलभूत अधिकाराचा प्रश्न निर्माण झाल्यास परिस्थितीनुसार हेबियस कॉर्पस संबंधित ठरू शकतो. दुसऱ्या प्रकारच्या घटनात्मक प्रकरणात प्रकरणाच्या स्वरूपानुसार वेगळी रिट लागू होऊ शकते.

महत्त्वाचे म्हणजे अनुच्छेद 32 हा विशेषतः Part III मध्ये हमी दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीशी संबंधित आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 32 of the Indian Constitution?",
          content: `Article 32 provides a constitutional remedy for enforcement of Fundamental Rights contained in Part III of the Indian Constitution. It guarantees the right to move the Supreme Court through appropriate proceedings for enforcement of these rights.`
        },
        {
          heading: "Why is Article 32 called the Right to Constitutional Remedies?",
          content: `Article 32 is called the Right to Constitutional Remedies because it provides a constitutional mechanism for seeking judicial enforcement of Fundamental Rights. It connects the rights guaranteed by Part III with a constitutional remedy.`
        },
        {
          heading: "What does Article 32(1) provide?",
          content: `Article 32(1) guarantees the right to move the Supreme Court by appropriate proceedings for enforcement of the rights conferred by Part III of the Constitution.`
        },
        {
          heading: "What powers does the Supreme Court have under Article 32?",
          content: `Under Article 32(2), the Supreme Court has the power to issue directions, orders and writs for enforcement of Fundamental Rights. The Constitution specifically mentions five writs.`
        },
        {
          heading: "What are the five writs under Article 32?",
          content: `The five writs specifically mentioned in Article 32(2) are habeas corpus, mandamus, prohibition, quo warranto and certiorari. Each has a different legal purpose and its applicability depends on the facts and circumstances of the case.`
        },
        {
          heading: "What is Habeas Corpus?",
          content: `Habeas corpus is a judicial remedy associated with unlawful detention. It allows the court to examine the legality of a person's detention and is closely connected with protection of personal liberty.`
        },
        {
          heading: "What is Mandamus?",
          content: `Mandamus is a writ generally associated with directing a public authority or public official to perform a legal duty when the legal requirements for issuing the writ are satisfied.`
        },
        {
          heading: "What is Prohibition?",
          content: `Prohibition is generally used to prevent a judicial or quasi-judicial authority from continuing proceedings beyond its lawful jurisdiction. Its applicability depends on the nature of the proceedings and the legal circumstances.`
        },
        {
          heading: "What is Certiorari?",
          content: `Certiorari is generally associated with judicial review of the legality of proceedings or orders of a lower judicial or quasi-judicial authority. The availability of the writ depends on the circumstances and applicable law.`
        },
        {
          heading: "What is Quo Warranto?",
          content: `Quo warranto concerns the legal authority of a person to hold a public office. It allows the court to examine whether the person has the required legal authority to occupy that office.`
        },
        {
          heading: "Article 32 and Fundamental Rights",
          content: `Article 32 specifically concerns enforcement of Fundamental Rights guaranteed by Part III. It therefore operates as an important constitutional remedy connected with the protection of those rights.`
        },
        {
          heading: "Article 32 and Article 226",
          content: `Article 32 deals specifically with the Supreme Court's constitutional remedy for enforcement of Fundamental Rights. Article 226 gives High Courts constitutional writ jurisdiction. The two provisions have distinct constitutional scopes.`
        },
        {
          heading: "Who can approach the Supreme Court under Article 32?",
          content: `A person seeking enforcement of a Fundamental Right guaranteed by Part III may approach the Supreme Court through appropriate proceedings under Article 32. The appropriate proceeding and remedy depend on the facts and legal circumstances.`
        },
        {
          heading: "Why is Article 32 important?",
          content: `Article 32 is important because it provides a constitutional route for judicial enforcement of Fundamental Rights. It connects the rights guaranteed by Part III with an institutional remedy through the Supreme Court.`
        },
        {
          heading: "Article 32 in simple words",
          content: `In simple words, Article 32 provides a constitutional remedy for enforcing Fundamental Rights. Where enforcement of a Part III Fundamental Right is required, the Supreme Court can be approached through appropriate proceedings and may issue an appropriate constitutional remedy.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 32 म्हणजे काय?",
          content: `अनुच्छेद 32 हा Part III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय उपलब्ध करून देतो. या अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागण्याचा अधिकार या अनुच्छेदात दिला आहे.`
        },
        {
          heading: "अनुच्छेद 32 ला घटनात्मक उपाययोजनांचा अधिकार का म्हणतात?",
          content: `अनुच्छेद 32 ला घटनात्मक उपाययोजनांचा अधिकार म्हटले जाते कारण मूलभूत अधिकारांच्या न्यायालयीन अंमलबजावणीसाठी संविधान स्वतः एक उपाय उपलब्ध करून देते. त्यामुळे Part III मधील अधिकार आणि त्यांची अंमलबजावणी यांच्यात घटनात्मक दुवा निर्माण होतो.`
        },
        {
          heading: "अनुच्छेद 32(1) मध्ये काय तरतूद आहे?",
          content: `अनुच्छेद 32(1) नुसार Part III मध्ये प्रदान केलेल्या अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागण्याचा अधिकार हमीपूर्वक दिला आहे.`
        },
        {
          heading: "अनुच्छेद 32 अंतर्गत सर्वोच्च न्यायालयाला कोणते अधिकार आहेत?",
          content: `अनुच्छेद 32(2) नुसार मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालय निर्देश, आदेश आणि रिट जारी करू शकते. संविधानात पाच रिट्सचा विशेष उल्लेख आहे.`
        },
        {
          heading: "अनुच्छेद 32 मध्ये नमूद केलेल्या पाच रिट्स कोणत्या?",
          content: `अनुच्छेद 32(2) मध्ये हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी या पाच रिट्सचा उल्लेख आहे. प्रत्येक रिटचा उद्देश वेगळा असून तिची लागू शक्यता प्रकरणाच्या तथ्यांवर आणि परिस्थितीवर अवलंबून असते.`
        },
        {
          heading: "हेबियस कॉर्पस म्हणजे काय?",
          content: `हेबियस कॉर्पस ही रिट प्रामुख्याने बेकायदेशीर ताबा किंवा अटकेच्या परिस्थितीशी संबंधित असते. न्यायालयाला व्यक्तीच्या ताब्याची कायदेशीरता तपासण्याची संधी या उपायामुळे मिळते.`
        },
        {
          heading: "मँडमस म्हणजे काय?",
          content: `मँडमस ही रिट सामान्यतः सार्वजनिक प्राधिकरण किंवा अधिकाऱ्याला त्याच्यावर असलेले कायदेशीर कर्तव्य पार पाडण्याबाबत निर्देश देण्याशी संबंधित असते, जेव्हा त्यासाठी आवश्यक कायदेशीर अटी पूर्ण होतात.`
        },
        {
          heading: "प्रोहिबिशन म्हणजे काय?",
          content: `प्रोहिबिशनचा संबंध न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाला त्याच्या कायदेशीर अधिकारक्षेत्राच्या पलीकडे कार्यवाही पुढे सुरू ठेवण्यापासून रोखण्याशी असतो. त्याची लागू शक्यता प्रकरणाच्या स्वरूपावर आणि कायदेशीर परिस्थितीवर अवलंबून असते.`
        },
        {
          heading: "सर्टिओरारी म्हणजे काय?",
          content: `सर्टिओरारीचा संबंध कनिष्ठ न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाच्या कार्यवाही किंवा आदेशाच्या कायदेशीरतेच्या न्यायालयीन परीक्षणाशी असतो. ही रिट लागू होईल की नाही हे प्रकरणातील परिस्थिती आणि लागू कायद्यावर अवलंबून असते.`
        },
        {
          heading: "क्वो वॉरंटो म्हणजे काय?",
          content: `क्वो वॉरंटोचा संबंध एखाद्या व्यक्तीला सार्वजनिक पद धारण करण्याचा कायदेशीर अधिकार आहे का याच्या परीक्षणाशी असतो. न्यायालय संबंधित व्यक्तीला ते पद धारण करण्याचा आवश्यक कायदेशीर अधिकार आहे का हे तपासू शकते.`
        },
        {
          heading: "अनुच्छेद 32 आणि मूलभूत अधिकार",
          content: `अनुच्छेद 32 हा Part III मध्ये हमी दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीशी थेट संबंधित आहे. त्यामुळे मूलभूत अधिकारांच्या संरक्षणासाठी हा एक महत्त्वाचा घटनात्मक उपाय आहे.`
        },
        {
          heading: "अनुच्छेद 32 आणि अनुच्छेद 226 मधील फरक",
          content: `अनुच्छेद 32 हा सर्वोच्च न्यायालयाकडून मूलभूत अधिकारांच्या अंमलबजावणीसाठी उपलब्ध असलेल्या घटनात्मक उपायाशी संबंधित आहे. अनुच्छेद 226 अंतर्गत उच्च न्यायालयांना घटनात्मक रिट अधिकारक्षेत्र आहे. दोन्ही तरतुदींचा घटनात्मक आवाका वेगळा आहे.`
        },
        {
          heading: "अनुच्छेद 32 अंतर्गत सर्वोच्च न्यायालयात कोण जाऊ शकते?",
          content: `Part III मध्ये हमी दिलेल्या मूलभूत अधिकाराच्या अंमलबजावणीसाठी संबंधित व्यक्ती अनुच्छेद 32 अंतर्गत योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागू शकते. कोणती प्रक्रिया किंवा उपाय योग्य आहे हे प्रकरणाच्या तथ्यांवर आणि लागू कायद्यावर अवलंबून असते.`
        },
        {
          heading: "अनुच्छेद 32 चे महत्त्व काय आहे?",
          content: `अनुच्छेद 32 महत्त्वाचा आहे कारण तो मूलभूत अधिकारांच्या न्यायालयीन अंमलबजावणीसाठी घटनात्मक मार्ग उपलब्ध करून देतो. Part III मधील अधिकारांना सर्वोच्च न्यायालयातील घटनात्मक उपायाशी जोडणारी ही महत्त्वाची तरतूद आहे.`
        },
        {
          heading: "सोप्या भाषेत अनुच्छेद 32",
          content: `सोप्या भाषेत सांगायचे झाल्यास, अनुच्छेद 32 मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय देतो. Part III मधील मूलभूत अधिकाराची अंमलबजावणी आवश्यक असल्यास योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागता येते.`
        }
      ]
    },
    keywords: [
      "Article 32",
      "Article 32 Indian Constitution",
      "Right to Constitutional Remedies",
      "Article 32 explained",
      "Article 32 writs",
      "Article 32 Supreme Court",
      "Fundamental Rights remedies",
      "Habeas Corpus",
      "Mandamus",
      "Prohibition",
      "Quo Warranto",
      "Certiorari",
      "Article 32 in Marathi",
      "कलम 32",
      "कलम 32 भारतीय संविधान",
      "घटनात्मक उपाययोजनांचा अधिकार",
      "मूलभूत अधिकारांचे उपाय",
      "सर्वोच्च न्यायालय रिट"
    ],
    relatedIds: ["21", "21A", "226", "14", "19"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "5",
    articleNumber: "Article 5",
    title: {
      en: "Citizenship at the Commencement of the Constitution",
      mr: "संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व"
    },
    categoryKey: "citizenship",
    officialText: {
      en: `Citizenship at the commencement of the Constitution.—At the commencement of this Constitution, every person who has his domicile in the territory of India and—

(a) who was born in the territory of India; or

(b) either of whose parents was born in the territory of India; or

(c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement,

shall be a citizen of India.`,
      mr: `संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व.—या संविधानाच्या प्रारंभाच्या वेळी, ज्याचे भारताच्या राज्यक्षेत्रात अधिवास आहे आणि—

(क) ज्याचा जन्म भारताच्या राज्यक्षेत्रात झाला आहे; किंवा

(ख) ज्याच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारताच्या राज्यक्षेत्रात झाला आहे; किंवा

(ग) जो संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे भारताच्या राज्यक्षेत्रात सर्वसाधारणपणे वास्तव्यास होता,

अशी प्रत्येक व्यक्ती भारताची नागरिक असेल.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 5 is the first provision in Part II of the Indian Constitution, which deals with citizenship. It establishes the constitutional conditions for determining who would be recognised as a citizen of India at the commencement of the Constitution.

The provision is specifically concerned with the commencement of the Constitution. It therefore has a historical and constitutional context connected with the beginning of the Constitution rather than functioning as a complete set of rules for acquiring Indian citizenship today.

Article 5 requires a person to have domicile in the territory of India. In addition to domicile, the provision provides three alternative conditions. A person could qualify if the person was born in the territory of India, if either parent was born in the territory of India, or if the person had been ordinarily resident in the territory of India for at least five years immediately before the commencement of the Constitution.

The three conditions in clauses (a), (b) and (c) are alternatives. Therefore, the constitutional text does not require all three conditions to be satisfied together. The central requirement is domicile in India along with any one of the specified conditions.

Article 5 should also be read in the context of Articles 6 to 11. Article 6 deals with certain persons who migrated to India from the territory then included in Pakistan, while Article 7 deals with certain persons who migrated from India to the territory then included in Pakistan. Article 8 concerns certain persons of Indian origin residing outside India. Articles 9, 10 and 11 deal with foreign citizenship, continuance of citizenship and Parliament's power to regulate citizenship by law.

Article 5 is therefore important for understanding the constitutional framework of citizenship at the time the Constitution commenced. It sets out the initial constitutional criteria based on domicile, birth, parentage or residence.`,
      mr: `भारतीय संविधानाच्या भाग II मध्ये नागरिकत्वाशी संबंधित तरतुदी आहेत आणि अनुच्छेद 5 हा या भागातील पहिला अनुच्छेद आहे. संविधानाच्या प्रारंभाच्या वेळी कोणत्या व्यक्तींना भारताचे नागरिक मानले जाईल यासाठी हा अनुच्छेद घटनात्मक निकष सांगतो.

अनुच्छेद 5 चा संदर्भ विशेषतः संविधानाच्या प्रारंभाशी संबंधित आहे. त्यामुळे हा अनुच्छेद भारताचे नागरिकत्व मिळवण्याच्या आजच्या संपूर्ण प्रक्रियेचा एकमेव नियम नाही. त्याचा मुख्य संबंध संविधान लागू होताना नागरिकत्व निश्चित करण्याशी आहे.

या अनुच्छेदानुसार संबंधित व्यक्तीचा भारताच्या राज्यक्षेत्रात अधिवास असणे आवश्यक आहे. त्यासोबत तीनपैकी कोणतीही एक अट पूर्ण झालेली असू शकते. व्यक्तीचा जन्म भारताच्या राज्यक्षेत्रात झालेला असेल, किंवा तिच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारताच्या राज्यक्षेत्रात झालेला असेल, किंवा संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे ती भारतात सर्वसाधारणपणे वास्तव्यास असेल.

खंड (क), (ख) आणि (ग) मधील अटी पर्यायी स्वरूपाच्या आहेत. म्हणजेच या सर्व अटी एकाच वेळी पूर्ण करणे आवश्यक नाही. भारतातील अधिवासासोबत नमूद केलेल्या अटींपैकी कोणतीही एक अट लागू होऊ शकते.

अनुच्छेद 5 समजून घेताना अनुच्छेद 6 ते 11 देखील महत्त्वाचे आहेत. अनुच्छेद 6 पाकिस्तानमधून भारतात स्थलांतरित झालेल्या काही व्यक्तींच्या नागरिकत्वाशी संबंधित आहे. अनुच्छेद 7 भारतातून पाकिस्तानात स्थलांतरित झालेल्या काही व्यक्तींशी संबंधित आहे. अनुच्छेद 8 भारताबाहेर राहणाऱ्या भारतीय वंशाच्या काही व्यक्तींबाबत आहे. अनुच्छेद 9, 10 आणि 11 अनुक्रमे परदेशी नागरिकत्व, नागरिकत्वाचे सातत्य आणि नागरिकत्वाबाबत कायदे करण्याच्या संसदेच्या अधिकाराशी संबंधित आहेत.

त्यामुळे अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी भारताचे नागरिकत्व कोणत्या घटनात्मक निकषांवर ठरवले गेले हे समजून घेण्यासाठी महत्त्वाचा आहे.`
    },
    verySimple: {
      en: `Article 5 explains who would be considered a citizen of India when the Constitution commenced.

A person had to have domicile in India and satisfy at least one of these conditions: birth in India, birth of either parent in India, or ordinary residence in India for at least five years immediately before the commencement of the Constitution.`,
      mr: `अनुच्छेद 5 संविधानाच्या प्रारंभाच्या वेळी कोणाला भारताचा नागरिक मानले जाईल हे स्पष्ट करतो.

व्यक्तीचा भारतात अधिवास असणे आणि जन्म, आई-वडिलांचा जन्म किंवा संविधानाच्या प्रारंभापूर्वी किमान पाच वर्षांचा सामान्य रहिवास यापैकी कोणतीही एक अट पूर्ण असणे आवश्यक होते.`
    },
    example: {
      en: `Suppose a person was domiciled in India when the Constitution commenced. If that person was born in India, the birth condition under Article 5 could be satisfied.

Similarly, if a person had domicile in India and either of the person's parents had been born in India, the parentage condition could apply.

Another person could qualify through the residence condition if the person had domicile in India and had been ordinarily resident in India for at least five years immediately before the commencement of the Constitution.

These examples illustrate that the Constitution provided alternative constitutional conditions in Article 5. The provision must be understood in its historical context and together with the other citizenship provisions in Part II.`,
      mr: `समजा, संविधानाच्या प्रारंभाच्या वेळी एखाद्या व्यक्तीचा भारतात अधिवास होता आणि तिचा जन्म भारताच्या राज्यक्षेत्रात झाला होता. अशा परिस्थितीत अनुच्छेद 5 मधील जन्माशी संबंधित अट लागू होऊ शकते.

दुसऱ्या उदाहरणात, व्यक्तीचा भारतात अधिवास असेल आणि तिच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारतात झाला असेल, तर पालकाच्या जन्माशी संबंधित अट लागू होऊ शकते.

तिसऱ्या उदाहरणात, व्यक्तीचा भारतात अधिवास असेल आणि संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे ती भारतात सर्वसाधारणपणे वास्तव्यास असेल, तर रहिवासाशी संबंधित अट लागू होऊ शकते.

या उदाहरणांवरून स्पष्ट होते की अनुच्छेद 5 मध्ये पर्यायी घटनात्मक अटी देण्यात आल्या होत्या. हा अनुच्छेद त्याच्या ऐतिहासिक संदर्भात आणि नागरिकत्वावरील भाग II मधील इतर तरतुदींसोबत समजून घेणे आवश्यक आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 5 of the Indian Constitution?",
          content: `Article 5 deals with citizenship at the commencement of the Constitution. It provides the constitutional conditions under which a person would be recognised as a citizen of India when the Constitution commenced.`
        },
        {
          heading: "Which Part of the Constitution contains Article 5?",
          content: `Article 5 is contained in Part II of the Indian Constitution, which deals with Citizenship. Articles 5 to 11 form the constitutional provisions in this Part concerning citizenship.`
        },
        {
          heading: "What is the main purpose of Article 5?",
          content: `The main purpose of Article 5 is to establish the initial constitutional criteria for citizenship at the commencement of the Constitution. It considers domicile in India together with birth, parentage or ordinary residence.`
        },
        {
          heading: "What is domicile under Article 5?",
          content: `Article 5 requires the person to have domicile in the territory of India. In the context of Article 5, domicile is a significant constitutional requirement and is considered together with one of the alternative conditions specified in clauses (a), (b) or (c).`
        },
        {
          heading: "What are the conditions under Article 5?",
          content: `Article 5 provides three alternative conditions in addition to domicile in India. The person could qualify if they were born in India, if either parent was born in India, or if they had been ordinarily resident in India for at least five years immediately before the commencement of the Constitution.`
        },
        {
          heading: "Does Article 5 require all three conditions?",
          content: `No. The conditions in clauses (a), (b) and (c) are alternatives. The constitutional text uses "or" between them. Therefore, satisfying one of the specified conditions along with the domicile requirement was sufficient under Article 5.`
        },
        {
          heading: "Article 5 and birth in India",
          content: `Article 5 recognises birth in the territory of India as one of the alternative conditions for citizenship at the commencement of the Constitution, provided the person also had domicile in the territory of India.`
        },
        {
          heading: "Article 5 and parents born in India",
          content: `Under Article 5, a person could qualify if either of their parents was born in the territory of India, together with the requirement of domicile in India at the commencement of the Constitution.`
        },
        {
          heading: "Article 5 and five years residence",
          content: `Article 5 also provides an alternative based on ordinary residence. A person with domicile in India could qualify if they had been ordinarily resident in the territory of India for not less than five years immediately preceding the commencement of the Constitution.`
        },
        {
          heading: "Article 5 and Articles 6 to 8",
          content: `Article 5 should be read together with Articles 6, 7 and 8. These provisions address different historical citizenship situations, including certain persons who migrated between India and Pakistan and certain persons of Indian origin residing outside India.`
        },
        {
          heading: "Is Article 5 the current citizenship law?",
          content: `Article 5 is a constitutional provision concerning citizenship at the commencement of the Constitution. It should not be treated as the complete present-day procedure for acquiring Indian citizenship. Article 11 specifically recognises Parliament's power to make laws concerning acquisition and termination of citizenship and related matters.`
        },
        {
          heading: "Article 5 and Parliament",
          content: `Article 11 provides that Parliament has the power to make provisions relating to acquisition and termination of citizenship and other citizenship matters. Therefore, Article 5 forms part of the initial constitutional citizenship framework, while later citizenship law is also governed by legislation made by Parliament.`
        },
        {
          heading: "Why is Article 5 important?",
          content: `Article 5 is important because it establishes the constitutional starting point for citizenship at the commencement of the Constitution. It helps explain how the Constitution initially identified Indian citizens using domicile, birth, parentage and residence criteria.`
        },
        {
          heading: "Article 5 in simple words",
          content: `In simple words, Article 5 explains who would be recognised as an Indian citizen when the Constitution commenced. A person needed domicile in India and had to satisfy one of the specified conditions relating to birth, parentage or residence.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 5 म्हणजे काय?",
          content: `अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी नागरिकत्वाशी संबंधित आहे. संविधान लागू होताना कोणत्या घटनात्मक अटी पूर्ण करणाऱ्या व्यक्तीला भारताचा नागरिक मानले जाईल हे या अनुच्छेदातून स्पष्ट होते.`
        },
        {
          heading: "अनुच्छेद 5 संविधानाच्या कोणत्या भागात आहे?",
          content: `अनुच्छेद 5 हा भारतीय संविधानाच्या भाग II मध्ये आहे. भाग II मध्ये नागरिकत्वाशी संबंधित अनुच्छेद 5 ते 11 या तरतुदी आहेत.`
        },
        {
          heading: "अनुच्छेद 5 चा मुख्य उद्देश काय आहे?",
          content: `अनुच्छेद 5 चा मुख्य उद्देश संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व ठरवण्यासाठी घटनात्मक निकष निश्चित करणे हा आहे. यात भारतातील अधिवासासोबत जन्म, पालकांचा जन्म किंवा सर्वसाधारण रहिवास यांचा विचार केला आहे.`
        },
        {
          heading: "अनुच्छेद 5 मधील अधिवास म्हणजे काय?",
          content: `अनुच्छेद 5 नुसार संबंधित व्यक्तीचा भारताच्या राज्यक्षेत्रात अधिवास असणे आवश्यक आहे. या अधिवासाच्या अटीसोबत खंड (क), (ख) किंवा (ग) मधील नमूद केलेल्या पर्यायी अटींपैकी एक अट लागू होते.`
        },
        {
          heading: "अनुच्छेद 5 अंतर्गत कोणत्या अटी आहेत?",
          content: `अनुच्छेद 5 मध्ये भारतातील अधिवासासोबत तीन पर्यायी अटी दिल्या आहेत. व्यक्तीचा भारतात जन्म झालेला असणे, तिच्या आई-वडिलांपैकी कोणत्याही एकाचा भारतात जन्म झालेला असणे किंवा संविधानाच्या प्रारंभापूर्वी किमान पाच वर्षे भारतात सर्वसाधारणपणे वास्तव्यास असणे यापैकी कोणतीही एक अट लागू होऊ शकते.`
        },
        {
          heading: "अनुच्छेद 5 मधील सर्व अटी पूर्ण करणे आवश्यक आहे का?",
          content: `नाही. खंड (क), (ख) आणि (ग) मधील अटी पर्यायी आहेत. संविधानातील मजकुरात या अटींमध्ये "or" म्हणजे "किंवा" वापरले आहे. त्यामुळे अधिवासाची अट पूर्ण करून नमूद केलेल्या पर्यायांपैकी एक अट पूर्ण होणे पुरेसे होते.`
        },
        {
          heading: "अनुच्छेद 5 आणि भारतात जन्म",
          content: `संविधानाच्या प्रारंभाच्या वेळी भारताच्या राज्यक्षेत्रात जन्म झालेला असणे ही अनुच्छेद 5 मधील नागरिकत्वासाठी दिलेल्या पर्यायी अटींपैकी एक आहे. यासोबत भारतातील अधिवासाची अट देखील लागू होती.`
        },
        {
          heading: "अनुच्छेद 5 आणि आई-वडिलांचा भारतातील जन्म",
          content: `अनुच्छेद 5 नुसार व्यक्तीच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारताच्या राज्यक्षेत्रात झालेला असल्यास, भारतातील अधिवासाच्या अटीसोबत ही नागरिकत्वासाठीची पर्यायी अट लागू होऊ शकते.`
        },
        {
          heading: "अनुच्छेद 5 आणि पाच वर्षांचा रहिवास",
          content: `अनुच्छेद 5 मध्ये सर्वसाधारण रहिवासावर आधारित पर्याय देखील आहे. संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे भारताच्या राज्यक्षेत्रात सर्वसाधारणपणे वास्तव्यास असलेली आणि भारतात अधिवास असलेली व्यक्ती या अटीअंतर्गत पात्र ठरू शकत होती.`
        },
        {
          heading: "अनुच्छेद 5 आणि अनुच्छेद 6 ते 8",
          content: `अनुच्छेद 5 हा अनुच्छेद 6, 7 आणि 8 सोबत वाचणे महत्त्वाचे आहे. या तरतुदींमध्ये भारत-पाकिस्तान स्थलांतराशी संबंधित काही व्यक्ती आणि भारताबाहेर राहणाऱ्या भारतीय वंशाच्या काही व्यक्तींच्या नागरिकत्वाबाबत स्वतंत्र घटनात्मक तरतुदी आहेत.`
        },
        {
          heading: "अनुच्छेद 5 हा आजचा नागरिकत्वाचा संपूर्ण कायदा आहे का?",
          content: `अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी नागरिकत्वाशी संबंधित घटनात्मक तरतूद आहे. आज भारताचे नागरिकत्व मिळवण्याची संपूर्ण प्रक्रिया फक्त अनुच्छेद 5 वर आधारित आहे असे म्हणणे योग्य नाही. अनुच्छेद 11 संसदेला नागरिकत्वाच्या संपादन आणि समाप्तीबाबत कायदे करण्याचा अधिकार देतो.`
        },
        {
          heading: "अनुच्छेद 5 आणि संसद",
          content: `अनुच्छेद 11 नुसार नागरिकत्वाचे संपादन, समाप्ती आणि संबंधित इतर बाबींवर संसद कायदे करू शकते. त्यामुळे अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळच्या नागरिकत्वाच्या घटनात्मक चौकटीचा भाग आहे, तर पुढील नागरिकत्वविषयक कायदे संसदेने केलेल्या कायद्यांद्वारे नियंत्रित होतात.`
        },
        {
          heading: "अनुच्छेद 5 चे महत्त्व काय आहे?",
          content: `अनुच्छेद 5 महत्त्वाचा आहे कारण तो संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व निश्चित करण्यासाठीची घटनात्मक सुरुवात स्पष्ट करतो. अधिवास, जन्म, पालकांचा जन्म आणि रहिवास या निकषांचा नागरिकत्वाशी असलेला संबंध समजून घेण्यासाठी हा अनुच्छेद महत्त्वाचा आहे.`
        },
        {
          heading: "सोप्या भाषेत अनुच्छेद 5",
          content: `सोप्या भाषेत सांगायचे झाल्यास, संविधान लागू होताना कोणाला भारताचा नागरिक मानले जाईल हे अनुच्छेद 5 स्पष्ट करतो. व्यक्तीचा भारतात अधिवास असणे आणि जन्म, पालकांचा जन्म किंवा रहिवास यापैकी संविधानात नमूद केलेली एक अट पूर्ण असणे आवश्यक होते.`
        }
      ]
    },
    keywords: [
      "Article 5",
      "Article 5 Indian Constitution",
      "Article 5 explained",
      "Citizenship at commencement of Constitution",
      "Article 5 citizenship",
      "Indian citizenship Article 5",
      "Article 5 in Marathi",
      "Part II Citizenship",
      "Constitutional citizenship",
      "Domicile Article 5",
      "कलम 5",
      "कलम 5 भारतीय संविधान",
      "संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व",
      "भारतीय नागरिकत्व",
      "नागरिकत्व कलम 5",
      "भाग 2 नागरिकत्व",
      "अधिवास आणि नागरिकत्व"
    ],
    relatedIds: ["6", "7", "8", "9", "10", "11"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "79",
    articleNumber: "Article 79",
    title: {
      en: "Constitution of Parliament",
      mr: "संसदेची रचना"
    },
    categoryKey: "parliament",
    officialText: {
      en: `Constitution of Parliament.—There shall be a Parliament for the Union which shall consist of the President and two Houses to be known respectively as the Council of States and the House of the People.`,
      mr: `संसदेची रचना.—संघासाठी एक संसद असेल आणि ती राष्ट्रपती आणि अनुक्रमे राज्यसभा आणि लोकसभा म्हणून ओळखल्या जाणाऱ्या दोन सभागृहांची मिळून बनलेली असेल.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 79 is the first provision in Chapter II of Part V of the Indian Constitution dealing with Parliament. It establishes the constitutional structure of Parliament for the Union.

According to Article 79, Parliament consists of three constitutional components: the President, the Council of States and the House of the People. The Council of States is commonly known as the Rajya Sabha, while the House of the People is commonly known as the Lok Sabha.

Article 79 is therefore important because it defines the constitutional composition of the Union Parliament. It does not by itself describe the detailed composition, membership, elections or functioning of each House. Those matters are addressed by subsequent constitutional provisions and laws.

Article 80 deals with the composition of the Council of States. Article 81 deals with the composition of the House of the People. Other provisions in Part V deal with matters such as the duration of Houses, qualifications and disqualifications of members, parliamentary privileges, legislative procedure and other aspects of Parliament.

The President is included as a component of Parliament under Article 79. This does not mean that the President is a member of either House. Rather, Article 79 constitutionally identifies the President together with the two Houses as constituting the Parliament of the Union.

The two Houses have different constitutional roles and structures. The Rajya Sabha represents the States and Union territories within the constitutional framework, while the Lok Sabha is the House of the People. Their detailed composition and representation are provided in Articles 80 and 81.

Article 79 therefore provides the basic constitutional foundation for understanding the Parliament of India and how the Union legislature is constitutionally organised.`,
      mr: `अनुच्छेद 79 हा भारतीय संविधानाच्या भाग V मधील अध्याय II मध्ये येतो. हा अध्याय संसदेशी संबंधित आहे. अनुच्छेद 79 संघासाठी संसदेची मूलभूत घटनात्मक रचना स्पष्ट करतो.

अनुच्छेद 79 नुसार संसद तीन घटनात्मक घटकांनी बनलेली आहे: राष्ट्रपती, राज्यसभा आणि लोकसभा. राज्यसभेला Council of States आणि लोकसभेला House of the People असे संविधानात संबोधले आहे.

या अनुच्छेदाचे महत्त्व असे आहे की तो संघाच्या संसदेची घटनात्मक रचना स्पष्ट करतो. मात्र, प्रत्येक सभागृहातील सदस्यसंख्या, निवडणूक, प्रतिनिधित्व किंवा कार्यपद्धती यांचा सविस्तर तपशील केवळ अनुच्छेद 79 मध्ये दिलेला नाही. त्यासाठी संविधानातील पुढील अनुच्छेद आणि संबंधित कायदे पाहावे लागतात.

अनुच्छेद 80 मध्ये राज्यसभेच्या रचनेबाबत तरतूद आहे, तर अनुच्छेद 81 मध्ये लोकसभेच्या रचनेबाबत तरतूद आहे. संसदेसंबंधी इतर तरतुदींमध्ये सभागृहांचा कालावधी, सदस्यांची पात्रता व अपात्रता, संसदीय विशेषाधिकार, विधेयकांची प्रक्रिया आणि संसदेच्या कामकाजाशी संबंधित विविध बाबींचा समावेश होतो.

अनुच्छेद 79 मध्ये राष्ट्रपतींचा संसदेच्या घटक म्हणून समावेश केला आहे. याचा अर्थ राष्ट्रपती हे राज्यसभा किंवा लोकसभेचे सदस्य आहेत असा होत नाही. संविधानाच्या दृष्टीने राष्ट्रपती आणि दोन्ही सभागृहे मिळून संघाची संसद बनते, अशी या अनुच्छेदाची रचना आहे.

राज्यसभा आणि लोकसभा यांची घटनात्मक भूमिका आणि रचना वेगवेगळी आहे. राज्यसभा ही राज्ये आणि संघराज्यक्षेत्रांच्या प्रतिनिधित्वाशी संबंधित आहे, तर लोकसभा हे जनतेचे सभागृह आहे. या दोन्ही सभागृहांची सविस्तर रचना अनुच्छेद 80 आणि 81 मध्ये दिली आहे.

त्यामुळे भारताच्या संसदेची मूलभूत घटनात्मक रचना समजून घेण्यासाठी अनुच्छेद 79 हा महत्त्वाचा प्रारंभिक अनुच्छेद आहे.`
    },
    verySimple: {
      en: `Article 79 defines the constitutional structure of the Parliament of India.

It provides that the Parliament of the Union consists of the President, the Council of States (Rajya Sabha) and the House of the People (Lok Sabha).`,
      mr: `अनुच्छेद 79 भारताच्या संसदेची मूलभूत घटनात्मक रचना स्पष्ट करतो.

संघाची संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या तीन घटनात्मक घटकांनी बनलेली आहे.`
    },
    example: {
      en: `Suppose we want to understand what constitutes the Parliament of India at the constitutional level. Article 79 provides the starting point: Parliament consists of the President and two Houses.

The first House is the Council of States, commonly called the Rajya Sabha. The second is the House of the People, commonly called the Lok Sabha.

For example, when studying how the Rajya Sabha is constituted, Article 80 provides the relevant constitutional details. When studying the composition of the Lok Sabha, Article 81 provides the relevant provision.

Therefore, Article 79 gives the basic constitutional structure, while subsequent provisions provide more detailed rules concerning the two Houses and parliamentary functioning.`,
      mr: `भारताची संसद घटनात्मकदृष्ट्या कशापासून बनते हे समजून घ्यायचे असल्यास अनुच्छेद 79 हा सुरुवातीचा आधार देतो. या अनुच्छेदानुसार संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली आहे.

पहिले सभागृह म्हणजे Council of States, ज्याला सामान्यतः राज्यसभा म्हटले जाते. दुसरे सभागृह म्हणजे House of the People, ज्याला सामान्यतः लोकसभा म्हटले जाते.

उदाहरणार्थ, राज्यसभेची रचना समजून घेण्यासाठी अनुच्छेद 80 पाहावा लागतो. त्याचप्रमाणे लोकसभेची रचना समजून घेण्यासाठी अनुच्छेद 81 महत्त्वाचा आहे.

म्हणून अनुच्छेद 79 संसदेची मूलभूत घटनात्मक रचना सांगतो, तर पुढील अनुच्छेद दोन्ही सभागृहांची रचना आणि संसदेच्या कामकाजाशी संबंधित अधिक सविस्तर तरतुदी देतात.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 79 of the Indian Constitution?",
          content: `Article 79 defines the constitutional structure of the Parliament of India. It provides that the Parliament for the Union consists of the President and two Houses known as the Council of States and the House of the People.`
        },
        {
          heading: "What does Article 79 say?",
          content: `Article 79 states that there shall be a Parliament for the Union consisting of the President and two Houses. These Houses are constitutionally known as the Council of States and the House of the People.`
        },
        {
          heading: "Which Part contains Article 79?",
          content: `Article 79 is contained in Part V of the Constitution, which deals with the Union. It appears in Chapter II, which deals with Parliament.`
        },
        {
          heading: "What are the three components of Parliament?",
          content: `Under Article 79, Parliament consists of the President, the Council of States and the House of the People. The Council of States is commonly known as the Rajya Sabha and the House of the People as the Lok Sabha.`
        },
        {
          heading: "Is the President part of Parliament under Article 79?",
          content: `Yes. Article 79 expressly includes the President as a component of the Parliament of the Union. This constitutional inclusion does not mean that the President is a member of either House.`
        },
        {
          heading: "What is the Council of States?",
          content: `The Council of States is the constitutional name of the Rajya Sabha. Its detailed composition is provided under Article 80 of the Constitution.`
        },
        {
          heading: "What is the House of the People?",
          content: `The House of the People is the constitutional name of the Lok Sabha. Its composition is dealt with under Article 81 of the Constitution.`
        },
        {
          heading: "Article 79 and Rajya Sabha",
          content: `Article 79 identifies the Council of States as one of the two Houses of Parliament. Article 80 provides the detailed constitutional provisions concerning its composition.`
        },
        {
          heading: "Article 79 and Lok Sabha",
          content: `Article 79 identifies the House of the People as the second House of Parliament. Article 81 provides the detailed constitutional provision concerning its composition.`
        },
        {
          heading: "Article 79 and Article 80",
          content: `Article 79 establishes the basic constitutional structure of Parliament, while Article 80 deals with the composition of the Council of States. Reading these provisions together helps explain the constitutional structure of Parliament.`
        },
        {
          heading: "Article 79 and Article 81",
          content: `Article 79 establishes Parliament as consisting of the President and two Houses. Article 81 deals specifically with the composition of the House of the People.`
        },
        {
          heading: "Does Article 79 explain how Parliament functions?",
          content: `Article 79 primarily establishes the constitutional composition of Parliament. Detailed provisions concerning membership, qualifications, privileges, legislative procedure and other parliamentary matters are contained in subsequent constitutional provisions and laws.`
        },
        {
          heading: "Why is Article 79 important?",
          content: `Article 79 is important because it provides the constitutional starting point for understanding the Parliament of India. It identifies the President, Rajya Sabha and Lok Sabha as the components of the Union Parliament.`
        },
        {
          heading: "Article 79 in simple words",
          content: `In simple words, Article 79 tells us what constitutes the Parliament of India. The Parliament of the Union consists of the President, Rajya Sabha and Lok Sabha.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 79 म्हणजे काय?",
          content: `अनुच्छेद 79 भारताच्या संसदेची मूलभूत घटनात्मक रचना स्पष्ट करतो. संघासाठी संसद असेल आणि ती राष्ट्रपती, राज्यसभा आणि लोकसभा या घटकांनी बनलेली असेल, असे या अनुच्छेदात सांगितले आहे.`
        },
        {
          heading: "अनुच्छेद 79 मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद 79 नुसार संघासाठी एक संसद असेल. या संसदेमध्ये राष्ट्रपती आणि अनुक्रमे राज्यसभा व लोकसभा म्हणून ओळखली जाणारी दोन सभागृहे असतील.`
        },
        {
          heading: "अनुच्छेद 79 संविधानाच्या कोणत्या भागात आहे?",
          content: `अनुच्छेद 79 हा संविधानाच्या भाग V मध्ये आहे. भाग V संघाशी संबंधित आहे आणि त्याच्या अध्याय II मध्ये संसदेसंबंधी तरतुदी आहेत.`
        },
        {
          heading: "संसदेचे तीन घटनात्मक घटक कोणते?",
          content: `अनुच्छेद 79 नुसार संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या तीन घटनात्मक घटकांनी बनलेली आहे. राज्यसभेला Council of States आणि लोकसभेला House of the People असे संविधानात म्हटले आहे.`
        },
        {
          heading: "अनुच्छेद 79 नुसार राष्ट्रपती संसदेत समाविष्ट आहेत का?",
          content: `होय. अनुच्छेद 79 मध्ये राष्ट्रपतींचा संसदेच्या घटक म्हणून स्पष्टपणे समावेश केला आहे. मात्र, याचा अर्थ राष्ट्रपती हे राज्यसभा किंवा लोकसभेचे सदस्य आहेत असा होत नाही.`
        },
        {
          heading: "राज्यसभा म्हणजे काय?",
          content: `राज्यसभा हे Council of States चे सामान्यतः वापरले जाणारे नाव आहे. राज्यसभेच्या रचनेबाबत सविस्तर घटनात्मक तरतूद अनुच्छेद 80 मध्ये आहे.`
        },
        {
          heading: "लोकसभा म्हणजे काय?",
          content: `लोकसभा हे House of the People चे सामान्यतः वापरले जाणारे नाव आहे. लोकसभेच्या रचनेबाबत अनुच्छेद 81 मध्ये घटनात्मक तरतूद आहे.`
        },
        {
          heading: "अनुच्छेद 79 आणि राज्यसभा",
          content: `अनुच्छेद 79 मध्ये राज्यसभेला संसदेच्या दोन सभागृहांपैकी एक म्हणून ओळखले आहे. राज्यसभेच्या सविस्तर रचनेबाबत अनुच्छेद 80 मध्ये तरतुदी आहेत.`
        },
        {
          heading: "अनुच्छेद 79 आणि लोकसभा",
          content: `अनुच्छेद 79 मध्ये लोकसभेला संसदेच्या दोन सभागृहांपैकी दुसरे सभागृह म्हणून ओळखले आहे. लोकसभेच्या रचनेबाबत अनुच्छेद 81 मध्ये सविस्तर तरतूद आहे.`
        },
        {
          heading: "अनुच्छेद 79 आणि अनुच्छेद 80",
          content: `अनुच्छेद 79 संसदची मूलभूत घटनात्मक रचना सांगतो, तर अनुच्छेद 80 राज्यसभेच्या रचनेबाबत तरतूद करतो. हे दोन्ही अनुच्छेद एकत्र वाचल्यास संसदेची घटनात्मक रचना अधिक स्पष्ट होते.`
        },
        {
          heading: "अनुच्छेद 79 आणि अनुच्छेद 81",
          content: `अनुच्छेद 79 नुसार संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली आहे. अनुच्छेद 81 विशेषतः लोकसभेच्या रचनेशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद 79 मध्ये संसदेच्या कामकाजाची माहिती आहे का?",
          content: `अनुच्छेद 79 मुख्यतः संसदेची घटनात्मक रचना सांगतो. सदस्यांची पात्रता, अपात्रता, विशेषाधिकार, विधिमंडळाची प्रक्रिया आणि संसदेच्या इतर कामकाजाबाबतच्या सविस्तर तरतुदी पुढील अनुच्छेद आणि संबंधित कायद्यांमध्ये आहेत.`
        },
        {
          heading: "अनुच्छेद 79 चे महत्त्व काय आहे?",
          content: `अनुच्छेद 79 महत्त्वाचा आहे कारण भारताच्या संसदेची घटनात्मक रचना समजून घेण्यासाठी तो मूलभूत आधार देतो. राष्ट्रपती, राज्यसभा आणि लोकसभा हे संघाच्या संसदेचे घटक आहेत हे या अनुच्छेदातून स्पष्ट होते.`
        },
        {
          heading: "सोप्या भाषेत अनुच्छेद 79",
          content: `सोप्या भाषेत सांगायचे झाल्यास, भारताची संसद कोणापासून बनलेली आहे हे अनुच्छेद 79 सांगतो. संघाची संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या घटकांनी बनलेली आहे.`
        }
      ]
    },
    keywords: [
      "Article 79",
      "Article 79 Indian Constitution",
      "Article 79 explained",
      "Constitution of Parliament",
      "Parliament of India",
      "Indian Parliament",
      "Rajya Sabha",
      "Lok Sabha",
      "Council of States",
      "House of the People",
      "Article 79 in Marathi",
      "कलम 79",
      "कलम 79 भारतीय संविधान",
      "संसदेची रचना",
      "भारतीय संसद",
      "राज्यसभा",
      "लोकसभा",
      "संसद म्हणजे काय"
    ],
    relatedIds: ["80", "81", "83", "85", "100"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "153",
    articleNumber: "Article 153",
    title: {
      en: "Governors of States",
      mr: "राज्यांचे राज्यपाल"
    },
    categoryKey: "state-executive",
    officialText: {
      en: `Governors of States.—There shall be a Governor for each State:

Provided that nothing in this article shall prevent the appointment of the same person as Governor for two or more States.`,
      mr: `राज्यांचे राज्यपाल.—प्रत्येक राज्यासाठी एक राज्यपाल असेल:

परंतु, या अनुच्छेदातील कोणतीही गोष्ट एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्यास प्रतिबंध करणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 153 is part of Part VI of the Indian Constitution, which deals with the States. It provides for the constitutional office of the Governor.

The Article states that there shall be a Governor for each State. It also allows the same person to be appointed as Governor for two or more States.

Article 153 establishes the office of Governor, but it does not contain all the rules relating to the Governor. Other provisions of the Constitution deal with the Governor's appointment, term, qualifications, powers and conditions of office.

Article 155 deals with the appointment of the Governor. Article 156 deals with the term of office. Article 157 provides qualifications for appointment, while Article 158 deals with the conditions of the Governor's office.

Article 154 deals with the executive power of the State, and Article 163 provides for a Council of Ministers to aid and advise the Governor, subject to the Constitution.

Therefore, Article 153 provides the basic constitutional foundation for the office of Governor in the States.`,
      mr: `अनुच्छेद 153 हा भारतीय संविधानाच्या भाग VI मध्ये आहे. भाग VI मध्ये राज्यांशी संबंधित तरतुदी आहेत. हा अनुच्छेद राज्यपालाच्या घटनात्मक पदाची तरतूद करतो.

या अनुच्छेदानुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल. तसेच, एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.

अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो; मात्र राज्यपालांशी संबंधित सर्व तरतुदी या एकाच अनुच्छेदात दिलेल्या नाहीत. राज्यपालांची नियुक्ती, कार्यकाळ, पात्रता, अधिकार आणि पदाच्या अटी याबाबत संविधानातील इतर अनुच्छेदांमध्ये तरतुदी आहेत.

अनुच्छेद 155 राज्यपालांच्या नियुक्तीबाबत आहे. अनुच्छेद 156 कार्यकाळाबाबत आहे. अनुच्छेद 157 पात्रतेबाबत तर अनुच्छेद 158 राज्यपालांच्या पदाच्या अटींबाबत आहे.

अनुच्छेद 154 राज्याच्या कार्यकारी अधिकाराबाबत आहे आणि अनुच्छेद 163 राज्यपालांना मदत व सल्ला देण्यासाठी मंत्रिपरिषदेबाबत तरतूद करतो.

त्यामुळे राज्यांमधील राज्यपालाच्या घटनात्मक पदाची मूलभूत रचना समजून घेण्यासाठी अनुच्छेद 153 महत्त्वाचा आहे.`
    },
    verySimple: {
      en: `Article 153 provides that there shall be a Governor for each State.

The same person can also be appointed as Governor for two or more States.`,
      mr: `अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल.

एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती देखील करता येते.`
    },
    example: {
      en: `Suppose the same person is appointed as Governor for two States. Article 153 permits this arrangement because the Constitution expressly allows the same person to be appointed as Governor for two or more States.

The Article therefore establishes the constitutional office of Governor for every State while also providing flexibility to have one Governor serve more than one State.

The detailed powers, appointment process and term of the Governor are provided under other constitutional provisions.`,
      mr: `समजा, एकाच व्यक्तीची दोन राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्यात आली. अनुच्छेद 153 अशा व्यवस्थेला परवानगी देतो कारण संविधान एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची परवानगी देते.

त्यामुळे प्रत्येक राज्यासाठी राज्यपालाचे घटनात्मक पद निश्चित करताना एकाच व्यक्तीला एकापेक्षा जास्त राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची लवचिकताही या अनुच्छेदात आहे.

राज्यपालांचे अधिकार, नियुक्तीची प्रक्रिया आणि कार्यकाळ याबाबतच्या सविस्तर तरतुदी संविधानातील इतर अनुच्छेदांमध्ये आहेत.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 153 of the Indian Constitution?",
          content: `Article 153 provides for the constitutional office of Governor in the States. It states that there shall be a Governor for each State.`
        },
        {
          heading: "What does Article 153 say?",
          content: `Article 153 states that there shall be a Governor for each State. It also allows the same person to be appointed as Governor for two or more States.`
        },
        {
          heading: "Which Part contains Article 153?",
          content: `Article 153 is contained in Part VI of the Indian Constitution, which deals with the States. It forms part of the provisions relating to the State Executive.`
        },
        {
          heading: "Is there a Governor for every State?",
          content: `Article 153 provides that there shall be a Governor for each State. The same provision also permits one person to serve as Governor for two or more States.`
        },
        {
          heading: "Can one person be Governor of two States?",
          content: `Yes. The proviso to Article 153 expressly allows the same person to be appointed as Governor for two or more States.`
        },
        {
          heading: "What is the importance of Article 153?",
          content: `Article 153 establishes the constitutional office of Governor within the State executive structure and provides for flexibility by allowing one person to serve as Governor for more than one State.`
        },
        {
          heading: "Article 153 and Article 154",
          content: `Article 153 establishes the office of Governor, while Article 154 deals with the executive power of the State.`
        },
        {
          heading: "Article 153 and Article 155",
          content: `Article 153 provides for the office of Governor, while Article 155 deals with the appointment of the Governor.`
        },
        {
          heading: "Article 153 and Article 156",
          content: `Article 153 establishes the office of Governor, while Article 156 deals with the Governor's term of office.`
        },
        {
          heading: "Article 153 and State Executive",
          content: `Article 153 forms part of the constitutional framework of the State Executive. Other provisions deal with the Governor's appointment, qualifications, powers and term.`
        },
        {
          heading: "Does Article 153 describe the Governor's powers?",
          content: `Article 153 primarily establishes the office of Governor. The powers and functions of the Governor are dealt with under several other provisions of Part VI.`
        },
        {
          heading: "Why can one person be Governor of multiple States?",
          content: `Article 153 expressly permits the same person to be appointed as Governor for two or more States, providing constitutional flexibility in the State executive structure.`
        },
        {
          heading: "Why is Article 153 important?",
          content: `Article 153 is important because it establishes the constitutional office of Governor for the States and provides the possibility of one person serving as Governor for multiple States.`
        },
        {
          heading: "Article 153 in simple words",
          content: `In simple words, Article 153 provides for a Governor for every State and allows one person to serve as Governor for two or more States.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 153 म्हणजे काय?",
          content: `अनुच्छेद 153 हा राज्यपालाच्या घटनात्मक पदाशी संबंधित आहे. प्रत्येक राज्यासाठी एक राज्यपाल असेल, अशी तरतूद या अनुच्छेदात आहे.`
        },
        {
          heading: "अनुच्छेद 153 मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल. तसेच, एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`
        },
        {
          heading: "अनुच्छेद 153 संविधानाच्या कोणत्या भागात आहे?",
          content: `अनुच्छेद 153 हा संविधानाच्या भाग VI मध्ये आहे. भाग VI मध्ये राज्यांशी संबंधित तरतुदी आहेत.`
        },
        {
          heading: "प्रत्येक राज्यासाठी राज्यपाल असतो का?",
          content: `होय. अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल. त्याच अनुच्छेदानुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`
        },
        {
          heading: "एक व्यक्ती दोन राज्यांची राज्यपाल होऊ शकते का?",
          content: `होय. अनुच्छेद 153 मधील तरतुदीनुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`
        },
        {
          heading: "अनुच्छेद 153 चे महत्त्व काय आहे?",
          content: `अनुच्छेद 153 राज्याच्या कार्यकारी व्यवस्थेतील राज्यपालाचे घटनात्मक पद निश्चित करतो आणि एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद 153 आणि अनुच्छेद 154",
          content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 154 राज्याच्या कार्यकारी अधिकाराबाबत तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद 153 आणि अनुच्छेद 155",
          content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 155 राज्यपालांच्या नियुक्तीबाबत तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद 153 आणि अनुच्छेद 156",
          content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 156 राज्यपालांच्या कार्यकाळाबाबत तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद 153 आणि राज्याची कार्यकारी व्यवस्था",
          content: `अनुच्छेद 153 हा राज्याच्या कार्यकारी व्यवस्थेच्या घटनात्मक चौकटीचा भाग आहे. राज्यपालांच्या नियुक्ती, पात्रता, अधिकार आणि कार्यकाळाबाबत इतर अनुच्छेदांमध्ये तरतुदी आहेत.`
        },
        {
          heading: "अनुच्छेद 153 मध्ये राज्यपालांचे अधिकार दिले आहेत का?",
          content: `अनुच्छेद 153 मुख्यतः राज्यपालाचे घटनात्मक पद निश्चित करतो. राज्यपालांचे अधिकार आणि कार्ये संविधानातील इतर तरतुदींमध्ये दिली आहेत.`
        },
        {
          heading: "एकाच व्यक्तीला अनेक राज्यांचा राज्यपाल का करता येतो?",
          content: `अनुच्छेद 153 मध्ये स्पष्टपणे एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्याची परवानगी दिली आहे. यामुळे राज्याच्या कार्यकारी व्यवस्थेत घटनात्मक लवचिकता राहते.`
        },
        {
          heading: "अनुच्छेद 153 चे महत्त्व",
          content: `अनुच्छेद 153 महत्त्वाचा आहे कारण तो राज्यपालाचे घटनात्मक पद निश्चित करतो आणि एकाच व्यक्तीला एकापेक्षा जास्त राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची शक्यता निर्माण करतो.`
        },
        {
          heading: "सोप्या भाषेत अनुच्छेद 153",
          content: `सोप्या भाषेत सांगायचे झाल्यास, प्रत्येक राज्यासाठी राज्यपालाचे घटनात्मक पद असते आणि एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`
        }
      ]
    },
    keywords: [
      "Article 153",
      "Article 153 Indian Constitution",
      "Article 153 explained",
      "Governors of States",
      "Governor of State",
      "State Governor",
      "Article 153 in Marathi",
      "Indian Constitution Governor",
      "State Executive",
      "कलम 153",
      "कलम 153 भारतीय संविधान",
      "राज्यांचे राज्यपाल",
      "राज्यपाल म्हणजे काय",
      "भारतीय संविधान राज्यपाल",
      "राज्य कार्यकारी मंडळ"
    ],
    relatedIds: ["154", "155", "156", "157", "158"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "124",
    articleNumber: "Article 124",
    title: {
      en: "Establishment and Constitution of the Supreme Court",
      mr: "सर्वोच्च न्यायालयाची स्थापना व रचना"
    },
    categoryKey: "union-judiciary",
    officialText: {
      en: `Establishment and constitution of Supreme Court.—(1) There shall be a Supreme Court of India consisting of a Chief Justice of India and, until Parliament by law prescribes a larger number, of not more than thirty-three other Judges.

(2) Every Judge of the Supreme Court shall be appointed by the President by warrant under his hand and seal after consultation with such of the Judges of the Supreme Court and of the High Courts in the States as the President may deem necessary for the purpose and shall hold office until he attains the age of sixty-five years:

Provided that in the case of appointment of a Judge other than the Chief Justice, the Chief Justice of India shall always be consulted:

Provided further that—
(a) a Judge may, by writing under his hand addressed to the President, resign his office;
(b) a Judge may be removed from his office in the manner provided in clause (4).

(2A) The age of a Judge of the Supreme Court shall be determined by such authority and in such manner as Parliament may by law provide.

(3) A person shall not be qualified for appointment as a Judge of the Supreme Court unless he is a citizen of India and—
(a) has been for at least five years a Judge of a High Court or of two or more such Courts in succession; or
(b) has been for at least ten years an advocate of a High Court or of two or more such Courts in succession; or
(c) is, in the opinion of the President, a distinguished jurist.

Explanation I.—In this clause “High Court” means a High Court which exercises, or which at any time before the commencement of this Constitution exercised, jurisdiction in any part of the territory of India.

Explanation II.—In computing for the purpose of this clause the period during which a person has been an advocate, any period during which a person has held judicial office not inferior to that of a district judge after he became an advocate shall be included.

(4) A Judge of the Supreme Court shall not be removed from his office except by an order of the President passed after an address by each House of Parliament supported by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting has been presented to the President in the same session for such removal on the ground of proved misbehaviour or incapacity.

(5) Parliament may by law regulate the procedure for the presentation of an address and for the investigation and proof of the misbehaviour or incapacity of a Judge under clause (4).

(6) Every person appointed to be a Judge of the Supreme Court shall, before he enters upon his office, make and subscribe before the President, or some person appointed in that behalf by him, an oath or affirmation according to the form set out for the purpose in the Third Schedule.

(7) No person who has held office as a Judge of the Supreme Court shall plead or act in any court or before any authority within the territory of India.`,
      mr: `सर्वोच्च न्यायालयाची स्थापना व रचना.—(१) भारताचे एक सर्वोच्च न्यायालय असेल, ज्यामध्ये भारताचे मुख्य न्यायाधीश आणि, संसद कायद्याद्वारे अधिक संख्या विहित करेपर्यंत, तेहतीसपेक्षा अधिक नसलेले इतर न्यायाधीश असतील.

(२) सर्वोच्च न्यायालयातील प्रत्येक न्यायाधीशाची नियुक्ती राष्ट्रपती आपल्या स्वाक्षरी व शिक्क्याच्या अधिपत्राद्वारे, राष्ट्रपतींना आवश्यक वाटतील अशा सर्वोच्च न्यायालयातील आणि राज्यांतील उच्च न्यायालयांतील न्यायाधीशांशी सल्लामसलत केल्यानंतर करतील आणि असा न्यायाधीश वयाची पासष्ट वर्षे पूर्ण होईपर्यंत पद धारण करील.

परंतु, मुख्य न्यायाधीशाव्यतिरिक्त इतर न्यायाधीशाची नियुक्ती करताना भारताच्या मुख्य न्यायाधीशांशी नेहमी सल्लामसलत केली जाईल:

आणखी असे की—
(क) कोणताही न्यायाधीश राष्ट्रपतींना उद्देशून स्वतःच्या हस्ताक्षराने लेखी राजीनामा देऊ शकतो;
(ख) कोणत्याही न्यायाधीशाला खंड (४) मध्ये नमूद केलेल्या रीतीने पदावरून दूर केले जाऊ शकते.

(२A) सर्वोच्च न्यायालयातील न्यायाधीशाचे वय संसद कायद्याद्वारे ठरवेल अशा प्राधिकरणाद्वारे आणि अशा रीतीने निश्चित केले जाईल.

(३) एखादी व्यक्ती सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून नियुक्त होण्यासाठी पात्र ठरणार नाही, जोपर्यंत ती भारताची नागरिक नाही आणि—
(क) ती किमान पाच वर्षे उच्च न्यायालयाची किंवा सलगपणे दोन किंवा अधिक अशा न्यायालयांची न्यायाधीश राहिलेली नसेल; किंवा
(ख) ती किमान दहा वर्षे उच्च न्यायालयाची किंवा सलगपणे दोन किंवा अधिक अशा न्यायालयांची अधिवक्ता राहिलेली नसेल; किंवा
(ग) राष्ट्रपतींच्या मते ती एक प्रतिष्ठित विधिज्ञ नसेल.

स्पष्टीकरण I.—या खंडात “उच्च न्यायालय” याचा अर्थ असे उच्च न्यायालय असा आहे, ज्याला भारताच्या कोणत्याही प्रदेशात अधिकारिता आहे किंवा संविधानाच्या प्रारंभापूर्वी कोणत्याही वेळी भारताच्या प्रदेशाच्या कोणत्याही भागात अधिकारिता होती.

स्पष्टीकरण II.—या खंडाच्या प्रयोजनासाठी एखादी व्यक्ती अधिवक्ता म्हणून कार्यरत असलेल्या कालावधीची गणना करताना, अधिवक्ता झाल्यानंतर तिने जिल्हा न्यायाधीशापेक्षा कनिष्ठ नसलेले न्यायिक पद धारण केलेला कालावधी देखील समाविष्ट केला जाईल.

(४) सर्वोच्च न्यायालयाच्या कोणत्याही न्यायाधीशाला सिद्ध झालेले गैरवर्तन किंवा असमर्थता या कारणावरूनच, संसदेच्या प्रत्येक सभागृहाने त्याच अधिवेशनात अशा न्यायाधीशाला पदावरून दूर करण्यासाठी राष्ट्रपतींना संबोधित केलेला ठराव, त्या सभागृहाच्या एकूण सदस्यसंख्येच्या बहुमताने आणि उपस्थित राहून मतदान करणाऱ्या सदस्यांपैकी किमान दोन-तृतीयांश बहुमताने मंजूर करून राष्ट्रपतींकडे सादर केल्यानंतरच, राष्ट्रपतींच्या आदेशाने पदावरून दूर करता येईल.

(५) संसद कायद्याद्वारे खंड (४) अंतर्गत संबोधन सादर करण्याची तसेच न्यायाधीशाच्या गैरवर्तनाची किंवा असमर्थतेची चौकशी व ती सिद्ध करण्याची प्रक्रिया विनियमित करू शकते.

(६) सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून नियुक्त झालेल्या प्रत्येक व्यक्तीने पदभार स्वीकारण्यापूर्वी राष्ट्रपतींसमोर किंवा राष्ट्रपतींनी त्यासाठी नियुक्त केलेल्या व्यक्तीसमोर तिसऱ्या अनुसूचीत त्यासाठी दिलेल्या नमुन्यानुसार शपथ किंवा प्रतिज्ञा घ्यावी व त्यावर स्वाक्षरी करावी.

(७) सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून पद धारण केलेली कोणतीही व्यक्ती भारताच्या राज्यक्षेत्रातील कोणत्याही न्यायालयात किंवा कोणत्याही प्राधिकरणासमोर वकिली किंवा कार्य करू शकणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 124 establishes the Supreme Court of India and sets out important constitutional provisions concerning its composition and judges.

The Supreme Court consists of the Chief Justice of India and other Judges. Parliament may by law prescribe a larger number of Judges. The present statutory limit is thirty-three other Judges in addition to the Chief Justice of India.

Article 124 also provides qualifications for appointment as a Supreme Court Judge. A person must be a citizen of India and must satisfy one of the constitutional requirements relating to experience as a High Court Judge, experience as an advocate of a High Court, or being a distinguished jurist in the opinion of the President.

The Article provides that Supreme Court Judges hold office until the age of sixty-five years. It also provides for resignation and establishes the constitutional procedure for removal of a Judge.

Removal is subject to a special parliamentary procedure. It requires an address by each House of Parliament supported by the required majorities and is based on proved misbehaviour or incapacity.

Article 124 therefore provides the constitutional foundation for the Supreme Court's composition, appointment qualifications, tenure, resignation, removal and oath of office.`,
      mr: `अनुच्छेद १२४ भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि त्याच्या न्यायाधीशांशी संबंधित महत्त्वाच्या घटनात्मक तरतुदी स्पष्ट करतो.

सर्वोच्च न्यायालयामध्ये भारताचे मुख्य न्यायाधीश आणि इतर न्यायाधीश असतात. संसद कायद्याद्वारे न्यायाधीशांची अधिक संख्या निश्चित करू शकते. सध्या मुख्य न्यायाधीशांव्यतिरिक्त इतर न्यायाधीशांची कमाल संख्या तेहतीस आहे.

अनुच्छेद १२४ सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्तीसाठी आवश्यक पात्रताही सांगतो. व्यक्ती भारताची नागरिक असणे आवश्यक आहे आणि उच्च न्यायालयाचा न्यायाधीश म्हणून आवश्यक अनुभव, उच्च न्यायालयाचा अधिवक्ता म्हणून आवश्यक अनुभव किंवा राष्ट्रपतींच्या मते प्रतिष्ठित विधिज्ञ असणे यापैकी संविधानातील आवश्यक अट पूर्ण करणे आवश्यक आहे.

सर्वोच्च न्यायालयाचा न्यायाधीश वयाची पासष्ट वर्षे पूर्ण होईपर्यंत पदावर राहतो. या अनुच्छेदात न्यायाधीशाच्या राजीनाम्याची आणि पदावरून दूर करण्याची घटनात्मक प्रक्रिया देखील दिली आहे.

न्यायाधीशाला पदावरून दूर करण्यासाठी संसदेच्या दोन्ही सभागृहांमध्ये विशेष बहुमताची प्रक्रिया आवश्यक आहे. सिद्ध झालेले गैरवर्तन किंवा असमर्थता हे त्यासाठी घटनात्मक आधार आहेत.

त्यामुळे अनुच्छेद १२४ सर्वोच्च न्यायालयाची रचना, न्यायाधीशांची पात्रता, नियुक्ती, कार्यकाळ, राजीनामा, पदावरून दूर करण्याची प्रक्रिया आणि शपथ यांचा घटनात्मक पाया निश्चित करतो.`
    },
    verySimple: {
      en: "Article 124 establishes the Supreme Court of India and provides constitutional rules relating to its Judges, including their qualifications, tenure, resignation and removal.",
      mr: "अनुच्छेद १२४ सर्वोच्च न्यायालयाची स्थापना करतो आणि त्याच्या न्यायाधीशांची पात्रता, कार्यकाळ, राजीनामा व पदावरून दूर करण्याची घटनात्मक प्रक्रिया सांगतो."
    },
    example: {
      en: `Suppose a person is being considered for appointment as a Judge of the Supreme Court. The person must be an Indian citizen and must satisfy one of the constitutional qualification requirements, such as having the required experience as a High Court Judge or advocate, or being a distinguished jurist in the opinion of the President.

For another example, if a Supreme Court Judge wishes to resign, the Constitution permits the Judge to submit a written resignation addressed to the President.

If removal of a Judge is sought on the ground of proved misbehaviour or incapacity, the constitutional parliamentary procedure under Article 124(4) must be followed. A simple decision by one authority is not sufficient.`,
      mr: `समजा एखाद्या व्यक्तीचा सर्वोच्च न्यायालयाच्या न्यायाधीशपदासाठी विचार केला जात आहे. ती व्यक्ती भारताची नागरिक असणे आवश्यक आहे आणि उच्च न्यायालयाचा न्यायाधीश किंवा अधिवक्ता म्हणून आवश्यक अनुभव किंवा राष्ट्रपतींच्या मते प्रतिष्ठित विधिज्ञ असणे यापैकी संविधानातील पात्रतेची अट पूर्ण करणे आवश्यक आहे.

दुसरे उदाहरण म्हणजे सर्वोच्च न्यायालयातील एखाद्या न्यायाधीशाला राजीनामा द्यायचा असल्यास, संविधानानुसार तो न्यायाधीश राष्ट्रपतींना उद्देशून लेखी राजीनामा देऊ शकतो.

जर एखाद्या न्यायाधीशाला सिद्ध झालेले गैरवर्तन किंवा असमर्थता या कारणावरून पदावरून दूर करण्याची प्रक्रिया सुरू करायची असेल, तर अनुच्छेद १२४(४) मध्ये दिलेली संसदीय घटनात्मक प्रक्रिया पूर्ण करावी लागते. केवळ एका प्राधिकरणाचा साधा निर्णय पुरेसा नसतो.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 124 of the Indian Constitution?",
          content: `Article 124 deals with the establishment and constitution of the Supreme Court of India. It contains provisions concerning the composition of the Court and important matters relating to Supreme Court Judges.`
        },
        {
          heading: "What does Article 124 establish?",
          content: `Article 124 establishes the Supreme Court of India as the constitutional apex court of the Union Judiciary. It provides that the Court consists of the Chief Justice of India and other Judges, subject to the number prescribed by Parliament.`
        },
        {
          heading: "Which Part contains Article 124?",
          content: `Article 124 is contained in Part V of the Constitution, which deals with the Union. It appears in Chapter IV, titled the Union Judiciary.`
        },
        {
          heading: "How many Judges can the Supreme Court have?",
          content: `Article 124 provides for the Chief Justice of India and a number of other Judges prescribed by Parliament. The current statutory maximum is thirty-three other Judges in addition to the Chief Justice of India.`
        },
        {
          heading: "What are the qualifications for a Supreme Court Judge?",
          content: `A person must be a citizen of India and must satisfy one of the constitutional requirements: at least five years as a Judge of a High Court or two or more High Courts in succession, at least ten years as an advocate of a High Court or two or more High Courts in succession, or being a distinguished jurist in the opinion of the President.`
        },
        {
          heading: "What is the retirement age of a Supreme Court Judge?",
          content: `A Judge of the Supreme Court holds office until attaining the age of sixty-five years. This age is specifically provided in Article 124(2).`
        },
        {
          heading: "Who appoints Supreme Court Judges?",
          content: `Article 124 provides that every Judge of the Supreme Court is appointed by the President by warrant under his hand and seal. The constitutional text also contains consultation requirements concerning Judges of the Supreme Court and High Courts.`
        },
        {
          heading: "Can a Supreme Court Judge resign?",
          content: `Yes. Article 124 permits a Supreme Court Judge to resign by writing addressed to the President.`
        },
        {
          heading: "How can a Supreme Court Judge be removed?",
          content: `Article 124 provides a special constitutional procedure for removal. Removal requires an order of the President after an address by each House of Parliament supported by the required majorities, on the ground of proved misbehaviour or incapacity.`
        },
        {
          heading: "What majority is required for removal of a Supreme Court Judge?",
          content: `The address must be supported by a majority of the total membership of the House and by a majority of not less than two-thirds of the members of that House present and voting. The address must be presented to the President in the same session.`
        },
        {
          heading: "What oath does a Supreme Court Judge take?",
          content: `Before entering office, every person appointed as a Supreme Court Judge must make and subscribe an oath or affirmation before the President or a person appointed by the President, according to the form provided in the Third Schedule.`
        },
        {
          heading: "Can a retired Supreme Court Judge practise in courts in India?",
          content: `No. Article 124(7) provides that a person who has held office as a Judge of the Supreme Court shall not plead or act in any court or before any authority within the territory of India.`
        },
        {
          heading: "Article 124 and judicial independence",
          content: `Article 124 creates constitutional safeguards relating to the tenure, resignation and removal of Supreme Court Judges. The special removal procedure requires participation and prescribed majorities in both Houses of Parliament.`
        },
        {
          heading: "Article 124 and the Supreme Court of India",
          content: `Article 124 is the foundational constitutional provision for the establishment and composition of the Supreme Court. Other Articles in Chapter IV deal with matters such as salaries, acting Chief Justice, jurisdiction, powers and procedures of the Supreme Court.`
        },
        {
          heading: "Article 124 in simple words",
          content: `In simple words, Article 124 establishes the Supreme Court of India and explains the constitutional framework relating to its Judges, including their appointment, qualifications, retirement age, resignation, removal and oath.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद १२४ म्हणजे काय?",
          content: `अनुच्छेद १२४ भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबद्दल आहे. यात सर्वोच्च न्यायालयाच्या न्यायाधीशांशी संबंधित अनेक महत्त्वाच्या घटनात्मक तरतुदी दिल्या आहेत.`
        },
        {
          heading: "अनुच्छेद १२४ काय स्थापित करतो?",
          content: `अनुच्छेद १२४ भारताचे सर्वोच्च न्यायालय स्थापित करतो. या न्यायालयामध्ये भारताचे मुख्य न्यायाधीश आणि संसद कायद्याद्वारे निश्चित करेल त्या संख्येतील इतर न्यायाधीश असतात.`
        },
        {
          heading: "अनुच्छेद १२४ कोणत्या भागात आहे?",
          content: `अनुच्छेद १२४ हा संविधानाच्या भाग V मध्ये आहे. तो भाग Union म्हणजेच संघाशी संबंधित आहे. अनुच्छेद १२४ हा Chapter IV — Union Judiciary मध्ये येतो.`
        },
        {
          heading: "सर्वोच्च न्यायालयात किती न्यायाधीश असू शकतात?",
          content: `अनुच्छेद १२४ मध्ये भारताचे मुख्य न्यायाधीश आणि इतर न्यायाधीशांची तरतूद आहे. सध्याच्या कायदेशीर मर्यादेनुसार मुख्य न्यायाधीशांव्यतिरिक्त सर्वोच्च न्यायालयात जास्तीत जास्त तेहतीस इतर न्यायाधीश असू शकतात.`
        },
        {
          heading: "सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी कोणती पात्रता आवश्यक आहे?",
          content: `व्यक्ती भारताची नागरिक असणे आवश्यक आहे. त्यासोबत किमान पाच वर्षे उच्च न्यायालयाचा न्यायाधीश असणे, किंवा किमान दहा वर्षे उच्च न्यायालयाचा अधिवक्ता असणे, किंवा राष्ट्रपतींच्या मते प्रतिष्ठित विधिज्ञ असणे यापैकी संविधानातील पात्रतेची अट पूर्ण करावी लागते.`
        },
        {
          heading: "सर्वोच्च न्यायालयाच्या न्यायाधीशांचे निवृत्तीचे वय किती आहे?",
          content: `सर्वोच्च न्यायालयाचा न्यायाधीश वयाची पासष्ट वर्षे पूर्ण होईपर्यंत पदावर राहतो. ही वयोमर्यादा अनुच्छेद १२४(२) मध्ये दिली आहे.`
        },
        {
          heading: "सर्वोच्च न्यायालयाच्या न्यायाधीशांची नियुक्ती कोण करतो?",
          content: `अनुच्छेद १२४ नुसार सर्वोच्च न्यायालयातील प्रत्येक न्यायाधीशाची नियुक्ती राष्ट्रपती आपल्या स्वाक्षरी व शिक्क्याच्या अधिपत्राद्वारे करतात. नियुक्तीच्या प्रक्रियेशी संबंधित सल्लामसलतीची घटनात्मक तरतूदही या अनुच्छेदात आहे.`
        },
        {
          heading: "सर्वोच्च न्यायालयाचा न्यायाधीश राजीनामा देऊ शकतो का?",
          content: `होय. अनुच्छेद १२४ नुसार सर्वोच्च न्यायालयाचा न्यायाधीश राष्ट्रपतींना उद्देशून लेखी राजीनामा देऊ शकतो.`
        },
        {
          heading: "सर्वोच्च न्यायालयाच्या न्यायाधीशाला पदावरून कसे दूर करता येते?",
          content: `सिद्ध झालेले गैरवर्तन किंवा असमर्थता या आधारावर अनुच्छेद १२४ मध्ये विशेष घटनात्मक प्रक्रिया दिली आहे. संसदेच्या दोन्ही सभागृहांनी आवश्यक बहुमताने संबोधन मंजूर केल्यानंतर राष्ट्रपतींच्या आदेशाद्वारे न्यायाधीशाला पदावरून दूर करता येते.`
        },
        {
          heading: "सर्वोच्च न्यायालयाच्या न्यायाधीशाला दूर करण्यासाठी किती बहुमत आवश्यक आहे?",
          content: `संसदेच्या संबंधित सभागृहाच्या एकूण सदस्यसंख्येच्या बहुमतासोबत उपस्थित राहून मतदान करणाऱ्या सदस्यांपैकी किमान दोन-तृतीयांश बहुमत आवश्यक आहे. दोन्ही सभागृहांमधील प्रक्रिया त्याच अधिवेशनात पूर्ण होणे आवश्यक आहे.`
        },
        {
          heading: "सर्वोच्च न्यायालयाचा न्यायाधीश कोणती शपथ घेतो?",
          content: `पदभार स्वीकारण्यापूर्वी सर्वोच्च न्यायालयाचा प्रत्येक न्यायाधीश राष्ट्रपतींसमोर किंवा राष्ट्रपतींनी नियुक्त केलेल्या व्यक्तीसमोर तिसऱ्या अनुसूचीत दिलेल्या नमुन्यानुसार शपथ किंवा प्रतिज्ञा घेतो.`
        },
        {
          heading: "निवृत्त सर्वोच्च न्यायालयाचा न्यायाधीश भारतातील न्यायालयात वकिली करू शकतो का?",
          content: `नाही. अनुच्छेद १२४(७) नुसार सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून पद धारण केलेली व्यक्ती भारताच्या राज्यक्षेत्रातील कोणत्याही न्यायालयात किंवा कोणत्याही प्राधिकरणासमोर वकिली किंवा कार्य करू शकत नाही.`
        },
        {
          heading: "अनुच्छेद १२४ आणि न्यायव्यवस्थेचे स्वातंत्र्य",
          content: `अनुच्छेद १२४ न्यायाधीशांचा कार्यकाळ, राजीनामा आणि पदावरून दूर करण्याची विशेष प्रक्रिया याबाबत घटनात्मक तरतुदी देतो. न्यायाधीशाला दूर करण्यासाठी संसदेच्या दोन्ही सभागृहांमध्ये निर्धारित बहुमताची आवश्यकता असते.`
        },
        {
          heading: "अनुच्छेद १२४ आणि भारताचे सर्वोच्च न्यायालय",
          content: `अनुच्छेद १२४ हा सर्वोच्च न्यायालयाच्या स्थापना व रचनेचा मूलभूत घटनात्मक अनुच्छेद आहे. त्यानंतरचे अनुच्छेद सर्वोच्च न्यायालयाचे वेतन, कार्यवाहक मुख्य न्यायाधीश, अधिकारिता, अधिकार आणि कार्यपद्धती यांसारख्या बाबींशी संबंधित आहेत.`
        },
        {
          heading: "अनुच्छेद १२४ सोप्या भाषेत",
          content: `सोप्या भाषेत, अनुच्छेद १२४ भारताचे सर्वोच्च न्यायालय स्थापित करतो आणि त्याच्या न्यायाधीशांची नियुक्ती, पात्रता, निवृत्तीचे वय, राजीनामा, पदावरून दूर करण्याची प्रक्रिया आणि शपथ यांचे घटनात्मक नियम सांगतो.`
        }
      ]
    },
    keywords: [
      "Article 124",
      "Article 124 of Indian Constitution",
      "Supreme Court of India",
      "Supreme Court Judges",
      "Supreme Court Judge qualifications",
      "appointment of Supreme Court Judges",
      "removal of Supreme Court Judge",
      "retirement age Supreme Court Judge",
      "Article 124 in simple words",
      "कलम 124",
      "भारतीय संविधान कलम 124",
      "सर्वोच्च न्यायालय",
      "सर्वोच्च न्यायालयाचे न्यायाधीश",
      "सर्वोच्च न्यायालय न्यायाधीश पात्रता",
      "सर्वोच्च न्यायालय न्यायाधीश नियुक्ती",
      "न्यायाधीश पदावरून दूर करणे"
    ],
    relatedIds: ["125", "126", "127", "128", "129", "130", "131"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "352",
    articleNumber: "Article 352",
    title: {
      en: "Proclamation of Emergency",
      mr: "आणीबाणीची घोषणा"
    },
    categoryKey: "emergency-provisions",
    officialText: {
      en: `Proclamation of Emergency.—(1) If the President is satisfied that a grave emergency exists whereby the security of India or of any part of the territory thereof is threatened, whether by war or external aggression or armed rebellion, he may, by Proclamation, make a declaration to that effect in respect of the whole of India or of such part of the territory thereof as may be specified in the Proclamation.

Explanation.—A Proclamation of Emergency declaring that the security of India or any part of the territory thereof is threatened by war or by external aggression or by armed rebellion may be made before the actual occurrence of war or of any such aggression or rebellion, if the President is satisfied that there is imminent danger thereof.

(2) A Proclamation issued under clause (1) may be varied or revoked by a subsequent Proclamation.

(3) The President shall not issue a Proclamation under clause (1) or a Proclamation varying such Proclamation unless the decision of the Union Cabinet (that is to say, the Council consisting of the Prime Minister and other Ministers of Cabinet rank appointed under article 75) that such a Proclamation may be issued has been communicated to him in writing.

(4) Every Proclamation issued under this article shall be laid before each House of Parliament and shall, except where it is a Proclamation revoking a previous Proclamation, cease to operate at the expiration of one month unless before the expiration of that period it has been approved by resolutions of both Houses of Parliament.`,
      mr: `आणीबाणीची घोषणा.—(१) जर राष्ट्रपतींचे समाधान झाले की युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंड यांमुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आणणारी गंभीर आणीबाणीची परिस्थिती अस्तित्वात आहे, तर राष्ट्रपती उद्घोषणेद्वारे संपूर्ण भारताच्या किंवा उद्घोषणेत नमूद केलेल्या भारताच्या कोणत्याही भागाच्या संदर्भात तशी घोषणा करू शकतात.

स्पष्टीकरण.—युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंड यांमुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात येण्याची निकड निर्माण होण्याची शक्यता असल्यास, प्रत्यक्ष युद्ध, आक्रमण किंवा बंड सुरू होण्यापूर्वीदेखील अशी आणीबाणीची घोषणा करता येते, जर राष्ट्रपतींचे समाधान झाले की असा तातडीचा धोका आहे.

(२) खंड (१) अंतर्गत करण्यात आलेली उद्घोषणा त्यानंतरच्या उद्घोषणेद्वारे बदलता किंवा रद्द करता येते.

(३) राष्ट्रपती खंड (१) अंतर्गत उद्घोषणा किंवा तिच्यात बदल करणारी उद्घोषणा तेव्हाच जारी करू शकतात, जेव्हा अशी उद्घोषणा जारी करण्याचा केंद्रीय मंत्रिमंडळाचा निर्णय त्यांना लेखी स्वरूपात कळविण्यात आलेला असेल.

(४) या अनुच्छेदाखालील प्रत्येक उद्घोषणा संसदेच्या प्रत्येक सभागृहासमोर ठेवली जाईल आणि ती मागील उद्घोषणा रद्द करणारी नसल्यास, दोन्ही सभागृहांनी ठरावाद्वारे तिची मंजुरी देण्यापूर्वी एक महिन्याची मुदत संपल्यावर ती कार्यरत राहणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 352 deals with the Proclamation of Emergency at the national level. It applies when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion. The President may issue a Proclamation of Emergency when the constitutional conditions are satisfied.

The President cannot issue such a Proclamation solely on personal discretion. The decision of the Union Cabinet must first be communicated to the President in writing. This requirement is expressly provided in Article 352(3).

An Emergency under Article 352 may apply to the whole of India or only to a specified part of the territory, depending on the circumstances mentioned in the Proclamation. The Constitution also permits a Proclamation to be made when there is an imminent danger of war, external aggression or armed rebellion, even before the actual event occurs.

Parliamentary approval is an important constitutional safeguard. A Proclamation must be laid before both Houses of Parliament and, except for a revoking Proclamation, it generally ceases to operate after one month unless both Houses approve it by resolutions within that period. Once approved, the Constitution provides a framework for its continuation and further parliamentary approval.

Article 352 therefore establishes the constitutional procedure for a national Emergency and places specific requirements on the Executive and Parliament.`,
      mr: `अनुच्छेद ३५२ राष्ट्रीय पातळीवरील आणीबाणीच्या घोषणेशी संबंधित आहे. युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंड यांमुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आली असल्यास हा अनुच्छेद लागू होतो. संविधानातील आवश्यक अटी पूर्ण झाल्यावर राष्ट्रपती आणीबाणीची घोषणा करू शकतात.

राष्ट्रपती ही घोषणा केवळ स्वतःच्या इच्छेने करू शकत नाहीत. केंद्रीय मंत्रिमंडळाचा असा निर्णय प्रथम राष्ट्रपतींना लेखी स्वरूपात कळविला जाणे आवश्यक आहे. ही अट अनुच्छेद ३५२(३) मध्ये स्पष्टपणे दिली आहे.

अनुच्छेद ३५२ अंतर्गत आणीबाणी संपूर्ण भारतासाठी किंवा उद्घोषणेत नमूद केलेल्या भारताच्या विशिष्ट भागासाठी लागू केली जाऊ शकते. तसेच युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाचा प्रत्यक्ष प्रसंग घडण्यापूर्वी त्याचा तातडीचा धोका असल्यासही अशी घोषणा करता येते.

संसदेची मंजुरी ही या प्रक्रियेतील महत्त्वाची घटनात्मक अट आहे. आणीबाणीची उद्घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवावी लागते आणि दोन्ही सभागृहांनी ठरावाद्वारे मंजुरी न दिल्यास, साधारणपणे एक महिन्यानंतर ती कार्यरत राहत नाही.

त्यामुळे अनुच्छेद ३५२ राष्ट्रीय आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया स्पष्ट करतो आणि कार्यपालिका तसेच संसदेसाठी विशिष्ट घटनात्मक अटी निश्चित करतो.`
    },
    verySimple: {
      en: "Article 352 allows a national Emergency to be proclaimed when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion, subject to the constitutional procedure and parliamentary approval.",
      mr: "अनुच्छेद ३५२ नुसार युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आल्यास घटनात्मक प्रक्रियेनुसार राष्ट्रीय आणीबाणी जाहीर करता येते आणि त्यासाठी संसदेची मंजुरी आवश्यक असते."
    },
    example: {
      en: `Suppose a situation involving war creates a serious threat to the security of India. If the constitutional conditions under Article 352 are satisfied, the Union Cabinet communicates its decision to the President in writing and the President may issue a Proclamation of Emergency. The Proclamation must then be placed before both Houses of Parliament for approval within the constitutionally prescribed period.

Another example is a situation where there is an imminent danger of armed rebellion. Article 352 permits a Proclamation to be made even before the actual occurrence if the President is satisfied that such an imminent danger exists.

These examples illustrate the constitutional procedure; they do not mean that every security-related incident automatically results in an Emergency under Article 352.`,
      mr: `समजा युद्धामुळे भारताच्या सुरक्षेला गंभीर धोका निर्माण झाला. अनुच्छेद ३५२ मधील घटनात्मक अटी पूर्ण झाल्यास केंद्रीय मंत्रिमंडळ आपला निर्णय राष्ट्रपतींना लेखी स्वरूपात कळवते आणि राष्ट्रपती आणीबाणीची उद्घोषणा करू शकतात. त्यानंतर ही उद्घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवून घटनात्मक कालमर्यादेत मंजुरी घेणे आवश्यक असते.

दुसरे उदाहरण म्हणजे सशस्त्र बंडाचा तातडीचा धोका निर्माण होणे. अशा परिस्थितीत प्रत्यक्ष बंड सुरू होण्यापूर्वीदेखील, असा तातडीचा धोका असल्याचे राष्ट्रपतींचे समाधान झाल्यास अनुच्छेद ३५२ अंतर्गत उद्घोषणा करता येते.

ही उदाहरणे केवळ घटनात्मक प्रक्रिया समजावून सांगण्यासाठी आहेत. प्रत्येक सुरक्षा-संबंधित घटना आपोआप अनुच्छेद ३५२ अंतर्गत आणीबाणी निर्माण करते असे यावरून म्हणता येत नाही.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 352 of the Indian Constitution?",
          content: `Article 352 deals with the Proclamation of Emergency at the national level. It specifies the constitutional circumstances in which an Emergency may be proclaimed when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion.`
        },
        {
          heading: "What does Article 352 say?",
          content: `Article 352 provides the constitutional procedure for proclaiming an Emergency. It deals with the grounds for Emergency, the role of the President and Union Cabinet, the geographical scope of the Proclamation, and the requirement of approval by both Houses of Parliament.`
        },
        {
          heading: "Which Part of the Constitution contains Article 352?",
          content: `Article 352 is contained in Part XVIII of the Constitution of India, which deals with Emergency Provisions. Articles in this Part address different constitutional situations involving national, State and financial emergencies.`
        },
        {
          heading: "On what grounds can an Emergency be proclaimed under Article 352?",
          content: `Article 352 identifies three grounds: war, external aggression and armed rebellion. The constitutional text also permits a Proclamation where there is an imminent danger of war, external aggression or armed rebellion, if the required constitutional satisfaction exists.`
        },
        {
          heading: "Can an Emergency under Article 352 apply only to part of India?",
          content: `Yes. Article 352 permits a Proclamation in respect of the whole of India or only such part of the territory of India as may be specified in the Proclamation.`
        },
        {
          heading: "What is the role of the Union Cabinet under Article 352?",
          content: `The President cannot issue an Emergency Proclamation under Article 352 unless the decision of the Union Cabinet to issue it has been communicated to the President in writing. This requirement is expressly stated in Article 352(3).`
        },
        {
          heading: "Does Parliament have to approve an Emergency Proclamation?",
          content: `Yes. An Emergency Proclamation must be laid before each House of Parliament. Except for a Proclamation revoking an earlier one, it generally ceases to operate after one month unless both Houses approve it by resolutions within that period.`
        },
        {
          heading: "Can an Article 352 Proclamation be changed or revoked?",
          content: `Yes. Article 352 provides that a Proclamation may be varied or revoked by a subsequent Proclamation. The Constitution therefore provides a mechanism for changing or ending an Emergency Proclamation.`
        },
        {
          heading: "What is the difference between Article 352 and Article 356?",
          content: `Article 352 concerns a national Emergency when the security of India or a part of its territory is threatened by war, external aggression or armed rebellion. Article 356 deals with provisions relating to failure of constitutional machinery in States. They address different constitutional situations.`
        },
        {
          heading: "What is the difference between Article 352 and Article 360?",
          content: `Article 352 deals with a national Emergency based on threats to the security of India or a part of its territory. Article 360 deals with provisions relating to a financial emergency. The constitutional grounds and procedures are therefore different.`
        },
        {
          heading: "What is an Emergency under Article 352 in simple terms?",
          content: `In simple terms, Article 352 provides a constitutional mechanism for dealing with a grave threat to national security arising from war, external aggression or armed rebellion. It also establishes procedural safeguards involving the Union Cabinet and Parliament.`
        },
        {
          heading: "Why is parliamentary approval important under Article 352?",
          content: `Parliamentary approval creates an important constitutional check on the continuation of an Emergency Proclamation. The Constitution requires both Houses of Parliament to consider the Proclamation within the specified period.`
        },
        {
          heading: "Can Article 352 be invoked before an actual emergency occurs?",
          content: `Yes, the Explanation to Article 352 allows a Proclamation where there is an imminent danger of war, external aggression or armed rebellion, provided the President is satisfied that the required imminent danger exists.`
        },
        {
          heading: "Article 352 and Emergency Provisions",
          content: `Article 352 is the opening provision of Part XVIII dealing with Emergency Provisions. Other provisions in this Part address the effects and related constitutional consequences of Emergency situations.`
        },
        {
          heading: "Article 352 in simple words",
          content: `Article 352 provides the constitutional procedure for proclaiming a national Emergency when India or a part of its territory faces a serious security threat from war, external aggression or armed rebellion. The process includes written Union Cabinet advice and parliamentary approval.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद ३५२ म्हणजे काय?",
          content: `अनुच्छेद ३५२ राष्ट्रीय पातळीवरील आणीबाणीच्या घोषणेशी संबंधित आहे. युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आल्यास या अनुच्छेदातील घटनात्मक तरतुदी लागू होतात.`
        },
        {
          heading: "अनुच्छेद ३५२ मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद ३५२ आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया स्पष्ट करतो. यात आणीबाणीची कारणे, राष्ट्रपती आणि केंद्रीय मंत्रिमंडळाची भूमिका, आणीबाणीचा भौगोलिक विस्तार आणि संसदेच्या दोन्ही सभागृहांच्या मंजुरीची आवश्यकता यांचा समावेश होतो.`
        },
        {
          heading: "अनुच्छेद ३५२ कोणत्या भागात आहे?",
          content: `अनुच्छेद ३५२ हा भारतीय संविधानाच्या भाग XVIII मध्ये आहे. या भागाला Emergency Provisions म्हणजेच आणीबाणीच्या तरतुदी असे म्हटले जाते.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत आणीबाणी कोणत्या कारणांवर जाहीर करता येते?",
          content: `अनुच्छेद ३५२ मध्ये तीन प्रमुख कारणे नमूद केली आहेत: युद्ध, बाह्य आक्रमण आणि सशस्त्र बंड. तसेच अशा परिस्थितीचा तातडीचा धोका असल्यास प्रत्यक्ष घटना घडण्यापूर्वीदेखील उद्घोषणा करता येते.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत संपूर्ण भारतासाठीच आणीबाणी लागू होते का?",
          content: `नाही. अनुच्छेद ३५२ नुसार आणीबाणीची उद्घोषणा संपूर्ण भारतासाठी किंवा उद्घोषणेत नमूद केलेल्या भारताच्या कोणत्याही विशिष्ट भागासाठी केली जाऊ शकते.`
        },
        {
          heading: "अनुच्छेद ३५२ मध्ये केंद्रीय मंत्रिमंडळाची भूमिका काय आहे?",
          content: `राष्ट्रपतींना आणीबाणीची उद्घोषणा जारी करण्यापूर्वी केंद्रीय मंत्रिमंडळाचा असा निर्णय लेखी स्वरूपात कळविला जाणे आवश्यक आहे की अशी उद्घोषणा जारी केली जावी. ही अट अनुच्छेद ३५२(३) मध्ये दिली आहे.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत संसदेची मंजुरी आवश्यक आहे का?",
          content: `होय. आणीबाणीची उद्घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवावी लागते. दोन्ही सभागृहांनी घटनात्मक कालमर्यादेत ठरावाद्वारे मंजुरी न दिल्यास, सामान्यतः एक महिन्यानंतर ती कार्यरत राहत नाही.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत आणीबाणीची घोषणा बदलता किंवा रद्द करता येते का?",
          content: `होय. अनुच्छेद ३५२ नुसार आधीची उद्घोषणा त्यानंतरच्या उद्घोषणेद्वारे बदलता किंवा रद्द करता येते.`
        },
        {
          heading: "अनुच्छेद ३५२ आणि अनुच्छेद ३५६ मध्ये काय फरक आहे?",
          content: `अनुच्छेद ३५२ राष्ट्रीय सुरक्षेला युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे निर्माण झालेल्या धोक्याशी संबंधित राष्ट्रीय आणीबाणीची प्रक्रिया सांगतो. अनुच्छेद ३५६ राज्यातील घटनात्मक यंत्रणा अपयशी ठरल्यास लागू होणाऱ्या तरतुदींशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद ३५२ आणि अनुच्छेद ३६० मध्ये काय फरक आहे?",
          content: `अनुच्छेद ३५२ राष्ट्रीय सुरक्षेला असलेल्या गंभीर धोक्याशी संबंधित आणीबाणीबाबत आहे. अनुच्छेद ३६० आर्थिक आणीबाणीशी संबंधित तरतुदी सांगतो. त्यामुळे दोन्ही अनुच्छेदांची घटनात्मक कारणे वेगवेगळी आहेत.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत आणीबाणी म्हणजे काय?",
          content: `सोप्या भाषेत, युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या सुरक्षेला गंभीर धोका निर्माण झाल्यास त्या परिस्थितीला घटनात्मक पद्धतीने हाताळण्यासाठी अनुच्छेद ३५२ प्रक्रिया उपलब्ध करून देतो.`
        },
        {
          heading: "अनुच्छेद ३५२ अंतर्गत संसदेची मंजुरी महत्त्वाची का आहे?",
          content: `संसदेची मंजुरी ही आणीबाणीच्या घोषणेवरील महत्त्वाची घटनात्मक तपासणी आहे. संविधानानुसार उद्घोषणा दोन्ही सभागृहांसमोर ठेवणे आणि आवश्यक कालमर्यादेत त्यांची मंजुरी घेणे आवश्यक आहे.`
        },
        {
          heading: "प्रत्यक्ष घटना घडण्यापूर्वी अनुच्छेद ३५२ अंतर्गत आणीबाणी जाहीर करता येते का?",
          content: `होय. जर युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाचा तातडीचा धोका असल्याचे राष्ट्रपतींचे समाधान झाले, तर प्रत्यक्ष घटना घडण्यापूर्वीदेखील अनुच्छेद ३५२ अंतर्गत उद्घोषणा करता येते.`
        },
        {
          heading: "अनुच्छेद ३५२ आणि आणीबाणीच्या तरतुदी",
          content: `अनुच्छेद ३५२ हा संविधानाच्या भाग XVIII मधील आणीबाणीच्या तरतुदींचा प्रमुख प्रारंभिक अनुच्छेद आहे. या भागातील पुढील अनुच्छेद आणीबाणीच्या परिणामांशी आणि संबंधित घटनात्मक बाबींशी संबंधित आहेत.`
        },
        {
          heading: "अनुच्छेद ३५२ सोप्या भाषेत",
          content: `अनुच्छेद ३५२ नुसार युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या किंवा त्याच्या कोणत्याही भागाच्या सुरक्षेला गंभीर धोका निर्माण झाल्यास राष्ट्रीय आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया उपलब्ध आहे. या प्रक्रियेत केंद्रीय मंत्रिमंडळाचा लेखी निर्णय आणि संसदेची मंजुरी यांचा समावेश होतो.`
        }
      ]
    },
    keywords: [
      "Article 352",
      "Article 352 of Indian Constitution",
      "Proclamation of Emergency",
      "National Emergency",
      "Emergency provisions in India",
      "war external aggression armed rebellion",
      "Union Cabinet Article 352",
      "Parliament approval Emergency",
      "Article 352 in simple words",
      "कलम 352",
      "भारतीय संविधान कलम 352",
      "आणीबाणीची घोषणा",
      "राष्ट्रीय आणीबाणी",
      "आणीबाणीच्या तरतुदी",
      "युद्ध बाह्य आक्रमण सशस्त्र बंड"
    ],
    relatedIds: ["353", "354", "355", "356", "358", "359"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "15",
    articleNumber: "Article 15",
    title: {
      en: "Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex or Place of Birth",
      mr: "धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर भेदभावास प्रतिबंध"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: `Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth.—(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.

(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—
(a) access to shops, public restaurants, hotels and places of public entertainment; or
(b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.

(3) Nothing in this article shall prevent the State from making any special provision for women and children.

(4) Nothing in this article or in clause (2) of article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes.

(5) Nothing in this article or in sub-clause (g) of clause (1) of article 19 shall prevent the State from making any special provision, by law, for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes or the Scheduled Tribes in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30.

(6) Nothing in this article or sub-clause (g) of clause (1) of article 19 or clause (2) of article 29 shall prevent the State from making—
(a) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5); and
(b) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5) in so far as such special provision relates to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30, which in the case of reservation would be in addition to the existing reservation and subject to a maximum of ten per cent. of the seats in each category.`,
      mr: `धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर भेदभावास प्रतिबंध.—(१) राज्य, केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यांपैकी कोणत्याही एका कारणावरून कोणत्याही नागरिकाशी भेदभाव करणार नाही.

(२) कोणत्याही नागरिकाला, केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यांपैकी कोणत्याही एका कारणावरून—
(क) दुकाने, सार्वजनिक उपाहारगृहे, हॉटेल्स आणि सार्वजनिक मनोरंजनाची ठिकाणे; किंवा
(ख) राज्याच्या निधीतून पूर्णतः किंवा अंशतः चालविल्या जाणाऱ्या किंवा सर्वसामान्य जनतेच्या वापरासाठी समर्पित विहिरी, तलाव, स्नानघाट, रस्ते आणि सार्वजनिक ठिकाणे,
यांच्या वापराबाबत कोणतीही अपंगता, दायित्व, निर्बंध किंवा अट लादली जाणार नाही.

(३) या अनुच्छेदातील कोणतीही गोष्ट राज्याला महिला आणि बालकांसाठी कोणतीही विशेष तरतूद करण्यापासून प्रतिबंधित करणार नाही.

(४) या अनुच्छेदातील किंवा अनुच्छेद २९ च्या खंड (२) मधील कोणतीही गोष्ट राज्याला सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या नागरिकांच्या वर्गाच्या किंवा अनुसूचित जाती आणि अनुसूचित जमातींच्या प्रगतीसाठी कोणतीही विशेष तरतूद करण्यापासून प्रतिबंधित करणार नाही.

(५) या अनुच्छेदातील किंवा अनुच्छेद १९ च्या खंड (१) च्या उपखंड (ग) मधील कोणतीही गोष्ट राज्याला कायद्याद्वारे सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या नागरिकांच्या वर्गाच्या किंवा अनुसूचित जाती किंवा अनुसूचित जमातींच्या प्रगतीसाठी शैक्षणिक संस्थांमध्ये प्रवेशासंबंधी कोणतीही विशेष तरतूद करण्यापासून प्रतिबंधित करणार नाही. यामध्ये राज्याकडून सहाय्यित किंवा असहाय्यित अशा खाजगी शैक्षणिक संस्थांचाही समावेश होतो; मात्र अनुच्छेद ३०(१) मध्ये नमूद केलेल्या अल्पसंख्याक शैक्षणिक संस्था याला अपवाद आहेत.

(६) या अनुच्छेदातील किंवा अनुच्छेद १९(१)(ग) मधील किंवा अनुच्छेद २९(२) मधील कोणतीही गोष्ट राज्याला—
(क) खंड (४) आणि (५) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांच्या प्रगतीसाठी कोणतीही विशेष तरतूद करण्यापासून; आणि
(ख) अशा आर्थिकदृष्ट्या दुर्बल घटकांच्या शैक्षणिक संस्थांमधील प्रवेशाच्या संदर्भात विशेष तरतूद करण्यापासून प्रतिबंधित करणार नाही. यात राज्याकडून सहाय्यित किंवा असहाय्यित खाजगी शैक्षणिक संस्थांचाही समावेश होतो; मात्र अनुच्छेद ३०(१) मध्ये नमूद केलेल्या अल्पसंख्याक शैक्षणिक संस्था याला अपवाद आहेत. आरक्षणाच्या बाबतीत अशी तरतूद विद्यमान आरक्षणाव्यतिरिक्त असेल आणि प्रत्येक प्रवर्गातील जागांच्या जास्तीत जास्त दहा टक्क्यांपर्यंत असेल.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 15 is an important Fundamental Right under the Right to Equality. It prevents the State from discriminating against citizens solely on the grounds of religion, race, caste, sex or place of birth.

The protection also extends to access to certain public places and facilities. Article 15(2) specifically addresses shops, public restaurants, hotels and places of public entertainment, as well as public-use facilities such as wells, tanks, bathing ghats, roads and other places maintained wholly or partly from State funds or dedicated to public use.

Article 15 does not mean that every form of classification or special provision is prohibited. The Constitution itself permits certain special provisions intended to address particular social and educational circumstances.

Article 15(3) permits special provisions for women and children. Article 15(4) permits special provisions for the advancement of socially and educationally backward classes and for the Scheduled Castes and Scheduled Tribes.

Article 15(5) deals specifically with special provisions relating to admission to educational institutions, including private educational institutions, subject to the constitutional exception for minority educational institutions under Article 30(1).

Article 15(6) provides for special provisions for economically weaker sections other than the classes covered by clauses (4) and (5), including provisions relating to admission to educational institutions, subject to the conditions stated in the Constitution.

Thus, Article 15 combines a general prohibition of discrimination with constitutionally permitted special provisions designed for specified groups and circumstances.`,
      mr: `अनुच्छेद १५ हा समानतेच्या अधिकाराचा एक महत्त्वाचा भाग आहे. तो राज्याला केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थान या आधारांवर नागरिकांशी भेदभाव करण्यास प्रतिबंध करतो.

या संरक्षणाचा संबंध काही सार्वजनिक ठिकाणे आणि सुविधांच्या वापराशीही आहे. अनुच्छेद १५(२) मध्ये दुकाने, सार्वजनिक उपाहारगृहे, हॉटेल्स, सार्वजनिक मनोरंजनाची ठिकाणे तसेच विहिरी, तलाव, स्नानघाट, रस्ते आणि सार्वजनिक वापरासाठी असलेल्या इतर ठिकाणांचा उल्लेख केला आहे.

अनुच्छेद १५ म्हणजे कोणत्याही प्रकारची विशेष तरतूद करता येणार नाही असा अर्थ होत नाही. संविधान स्वतः काही विशिष्ट सामाजिक आणि शैक्षणिक परिस्थितींमध्ये विशेष तरतुदींना परवानगी देते.

अनुच्छेद १५(३) महिला आणि बालकांसाठी विशेष तरतुदी करण्यास परवानगी देतो. अनुच्छेद १५(४) सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या नागरिकांच्या वर्गांच्या तसेच अनुसूचित जाती आणि अनुसूचित जमातींच्या प्रगतीसाठी विशेष तरतुदींना परवानगी देतो.

अनुच्छेद १५(५) शैक्षणिक संस्थांमधील प्रवेशाशी संबंधित विशेष तरतुदींशी संबंधित आहे. यात काही अटींसह खाजगी शैक्षणिक संस्थांचाही समावेश होतो; मात्र अनुच्छेद ३०(१) मधील अल्पसंख्याक शैक्षणिक संस्था याला अपवाद आहेत.

अनुच्छेद १५(६) आर्थिकदृष्ट्या दुर्बल घटकांसाठी विशेष तरतुदींना परवानगी देतो. यात शैक्षणिक संस्थांमधील प्रवेशाशी संबंधित तरतुदींचाही समावेश आहे आणि संविधानाने त्यासाठी काही विशिष्ट अटी दिल्या आहेत.

म्हणून अनुच्छेद १५ एकीकडे विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो आणि दुसरीकडे संविधानाने स्पष्टपणे परवानगी दिलेल्या काही विशेष तरतुदींसाठी जागा ठेवतो.`
    },
    verySimple: {
      en: "Article 15 prohibits discrimination against citizens solely on the grounds of religion, race, caste, sex or place of birth, while allowing certain constitutionally permitted special provisions for specified groups.",
      mr: "अनुच्छेद १५ नागरिकांशी केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर भेदभाव करण्यास प्रतिबंध करतो आणि संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींनाही मान्यता देतो."
    },
    example: {
      en: `Suppose a public facility covered by Article 15(2) is available for general public use. A citizen cannot be denied access to that facility solely because of the citizen's religion, race, caste, sex or place of birth.

Another example is a law that makes a special provision for women or children. Article 15(3) expressly permits the State to make such special provisions.

Similarly, the Constitution permits certain special provisions for socially and educationally backward classes, Scheduled Castes and Scheduled Tribes, and economically weaker sections, subject to the specific constitutional conditions.

These examples show that Article 15 contains both a prohibition against specified forms of discrimination and express constitutional permission for certain special provisions.`,
      mr: `समजा अनुच्छेद १५(२) अंतर्गत येणारी एखादी सार्वजनिक सुविधा सर्वसामान्य जनतेच्या वापरासाठी उपलब्ध आहे. एखाद्या नागरिकाला केवळ त्याच्या धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर त्या सुविधेचा वापर करण्यापासून रोखता येणार नाही.

दुसरे उदाहरण म्हणजे महिला किंवा बालकांसाठी एखादी विशेष तरतूद करणारा कायदा. अनुच्छेद १५(३) राज्याला अशा विशेष तरतुदी करण्याची परवानगी देतो.

त्याचप्रमाणे सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या वर्गांसाठी, अनुसूचित जाती-जमातींसाठी तसेच आर्थिकदृष्ट्या दुर्बल घटकांसाठी संविधानातील संबंधित अटींच्या अधीन राहून काही विशेष तरतुदी करता येतात.

यावरून स्पष्ट होते की अनुच्छेद १५ मध्ये विशिष्ट प्रकारच्या भेदभावास प्रतिबंध करण्याबरोबरच काही विशेष तरतुदींनाही घटनात्मक मान्यता दिली आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 15 of the Indian Constitution?",
          content: `Article 15 is a Fundamental Right under the Right to Equality. It prohibits the State from discriminating against any citizen solely on the grounds of religion, race, caste, sex or place of birth.`
        },
        {
          heading: "What does Article 15 say?",
          content: `Article 15 prohibits specified forms of discrimination and also contains constitutional provisions permitting certain special measures for women, children, socially and educationally backward classes, Scheduled Castes, Scheduled Tribes and economically weaker sections.`
        },
        {
          heading: "Which Fundamental Right includes Article 15?",
          content: `Article 15 forms part of the Right to Equality under Part III of the Constitution. It follows Article 14 and is closely related to the constitutional guarantee of equality.`
        },
        {
          heading: "Which grounds of discrimination are prohibited under Article 15?",
          content: `Article 15(1) specifically refers to religion, race, caste, sex and place of birth. The State cannot discriminate against a citizen solely on any of these grounds or a combination of them.`
        },
        {
          heading: "Does Article 15 protect citizens from discrimination?",
          content: `Yes. Article 15(1) protects citizens against discrimination by the State on the specified grounds. Article 15(2) additionally addresses certain forms of exclusion from public places and facilities.`
        },
        {
          heading: "What does Article 15(2) provide?",
          content: `Article 15(2) provides that citizens cannot, solely on the specified grounds, be subjected to disability, liability, restriction or condition regarding access to listed public places and public-use facilities.`
        },
        {
          heading: "Does Article 15 allow special provisions for women and children?",
          content: `Yes. Article 15(3) expressly permits the State to make special provisions for women and children.`
        },
        {
          heading: "What is Article 15(4)?",
          content: `Article 15(4) permits the State to make special provisions for the advancement of socially and educationally backward classes of citizens and for the Scheduled Castes and Scheduled Tribes.`
        },
        {
          heading: "What is Article 15(5)?",
          content: `Article 15(5) permits certain special provisions by law concerning admission to educational institutions for socially and educationally backward classes and for Scheduled Castes and Scheduled Tribes, subject to the constitutional conditions and the exception for minority educational institutions under Article 30(1).`
        },
        {
          heading: "What is Article 15(6)?",
          content: `Article 15(6) permits special provisions for economically weaker sections other than the classes mentioned in clauses (4) and (5). It also addresses certain special provisions concerning admission to educational institutions, including private educational institutions, subject to the constitutional conditions.`
        },
        {
          heading: "Article 15 and equality before law",
          content: `Article 15 is closely connected with the broader constitutional principle of equality. Article 14 provides equality before law and equal protection of laws, while Article 15 addresses specified forms of discrimination against citizens.`
        },
        {
          heading: "Article 15 and Article 16 difference",
          content: `Article 15 primarily concerns discrimination in the contexts covered by its provisions, including public access and certain educational provisions. Article 16 specifically concerns equality of opportunity in matters of public employment.`
        },
        {
          heading: "Why is Article 15 important?",
          content: `Article 15 provides a constitutional safeguard against discrimination on specified grounds while recognising that the Constitution may permit certain special provisions to address specified social, educational and economic circumstances.`
        },
        {
          heading: "Article 15 in simple words",
          content: `In simple words, Article 15 says that citizens should not be discriminated against by the State solely because of religion, race, caste, sex or place of birth. At the same time, the Constitution permits certain special provisions for specified groups.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद १५ म्हणजे काय?",
          content: `अनुच्छेद १५ हा समानतेच्या अधिकाराचा भाग आहे. तो राज्याला केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर नागरिकांशी भेदभाव करण्यास प्रतिबंध करतो.`
        },
        {
          heading: "अनुच्छेद १५ मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद १५ विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो आणि महिला, बालक, सामाजिक व शैक्षणिकदृष्ट्या मागासलेले वर्ग, अनुसूचित जाती-जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांसाठी संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींची तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद १५ कोणत्या मूलभूत अधिकाराचा भाग आहे?",
          content: `अनुच्छेद १५ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४ नंतर येतो आणि समानतेच्या घटनात्मक तत्त्वाशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद १५ अंतर्गत कोणत्या आधारांवरील भेदभावास प्रतिबंध आहे?",
          content: `अनुच्छेद १५(१) मध्ये धर्म, वंश, जात, लिंग आणि जन्मस्थान या आधारांचा स्पष्ट उल्लेख आहे. या आधारांपैकी कोणत्याही एका किंवा एकापेक्षा अधिक आधारांवर केवळ भेदभाव करता येत नाही.`
        },
        {
          heading: "अनुच्छेद १५ नागरिकांना भेदभावापासून संरक्षण देतो का?",
          content: `होय. अनुच्छेद १५(१) राज्याकडून विशिष्ट आधारांवर होणाऱ्या भेदभावापासून नागरिकांचे संरक्षण करतो. अनुच्छेद १५(२) काही सार्वजनिक ठिकाणे आणि सुविधांमधील प्रवेशाशी संबंधित अतिरिक्त संरक्षण देतो.`
        },
        {
          heading: "अनुच्छेद १५(२) मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद १५(२) नुसार केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर नागरिकाला दुकाने, सार्वजनिक उपाहारगृहे, हॉटेल्स, सार्वजनिक मनोरंजनाची ठिकाणे आणि संविधानात नमूद केलेल्या इतर सार्वजनिक सुविधांच्या वापरावर निर्बंध लावता येत नाहीत.`
        },
        {
          heading: "अनुच्छेद १५ महिलांसाठी आणि बालकांसाठी विशेष तरतूद करण्यास परवानगी देतो का?",
          content: `होय. अनुच्छेद १५(३) राज्याला महिला आणि बालकांसाठी विशेष तरतुदी करण्याची स्पष्ट परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद १५(४) म्हणजे काय?",
          content: `अनुच्छेद १५(४) राज्याला सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या नागरिकांच्या वर्गांच्या तसेच अनुसूचित जाती आणि अनुसूचित जमातींच्या प्रगतीसाठी विशेष तरतुदी करण्याची परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद १५(५) म्हणजे काय?",
          content: `अनुच्छेद १५(५) काही घटनात्मक अटींच्या अधीन राहून सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या वर्गांसाठी तसेच अनुसूचित जाती-जमातींसाठी शैक्षणिक संस्थांमध्ये प्रवेशासंबंधी विशेष तरतुदी करण्यास परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद १५(६) म्हणजे काय?",
          content: `अनुच्छेद १५(६) खंड (४) आणि (५) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी विशेष तरतुदींना परवानगी देतो. यात काही अटींच्या अधीन राहून शैक्षणिक संस्थांमधील प्रवेशाशी संबंधित तरतुदींचाही समावेश आहे.`
        },
        {
          heading: "अनुच्छेद १५ आणि कायद्यापुढील समानता",
          content: `अनुच्छेद १५ हा व्यापक समानतेच्या घटनात्मक तत्त्वाशी संबंधित आहे. अनुच्छेद १४ कायद्यापुढे समानता आणि कायद्यांचे समान संरक्षण सांगतो, तर अनुच्छेद १५ विशिष्ट प्रकारच्या भेदभावास प्रतिबंध करतो.`
        },
        {
          heading: "अनुच्छेद १५ आणि अनुच्छेद १६ मध्ये काय फरक आहे?",
          content: `अनुच्छेद १५ विशिष्ट आधारांवरील भेदभाव आणि त्यातील सार्वजनिक व शैक्षणिक संदर्भांशी संबंधित आहे. अनुच्छेद १६ विशेषतः राज्याच्या अंतर्गत सार्वजनिक रोजगार आणि नियुक्तीतील समान संधीशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद १५ महत्त्वाचा का आहे?",
          content: `अनुच्छेद १५ नागरिकांना विशिष्ट आधारांवरील भेदभावापासून घटनात्मक संरक्षण देतो. त्याच वेळी, विशिष्ट सामाजिक, शैक्षणिक आणि आर्थिक परिस्थितींना संबोधित करण्यासाठी संविधानाने परवानगी दिलेल्या विशेष तरतुदींनाही तो मान्यता देतो.`
        },
        {
          heading: "अनुच्छेद १५ सोप्या भाषेत",
          content: `सोप्या भाषेत, राज्याने नागरिकांशी केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानामुळे भेदभाव करू नये, असे अनुच्छेद १५ सांगतो. त्याच वेळी संविधानाने काही विशिष्ट वर्गांसाठी विशेष तरतुदींनाही परवानगी दिली आहे.`
        }
      ]
    },
    keywords: [
      "Article 15",
      "Article 15 of Indian Constitution",
      "Prohibition of discrimination",
      "Right to Equality",
      "Article 15(1)",
      "Article 15(2)",
      "Article 15(3)",
      "Article 15(4)",
      "Article 15(5)",
      "Article 15(6)",
      "discrimination on grounds of religion caste sex",
      "Article 15 reservation provisions",
      "कलम 15",
      "भारतीय संविधान कलम 15",
      "भेदभावास प्रतिबंध",
      "समानतेचा अधिकार",
      "कलम 15(4)",
      "कलम 15(5)",
      "कलम 15(6)"
    ],
    relatedIds: ["14", "16", "17", "18", "19"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
  },
  {
    id: "16",
    articleNumber: "Article 16",
    title: {
      en: "Equality of Opportunity in Matters of Public Employment",
      mr: "सार्वजनिक रोजगाराच्या बाबतीत समान संधी"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: `Equality of opportunity in matters of public employment.—(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.

(2) No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.

(3) Nothing in this article shall prevent Parliament from making any law prescribing, in regard to a class or classes of employment or appointment to an office under the Government of, or any local or other authority within, a State or Union territory, any requirement as to residence within that State or Union territory prior to such employment or appointment.

(4) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.

(4A) Nothing in this article shall prevent the State from making any provision for reservation in matters of promotion, with consequential seniority, to any class or classes of posts in the services under the State in favour of the Scheduled Castes and the Scheduled Tribes which, in the opinion of the State, are not adequately represented in the services under the State.

(4B) Nothing in this article shall prevent the State from considering any unfilled vacancies of a year which are reserved for being filled up in that year in accordance with any provision for reservation made under clause (4) or clause (4A) as a separate class of vacancies to be filled up in any succeeding year or years and such class of vacancies shall not be considered together with the vacancies of the year in which they are being filled up for determining the ceiling of fifty per cent. reservation on total number of vacancies of that year.

(5) Nothing in this article shall affect the operation of any law which provides that the incumbent of an office in connection with the affairs of any religious or denominational institution or any member of the governing body thereof shall be a person professing a particular religion or belonging to a particular denomination.

(6) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any economically weaker sections of citizens other than the classes mentioned in clause (4), and such reservation would be in addition to the existing reservation and subject to a maximum of ten per cent. of the posts in each category.`,
      mr: `सार्वजनिक रोजगाराच्या बाबतीत समान संधी.—(१) राज्याच्या अंतर्गत कोणत्याही रोजगाराच्या किंवा पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असेल.

(२) कोणत्याही नागरिकाला केवळ धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान, निवास किंवा यांपैकी कोणत्याही कारणावरून राज्याच्या अंतर्गत कोणत्याही रोजगारासाठी किंवा पदासाठी अपात्र ठरविले जाणार नाही किंवा त्याच्याशी भेदभाव केला जाणार नाही.

(३) या अनुच्छेदातील कोणतीही गोष्ट संसदेला एखाद्या राज्यात किंवा केंद्रशासित प्रदेशात असलेल्या सरकारच्या किंवा स्थानिक किंवा इतर प्राधिकरणाच्या अंतर्गत रोजगार किंवा पदावरील नियुक्तीसाठी त्या राज्यात किंवा केंद्रशासित प्रदेशात पूर्वीपासून निवासाची आवश्यकता निश्चित करणारा कायदा करण्यापासून प्रतिबंधित करणार नाही.

(४) या अनुच्छेदातील कोणतीही गोष्ट राज्याला अशा मागासलेल्या नागरिकांच्या वर्गाच्या नियुक्त्या किंवा पदांमध्ये आरक्षणाची तरतूद करण्यापासून प्रतिबंधित करणार नाही, ज्यांचे राज्याच्या सेवांमध्ये पुरेसे प्रतिनिधित्व नाही असे राज्याच्या मते आढळते.

(४A) या अनुच्छेदातील कोणतीही गोष्ट राज्याला राज्याच्या सेवांमधील अशा पदांच्या वर्गात किंवा वर्गांमध्ये अनुसूचित जाती आणि अनुसूचित जमातींसाठी, ज्यांचे पुरेसे प्रतिनिधित्व नाही असे राज्याच्या मते आढळते, परिणामी ज्येष्ठतेसह पदोन्नतीच्या बाबतीत आरक्षणाची तरतूद करण्यापासून प्रतिबंधित करणार नाही.

(४B) या अनुच्छेदातील कोणतीही गोष्ट राज्याला खंड (४) किंवा खंड (४A) अंतर्गत केलेल्या आरक्षणाच्या तरतुदीनुसार एखाद्या वर्षात भरल्या जाण्यासाठी राखीव असलेल्या आणि त्या वर्षी न भरलेल्या रिक्त जागांना पुढील कोणत्याही वर्षात किंवा वर्षांमध्ये भरण्यासाठी स्वतंत्र वर्गातील रिक्त जागा म्हणून विचार करण्यापासून प्रतिबंधित करणार नाही. अशा रिक्त जागांचा त्या पुढील वर्षातील रिक्त जागांसोबत एकत्रितपणे त्या वर्षातील एकूण रिक्त जागांवरील पन्नास टक्के आरक्षणाची मर्यादा ठरविण्यासाठी विचार केला जाणार नाही.

(५) या अनुच्छेदातील कोणतीही गोष्ट अशा कायद्याच्या अंमलबजावणीवर परिणाम करणार नाही, ज्यामध्ये धार्मिक किंवा सांप्रदायिक संस्थेच्या कामकाजाशी संबंधित पद धारण करणारी व्यक्ती किंवा त्या संस्थेच्या प्रशासकीय मंडळाचा सदस्य हा विशिष्ट धर्म मानणारा किंवा विशिष्ट पंथाशी संबंधित असलेला व्यक्ती असावा अशी तरतूद आहे.

(६) या अनुच्छेदातील कोणतीही गोष्ट राज्याला खंड (४) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी नियुक्त्या किंवा पदांमध्ये आरक्षणाची तरतूद करण्यापासून प्रतिबंधित करणार नाही. असे आरक्षण विद्यमान आरक्षणाव्यतिरिक्त असेल आणि प्रत्येक प्रवर्गातील पदांच्या जास्तीत जास्त दहा टक्क्यांपर्यंत असेल.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 16 is a Fundamental Right under the Right to Equality and specifically deals with equality of opportunity in matters of public employment.

Article 16(1) provides that all citizens should have equality of opportunity in matters relating to employment or appointment to offices under the State. This means that public employment must operate within the constitutional principle of equal opportunity.

Article 16(2) prohibits discrimination in public employment solely on the grounds of religion, race, caste, sex, descent, place of birth or residence.

The Constitution also recognises specific circumstances in which special provisions can be made. Article 16(3) permits Parliament to prescribe certain residence requirements for specified classes of employment or appointments.

Article 16(4) permits the State to make reservation provisions for backward classes of citizens that, in the opinion of the State, are not adequately represented in State services.

Article 16(4A) concerns reservation in promotion, with consequential seniority, for Scheduled Castes and Scheduled Tribes where the constitutional conditions mentioned in the provision are satisfied. Article 16(4B) deals with certain unfilled reserved vacancies and their treatment in subsequent years.

Article 16(5) recognises a specific exception concerning offices connected with the affairs of religious or denominational institutions.

Article 16(6) permits the State to make reservation provisions for economically weaker sections other than the classes mentioned in Article 16(4), subject to the constitutional conditions and the maximum specified in the Constitution.

Therefore, Article 16 establishes the constitutional framework for equality of opportunity in public employment while also providing for specified exceptions and special provisions.`,
      mr: `अनुच्छेद १६ हा समानतेच्या अधिकाराचा भाग असून तो विशेषतः सार्वजनिक रोजगाराच्या बाबतीत समान संधीशी संबंधित आहे.

अनुच्छेद १६(१) नुसार राज्याच्या अंतर्गत रोजगार किंवा कोणत्याही पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी मिळाली पाहिजे. त्यामुळे सार्वजनिक रोजगाराची प्रक्रिया समान संधीच्या घटनात्मक तत्त्वानुसार असणे अपेक्षित आहे.

अनुच्छेद १६(२) धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान किंवा निवास या आधारांवर केवळ भेदभाव करून राज्याच्या अंतर्गत रोजगार किंवा पदासाठी नागरिकाला अपात्र ठरविण्यास प्रतिबंध करतो.

संविधान काही विशिष्ट परिस्थितींमध्ये विशेष तरतुदींनाही परवानगी देते. अनुच्छेद १६(३) संसदेला विशिष्ट प्रकारच्या रोजगार किंवा नियुक्तीसाठी काही परिस्थितींमध्ये निवासाची अट निश्चित करण्याचा अधिकार देतो.

अनुच्छेद १६(४) अशा मागासलेल्या नागरिकांच्या वर्गांसाठी नियुक्त्या किंवा पदांमध्ये आरक्षणाची तरतूद करण्यास परवानगी देतो, ज्यांचे राज्याच्या सेवांमध्ये पुरेसे प्रतिनिधित्व नाही असे राज्याच्या मते आढळते.

अनुच्छेद १६(४A) अनुसूचित जाती आणि अनुसूचित जमातींसाठी काही घटनात्मक अटींच्या अधीन राहून पदोन्नतीमध्ये, परिणामी ज्येष्ठतेसह, आरक्षणाशी संबंधित आहे. अनुच्छेद १६(४B) काही न भरलेल्या राखीव रिक्त जागांच्या पुढील वर्षांतील विचाराशी संबंधित आहे.

अनुच्छेद १६(५) धार्मिक किंवा सांप्रदायिक संस्थांशी संबंधित विशिष्ट पदांसाठी धर्म किंवा पंथाशी संबंधित असण्याच्या अटीबाबत तरतूद करतो.

अनुच्छेद १६(६) अनुच्छेद १६(४) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी आरक्षणाची तरतूद करण्यास परवानगी देतो, संविधानात दिलेल्या अटींच्या अधीन राहून.

म्हणून अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीसाठी घटनात्मक चौकट तयार करतो आणि त्याच वेळी संविधानाने स्पष्टपणे मान्य केलेल्या काही विशेष तरतुदींनाही जागा देतो.`
    },
    verySimple: {
      en: "Article 16 guarantees equality of opportunity for citizens in matters of public employment and prohibits discrimination on specified grounds, while allowing certain constitutionally permitted special provisions.",
      mr: "अनुच्छेद १६ सार्वजनिक रोजगाराच्या बाबतीत नागरिकांना समान संधी देतो आणि विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो, तसेच संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींना मान्यता देतो."
    },
    example: {
      en: `Suppose a citizen applies for a government job. The selection process must provide equality of opportunity and cannot exclude the citizen solely because of religion, race, caste, sex, descent, place of birth or residence, subject to the specific constitutional provisions.

Another example concerns reservation. Where the constitutional requirements of Article 16 are satisfied, the State may make provisions for reservation in public employment for specified categories covered by the relevant clauses.

Article 16 also recognises that Parliament may prescribe certain residence requirements for specified classes of employment and that the Constitution permits particular reservation provisions, including those relating to Scheduled Castes, Scheduled Tribes and economically weaker sections under the conditions stated in the Article.

These examples show that Article 16 combines the general principle of equal opportunity with specific constitutional provisions concerning public employment.`,
      mr: `समजा एखादा नागरिक सरकारी नोकरीसाठी अर्ज करतो. निवड प्रक्रियेत समान संधीचे घटनात्मक तत्त्व पाळले पाहिजे आणि केवळ धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान किंवा निवास या आधारांवर त्याला अपात्र ठरवता येणार नाही, अर्थात संविधानातील विशिष्ट तरतुदी लागू असतील त्या अधीन राहून.

दुसरे उदाहरण आरक्षणाशी संबंधित आहे. अनुच्छेद १६ मधील संबंधित घटनात्मक अटी पूर्ण झाल्यास, राज्य सार्वजनिक रोजगारामध्ये काही विशिष्ट वर्गांसाठी आरक्षणाची तरतूद करू शकते.

तसेच संसदेला काही विशिष्ट प्रकारच्या रोजगारासाठी निवासाची अट निश्चित करण्याची घटनात्मक तरतूद आहे. अनुसूचित जाती, अनुसूचित जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांसाठीही अनुच्छेद १६ मध्ये संबंधित अटींसह विशेष तरतुदींची व्यवस्था आहे.

यावरून स्पष्ट होते की अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीच्या सामान्य तत्त्वासोबत काही विशिष्ट घटनात्मक तरतुदींनाही मान्यता देतो.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 16 of the Indian Constitution?",
          content: `Article 16 is a Fundamental Right under the Right to Equality. It provides for equality of opportunity for citizens in matters relating to employment or appointment to any office under the State.`
        },
        {
          heading: "What does Article 16 say?",
          content: `Article 16 provides equality of opportunity in public employment and prohibits discrimination on specified grounds. It also contains provisions relating to residence requirements, reservation and certain exceptions.`
        },
        {
          heading: "Which Fundamental Right includes Article 16?",
          content: `Article 16 is part of the Right to Equality under Part III of the Constitution. It follows Articles 14 and 15 and focuses specifically on public employment.`
        },
        {
          heading: "What is Article 16(1)?",
          content: `Article 16(1) provides that there shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.`
        },
        {
          heading: "What does Article 16(2) prohibit?",
          content: `Article 16(2) prohibits a citizen from being made ineligible for or discriminated against in public employment solely on grounds of religion, race, caste, sex, descent, place of birth or residence.`
        },
        {
          heading: "What is Article 16(3)?",
          content: `Article 16(3) permits Parliament to make a law prescribing certain residence requirements for specified classes of employment or appointment under a State or Union territory.`
        },
        {
          heading: "What is Article 16(4)?",
          content: `Article 16(4) permits the State to make provision for reservation of appointments or posts in favour of backward classes of citizens that, in the opinion of the State, are not adequately represented in services under the State.`
        },
        {
          heading: "What is Article 16(4A)?",
          content: `Article 16(4A) permits the State to make provisions for reservation in matters of promotion, with consequential seniority, for Scheduled Castes and Scheduled Tribes where the constitutional conditions specified in the clause are satisfied.`
        },
        {
          heading: "What is Article 16(4B)?",
          content: `Article 16(4B) deals with certain unfilled reserved vacancies and permits them to be treated as a separate class of vacancies for being filled in subsequent years, subject to the constitutional provision.`
        },
        {
          heading: "What is Article 16(5)?",
          content: `Article 16(5) provides that the Article does not affect a law requiring the incumbent of an office connected with the affairs of a religious or denominational institution, or a member of its governing body, to profess a particular religion or belong to a particular denomination.`
        },
        {
          heading: "What is Article 16(6)?",
          content: `Article 16(6) permits the State to make reservation provisions for economically weaker sections other than the classes mentioned in Article 16(4), subject to the conditions and maximum specified in the Constitution.`
        },
        {
          heading: "Article 16 and reservation in public employment",
          content: `Article 16 contains several provisions concerning reservation in public employment. These provisions apply within the constitutional framework and include specific clauses concerning backward classes, Scheduled Castes, Scheduled Tribes and economically weaker sections.`
        },
        {
          heading: "What is the difference between Article 15 and Article 16?",
          content: `Article 15 primarily addresses specified forms of discrimination and certain special provisions in contexts covered by that Article. Article 16 specifically deals with equality of opportunity in matters of public employment.`
        },
        {
          heading: "Why is Article 16 important?",
          content: `Article 16 provides a constitutional framework for equality of opportunity in public employment. It also explains specific circumstances in which Parliament or the State may make provisions concerning residence or reservation.`
        },
        {
          heading: "Article 16 in simple words",
          content: `In simple words, Article 16 says that citizens should receive equal opportunity in public employment and should not be discriminated against solely on the specified grounds, while certain special constitutional provisions may apply.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद १६ म्हणजे काय?",
          content: `अनुच्छेद १६ हा समानतेच्या अधिकाराचा भाग आहे. तो राज्याच्या अंतर्गत रोजगार किंवा पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी देण्याची घटनात्मक तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद १६ मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधी आणि विशिष्ट आधारांवरील भेदभावास प्रतिबंध याबद्दल सांगतो. तसेच निवासाची अट, आरक्षण आणि काही विशिष्ट अपवादांशी संबंधित तरतुदीही यात आहेत.`
        },
        {
          heading: "अनुच्छेद १६ कोणत्या मूलभूत अधिकाराचा भाग आहे?",
          content: `अनुच्छेद १६ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४ आणि १५ नंतर येतो आणि विशेषतः सार्वजनिक रोजगाराशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद १६(१) म्हणजे काय?",
          content: `अनुच्छेद १६(१) नुसार राज्याच्या अंतर्गत रोजगार किंवा कोणत्याही पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असली पाहिजे.`
        },
        {
          heading: "अनुच्छेद १६(२) मध्ये कोणत्या गोष्टींना प्रतिबंध आहे?",
          content: `अनुच्छेद १६(२) नुसार धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान किंवा निवास या आधारांवर केवळ भेदभाव करून नागरिकाला राज्याच्या अंतर्गत रोजगार किंवा पदासाठी अपात्र ठरवता येत नाही.`
        },
        {
          heading: "अनुच्छेद १६(३) म्हणजे काय?",
          content: `अनुच्छेद १६(३) संसदेला विशिष्ट प्रकारच्या रोजगार किंवा नियुक्तीसाठी राज्य किंवा केंद्रशासित प्रदेशात निवासाची काही अट निश्चित करणारा कायदा करण्याची परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद १६(४) म्हणजे काय?",
          content: `अनुच्छेद १६(४) राज्याला अशा मागासलेल्या नागरिकांच्या वर्गासाठी नियुक्त्या किंवा पदांमध्ये आरक्षणाची तरतूद करण्यास परवानगी देतो, ज्यांचे राज्याच्या सेवांमध्ये पुरेसे प्रतिनिधित्व नाही असे राज्याच्या मते आढळते.`
        },
        {
          heading: "अनुच्छेद १६(४A) म्हणजे काय?",
          content: `अनुच्छेद १६(४A) घटनात्मक अटी पूर्ण झाल्यास अनुसूचित जाती आणि अनुसूचित जमातींसाठी पदोन्नतीमध्ये, परिणामी ज्येष्ठतेसह, आरक्षणाची तरतूद करण्यास राज्याला परवानगी देतो.`
        },
        {
          heading: "अनुच्छेद १६(४B) म्हणजे काय?",
          content: `अनुच्छेद १६(४B) काही न भरलेल्या राखीव रिक्त जागांशी संबंधित आहे. अशा रिक्त जागांना पुढील वर्षांत भरण्यासाठी स्वतंत्र वर्गातील रिक्त जागा म्हणून विचार करण्याची घटनात्मक तरतूद यात आहे.`
        },
        {
          heading: "अनुच्छेद १६(५) म्हणजे काय?",
          content: `अनुच्छेद १६(५) धार्मिक किंवा सांप्रदायिक संस्थांशी संबंधित विशिष्ट पदांसाठी विशिष्ट धर्म किंवा पंथाशी संबंधित असण्याची अट असलेल्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही अशी तरतूद करतो.`
        },
        {
          heading: "अनुच्छेद १६(६) म्हणजे काय?",
          content: `अनुच्छेद १६(६) अनुच्छेद १६(४) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी सार्वजनिक रोजगारातील आरक्षणाच्या तरतुदींना परवानगी देतो, संविधानात नमूद केलेल्या अटी आणि मर्यादांच्या अधीन राहून.`
        },
        {
          heading: "अनुच्छेद १६ आणि सार्वजनिक रोजगारातील आरक्षण",
          content: `अनुच्छेद १६ मध्ये सार्वजनिक रोजगारातील आरक्षणाशी संबंधित अनेक तरतुदी आहेत. त्यामध्ये मागासलेले वर्ग, अनुसूचित जाती, अनुसूचित जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांशी संबंधित विशिष्ट घटनात्मक तरतुदींचा समावेश आहे.`
        },
        {
          heading: "अनुच्छेद १५ आणि अनुच्छेद १६ मध्ये काय फरक आहे?",
          content: `अनुच्छेद १५ विशिष्ट प्रकारच्या भेदभावास आणि त्यातील काही विशेष तरतुदींना संबोधित करतो. अनुच्छेद १६ विशेषतः राज्याच्या अंतर्गत सार्वजनिक रोजगारातील समान संधीशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद १६ महत्त्वाचा का आहे?",
          content: `अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीसाठी घटनात्मक चौकट प्रदान करतो. तसेच निवासाची अट किंवा आरक्षणासंबंधी काही विशिष्ट घटनात्मक तरतुदी कोणत्या परिस्थितीत लागू होऊ शकतात हे स्पष्ट करतो.`
        },
        {
          heading: "अनुच्छेद १६ सोप्या भाषेत",
          content: `सोप्या भाषेत, अनुच्छेद १६ नागरिकांना सार्वजनिक रोजगारामध्ये समान संधी मिळावी आणि संविधानात नमूद केलेल्या आधारांवर केवळ भेदभाव होऊ नये असे सांगतो. त्याच वेळी काही विशिष्ट घटनात्मक विशेष तरतुदींनाही परवानगी आहे.`
        }
      ]
    },
    keywords: [
      "Article 16",
      "Article 16 of Indian Constitution",
      "Equality of opportunity in public employment",
      "Article 16 public employment",
      "Article 16 reservation",
      "Article 16(1)",
      "Article 16(2)",
      "Article 16(3)",
      "Article 16(4)",
      "Article 16(4A)",
      "Article 16(4B)",
      "Article 16(5)",
      "Article 16(6)",
      "reservation in government jobs",
      "Right to Equality",
      "कलम 16",
      "भारतीय संविधान कलम 16",
      "सार्वजनिक रोजगारातील समान संधी",
      "सरकारी नोकरीतील समान संधी",
      "कलम 16 आरक्षण"
    ],
    relatedIds: ["14", "15", "17", "18", "19"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
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
      en: `Abolition of Untouchability.—“Untouchability” is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of “Untouchability” shall be an offence punishable in accordance with law.`,
      mr: `अस्पृश्यता निर्मूलन.—“अस्पृश्यता” नष्ट करण्यात आली आहे आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे. “अस्पृश्यते”मुळे उद्भवणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र असा अपराध असेल.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 17 is a Fundamental Right under the Right to Equality. It abolishes “Untouchability” and prohibits its practice in any form.

The Article does more than simply declare that untouchability is abolished. It also provides that enforcing any disability arising from untouchability is an offence punishable in accordance with law.

The constitutional provision is aimed at preventing exclusion, discrimination and disabilities imposed on people because of practices associated with untouchability. It therefore gives the principle constitutional status and requires the legal system to address conduct arising from such practices.

Article 17 is different from Article 15 in its specific constitutional focus. Article 15 prohibits discrimination on specified grounds, while Article 17 specifically abolishes untouchability and makes enforcement of disabilities arising from it an offence punishable according to law.

Parliament has enacted laws to give effect to Article 17. The Untouchability (Offences) Act, 1955 was subsequently amended and renamed the Protection of Civil Rights Act, 1955. The Legislative Department records that the Protection of Civil Rights Act was enacted in pursuance of Article 17.

Therefore, Article 17 is both a constitutional prohibition and a foundation for legal protection against disabilities arising from the practice of untouchability.`,
      mr: `अनुच्छेद १७ हा समानतेच्या अधिकाराचा एक महत्त्वाचा भाग आहे. तो “अस्पृश्यता” नष्ट करतो आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध करतो.

हा अनुच्छेद केवळ अस्पृश्यता नष्ट झाल्याचे घोषित करत नाही, तर अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध असल्याचेही स्पष्ट करतो.

अस्पृश्यतेशी संबंधित प्रथांमुळे व्यक्तींवर लादले जाणारे सामाजिक बहिष्कार, भेदभाव किंवा अपात्रता रोखणे हा या घटनात्मक तरतुदीचा महत्त्वाचा उद्देश आहे. त्यामुळे या तत्त्वाला संविधानिक संरक्षण मिळते आणि अशा प्रथांमधून निर्माण होणाऱ्या कृतींवर कायदेशीर कारवाईची व्यवस्था केली जाते.

अनुच्छेद १७ आणि अनुच्छेद १५ यांचा उद्देश समानतेशी संबंधित असला तरी त्यांचा घटनात्मक भर वेगळा आहे. अनुच्छेद १५ विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो, तर अनुच्छेद १७ विशेषतः अस्पृश्यता नष्ट करतो आणि तिच्यामुळे निर्माण होणाऱ्या अपात्रतेची अंमलबजावणी हा अपराध ठरवतो.

अनुच्छेद १७ ला प्रभावी करण्यासाठी संसदेकडून कायदे करण्यात आले आहेत. अस्पृश्यता (अपराध) अधिनियम, १९५५ मध्ये नंतर दुरुस्ती करण्यात आली आणि त्याचे नाव Protection of Civil Rights Act, 1955 असे करण्यात आले. विधायी विभागाच्या माहितीनुसार हा कायदा अनुच्छेद १७ च्या घटनात्मक तरतुदीच्या अनुषंगाने करण्यात आला.

म्हणून अनुच्छेद १७ हा घटनात्मक बंदीबरोबरच अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रता आणि भेदभावाविरुद्ध कायदेशीर संरक्षणाचा आधार आहे.`
    },
    verySimple: {
      en: "Article 17 abolishes untouchability and forbids its practice in any form. Enforcing any disability arising from untouchability is an offence punishable according to law.",
      mr: "अनुच्छेद १७ अस्पृश्यता नष्ट करतो आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध करतो. अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे."
    },
    example: {
      en: `Suppose a person is denied access to a place or facility solely because of a practice associated with untouchability. Such exclusion cannot be justified merely by treating it as a social custom, because Article 17 constitutionally abolishes untouchability and prohibits its practice.

Another example would be imposing a disability on a person because of a practice arising from untouchability. Article 17 specifically provides that enforcement of such a disability is an offence punishable in accordance with law.

The exact legal consequences depend on the applicable legislation and facts of the case. Article 17 provides the constitutional foundation for protection against such practices.`,
      mr: `समजा एखाद्या व्यक्तीला अस्पृश्यतेशी संबंधित प्रथेच्या आधारावर एखाद्या सार्वजनिक ठिकाणी किंवा सुविधेचा वापर करण्यापासून रोखले जाते. अशा प्रकारचा बहिष्कार केवळ सामाजिक प्रथा असल्याचे सांगून योग्य ठरवता येत नाही, कारण अनुच्छेद १७ अस्पृश्यता घटनात्मकदृष्ट्या नष्ट करतो आणि तिचा आचार निषिद्ध करतो.

दुसरे उदाहरण म्हणजे अस्पृश्यतेशी संबंधित प्रथेमुळे एखाद्या व्यक्तीवर कोणतीही अपात्रता लादणे. अनुच्छेद १७ स्पष्टपणे सांगतो की अशा अपात्रतेची अंमलबजावणी हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.

या कृतीचे नेमके कायदेशीर परिणाम संबंधित कायदा आणि प्रकरणातील तथ्यांवर अवलंबून असतात. अनुच्छेद १७ अशा प्रथांविरुद्ध घटनात्मक संरक्षणाचा आधार प्रदान करतो.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 17 of the Indian Constitution?",
          content: `Article 17 is a Fundamental Right that abolishes untouchability and prohibits its practice in any form. It also provides that enforcement of any disability arising from untouchability shall be an offence punishable according to law.`
        },
        {
          heading: "What does Article 17 say?",
          content: `Article 17 states that untouchability is abolished and that its practice in any form is forbidden. It further provides that enforcing any disability arising from untouchability is an offence punishable in accordance with law.`
        },
        {
          heading: "Which Fundamental Right includes Article 17?",
          content: `Article 17 forms part of the Right to Equality in Part III of the Constitution. It appears after Articles 14, 15 and 16 and before Article 18.`
        },
        {
          heading: "What is the purpose of Article 17?",
          content: `The purpose of Article 17 is to constitutionally abolish untouchability and prevent disabilities imposed on people because of practices arising from untouchability. It gives this protection the status of a Fundamental Right.`
        },
        {
          heading: "Does Article 17 prohibit untouchability in every form?",
          content: `Yes. The constitutional text expressly states that the practice of untouchability in any form is forbidden. The Article does not provide a constitutional exception permitting its practice.`
        },
        {
          heading: "Is violation of Article 17 punishable?",
          content: `Article 17 expressly provides that enforcement of any disability arising out of untouchability shall be an offence punishable in accordance with law. Parliament has enacted legislation giving effect to this constitutional provision.`
        },
        {
          heading: "Which law was made to give effect to Article 17?",
          content: `The Untouchability (Offences) Act, 1955 was enacted in pursuance of Article 17. It was subsequently amended and renamed the Protection of Civil Rights Act, 1955.`
        },
        {
          heading: "What is the Protection of Civil Rights Act, 1955?",
          content: `The Protection of Civil Rights Act, 1955 is legislation connected with the constitutional prohibition of untouchability under Article 17. It provides legal measures relating to offences associated with the enforcement of disabilities arising from untouchability.`
        },
        {
          heading: "What is the difference between Article 15 and Article 17?",
          content: `Article 15 prohibits discrimination on specified grounds such as religion, race, caste, sex and place of birth. Article 17 has a specific constitutional focus on abolishing untouchability and prohibiting its practice in any form.`
        },
        {
          heading: "Is Article 17 a Fundamental Right?",
          content: `Yes. Article 17 is contained in Part III of the Constitution, which deals with Fundamental Rights, under the Right to Equality.`
        },
        {
          heading: "Why is Article 17 important?",
          content: `Article 17 gives constitutional protection against untouchability and practices arising from it. It also expressly treats enforcement of disabilities arising from untouchability as an offence punishable according to law.`
        },
        {
          heading: "Article 17 and equality",
          content: `Article 17 supports the constitutional principle of equality by prohibiting a specific form of social exclusion and disability. It complements the broader equality protections contained in Articles 14, 15 and 16.`
        },
        {
          heading: "What does Article 17 mean in simple words?",
          content: `In simple words, Article 17 says that untouchability has no place under the Constitution. Its practice in any form is prohibited, and enforcing disabilities arising from it can result in punishment under law.`
        },
        {
          heading: "Article 17 in the Indian Constitution",
          content: `Article 17 is a short but significant constitutional provision. It directly abolishes untouchability and creates a constitutional basis for legal action against enforcement of disabilities arising from such practices.`
        },
        {
          heading: "Article 17 key points",
          content: `The key points are: untouchability is abolished; its practice in any form is forbidden; enforcement of disabilities arising from untouchability is an offence; and laws may provide the applicable punishment and legal procedure.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद १७ म्हणजे काय?",
          content: `अनुच्छेद १७ हा समानतेच्या अधिकाराचा भाग आहे. तो अस्पृश्यता नष्ट करतो आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध करतो. अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.`
        },
        {
          heading: "अनुच्छेद १७ मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद १७ मध्ये अस्पृश्यता नष्ट करण्यात आली असून तिचा कोणत्याही स्वरूपातील आचार निषिद्ध असल्याचे सांगितले आहे. तसेच अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.`
        },
        {
          heading: "अनुच्छेद १७ कोणत्या मूलभूत अधिकाराचा भाग आहे?",
          content: `अनुच्छेद १७ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४, १५ आणि १६ नंतर आणि अनुच्छेद १८ च्या आधी येतो.`
        },
        {
          heading: "अनुच्छेद १७ चा उद्देश काय आहे?",
          content: `अनुच्छेद १७ चा उद्देश अस्पृश्यता घटनात्मकदृष्ट्या नष्ट करणे आणि अस्पृश्यतेशी संबंधित प्रथांमुळे व्यक्तींवर लादल्या जाणाऱ्या अपात्रता व सामाजिक बहिष्काराला प्रतिबंध करणे हा आहे.`
        },
        {
          heading: "अनुच्छेद १७ कोणत्याही स्वरूपातील अस्पृश्यतेला प्रतिबंध करतो का?",
          content: `होय. संविधानातील मजकुरात अस्पृश्यतेचा कोणत्याही स्वरूपातील आचार निषिद्ध असल्याचे स्पष्टपणे सांगितले आहे.`
        },
        {
          heading: "अनुच्छेद १७ चे उल्लंघन केल्यास शिक्षा होऊ शकते का?",
          content: `होय. अनुच्छेद १७ नुसार अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे. या घटनात्मक तरतुदीला प्रभावी करण्यासाठी संबंधित कायदे करण्यात आले आहेत.`
        },
        {
          heading: "अनुच्छेद १७ लागू करण्यासाठी कोणता कायदा करण्यात आला?",
          content: `अस्पृश्यता (अपराध) अधिनियम, १९५५ हा अनुच्छेद १७ च्या घटनात्मक तरतुदीच्या अनुषंगाने करण्यात आला. नंतर त्यात दुरुस्ती करण्यात आली आणि त्याचे नाव Protection of Civil Rights Act, 1955 असे करण्यात आले.`
        },
        {
          heading: "Protection of Civil Rights Act, 1955 म्हणजे काय?",
          content: `Protection of Civil Rights Act, 1955 हा अनुच्छेद १७ अंतर्गत अस्पृश्यतेच्या घटनात्मक बंदीशी संबंधित कायदा आहे. अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रतेच्या अंमलबजावणीशी संबंधित अपराधांबाबत या कायद्यात तरतुदी आहेत.`
        },
        {
          heading: "अनुच्छेद १५ आणि अनुच्छेद १७ मध्ये काय फरक आहे?",
          content: `अनुच्छेद १५ धर्म, वंश, जात, लिंग आणि जन्मस्थान यांसारख्या विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो. अनुच्छेद १७ विशेषतः अस्पृश्यता नष्ट करण्यावर आणि तिच्या कोणत्याही स्वरूपातील आचारास प्रतिबंध करण्यावर केंद्रित आहे.`
        },
        {
          heading: "अनुच्छेद १७ हा मूलभूत अधिकार आहे का?",
          content: `होय. अनुच्छेद १७ हा संविधानाच्या भाग III मध्ये आहे. भाग III मध्ये मूलभूत अधिकारांची तरतूद आहे आणि अनुच्छेद १७ समानतेच्या अधिकाराशी संबंधित आहे.`
        },
        {
          heading: "अनुच्छेद १७ महत्त्वाचा का आहे?",
          content: `अनुच्छेद १७ अस्पृश्यतेविरुद्ध घटनात्मक संरक्षण देतो. तसेच अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रतेची अंमलबजावणी हा कायद्यानुसार शिक्षेस पात्र अपराध असल्याचे स्पष्ट करतो.`
        },
        {
          heading: "अनुच्छेद १७ आणि समानता",
          content: `अनुच्छेद १७ सामाजिक बहिष्कार आणि अस्पृश्यतेशी संबंधित अपात्रतेला प्रतिबंध करून संविधानातील समानतेच्या तत्त्वाला बळकटी देतो. तो अनुच्छेद १४, १५ आणि १६ मधील व्यापक समानता संरक्षणांना पूरक आहे.`
        },
        {
          heading: "अनुच्छेद १७ सोप्या भाषेत काय सांगतो?",
          content: `सोप्या भाषेत, संविधानानुसार अस्पृश्यतेला कोणतेही स्थान नाही. तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे आणि तिच्यामुळे निर्माण होणारी अपात्रता लादल्यास कायद्यानुसार शिक्षा होऊ शकते.`
        },
        {
          heading: "भारतीय संविधानातील अनुच्छेद १७",
          content: `अनुच्छेद १७ हा आकाराने छोटा पण महत्त्वाचा घटनात्मक अनुच्छेद आहे. तो थेट अस्पृश्यता नष्ट करतो आणि अशा प्रथांमुळे निर्माण होणाऱ्या अपात्रतेविरुद्ध कायदेशीर कारवाईचा घटनात्मक आधार देतो.`
        },
        {
          heading: "अनुच्छेद १७ चे महत्त्वाचे मुद्दे",
          content: `महत्त्वाचे मुद्दे म्हणजे: अस्पृश्यता नष्ट करण्यात आली आहे; तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे; अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा अपराध आहे; आणि संबंधित कायद्यांनुसार त्यासाठी शिक्षा व कायदेशीर प्रक्रिया ठरवली जाऊ शकते.`
        }
      ]
    },
    keywords: [
      "Article 17",
      "Article 17 of Indian Constitution",
      "Abolition of Untouchability",
      "Article 17 Fundamental Right",
      "Article 17 in simple words",
      "untouchability in Indian Constitution",
      "Protection of Civil Rights Act 1955",
      "Article 17 and equality",
      "Article 15 and Article 17",
      "कलम 17",
      "भारतीय संविधान कलम 17",
      "अस्पृश्यता निर्मूलन",
      "अस्पृश्यता कायदा",
      "मूलभूत अधिकार कलम 17",
      "समानतेचा अधिकार"
    ],
    relatedIds: ["14", "15", "16", "18", "19"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-09-28"
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
  "/current-affairs": { title: { en: "Current Affairs | Indian Constitution & Polity | MySamvidhan", mr: "चालू घडामोडी | भारतीय संविधान आणि राज्यशास्त्र | MySamvidhan" }, description: { en: "Read current affairs and important developments related to the Indian Constitution, polity and Supreme Court in simple language.", mr: "भारतीय संविधान, राज्यशास्त्र आणि सर्वोच्च न्यायालयाशी संबंधित चालू घडामोडी सोप्या भाषेत वाचा." }, priority: "0.9", changefreq: "daily" },
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
  if (pathname.startsWith("/current-affairs/")) return { indexable: true, changefreq: "daily", priority: "0.7" };
  return { title: { en: siteConfig.defaultTitle, mr: "संविधान | भारताचे संविधान समजून घ्या" }, description: { en: siteConfig.defaultDescription, mr: "भारतीय संविधानाबद्दल सोप्या भाषेत जाणून घ्या." }, indexable: false };
}
const currentAffairs = [
  {
    id: "cec-appointment-law-2023",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    slug: "cec-appointment-law-2023-supreme-court",
    title: {
      en: "CEC Appointment Law 2023: Supreme Court Split Verdict Explained",
      mr: "CEC नियुक्ती कायदा 2023: सर्वोच्च न्यायालयाच्या Split Verdict चे स्पष्टीकरण"
    },
    seoTitle: {
      en: "CEC Appointment Law 2023: Supreme Court Split Verdict Explained | MySamvidhan",
      mr: "CEC नियुक्ती कायदा 2023: सर्वोच्च न्यायालयाचा निर्णय | MySamvidhan"
    },
    shortDescription: {
      en: "Understand the Supreme Court split verdict on the Chief Election Commissioner appointment law, Article 324 and the constitutional issues involved.",
      mr: "मुख्य निवडणूक आयुक्तांच्या नियुक्ती कायद्यावरील सर्वोच्च न्यायालयाचा Split Verdict, कलम 324 आणि त्यातील घटनात्मक मुद्दे समजून घ्या."
    },
    category: "Supreme Court",
    categoryMr: "सर्वोच्च न्यायालय",
    date: "2026-09-23",
    introduction: {
      en: "The Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023 changed the statutory framework for appointments to the Election Commission of India. The issue raised questions about the balance between executive authority and institutional independence.",
      mr: "मुख्य निवडणूक आयुक्त आणि इतर निवडणूक आयुक्त (नियुक्ती, सेवाशर्ती आणि कार्यकाळ) कायदा, 2023 मुळे भारत निवडणूक आयोगातील नियुक्त्यांची वैधानिक चौकट बदलली. या प्रकरणामुळे कार्यकारी अधिकार आणि संस्थात्मक स्वायत्तता यांच्यातील संतुलनाबाबत प्रश्न उपस्थित झाले."
    },
    simpleExplanation: {
      en: "The case concerns how Election Commissioners are appointed and whether the statutory appointment process adequately protects the independence of the Election Commission under Article 324 of the Constitution.",
      mr: "या प्रकरणाचा संबंध निवडणूक आयुक्तांची नियुक्ती कशी केली जाते आणि संविधानाच्या कलम 324 अंतर्गत निवडणूक आयोगाच्या स्वायत्ततेचे पुरेसे संरक्षण नियुक्ती प्रक्रिया करते का, याच्याशी आहे."
    },
    verySimple: {
      en: "The case is about who appoints Election Commissioners and how to protect the independence of the Election Commission.",
      mr: "हे प्रकरण निवडणूक आयुक्तांची नियुक्ती कोण करते आणि निवडणूक आयोगाची स्वायत्तता कशी जपली जाते याबद्दल आहे."
    },
    example: {
      en: "A change in the appointment committee can affect the balance of institutional oversight. That is why the appointment process is examined alongside Article 324 and constitutional independence.",
      mr: "नियुक्ती समितीमध्ये बदल झाल्यास संस्थात्मक देखरेखीचे संतुलन प्रभावित होऊ शकते. म्हणूनच नियुक्ती प्रक्रियेचा विचार कलम 324 आणि घटनात्मक स्वायत्ततेसोबत केला जातो."
    },
    content: {
      en: "The Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023 changed the statutory framework for appointments to the Election Commission of India.",
      mr: "मुख्य निवडणूक आयुक्त आणि इतर निवडणूक आयुक्त (नियुक्ती, सेवाशर्ती आणि कार्यकाळ) कायदा, 2023 मुळे भारत निवडणूक आयोगातील नियुक्त्यांची वैधानिक चौकट बदलली."
    },
    seoSections: {
      en: [
        {
          heading: "What is the CEC Appointment Law 2023?",
          content: "The law sets out the appointment, service conditions and term of office for the Chief Election Commissioner and other Election Commissioners."
        },
        {
          heading: "Why is Article 324 important?",
          content: "Article 324 establishes the Election Commission and gives it constitutional responsibility for supervising elections, making institutional independence an important constitutional concern."
        }
      ],
      mr: [
        {
          heading: "CEC नियुक्ती कायदा 2023 म्हणजे काय?",
          content: "या कायद्यात मुख्य निवडणूक आयुक्त आणि इतर निवडणूक आयुक्तांची नियुक्ती, सेवाशर्ती आणि कार्यकाळ याबाबत तरतुदी आहेत."
        },
        {
          heading: "कलम 324 महत्त्वाचे का आहे?",
          content: "कलम 324 निवडणूक आयोगाची स्थापना करते आणि निवडणुकांवर देखरेख ठेवण्याची घटनात्मक जबाबदारी देते. त्यामुळे संस्थात्मक स्वायत्तता महत्त्वाची ठरते."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "What is the CEC Appointment Law 2023?",
          answer: "It is the law governing the appointment, service conditions and term of office of the Chief Election Commissioner and other Election Commissioners."
        },
        {
          question: "Which constitutional provision is central to this issue?",
          answer: "Article 324, which deals with the Election Commission of India, is central to the constitutional discussion."
        }
      ],
      mr: [
        {
          question: "CEC नियुक्ती कायदा 2023 म्हणजे काय?",
          answer: "मुख्य निवडणूक आयुक्त आणि इतर निवडणूक आयुक्तांची नियुक्ती, सेवाशर्ती आणि कार्यकाळ यांचे नियमन करणारा हा कायदा आहे."
        },
        {
          question: "या विषयाशी कोणते घटनात्मक कलम संबंधित आहे?",
          answer: "भारत निवडणूक आयोगाशी संबंधित कलम 324 या घटनात्मक चर्चेच्या केंद्रस्थानी आहे."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "Which Article of the Constitution deals with the Election Commission of India?",
          options: ["Article 280", "Article 324", "Article 356", "Article 368"],
          answer: "Article 324"
        },
        {
          question: "The 2023 law primarily concerns the appointment of which officials?",
          options: ["Judges", "Election Commissioners", "Governors", "Auditors"],
          answer: "Election Commissioners"
        }
      ],
      mr: [
        {
          question: "भारत निवडणूक आयोगाशी संविधानातील कोणते कलम संबंधित आहे?",
          options: ["कलम 280", "कलम 324", "कलम 356", "कलम 368"],
          answer: "कलम 324"
        },
        {
          question: "2023 चा कायदा मुख्यतः कोणत्या अधिकाऱ्यांच्या नियुक्तीशी संबंधित आहे?",
          options: ["न्यायाधीश", "निवडणूक आयुक्त", "राज्यपाल", "महालेखापरीक्षक"],
          answer: "निवडणूक आयुक्त"
        }
      ]
    },
    source: {
      name: "Supreme Court of India and Legislative Department, Ministry of Law and Justice",
      url: "https://www.legislative.gov.in/"
    },
    relatedSlugs: [],
    keywords: [
      "CEC appointment law 2023",
      "Article 324",
      "Article 145(3)",
      "Election Commission of India"
    ]
  },
  {
    id: "election-commission-14-objections",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    date: "2026-09-24",
    title: {
      en: "Election Commission: 14 Objections in 10 Months — Explained",
      mr: "निवडणूक आयोग: 10 महिन्यांत 14 आक्षेप — संपूर्ण माहिती"
    },
    seoTitle: {
      en: "Election Commission: 14 Objections in 10 Months — Explained",
      mr: "निवडणूक आयोग: 10 महिन्यांत 14 आक्षेप — संपूर्ण माहिती"
    },
    seoDescription: {
      en: "Indian Express reported that Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi recorded at least 14 objections or observations over 10 months regarding certain Election Commission decisions and processes.",
      mr: "The Indian Express च्या रिपोर्टनुसार Election Commissioners Sukhbir Singh Sandhu आणि Vivek Joshi यांनी 10 महिन्यांत Election Commission च्या काही निर्णयांवर किमान 14 objections किंवा observations नोंदवल्या."
    },
    slug: "election-commission-14-objections-10-months",
    shortDescription: {
      en: "Indian Express reported that Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi recorded at least 14 objections or observations over 10 months on certain Election Commission decisions. Here is what the report says and how the ECI responded.",
      mr: "Indian Express च्या रिपोर्टनुसार Election Commissioners Sukhbir Singh Sandhu आणि Vivek Joshi यांनी 10 महिन्यांत Election Commission च्या काही निर्णयांवर किमान 14 objections किंवा observations नोंदवल्या. या रिपोर्टमध्ये काय म्हटले आहे आणि ECI ने काय उत्तर दिले ते समजून घ्या."
    },
    keywords: [
      "Election Commission 14 objections",
      "14 objections Election Commission",
      "Election Commissioners objections",
      "Gyanesh Kumar",
      "Sukhbir Singh Sandhu",
      "Vivek Joshi",
      "Election Commission of India",
      "ECI objections",
      "Election Commission latest news",
      "Election Commission current affairs",
      "electoral roll",
      "voter registration",
      "voter deletion",
      "voter restoration",
      "Form 6",
      "SIR",
      "Special Intensive Revision",
      "Article 324",
      "Indian Constitution current affairs",
      "UPSC current affairs",
      "MPSC current affairs",
      "Police Bharti current affairs",
      "निवडणूक आयोग",
      "निवडणूक आयोग 14 आक्षेप",
      "मतदार यादी",
      "मतदार नोंदणी",
      "मतदार नाव वगळणे",
      "Form 6",
      "SIR",
      "भारतीय संविधान"
    ],
    language: "en",
    officialText: {
      en: "",
      mr: "",
      verified: false
    },
    introduction: {
      en: `The Election Commission of India has recently been in focus following a report about internal objections and observations recorded by two Election Commissioners.

According to an investigation published by The Indian Express on 24 September 2026, Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi recorded at least 14 formal objections or observations over a period of 10 months regarding certain decisions and processes of the Election Commission.

The reported issues include voter registration, deletion and restoration of names from electoral rolls, Form 6, voter database management and processes connected with the Special Intensive Revision (SIR) of electoral rolls.

The Election Commission has responded that written observations, queries and differing views are a normal part of institutional deliberation and stated that decisions of the Commission during the previous year were unanimous.`,
      mr: `Election Commission of India संदर्भातील काही अंतर्गत objections आणि observations मुळे ही संस्था सध्या चर्चेत आहे.

24 सप्टेंबर 2026 रोजी प्रकाशित झालेल्या The Indian Express च्या investigation नुसार, Election Commissioners Sukhbir Singh Sandhu आणि Vivek Joshi यांनी 10 महिन्यांच्या कालावधीत Election Commission च्या काही निर्णयांवर आणि प्रक्रियांवर किमान 14 formal objections किंवा observations नोंदवल्या.

या रिपोर्टनुसार voter registration, electoral rolls मधून नाव वगळणे किंवा पुन्हा समाविष्ट करणे, Form 6, voter database management आणि Special Intensive Revision (SIR) शी संबंधित प्रक्रियांवर observations नोंदवण्यात आल्या.

Election Commission ने यावर प्रतिक्रिया देताना written observations, queries आणि वेगवेगळी मते ही institutional deliberation चा सामान्य भाग असल्याचे सांगितले. तसेच मागील वर्षातील Commission चे decisions unanimous असल्याचे ECI ने म्हटले आहे.`
    },
    simpleExplanation: {
      en: `The Election Commission consists of the Chief Election Commissioner and other Election Commissioners.

At present, the Commission is headed by Chief Election Commissioner Gyanesh Kumar. Sukhbir Singh Sandhu and Vivek Joshi are the other Election Commissioners.

The Indian Express report states that Sandhu and Joshi recorded objections or observations on certain decisions during the previous 10 months.

These observations were related to electoral-roll and voter-management processes, including voter registration, deletion or restoration of names, Form 6 and SIR-related processes.

It is important to distinguish between an internal objection or observation and a final decision of the Commission. An objection records a concern or differing view during institutional deliberation; it does not by itself establish that a final decision is invalid.`,
      mr: `Election Commission मध्ये Chief Election Commissioner आणि इतर Election Commissioners यांचा समावेश असतो.

सध्या या Commission चे नेतृत्व Chief Election Commissioner Gyanesh Kumar करत आहेत. Sukhbir Singh Sandhu आणि Vivek Joshi हे इतर दोन Election Commissioners आहेत.

The Indian Express च्या रिपोर्टनुसार, Sandhu आणि Joshi यांनी मागील 10 महिन्यांत काही निर्णयांवर objections किंवा observations नोंदवल्या.

या observations चा संबंध electoral-roll आणि voter-management प्रक्रियांशी होता. यामध्ये voter registration, मतदारांची नावे वगळणे किंवा पुन्हा समाविष्ट करणे, Form 6 आणि SIR शी संबंधित प्रक्रियांचा समावेश आहे.

Internal objection किंवा observation आणि Commission चा final decision यामध्ये फरक समजून घेणे महत्त्वाचे आहे. Objection म्हणजे एखाद्या निर्णयाबाबत concern किंवा वेगळे मत नोंदवणे; त्यामुळे अंतिम निर्णय आपोआप अवैध ठरत नाही.`
    },
    verySimple: {
      en: `In simple words, two Election Commissioners reportedly raised concerns about some Election Commission decisions and processes during a 10-month period.

The report mentions at least 14 such objections or observations.

The Election Commission has said that such internal observations and differing views are part of institutional deliberation and that its decisions during the previous year were unanimous.`,
      mr: `सोप्या भाषेत सांगायचे तर, दोन Election Commissioners यांनी 10 महिन्यांच्या कालावधीत Election Commission च्या काही निर्णयांबाबत concerns किंवा observations नोंदवल्याचे रिपोर्टमध्ये म्हटले आहे.

अशा किमान 14 objections किंवा observations चा रिपोर्टमध्ये उल्लेख आहे.

Election Commission च्या म्हणण्यानुसार, अशा internal observations आणि वेगवेगळ्या मतांचा institutional deliberation मध्ये समावेश असतो आणि मागील वर्षातील Commission चे decisions unanimous होते.`
    },
    example: {
      en: `For example, suppose a process relating to voter registration or electoral-roll management is being considered. A Commissioner may record an observation or objection about a particular procedure, data-management issue or proposed change.

That observation becomes part of the institutional deliberation. The Commission can then consider the concern before arriving at its final decision.

In the present news development, the reported objections relate to several electoral-roll and voter-management issues.`,
      mr: `उदाहरणार्थ, voter registration किंवा electoral-roll management शी संबंधित एखादी प्रक्रिया विचाराधीन असेल, तर एखादा Commissioner त्या प्रक्रियेबाबत observation किंवा objection नोंदवू शकतो.

हे observation institutional deliberation चा भाग बनते. त्यानंतर Commission त्या मुद्द्याचा विचार करून अंतिम निर्णय घेऊ शकते.

सध्याच्या बातमीमध्ये रिपोर्ट करण्यात आलेल्या objections चा संबंध electoral-roll आणि voter-management शी संबंधित विविध मुद्द्यांशी आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What happened in the Election Commission?",
          content: "According to an investigation published by The Indian Express on 24 September 2026, Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi recorded at least 14 formal objections or observations over 10 months regarding certain Election Commission decisions and processes."
        },
        {
          heading: "Who are the three Election Commissioners?",
          content: "The Election Commission is headed by Chief Election Commissioner Gyanesh Kumar. Sukhbir Singh Sandhu and Vivek Joshi are the other two Election Commissioners. The three members constitute the current Commission."
        },
        {
          heading: "What were the reported objections about?",
          content: "The reported objections and observations concerned several electoral-roll and voter-management matters, including voter registration, deletion and restoration of names, Form 6, voter database management and processes connected with the Special Intensive Revision (SIR)."
        },
        {
          heading: "What is Form 6?",
          content: "Form 6 is used for applying for inclusion of a person’s name in the electoral roll as a new voter. Issues concerning the form and voter-registration processes were among the matters discussed in the reported observations."
        },
        {
          heading: "What is SIR?",
          content: "SIR stands for Special Intensive Revision. It is an intensive process for revision and verification of electoral rolls. Electoral-roll revision is an important part of election administration."
        },
        {
          heading: "What did the Election Commission say?",
          content: "The Election Commission said that written observations, queries, technical suggestions and differing views are a normal part of institutional deliberation. The ECI also stated that decisions and instructions of the Commission during the previous year were unanimous."
        },
        {
          heading: "Does an internal objection mean that a decision is invalid?",
          content: "No. An internal objection or observation records a concern or differing view during deliberation. It does not by itself establish that a final decision is legally invalid or unconstitutional."
        },
        {
          heading: "What is Article 324?",
          content: "Article 324 of the Constitution provides the constitutional framework for the Election Commission of India and vests the Commission with the superintendence, direction and control of elections."
        },
        {
          heading: "Why is this important for competitive exams?",
          content: "The development connects current affairs with important constitutional and election-related topics such as Article 324, the Election Commission, electoral rolls, voter registration, Form 6 and Special Intensive Revision. These topics can be relevant for UPSC, MPSC, Police Bharti and other competitive examinations."
        }
      ],
      mr: [
        {
          heading: "Election Commission मध्ये काय घडले?",
          content: "24 सप्टेंबर 2026 रोजी The Indian Express मध्ये प्रकाशित झालेल्या investigation नुसार Election Commissioners Sukhbir Singh Sandhu आणि Vivek Joshi यांनी 10 महिन्यांत Election Commission च्या काही निर्णयांवर आणि प्रक्रियांवर किमान 14 formal objections किंवा observations नोंदवल्या."
        },
        {
          heading: "तीन Election Commissioners कोण आहेत?",
          content: "Election Commission चे नेतृत्व Chief Election Commissioner Gyanesh Kumar करत आहेत. Sukhbir Singh Sandhu आणि Vivek Joshi हे इतर दोन Election Commissioners आहेत."
        },
        {
          heading: "Reported objections कोणत्या विषयांवर होत्या?",
          content: "रिपोर्टनुसार objections आणि observations चा संबंध voter registration, electoral roll मधून नाव वगळणे किंवा restore करणे, Form 6, voter database management आणि Special Intensive Revision (SIR) शी संबंधित प्रक्रियांशी होता."
        },
        {
          heading: "Form 6 म्हणजे काय?",
          content: "Form 6 चा वापर नवीन मतदार म्हणून एखाद्या व्यक्तीचे नाव electoral roll मध्ये समाविष्ट करण्यासाठी केला जातो. Reported observations मध्ये voter-registration process आणि Form 6 शी संबंधित मुद्द्यांचा उल्लेख आहे."
        },
        {
          heading: "SIR म्हणजे काय?",
          content: "SIR म्हणजे Special Intensive Revision. ही electoral rolls च्या revision आणि verification शी संबंधित intensive प्रक्रिया आहे. निवडणूक प्रशासनामध्ये electoral-roll revision ला महत्त्व आहे."
        },
        {
          heading: "Election Commission ने काय उत्तर दिले?",
          content: "Election Commission नुसार written observations, queries, technical suggestions आणि वेगवेगळी मते ही institutional deliberation चा सामान्य भाग आहेत. ECI ने असेही म्हटले की मागील वर्षातील Commission चे decisions आणि instructions unanimous होते."
        },
        {
          heading: "Internal objection म्हणजे निर्णय अवैध आहे का?",
          content: "नाही. Internal objection किंवा observation म्हणजे deliberation दरम्यान concern किंवा वेगळे मत नोंदवणे. त्यावरून अंतिम निर्णय कायदेशीरदृष्ट्या अवैध किंवा असंवैधानिक आहे, असा निष्कर्ष आपोआप काढता येत नाही."
        },
        {
          heading: "Article 324 म्हणजे काय?",
          content: "Article 324 भारतीय संविधानातील Election Commission of India शी संबंधित आहे. या Article अंतर्गत निवडणुकांवरील superintendence, direction आणि control Election Commission कडे देण्यात आले आहे."
        },
        {
          heading: "स्पर्धा परीक्षांसाठी हा विषय महत्त्वाचा का आहे?",
          content: "या current-affairs development चा संबंध Article 324, Election Commission, electoral rolls, voter registration, Form 6 आणि Special Intensive Revision यांसारख्या महत्त्वाच्या विषयांशी आहे. त्यामुळे UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी हा विषय उपयुक्त ठरू शकतो."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "What are the 14 objections in the Election Commission?",
          answer: "The Indian Express reported that Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi recorded at least 14 formal objections or observations over 10 months concerning certain Election Commission decisions and processes."
        },
        {
          question: "Who is the Chief Election Commissioner of India?",
          answer: "Gyanesh Kumar is the Chief Election Commissioner, while Sukhbir Singh Sandhu and Vivek Joshi are Election Commissioners."
        },
        {
          question: "What issues were mentioned in the report?",
          answer: "The report mentioned issues related to voter registration, deletion and restoration of names from electoral rolls, Form 6, voter database management and SIR-related processes."
        },
        {
          question: "What does SIR stand for?",
          answer: "SIR stands for Special Intensive Revision of electoral rolls."
        },
        {
          question: "What did the ECI say about the objections?",
          answer: "The ECI said that written observations, queries and differing views are part of institutional deliberation and stated that its decisions during the previous year were unanimous."
        },
        {
          question: "Does an objection mean the Election Commission decision is invalid?",
          answer: "No. An objection records a concern or differing view during deliberation and does not by itself establish that a final decision is invalid."
        }
      ],
      mr: [
        {
          question: "Election Commission मधील 14 objections काय आहेत?",
          answer: "The Indian Express च्या रिपोर्टनुसार Sukhbir Singh Sandhu आणि Vivek Joshi यांनी 10 महिन्यांत Election Commission च्या काही निर्णयांवर आणि प्रक्रियांवर किमान 14 formal objections किंवा observations नोंदवल्या."
        },
        {
          question: "भारताचे Chief Election Commissioner कोण आहेत?",
          answer: "Gyanesh Kumar हे Chief Election Commissioner आहेत. Sukhbir Singh Sandhu आणि Vivek Joshi हे Election Commissioners आहेत."
        },
        {
          question: "रिपोर्टमध्ये कोणते मुद्दे नमूद करण्यात आले?",
          answer: "Voter registration, electoral rolls मधून नाव वगळणे किंवा restore करणे, Form 6, voter database management आणि SIR शी संबंधित प्रक्रियांचा उल्लेख करण्यात आला आहे."
        },
        {
          question: "SIR चे पूर्ण रूप काय आहे?",
          answer: "SIR चे पूर्ण रूप Special Intensive Revision of electoral rolls असे आहे."
        },
        {
          question: "Election Commission ने objections बाबत काय सांगितले?",
          answer: "ECI नुसार written observations, queries आणि वेगवेगळी मते ही institutional deliberation चा भाग आहेत. ECI ने मागील वर्षातील decisions unanimous असल्याचे सांगितले."
        },
        {
          question: "Objection म्हणजे Election Commission चा निर्णय अवैध आहे का?",
          answer: "नाही. Objection म्हणजे deliberation दरम्यान concern किंवा वेगळे मत नोंदवणे. त्यामुळे अंतिम निर्णय आपोआप अवैध ठरत नाही."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "Which Article of the Constitution deals with the Election Commission of India?",
          options: ["Article 280", "Article 324", "Article 356", "Article 368"],
          answer: "Article 324"
        },
        {
          question: "What does SIR stand for in the context of electoral rolls?",
          options: [
            "Special Indian Registration",
            "Special Intensive Revision",
            "State Electoral Revision",
            "Systematic Indian Roll"
          ],
          answer: "Special Intensive Revision"
        },
        {
          question: "Who is the current Chief Election Commissioner mentioned in this report?",
          options: [
            "Sukhbir Singh Sandhu",
            "Vivek Joshi",
            "Gyanesh Kumar",
            "Rajiv Kumar"
          ],
          answer: "Gyanesh Kumar"
        },
        {
          question: "Which form is used for applying for inclusion as a new voter?",
          options: ["Form 6", "Form 8", "Form 10", "Form 12"],
          answer: "Form 6"
        }
      ],
      mr: [
        {
          question: "भारतीय संविधानातील कोणते Article Election Commission शी संबंधित आहे?",
          options: ["Article 280", "Article 324", "Article 356", "Article 368"],
          answer: "Article 324"
        },
        {
          question: "Electoral rolls संदर्भात SIR चे पूर्ण रूप काय आहे?",
          options: [
            "Special Indian Registration",
            "Special Intensive Revision",
            "State Electoral Revision",
            "Systematic Indian Roll"
          ],
          answer: "Special Intensive Revision"
        },
        {
          question: "या रिपोर्टमध्ये Chief Election Commissioner म्हणून कोणाचे नाव आहे?",
          options: [
            "Sukhbir Singh Sandhu",
            "Vivek Joshi",
            "Gyanesh Kumar",
            "Rajiv Kumar"
          ],
          answer: "Gyanesh Kumar"
        },
        {
          question: "नवीन मतदार म्हणून नाव समाविष्ट करण्यासाठी कोणता Form वापरला जातो?",
          options: ["Form 6", "Form 8", "Form 10", "Form 12"],
          answer: "Form 6"
        }
      ]
    },
    source: {
      title: "The Indian Express — 14 times in 10 months, two Election Commissioners objected on record to poll panel steps",
      url: "https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/"
    },
    lastVerified: "2026-09-24",
    verified: false,
    relatedIds: ["324", "352", "32"],
    createdAt: "2026-09-24",
    updatedAt: "2026-09-24"
  },
  {
    id: "save-sahyadri-western-ghats-esa-2026",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    title: {
      en: "Save Sahyadri: Western Ghats ESA Draft Notification 2026 Explained",
      mr: "सह्याद्री वाचवा: Western Ghats ESA Draft Notification 2026 समजून घ्या"
    },
    slug: "save-sahyadri-western-ghats-esa-draft-notification-2026",
    seoTitle: {
      en: "Save Sahyadri: Western Ghats ESA Draft Notification 2026 | MySamvidhan",
      mr: "सह्याद्री वाचवा: Western Ghats ESA Draft Notification 2026 | MySamvidhan"
    },
    seoDescription: {
      en: "Understand the Save Sahyadri awareness campaign and the 2026 Western Ghats Ecologically Sensitive Area draft notification, including Maharashtra and public consultation.",
      mr: "सह्याद्री वाचवा मोहिमेच्या पार्श्वभूमीवर 2026 Western Ghats Ecologically Sensitive Area draft notification, महाराष्ट्र आणि public consultation समजून घ्या."
    },
    shortDescription: {
      en: "The Save Sahyadri awareness campaign has gained attention as the Ministry of Environment, Forest and Climate Change considers a draft notification for the Western Ghats Ecologically Sensitive Area.",
      mr: "सह्याद्री वाचवा या जनजागृती मोहिमेच्या पार्श्वभूमीवर Western Ghats Ecologically Sensitive Area संदर्भातील 2026 च्या draft notification कडे लक्ष वेधले जात आहे."
    },
    keywords: [
      "Save Sahyadri",
      "Save Sahyadri campaign",
      "Sahyadri conservation",
      "Western Ghats ESA 2026",
      "Western Ghats Ecologically Sensitive Area",
      "Western Ghats draft notification 2026",
      "Western Ghats ESA draft notification",
      "S.O. 4106(E)",
      "27 July 2026 Western Ghats notification",
      "Maharashtra Western Ghats",
      "Western Ghats Maharashtra",
      "Western Ghats environmental protection",
      "Western Ghats biodiversity",
      "Western Ghats villages",
      "Sahyadri Maharashtra",
      "Western Ghats current affairs",
      "environment current affairs",
      "UPSC current affairs",
      "MPSC current affairs",
      "Police Bharti current affairs",
      "सह्याद्री वाचवा",
      "सह्याद्री संवर्धन",
      "पश्चिम घाट",
      "पश्चिम घाट पर्यावरण संवेदनशील क्षेत्र",
      "सह्याद्री महाराष्ट्र",
      "Western Ghats ESA महाराष्ट्र"
    ],
    language: "en",
    date: "2026-09-25",
    officialText: {
      en: "",
      mr: "",
      verified: false
    },
    introduction: {
      en: `The Save Sahyadri awareness campaign has gained attention in Maharashtra and on social platforms amid ongoing discussion around the protection of the Western Ghats.

A key development is the Draft Notification of the Western Ghats Ecologically Sensitive Area issued by the Ministry of Environment, Forest and Climate Change on 27 July 2026.

The draft notification proposes a framework for declaring the Western Ghats as an Ecologically Sensitive Area and provides an opportunity for affected persons and other interested stakeholders to submit objections or suggestions before the final notification is considered.`,
      mr: `सह्याद्री वाचवा या जनजागृती मोहिमेमुळे सह्याद्री आणि Western Ghats च्या पर्यावरणीय संरक्षणाबाबत पुन्हा चर्चा सुरू झाली आहे.

या पार्श्वभूमीवर Ministry of Environment, Forest and Climate Change ने 27 जुलै 2026 रोजी Western Ghats Ecologically Sensitive Area संदर्भात Draft Notification जारी केली आहे.

या Draft Notification चा उद्देश Western Ghats साठी Ecologically Sensitive Area ची चौकट निश्चित करण्याशी संबंधित आहे. अंतिम notification करण्यापूर्वी संबंधित व्यक्ती आणि इतर interested stakeholders यांना objections किंवा suggestions मांडण्याची संधी देण्यात आली आहे.`
    },
    simpleExplanation: {
      en: `The Western Ghats are a major mountain system along the western side of India and extend across Gujarat, Maharashtra, Goa, Karnataka, Kerala and Tamil Nadu.

The Ministry's 27 July 2026 draft notification proposes an Ecologically Sensitive Area framework for the Western Ghats.

The notification states that the Western Ghats are an important geological landform and a global biodiversity hotspot. It also highlights their role in river systems, forests, wildlife habitats and biological diversity.

The draft is not the final notification. It is part of the consultation process through which objections and suggestions can be submitted for consideration before finalisation.`,
      mr: `Western Ghats म्हणजे भारताच्या पश्चिम भागातील महत्त्वाची पर्वतरांग असून ती गुजरात, महाराष्ट्र, गोवा, कर्नाटक, केरळ आणि तामिळनाडू या सहा राज्यांत पसरलेली आहे.

27 जुलै 2026 रोजीच्या Ministry च्या Draft Notification मध्ये Western Ghats साठी Ecologically Sensitive Area ची चौकट प्रस्तावित करण्यात आली आहे.

या notification मध्ये Western Ghats ला महत्त्वपूर्ण geological landform आणि global biodiversity hotspot म्हणून नमूद करण्यात आले आहे. तसेच नद्या, जंगलं, wildlife habitats आणि जैवविविधतेतील त्यांची भूमिका अधोरेखित करण्यात आली आहे.

ही Draft Notification अंतिम notification नाही. अंतिम notification करण्यापूर्वी objections आणि suggestions विचारात घेण्यासाठी ही consultation प्रक्रिया आहे.`
    },
    verySimple: {
      en: `In simple words, the Save Sahyadri discussion is connected with the larger question of how the Western Ghats should be protected while considering the needs of local communities and development.

The current 2026 draft notification is an important part of this discussion, but it should not be confused with a final notification.`,
      mr: `सोप्या भाषेत सांगायचे तर, सह्याद्री वाचवा या चर्चेचा संबंध Western Ghats चे पर्यावरणीय संरक्षण, स्थानिक समुदायांच्या गरजा आणि विकास यांच्यातील समतोलाशी आहे.

2026 ची Draft Notification या चर्चेतील महत्त्वाचा भाग आहे; मात्र ती अंतिम notification आहे असे समजणे योग्य नाही.`
    },
    example: {
      en: `For example, if a village or area falls within a proposed Ecologically Sensitive Area, environmental rules and regulatory requirements may become relevant to certain activities depending on the final notification and applicable laws.

This is why the draft stage is important: the government considers objections and suggestions before finalising the notification.`,
      mr: `उदाहरणार्थ, एखादे गाव किंवा क्षेत्र प्रस्तावित Ecologically Sensitive Area मध्ये येत असल्यास, अंतिम notification आणि लागू असलेल्या कायद्यांनुसार काही activities साठी environmental rules आणि regulatory requirements लागू होऊ शकतात.

म्हणूनच Draft Notification चा टप्पा महत्त्वाचा आहे. अंतिम notification करण्यापूर्वी objections आणि suggestions विचारात घेतले जातात.`
    },
    seoSections: {
      en: [
        {
          heading: "What is the Save Sahyadri campaign?",
          content: "Save Sahyadri is being used as an environmental awareness campaign theme encouraging discussion and public participation around conservation of the Sahyadri and Western Ghats landscape. Current social-media discussions include sharing information, local environmental concerns and comments related to the Western Ghats ESA consultation."
        },
        {
          heading: "What is the Western Ghats ESA Draft Notification 2026?",
          content: "The Ministry of Environment, Forest and Climate Change published a draft notification dated 27 July 2026 concerning the Western Ghats Ecologically Sensitive Area. The draft is intended to provide a framework for the final notification of the Western Ghats ESA."
        },
        {
          heading: "Which states are covered by the Western Ghats?",
          content: "The Western Ghats extend across six states: Gujarat, Maharashtra, Goa, Karnataka, Kerala and Tamil Nadu."
        },
        {
          heading: "Why are the Western Ghats important?",
          content: "The Ministry describes the Western Ghats as an important geological landform and a global biodiversity hotspot. The region contains diverse habitats and supports forests, wildlife, river systems and many endemic species."
        },
        {
          heading: "Is the 2026 Western Ghats ESA notification final?",
          content: "No. The 27 July 2026 document is a draft notification. The notification provides for objections and suggestions to be considered before the final notification is published."
        },
        {
          heading: "What is the public consultation process?",
          content: "The draft notification gives interested persons an opportunity to submit objections or suggestions to the Ministry within the specified period. The Ministry lists the consultation as part of the process before finalisation."
        },
        {
          heading: "What is the connection with Maharashtra?",
          content: "Maharashtra is one of the six states covered by the Western Ghats region. The draft ESA framework therefore has relevance for areas of Maharashtra that fall within the proposed Western Ghats ESA."
        },
        {
          heading: "Why is Save Sahyadri a current affairs topic?",
          content: "The topic connects environmental conservation, biodiversity, public consultation and government policy. It is therefore relevant to current-affairs preparation as well as environmental studies for competitive examinations."
        }
      ],
      mr: [
        {
          heading: "सह्याद्री वाचवा मोहीम म्हणजे काय?",
          content: "सह्याद्री वाचवा हा पर्यावरण संवर्धनाबाबत जनजागृती आणि सार्वजनिक चर्चेसाठी वापरला जाणारा campaign theme आहे. सध्याच्या चर्चेत सह्याद्री, Western Ghats आणि Ecologically Sensitive Area संदर्भातील माहिती व public participation यावर भर दिला जात आहे."
        },
        {
          heading: "Western Ghats ESA Draft Notification 2026 म्हणजे काय?",
          content: "Ministry of Environment, Forest and Climate Change ने 27 जुलै 2026 रोजी Western Ghats Ecologically Sensitive Area संदर्भात Draft Notification जारी केली. अंतिम notification करण्यापूर्वी या draft वर objections आणि suggestions विचारात घेण्याची प्रक्रिया आहे."
        },
        {
          heading: "Western Ghats कोणत्या राज्यांत पसरले आहेत?",
          content: "Western Ghats गुजरात, महाराष्ट्र, गोवा, कर्नाटक, केरळ आणि तामिळनाडू या सहा राज्यांत पसरले आहेत."
        },
        {
          heading: "Western Ghats महत्त्वाचे का आहेत?",
          content: "Ministry च्या Draft Notification मध्ये Western Ghats ला महत्त्वपूर्ण geological landform आणि global biodiversity hotspot म्हटले आहे. या प्रदेशात विविध habitats, जंगलं, wildlife, नद्या आणि अनेक endemic species आढळतात."
        },
        {
          heading: "2026 ची Western Ghats ESA notification अंतिम आहे का?",
          content: "नाही. 27 जुलै 2026 रोजी जारी केलेले document हे Draft Notification आहे. अंतिम notification करण्यापूर्वी objections आणि suggestions विचारात घेण्याची तरतूद आहे."
        },
        {
          heading: "Public consultation म्हणजे काय?",
          content: "Draft Notification मध्ये interested persons ना specified period मध्ये objections किंवा suggestions मांडण्याची संधी दिली जाते. अंतिम notification करण्यापूर्वी या सूचना विचारात घेतल्या जाऊ शकतात."
        },
        {
          heading: "महाराष्ट्राशी याचा संबंध काय?",
          content: "महाराष्ट्र हे Western Ghats असलेल्या सहा राज्यांपैकी एक आहे. त्यामुळे प्रस्तावित Western Ghats ESA मध्ये येणाऱ्या महाराष्ट्रातील क्षेत्रांसाठी या Draft Notification ला महत्त्व आहे."
        },
        {
          heading: "सह्याद्री वाचवा हा Current Affairs विषय का आहे?",
          content: "या विषयाचा संबंध पर्यावरण संवर्धन, जैवविविधता, public consultation आणि government policy यांच्याशी आहे. त्यामुळे competitive examinations साठीही हा current-affairs topic उपयुक्त आहे."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "What is Save Sahyadri?",
          answer: "Save Sahyadri is an environmental awareness theme focused on conservation and public discussion around the Sahyadri and Western Ghats."
        },
        {
          question: "What is the Western Ghats ESA?",
          answer: "ESA stands for Ecologically Sensitive Area. The Western Ghats ESA framework concerns environmental protection and regulation in ecologically sensitive parts of the Western Ghats."
        },
        {
          question: "When was the latest Western Ghats ESA draft notification issued?",
          answer: "The Ministry of Environment, Forest and Climate Change issued the current draft notification dated 27 July 2026."
        },
        {
          question: "Is the 2026 Western Ghats ESA notification final?",
          answer: "No. It is a draft notification and forms part of the consultation process before finalisation."
        },
        {
          question: "Does the Western Ghats ESA include Maharashtra?",
          answer: "Yes. Maharashtra is one of the six states covered by the Western Ghats region."
        }
      ],
      mr: [
        {
          question: "सह्याद्री वाचवा म्हणजे काय?",
          answer: "सह्याद्री वाचवा हा सह्याद्री आणि Western Ghats च्या पर्यावरण संवर्धनाबाबत जनजागृती आणि सार्वजनिक चर्चेसाठी वापरला जाणारा campaign theme आहे."
        },
        {
          question: "Western Ghats ESA म्हणजे काय?",
          answer: "ESA म्हणजे Ecologically Sensitive Area. Western Ghats ESA चा संबंध पर्यावरणीयदृष्ट्या संवेदनशील क्षेत्रांच्या संरक्षण आणि नियमनाशी आहे."
        },
        {
          question: "Western Ghats ESA ची नवीन Draft Notification कधी जारी झाली?",
          answer: "Ministry of Environment, Forest and Climate Change ने 27 जुलै 2026 रोजी Draft Notification जारी केली."
        },
        {
          question: "2026 ची Draft Notification अंतिम आहे का?",
          answer: "नाही. ती Draft Notification आहे आणि अंतिम notification पूर्वी consultation process चा भाग आहे."
        },
        {
          question: "Western Ghats ESA मध्ये महाराष्ट्राचा समावेश आहे का?",
          answer: "होय. महाराष्ट्र हे Western Ghats असलेल्या सहा राज्यांपैकी एक आहे."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "What does ESA stand for?",
          options: [
            "Environmental Safety Area",
            "Ecologically Sensitive Area",
            "Ecological Survey Authority",
            "Environmental Study Area"
          ],
          answer: "Ecologically Sensitive Area"
        },
        {
          question: "When was the 2026 Western Ghats ESA draft notification issued?",
          options: [
            "27 July 2026",
            "15 August 2026",
            "5 September 2026",
            "25 September 2026"
          ],
          answer: "27 July 2026"
        },
        {
          question: "How many states does the Western Ghats traverse?",
          options: ["4", "5", "6", "7"],
          answer: "6"
        },
        {
          question: "Which of these states is part of the Western Ghats region?",
          options: ["Maharashtra", "Punjab", "Bihar", "Haryana"],
          answer: "Maharashtra"
        }
      ],
      mr: [
        {
          question: "ESA चे पूर्ण रूप काय आहे?",
          options: [
            "Environmental Safety Area",
            "Ecologically Sensitive Area",
            "Ecological Survey Authority",
            "Environmental Study Area"
          ],
          answer: "Ecologically Sensitive Area"
        },
        {
          question: "2026 ची Western Ghats ESA Draft Notification कधी जारी झाली?",
          options: [
            "27 जुलै 2026",
            "15 ऑगस्ट 2026",
            "5 सप्टेंबर 2026",
            "25 सप्टेंबर 2026"
          ],
          answer: "27 जुलै 2026"
        },
        {
          question: "Western Ghats किती राज्यांत पसरले आहेत?",
          options: ["4", "5", "6", "7"],
          answer: "6"
        },
        {
          question: "खालीलपैकी कोणते राज्य Western Ghats region मध्ये आहे?",
          options: ["महाराष्ट्र", "पंजाब", "बिहार", "हरियाणा"],
          answer: "महाराष्ट्र"
        }
      ]
    },
    source: {
      title: "Ministry of Environment, Forest and Climate Change — Draft Notification of Western Ghats Ecologically Sensitive Area dated 27 July 2026",
      url: "https://moef.gov.in/index.php/orders/update"
    },
    lastVerified: "2026-09-25",
    verified: false,
    relatedIds: ["324", "32", "352"],
    createdAt: "2026-09-25",
    updatedAt: "2026-09-25"
  }
];
function getCurrentAffairBySlug(slug) {
  return currentAffairs.find((item) => item.slug === slug);
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
    var _a, _b, _c;
    console.log("PageMeta running:", pathname);
    const config = getSeoRoute(pathname);
    const article = pathname.startsWith("/article/") ? getArticleById(pathname.split("/").pop()) : null;
    const currentAffair = pathname.startsWith("/current-affairs/") ? getCurrentAffairBySlug(pathname.split("/").pop()) : null;
    let title = "";
    let description = "";
    let ogType = "website";
    if (article) {
      const rawNumber = String(article.articleNumber || "");
      const number = rawNumber.replace(/^article\s*/i, "").replace(/^कलम\s*/i, "").trim();
      const articleTitle = pick(article.title);
      if (language === "mr") {
        title = `कलम ${number} – ${((_a = article.title) == null ? void 0 : _a.mr) || articleTitle} | MySamvidhan`;
        description = `भारतीय संविधानातील कलम ${number} सोप्या मराठीत आणि इंग्रजीत समजून घ्या. ${((_b = article.title) == null ? void 0 : _b.mr) || "कलमाचा"} अर्थ, प्रमुख तरतुदी, उदाहरणे आणि महत्त्व जाणून घ्या.`;
      } else {
        title = `Article ${number} – ${((_c = article.title) == null ? void 0 : _c.en) || articleTitle} | MySamvidhan`;
        description = `Learn about Article ${number} of the Indian Constitution in simple English and Marathi. Understand its meaning, key provisions, examples and importance.`;
      }
      ogType = "article";
    } else if (currentAffair) {
      title = pick(
        currentAffair.seoTitle || currentAffair.title
      );
      description = pick(
        currentAffair.shortDescription
      );
      ogType = "article";
    } else {
      title = pick(config.title);
      description = pick(config.description);
    }
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = cleanPath === "/" ? SITE_URL$1 : `${SITE_URL$1}${cleanPath}`;
    document.title = title;
    setMeta(
      "name",
      "description",
      description
    );
    setMeta(
      "property",
      "og:title",
      title
    );
    setMeta(
      "property",
      "og:description",
      description
    );
    setMeta(
      "property",
      "og:type",
      ogType
    );
    setMeta(
      "property",
      "og:url",
      canonicalUrl
    );
    setMeta(
      "property",
      "og:site_name",
      siteConfig.name
    );
    setMeta(
      "name",
      "twitter:card",
      "summary"
    );
    setMeta(
      "name",
      "twitter:title",
      title
    );
    setMeta(
      "name",
      "twitter:description",
      description
    );
    setMeta(
      "name",
      "robots",
      pathname === "/premium" ? "noindex, follow" : config.indexable === false ? "noindex, nofollow" : "index, follow"
    );
    setLink(
      "canonical",
      canonicalUrl
    );
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
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const { id } = useParams();
  const { t, pick, language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);
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
  const siteUrl = "https://www.mysamvidhan.in";
  const articleUrl = `${siteUrl}/article/${article.id}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl
    },
    headline: pick(article.title),
    description: language === "mr" ? seo.descriptionMr : seo.descriptionEn,
    inLanguage: language === "mr" ? "mr-IN" : "en-IN",
    author: {
      "@type": "Organization",
      name: "MySamvidhan",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "MySamvidhan",
      url: siteUrl
    },
    dateModified: article.lastVerified || void 0,
    url: articleUrl
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: language === "mr" ? "मुख्यपृष्ठ" : "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: language === "mr" ? "सर्व कलमे" : "Articles",
        item: `${siteUrl}/articles`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: language === "mr" ? marathiArticle : englishArticle,
        item: articleUrl
      }
    ]
  };
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
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(articleSchema)
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(breadcrumbSchema)
        }
      }
    ),
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
      /* @__PURE__ */ jsx(
        "nav",
        {
          "aria-label": language === "mr" ? "पृष्ठ मार्गक्रमण" : "Breadcrumb",
          className: "mb-8",
          children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm text-ink/50 dark:text-ink-dark/50", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                className: "transition-colors hover:text-saffron",
                children: language === "mr" ? "मुख्यपृष्ठ" : "Home"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { children: "/" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/articles",
                className: "transition-colors hover:text-saffron",
                children: language === "mr" ? "सर्व कलमे" : "Articles"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { children: "/" }) }),
            /* @__PURE__ */ jsx(
              "li",
              {
                "aria-current": "page",
                className: "font-medium text-navy dark:text-ink-dark",
                children: language === "mr" ? marathiArticle : englishArticle
              }
            )
          ] })
        }
      ),
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
      Array.isArray((_m = article.seoSections) == null ? void 0 : _m[language]) && article.seoSections[language].length > 0 && /* @__PURE__ */ jsx("section", { className: "mt-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: article.seoSections[language].map(
        (section, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              lang: language,
              className: "font-display text-lg font-semibold text-navy dark:text-ink-dark",
              children: section.heading
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              lang: language,
              className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80",
              children: section.content
            }
          )
        ] }, index)
      ) }) }),
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
        /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: faqs2.map((faq, index) => {
          const isOpen = openFAQ === index;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "overflow-hidden rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04]",
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpenFAQ(isOpen ? null : index),
                    "aria-expanded": isOpen,
                    "aria-controls": `faq-answer-${index}`,
                    className: "flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-navy/[0.03] dark:hover:bg-white/[0.03]",
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          lang: language,
                          className: "font-semibold text-navy dark:text-ink-dark",
                          children: faq.question
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: "shrink-0 text-xl font-medium text-saffron",
                          children: isOpen ? "−" : "+"
                        }
                      )
                    ]
                  }
                ),
                isOpen && faq.answer && /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: `faq-answer-${index}`,
                    className: "border-t border-navy/10 dark:border-ink-dark/10 px-5 pb-5 pt-4",
                    children: /* @__PURE__ */ jsx(
                      "p",
                      {
                        lang: language,
                        className: "text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70",
                        children: faq.answer
                      }
                    )
                  }
                )
              ]
            },
            index
          );
        }) })
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
          ((_n = article.source) == null ? void 0 : _n.name) || "—"
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
    const currentAffair = pathname.startsWith("/current-affairs/") ? getCurrentAffairBySlug(pathname.split("/").pop()) : null;
    if (config.indexable === false || pathname.startsWith("/article/") && !article || pathname.startsWith("/current-affairs/") && !currentAffair) {
      removeSchema();
      return;
    }
    const canonical = `${SITE_URL}${pathname}`;
    const pageTitle = article ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan` : currentAffair ? pick(currentAffair.seoTitle || currentAffair.title) : pick(config.title);
    const pageDescription = article ? pick(article.simpleExplanation) : currentAffair ? pick(currentAffair.shortDescription) : pick(config.description);
    const pageId = `${canonical}#webpage`;
    const breadcrumbId = `${canonical}#breadcrumb`;
    const articleId = article ? `${canonical}#article` : null;
    const currentAffairId = currentAffair ? `${canonical}#current-affair` : null;
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
        ...article || currentAffair ? {
          mainEntity: {
            "@id": articleId || currentAffairId
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
        ] : currentAffair ? [
          {
            "@type": "ListItem",
            position: 1,
            name: language === "mr" ? "मुख्यपृष्ठ" : "Home",
            item: SITE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: language === "mr" ? "चालू घडामोडी" : "Current Affairs",
            item: `${SITE_URL}/current-affairs`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pick(currentAffair.title),
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
    if (currentAffair) {
      graph.push({
        "@type": "NewsArticle",
        "@id": currentAffairId,
        headline: pick(currentAffair.title),
        description: pageDescription,
        datePublished: currentAffair.date,
        dateModified: currentAffair.date,
        mainEntityOfPage: { "@id": pageId },
        url: canonical,
        inLanguage: language,
        articleSection: currentAffair.category,
        keywords: currentAffair.keywords.join(", "),
        isPartOf: { "@id": `${SITE_URL}#website` },
        publisher: { "@id": `${SITE_URL}#organization` }
      });
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
function CurrentAffairsCard({ article }) {
  const { language, pick, t } = useLanguage();
  const title = pick(article.title);
  const category = language === "mr" ? article.categoryMr : article.category;
  return /* @__PURE__ */ jsxs("article", { className: "group flex flex-col rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 transition-colors hover:border-saffron/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-xs text-ink/50 dark:text-ink-dark/50", children: [
      /* @__PURE__ */ jsx("span", { className: "text-leaf dark:text-leaf-light", children: category }),
      /* @__PURE__ */ jsx("time", { dateTime: article.date, children: (/* @__PURE__ */ new Date(`${article.date}T00:00:00`)).toLocaleDateString(
        language === "mr" ? "mr-IN" : "en-IN",
        { day: "numeric", month: "short", year: "numeric" }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        lang: language,
        className: "mt-3 font-display text-lg font-semibold text-navy dark:text-ink-dark",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            to: `/current-affairs/${article.slug}`,
            className: "transition-colors hover:text-saffron focus:outline-none focus:text-saffron",
            children: title
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "p",
      {
        lang: language,
        className: "mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60",
        children: pick(article.shortDescription)
      }
    ),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/current-affairs/${article.slug}`,
        "aria-label": `${t("current_affairs_read_more")}: ${title}`,
        className: "mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-saffron transition-colors hover:text-saffron/80 hover:underline focus:outline-none focus:underline",
        children: [
          t("current_affairs_read_more"),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
        ]
      }
    )
  ] });
}
function formatDate(date, language) {
  return (/* @__PURE__ */ new Date(`${date}T00:00:00`)).toLocaleDateString(
    language === "mr" ? "mr-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );
}
function CurrentAffairsList() {
  const { language } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16", children: [
    /* @__PURE__ */ jsx(PageMeta, {}),
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          lang: language,
          className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl",
          children: language === "mr" ? "चालू घडामोडी" : "Current Affairs"
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          lang: language,
          className: "mt-2 max-w-3xl text-ink/60 dark:text-ink-dark/60",
          children: language === "mr" ? "भारतीय संविधान आणि राज्यशास्त्राशी संबंधित महत्त्वाच्या चालू घडामोडी समजून घ्या." : "Understand important current affairs related to the Indian Constitution and polity."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        "aria-label": language === "mr" ? "चालू घडामोडी लेख" : "Current affairs articles",
        className: "mt-8 grid gap-5 sm:grid-cols-2",
        children: [...currentAffairs].sort((a, b) => new Date(b.date) - new Date(a.date)).map((article) => /* @__PURE__ */ jsx(CurrentAffairsCard, { article }, article.id))
      }
    )
  ] });
}
function CurrentAffairDetails() {
  var _a, _b, _c, _d, _e;
  const { slug } = useParams();
  const { language, pick } = useLanguage();
  const article = getCurrentAffairBySlug(slug || "");
  if (!article) {
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsx(PageMeta, {}),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: language === "mr" ? "लेख सापडला नाही" : "Article not found" }),
      /* @__PURE__ */ jsx(Link, { to: "/current-affairs", className: "mt-4 inline-block text-saffron", children: language === "mr" ? "चालू घडामोडींकडे परत जा" : "Back to Current Affairs" })
    ] });
  }
  const category = language === "mr" ? article.categoryMr : article.category;
  const seoSections = ((_a = article.seoSections) == null ? void 0 : _a[language]) || [];
  const faqs2 = ((_b = article.faq) == null ? void 0 : _b[language]) || [];
  const mcqs = ((_c = article.mcqs) == null ? void 0 : _c[language]) || [];
  const related = (article.relatedSlugs || []).map((relatedSlug) => getCurrentAffairBySlug(relatedSlug)).filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16", children: [
    /* @__PURE__ */ jsx(PageMeta, {}),
    /* @__PURE__ */ jsx("nav", { "aria-label": language === "mr" ? "पृष्ठ मार्गक्रमण" : "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm text-ink/50 dark:text-ink-dark/50", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-saffron", children: language === "mr" ? "मुख्यपृष्ठ" : "Home" }) }),
      /* @__PURE__ */ jsx("li", { "aria-hidden": "true", children: "/" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/current-affairs", className: "hover:text-saffron", children: language === "mr" ? "चालू घडामोडी" : "Current Affairs" }) }),
      /* @__PURE__ */ jsx("li", { "aria-hidden": "true", children: "/" }),
      /* @__PURE__ */ jsx("li", { "aria-current": "page", className: "font-medium text-navy dark:text-ink-dark", children: pick(article.title) })
    ] }) }),
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("time", { dateTime: article.date, className: "text-sm font-medium text-saffron", children: formatDate(article.date, language) }),
      /* @__PURE__ */ jsx("h1", { lang: language, className: "mt-1 font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick(article.title) }),
      /* @__PURE__ */ jsx("span", { lang: language, className: "mt-3 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf dark:text-leaf-light", children: category })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(BookOpen, { size: 20, className: "text-saffron" }),
        language === "mr" ? "परिचय" : "Introduction"
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80", children: pick(article.introduction || article.content) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(BookOpen, { size: 18, className: "text-saffron" }),
        language === "mr" ? "सोप्या भाषेत स्पष्टीकरण" : "Simple Explanation"
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80", children: pick(article.simpleExplanation) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 18, className: "text-saffron" }),
        language === "mr" ? "अगदी सोपे स्पष्टीकरण" : "Very Simple Explanation"
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 rounded-xl bg-navy/[0.04] p-5 text-base leading-relaxed text-navy dark:bg-white/[0.05] dark:text-ink-dark", children: pick(article.verySimple) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(Lightbulb, { size: 18, className: "text-saffron" }),
        language === "mr" ? "उदाहरण" : "Example"
      ] }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(article.example) })
    ] }),
    seoSections.length > 0 && /* @__PURE__ */ jsx("section", { className: "mt-8 space-y-6", children: seoSections.map((section, index) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: section.heading }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80", children: section.content })
    ] }, index)) }),
    faqs2.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(HelpCircle, { size: 20, className: "text-saffron" }),
        language === "mr" ? "वारंवार विचारले जाणारे प्रश्न" : "Frequently Asked Questions"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-4", children: faqs2.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-semibold text-navy dark:text-ink-dark", children: faq.question }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: faq.answer })
      ] }, index)) })
    ] }),
    mcqs.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: language === "mr" ? "बहुपर्यायी प्रश्न" : "Multiple Choice Questions" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-4", children: mcqs.map((mcq, index) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-semibold text-navy dark:text-ink-dark", children: mcq.question }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 grid gap-2 text-sm text-ink/70 dark:text-ink-dark/70 sm:grid-cols-2", children: mcq.options.map((option) => /* @__PURE__ */ jsx("li", { children: option }, option)) }),
        /* @__PURE__ */ jsxs("p", { lang: language, className: "mt-3 text-sm font-medium text-leaf dark:text-leaf-light", children: [
          language === "mr" ? "योग्य उत्तर" : "Correct answer",
          ": ",
          mcq.answer
        ] })
      ] }, index)) })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxs("h2", { lang: language, className: "flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark", children: [
        /* @__PURE__ */ jsx(Link2, { size: 18, className: "text-saffron" }),
        language === "mr" ? "संबंधित चालू घडामोडी" : "Related Current Affairs"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: related.map((relatedArticle) => /* @__PURE__ */ jsx(Link, { to: `/current-affairs/${relatedArticle.slug}`, className: "rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition-colors hover:border-saffron/50 hover:text-saffron dark:border-ink-dark/20 dark:text-ink-dark", children: pick(relatedArticle.title) }, relatedArticle.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 border-t border-navy/10 pt-6 text-xs text-ink/45 dark:border-ink-dark/10 dark:text-ink-dark/45", children: /* @__PURE__ */ jsxs("span", { children: [
      language === "mr" ? "स्रोत" : "Source",
      ":",
      " ",
      ((_d = article.source) == null ? void 0 : _d.url) ? /* @__PURE__ */ jsx(
        "a",
        {
          href: article.source.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-saffron",
          children: article.source.title || "The Indian Express"
        }
      ) : ((_e = article.source) == null ? void 0 : _e.title) || "—"
    ] }) })
  ] });
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
      /* @__PURE__ */ jsx(Route, { path: "/current-affairs", element: /* @__PURE__ */ jsx(CurrentAffairsList, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/current-affairs/:slug", element: /* @__PURE__ */ jsx(CurrentAffairDetails, {}) }),
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
