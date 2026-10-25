var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, useContext, useRef, useMemo } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useNavigate, Link, NavLink, useLocation, useSearchParams, useParams, Routes, Route } from "react-router-dom";
import * as Icons from "lucide-react";
import { Search, X, Menu, ArrowRight, Star, ExternalLink, ChevronDown, BookOpenCheck, Lightbulb, ArrowUpDown, BookOpen, ShieldAlert, ScrollText, Sparkles, HelpCircle, Link2, ChevronLeft, ChevronRight, Trophy, RotateCcw, Check, Lock } from "lucide-react";
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
const STORAGE_KEY$1 = "samvidhan_language";
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
    footer_copyright: "© 2026 MySamvidhan. All rights reserved.",
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
    footer_copyright: "© २०२६ MySamvidhan. सर्व हक्क राखीव.",
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
      return localStorage.getItem(STORAGE_KEY$1) || "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY$1, language);
    } catch {
    }
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = (lang) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => prev === "en" ? "mr" : "en");
  const t = (key) => {
    var _a2;
    return ((_a2 = STRINGS[language]) == null ? void 0 : _a2[key]) ?? STRINGS.en[key] ?? key;
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
  return /* @__PURE__ */ jsxs("header", { className: "site-header sticky top-0 z-40 border-b border-navy/10 dark:border-ink-dark/10 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", "aria-label": "Samvidhan home", children: [
        /* @__PURE__ */ jsx(ChakraMark, { className: "h-7 w-7 text-navy dark:text-saffron" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold tracking-tight text-navy dark:text-ink-dark", children: "SAMVIDHAN" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7", "aria-label": "Primary", children: links.map((l) => /* @__PURE__ */ jsx(NavLink, { to: l.to, className: linkClass, lang: language, children: l.label }, l.to)) }),
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
        /* @__PURE__ */ jsx(LanguageToggle, {})
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
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center", children: /* @__PURE__ */ jsx(LanguageToggle, {}) })
    ] })
  ] });
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
    id: "22",
    articleNumber: "Article 22",
    title: {
      en: "Protection against Arrest and Detention in Certain Cases",
      mr: "काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून संरक्षण"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: `Protection against arrest and detention in certain cases

(1) No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.

(2) Every person who is arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours of such arrest excluding the time necessary for the journey from the place of arrest to the court of the magistrate and no such person shall be detained in custody beyond the said period without the authority of a magistrate.

(3) Nothing in clauses (1) and (2) shall apply—

(a) to any person who for the time being is an enemy alien; or

(b) to any person who is arrested or detained under any law providing for preventive detention.

(4) No law providing for preventive detention shall authorise the detention of a person for a longer period than three months unless—

(a) an Advisory Board consisting of persons who are, or have been, or are qualified to be appointed as, Judges of a High Court has reported before the expiration of the said period of three months that there is in its opinion sufficient cause for such detention:

Provided that nothing in this sub-clause shall authorise the detention of any person beyond the maximum period prescribed by any law made by Parliament under sub-clause (b) of clause (7); or

(b) such person is detained in accordance with the provisions of any law made by Parliament under sub-clauses (a) and (b) of clause (7).

(5) When any person is detained in pursuance of an order made under any law providing for preventive detention, the authority making the order shall, as soon as may be, communicate to such person the grounds on which the order has been made and shall afford him the earliest opportunity of making a representation against the order.

(6) Nothing in clause (5) shall require the authority making any such order as is referred to in that clause to disclose facts which such authority considers to be against the public interest to disclose.

(7) Parliament may by law prescribe—

(a) the circumstances under which, and the class or classes of cases in which, a person may be detained for a period longer than three months under any law providing for preventive detention without obtaining the opinion of an Advisory Board in accordance with the provisions of sub-clause (a) of clause (4);

(b) the maximum period for which any person may in any class or classes of cases be detained under any law providing for preventive detention; and

(c) the procedure to be followed by an Advisory Board in an inquiry under sub-clause (a) of clause (4)).`,
      mr: `काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून संरक्षण

(1) अटक केलेल्या कोणत्याही व्यक्तीला अटकेची कारणे शक्य तितक्या लवकर कळविल्याशिवाय तिला ताब्यात ठेवता येणार नाही. तसेच, तिच्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत आपला बचाव करून घेण्याचा अधिकार तिला नाकारता येणार नाही.

(2) अटक करून ताब्यात ठेवलेल्या प्रत्येक व्यक्तीला, अटकेच्या ठिकाणाहून दंडाधिकाऱ्याच्या न्यायालयापर्यंत जाण्यास लागणारा आवश्यक प्रवासाचा कालावधी वगळता, अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. तसेच, दंडाधिकाऱ्याच्या अधिकाराशिवाय कोणत्याही व्यक्तीला त्या कालावधीपुढे ताब्यात ठेवता येणार नाही.

(3) खंड (1) आणि (2) मधील कोणतीही तरतूद पुढील व्यक्तींना लागू होणार नाही—

(a) त्या वेळी शत्रू परदेशी असलेल्या व्यक्तीला; किंवा

(b) प्रतिबंधात्मक नजरकैदेची तरतूद करणाऱ्या कोणत्याही कायद्याखाली अटक किंवा ताब्यात घेतलेल्या व्यक्तीला.

(4) प्रतिबंधात्मक नजरकैदेची तरतूद करणारा कोणताही कायदा एखाद्या व्यक्तीला तीन महिन्यांपेक्षा जास्त काळ ताब्यात ठेवण्यास परवानगी देणार नाही, जोपर्यंत—

(a) उच्च न्यायालयाचे न्यायाधीश म्हणून नियुक्त झालेले, नियुक्त होण्यास पात्र असलेले किंवा पूर्वी न्यायाधीश राहिलेले व्यक्ती असलेल्या सल्लागार मंडळाने त्या तीन महिन्यांचा कालावधी संपण्यापूर्वी, आपल्या मतानुसार अशा नजरकैदेसाठी पुरेसे कारण आहे, असा अहवाल दिलेला नसेल:

परंतु, या उपखंडातील कोणतीही बाब संसदेकडून खंड (7) च्या उपखंड (b) अंतर्गत केलेल्या कोणत्याही कायद्यात विहित केलेल्या कमाल कालावधीपेक्षा जास्त काळ कोणत्याही व्यक्तीला ताब्यात ठेवण्यास परवानगी देणार नाही; किंवा

(b) अशा व्यक्तीला खंड (7) च्या उपखंड (a) आणि (b) अंतर्गत संसदेकडून केलेल्या कोणत्याही कायद्याच्या तरतुदींनुसार ताब्यात ठेवलेले नसेल.

(5) प्रतिबंधात्मक नजरकैदेची तरतूद करणाऱ्या कोणत्याही कायद्याअंतर्गत केलेल्या आदेशानुसार एखाद्या व्यक्तीला ताब्यात घेतले असल्यास, तो आदेश करणाऱ्या प्राधिकरणाने शक्य तितक्या लवकर त्या व्यक्तीला आदेश कोणत्या कारणांवर आधारित आहे, ती कारणे कळविली पाहिजेत आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची सर्वात लवकर संधी तिला दिली पाहिजे.

(6) खंड (5) मधील कोणतीही तरतूद अशा प्राधिकरणाला, सार्वजनिक हिताच्या दृष्टीने उघड करणे योग्य नाही असे त्याला वाटणारे तथ्य उघड करण्यास बाध्य करणार नाही.

(7) संसद कायद्याद्वारे पुढील बाबी निश्चित करू शकते—

(a) प्रतिबंधात्मक नजरकैदेची तरतूद करणाऱ्या कोणत्याही कायद्याअंतर्गत एखाद्या व्यक्तीला तीन महिन्यांपेक्षा जास्त काळ, खंड (4) च्या उपखंड (a) मधील तरतुदीनुसार सल्लागार मंडळाचे मत न घेता, कोणत्या परिस्थितीत आणि कोणत्या प्रकारच्या प्रकरणांमध्ये ताब्यात ठेवता येईल;

(b) कोणत्याही व्यक्तीला कोणत्याही प्रकारच्या किंवा प्रकारांतील प्रकरणांमध्ये जास्तीत जास्त किती कालावधीसाठी प्रतिबंधात्मक नजरकैदेत ठेवता येईल; आणि

(c) खंड (4) च्या उपखंड (a) अंतर्गत सल्लागार मंडळाने चौकशी करताना कोणती प्रक्रिया अवलंबावी.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 22 is a Fundamental Right that provides constitutional safeguards against arbitrary arrest and detention in certain cases.

For an ordinary arrest, Article 22 provides important protections. A person who is arrested must be informed of the grounds of arrest as soon as may be, and must not be denied the right to consult and be defended by a legal practitioner of their choice.

A person who is arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours of the arrest, excluding the time necessary for the journey to the magistrate's court. Continued detention beyond this period requires the authority of a magistrate.

Article 22 also deals specifically with preventive detention. Preventive detention is different from ordinary punitive detention because it is intended to prevent certain future acts rather than to punish a person for an offence already committed.

The protections in clauses (1) and (2) do not apply in the same manner to persons detained under a law providing for preventive detention. However, Article 22 contains separate constitutional safeguards for preventive detention, including requirements relating to communication of the grounds of detention and an opportunity to make a representation against the detention order.

Article 22 therefore attempts to balance individual personal liberty with the State's authority to make laws dealing with arrest and preventive detention. The exact rights and procedures applicable in a particular case depend on the Constitution, the relevant law and the facts of that case.`,
      mr: `कलम 22 हे काही प्रकरणांमध्ये मनमानी अटक आणि नजरकैदेपासून संरक्षण देणारे भारतीय संविधानातील महत्त्वाचे मूलभूत अधिकारांचे कलम आहे.

सामान्य अटकेच्या बाबतीत कलम 22 काही महत्त्वाची घटनात्मक संरक्षणे देते. अटक केलेल्या व्यक्तीला अटकेची कारणे शक्य तितक्या लवकर कळवली पाहिजेत. तसेच तिला आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत बचाव करून घेण्याचा अधिकार नाकारता येत नाही.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. मात्र अटकेच्या ठिकाणाहून दंडाधिकाऱ्याच्या न्यायालयापर्यंत जाण्यास लागणारा आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही. त्यानंतर व्यक्तीला ताब्यात ठेवण्यासाठी दंडाधिकाऱ्याचा अधिकार आवश्यक असतो.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबतही स्वतंत्र तरतुदी आहेत. प्रतिबंधात्मक नजरकैद ही सामान्य दंडात्मक कारवाईपेक्षा वेगळी आहे. तिचा उद्देश एखाद्या व्यक्तीने भविष्यात विशिष्ट प्रकारची हानिकारक कृती करू नये यासाठी प्रतिबंधात्मक उपाय करणे हा असतो.

खंड (1) आणि (2) मधील संरक्षणे प्रतिबंधात्मक नजरकैदेअंतर्गत ताब्यात घेतलेल्या व्यक्तींना त्याच पद्धतीने लागू होत नाहीत. मात्र कलम 22 अशा नजरकैदेच्या बाबतीत स्वतंत्र घटनात्मक संरक्षण देते. त्यामध्ये नजरकैदेची कारणे कळविणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी देणे यांचा समावेश होतो.

म्हणूनच कलम 22 हे व्यक्तीचे वैयक्तिक स्वातंत्र्य आणि अटक व प्रतिबंधात्मक नजरकैदेबाबत राज्याला असलेले कायदेशीर अधिकार यांच्यात घटनात्मक चौकट निर्माण करते. एखाद्या विशिष्ट प्रकरणात कोणते अधिकार आणि प्रक्रिया लागू होतात, हे संविधान, संबंधित कायदा आणि त्या प्रकरणातील तथ्यांवर अवलंबून असते.`
    },
    verySimple: {
      en: `Article 22 protects a person against arbitrary arrest and detention. It generally requires the reasons for arrest to be communicated, provides the right to consult a lawyer, and requires an arrested person to be produced before a magistrate within twenty-four hours, subject to constitutional exceptions.

It also provides specific safeguards for persons detained under preventive detention laws.`,
      mr: `कलम 22 व्यक्तीला मनमानी अटक आणि नजरकैदेपासून घटनात्मक संरक्षण देते. सामान्य अटकेच्या वेळी अटकेची कारणे सांगणे, वकिलाचा सल्ला घेण्याची संधी देणे आणि साधारणपणे चोवीस तासांच्या आत दंडाधिकाऱ्यासमोर हजर करणे यांसारखी संरक्षणे या कलमात आहेत.

प्रतिबंधात्मक नजरकैदेअंतर्गत ताब्यात घेतलेल्या व्यक्तींसाठीही या कलमात स्वतंत्र घटनात्मक संरक्षणे दिली आहेत.`
    },
    example: {
      en: `Suppose a person is arrested by the police in connection with an alleged offence. The person cannot simply be kept in custody indefinitely without being informed of the grounds of arrest. Subject to the applicable law, the person must be informed of the grounds of arrest and has the right to consult and be defended by a legal practitioner of their choice.

If the person is arrested and detained in custody, they must generally be produced before the nearest magistrate within twenty-four hours, excluding the necessary travel time. Continued custody beyond that period requires the authority of a magistrate.

Now consider a different situation involving preventive detention. In such a case, the ordinary protections under clauses (1) and (2) operate differently. However, the Constitution provides separate safeguards, including communication of the grounds of preventive detention and an opportunity to make a representation against the detention order.

These examples are intended to explain the basic constitutional framework of Article 22. The actual legality of an arrest or detention depends on the Constitution, the applicable law and the facts of the individual case.`,
      mr: `समजा एखाद्या व्यक्तीला कथित गुन्ह्याच्या संदर्भात पोलिसांनी अटक केली. त्या व्यक्तीला अटकेची कारणे न सांगता अनिश्चित काळासाठी ताब्यात ठेवता येत नाही. लागू कायद्याच्या अधीन राहून तिला अटकेची कारणे कळवली पाहिजेत आणि आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा व त्याच्यामार्फत बचाव करून घेण्याचा अधिकार असतो.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. या कालावधीत आवश्यक प्रवासाचा वेळ मोजला जात नाही. त्यानंतर ताब्यात ठेवण्यासाठी दंडाधिकाऱ्याचा अधिकार आवश्यक असतो.

आता प्रतिबंधात्मक नजरकैदेचे उदाहरण पाहूया. अशा प्रकरणात खंड (1) आणि (2) मधील सामान्य संरक्षणे त्याच पद्धतीने लागू होत नाहीत. मात्र संविधान अशा व्यक्तीसाठी स्वतंत्र संरक्षण देते. त्यामध्ये नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी देणे यांचा समावेश होतो.

ही उदाहरणे कलम 22 ची मूलभूत घटनात्मक रचना समजावण्यासाठी आहेत. एखादी विशिष्ट अटक किंवा नजरकैद कायदेशीर आहे का, हे संविधान, लागू कायदा आणि त्या प्रकरणातील तथ्यांवर अवलंबून असते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 22 of the Indian Constitution?",
          content: `Article 22 of the Indian Constitution provides constitutional protection against arrest and detention in certain cases. It is part of the Fundamental Rights contained in Part III of the Constitution.

The Article deals with important safeguards relating to arrest, including communication of the grounds of arrest, access to a legal practitioner and production before a magistrate within twenty-four hours, subject to the exceptions specified by the Constitution.

Article 22 also contains separate provisions relating to preventive detention.`
        },
        {
          heading: "What are the main protections under Article 22?",
          content: `Article 22 provides several important constitutional safeguards. A person who is arrested must generally be informed of the grounds of arrest as soon as may be and cannot be denied the right to consult and be defended by a legal practitioner of their choice.

A person arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours, excluding the necessary journey time. Continued detention beyond this period requires the authority of a magistrate.`
        },
        {
          heading: "What is the 24-hour rule under Article 22?",
          content: `Article 22(2) provides that a person who is arrested and detained in custody must be produced before the nearest magistrate within twenty-four hours of the arrest, excluding the time necessary for the journey from the place of arrest to the magistrate's court.

The person cannot ordinarily be detained beyond this period without the authority of a magistrate. The constitutional provision is therefore an important safeguard against prolonged detention without judicial oversight.`
        },
        {
          heading: "Does Article 22 give an arrested person the right to a lawyer?",
          content: `Yes. Article 22(1) provides that an arrested person shall not be denied the right to consult, and to be defended by, a legal practitioner of their choice.

This is an important constitutional safeguard for an arrested person. The exact manner in which legal representation operates in a particular case is also governed by the applicable procedural and legal framework.`
        },
        {
          heading: "What information must be given after arrest?",
          content: `Article 22(1) provides that a person who is arrested must be informed, as soon as may be, of the grounds for the arrest.

The purpose of this safeguard is to ensure that an arrested person is not kept in custody without being informed of the basis of the arrest, subject to the constitutional and statutory framework applicable to the case.`
        },
        {
          heading: "What is preventive detention?",
          content: `Preventive detention refers to detention intended to prevent certain future acts rather than to punish a person for an offence already committed.

Article 22 specifically recognises preventive detention and provides a separate constitutional framework for it. The ordinary protections under clauses (1) and (2) do not apply in the same manner to persons arrested or detained under a law providing for preventive detention.

At the same time, Article 22 contains specific safeguards relating to preventive detention, including communication of the grounds of detention and an opportunity to make a representation against the detention order.`
        },
        {
          heading: "Does Article 22 completely prohibit preventive detention?",
          content: `No. The Constitution does not completely prohibit preventive detention. Article 22 contains specific provisions dealing with preventive detention and lays down constitutional safeguards for persons detained under such laws.

The validity of a particular preventive detention order depends on the Constitution, the relevant preventive detention law and the facts and circumstances of the individual case.`
        },
        {
          heading: "What is the role of an Advisory Board under Article 22?",
          content: `Article 22(4) deals with the constitutional framework relating to detention under preventive detention laws and refers to an Advisory Board consisting of persons who are, have been, or are qualified to be appointed as Judges of a High Court.

The Constitution provides a framework concerning detention beyond three months, subject to the provisions of Article 22 and laws made by Parliament. The detailed operation of preventive detention depends on the applicable law.`
        },
        {
          heading: "What rights does a person have under preventive detention?",
          content: `Article 22(5) provides that when a person is detained under a preventive detention law, the authority making the detention order must, as soon as may be, communicate the grounds on which the order has been made and provide the earliest opportunity to make a representation against the order.

Article 22(6) also provides an exception concerning facts that the authority considers to be against the public interest to disclose.`
        },
        {
          heading: "Who is not covered by the ordinary protections in Article 22(1) and 22(2)?",
          content: `Article 22(3) states that clauses (1) and (2) do not apply to a person who is for the time being an enemy alien or to a person who is arrested or detained under a law providing for preventive detention.

These are constitutional exceptions expressly stated in Article 22.`
        },
        {
          heading: "Article 22 and personal liberty",
          content: `Article 22 is closely connected with the constitutional protection of personal liberty. Article 21 protects life and personal liberty, while Article 22 provides specific constitutional safeguards relating to arrest and detention.

Together, these provisions form an important part of the constitutional framework governing individual liberty and State action.`
        },
        {
          heading: "Article 22 and Article 21",
          content: `Article 21 provides that no person shall be deprived of life or personal liberty except according to procedure established by law. Article 22 specifically addresses safeguards relating to arrest and detention in certain cases.

Studying Articles 21 and 22 together helps explain the constitutional framework surrounding personal liberty, arrest, detention and procedural safeguards.`
        },
        {
          heading: "Article 22 and Article 20",
          content: `Article 20 provides specific protections in respect of conviction for offences, including protection against ex post facto criminal laws, double jeopardy and compelled self-incrimination.

Article 22, on the other hand, specifically deals with safeguards relating to arrest and detention. These provisions are separate but can be studied together when understanding constitutional protections available to persons involved in criminal proceedings.`
        },
        {
          heading: "Why is Article 22 important?",
          content: `Article 22 is important because arrest and detention directly affect personal liberty. The Constitution therefore provides specific safeguards concerning information about the grounds of arrest, access to legal representation and judicial oversight through production before a magistrate.

The Article also creates a separate constitutional framework for preventive detention, including safeguards relating to communication of grounds and representation against detention orders.`
        },
        {
          heading: "Common misunderstandings about Article 22",
          content: `One common misunderstanding is that Article 22 means every arrested person must be released within twenty-four hours. The Article instead requires an arrested person who is detained in custody to be produced before the nearest magistrate within twenty-four hours, excluding necessary travel time. Continued detention may be authorised by a magistrate.

Another misunderstanding is that Article 22 completely prohibits preventive detention. The Constitution recognises preventive detention but provides specific constitutional safeguards for it.

It is also important to distinguish the ordinary arrest safeguards under clauses (1) and (2) from the separate provisions dealing with preventive detention.`
        },
        {
          heading: "Why should students study Article 22?",
          content: `Article 22 is an important topic for students studying the Indian Constitution, Fundamental Rights, law and competitive examinations.

For UPSC, MPSC, Police Bharti and other competitive examinations, students should understand the relationship between Article 20, Article 21 and Article 22, along with the distinction between ordinary arrest and preventive detention.

Understanding the constitutional wording and its basic structure is more useful than memorising only a one-line definition.`
        },
        {
          heading: "Key points to remember about Article 22",
          content: `Article 22 provides constitutional safeguards against arrest and detention in certain cases.

An arrested person must generally be informed of the grounds of arrest.

An arrested person has the right to consult and be defended by a legal practitioner of their choice.

A person arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours, excluding necessary journey time.

Article 22 contains separate provisions relating to preventive detention.

A person detained under a preventive detention law must generally be informed of the grounds of detention and given the earliest opportunity to make a representation against the order.

Article 22(3) specifies constitutional exceptions to the protections in clauses (1) and (2).`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 22 म्हणजे काय?",
          content: `कलम 22 हे भारतीय संविधानातील काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून संरक्षण देणारे महत्त्वाचे मूलभूत अधिकारांचे कलम आहे. हे संविधानाच्या भाग III मधील मूलभूत अधिकारांचा भाग आहे.

या कलमात अटकेची कारणे कळवणे, कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा अधिकार आणि अटक केलेल्या व्यक्तीला चोवीस तासांच्या आत दंडाधिकाऱ्यासमोर हजर करण्यासंबंधी घटनात्मक संरक्षणे दिली आहेत.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र घटनात्मक तरतुदीही आहेत.`
        },
        {
          heading: "कलम 22 अंतर्गत कोणती प्रमुख संरक्षणे आहेत?",
          content: `कलम 22 मध्ये अटक केलेल्या व्यक्तीसाठी अनेक महत्त्वाची घटनात्मक संरक्षणे आहेत. अटकेची कारणे शक्य तितक्या लवकर कळवणे आणि आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा व त्याच्यामार्फत बचाव करून घेण्याचा अधिकार यांचा त्यात समावेश आहे.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. या कालावधीत आवश्यक प्रवासाचा वेळ मोजला जात नाही.`
        },
        {
          heading: "कलम 22 मधील 24 तासांचा नियम काय आहे?",
          content: `कलम 22(2) नुसार अटक करून ताब्यात ठेवलेल्या व्यक्तीला अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. अटकेच्या ठिकाणाहून दंडाधिकाऱ्याच्या न्यायालयापर्यंत जाण्यास लागणारा आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही.

दंडाधिकाऱ्याच्या अधिकाराशिवाय व्यक्तीला या कालावधीपुढे ताब्यात ठेवता येत नाही. त्यामुळे दीर्घकाळ न्यायालयीन देखरेखीशिवाय ताब्यात ठेवण्यापासून संरक्षण देणारी ही महत्त्वाची घटनात्मक तरतूद आहे.`
        },
        {
          heading: "कलम 22 अंतर्गत अटक केलेल्या व्यक्तीला वकिलाचा अधिकार आहे का?",
          content: `होय. कलम 22(1) नुसार अटक केलेल्या व्यक्तीला आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत बचाव करून घेण्याचा अधिकार नाकारता येत नाही.

हे अटक केलेल्या व्यक्तीच्या घटनात्मक संरक्षणाचा महत्त्वाचा भाग आहे. एखाद्या विशिष्ट प्रकरणात कायदेशीर प्रतिनिधित्वाची प्रक्रिया संबंधित कायदे आणि प्रक्रियात्मक नियमांनुसार ठरते.`
        },
        {
          heading: "अटकेनंतर कोणती माहिती देणे आवश्यक आहे?",
          content: `कलम 22(1) नुसार अटक केलेल्या व्यक्तीला अटकेची कारणे शक्य तितक्या लवकर कळवली पाहिजेत.

या संरक्षणाचा उद्देश असा आहे की एखाद्या व्यक्तीला अटकेचा आधार न सांगता ताब्यात ठेवले जाऊ नये. मात्र विशिष्ट प्रकरणात लागू असलेली घटनात्मक आणि कायदेशीर चौकटही विचारात घेतली जाते.`
        },
        {
          heading: "प्रतिबंधात्मक नजरकैद म्हणजे काय?",
          content: `प्रतिबंधात्मक नजरकैद म्हणजे एखाद्या व्यक्तीने भविष्यात विशिष्ट प्रकारची कृती करू नये किंवा संभाव्य धोका टाळता यावा या उद्देशाने कायद्यानुसार व्यक्तीला ताब्यात ठेवण्याची व्यवस्था.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेचा स्वतंत्र घटनात्मक विचार केला आहे. खंड (1) आणि (2) मधील सामान्य संरक्षणे प्रतिबंधात्मक नजरकैदेतील व्यक्तींना त्याच पद्धतीने लागू होत नाहीत.

मात्र अशा व्यक्तींना नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी देणे यांसारखी स्वतंत्र घटनात्मक संरक्षणे कलम 22 मध्ये आहेत.`
        },
        {
          heading: "कलम 22 प्रतिबंधात्मक नजरकैद पूर्णपणे बंद करते का?",
          content: `नाही. भारतीय संविधान प्रतिबंधात्मक नजरकैदेला पूर्णपणे प्रतिबंध करत नाही. कलम 22 मध्ये अशा नजरकैदेबाबत स्वतंत्र तरतुदी आणि घटनात्मक संरक्षणे दिली आहेत.

एखाद्या विशिष्ट प्रतिबंधात्मक नजरकैदेचा आदेश कायदेशीर आहे का, हे संविधान, संबंधित प्रतिबंधात्मक नजरकैदेचा कायदा आणि त्या प्रकरणातील तथ्ये व परिस्थिती यावर अवलंबून असते.`
        },
        {
          heading: "कलम 22 मध्ये सल्लागार मंडळाची भूमिका काय आहे?",
          content: `कलम 22(4) मध्ये प्रतिबंधात्मक नजरकैदेच्या घटनात्मक चौकटीत सल्लागार मंडळाचा उल्लेख आहे. या मंडळात उच्च न्यायालयाचे न्यायाधीश म्हणून नियुक्त झालेले, पूर्वी न्यायाधीश राहिलेले किंवा उच्च न्यायालयाचे न्यायाधीश म्हणून नियुक्त होण्यास पात्र असलेले व्यक्ती असतात.

तीन महिन्यांपेक्षा जास्त काळ प्रतिबंधात्मक नजरकैद ठेवण्याच्या घटनात्मक चौकटीशी या तरतुदीचा संबंध आहे. त्याची सविस्तर अंमलबजावणी संबंधित कायद्यावर अवलंबून असते.`
        },
        {
          heading: "प्रतिबंधात्मक नजरकैदेत असलेल्या व्यक्तीला कोणते अधिकार आहेत?",
          content: `कलम 22(5) नुसार प्रतिबंधात्मक नजरकैदेच्या कायद्याअंतर्गत एखाद्या व्यक्तीला ताब्यात घेतल्यास, त्या व्यक्तीला नजरकैदेचा आदेश कोणत्या कारणांवर आधारित आहे, ती कारणे शक्य तितक्या लवकर कळवली पाहिजेत.

तसेच त्या व्यक्तीला त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची सर्वात लवकर संधी दिली पाहिजे.

कलम 22(6) मध्ये सार्वजनिक हिताच्या दृष्टीने उघड करणे योग्य नाही असे प्राधिकरणाला वाटणाऱ्या काही तथ्यांबाबत अपवाद दिला आहे.`
        },
        {
          heading: "कलम 22(1) आणि 22(2) मधील संरक्षणे कोणाला लागू होत नाहीत?",
          content: `कलम 22(3) नुसार खंड (1) आणि (2) मधील संरक्षणे त्या वेळी शत्रू परदेशी असलेल्या व्यक्तीला किंवा प्रतिबंधात्मक नजरकैदेची तरतूद करणाऱ्या कायद्याअंतर्गत अटक किंवा ताब्यात घेतलेल्या व्यक्तीला लागू होत नाहीत.

हे अपवाद संविधानाच्या कलम 22 मध्ये स्पष्टपणे नमूद केले आहेत.`
        },
        {
          heading: "कलम 22 आणि वैयक्तिक स्वातंत्र्य",
          content: `कलम 22 चा वैयक्तिक स्वातंत्र्याच्या घटनात्मक संरक्षणाशी जवळचा संबंध आहे. कलम 21 जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण करते, तर कलम 22 अटक आणि नजरकैदेबाबत विशिष्ट घटनात्मक संरक्षणे देते.

ही दोन्ही कलमे एकत्रितपणे व्यक्तीचे स्वातंत्र्य आणि राज्याच्या अटक व नजरकैदेच्या अधिकारांमधील घटनात्मक चौकट समजून घेण्यासाठी महत्त्वाची आहेत.`
        },
        {
          heading: "कलम 22 आणि कलम 21",
          content: `कलम 21 नुसार कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा वैयक्तिक स्वातंत्र्यापासून वंचित करता येत नाही. कलम 22 अटक आणि नजरकैदेच्या संदर्भात विशिष्ट संरक्षणे सांगते.

कलम 21 आणि कलम 22 यांचा एकत्र अभ्यास केल्यास वैयक्तिक स्वातंत्र्य, अटक, नजरकैद आणि प्रक्रियात्मक संरक्षणांची घटनात्मक चौकट अधिक स्पष्टपणे समजते.`
        },
        {
          heading: "कलम 22 आणि कलम 20",
          content: `कलम 20 मध्ये गुन्ह्यांसाठी दोषसिद्धीच्या संदर्भात विशिष्ट संरक्षणे दिली आहेत. त्यामध्ये पूर्वलक्षी दंडात्मक कायद्यापासून संरक्षण, एकाच गुन्ह्यासाठी पुन्हा शिक्षा होण्यापासून संरक्षण आणि स्वतःविरुद्ध साक्ष देण्यास सक्ती न करण्याचे संरक्षण यांचा समावेश होतो.

कलम 22 मात्र मुख्यतः अटक आणि नजरकैदेबाबतच्या घटनात्मक संरक्षणांशी संबंधित आहे. व्यक्तीच्या घटनात्मक संरक्षणांचा अभ्यास करताना कलम 20, 21 आणि 22 यांचा एकत्र अभ्यास उपयुक्त ठरतो.`
        },
        {
          heading: "कलम 22 महत्त्वाचे का आहे?",
          content: `अटक आणि नजरकैद यांचा व्यक्तीच्या वैयक्तिक स्वातंत्र्यावर थेट परिणाम होतो. त्यामुळे अटकेची कारणे कळवणे, कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा अधिकार आणि दंडाधिकाऱ्यासमोर हजर करण्याची प्रक्रिया यांसारखी घटनात्मक संरक्षणे महत्त्वाची आहेत.

कलम 22 प्रतिबंधात्मक नजरकैदेबाबतही स्वतंत्र घटनात्मक चौकट निर्माण करते. त्यामध्ये नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी यांचा समावेश आहे.`
        },
        {
          heading: "कलम 22 बाबत सामान्य गैरसमज",
          content: `एक सामान्य गैरसमज असा आहे की कलम 22 मुळे अटक केलेल्या प्रत्येक व्यक्तीला चोवीस तासांच्या आत सोडावे लागते. प्रत्यक्षात कलम 22(2) नुसार अटक करून ताब्यात ठेवलेल्या व्यक्तीला चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर करणे आवश्यक आहे. आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही. त्यानंतर दंडाधिकाऱ्याच्या अधिकाराने पुढील ताबा सुरू राहू शकतो.

दुसरा गैरसमज असा आहे की संविधान प्रतिबंधात्मक नजरकैदेला पूर्णपणे प्रतिबंध करते. प्रत्यक्षात कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र तरतुदी आहेत.

तसेच सामान्य अटकेसाठी असलेली कलम 22(1) आणि 22(2) मधील संरक्षणे आणि प्रतिबंधात्मक नजरकैदेबाबतच्या स्वतंत्र तरतुदी यांच्यातील फरक समजून घेणे महत्त्वाचे आहे.`
        },
        {
          heading: "विद्यार्थ्यांनी कलम 22 का अभ्यासावे?",
          content: `भारतीय संविधान, मूलभूत अधिकार, कायदा आणि स्पर्धा परीक्षांचा अभ्यास करणाऱ्या विद्यार्थ्यांसाठी कलम 22 हा महत्त्वाचा विषय आहे.

UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी कलम 20, 21 आणि 22 यांचा परस्पर संबंध समजून घेणे तसेच सामान्य अटक आणि प्रतिबंधात्मक नजरकैद यातील फरक समजणे उपयुक्त ठरते.

केवळ एका ओळीतील व्याख्या पाठ करण्याऐवजी घटनात्मक मजकूर, त्याचा साधा अर्थ आणि संबंधित कलमांशी असलेला संबंध समजून घेणे अधिक उपयुक्त आहे.`
        },
        {
          heading: "कलम 22 चे महत्त्वाचे मुद्दे",
          content: `कलम 22 काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून घटनात्मक संरक्षण देते.

अटक केलेल्या व्यक्तीला सामान्यतः अटकेची कारणे कळवली पाहिजेत.

अटक केलेल्या व्यक्तीला आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत बचाव करून घेण्याचा अधिकार आहे.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र तरतुदी आहेत.

प्रतिबंधात्मक नजरकैदेअंतर्गत ताब्यात घेतलेल्या व्यक्तीला सामान्यतः नजरकैदेची कारणे कळवली पाहिजेत आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची सर्वात लवकर संधी दिली पाहिजे.

कलम 22(3) मध्ये खंड (1) आणि (2) मधील संरक्षणांना लागू असलेले घटनात्मक अपवाद नमूद केले आहेत.`
        }
      ]
    },
    keywords: [
      "Article 22",
      "Article 22 of Indian Constitution",
      "Article 22 Indian Constitution",
      "Article 22 explained",
      "What is Article 22",
      "Article 22 Fundamental Rights",
      "Article 22 protection against arrest",
      "Protection against arrest and detention",
      "Article 22 24 hours",
      "Article 22 right to lawyer",
      "Article 22 preventive detention",
      "Preventive Detention India",
      "Article 22 and Article 21",
      "Article 22 and Article 20",
      "Article 22 in simple words",
      "arrest and detention rights India",
      "24 hours arrest rule India",
      "Article 22 Advisory Board",
      "कलम 22",
      "कलम 22 भारतीय संविधान",
      "कलम 22 मराठीत",
      "कलम 22 म्हणजे काय",
      "अटक आणि नजरकैदेपासून संरक्षण",
      "अटकेपासून संरक्षण",
      "नजरकैद",
      "प्रतिबंधात्मक नजरकैद",
      "अटकेनंतर 24 तास",
      "अटक केलेल्या व्यक्तीचे अधिकार",
      "वकिलाचा अधिकार"
    ],
    relatedIds: ["20", "21", "21A", "23"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-01"
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
  },
  {
    id: "105",
    articleNumber: "Article 105",
    title: {
      en: "Powers, Privileges and Immunities of Parliament and its Members",
      mr: "संसद आणि तिच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती"
    },
    categoryKey: "union-legislature",
    officialText: {
      en: `Powers, privileges and immunities of Parliament and its members.—
(1) Subject to the provisions of this Constitution and to the rules and standing orders regulating the procedure of Parliament, there shall be freedom of speech in Parliament.

(2) No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament or any committee thereof, and no person shall be so liable in respect of the publication by or under the authority of either House of Parliament of any report, paper, votes or proceedings.

(3) In other respects, the powers, privileges and immunities of each House of Parliament, and of the members and the committees of each House, shall be such as may from time to time be defined by Parliament by law, and, until so defined, shall be those of that House and of its members and committees immediately before the coming into force of section 15 of the Constitution (Forty-fourth Amendment) Act, 1978.

(4) The provisions of clauses (1), (2) and (3) shall apply in relation to persons who by virtue of the Constitution have the right to speak in, and otherwise to take part in the proceedings of, a House of Parliament or any committee thereof as they apply in relation to members of Parliament.`,
      mr: `संसद आणि तिच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती.—
(1) या संविधानाच्या तरतुदींना आणि संसदेच्या कार्यपद्धतीचे नियमन करणाऱ्या नियम व स्थायी आदेशांना अधीन राहून, संसदेत भाषणस्वातंत्र्य असेल.

(2) संसदेत किंवा तिच्या कोणत्याही समितीत सदस्याने केलेल्या कोणत्याही वक्तव्याबद्दल किंवा दिलेल्या कोणत्याही मताबद्दल त्या सदस्याविरुद्ध कोणत्याही न्यायालयीन कार्यवाहीस तो जबाबदार राहणार नाही. तसेच संसदेच्या कोणत्याही सभागृहाच्या अधिकाराने किंवा त्याच्या वतीने केलेल्या कोणत्याही अहवाल, कागदपत्र, मत किंवा कार्यवाहीच्या प्रकाशनाबद्दल कोणतीही व्यक्ती अशा प्रकारे जबाबदार राहणार नाही.

(3) इतर बाबतीत, संसदेच्या प्रत्येक सभागृहाचे आणि त्याच्या सदस्यांचे व समित्यांचे अधिकार, विशेषाधिकार आणि उन्मुक्ती संसद वेळोवेळी कायद्याद्वारे निश्चित करेल. तोपर्यंत, संविधान (चव्वेचाळीसावी घटनादुरुस्ती) अधिनियम, 1978 मधील कलम 15 लागू होण्यापूर्वी तत्काळ अस्तित्वात असलेले संबंधित अधिकार, विशेषाधिकार आणि उन्मुक्ती लागू राहतील.

(4) खंड (1), (2) आणि (3) मधील तरतुदी संविधानामुळे संसदेत किंवा तिच्या कोणत्याही समितीच्या कार्यवाहीत बोलण्याचा आणि अन्य प्रकारे सहभागी होण्याचा अधिकार असलेल्या व्यक्तींनाही संसद सदस्यांप्रमाणे लागू होतील.`
    },
    simpleExplanation: {
      en: `Article 105 deals with the powers, privileges and immunities of Parliament, its Houses, members and committees.

Clause (1) provides for freedom of speech in Parliament, subject to the Constitution and the rules and standing orders regulating parliamentary procedure.

Clause (2) provides an important form of constitutional protection to members of Parliament. A member is not liable to proceedings in a court for anything said or any vote given in Parliament or in a parliamentary committee. The clause also protects certain authorised publications of parliamentary proceedings.

Clause (3) deals with the other powers, privileges and immunities of each House of Parliament and its members and committees. Parliament may define these by law.

Clause (4) extends the relevant protections to persons who have a constitutional right to speak in and participate in parliamentary proceedings even though they are not necessarily members of Parliament.

Article 105 is the constitutional provision concerning parliamentary privileges. It is different from Article 194, which deals with the powers, privileges and immunities of State Legislatures and their members.

Parliamentary privileges are intended to enable Parliament and its members to perform their constitutional functions effectively and without improper interference. These privileges operate within the constitutional framework and are not a general exemption from all laws or judicial processes.

Therefore, Article 105 provides constitutional protection for parliamentary speech, voting and specified parliamentary functions while recognising the authority of Parliament to define its other privileges by law.`,
      mr: `कलम 105 हे संसद, तिची सभागृहे, सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती यांच्याशी संबंधित आहे.

खंड (1) नुसार संविधान आणि संसदीय कार्यपद्धतीचे नियमन करणारे नियम व स्थायी आदेश यांच्या अधीन राहून संसदेत भाषणस्वातंत्र्य असते.

खंड (2) संसद सदस्यांना महत्त्वाचे घटनात्मक संरक्षण देते. संसदेत किंवा संसदीय समितीत सदस्याने केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर कोणत्याही न्यायालयात कार्यवाही करता येत नाही. तसेच संसदीय कार्यवाहीच्या काही अधिकृत प्रकाशनांनाही या तरतुदीनुसार संरक्षण मिळते.

खंड (3) संसद आणि तिच्या सभागृहांचे, सदस्यांचे व समित्यांचे इतर अधिकार, विशेषाधिकार आणि उन्मुक्ती यांच्याशी संबंधित आहे. हे विशेषाधिकार संसद कायद्याद्वारे निश्चित करू शकते.

खंड (4) संविधानामुळे संसदेत किंवा तिच्या समितीत बोलण्याचा व कार्यवाहीत सहभागी होण्याचा अधिकार असलेल्या काही व्यक्तींनाही संबंधित संरक्षण लागू करते.

कलम 105 हे संसदेच्या विशेषाधिकारांशी संबंधित घटनात्मक तरतूद आहे. याउलट कलम 194 हे राज्य विधिमंडळ आणि त्याच्या सदस्यांच्या अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे.

संसदीय विशेषाधिकारांचा उद्देश संसद आणि तिच्या सदस्यांना त्यांच्या घटनात्मक जबाबदाऱ्या प्रभावीपणे पार पाडता याव्यात आणि त्यांच्या कामकाजात अनुचित हस्तक्षेप होऊ नये हा आहे. मात्र याचा अर्थ सर्व कायदे किंवा न्यायालयीन प्रक्रियांपासून सर्वसाधारण सूट मिळते असा नाही.

म्हणून कलम 105 संसदेत भाषण, मतदान आणि संसदीय कार्याशी संबंधित काही संरक्षणांना घटनात्मक आधार देते आणि इतर विशेषाधिकार कायद्याद्वारे निश्चित करण्याची तरतूद करते.`
    },
    verySimple: {
      en: "Article 105 protects freedom of speech in Parliament and provides certain privileges and immunities to Parliament, its members and committees. It helps members perform their parliamentary functions effectively within the constitutional framework.",
      mr: "कलम 105 संसदेत भाषणस्वातंत्र्याचे संरक्षण करते आणि संसद, तिचे सदस्य व समित्यांना काही विशेषाधिकार व उन्मुक्ती देते. यामुळे घटनात्मक चौकटीत संसदीय कामकाज प्रभावीपणे पार पाडता येते."
    },
    example: {
      en: `Suppose a Member of Parliament makes a statement or casts a vote during parliamentary proceedings. Article 105(2) provides constitutional protection against court proceedings in respect of that speech or vote.

For example, a parliamentary debate may involve strong criticism of a government policy. The constitutional protection under Article 105 concerns what the member says or votes in Parliament in the exercise of parliamentary functions.

This protection is intended to preserve the independence and effective functioning of Parliament. It should not be understood as giving a member unlimited immunity for every act performed outside parliamentary proceedings.`,
      mr: `समजा एखादा संसद सदस्य संसदेच्या कामकाजादरम्यान एखादे वक्तव्य करतो किंवा एखाद्या प्रस्तावावर मतदान करतो. कलम 105(2) नुसार त्या वक्तव्याबद्दल किंवा मतदानाबद्दल न्यायालयीन कार्यवाहीपासून संबंधित सदस्याला घटनात्मक संरक्षण मिळते.

उदाहरणार्थ, संसदेतील चर्चेदरम्यान एखादा सदस्य सरकारी धोरणावर तीव्र टीका करू शकतो. संसदीय कार्यवाहीत सदस्याने केलेल्या अशा वक्तव्याशी संबंधित संरक्षण कलम 105 अंतर्गत दिलेले आहे.

या संरक्षणाचा उद्देश संसदेचे स्वातंत्र्य आणि प्रभावी कामकाज राखणे हा आहे. मात्र याचा अर्थ संसद सदस्याने संसदेबाहेर केलेल्या प्रत्येक कृतीला अमर्यादित संरक्षण मिळते असा नाही.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 105 of the Indian Constitution?",
          content: "Article 105 deals with the powers, privileges and immunities of Parliament, its members and committees. It also provides for freedom of speech in Parliament."
        },
        {
          heading: "What is parliamentary privilege under Article 105?",
          content: "Parliamentary privilege refers to constitutional protections and powers that enable Parliament and its members to perform their legislative functions effectively. Article 105 provides the constitutional framework for these privileges."
        },
        {
          heading: "What does Article 105(1) provide?",
          content: "Article 105(1) provides for freedom of speech in Parliament, subject to the Constitution and the rules and standing orders regulating parliamentary procedure."
        },
        {
          heading: "What does Article 105(2) provide?",
          content: "Article 105(2) protects Members of Parliament from court proceedings in respect of anything said or any vote given by them in Parliament or a parliamentary committee, subject to the constitutional provision."
        },
        {
          heading: "What is the difference between Article 105 and Article 194?",
          content: "Article 105 deals with the powers, privileges and immunities of Parliament and its members, while Article 194 deals with the corresponding powers, privileges and immunities of State Legislatures and their members."
        },
        {
          heading: "Does Article 105 give MPs unlimited immunity?",
          content: "No. Article 105 provides specific constitutional protections relating to parliamentary proceedings and privileges. It should not be understood as a general immunity from every law or judicial process."
        },
        {
          heading: "Why are parliamentary privileges important?",
          content: "Parliamentary privileges help Parliament and its members perform their constitutional and legislative functions effectively and protect parliamentary proceedings from improper interference."
        },
        {
          heading: "Article 105 and Freedom of Speech",
          content: "Article 105 provides freedom of speech in Parliament, while Article 19(1)(a) protects freedom of speech and expression for citizens. The two provisions operate in different constitutional contexts."
        },
        {
          heading: "Article 105 in simple words",
          content: "In simple terms, Article 105 gives Parliament and its members constitutional protections and privileges necessary for effective parliamentary functioning, including freedom of speech in Parliament."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 105 म्हणजे काय?",
          content: "कलम 105 हे संसद, तिचे सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती यांच्याशी संबंधित आहे. तसेच संसदेत भाषणस्वातंत्र्याची घटनात्मक तरतूद करते."
        },
        {
          heading: "कलम 105 अंतर्गत संसदीय विशेषाधिकार म्हणजे काय?",
          content: "संसदीय विशेषाधिकार म्हणजे संसद आणि तिच्या सदस्यांना संसदीय व घटनात्मक कार्य प्रभावीपणे पार पाडण्यासाठी मिळणारे घटनात्मक संरक्षण व अधिकार. कलम 105 या विशेषाधिकारांना घटनात्मक आधार देते."
        },
        {
          heading: "कलम 105(1) मध्ये काय आहे?",
          content: "कलम 105(1) नुसार संविधान आणि संसदेच्या कार्यपद्धतीचे नियमन करणारे नियम यांच्या अधीन राहून संसदेत भाषणस्वातंत्र्य आहे."
        },
        {
          heading: "कलम 105(2) मध्ये काय आहे?",
          content: "कलम 105(2) नुसार संसदेत किंवा संसदीय समितीत सदस्याने केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर न्यायालयीन कार्यवाही करता येत नाही."
        },
        {
          heading: "कलम 105 आणि कलम 194 मध्ये काय फरक आहे?",
          content: "कलम 105 हे संसद आणि तिच्या सदस्यांच्या अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे, तर कलम 194 हे राज्य विधिमंडळ आणि त्याच्या सदस्यांच्या संबंधित अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे."
        },
        {
          heading: "कलम 105 मुळे खासदारांना अमर्यादित संरक्षण मिळते का?",
          content: "नाही. कलम 105 संसदीय कार्यवाही आणि विशेषाधिकारांशी संबंधित विशिष्ट घटनात्मक संरक्षण देते. प्रत्येक कायदा किंवा न्यायालयीन प्रक्रियेपासून सर्वसाधारण सूट मिळते असे या कलमाचे स्वरूप नाही."
        },
        {
          heading: "संसदीय विशेषाधिकार महत्त्वाचे का आहेत?",
          content: "संसदीय विशेषाधिकारांमुळे संसद आणि तिचे सदस्य घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडू शकतात आणि संसदीय कार्यवाहीत अनुचित हस्तक्षेपापासून संरक्षण मिळते."
        },
        {
          heading: "कलम 105 आणि भाषणस्वातंत्र्य",
          content: "कलम 105 संसदेत भाषणस्वातंत्र्याशी संबंधित आहे, तर कलम 19(1)(अ) नागरिकांच्या भाषण आणि अभिव्यक्ती स्वातंत्र्याचे संरक्षण करते. दोन्ही तरतुदींचा घटनात्मक संदर्भ वेगळा आहे."
        },
        {
          heading: "सोप्या भाषेत कलम 105",
          content: "सोप्या भाषेत सांगायचे झाल्यास, संसद आणि तिच्या सदस्यांना संसदीय कामकाज प्रभावीपणे पार पाडण्यासाठी आवश्यक घटनात्मक संरक्षण आणि विशेषाधिकार कलम 105 अंतर्गत मिळतात."
        }
      ]
    },
    keywords: [
      "Article 105",
      "Article 105 Indian Constitution",
      "Parliamentary Privileges",
      "Parliamentary Privileges in India",
      "Privileges of Parliament",
      "MP Privileges",
      "Article 105 explained",
      "Article 105 in Marathi",
      "Freedom of Speech in Parliament",
      "Parliamentary Immunity",
      "कलम 105",
      "कलम 105 भारतीय संविधान",
      "संसदीय विशेषाधिकार",
      "खासदारांचे विशेषाधिकार",
      "संसद विशेषाधिकार"
    ],
    relatedIds: ["19", "194", "32", "122"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-05"
  },
  {
    id: "194",
    articleNumber: "Article 194",
    title: {
      en: "Powers, Privileges and Immunities of State Legislatures and their Members",
      mr: "राज्य विधिमंडळ आणि त्याच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती"
    },
    categoryKey: "state-legislature",
    officialText: {
      en: `Powers, privileges and immunities of Legislative Assemblies and Legislative Councils and of the members thereof.—
(1) Subject to the provisions of this Constitution and to the rules and standing orders regulating the procedure of the Legislature, there shall be freedom of speech in the Legislature of every State.

(2) No member of the Legislature of a State shall be liable to any proceedings in any court in respect of anything said or any vote given by him in the Legislature or any committee thereof, and no person shall be so liable in respect of the publication by or under the authority of a House of such a Legislature of any report, paper, votes or proceedings.

(3) In other respects, the powers, privileges and immunities of a House of the Legislature of a State, and of the members and the committees of a House of such Legislature, shall be such as may from time to time be defined by the Legislature by law, and, until so defined, shall be those of that House and of its members and committees immediately before the coming into force of section 26 of the Constitution (Forty-fourth Amendment) Act, 1978.

(4) The provisions of clauses (1), (2) and (3) shall apply in relation to persons who by virtue of this Constitution have the right to speak in, and otherwise to take part in the proceedings of, a House of the Legislature of a State or any committee thereof as they apply in relation to members of that Legislature.`,
      mr: `राज्याच्या विधानसभेचे आणि विधानपरिषदेचे तसेच त्यांच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती.—
(1) या संविधानाच्या तरतुदींना आणि विधिमंडळाच्या कार्यपद्धतीचे नियमन करणाऱ्या नियम व स्थायी आदेशांना अधीन राहून, प्रत्येक राज्याच्या विधिमंडळात भाषणस्वातंत्र्य असेल.

(2) राज्याच्या विधिमंडळाचा कोणताही सदस्य विधिमंडळात किंवा त्याच्या कोणत्याही समितीत त्याने केलेल्या कोणत्याही वक्तव्याबद्दल किंवा दिलेल्या कोणत्याही मताबद्दल कोणत्याही न्यायालयीन कार्यवाहीस जबाबदार राहणार नाही. तसेच अशा विधिमंडळाच्या कोणत्याही सभागृहाच्या अधिकाराने किंवा त्याच्या वतीने केलेल्या कोणत्याही अहवाल, कागदपत्र, मत किंवा कार्यवाहीच्या प्रकाशनाबद्दल कोणतीही व्यक्ती अशा प्रकारे जबाबदार राहणार नाही.

(3) इतर बाबतीत, राज्याच्या विधिमंडळाच्या सभागृहाचे आणि त्याच्या सदस्यांचे व समित्यांचे अधिकार, विशेषाधिकार आणि उन्मुक्ती विधिमंडळ वेळोवेळी कायद्याद्वारे निश्चित करेल. तोपर्यंत, संविधान (चव्वेचाळीसावी घटनादुरुस्ती) अधिनियम, 1978 मधील कलम 26 लागू होण्यापूर्वी तत्काळ अस्तित्वात असलेले संबंधित अधिकार, विशेषाधिकार आणि उन्मुक्ती लागू राहतील.

(4) खंड (1), (2) आणि (3) मधील तरतुदी संविधानामुळे राज्याच्या विधिमंडळाच्या सभागृहात किंवा त्याच्या कोणत्याही समितीत बोलण्याचा आणि अन्य प्रकारे कार्यवाहीत सहभागी होण्याचा अधिकार असलेल्या व्यक्तींनाही त्या विधिमंडळाच्या सदस्यांप्रमाणे लागू होतील.`
    },
    simpleExplanation: {
      en: `Article 194 deals with the powers, privileges and immunities of State Legislatures, including Legislative Assemblies and Legislative Councils, and their members and committees.

Clause (1) provides for freedom of speech in the Legislature of every State, subject to the Constitution and the rules and standing orders regulating legislative procedure.

Clause (2) provides constitutional protection to members of State Legislatures for anything said or any vote given by them in the Legislature or in a committee thereof. It also provides protection relating to authorised publication of legislative proceedings.

Clause (3) deals with other powers, privileges and immunities of State Legislative Houses, their members and committees. These may be defined by the State Legislature by law.

Clause (4) extends the relevant protections to persons who have a constitutional right to speak in and participate in proceedings of a State Legislature or its committees.

Article 194 is therefore the principal constitutional provision dealing with State Legislative privileges. It corresponds broadly to Article 105, which deals with Parliament.

Legislative privileges exist to enable State Legislatures and their members to perform their constitutional and legislative functions effectively. These privileges are part of the constitutional framework and should not automatically be understood as an unlimited immunity from judicial review or other constitutional limitations.

Article 194 can become particularly important when questions arise concerning legislative speech, breach of privilege, publication of legislative proceedings, or the relationship between legislative privileges and other constitutional rights.

Therefore, Article 194 provides the constitutional framework for freedom of speech within State Legislatures and for their powers, privileges and immunities.`,
      mr: `कलम 194 हे राज्य विधिमंडळ, म्हणजेच विधानसभा आणि विधानपरिषद, तसेच त्यांचे सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे.

खंड (1) नुसार संविधान आणि विधिमंडळाच्या कार्यपद्धतीचे नियमन करणारे नियम व स्थायी आदेश यांच्या अधीन राहून प्रत्येक राज्याच्या विधिमंडळात भाषणस्वातंत्र्य असते.

खंड (2) राज्य विधिमंडळाच्या सदस्यांना महत्त्वाचे घटनात्मक संरक्षण देते. विधिमंडळात किंवा त्याच्या समितीत सदस्याने केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर न्यायालयीन कार्यवाही करता येत नाही. तसेच विधिमंडळाच्या अधिकृत कार्यवाहीच्या प्रकाशनाशी संबंधित काही संरक्षणही या तरतुदीत आहे.

खंड (3) राज्य विधिमंडळाच्या सभागृहांचे, सदस्यांचे आणि समित्यांचे इतर अधिकार, विशेषाधिकार व उन्मुक्ती यांच्याशी संबंधित आहे. हे विशेषाधिकार राज्य विधिमंडळ कायद्याद्वारे निश्चित करू शकते.

खंड (4) संविधानामुळे राज्य विधिमंडळाच्या सभागृहात किंवा समितीत बोलण्याचा व कार्यवाहीत सहभागी होण्याचा अधिकार असलेल्या व्यक्तींनाही संबंधित संरक्षण लागू करते.

कलम 194 हे राज्य विधिमंडळाच्या विशेषाधिकारांशी संबंधित प्रमुख घटनात्मक तरतूद आहे. याची तुलना संसदेसाठी असलेल्या कलम 105 शी करता येते.

विधिमंडळाचे विशेषाधिकार राज्य विधिमंडळ आणि त्याचे सदस्य आपली घटनात्मक व विधिमंडळाशी संबंधित कामे प्रभावीपणे पार पाडू शकतील यासाठी आहेत. हे विशेषाधिकार घटनात्मक चौकटीचा भाग आहेत आणि त्यांचा अर्थ न्यायालयीन पुनरावलोकन किंवा इतर घटनात्मक मर्यादांपासून अमर्यादित सूट असा होत नाही.

विधिमंडळातील भाषण, विशेषाधिकारभंग, विधिमंडळाच्या कार्यवाहीचे प्रकाशन किंवा विधिमंडळाच्या विशेषाधिकारांचा इतर घटनात्मक अधिकारांशी संबंध यांसारखे प्रश्न उपस्थित झाल्यास कलम 194 महत्त्वाचे ठरते.

म्हणून कलम 194 राज्य विधिमंडळातील भाषणस्वातंत्र्य तसेच राज्य विधिमंडळाचे अधिकार, विशेषाधिकार आणि उन्मुक्ती यांना घटनात्मक आधार देते.`
    },
    verySimple: {
      en: "Article 194 gives State Legislatures and their members certain powers, privileges and immunities. It also protects freedom of speech in State Legislatures, subject to the Constitution and legislative rules.",
      mr: "कलम 194 राज्य विधिमंडळ आणि त्याच्या सदस्यांना काही अधिकार, विशेषाधिकार व उन्मुक्ती देते. तसेच संविधान आणि विधिमंडळाच्या नियमांच्या अधीन राहून राज्य विधिमंडळात भाषणस्वातंत्र्याचे संरक्षण करते."
    },
    example: {
      en: `Suppose a Member of a State Legislative Assembly makes a statement or casts a vote during legislative proceedings. Article 194(2) provides constitutional protection in respect of that speech or vote.

For example, during a legislative debate, a member may express a view on a government policy. The constitutional protection under Article 194 applies to the member's speech and vote within the legislative proceedings, subject to the constitutional framework.

Article 194 also becomes relevant when a question arises about whether an action amounts to a breach of legislative privilege. The specific issue must be examined in the context of the Constitution, applicable law and the relevant legislative proceedings.

Thus, Article 194 provides the constitutional foundation for State Legislative privileges while supporting the effective functioning of State Legislatures.`,
      mr: `समजा एखादा आमदार विधानसभेच्या कामकाजादरम्यान एखादे वक्तव्य करतो किंवा एखाद्या प्रस्तावावर मतदान करतो. कलम 194(2) त्या वक्तव्याबद्दल किंवा मतदानाबद्दल घटनात्मक संरक्षण देते.

उदाहरणार्थ, विधिमंडळातील चर्चेदरम्यान एखादा आमदार सरकारी धोरणाबद्दल आपले मत मांडू शकतो. विधिमंडळाच्या कार्यवाहीदरम्यान केलेल्या अशा वक्तव्याला आणि मतदानाला कलम 194 अंतर्गत घटनात्मक संरक्षण मिळते.

एखाद्या कृतीमुळे विधिमंडळाच्या विशेषाधिकाराचा भंग झाला आहे का, असा प्रश्न निर्माण झाल्यासही कलम 194 महत्त्वाचे ठरते. मात्र प्रत्येक प्रकरणाचा निर्णय संविधान, लागू कायदे आणि संबंधित विधिमंडळाच्या कार्यवाहीच्या संदर्भात घ्यावा लागतो.

म्हणून कलम 194 हे राज्य विधिमंडळाच्या विशेषाधिकारांना घटनात्मक आधार देते आणि राज्य विधिमंडळाचे प्रभावी कामकाज सुनिश्चित करण्यास मदत करते.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 194 of the Indian Constitution?",
          content: "Article 194 deals with the powers, privileges and immunities of State Legislatures, their members and committees. It also provides for freedom of speech in State Legislatures."
        },
        {
          heading: "What are Legislative Privileges under Article 194?",
          content: "Legislative privileges are constitutional powers, protections and immunities available to State Legislatures and their members to enable them to perform their legislative and constitutional functions effectively."
        },
        {
          heading: "What does Article 194(1) provide?",
          content: "Article 194(1) provides for freedom of speech in the Legislature of every State, subject to the Constitution and the rules and standing orders regulating legislative procedure."
        },
        {
          heading: "What does Article 194(2) provide?",
          content: "Article 194(2) provides protection from court proceedings for members of State Legislatures in respect of anything said or any vote given by them in the Legislature or its committees, subject to the constitutional provision."
        },
        {
          heading: "What is the difference between Article 105 and Article 194?",
          content: "Article 105 deals with parliamentary privileges and immunities, while Article 194 deals with the corresponding powers, privileges and immunities of State Legislatures and their members."
        },
        {
          heading: "Why are legislative privileges important?",
          content: "Legislative privileges help State Legislatures and their members perform their constitutional and legislative functions effectively and protect legislative proceedings from improper interference."
        },
        {
          heading: "What is breach of privilege?",
          content: "A breach of privilege generally refers to conduct that violates or interferes with a privilege of a House, its members or its committees. The specific issue depends on the applicable constitutional framework, law and legislative rules."
        },
        {
          heading: "Article 194 and Freedom of Speech",
          content: "Article 194 provides for freedom of speech in State Legislatures, while Article 19(1)(a) protects freedom of speech and expression for citizens. The two provisions operate in different constitutional contexts."
        },
        {
          heading: "Article 194 and the Supreme Court",
          content: "Questions concerning the scope and limits of legislative privileges under Article 194 can involve constitutional interpretation and the relationship between legislative privileges, fundamental rights and judicial review."
        },
        {
          heading: "Article 194 in simple words",
          content: "In simple terms, Article 194 provides State Legislatures and their members with constitutional protections and privileges needed to perform legislative functions effectively, including freedom of speech in the Legislature."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील कलम 194 म्हणजे काय?",
          content: "कलम 194 हे राज्य विधिमंडळ, त्याचे सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे. तसेच राज्य विधिमंडळात भाषणस्वातंत्र्याची तरतूद करते."
        },
        {
          heading: "कलम 194 अंतर्गत विधिमंडळाचे विशेषाधिकार म्हणजे काय?",
          content: "विधिमंडळाचे विशेषाधिकार म्हणजे राज्य विधिमंडळ आणि त्याच्या सदस्यांना घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडण्यासाठी मिळणारे अधिकार, संरक्षण आणि उन्मुक्ती."
        },
        {
          heading: "कलम 194(1) मध्ये काय आहे?",
          content: "कलम 194(1) नुसार संविधान आणि विधिमंडळाच्या कार्यपद्धतीचे नियमन करणारे नियम यांच्या अधीन राहून प्रत्येक राज्याच्या विधिमंडळात भाषणस्वातंत्र्य आहे."
        },
        {
          heading: "कलम 194(2) मध्ये काय आहे?",
          content: "कलम 194(2) नुसार राज्य विधिमंडळाच्या सदस्याने विधिमंडळात किंवा त्याच्या समितीत केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर न्यायालयीन कार्यवाही करता येत नाही."
        },
        {
          heading: "कलम 105 आणि कलम 194 मध्ये काय फरक आहे?",
          content: "कलम 105 संसद आणि तिच्या सदस्यांच्या विशेषाधिकारांशी संबंधित आहे, तर कलम 194 राज्य विधिमंडळ आणि त्याच्या सदस्यांच्या अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे."
        },
        {
          heading: "विधिमंडळाचे विशेषाधिकार महत्त्वाचे का आहेत?",
          content: "विधिमंडळाचे विशेषाधिकार राज्य विधिमंडळ आणि त्याचे सदस्य घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडू शकतील आणि कार्यवाहीत अनुचित हस्तक्षेप होऊ नये यासाठी महत्त्वाचे आहेत."
        },
        {
          heading: "विशेषाधिकारभंग म्हणजे काय?",
          content: "विधिमंडळाच्या सभागृहाचा, त्याच्या सदस्यांचा किंवा समित्यांचा एखादा विशेषाधिकार भंग करणे किंवा त्याच्या कार्यात अडथळा आणणे याला सामान्यतः विशेषाधिकारभंगाच्या संदर्भात पाहिले जाते. संबंधित प्रकरणाचा निर्णय संविधान, कायदा आणि विधिमंडळाच्या नियमांच्या चौकटीत केला जातो."
        },
        {
          heading: "कलम 194 आणि भाषणस्वातंत्र्य",
          content: "कलम 194 राज्य विधिमंडळातील भाषणस्वातंत्र्याशी संबंधित आहे, तर कलम 19(1)(अ) नागरिकांच्या भाषण आणि अभिव्यक्ती स्वातंत्र्याचे संरक्षण करते. दोन्ही तरतुदींचा घटनात्मक संदर्भ वेगळा आहे."
        },
        {
          heading: "कलम 194 आणि सर्वोच्च न्यायालय",
          content: "कलम 194 अंतर्गत विधिमंडळाच्या विशेषाधिकारांची व्याप्ती आणि मर्यादा याबाबतचे प्रश्न घटनात्मक अर्थ लावण्याशी संबंधित असू शकतात. अशा प्रश्नांमध्ये विशेषाधिकार, मूलभूत अधिकार आणि न्यायालयीन पुनरावलोकन यांचा संबंध महत्त्वाचा ठरतो."
        },
        {
          heading: "सोप्या भाषेत कलम 194",
          content: "सोप्या भाषेत सांगायचे झाल्यास, राज्य विधिमंडळाचे कामकाज प्रभावीपणे चालावे यासाठी त्याला आणि त्याच्या सदस्यांना काही घटनात्मक अधिकार, विशेषाधिकार व संरक्षण कलम 194 अंतर्गत मिळते."
        }
      ]
    },
    keywords: [
      "Article 194",
      "Article 194 Indian Constitution",
      "Legislative Privileges",
      "Legislative Privileges in India",
      "State Legislature Privileges",
      "MLA Privileges",
      "Article 194 explained",
      "Article 194 in Marathi",
      "Breach of Privilege",
      "State Legislative Assembly Privileges",
      "कलम 194",
      "कलम 194 भारतीय संविधान",
      "विधिमंडळाचे विशेषाधिकार",
      "आमदारांचे विशेषाधिकार",
      "विधानसभेचे विशेषाधिकार",
      "विशेषाधिकारभंग"
    ],
    relatedIds: ["19", "21", "105", "32"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-05"
  },
  {
    id: "23",
    articleNumber: "Article 23",
    title: {
      en: "Prohibition of Traffic in Human Beings and Forced Labour",
      mr: "मानवी तस्करी आणि सक्तीच्या मजुरीस प्रतिबंध"
    },
    categoryKey: "right-against-exploitation",
    officialText: {
      en: `Prohibition of traffic in human beings and forced labour.—(1) Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.

(2) Nothing in this article shall prevent the State from imposing compulsory service for public purposes, and in imposing such service the State shall not make any discrimination on grounds only of religion, race, caste or class or any of them.`,
      mr: `मानवी तस्करी आणि सक्तीच्या मजुरीस प्रतिबंध.—(१) मानवी तस्करी, बेगार आणि त्याचप्रमाणे सक्तीच्या मजुरीचे इतर प्रकार यांना प्रतिबंध करण्यात आला आहे आणि या तरतुदीचे उल्लंघन करणे कायद्यानुसार शिक्षापात्र अपराध असेल.

(२) या अनुच्छेदातील कोणतीही गोष्ट राज्याला सार्वजनिक उद्देशासाठी सक्तीची सेवा लादण्यापासून प्रतिबंधित करणार नाही. अशी सेवा लादताना राज्य केवळ धर्म, वंश, जात किंवा वर्ग यांपैकी कोणत्याही आधारावर भेदभाव करणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 23 is a Fundamental Right under the Right against Exploitation. It protects people from human trafficking, begar and other similar forms of forced labour.

Article 23(1) prohibits traffic in human beings and begar and other similar forms of forced labour. Any violation of this constitutional prohibition is an offence punishable according to law.

Human trafficking refers to the unlawful trade or exploitation of persons. Forced labour refers to situations where a person is made to work against their will through force, coercion or other forms of compulsion.

The Constitution also protects people against begar, which refers to forced labour where a person is required to work without proper payment or against their will.

Article 23(2) provides a specific exception. The State may impose compulsory service for public purposes. However, while imposing such service, the State cannot discriminate solely on the grounds of religion, race, caste or class.

Therefore, Article 23 aims to protect human dignity and prevent exploitation while recognising a limited constitutional provision for compulsory public service without discrimination on the specified grounds.`,
      mr: `अनुच्छेद २३ हा शोषणाविरुद्धच्या अधिकाराचा भाग आहे. तो मानवी तस्करी, बेगार आणि त्याचप्रमाणे सक्तीच्या मजुरीच्या इतर प्रकारांपासून व्यक्तींचे संरक्षण करतो.

अनुच्छेद २३(१) मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या इतर समान प्रकारांना प्रतिबंध करतो. या घटनात्मक तरतुदीचे उल्लंघन करणे कायद्यानुसार शिक्षापात्र अपराध आहे.

मानवी तस्करी म्हणजे व्यक्तींची बेकायदेशीर खरेदी-विक्री किंवा शोषण करण्याच्या उद्देशाने त्यांची वाहतूक किंवा ताबा घेणे. सक्तीची मजुरी म्हणजे एखाद्या व्यक्तीच्या इच्छेविरुद्ध दबाव, जबरदस्ती किंवा इतर प्रकारच्या सक्तीने काम करून घेणे.

अनुच्छेद २३ बेगारपासूनही संरक्षण देतो. बेगार म्हणजे एखाद्या व्यक्तीकडून त्याच्या इच्छेविरुद्ध किंवा योग्य मोबदल्याशिवाय सक्तीने काम करून घेणे.

अनुच्छेद २३(२) मध्ये एक विशिष्ट तरतूद आहे. राज्य सार्वजनिक उद्देशासाठी सक्तीची सेवा लादू शकते. मात्र अशी सेवा लादताना राज्य केवळ धर्म, वंश, जात किंवा वर्ग या आधारांवर भेदभाव करू शकत नाही.

म्हणून अनुच्छेद २३ मानवी प्रतिष्ठेचे संरक्षण करण्यासाठी आणि व्यक्तींचे शोषण रोखण्यासाठी महत्त्वाची घटनात्मक तरतूद आहे.`
    },
    verySimple: {
      en: "Article 23 prohibits human trafficking, begar and other similar forms of forced labour, while allowing compulsory public service without discrimination on specified grounds.",
      mr: "अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या इतर समान प्रकारांना प्रतिबंध करतो. तसेच सार्वजनिक उद्देशासाठी सक्तीची सेवा लादताना विशिष्ट आधारांवर भेदभाव करण्यास मनाई करतो."
    },
    example: {
      en: `Suppose a person is forced to work against their will and is not allowed to leave the work because of threats, coercion or other forms of compulsion. Such forced labour can fall within the protection provided by Article 23.

Another example is human trafficking. If people are illegally recruited, transported or exploited for the purpose of forced labour or other exploitation, Article 23 provides constitutional protection against such practices.

Article 23(2) also recognises that the State may require compulsory service for a public purpose. For example, a law may provide for certain compulsory public service. However, the State cannot impose such service by discriminating solely on the grounds of religion, race, caste or class.

These examples show how Article 23 protects individuals from exploitation while recognising the limited constitutional provision for compulsory public service.`,
      mr: `समजा एखाद्या व्यक्तीला धमकी, दबाव किंवा इतर प्रकारच्या जबरदस्तीने त्याच्या इच्छेविरुद्ध काम करण्यास भाग पाडले जाते आणि त्याला ते काम सोडण्याची मुभा दिली जात नाही. अशा प्रकारची सक्तीची मजुरी अनुच्छेद २३ अंतर्गत संरक्षणाच्या कक्षेत येऊ शकते.

दुसरे उदाहरण मानवी तस्करीचे आहे. एखाद्या व्यक्तीची सक्तीची मजुरी किंवा इतर शोषण करण्याच्या उद्देशाने बेकायदेशीररीत्या भरती, वाहतूक किंवा शोषण केले जात असल्यास, अनुच्छेद २३ अशा प्रथांविरुद्ध घटनात्मक संरक्षण देतो.

अनुच्छेद २३(२) नुसार राज्य सार्वजनिक उद्देशासाठी सक्तीची सेवा लादू शकते. उदाहरणार्थ, कायद्यानुसार काही विशिष्ट सार्वजनिक सेवा सक्तीची केली जाऊ शकते. मात्र अशी सेवा लादताना राज्य केवळ धर्म, वंश, जात किंवा वर्ग या आधारांवर भेदभाव करू शकत नाही.

या उदाहरणांवरून स्पष्ट होते की अनुच्छेद २३ व्यक्तींचे शोषणापासून संरक्षण करतो आणि त्याच वेळी सार्वजनिक उद्देशासाठी सक्तीच्या सेवेची मर्यादित घटनात्मक तरतूद मान्य करतो.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 23 of the Indian Constitution?",
          content: `Article 23 is a Fundamental Right under the Right against Exploitation. It prohibits traffic in human beings, begar and other similar forms of forced labour.`
        },
        {
          heading: "What does Article 23 say?",
          content: `Article 23 prohibits human trafficking, begar and other similar forms of forced labour. It also permits the State to impose compulsory service for public purposes, provided that there is no discrimination solely on the specified grounds.`
        },
        {
          heading: "Which Fundamental Right includes Article 23?",
          content: `Article 23 is part of the Right against Exploitation under Part III of the Constitution. It is followed by Article 24, which deals with the employment of children in factories, mines and other hazardous employment.`
        },
        {
          heading: "What is prohibited under Article 23?",
          content: `Article 23 prohibits traffic in human beings, begar and other similar forms of forced labour.`
        },
        {
          heading: "What is human trafficking?",
          content: `Human trafficking involves the unlawful recruitment, transportation, transfer or exploitation of people. Article 23 provides constitutional protection against traffic in human beings.`
        },
        {
          heading: "What is forced labour?",
          content: `Forced labour refers to work that a person is compelled to perform against their will through force, coercion or other forms of compulsion.`
        },
        {
          heading: "What is Begar under Article 23?",
          content: `Begar refers to forced labour where a person is compelled to work without proper payment or against their will. Article 23 expressly prohibits begar.`
        },
        {
          heading: "Can the State impose compulsory service?",
          content: `Article 23(2) permits the State to impose compulsory service for public purposes. However, while imposing such service, the State cannot discriminate solely on the grounds of religion, race, caste or class.`
        },
        {
          heading: "Why is Article 23 important?",
          content: `Article 23 protects individuals from exploitation through human trafficking, begar and forced labour. It is an important constitutional protection of human dignity and freedom from exploitation.`
        },
        {
          heading: "What is Article 23 in simple words?",
          content: `In simple words, Article 23 says that no person can be subjected to human trafficking, begar or similar forms of forced labour. The State may impose compulsory public service in accordance with law, but it cannot discriminate solely on the specified grounds.`
        },
        {
          heading: "What is the difference between Article 23 and Article 24?",
          content: `Article 23 deals with human trafficking, begar and forced labour. Article 24 specifically prohibits the employment of children below fourteen years in factories, mines or other hazardous employment.`
        },
        {
          heading: "Article 23 and human dignity",
          content: `Article 23 helps protect human dignity by prohibiting practices that exploit people through trafficking and forced labour. It forms part of the Fundamental Rights guaranteed under Part III of the Constitution.`
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद २३ म्हणजे काय?",
          content: `अनुच्छेद २३ हा शोषणाविरुद्धच्या अधिकाराचा भाग आहे. तो मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या इतर समान प्रकारांना प्रतिबंध करतो.`
        },
        {
          heading: "अनुच्छेद २३ मध्ये काय सांगितले आहे?",
          content: `अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या इतर समान प्रकारांना प्रतिबंध करतो. तसेच सार्वजनिक उद्देशासाठी सक्तीची सेवा लादण्याची राज्याला परवानगी देतो, मात्र विशिष्ट आधारांवर भेदभाव करण्यास मनाई करतो.`
        },
        {
          heading: "अनुच्छेद २३ कोणत्या मूलभूत अधिकाराचा भाग आहे?",
          content: `अनुच्छेद २३ हा संविधानाच्या भाग III मधील शोषणाविरुद्धच्या अधिकाराचा भाग आहे. त्यानंतर अनुच्छेद २४ येतो, जो कारखाने, खाणी आणि इतर धोकादायक रोजगारामध्ये बालकांच्या रोजगारासंबंधी आहे.`
        },
        {
          heading: "अनुच्छेद २३ अंतर्गत कोणत्या गोष्टींना प्रतिबंध आहे?",
          content: `अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या इतर समान प्रकारांना प्रतिबंध करतो.`
        },
        {
          heading: "मानवी तस्करी म्हणजे काय?",
          content: `मानवी तस्करीमध्ये व्यक्तींची बेकायदेशीर भरती, वाहतूक, हस्तांतरण किंवा शोषण यांचा समावेश होऊ शकतो. अनुच्छेद २३ मानवी तस्करीविरुद्ध घटनात्मक संरक्षण देतो.`
        },
        {
          heading: "सक्तीची मजुरी म्हणजे काय?",
          content: `सक्तीची मजुरी म्हणजे एखाद्या व्यक्तीला त्याच्या इच्छेविरुद्ध दबाव, जबरदस्ती किंवा इतर प्रकारच्या सक्तीने काम करण्यास भाग पाडणे.`
        },
        {
          heading: "अनुच्छेद २३ अंतर्गत बेगार म्हणजे काय?",
          content: `बेगार म्हणजे एखाद्या व्यक्तीकडून त्याच्या इच्छेविरुद्ध किंवा योग्य मोबदल्याशिवाय सक्तीने काम करून घेणे. अनुच्छेद २३ मध्ये बेगारला स्पष्टपणे प्रतिबंध करण्यात आला आहे.`
        },
        {
          heading: "राज्य सक्तीची सेवा लादू शकते का?",
          content: `अनुच्छेद २३(२) नुसार राज्य सार्वजनिक उद्देशासाठी सक्तीची सेवा लादू शकते. मात्र अशी सेवा लादताना केवळ धर्म, वंश, जात किंवा वर्ग या आधारांवर भेदभाव करता येत नाही.`
        },
        {
          heading: "अनुच्छेद २३ महत्त्वाचा का आहे?",
          content: `अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीद्वारे होणाऱ्या शोषणापासून व्यक्तींचे संरक्षण करतो. मानवी प्रतिष्ठा आणि शोषणापासून स्वातंत्र्याचे संरक्षण करण्यासाठी ही महत्त्वाची घटनात्मक तरतूद आहे.`
        },
        {
          heading: "अनुच्छेद २३ सोप्या भाषेत",
          content: `सोप्या भाषेत, अनुच्छेद २३ सांगतो की कोणत्याही व्यक्तीची मानवी तस्करी करता येणार नाही किंवा तिला बेगार किंवा त्यासारख्या सक्तीच्या मजुरीस भाग पाडता येणार नाही. कायद्यानुसार सार्वजनिक उद्देशासाठी सक्तीची सेवा लादता येऊ शकते, मात्र विशिष्ट आधारांवर भेदभाव करता येत नाही.`
        },
        {
          heading: "अनुच्छेद २३ आणि अनुच्छेद २४ मध्ये काय फरक आहे?",
          content: `अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीशी संबंधित आहे. अनुच्छेद २४ विशेषतः चौदा वर्षांखालील बालकांना कारखाने, खाणी किंवा इतर धोकादायक रोजगारामध्ये कामावर ठेवण्यास प्रतिबंध करतो.`
        },
        {
          heading: "अनुच्छेद २३ आणि मानवी प्रतिष्ठा",
          content: `अनुच्छेद २३ मानवी तस्करी आणि सक्तीच्या मजुरीद्वारे होणाऱ्या शोषणास प्रतिबंध करून मानवी प्रतिष्ठेचे संरक्षण करण्यास मदत करतो. हा संविधानाच्या भाग III मधील मूलभूत अधिकारांचा एक भाग आहे.`
        }
      ]
    },
    keywords: [
      "Article 23",
      "Article 23 of Indian Constitution",
      "Article 23 forced labour",
      "Article 23 human trafficking",
      "Article 23 begar",
      "Right against Exploitation",
      "Article 23(1)",
      "Article 23(2)",
      "forced labour in India",
      "human trafficking in India",
      "prohibition of forced labour",
      "कलम 23",
      "भारतीय संविधान कलम 23",
      "कलम 23 मानवी तस्करी",
      "कलम 23 सक्तीची मजुरी",
      "शोषणाविरुद्धचा अधिकार",
      "मानवी तस्करी",
      "सक्तीची मजुरी",
      "बेगार"
    ],
    relatedIds: ["21", "22", "24"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-08"
  },
  {
    id: "20",
    articleNumber: "Article 20",
    title: {
      en: "Protection in Respect of Conviction for Offences",
      mr: "गुन्ह्यांबाबत दोषसिद्धीच्या संदर्भातील संरक्षण"
    },
    categoryKey: "fundamental-rights",
    officialText: {
      en: `Protection in respect of conviction for offences.—(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence.

(2) No person shall be prosecuted and punished for the same offence more than once.

(3) No person accused of any offence shall be compelled to be a witness against himself.`,
      mr: `गुन्ह्यांबाबत दोषसिद्धीच्या संदर्भातील संरक्षण.—(१) एखादी कृती गुन्हा म्हणून आरोपित करण्यात आली त्या वेळी अंमलात असलेल्या कायद्याचे उल्लंघन केल्याशिवाय कोणत्याही व्यक्तीला त्या गुन्ह्याबद्दल दोषी ठरवले जाणार नाही; तसेच गुन्हा घडला त्या वेळी लागू असलेल्या कायद्यानुसार देता आली असती त्यापेक्षा अधिक शिक्षा दिली जाणार नाही.

(२) एकाच गुन्ह्यासाठी कोणत्याही व्यक्तीवर एकापेक्षा अधिक वेळा खटला चालवून शिक्षा केली जाणार नाही.

(३) कोणत्याही गुन्ह्याचा आरोप असलेल्या व्यक्तीला स्वतःविरुद्ध साक्षीदार होण्यास भाग पाडले जाणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 20 provides three important protections in criminal law.

First, a person cannot be convicted for an act that was not an offence under the law in force when it was committed, nor given a greater penalty retrospectively.

Second, a person cannot be prosecuted and punished more than once for the same offence.

Third, an accused person cannot be compelled to be a witness against themselves.

These protections help prevent arbitrary criminal punishment and safeguard fairness in criminal proceedings.`,
      mr: `अनुच्छेद २० गुन्हेगारी कायद्याच्या संदर्भात तीन महत्त्वाची संरक्षणे देतो.

पहिले, एखादी कृती घडली त्या वेळी ती कायद्यानुसार गुन्हा नसेल, तर नंतरच्या कायद्याच्या आधारे त्या कृतीसाठी सामान्यतः दोषी ठरवता येत नाही. तसेच नंतरच्या कायद्याने अधिक कठोर शिक्षा मागील तारखेपासून लागू करता येत नाही.

दुसरे, एकाच गुन्ह्यासाठी पुन्हा खटला चालवून शिक्षा करण्यास प्रतिबंध आहे.

तिसरे, आरोपी व्यक्तीला स्वतःविरुद्ध साक्ष देण्यास भाग पाडता येत नाही.

ही संरक्षणे मनमानी गुन्हेगारी शिक्षेला प्रतिबंध करण्यासाठी आणि न्याय्य प्रक्रियेचे रक्षण करण्यासाठी महत्त्वाची आहेत.`
    },
    verySimple: {
      en: "Article 20 protects people from retrospective criminal punishment, being punished twice for the same offence, and being forced to testify against themselves.",
      mr: "अनुच्छेद २० मागील तारखेपासून गुन्हेगारी शिक्षा देणे, एकाच गुन्ह्यासाठी पुन्हा शिक्षा करणे आणि स्वतःविरुद्ध जबरदस्तीने साक्ष द्यायला लावणे यांपासून संरक्षण देतो."
    },
    example: {
      en: `Suppose a person performs an act that is not a criminal offence under the law in force at that time. A later law generally cannot be used to convict that person for the earlier act.

Article 20 also protects against prosecution and punishment more than once for the same offence, and against being compelled to testify against oneself.`,
      mr: `समजा, एखाद्या व्यक्तीने कृती केली त्या वेळी लागू असलेल्या कायद्यानुसार ती कृती गुन्हा नव्हती. नंतर तो गुन्हा ठरवणारा कायदा केला, तर त्या आधीच्या कृतीसाठी सामान्यतः त्या व्यक्तीला दोषी ठरवता येत नाही.

त्याचप्रमाणे, एकाच गुन्ह्यासाठी पुन्हा खटला चालवून शिक्षा करणे किंवा आरोपीला स्वतःविरुद्ध साक्ष देण्यास भाग पाडणे यांपासूनही अनुच्छेद २० संरक्षण देतो.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 20 of the Indian Constitution?",
          content: "Article 20 provides protection in respect of conviction for offences. It protects against retrospective criminal punishment, double jeopardy and compelled self-incrimination."
        },
        {
          heading: "What are the three protections under Article 20?",
          content: "Article 20 protects against retrospective criminal laws imposing greater punishment, prosecution and punishment more than once for the same offence, and being compelled to testify against oneself."
        },
        {
          heading: "What is double jeopardy under Article 20?",
          content: "Article 20(2) states that no person shall be prosecuted and punished for the same offence more than once."
        },
        {
          heading: "What is protection against self-incrimination?",
          content: "Article 20(3) states that a person accused of an offence cannot be compelled to be a witness against themselves."
        },
        {
          heading: "Why is Article 20 important?",
          content: "Article 20 safeguards individuals against specified forms of unfair criminal punishment and helps protect fairness in criminal proceedings."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद २० म्हणजे काय?",
          content: "अनुच्छेद २० गुन्ह्यांबाबत दोषसिद्धीच्या संदर्भात संरक्षण देतो. मागील तारखेपासून कठोर गुन्हेगारी शिक्षा, एकाच गुन्ह्यासाठी पुन्हा शिक्षा आणि स्वतःविरुद्ध साक्ष देण्याची सक्ती यांपासून तो संरक्षण करतो."
        },
        {
          heading: "अनुच्छेद २० अंतर्गत कोणती तीन संरक्षणे मिळतात?",
          content: "अनुच्छेद २० मागील तारखेपासून अधिक कठोर शिक्षा देणे, एकाच गुन्ह्यासाठी पुन्हा खटला चालवून शिक्षा करणे आणि स्वतःविरुद्ध साक्ष देण्यास भाग पाडणे यांपासून संरक्षण देतो."
        },
        {
          heading: "अनुच्छेद २० अंतर्गत दुहेरी शिक्षेपासून संरक्षण म्हणजे काय?",
          content: "अनुच्छेद २०(२) नुसार, एकाच गुन्ह्यासाठी कोणत्याही व्यक्तीवर एकापेक्षा अधिक वेळा खटला चालवून शिक्षा केली जाऊ शकत नाही."
        },
        {
          heading: "स्वतःविरुद्ध साक्ष देण्यापासून संरक्षण म्हणजे काय?",
          content: "अनुच्छेद २०(३) नुसार, गुन्ह्याचा आरोप असलेल्या व्यक्तीला स्वतःविरुद्ध साक्षीदार होण्यास भाग पाडता येत नाही."
        },
        {
          heading: "अनुच्छेद २० महत्त्वाचा का आहे?",
          content: "अनुच्छेद २० अन्यायकारक गुन्हेगारी शिक्षेच्या काही प्रकारांपासून संरक्षण देतो आणि गुन्हेगारी न्यायप्रक्रियेतील न्याय्यतेचे रक्षण करण्यास मदत करतो."
        }
      ]
    },
    keywords: [
      "Article 20",
      "Article 20 of Indian Constitution",
      "Protection in Respect of Conviction for Offences",
      "Double Jeopardy",
      "Self Incrimination",
      "Fundamental Rights",
      "कलम 20",
      "अनुच्छेद २०",
      "दुहेरी शिक्षा",
      "स्वतःविरुद्ध साक्ष",
      "मूलभूत अधिकार"
    ],
    relatedIds: ["19", "21", "22", "32"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-19"
  },
  {
    id: "24",
    articleNumber: "Article 24",
    title: {
      en: "Prohibition of Employment of Children in Factories, etc.",
      mr: "कारखाने इत्यादींमध्ये बालकांच्या रोजगारावर बंदी"
    },
    categoryKey: "right-against-exploitation",
    officialText: {
      en: `No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.`,
      mr: `चौदा वर्षांखालील कोणत्याही बालकाला कोणत्याही कारखान्यात किंवा खाणीत काम करण्यासाठी किंवा इतर कोणत्याही धोकादायक रोजगारात काम करण्यासाठी नियुक्त केले जाणार नाही.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 24 prohibits the employment of children below fourteen years of age in factories, mines and other hazardous employment.

It is part of the Right against Exploitation under Part III of the Constitution. This provision aims to protect children from dangerous working conditions that may threaten their health, safety and development.

Article 24 should be read alongside applicable child labour laws, which may provide additional protections and restrictions.`,
      mr: `अनुच्छेद २४ नुसार चौदा वर्षांखालील बालकांना कारखाने, खाणी किंवा इतर धोकादायक रोजगारामध्ये कामावर ठेवण्यास प्रतिबंध आहे.

हा अनुच्छेद संविधानाच्या भाग III मधील शोषणाविरुद्धच्या अधिकाराचा भाग आहे. धोकादायक कामामुळे बालकांच्या आरोग्याला, सुरक्षिततेला आणि विकासाला धोका निर्माण होऊ नये, हा या तरतुदीचा उद्देश आहे.

अनुच्छेद २४ सोबत लागू असलेले बालमजुरीविषयक कायदेही लक्षात घेणे आवश्यक आहे. त्या कायद्यांमध्ये अतिरिक्त संरक्षणे आणि निर्बंध असू शकतात.`
    },
    verySimple: {
      en: "Children below fourteen years cannot be employed in factories, mines or other hazardous work under Article 24.",
      mr: "अनुच्छेद २४ नुसार चौदा वर्षांखालील बालकांना कारखाने, खाणी किंवा इतर धोकादायक कामांमध्ये रोजगार देता येत नाही."
    },
    example: {
      en: `Suppose an employer wants to hire a thirteen-year-old child to work in a mine. Article 24 prohibits employing a child below fourteen years of age in a mine.

The provision is intended to protect children from hazardous working conditions and exploitation.`,
      mr: `समजा, एखाद्या मालकाला तेरा वर्षांच्या बालकाला खाणीत कामावर ठेवायचे आहे. अनुच्छेद २४ नुसार चौदा वर्षांखालील बालकाला खाणीत कामावर ठेवण्यास प्रतिबंध आहे.

धोकादायक कामाच्या परिस्थितीपासून आणि शोषणापासून बालकांचे संरक्षण करणे हा या तरतुदीचा उद्देश आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 24 of the Indian Constitution?",
          content: "Article 24 prohibits the employment of children below fourteen years of age in factories, mines and other hazardous employment."
        },
        {
          heading: "What does Article 24 prohibit?",
          content: "Article 24 prohibits employing children below fourteen years of age in factories, mines or other hazardous employment."
        },
        {
          heading: "Which Fundamental Right includes Article 24?",
          content: "Article 24 is part of the Right against Exploitation under Part III of the Indian Constitution."
        },
        {
          heading: "Why is Article 24 important?",
          content: "Article 24 provides constitutional protection for children against specified hazardous employment and supports their health, safety and development."
        },
        {
          heading: "What is the difference between Article 23 and Article 24?",
          content: "Article 23 prohibits human trafficking, begar and similar forms of forced labour. Article 24 specifically addresses employment of children below fourteen years in factories, mines and other hazardous employment."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद २४ म्हणजे काय?",
          content: "अनुच्छेद २४ चौदा वर्षांखालील बालकांना कारखाने, खाणी आणि इतर धोकादायक रोजगारामध्ये कामावर ठेवण्यास प्रतिबंध करतो."
        },
        {
          heading: "अनुच्छेद २४ कशाला प्रतिबंध करतो?",
          content: "अनुच्छेद २४ नुसार चौदा वर्षांखालील बालकांना कारखाने, खाणी किंवा इतर धोकादायक रोजगारात कामावर ठेवता येत नाही."
        },
        {
          heading: "अनुच्छेद २४ कोणत्या मूलभूत अधिकाराचा भाग आहे?",
          content: "अनुच्छेद २४ हा भारतीय संविधानाच्या भाग III मधील शोषणाविरुद्धच्या अधिकाराचा भाग आहे."
        },
        {
          heading: "अनुच्छेद २४ महत्त्वाचा का आहे?",
          content: "अनुच्छेद २४ बालकांना विशिष्ट धोकादायक रोजगारापासून घटनात्मक संरक्षण देतो आणि त्यांच्या आरोग्य, सुरक्षितता व विकासाचे रक्षण करण्यास मदत करतो."
        },
        {
          heading: "अनुच्छेद २३ आणि अनुच्छेद २४ मध्ये काय फरक आहे?",
          content: "अनुच्छेद २३ मानवी तस्करी, बेगार आणि सक्तीच्या मजुरीच्या समान प्रकारांना प्रतिबंध करतो. अनुच्छेद २४ चौदा वर्षांखालील बालकांना कारखाने, खाणी आणि इतर धोकादायक रोजगारात कामावर ठेवण्यास प्रतिबंध करतो."
        }
      ]
    },
    keywords: [
      "Article 24",
      "Article 24 of Indian Constitution",
      "Child Labour",
      "Prohibition of Child Employment",
      "Right against Exploitation",
      "कलम 24",
      "अनुच्छेद २४",
      "बालमजुरी",
      "शोषणाविरुद्धचा अधिकार",
      "बालकांचे संरक्षण"
    ],
    relatedIds: ["21", "23", "21A"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-19"
  },
  {
    id: "51A",
    articleNumber: "Article 51A",
    title: {
      en: "Fundamental Duties",
      mr: "मूलभूत कर्तव्ये"
    },
    categoryKey: "fundamental-duties",
    officialText: {
      en: `It shall be the duty of every citizen of India—

(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;

(b) to cherish and follow the noble ideals which inspired our national struggle for freedom;

(c) to uphold and protect the sovereignty, unity and integrity of India;

(d) to defend the country and render national service when called upon to do so;

(e) to promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women;

(f) to value and preserve the rich heritage of our composite culture;

(g) to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures;

(h) to develop the scientific temper, humanism and the spirit of inquiry and reform;

(i) to safeguard public property and to abjure violence;

(j) to strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement;

(k) who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years.`,
      mr: `भारताच्या प्रत्येक नागरिकाचे हे कर्तव्य असेल की—

(अ) संविधानाचे पालन करणे आणि त्याचे आदर्श व संस्था, राष्ट्रध्वज आणि राष्ट्रगीत यांचा आदर करणे;

(आ) आपल्या स्वातंत्र्यलढ्याला प्रेरणा देणाऱ्या उदात्त आदर्शांचे जतन करणे व त्यांचे अनुसरण करणे;

(इ) भारताचे सार्वभौमत्व, एकता आणि अखंडता जपणे व त्यांचे संरक्षण करणे;

(ई) देशाचे संरक्षण करणे आणि आवाहन केले असता राष्ट्रीय सेवा बजावणे;

(उ) धार्मिक, भाषिक, प्रादेशिक किंवा वर्गीय विविधतेच्या पलीकडे जाऊन भारतातील सर्व लोकांमध्ये सलोखा आणि बंधुभावाची भावना वाढवणे; तसेच महिलांच्या प्रतिष्ठेला कमीपणा आणणाऱ्या प्रथांचा त्याग करणे;

(ऊ) आपल्या संमिश्र संस्कृतीच्या समृद्ध वारशाचे मूल्य जाणणे व त्याचे जतन करणे;

(ए) वने, तलाव, नद्या आणि वन्यजीव यांसह नैसर्गिक पर्यावरणाचे संरक्षण व संवर्धन करणे आणि सजीवांबद्दल करुणा बाळगणे;

(ऐ) वैज्ञानिक दृष्टिकोन, मानवतावाद आणि शोध व सुधारणेची भावना विकसित करणे;

(ओ) सार्वजनिक मालमत्तेचे रक्षण करणे आणि हिंसेचा त्याग करणे;

(औ) वैयक्तिक आणि सामूहिक कार्याच्या सर्व क्षेत्रांत उत्कृष्टतेसाठी प्रयत्न करणे, जेणेकरून राष्ट्र सतत उच्च स्तरावरील प्रयत्न आणि यशाकडे वाटचाल करेल;

(अं) पालक किंवा संरक्षक म्हणून सहा ते चौदा वर्षे वयोगटातील आपल्या मुलाला किंवा पाल्याला शिक्षणाच्या संधी उपलब्ध करून देणे.`,
      verified: true
    },
    simpleExplanation: {
      en: `Article 51A lists the Fundamental Duties of citizens of India. These duties encourage citizens to respect the Constitution, protect the country's unity, promote harmony, preserve cultural heritage, protect the environment, develop scientific temper, safeguard public property and support children's education.

Fundamental Duties were added to the Constitution through the 42nd Constitutional Amendment in 1976. Clause (k), relating to providing educational opportunities for children between six and fourteen years, was added by the 86th Constitutional Amendment in 2002.

These duties guide responsible citizenship. Their legal enforceability depends on the relevant constitutional provisions and applicable laws.`,
      mr: `अनुच्छेद ५१A मध्ये भारताच्या नागरिकांची मूलभूत कर्तव्ये नमूद केली आहेत. संविधानाचा आदर करणे, देशाची एकता व अखंडता जपणे, सामाजिक सलोखा वाढवणे, सांस्कृतिक वारशाचे जतन करणे, पर्यावरणाचे संरक्षण करणे, वैज्ञानिक दृष्टिकोन विकसित करणे, सार्वजनिक मालमत्तेचे रक्षण करणे आणि मुलांच्या शिक्षणासाठी संधी उपलब्ध करून देणे यांचा त्यात समावेश होतो.

मूलभूत कर्तव्ये १९७६ मध्ये ४२व्या घटनादुरुस्तीने संविधानात समाविष्ट करण्यात आली. सहा ते चौदा वर्षे वयोगटातील मुलांच्या शिक्षणासंबंधी खंड (k) हा २००२ मधील ८६व्या घटनादुरुस्तीने समाविष्ट करण्यात आला.

ही कर्तव्ये जबाबदार नागरिकत्वासाठी मार्गदर्शन करतात. त्यांची कायदेशीर अंमलबजावणी संबंधित घटनात्मक तरतुदी आणि लागू कायद्यांवर अवलंबून असते.`
    },
    verySimple: {
      en: "Article 51A explains the fundamental duties of Indian citizens, such as respecting the Constitution, protecting the environment, safeguarding public property and supporting children’s education.",
      mr: "अनुच्छेद ५१A भारतीय नागरिकांची मूलभूत कर्तव्ये सांगतो. संविधानाचा आदर करणे, पर्यावरणाचे संरक्षण करणे, सार्वजनिक मालमत्ता जपणे आणि मुलांच्या शिक्षणाला मदत करणे ही त्याची उदाहरणे आहेत."
    },
    example: {
      en: `A citizen who respects the National Flag, avoids damaging public property, helps protect rivers and forests, and promotes harmony is acting consistently with the values reflected in Article 51A.

Parents and guardians also have a fundamental duty under clause (k) to provide opportunities for education to their children or wards between six and fourteen years of age.`,
      mr: `राष्ट्रध्वजाचा आदर करणे, सार्वजनिक मालमत्तेचे नुकसान टाळणे, नद्या व जंगलांचे संरक्षण करणे आणि समाजात सलोखा वाढवणे ही अनुच्छेद ५१A मधील मूल्यांशी सुसंगत वर्तणुकीची उदाहरणे आहेत.

तसेच, खंड (k) नुसार पालक किंवा संरक्षकांचे सहा ते चौदा वर्षे वयोगटातील मुलांना किंवा पाल्यांना शिक्षणाच्या संधी उपलब्ध करून देणे हे मूलभूत कर्तव्य आहे.`
    },
    seoSections: {
      en: [
        {
          heading: "What is Article 51A of the Indian Constitution?",
          content: "Article 51A lists the Fundamental Duties of Indian citizens, including respect for the Constitution, national unity, environmental protection and safeguarding public property."
        },
        {
          heading: "How many Fundamental Duties are listed in Article 51A?",
          content: "Article 51A contains eleven clauses describing the Fundamental Duties of citizens of India."
        },
        {
          heading: "When were Fundamental Duties added to the Constitution?",
          content: "Fundamental Duties were added through the 42nd Constitutional Amendment in 1976. The duty concerning educational opportunities for children aged six to fourteen was added through the 86th Constitutional Amendment in 2002."
        },
        {
          heading: "What are examples of Fundamental Duties?",
          content: "Examples include respecting the Constitution and National Flag, promoting harmony, protecting the environment, safeguarding public property and developing scientific temper."
        },
        {
          heading: "Are Fundamental Duties important?",
          content: "Fundamental Duties encourage responsible citizenship and remind citizens of their responsibilities towards the Constitution, society and the environment."
        }
      ],
      mr: [
        {
          heading: "भारतीय संविधानातील अनुच्छेद ५१A म्हणजे काय?",
          content: "अनुच्छेद ५१A मध्ये भारतीय नागरिकांची मूलभूत कर्तव्ये नमूद केली आहेत. त्यात संविधानाचा आदर, राष्ट्रीय एकता, पर्यावरणाचे संरक्षण आणि सार्वजनिक मालमत्तेचे रक्षण यांचा समावेश होतो."
        },
        {
          heading: "अनुच्छेद ५१A मध्ये किती मूलभूत कर्तव्ये आहेत?",
          content: "अनुच्छेद ५१A मध्ये भारतीय नागरिकांच्या मूलभूत कर्तव्यांशी संबंधित अकरा खंड आहेत."
        },
        {
          heading: "मूलभूत कर्तव्ये संविधानात कधी समाविष्ट झाली?",
          content: "मूलभूत कर्तव्ये १९७६ मध्ये ४२व्या घटनादुरुस्तीने समाविष्ट झाली. सहा ते चौदा वर्षे वयोगटातील मुलांच्या शिक्षणासंबंधी कर्तव्य २००२ मध्ये ८६व्या घटनादुरुस्तीने समाविष्ट झाले."
        },
        {
          heading: "मूलभूत कर्तव्यांची उदाहरणे कोणती?",
          content: "संविधान व राष्ट्रध्वजाचा आदर करणे, सामाजिक सलोखा वाढवणे, पर्यावरणाचे संरक्षण करणे, सार्वजनिक मालमत्ता जपणे आणि वैज्ञानिक दृष्टिकोन विकसित करणे ही मूलभूत कर्तव्यांची उदाहरणे आहेत."
        },
        {
          heading: "मूलभूत कर्तव्ये महत्त्वाची का आहेत?",
          content: "मूलभूत कर्तव्ये जबाबदार नागरिकत्वाला प्रोत्साहन देतात आणि संविधान, समाज व पर्यावरणाप्रती नागरिकांच्या जबाबदाऱ्यांची जाणीव करून देतात."
        }
      ]
    },
    keywords: [
      "Article 51A",
      "Article 51A of Indian Constitution",
      "Fundamental Duties",
      "Duties of Indian Citizens",
      "42nd Constitutional Amendment",
      "86th Constitutional Amendment",
      "Article 51A(k)",
      "कलम 51A",
      "अनुच्छेद ५१A",
      "मूलभूत कर्तव्ये",
      "भारतीय नागरिकांची कर्तव्ये",
      "भारतीय संविधान"
    ],
    relatedIds: ["14", "19", "21", "32"],
    source: {
      name: "Legislative Department, Ministry of Law and Justice, Government of India",
      url: "https://www.legislative.gov.in/constitution-of-india/"
    },
    lastVerified: "2026-10-19"
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
  },
  {
    id: "social-media-minors-supreme-court-2026",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    date: "2026-09-29",
    title: {
      en: "Social Media Rules for Minors: Supreme Court and Centre Discussion Explained",
      mr: "अल्पवयीन मुलांसाठी सोशल मीडिया नियम: सर्वोच्च न्यायालय आणि केंद्राची चर्चा"
    },
    slug: "social-media-rules-minors-india-supreme-court-2026",
    seoTitle: {
      en: "Social Media Rules for Minors in India | Supreme Court 2026 | MySamvidhan",
      mr: "अल्पवयीनांसाठी सोशल मीडिया नियम | सर्वोच्च न्यायालय 2026 | MySamvidhan"
    },
    seoDescription: {
      en: "Supreme Court asks Centre to consider statutory safeguards for minors on social media, including an 18-year minimum and parental consent. Understand Articles 19 and 21.",
      mr: "अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबत सर्वोच्च न्यायालयाने केंद्राला statutory safeguards विचारात घेण्यास सांगितले. कलम 19 आणि 21 चा संबंध समजून घ्या."
    },
    shortDescription: {
      en: "The Supreme Court has asked the Centre to consider statutory safeguards for minors using social media, including rules concerning an 18-year minimum age and parental consent. Here is the constitutional context.",
      mr: "अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबत सर्वोच्च न्यायालयाने केंद्राला statutory safeguards विचारात घेण्यास सांगितले आहे. 18 वर्षांची वयोमर्यादा, पालकांची संमती आणि कलम 19 व 21 यांचा संबंध समजून घ्या."
    },
    keywords: [
      "social media rules for minors India",
      "social media under 18 India",
      "Supreme Court social media minors",
      "Supreme Court minors social media 2026",
      "social media age limit India",
      "18 years social media India",
      "parental consent social media India",
      "social media parental consent",
      "minor social media accounts India",
      "children social media India",
      "digital rights India",
      "online safety children India",
      "Article 19 social media",
      "Article 21 social media",
      "Article 19 Indian Constitution",
      "Article 21 Indian Constitution",
      "Information Technology Rules 2021",
      "IT Rules 2021 minors",
      "Supreme Court current affairs",
      "Indian Constitution current affairs",
      "UPSC current affairs",
      "MPSC current affairs",
      "Police Bharti current affairs",
      "अल्पवयीन सोशल मीडिया नियम",
      "मुलांसाठी सोशल मीडिया नियम",
      "18 वर्षे सोशल मीडिया",
      "सोशल मीडिया वयोमर्यादा",
      "पालकांची संमती सोशल मीडिया",
      "कलम 19 सोशल मीडिया",
      "कलम 21 सोशल मीडिया",
      "भारतीय संविधान चालू घडामोडी"
    ],
    language: "en",
    officialText: {
      en: "",
      mr: "",
      verified: false
    },
    introduction: {
      en: `The Supreme Court has asked the Central Government to consider statutory safeguards concerning the use of social media by minors.

The development relates to a petition seeking stronger safeguards for children using social media and other digital platforms. During the hearing on 28 September 2026, the Supreme Court asked the Centre to examine whether children below 18 years should be prevented from independently creating social media accounts without parental consent.

On 29 September 2026, reports stated that the Court asked the Centre to put in place statutory rules concerning the minimum age requirement for social-media membership.

The issue involves child safety, privacy, parental consent and the legal framework applicable to digital platforms.

Importantly, this should not be described as a blanket social-media ban for everyone below 18 that has already come into force. The matter concerns proposed or contemplated statutory safeguards and the ongoing legal and regulatory process.`,
      mr: `अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबत कायदेशीर safeguards तयार करण्याचा विचार करण्यास सर्वोच्च न्यायालयाने केंद्र सरकारला सांगितले आहे.

हा विषय मुलांना सोशल मीडिया आणि इतर digital platforms वापरताना अधिक संरक्षण मिळावे यासाठी दाखल करण्यात आलेल्या याचिकेशी संबंधित आहे. 28 सप्टेंबर 2026 रोजीच्या सुनावणीदरम्यान सर्वोच्च न्यायालयाने 18 वर्षांखालील मुलांना पालकांच्या संमतीशिवाय स्वतंत्रपणे सोशल मीडिया account तयार करण्यास प्रतिबंध करण्याबाबत केंद्राने विचार करावा, असे सांगितले.

29 सप्टेंबर 2026 रोजीच्या वृत्तांनुसार, सोशल मीडिया membership साठी 18 वर्षांची minimum age requirement करण्यासंबंधी statutory rules तयार करण्याबाबतही केंद्राला विचार करण्यास सांगण्यात आले.

या विषयामध्ये बालसुरक्षा, privacy, पालकांची संमती आणि digital platforms साठीची कायदेशीर चौकट हे मुद्दे संबंधित आहेत.

महत्त्वाचे म्हणजे, भारतात 18 वर्षांखालील प्रत्येक व्यक्तीसाठी सोशल मीडिया वापरावर पूर्ण बंदी आधीच लागू झाली आहे असे म्हणणे योग्य नाही. हा विषय प्रस्तावित किंवा विचाराधीन statutory safeguards आणि सुरू असलेल्या कायदेशीर व नियामक प्रक्रियेशी संबंधित आहे.`
    },
    simpleExplanation: {
      en: `The issue is about whether children below 18 should be allowed to independently create and maintain social-media accounts.

The petition before the Supreme Court has raised concerns about online risks faced by children, including grooming, cyberbullying, misuse of personal data and exposure to age-inappropriate content.

The Court has asked the Centre to examine stronger legal safeguards. One proposal under discussion is requiring parental or guardian consent for minors.

The discussion also raises constitutional questions because social media is a platform for communication and expression, while children also require protection of their privacy, dignity and safety.`,
      mr: `हा विषय 18 वर्षांखालील मुलांना स्वतंत्रपणे सोशल मीडिया account तयार करून वापरता यावा का, आणि त्यासाठी पालकांची संमती आवश्यक असावी का, याच्याशी संबंधित आहे.

सर्वोच्च न्यायालयासमोरील याचिकेमध्ये online grooming, cyberbullying, personal data चा गैरवापर आणि वयानुसार अनुचित content यांसारख्या मुलांसमोरील जोखमींबाबत चिंता व्यक्त करण्यात आली आहे.

या पार्श्वभूमीवर न्यायालयाने केंद्राला अधिक मजबूत कायदेशीर safeguards चा विचार करण्यास सांगितले आहे. यामध्ये अल्पवयीनांसाठी पालक किंवा guardian ची संमती आवश्यक करण्याचा मुद्दाही चर्चेत आहे.

या चर्चेला घटनात्मक पैलूही आहेत, कारण सोशल मीडिया हे संवाद आणि अभिव्यक्तीचे माध्यम आहे; त्याच वेळी मुलांची privacy, dignity आणि safety यांचे संरक्षणही महत्त्वाचे आहे.`
    },
    verySimple: {
      en: `In simple words, the issue is about protecting children online while deciding how minors should access social-media platforms.

The Supreme Court has asked the Centre to examine legal safeguards, including the possibility of parental consent and an 18-year minimum age requirement.

No blanket ban should be assumed merely from the ongoing court proceedings. The legal and regulatory process is still developing.`,
      mr: `सोप्या भाषेत सांगायचे तर, मुलांचे ऑनलाइन संरक्षण करताना अल्पवयीन मुलांनी सोशल मीडिया कसा वापरावा यासाठी कोणते नियम असावेत, हा मुख्य प्रश्न आहे.

सर्वोच्च न्यायालयाने पालकांची संमती आणि 18 वर्षांची minimum age requirement यांसारख्या कायदेशीर safeguards चा विचार करण्यास केंद्राला सांगितले आहे.

मात्र केवळ न्यायालयातील सुरू असलेल्या प्रक्रियेवरून 18 वर्षांखालील सर्वांसाठी सोशल मीडिया वापरावर पूर्ण बंदी लागू झाली आहे असे समजू नये.`
    },
    example: {
      en: `Suppose a 16-year-old wants to create an account on a social-media platform.

Under a possible parental-consent framework, the platform may be required to obtain verified consent from a parent or legal guardian before allowing the account to be created.

Such a framework would attempt to balance online child protection with access to digital platforms and constitutional considerations.`,
      mr: `समजा 16 वर्षांच्या मुलाला सोशल मीडिया platform वर account तयार करायचे आहे.

पालकांच्या संमतीची व्यवस्था लागू झाल्यास, account तयार करण्यापूर्वी platform ला पालक किंवा कायदेशीर guardian ची verified consent घेणे आवश्यक असू शकते.

अशा प्रकारच्या व्यवस्थेचा उद्देश मुलांचे ऑनलाइन संरक्षण, digital platforms चा access आणि घटनात्मक बाबी यांच्यात समतोल साधणे हा असू शकतो.`
    },
    content: {
      en: `The Supreme Court's recent proceedings have brought the question of social-media access by minors into focus.

The Court is considering a petition seeking safeguards for children using social media and other digital platforms. The petition has raised concerns regarding online grooming, cyberbullying, sexual exploitation, misuse of personal data and exposure to age-inappropriate content.

The Centre has been asked to examine whether statutory safeguards should be introduced. One of the issues under discussion is whether children below 18 should be prevented from independently creating social-media accounts without parental or guardian consent.

The discussion is relevant to the constitutional framework because social media provides a platform for communication and expression, while privacy, dignity and protection of children are also important legal considerations.

The final regulatory framework, if introduced, would determine the precise requirements applicable to platforms and minors.`,
      mr: `सर्वोच्च न्यायालयातील अलीकडील सुनावणीमुळे अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबतचा प्रश्न चर्चेत आला आहे.

मुलांना सोशल मीडिया आणि इतर digital platforms वापरताना safeguards मिळावेत यासाठी दाखल करण्यात आलेल्या याचिकेवर न्यायालयात सुनावणी सुरू आहे. या याचिकेमध्ये online grooming, cyberbullying, sexual exploitation, personal data चा गैरवापर आणि वयानुसार अनुचित content यांसारख्या जोखमींचा उल्लेख करण्यात आला आहे.

कायदेशीर safeguards लागू करण्याबाबत केंद्राने विचार करावा, असे न्यायालयाने सांगितले आहे. त्यामध्ये 18 वर्षांखालील मुलांना पालक किंवा guardian च्या संमतीशिवाय स्वतंत्रपणे सोशल मीडिया account तयार करण्यास प्रतिबंध करण्याचा मुद्दाही आहे.

या विषयाचा घटनात्मक चौकटीशी संबंध आहे, कारण सोशल मीडिया हे communication आणि expression चे माध्यम आहे. त्याचवेळी privacy, dignity आणि मुलांचे संरक्षण हे देखील महत्त्वाचे कायदेशीर मुद्दे आहेत.

भविष्यात नियम लागू झाल्यास platforms आणि minors साठी नेमक्या कोणत्या requirements असतील हे त्या अंतिम regulatory framework वर अवलंबून असेल.`
    },
    seoSections: {
      en: [
        {
          heading: "What is the Supreme Court social media minors issue?",
          content: "The Supreme Court is considering a petition seeking stronger safeguards for minors using social media and other digital platforms. The issue includes questions about parental consent, age verification and the legal framework governing minors online."
        },
        {
          heading: "What did the Supreme Court ask the Centre to consider?",
          content: "The Court asked the Centre to consider statutory safeguards concerning minors using social media, including whether children below 18 should be prevented from independently creating accounts without parental consent."
        },
        {
          heading: "Is social media banned for everyone below 18 in India?",
          content: "No blanket ban should be stated as already being in force based solely on the current proceedings. The matter concerns statutory safeguards and an ongoing legal and regulatory process."
        },
        {
          heading: "Why is parental consent being discussed?",
          content: "The petition before the Court argues that minors require stronger protection when entering into relationships with digital platforms. Parental or guardian consent is one of the safeguards being considered."
        },
        {
          heading: "How is Article 19 connected with social media?",
          content: "Article 19(1)(a) protects freedom of speech and expression for citizens. Social media is an important modern medium for communication and expression. Any regulation affecting such use may therefore raise Article 19 questions, subject to constitutional restrictions."
        },
        {
          heading: "How is Article 21 connected with the issue?",
          content: "Article 21 protects life and personal liberty. Constitutional jurisprudence has also recognised privacy and dignity within the broader framework of personal liberty. These considerations are relevant when discussing the safety and privacy of children online."
        },
        {
          heading: "What are the risks raised in the petition?",
          content: "The petition has raised concerns including online grooming, sexual exploitation, cyberbullying, misuse of personal data, trafficking and exposure to age-inappropriate content."
        },
        {
          heading: "What is the role of the Information Technology Rules, 2021?",
          content: "The petition seeks changes to the existing Information Technology Rules or a suitable legal framework to introduce safeguards concerning minors and digital platforms."
        },
        {
          heading: "Why is this topic important for competitive exams?",
          content: "The topic connects current affairs with constitutional rights, Article 19, Article 21, privacy, child protection, digital regulation and the Information Technology Rules. These areas may be relevant to UPSC, MPSC, Police Bharti and other competitive examinations."
        }
      ],
      mr: [
        {
          heading: "अल्पवयीन मुलांच्या सोशल मीडिया वापराचा सर्वोच्च न्यायालयातील विषय काय आहे?",
          content: "सोशल मीडिया आणि इतर digital platforms वापरणाऱ्या अल्पवयीन मुलांसाठी अधिक मजबूत safeguards असावेत यासाठी दाखल करण्यात आलेल्या याचिकेवर सर्वोच्च न्यायालयात सुनावणी सुरू आहे. यामध्ये parental consent, age verification आणि minors साठी digital platforms ची कायदेशीर चौकट यांसारखे मुद्दे आहेत."
        },
        {
          heading: "सर्वोच्च न्यायालयाने केंद्राला काय विचार करण्यास सांगितले?",
          content: "अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबत statutory safeguards तयार करण्याचा विचार करण्यास केंद्राला सांगण्यात आले आहे. यामध्ये 18 वर्षांखालील मुलांना पालकांच्या संमतीशिवाय स्वतंत्र account तयार करण्यास प्रतिबंध करण्याचा मुद्दाही आहे."
        },
        {
          heading: "भारतात 18 वर्षांखालील सर्वांसाठी सोशल मीडिया बंद झाला आहे का?",
          content: "नाही. सध्याच्या न्यायालयीन प्रक्रियेवरून 18 वर्षांखालील सर्वांसाठी सोशल मीडिया वापरावर पूर्ण बंदी लागू झाली आहे असे म्हणता येत नाही. सध्या statutory safeguards आणि regulatory framework बाबत प्रक्रिया सुरू आहे."
        },
        {
          heading: "पालकांची संमती का चर्चेत आहे?",
          content: "अल्पवयीन मुलांचे digital platforms वरील संरक्षण मजबूत करण्यासाठी parental किंवा guardian consent हा एक संभाव्य safeguard म्हणून चर्चेत आहे."
        },
        {
          heading: "सोशल मीडिया आणि कलम 19 चा संबंध काय?",
          content: "कलम 19(1)(अ) नागरिकांना भाषण आणि अभिव्यक्ती स्वातंत्र्य देते. सोशल मीडिया हे आधुनिक communication आणि expression चे माध्यम असल्याने त्यावरील नियमांचा कलम 19 शी संबंध येऊ शकतो. मात्र या अधिकारांवर संविधानानुसार काही वाजवी निर्बंध लागू होऊ शकतात."
        },
        {
          heading: "कलम 21 चा या विषयाशी संबंध काय?",
          content: "कलम 21 जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण करते. घटनात्मक न्यायशास्त्रात privacy आणि dignity यांचाही वैयक्तिक स्वातंत्र्याच्या व्यापक चौकटीशी संबंध जोडला गेला आहे. त्यामुळे मुलांची online safety आणि privacy या चर्चेत महत्त्वाच्या ठरतात."
        },
        {
          heading: "याचिकेमध्ये कोणत्या जोखमींचा उल्लेख आहे?",
          content: "याचिकेमध्ये online grooming, sexual exploitation, cyberbullying, personal data चा गैरवापर, trafficking आणि वयानुसार अनुचित content यांसारख्या जोखमींबाबत चिंता व्यक्त करण्यात आली आहे."
        },
        {
          heading: "Information Technology Rules, 2021 चा संबंध काय?",
          content: "अल्पवयीन मुलांसाठी digital platforms वर safeguards लागू करण्यासाठी विद्यमान Information Technology Rules मध्ये बदल किंवा योग्य कायदेशीर framework तयार करण्याची मागणी याचिकेत करण्यात आली आहे."
        },
        {
          heading: "स्पर्धा परीक्षांसाठी हा विषय महत्त्वाचा का आहे?",
          content: "या विषयाचा संबंध कलम 19, कलम 21, privacy, child protection, digital regulation आणि Information Technology Rules यांसारख्या घटनात्मक व चालू घडामोडींच्या विषयांशी आहे. त्यामुळे UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी हा विषय उपयुक्त आहे."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "What is the latest Supreme Court development on social media and minors?",
          answer: "The Supreme Court has asked the Centre to consider statutory safeguards concerning minors using social media, including issues relating to an 18-year minimum age and parental consent."
        },
        {
          question: "Is social media completely banned for people below 18 in India?",
          answer: "No. The current development concerns proposed or contemplated statutory safeguards and an ongoing legal and regulatory process. It should not automatically be described as a blanket ban already in force."
        },
        {
          question: "Why is parental consent being discussed?",
          answer: "Parental or guardian consent is being considered as a possible safeguard for minors using social-media platforms."
        },
        {
          question: "Which constitutional Articles are relevant?",
          answer: "Article 19(1)(a), concerning freedom of speech and expression, and Article 21, concerning life and personal liberty, are among the constitutional provisions relevant to the discussion."
        },
        {
          question: "What risks to children are mentioned in the case?",
          answer: "The petition has raised concerns including online grooming, cyberbullying, sexual exploitation, misuse of personal data, trafficking and age-inappropriate content."
        },
        {
          question: "What is the current status of the issue?",
          answer: "The issue remains part of an ongoing legal and regulatory process. The final form of any statutory safeguards would depend on subsequent government action and legal proceedings."
        }
      ],
      mr: [
        {
          question: "सोशल मीडिया आणि अल्पवयीन मुलांबाबत सर्वोच्च न्यायालयाचा नवीन विकास काय आहे?",
          answer: "अल्पवयीन मुलांच्या सोशल मीडिया वापराबाबत statutory safeguards चा विचार करण्यास सर्वोच्च न्यायालयाने केंद्राला सांगितले आहे. यामध्ये 18 वर्षांची minimum age आणि parental consent यांसारखे मुद्दे आहेत."
        },
        {
          question: "भारतात 18 वर्षांखालील व्यक्तींसाठी सोशल मीडिया पूर्णपणे बंद झाला आहे का?",
          answer: "नाही. सध्याचा विषय प्रस्तावित किंवा विचाराधीन statutory safeguards आणि सुरू असलेल्या कायदेशीर व regulatory process शी संबंधित आहे. त्यामुळे याला आधीच लागू झालेली blanket ban म्हणणे योग्य नाही."
        },
        {
          question: "पालकांची संमती का चर्चेत आहे?",
          answer: "अल्पवयीन मुलांच्या सोशल मीडिया वापरासाठी parental किंवा guardian consent हा एक संभाव्य safeguard म्हणून चर्चेत आहे."
        },
        {
          question: "या विषयाशी कोणती घटनात्मक कलमे संबंधित आहेत?",
          answer: "कलम 19(1)(अ) मधील भाषण आणि अभिव्यक्ती स्वातंत्र्य तसेच कलम 21 मधील जीवन आणि वैयक्तिक स्वातंत्र्य हे या चर्चेशी संबंधित महत्त्वाचे घटनात्मक मुद्दे आहेत."
        },
        {
          question: "मुलांसाठी कोणत्या online risks चा उल्लेख करण्यात आला आहे?",
          answer: "Online grooming, cyberbullying, sexual exploitation, personal data चा गैरवापर, trafficking आणि age-inappropriate content यांसारख्या जोखमींचा उल्लेख करण्यात आला आहे."
        },
        {
          question: "या विषयाची सध्याची स्थिती काय आहे?",
          answer: "हा विषय सध्या सुरू असलेल्या कायदेशीर आणि regulatory process चा भाग आहे. भविष्यातील statutory safeguards चे अंतिम स्वरूप पुढील सरकारी कारवाई आणि न्यायालयीन प्रक्रियेवर अवलंबून असेल."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "Which Article protects freedom of speech and expression?",
          options: ["Article 14", "Article 19(1)(a)", "Article 21", "Article 32"],
          answer: "Article 19(1)(a)"
        },
        {
          question: "Which Article protects life and personal liberty?",
          options: ["Article 15", "Article 17", "Article 21", "Article 25"],
          answer: "Article 21"
        },
        {
          question: "What safeguard is being discussed for minors using social media?",
          options: [
            "Mandatory voting",
            "Parental or guardian consent",
            "Citizenship certificate",
            "Driving licence"
          ],
          answer: "Parental or guardian consent"
        },
        {
          question: "What age is central to the current discussion?",
          options: ["13 years", "16 years", "18 years", "21 years"],
          answer: "18 years"
        }
      ],
      mr: [
        {
          question: "भाषण आणि अभिव्यक्ती स्वातंत्र्य कोणत्या कलमाशी संबंधित आहे?",
          options: ["कलम 14", "कलम 19(1)(अ)", "कलम 21", "कलम 32"],
          answer: "कलम 19(1)(अ)"
        },
        {
          question: "जीवन आणि वैयक्तिक स्वातंत्र्य कोणते कलम संरक्षित करते?",
          options: ["कलम 15", "कलम 17", "कलम 21", "कलम 25"],
          answer: "कलम 21"
        },
        {
          question: "अल्पवयीन मुलांसाठी कोणता safeguard चर्चेत आहे?",
          options: [
            "मतदान अनिवार्य करणे",
            "पालक किंवा guardian ची संमती",
            "नागरिकत्व प्रमाणपत्र",
            "Driving licence"
          ],
          answer: "पालक किंवा guardian ची संमती"
        },
        {
          question: "सध्याच्या चर्चेतील प्रमुख वयोमर्यादा कोणती आहे?",
          options: ["13 वर्षे", "16 वर्षे", "18 वर्षे", "21 वर्षे"],
          answer: "18 वर्षे"
        }
      ]
    },
    source: {
      title: "Supreme Court social media minors proceedings — India Today and The Indian Express reports, 28–29 September 2026",
      url: "https://indianexpress.com/article/legal-news/supreme-court-social-media-minors-18-age-limit-10898235/"
    },
    lastVerified: "2026-09-29",
    verified: false,
    relatedIds: ["19", "21", "21A", "32"],
    createdAt: "2026-09-29",
    updatedAt: "2026-09-29"
  },
  {
    id: "supreme-court-voter-list-sir-2026",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    slug: "supreme-court-voter-list-election-commission",
    title: {
      en: "Voter List Irregularities: Supreme Court Notice to Election Commission",
      mr: "मतदार यादीतील कथित अनियमितता: सुप्रीम कोर्टाची निवडणूक आयोगाला नोटीस"
    },
    seoTitle: {
      en: "Voter List Irregularities: Supreme Court Notice | MySamvidhan",
      mr: "मतदार यादीतील अनियमितता: सुप्रीम कोर्टाची नोटीस | MySamvidhan"
    },
    shortDescription: {
      en: "The Supreme Court seeks responses from the Election Commission on petitions alleging irregularities in the Special Intensive Revision of electoral rolls.",
      mr: "मतदार यादीच्या विशेष सखोल पुनरिक्षणातील कथित अनियमिततांबाबत दाखल याचिकांवर सुप्रीम कोर्टाने निवडणूक आयोगाकडून उत्तर मागितले आहे."
    },
    category: "Supreme Court",
    categoryMr: "सर्वोच्च न्यायालय",
    date: "2026-10-15",
    introduction: {
      en: "On October 15, 2026, the Supreme Court of India issued notices to the Election Commission of India, Chief Election Commissioner Gyanesh Kumar and Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi. The notices followed petitions by opposition leaders raising allegations of large-scale voter deletions and irregularities during the Special Intensive Revision (SIR) of electoral rolls. The Court sought responses from the concerned authorities. The allegations remain subject to judicial consideration.",
      mr: "15 ऑक्टोबर 2026 रोजी भारताच्या सर्वोच्च न्यायालयाने भारत निवडणूक आयोग, मुख्य निवडणूक आयुक्त ज्ञानेश कुमार आणि निवडणूक आयुक्त सुखबीर सिंह संधू व विवेक जोशी यांना नोटीस बजावली. मतदार यादीच्या विशेष सखोल पुनरिक्षणादरम्यान (SIR) मोठ्या प्रमाणात मतदारांची नावे वगळल्याचा आणि अनियमितता झाल्याचा आरोप करणाऱ्या विरोधी पक्षांच्या नेत्यांनी दाखल केलेल्या याचिकांनंतर ही नोटीस देण्यात आली. संबंधित प्राधिकरणांकडून न्यायालयाने उत्तर मागितले आहे. हे आरोप अद्याप न्यायालयीन विचाराधीन आहेत."
    },
    simpleExplanation: {
      en: "The case concerns allegations about how voter lists are being revised under the Special Intensive Revision process. The petitioners have asked the Court to examine the Election Commission’s decision-making and the safeguards available to eligible voters. Issuing a notice means the Court is seeking a response; it does not mean the allegations have been proved.",
      mr: "या प्रकरणाचा संबंध विशेष सखोल पुनरिक्षण प्रक्रियेद्वारे मतदार याद्यांमध्ये केलेल्या बदलांबाबतच्या आरोपांशी आहे. निवडणूक आयोगाने घेतलेल्या निर्णयांची प्रक्रिया आणि पात्र मतदारांच्या नावांचे संरक्षण करण्यासाठी असलेल्या उपाययोजनांची तपासणी करण्याची मागणी याचिकाकर्त्यांनी केली आहे. न्यायालयाने नोटीस बजावणे म्हणजे संबंधित पक्षाचे उत्तर मागणे होय; त्यामुळे आरोप सिद्ध झाले आहेत असा अर्थ होत नाही."
    },
    verySimple: {
      en: "The Supreme Court has asked the Election Commission to respond to concerns raised in court about voter list revision. The case is still under consideration.",
      mr: "मतदार यादीत बदल करण्याच्या प्रक्रियेबाबत उपस्थित केलेल्या प्रश्नांवर सुप्रीम कोर्टाने निवडणूक आयोगाकडून उत्तर मागितले आहे. हे प्रकरण अद्याप न्यायालयाच्या विचाराधीन आहे."
    },
    example: {
      en: "If an eligible voter believes their name has been wrongly left out of an electoral roll, they can check their registration status and use the official election authorities’ prescribed process to raise the issue. The Supreme Court case concerns broader questions about the revision process and its safeguards.",
      mr: "एखाद्या पात्र मतदाराला मतदार यादीतून आपले नाव चुकीने वगळले गेल्याचे वाटत असल्यास, तो आपली नोंदणी तपासून निवडणूक प्राधिकरणाने ठरवलेल्या अधिकृत प्रक्रियेद्वारे तक्रार किंवा अर्ज करू शकतो. सुप्रीम कोर्टातील प्रकरणात मतदार यादी पुनरिक्षणाची व्यापक प्रक्रिया आणि त्यातील संरक्षणात्मक उपाय तपासण्याचा मुद्दा आहे."
    },
    content: {
      en: "The Supreme Court’s notice brings the process of electoral roll revision and the concerns raised by petitioners before the Court. The Special Intensive Revision (SIR) is an exercise to revise electoral rolls. Petitioners have alleged irregularities and large-scale exclusion of voters, and the Court has sought responses from the Election Commission and the officials named in the petitions. The final outcome will depend on further proceedings and the Court’s consideration of the responses and records.",
      mr: "सुप्रीम कोर्टाने दिलेल्या नोटीसमुळे मतदार यादी पुनरिक्षणाची प्रक्रिया आणि याचिकाकर्त्यांनी उपस्थित केलेले प्रश्न न्यायालयासमोर आले आहेत. विशेष सखोल पुनरिक्षण (SIR) ही मतदार याद्या सुधारण्याची प्रक्रिया आहे. या प्रक्रियेत अनियमितता झाल्याचा आणि मोठ्या प्रमाणात मतदार वगळले गेल्याचा आरोप याचिकाकर्त्यांनी केला आहे. न्यायालयाने निवडणूक आयोग आणि याचिकांमध्ये नमूद केलेल्या अधिकाऱ्यांकडून उत्तर मागितले आहे. पुढील सुनावणी, सादर होणारी कागदपत्रे आणि उत्तरांचा विचार केल्यानंतरच या प्रकरणाचा पुढील निकाल स्पष्ट होईल."
    },
    seoSections: {
      en: [
        {
          heading: "What happened in the Supreme Court on October 15, 2026?",
          content: "The Supreme Court issued notices to the Election Commission of India, the Chief Election Commissioner and two Election Commissioners on petitions alleging irregularities in the Special Intensive Revision of electoral rolls. The Court sought responses from the concerned authorities."
        },
        {
          heading: "What is the Special Intensive Revision (SIR)?",
          content: "The Special Intensive Revision is a process for revising electoral rolls. Its implementation, verification procedures and the handling of eligible voters’ names are central to the issues raised in the petitions."
        },
        {
          heading: "How is voter registration connected to the Constitution?",
          content: "Article 326 of the Constitution provides for elections to the Lok Sabha and State Legislative Assemblies on the basis of adult suffrage, subject to the constitutional conditions. Electoral registration laws and procedures determine how eligible citizens are included in electoral rolls."
        },
        {
          heading: "Does the Supreme Court notice mean the allegations are proved?",
          content: "No. A notice asks the parties concerned to respond to the issues raised. It is not a final judgment establishing the allegations. The matter remains subject to further judicial proceedings."
        }
      ],
      mr: [
        {
          heading: "15 ऑक्टोबर 2026 रोजी सुप्रीम कोर्टात काय घडले?",
          content: "मतदार यादीच्या विशेष सखोल पुनरिक्षणात अनियमितता झाल्याचा आरोप करणाऱ्या याचिकांवर सुप्रीम कोर्टाने भारत निवडणूक आयोग, मुख्य निवडणूक आयुक्त आणि दोन निवडणूक आयुक्तांना नोटीस बजावली. संबंधित प्राधिकरणांकडून न्यायालयाने उत्तर मागितले."
        },
        {
          heading: "विशेष सखोल पुनरिक्षण (SIR) म्हणजे काय?",
          content: "विशेष सखोल पुनरिक्षण ही मतदार याद्यांमध्ये सुधारणा करण्याची प्रक्रिया आहे. या प्रक्रियेची अंमलबजावणी, मतदारांची पडताळणी आणि पात्र नागरिकांची नावे यादीत समाविष्ट करण्याची पद्धत हे या याचिकांमधील महत्त्वाचे मुद्दे आहेत."
        },
        {
          heading: "मतदार नोंदणीचा संविधानाशी काय संबंध आहे?",
          content: "संविधानाचे कलम 326 लोकसभा आणि राज्यांच्या विधानसभांच्या निवडणुकांसाठी प्रौढ मताधिकाराची तरतूद करते. पात्र नागरिकांची नावे मतदार यादीत समाविष्ट करण्याची प्रक्रिया संबंधित निवडणूक कायदे आणि नियमांनुसार चालते."
        },
        {
          heading: "सुप्रीम कोर्टाने नोटीस दिली म्हणजे आरोप सिद्ध झाले का?",
          content: "नाही. नोटीस म्हणजे संबंधित पक्षांकडून उत्तर मागणे होय. ती आरोप सिद्ध करणारा अंतिम न्यायनिर्णय नसतो. या प्रकरणात पुढील न्यायालयीन कार्यवाही होणे बाकी आहे."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "Why did the Supreme Court issue notice to the Election Commission?",
          answer: "The Court sought responses to petitions raising allegations of irregularities and voter deletions during the Special Intensive Revision of electoral rolls."
        },
        {
          question: "Which constitutional Article deals with adult suffrage?",
          answer: "Article 326 provides for elections to the Lok Sabha and State Legislative Assemblies on the basis of adult suffrage, subject to constitutional conditions."
        },
        {
          question: "Where can voters check their registration details?",
          answer: "Voters can use the Election Commission of India’s official voter services portal at https://voters.eci.gov.in/."
        },
        {
          question: "Has the Supreme Court delivered a final verdict in this matter?",
          answer: "The reported development on October 15, 2026, was the issuance of notices seeking responses. It should not be described as a final verdict on the allegations."
        }
      ],
      mr: [
        {
          question: "सुप्रीम कोर्टाने निवडणूक आयोगाला नोटीस का बजावली?",
          answer: "मतदार यादीच्या विशेष सखोल पुनरिक्षणादरम्यान कथित अनियमितता आणि मतदारांची नावे वगळल्याबाबत दाखल याचिकांवर न्यायालयाने उत्तर मागितले."
        },
        {
          question: "प्रौढ मताधिकाराशी कोणते घटनात्मक कलम संबंधित आहे?",
          answer: "संविधानाचे कलम 326 लोकसभा आणि राज्यांच्या विधानसभांच्या निवडणुकांसाठी प्रौढ मताधिकाराची तरतूद करते."
        },
        {
          question: "मतदार आपली नोंदणी कुठे तपासू शकतात?",
          answer: "मतदार भारत निवडणूक आयोगाच्या अधिकृत पोर्टलवर https://voters.eci.gov.in/ जाऊन नोंदणीविषयक माहिती तपासू शकतात."
        },
        {
          question: "या प्रकरणात सुप्रीम कोर्टाने अंतिम निर्णय दिला आहे का?",
          answer: "15 ऑक्टोबर 2026 रोजी प्रसिद्ध झालेल्या वृत्तानुसार न्यायालयाने संबंधित पक्षांकडून उत्तर मागण्यासाठी नोटीस बजावली. याला आरोपांवरील अंतिम निर्णय समजू नये."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "Which Article of the Constitution provides for adult suffrage in Lok Sabha and State Assembly elections?",
          options: ["Article 19", "Article 32", "Article 326", "Article 368"],
          answer: "Article 326"
        },
        {
          question: "What does a court notice generally mean?",
          options: [
            "The allegations are proved",
            "The court is seeking a response",
            "The case is automatically dismissed",
            "A final judgment has been delivered"
          ],
          answer: "The court is seeking a response"
        },
        {
          question: "What does SIR stand for in this news?",
          options: [
            "Special Intensive Revision",
            "State Investigation Report",
            "Supreme Inquiry Record",
            "Special Identity Registration"
          ],
          answer: "Special Intensive Revision"
        }
      ],
      mr: [
        {
          question: "लोकसभा आणि राज्य विधानसभांच्या निवडणुकांतील प्रौढ मताधिकाराशी कोणते कलम संबंधित आहे?",
          options: ["कलम 19", "कलम 32", "कलम 326", "कलम 368"],
          answer: "कलम 326"
        },
        {
          question: "न्यायालयाने नोटीस बजावल्याचा सामान्य अर्थ काय?",
          options: [
            "आरोप सिद्ध झाले",
            "न्यायालय संबंधित पक्षाचे उत्तर मागत आहे",
            "खटला आपोआप फेटाळला गेला",
            "अंतिम निर्णय दिला गेला"
          ],
          answer: "न्यायालय संबंधित पक्षाचे उत्तर मागत आहे"
        },
        {
          question: "या बातमीतील SIR चे पूर्ण रूप काय आहे?",
          options: [
            "Special Intensive Revision",
            "State Investigation Report",
            "Supreme Inquiry Record",
            "Special Identity Registration"
          ],
          answer: "Special Intensive Revision"
        }
      ]
    },
    source: {
      name: "The Indian Express; The New Indian Express; Supreme Court of India",
      url: "https://indianexpress.com/article/legal-news/supreme-court-seeks-response-of-centre-delhi-police-on-plea-challenging-removal-of-jantar-mantar-as-protest-site-10922726/"
    },
    relatedSlugs: [],
    keywords: [
      "Supreme Court voter list news",
      "Election Commission of India",
      "Special Intensive Revision",
      "SIR voter list revision",
      "Article 326",
      "मतदार यादी पुनरिक्षण",
      "सुप्रीम कोर्ट बातमी",
      "मतदारांचे अधिकार",
      "भारतीय संविधान"
    ]
  },
  {
    id: "right-to-protest-public-order-2026",
    articleNumber: "Current Affairs",
    categoryKey: "current-affairs",
    slug: "right-to-protest-public-order-india",
    title: {
      en: "Right to Protest in India: Supreme Court on Public Order",
      mr: "आंदोलनाचा अधिकार आणि सार्वजनिक सुव्यवस्था: संविधान काय सांगते?"
    },
    seoTitle: {
      en: "Right to Protest in India: Article 19 | MySamvidhan",
      mr: "आंदोलनाचा अधिकार: अनुच्छेद 19 | MySamvidhan"
    },
    shortDescription: {
      en: "Understand the constitutional right to peaceful protest under Article 19, reasonable restrictions for public order, and the Supreme Court proceedings concerning Jantar Mantar in October 2026.",
      mr: "भारतीय संविधानातील अनुच्छेद 19 अंतर्गत आंदोलनाचा अधिकार, सार्वजनिक सुव्यवस्थेसाठी वाजवी निर्बंध आणि ऑक्टोबर 2026 मधील जंतर-मंतर प्रकरणाविषयी जाणून घ्या."
    },
    category: "Supreme Court",
    categoryMr: "सर्वोच्च न्यायालय",
    date: "2026-10-19",
    introduction: {
      en: "The right to peaceful protest is an important part of democratic participation in India. Articles 19(1)(a) and 19(1)(b) of the Constitution protect freedom of speech and expression and the right to assemble peacefully and without arms. However, these rights are subject to reasonable restrictions permitted by the Constitution. In October 2026, the Supreme Court issued notices to the Union government and Delhi Police on a petition challenging the removal of Jantar Mantar from the list of designated protest sites. The proceedings have renewed attention on the balance between peaceful protest, public order and the rights of other citizens.",
      mr: "शांततेने आंदोलन करण्याचा अधिकार हा भारतातील लोकशाही सहभागाचा महत्त्वाचा भाग आहे. भारतीय संविधानातील अनुच्छेद 19(1)(a) अभिव्यक्तिस्वातंत्र्याचे, तर अनुच्छेद 19(1)(b) शांततेने आणि शस्त्रांशिवाय एकत्र येण्याच्या अधिकाराचे संरक्षण करतो. मात्र, या अधिकारांवर संविधानाने परवानगी दिलेल्या वाजवी निर्बंधांच्या अधीन राहून मर्यादा लागू होऊ शकतात. ऑक्टोबर 2026 मध्ये जंतर-मंतरला अधिकृत आंदोलनस्थळांच्या यादीतून वगळण्याच्या निर्णयाला आव्हान देणाऱ्या याचिकेवर सर्वोच्च न्यायालयाने केंद्र सरकार आणि दिल्ली पोलिसांना नोटीस बजावली. या प्रकरणामुळे शांततापूर्ण आंदोलन, सार्वजनिक सुव्यवस्था आणि इतर नागरिकांचे अधिकार यांच्यातील संतुलनाचा प्रश्न पुन्हा चर्चेत आला आहे."
    },
    simpleExplanation: {
      en: "The Constitution protects citizens who peacefully express their views and assemble to raise public concerns. The right to protest is not unlimited: authorities may impose lawful and reasonable restrictions to protect public order, safety and the rights of others. On October 15, 2026, the Supreme Court sought responses from the Union government and Delhi Police regarding a challenge to the removal of Jantar Mantar as a designated protest site. The notice was a procedural step and did not constitute a final judgment on the dispute.",
      mr: "संविधान नागरिकांना शांततेने आपले विचार मांडण्याचा आणि सार्वजनिक प्रश्नांवर आवाज उठवण्यासाठी एकत्र येण्याचा अधिकार देते. मात्र, आंदोलनाचा अधिकार अमर्यादित नाही. सार्वजनिक सुव्यवस्था, सुरक्षितता आणि इतर नागरिकांचे अधिकार जपण्यासाठी प्रशासन कायदेशीर व वाजवी निर्बंध लागू करू शकते. 15 ऑक्टोबर 2026 रोजी सर्वोच्च न्यायालयाने जंतर-मंतरला अधिकृत आंदोलनस्थळांच्या यादीतून वगळण्याच्या निर्णयाला आव्हान देणाऱ्या याचिकेवर केंद्र सरकार आणि दिल्ली पोलिसांकडून उत्तर मागितले. ही न्यायालयीन प्रक्रियेतील एक पायरी होती; या वादावरील अंतिम निर्णय नव्हता."
    },
    verySimple: {
      en: "Indian citizens have the right to express their opinions and hold peaceful protests. The government can regulate protests under the law to maintain public order and protect other people. In October 2026, the Supreme Court sought responses in a case concerning Jantar Mantar as a protest site.",
      mr: "भारतीय नागरिकांना आपले मत व्यक्त करण्याचा आणि शांततेने आंदोलन करण्याचा अधिकार आहे. सार्वजनिक सुव्यवस्था राखण्यासाठी कायद्यानुसार आंदोलनांवर काही निर्बंध लागू होऊ शकतात. ऑक्टोबर 2026 मध्ये जंतर-मंतर आंदोलनस्थळासंबंधीच्या प्रकरणात सर्वोच्च न्यायालयाने संबंधित प्राधिकरणांकडून उत्तर मागितले."
    },
    example: {
      en: "Suppose residents organise a peaceful demonstration requesting better public transport. Their right to assemble and express their views is protected by the Constitution. However, they may have to follow applicable permission requirements and lawful directions about the venue, timing and management of the gathering. Any restriction must have a legal basis and satisfy the applicable constitutional requirements.",
      mr: "समजा, एखाद्या परिसरातील नागरिक सार्वजनिक वाहतूक सुधारण्याच्या मागणीसाठी शांततापूर्ण आंदोलन आयोजित करतात. त्यांना आपले मत मांडण्याचा आणि एकत्र येण्याचा घटनात्मक अधिकार आहे. मात्र, आंदोलनाचे ठिकाण, वेळ आणि व्यवस्थापन याबाबत लागू असलेल्या परवानगीच्या अटी व कायदेशीर निर्देशांचे पालन करावे लागू शकते. कोणत्याही निर्बंधाला कायदेशीर आधार असणे आणि लागू घटनात्मक अटी पूर्ण करणे आवश्यक आहे."
    },
    content: {
      en: "The right to protest allows citizens to raise grievances, question public decisions and participate in democratic debate. The Constitution does not contain a separate provision expressly titled the right to protest; rather, peaceful protest is protected through constitutional freedoms, particularly Articles 19(1)(a) and 19(1)(b).\n\nArticle 19(1)(a) protects freedom of speech and expression. Article 19(1)(b) protects the right to assemble peaceably and without arms. Article 19(2) permits reasonable restrictions on freedom of speech and expression for specified constitutional purposes, while Article 19(3) permits reasonable restrictions on peaceful assembly in the interests of the sovereignty and integrity of India and public order.\n\nThe Supreme Court examined the relationship between peaceful demonstrations and public order in Mazdoor Kisan Shakti Sangathan v. Union of India (2018). The judgment recognised peaceful protest as a fundamental right while emphasising the need to regulate demonstrations and balance the rights of protesters with the interests of residents and the public.\n\nA recent development arose in October 2026, when Delhi Police removed Jantar Mantar from the list of designated protest sites and identified alternative locations. On October 15, the Supreme Court issued notices to the Union government and Delhi Police on a petition challenging that decision. The Court sought responses and indicated that the decision-making process concerning the protest site would be examined. The notice should not be interpreted as a final ruling on the validity of the decision.\n\nThe broader constitutional question is how authorities can maintain public order without imposing unreasonable restrictions on peaceful democratic expression. The answer depends on the applicable law, the circumstances of each case and judicial scrutiny where a restriction is challenged.",
      mr: "आंदोलनाचा अधिकार नागरिकांना आपल्या तक्रारी मांडण्याची, सार्वजनिक निर्णयांवर प्रश्न उपस्थित करण्याची आणि लोकशाही चर्चेत सहभागी होण्याची संधी देतो. भारतीय संविधानात स्वतंत्रपणे “आंदोलनाचा अधिकार” या नावाची तरतूद नाही. त्याऐवजी शांततापूर्ण आंदोलनाला प्रामुख्याने अनुच्छेद 19(1)(a) आणि 19(1)(b) मधील घटनात्मक स्वातंत्र्यांद्वारे संरक्षण मिळते.\n\nअनुच्छेद 19(1)(a) अभिव्यक्तिस्वातंत्र्याचे संरक्षण करतो. अनुच्छेद 19(1)(b) नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचा अधिकार देतो. अनुच्छेद 19(2) अंतर्गत अभिव्यक्तिस्वातंत्र्यावर संविधानात नमूद केलेल्या कारणांसाठी वाजवी निर्बंध लागू करता येतात. अनुच्छेद 19(3) नुसार भारताची सार्वभौमता व अखंडता आणि सार्वजनिक सुव्यवस्था यांच्या हितासाठी शांततापूर्ण एकत्र येण्याच्या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.\n\nMazdoor Kisan Shakti Sangathan v. Union of India (2018) या प्रकरणात सर्वोच्च न्यायालयाने शांततापूर्ण आंदोलन आणि सार्वजनिक सुव्यवस्था यांच्यातील संबंधाचा विचार केला. न्यायालयाने शांततापूर्ण आंदोलन हा मूलभूत अधिकार असल्याचे मान्य केले. त्याच वेळी, आंदोलनांचे योग्य नियमन करणे आणि आंदोलकांचे अधिकार, परिसरातील रहिवासी व सर्वसामान्य नागरिकांचे हित यांच्यात संतुलन राखणे आवश्यक असल्याचे स्पष्ट केले.\n\nऑक्टोबर 2026 मध्ये दिल्ली पोलिसांनी जंतर-मंतरला अधिकृत आंदोलनस्थळांच्या यादीतून वगळून पर्यायी जागा निश्चित केल्या. या निर्णयाला आव्हान देणाऱ्या याचिकेवर 15 ऑक्टोबर रोजी सर्वोच्च न्यायालयाने केंद्र सरकार आणि दिल्ली पोलिसांना नोटीस बजावली. न्यायालयाने संबंधित पक्षांकडून उत्तर मागितले आणि आंदोलनस्थळासंबंधी निर्णय घेताना प्रशासनाने केलेल्या विचारप्रक्रियेची तपासणी केली जाईल, असे सूचित केले. या नोटीसचा अर्थ संबंधित निर्णयाच्या वैधतेवर अंतिम निकाल दिला आहे असा होत नाही.\n\nया प्रकरणातून व्यापक घटनात्मक प्रश्न समोर येतो: सार्वजनिक सुव्यवस्था राखताना नागरिकांच्या शांततापूर्ण लोकशाही अभिव्यक्तीवर अवाजवी निर्बंध येणार नाहीत, याची खात्री कशी करावी? याचे उत्तर लागू कायदे, प्रत्येक प्रकरणातील परिस्थिती आणि निर्बंधांना आव्हान दिल्यास होणारी न्यायालयीन तपासणी यांवर अवलंबून असते."
    },
    seoSections: {
      en: [
        {
          heading: "What is the right to protest in India?",
          content: "The right to protest is protected through constitutional freedoms, especially the right to freedom of speech and expression under Article 19(1)(a) and the right to assemble peaceably and without arms under Article 19(1)(b). These freedoms allow citizens to raise concerns and express dissent through peaceful democratic means."
        },
        {
          heading: "What do Articles 19(1)(a) and 19(1)(b) provide?",
          content: "Article 19(1)(a) protects freedom of speech and expression. Article 19(1)(b) protects the right of citizens to assemble peaceably and without arms. Together, these provisions are important constitutional foundations for peaceful demonstrations and public meetings."
        },
        {
          heading: "When can restrictions be imposed on protests?",
          content: "Article 19(2) permits reasonable restrictions on freedom of speech and expression for specified constitutional purposes. Article 19(3) permits reasonable restrictions on peaceful assembly in the interests of the sovereignty and integrity of India and public order. Restrictions must comply with the applicable law and constitutional requirements."
        },
        {
          heading: "What did the Supreme Court say about peaceful protests?",
          content: "In Mazdoor Kisan Shakti Sangathan v. Union of India (2018), the Supreme Court recognised peaceful demonstrations as a fundamental right under Articles 19(1)(a) and 19(1)(b). The judgment also addressed the need to regulate protests and balance the rights of demonstrators with the interests of residents and the public."
        },
        {
          heading: "Why is Jantar Mantar in the news in October 2026?",
          content: "Delhi Police removed Jantar Mantar from the list of designated protest sites and identified alternative venues. On October 15, 2026, the Supreme Court issued notices to the Union government and Delhi Police on a petition challenging the decision. The notice sought responses and was not a final judgment on the dispute."
        },
        {
          heading: "Does a Supreme Court notice mean a decision has been made?",
          content: "No. A notice generally asks the concerned parties to respond to a petition or issue. It does not, by itself, mean that the court has accepted the allegations or delivered a final ruling."
        }
      ],
      mr: [
        {
          heading: "भारतात आंदोलन करण्याचा अधिकार म्हणजे काय?",
          content: "आंदोलनाचा अधिकार हा प्रामुख्याने अनुच्छेद 19(1)(a) मधील अभिव्यक्तिस्वातंत्र्य आणि अनुच्छेद 19(1)(b) मधील शांततेने व शस्त्रांशिवाय एकत्र येण्याच्या अधिकारातून संरक्षित होतो. या तरतुदींमुळे नागरिकांना शांततापूर्ण लोकशाही मार्गाने आपल्या मागण्या आणि असहमती व्यक्त करता येते."
        },
        {
          heading: "अनुच्छेद 19(1)(a) आणि 19(1)(b) काय सांगतात?",
          content: "अनुच्छेद 19(1)(a) अभिव्यक्तिस्वातंत्र्याचे संरक्षण करतो. अनुच्छेद 19(1)(b) नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचा अधिकार देतो. शांततापूर्ण निदर्शने आणि सार्वजनिक सभांसाठी या दोन्ही तरतुदी महत्त्वाच्या आहेत."
        },
        {
          heading: "आंदोलनावर निर्बंध कधी लागू करता येतात?",
          content: "अनुच्छेद 19(2) नुसार अभिव्यक्तिस्वातंत्र्यावर संविधानात नमूद केलेल्या कारणांसाठी वाजवी निर्बंध लागू करता येतात. अनुच्छेद 19(3) नुसार भारताची सार्वभौमता व अखंडता आणि सार्वजनिक सुव्यवस्था यांच्या हितासाठी शांततापूर्ण एकत्र येण्याच्या अधिकारावर वाजवी निर्बंध लागू करता येतात. असे निर्बंध लागू कायदे आणि घटनात्मक अटींनुसार असणे आवश्यक आहे."
        },
        {
          heading: "शांततापूर्ण आंदोलनाबाबत सर्वोच्च न्यायालयाने काय सांगितले?",
          content: "Mazdoor Kisan Shakti Sangathan v. Union of India (2018) या प्रकरणात सर्वोच्च न्यायालयाने अनुच्छेद 19(1)(a) आणि 19(1)(b) अंतर्गत शांततापूर्ण निदर्शनांना मूलभूत अधिकाराचे संरक्षण असल्याचे मान्य केले. त्याच वेळी आंदोलनांचे नियमन आणि आंदोलक, परिसरातील रहिवासी व सर्वसामान्य नागरिक यांच्या हितातील संतुलन यांचाही विचार केला."
        },
        {
          heading: "ऑक्टोबर 2026 मध्ये जंतर-मंतर चर्चेत का आहे?",
          content: "दिल्ली पोलिसांनी जंतर-मंतरला अधिकृत आंदोलनस्थळांच्या यादीतून वगळून पर्यायी जागा निश्चित केल्या. 15 ऑक्टोबर 2026 रोजी या निर्णयाला आव्हान देणाऱ्या याचिकेवर सर्वोच्च न्यायालयाने केंद्र सरकार आणि दिल्ली पोलिसांना नोटीस बजावली. न्यायालयाने उत्तर मागितले; या नोटीसमुळे वादावर अंतिम निर्णय झालेला नाही."
        },
        {
          heading: "सर्वोच्च न्यायालयाने नोटीस दिली म्हणजे निर्णय झाला का?",
          content: "नाही. न्यायालयीन नोटीस म्हणजे संबंधित पक्षाला याचिकेतील मुद्द्यांवर उत्तर देण्यास सांगणे होय. केवळ नोटीस बजावल्याने आरोप मान्य झाले किंवा अंतिम न्यायनिर्णय दिला गेला, असा अर्थ होत नाही."
        }
      ]
    },
    faq: {
      en: [
        {
          question: "Is the right to protest a fundamental right in India?",
          answer: "Peaceful protest is protected through the fundamental rights under Article 19(1)(a), which covers freedom of speech and expression, and Article 19(1)(b), which covers peaceful assembly without arms. The rights are subject to constitutionally permitted reasonable restrictions."
        },
        {
          question: "Which constitutional Articles are relevant to peaceful protests?",
          answer: "Articles 19(1)(a) and 19(1)(b) protect freedom of expression and peaceful assembly. Articles 19(2) and 19(3) provide for specified reasonable restrictions on these freedoms."
        },
        {
          question: "Can police regulate a public protest?",
          answer: "Yes. Authorities may regulate protests under applicable laws to address public order and safety. The legal basis, circumstances and constitutional requirements are relevant when assessing a restriction."
        },
        {
          question: "What is the Jantar Mantar case about in October 2026?",
          answer: "The case challenges the decision to remove Jantar Mantar from the list of designated protest sites. On October 15, 2026, the Supreme Court issued notices to the Union government and Delhi Police seeking responses."
        },
        {
          question: "Does issuing a notice mean the Supreme Court has ruled in favour of the petitioner?",
          answer: "No. Issuing a notice is a procedural step that seeks a response from the other side. It does not establish the allegations or amount to a final judgment."
        },
        {
          question: "Which Supreme Court case discussed the right to peaceful protest?",
          answer: "Mazdoor Kisan Shakti Sangathan v. Union of India, decided on July 23, 2018, addressed peaceful protests, public order and the need to balance the rights of demonstrators with the interests of residents."
        }
      ],
      mr: [
        {
          question: "भारतात आंदोलन करण्याचा अधिकार हा मूलभूत अधिकार आहे का?",
          answer: "होय. शांततापूर्ण आंदोलनाला अनुच्छेद 19(1)(a) मधील अभिव्यक्तिस्वातंत्र्य आणि अनुच्छेद 19(1)(b) मधील शांततेने व शस्त्रांशिवाय एकत्र येण्याच्या अधिकारातून संरक्षण मिळते. हे अधिकार संविधानाने मान्य केलेल्या वाजवी निर्बंधांच्या अधीन आहेत."
        },
        {
          question: "शांततापूर्ण आंदोलनासाठी संविधानातील कोणती कलमे महत्त्वाची आहेत?",
          answer: "अनुच्छेद 19(1)(a) आणि 19(1)(b) अनुक्रमे अभिव्यक्तिस्वातंत्र्य आणि शांततापूर्ण एकत्र येण्याच्या अधिकाराशी संबंधित आहेत. अनुच्छेद 19(2) आणि 19(3) या अधिकारांवरील विशिष्ट वाजवी निर्बंधांची तरतूद करतात."
        },
        {
          question: "पोलीस सार्वजनिक आंदोलनाचे नियमन करू शकतात का?",
          answer: "होय. सार्वजनिक सुव्यवस्था आणि सुरक्षिततेसाठी लागू कायद्यांनुसार अधिकारी आंदोलनाचे नियमन करू शकतात. अशा निर्बंधांचे मूल्यमापन करताना त्यांचा कायदेशीर आधार, संबंधित परिस्थिती आणि घटनात्मक अटी विचारात घ्याव्या लागतात."
        },
        {
          question: "ऑक्टोबर 2026 मधील जंतर-मंतर प्रकरण काय आहे?",
          answer: "जंतर-मंतरला अधिकृत आंदोलनस्थळांच्या यादीतून वगळण्याच्या निर्णयाला या प्रकरणात आव्हान देण्यात आले आहे. 15 ऑक्टोबर 2026 रोजी सर्वोच्च न्यायालयाने केंद्र सरकार आणि दिल्ली पोलिसांना उत्तर देण्यासाठी नोटीस बजावली."
        },
        {
          question: "सर्वोच्च न्यायालयाने नोटीस दिली म्हणजे याचिकाकर्त्याच्या बाजूने निर्णय दिला का?",
          answer: "नाही. नोटीस बजावणे ही संबंधित पक्षाकडून उत्तर मागण्याची प्रक्रियात्मक पायरी आहे. त्यामुळे आरोप सिद्ध होत नाहीत आणि अंतिम न्यायनिर्णय दिला गेला असेही मानता येत नाही."
        },
        {
          question: "शांततापूर्ण आंदोलनाच्या अधिकाराबाबत सर्वोच्च न्यायालयाचे कोणते प्रकरण महत्त्वाचे आहे?",
          answer: "Mazdoor Kisan Shakti Sangathan v. Union of India या 23 जुलै 2018 रोजी दिलेल्या निर्णयात शांततापूर्ण आंदोलन, सार्वजनिक सुव्यवस्था आणि आंदोलक व रहिवाशांच्या अधिकारांतील संतुलन यांचा विचार करण्यात आला."
        }
      ]
    },
    mcqs: {
      en: [
        {
          question: "Which Article protects the right to assemble peacefully and without arms?",
          options: ["Article 14", "Article 19(1)(b)", "Article 21", "Article 32"],
          answer: "Article 19(1)(b)"
        },
        {
          question: "Which Article permits reasonable restrictions on peaceful assembly in the interests of public order?",
          options: ["Article 19(1)(a)", "Article 19(2)", "Article 19(3)", "Article 25"],
          answer: "Article 19(3)"
        },
        {
          question: "What did the Supreme Court do on October 15, 2026, in the Jantar Mantar dispute?",
          options: [
            "Delivered a final judgment restoring the site",
            "Issued notices seeking responses",
            "Amended Article 19",
            "Cancelled all public demonstrations"
          ],
          answer: "Issued notices seeking responses"
        },
        {
          question: "Which case discussed peaceful protest and public order in 2018?",
          options: [
            "Kesavananda Bharati v. State of Kerala",
            "Maneka Gandhi v. Union of India",
            "Mazdoor Kisan Shakti Sangathan v. Union of India",
            "Golaknath v. State of Punjab"
          ],
          answer: "Mazdoor Kisan Shakti Sangathan v. Union of India"
        }
      ],
      mr: [
        {
          question: "शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचा अधिकार कोणत्या अनुच्छेदात आहे?",
          options: ["अनुच्छेद 14", "अनुच्छेद 19(1)(b)", "अनुच्छेद 21", "अनुच्छेद 32"],
          answer: "अनुच्छेद 19(1)(b)"
        },
        {
          question: "सार्वजनिक सुव्यवस्थेसाठी शांततापूर्ण एकत्र येण्याच्या अधिकारावर वाजवी निर्बंध कोणत्या अनुच्छेदानुसार लागू होऊ शकतात?",
          options: ["अनुच्छेद 19(1)(a)", "अनुच्छेद 19(2)", "अनुच्छेद 19(3)", "अनुच्छेद 25"],
          answer: "अनुच्छेद 19(3)"
        },
        {
          question: "जंतर-मंतर प्रकरणात 15 ऑक्टोबर 2026 रोजी सर्वोच्च न्यायालयाने काय केले?",
          options: [
            "आंदोलनस्थळ पूर्ववत करण्याचा अंतिम निर्णय दिला",
            "उत्तर मागण्यासाठी नोटीस बजावली",
            "अनुच्छेद 19 मध्ये बदल केला",
            "सर्व सार्वजनिक आंदोलनांवर बंदी घातली"
          ],
          answer: "उत्तर मागण्यासाठी नोटीस बजावली"
        },
        {
          question: "2018 मध्ये शांततापूर्ण आंदोलन आणि सार्वजनिक सुव्यवस्थेचा विचार कोणत्या प्रकरणात झाला?",
          options: [
            "केशवानंद भारती विरुद्ध केरळ राज्य",
            "मनेका गांधी विरुद्ध भारत संघ",
            "Mazdoor Kisan Shakti Sangathan विरुद्ध भारत संघ",
            "गोलकनाथ विरुद्ध पंजाब राज्य"
          ],
          answer: "Mazdoor Kisan Shakti Sangathan विरुद्ध भारत संघ"
        }
      ]
    },
    source: {
      name: "The Indian Express; The Tribune; Supreme Court of India",
      url: "https://indianexpress.com/article/cities/delhi/jantar-mantar-denotified-protest-site-delhi-police-supreme-court-order-10920035/"
    },
    relatedSlugs: [],
    keywords: [
      "Right to Protest in India",
      "Article 19 Indian Constitution",
      "Right to Peaceful Assembly",
      "Public Order India",
      "Supreme Court Protest News",
      "Jantar Mantar Protest Site",
      "Mazdoor Kisan Shakti Sangathan Case",
      "आंदोलन करण्याचा अधिकार",
      "अनुच्छेद 19",
      "शांततापूर्ण आंदोलन",
      "सार्वजनिक सुव्यवस्था",
      "जंतर मंतर प्रकरण",
      "मूलभूत अधिकार",
      "भारतीय संविधान"
    ]
  }
];
function getCurrentAffairBySlug(slug) {
  return currentAffairs.find((item) => item.slug === slug);
}
const BREADCRUMB_TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_articles: "Articles",
    nav_current_affairs: "Current Affairs",
    nav_rights: "Fundamental Rights",
    nav_duties: "Fundamental Duties",
    nav_directive: "Directive Principles",
    nav_amendments: "Amendments",
    nav_quiz: "Quiz",
    nav_bookmarks: "Saved Articles",
    about_title: "About Samvidhan",
    contact_title: "Contact Us",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_disclaimer_title: "Disclaimer",
    nav_faq: "FAQ",
    nav_premium: "Premium",
    exam_title: "Exam Preparation",
    advanced_title: "Advanced Quiz",
    notes_title: "Premium Notes",
    dashboard_title: "Dashboard",
    progress_title: "My Progress",
    learn_title: "Learn Indian Constitution",
    search_button: "Search"
  },
  mr: {
    nav_home: "मुख्यपृष्ठ",
    nav_articles: "कलमे",
    nav_current_affairs: "चालू घडामोडी",
    nav_rights: "मूलभूत अधिकार",
    nav_duties: "मूलभूत कर्तव्ये",
    nav_directive: "मार्गदर्शक तत्त्वे",
    nav_amendments: "दुरुस्त्या",
    nav_quiz: "प्रश्नमंजुषा",
    nav_bookmarks: "जतन केलेली कलमे",
    about_title: "संविधान विषयी",
    contact_title: "आमच्याशी संपर्क साधा",
    footer_privacy: "गोपनीयता धोरण",
    footer_terms: "नियम आणि अटी",
    footer_disclaimer_title: "अस्वीकरण",
    nav_faq: "प्रश्नोत्तरे",
    nav_premium: "प्रीमियम",
    exam_title: "परीक्षा तयारी",
    advanced_title: "प्रगत प्रश्नमंजुषा",
    notes_title: "प्रीमियम नोंदी",
    dashboard_title: "डॅशबोर्ड",
    progress_title: "माझी प्रगती",
    learn_title: "भारतीय संविधान शिका",
    search_button: "शोधा"
  }
};
function translateBreadcrumb(key, language) {
  var _a2;
  return ((_a2 = BREADCRUMB_TRANSLATIONS[language]) == null ? void 0 : _a2[key]) || BREADCRUMB_TRANSLATIONS.en[key] || key;
}
const ROUTE_LABEL_KEYS = {
  "/articles": "nav_articles",
  "/current-affairs": "nav_current_affairs",
  "/fundamental-rights": "nav_rights",
  "/fundamental-duties": "nav_duties",
  "/directive-principles": "nav_directive",
  "/amendments": "nav_amendments",
  "/quiz": "nav_quiz",
  "/bookmarks": "nav_bookmarks",
  "/about": "about_title",
  "/contact": "contact_title",
  "/privacy": "footer_privacy",
  "/privacy-policy": "footer_privacy",
  "/terms": "footer_terms",
  "/disclaimer": "footer_disclaimer_title",
  "/faq": "nav_faq",
  "/premium": "nav_premium",
  "/exam-preparation": "exam_title",
  "/premium-quiz": "advanced_title",
  "/notes": "notes_title",
  "/dashboard": "dashboard_title",
  "/progress": "progress_title",
  "/learn": "learn_title"
};
const ROUTE_PARENT_KEYS = {
  "/exam-preparation": [["learn_title", "/learn"]],
  "/premium-quiz": [["nav_quiz", "/quiz"]],
  "/progress": [["dashboard_title", "/dashboard"]]
};
function getBreadcrumbItems(pathname, search, { language, t, pick }) {
  const translate = t || ((key) => translateBreadcrumb(key, language));
  if (pathname === "/") return [];
  const home = { label: translate("nav_home"), to: "/" };
  const articleMatch = pathname.match(/^\/article\/([^/]+)\/?$/);
  const affairMatch = pathname.match(/^\/current-affairs\/([^/]+)\/?$/);
  const article = articleMatch ? getArticleById(articleMatch[1]) : null;
  const currentAffair = affairMatch ? getCurrentAffairBySlug(affairMatch[1]) : null;
  const searchParams = new URLSearchParams(search);
  if (articleMatch) {
    return [
      home,
      { label: translate("nav_articles"), to: "/articles" },
      { label: article ? pick(article.title) : language === "mr" ? "कलम सापडले नाही" : "Article not found" }
    ];
  }
  if (affairMatch) {
    return [
      home,
      { label: translate("nav_current_affairs"), to: "/current-affairs" },
      { label: currentAffair ? pick(currentAffair.title) : language === "mr" ? "लेख सापडला नाही" : "Article not found" }
    ];
  }
  if (pathname === "/articles" && searchParams.has("q")) {
    return [home, { label: translate("search_button") }];
  }
  const labelKey = ROUTE_LABEL_KEYS[pathname];
  const parentItems = (ROUTE_PARENT_KEYS[pathname] || []).map(([key, to]) => ({
    label: translate(key),
    to
  }));
  return labelKey ? [home, ...parentItems, { label: translate(labelKey) }] : [home, { label: language === "mr" ? "पृष्ठ सापडले नाही" : "Page not found" }];
}
function Breadcrumbs() {
  const { pathname, search } = useLocation();
  const { language, pick, t } = useLanguage();
  if (pathname === "/") return null;
  const items = getBreadcrumbItems(pathname, search, { language, pick, t });
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "page-breadcrumbs", children: /* @__PURE__ */ jsx("ol", { className: "mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 sm:px-6", children: items.map((item, index) => {
    const isCurrent = index === items.length - 1;
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex min-w-0 max-w-full items-center gap-2",
        children: [
          index > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "shrink-0 text-navy/35", children: "›" }),
          item.to && !isCurrent ? /* @__PURE__ */ jsx(Link, { lang: language, to: item.to, className: "breadcrumb-link truncate", children: item.label }) : /* @__PURE__ */ jsx(
            "span",
            {
              lang: language,
              "aria-current": isCurrent ? "page" : void 0,
              className: `breadcrumb-current truncate${isCurrent ? " font-medium" : ""}`,
              title: item.label,
              children: item.label
            }
          )
        ]
      },
      `${item.to || item.label}-${index}`
    );
  }) }) });
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
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer mt-16 border-t border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.03]", children: [
    /* @__PURE__ */ jsx(Advertisement, { placement: "banner" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ChakraMark, { className: "h-6 w-6 text-navy dark:text-saffron" }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark", children: "SAMVIDHAN" })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              lang: language,
              className: "mt-3 max-w-sm text-base leading-7 text-ink/70 dark:text-ink-dark/70",
              children: t("footer_tagline")
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              lang: language,
              className: "mt-3 max-w-sm text-sm leading-6 text-ink/60 dark:text-ink-dark/60",
              children: language === "mr" ? "संविधान हे स्वतंत्र शैक्षणिक व्यासपीठ आहे." : "Samvidhan is an independent educational platform."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-navy dark:text-ink-dark", children: language === "mr" ? "आम्हाला फॉलो करा" : "Follow Us" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.facebook.com/profile.php?id=61593758717873",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Facebook",
                  className: "flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:border-saffron hover:text-saffron dark:border-ink-dark/10 dark:text-ink-dark",
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "h-5 w-5 fill-current",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsx("path", { d: "M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4Z" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.instagram.com/mysamvidhanofficial/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Instagram",
                  className: "flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:border-saffron hover:text-saffron dark:border-ink-dark/10 dark:text-ink-dark",
                  children: /* @__PURE__ */ jsxs(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "h-5 w-5 fill-none stroke-current",
                      strokeWidth: "1.8",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
                        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            cx: "17.5",
                            cy: "6.5",
                            r: "1",
                            className: "fill-current stroke-none"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
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
        /* @__PURE__ */ jsx(
          "h3",
          {
            lang: language,
            className: "text-base font-semibold text-navy dark:text-ink-dark",
            children: t("footer_disclaimer_title")
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "mt-2 max-w-4xl text-sm leading-6 text-ink/70 dark:text-ink-dark/70",
            children: t("footer_disclaimer")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center justify-between gap-3 border-t border-navy/10 pt-5 sm:flex-row dark:border-ink-dark/10", children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            lang: language,
            className: "text-xs text-ink/45 dark:text-ink-dark/45",
            children: t("footer_copyright")
          }
        ),
        /* @__PURE__ */ jsx(
          ChakraMark,
          {
            className: "h-5 w-5 text-navy/30 dark:text-ink-dark/25",
            spokes: 24
          }
        )
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
function Hero() {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const artwork = section == null ? void 0 : section.querySelector(".hero-art");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!section || !artwork || reducedMotion.matches || !finePointer.matches) return;
    let frame = 0;
    const layers = [
      ...artwork.querySelectorAll(".parliament-building, .hero-flag, .hero-book-stack, .constitution-book, .hero-ribbon")
    ];
    const reset = () => {
      layers.forEach((layer) => {
        layer.style.removeProperty("--parallax-x");
        layer.style.removeProperty("--parallax-y");
      });
    };
    const handlePointerMove = (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        layers.forEach((layer, index) => {
          const depth = index === 3 ? 14 : index < 3 ? 5 : 2;
          layer.style.setProperty("--parallax-x", `${x * depth}px`);
          layer.style.setProperty("--parallax-y", `${y * depth}px`);
        });
      });
    };
    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", reset);
    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
      reset();
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRef, className: "hero-section relative overflow-hidden border-b border-navy/10 dark:border-ink-dark/10", children: [
    /* @__PURE__ */ jsx(
      ChakraMark,
      {
        className: "hero-chakra pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] text-navy/[0.05] dark:text-saffron/[0.06] sm:-right-16 sm:-top-16",
        spokes: 24
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20", children: /* @__PURE__ */ jsxs("div", { className: "hero-layout", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsxs("span", { className: "hero-badge inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1.5 text-xs font-medium text-saffron-dark dark:text-saffron-light", children: [
          "🇮🇳 ",
          t("hero_badge")
        ] }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            lang: language,
            className: "hero-heading font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy dark:text-ink-dark sm:text-5xl lg:text-6xl",
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
            className: "hero-description mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-lg",
            children: t("hero_desc")
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/learn",
            lang: language,
            className: "hero-cta mt-5 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-saffron-dark",
            children: [
              t("learn_more"),
              " ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "hero-search mt-8 max-w-2xl", children: /* @__PURE__ */ jsx(SearchBar, { large: true }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-art", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("div", { className: "hero-art-glow" }),
        /* @__PURE__ */ jsx("div", { className: "hero-ribbon hero-ribbon-saffron" }),
        /* @__PURE__ */ jsx("div", { className: "hero-ribbon hero-ribbon-white" }),
        /* @__PURE__ */ jsx("div", { className: "hero-ribbon hero-ribbon-green" }),
        /* @__PURE__ */ jsx("div", { className: "hero-hill hero-hill-back" }),
        /* @__PURE__ */ jsx("div", { className: "hero-hill hero-hill-front" }),
        /* @__PURE__ */ jsxs("div", { className: "parliament-building", children: [
          /* @__PURE__ */ jsx("div", { className: "parliament-dome" }),
          /* @__PURE__ */ jsx("div", { className: "parliament-roof" }),
          /* @__PURE__ */ jsx("div", { className: "parliament-columns", children: Array.from({ length: 9 }, (_, index) => /* @__PURE__ */ jsx("span", {}, index)) }),
          /* @__PURE__ */ jsx("div", { className: "parliament-base" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-flag", children: [
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("b", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-book-stack", children: [
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("span", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "constitution-book", children: [
          /* @__PURE__ */ jsx("div", { className: "book-pages" }),
          /* @__PURE__ */ jsxs("div", { className: "book-cover", children: [
            /* @__PURE__ */ jsx("div", { className: "book-emblem", children: /* @__PURE__ */ jsx("span", {}) }),
            /* @__PURE__ */ jsxs("div", { className: "book-title-lines", children: [
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {})
            ] }),
            /* @__PURE__ */ jsx("div", { className: "book-rule" })
          ] })
        ] })
      ] })
    ] }) })
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
      className: "category-card group relative flex flex-col rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 transition-colors hover:border-saffron/40",
      children: [
        /* @__PURE__ */ jsx("div", { className: "category-card-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 dark:bg-white/10 text-navy dark:text-saffron-light", children: /* @__PURE__ */ jsx(DynamicIcon, { name: icon, size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display mt-4 text-lg font-semibold text-navy dark:text-ink-dark", children: pick(title) }),
        /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick(description) }),
        /* @__PURE__ */ jsx("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-saffron", children: /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "transition-transform group-hover:translate-x-1" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-6 bottom-0 h-px scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100" })
      ]
    }
  );
}
const categories = [
  {
    key: "fundamental-rights",
    icon: "Scale",
    title: { en: "Fundamental Rights", mr: "मूलभूत अधिकार" },
    description: {
      en: "Explore the selected Fundamental Rights provisions available on this site.",
      mr: "तुमचे मूलभूत अधिकार समजून घ्या."
    },
    path: "/articles?category=fundamental-rights"
  },
  {
    key: "citizenship",
    icon: "Users",
    title: { en: "Citizenship", mr: "नागरिकत्व" },
    description: {
      en: "Read the selected constitutional provision on citizenship.",
      mr: "भारताचा नागरिक कोण आहे आणि नागरिकत्व कसे कार्य करते."
    },
    path: "/articles?category=citizenship"
  },
  {
    key: "parliament",
    icon: "Landmark",
    title: { en: "Union Executive", mr: "केंद्राची कार्यपालिका" },
    description: {
      en: "Explore the selected Articles about the Union executive.",
      mr: "केंद्राच्या कार्यपालिकेशी संबंधित निवडक कलमे वाचा."
    },
    path: "/articles?category=parliament"
  },
  {
    key: "state-executive",
    icon: "Building2",
    title: { en: "State Executive", mr: "राज्याची कार्यपालिका" },
    description: {
      en: "Read selected constitutional provisions about State executive offices.",
      mr: "राज्याच्या कार्यकारी पदांशी संबंधित निवडक घटनात्मक तरतुदी वाचा."
    },
    path: "/articles?category=state-executive"
  },
  {
    key: "union-judiciary",
    icon: "Gavel",
    title: { en: "Union Judiciary", mr: "केंद्राची न्यायव्यवस्था" },
    description: {
      en: "Explore selected constitutional provisions about the Union judiciary.",
      mr: "केंद्राच्या न्यायव्यवस्थेशी संबंधित निवडक घटनात्मक तरतुदी वाचा."
    },
    path: "/articles?category=union-judiciary"
  },
  {
    key: "union-legislature",
    icon: "Landmark",
    title: { en: "Union Legislature", mr: "केंद्राची विधिमंडळ व्यवस्था" },
    description: {
      en: "Read selected Articles about Parliament and the Union Legislature.",
      mr: "संसद आणि केंद्राच्या विधिमंडळाशी संबंधित निवडक कलमे वाचा."
    },
    path: "/articles?category=union-legislature"
  },
  {
    key: "state-legislature",
    icon: "Building2",
    title: { en: "State Legislature", mr: "राज्य विधिमंडळ" },
    description: {
      en: "Explore the selected constitutional provisions about State Legislatures.",
      mr: "राज्य विधिमंडळाशी संबंधित निवडक घटनात्मक तरतुदी वाचा."
    },
    path: "/articles?category=state-legislature"
  },
  {
    key: "right-against-exploitation",
    icon: "ShieldOff",
    title: { en: "Right against Exploitation", mr: "शोषणाविरुद्धचा अधिकार" },
    description: {
      en: "Read the selected provisions concerning exploitation.",
      mr: "शोषणासंबंधी निवडक घटनात्मक तरतुदी वाचा."
    },
    path: "/articles?category=right-against-exploitation"
  },
  {
    key: "emergency-provisions",
    icon: "AlertTriangle",
    title: { en: "Emergency Provisions", mr: "आणीबाणी तरतुदी" },
    description: {
      en: "Explore the selected constitutional provisions on emergencies.",
      mr: "आणीबाणीविषयक निवडक घटनात्मक तरतुदी वाचा."
    },
    path: "/articles?category=emergency-provisions"
  },
  {
    key: "fundamental-duties",
    icon: "HeartHandshake",
    title: { en: "Fundamental Duties", mr: "मूलभूत कर्तव्ये" },
    description: {
      en: "Read the selected constitutional provision on Fundamental Duties.",
      mr: "मूलभूत कर्तव्यांवरील निवडक घटनात्मक तरतूद वाचा."
    },
    path: "/articles?category=fundamental-duties"
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
    icon: "Newspaper",
    title: { en: "Current Affairs", mr: "चालू घडामोडी" },
    description: {
      en: "Browse the updates published in the Current Affairs section.",
      mr: "चालू घडामोडी विभागात प्रकाशित केलेल्या बातम्या वाचा."
    },
    path: "/current-affairs"
  }
];
function getCategoryByKey(key) {
  return categories.find((c) => c.key === key);
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
      className: "article-card group flex rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] overflow-hidden transition-colors hover:border-saffron/40",
      children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: `/article/${article.id}`,
            tabIndex: -1,
            "aria-hidden": "true",
            className: "article-card-image hidden shrink-0 sm:block",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: `/images/articles/article-${article.id.toLowerCase()}.webp`,
                alt: "",
                width: "1200",
                height: "630",
                loading: "lazy",
                decoding: "async",
                className: "h-full w-full object-cover"
              }
            )
          }
        ),
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
function RecommendedBooks({ books: books2 }) {
  const { pick } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: "Reading list" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-3xl font-semibold text-navy dark:text-ink-dark", children: pick({
        en: "Recommended Books",
        mr: "शिफारस केलेली पुस्तके"
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: books2.map((book) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "flex gap-5 rounded-2xl border border-navy/10 bg-white/60 p-5 shadow-sm transition hover:shadow-md dark:border-ink-dark/10 dark:bg-white/[0.04]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-40 w-28 shrink-0 overflow-hidden rounded-lg bg-navy/[0.06] dark:bg-white/10", children: book.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: book.image,
              alt: pick(book.title),
              className: "h-full w-full object-cover",
              loading: "lazy"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center text-center text-[10px] text-ink/40 dark:text-ink-dark/40", children: "Book cover" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-saffron", children: [
              book.category,
              " · ",
              book.language
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display mt-1 font-semibold leading-snug text-navy dark:text-ink-dark", children: pick(book.title) }),
            book.author && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink/50 dark:text-ink-dark/50", children: book.author }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick(book.description) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center justify-between gap-3 pt-4", children: [
              book.price && /* @__PURE__ */ jsxs("p", { className: "text-lg font-bold text-navy dark:text-ink-dark", children: [
                "₹",
                book.price
              ] }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: book.affiliateUrl || void 0,
                  target: "_blank",
                  rel: "nofollow sponsored noopener noreferrer",
                  "aria-disabled": !book.affiliateUrl,
                  className: `inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition ${book.affiliateUrl ? "bg-saffron text-white hover:opacity-90" : "pointer-events-none bg-ink/10 text-ink/35"}`,
                  children: book.affiliateUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Buy Now",
                    /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
                  ] }) : "Link coming soon"
                }
              )
            ] })
          ] })
        ]
      },
      book.id
    )) })
  ] });
}
const faqs$1 = [
  {
    id: 1,
    question: {
      en: "What is the Constitution?",
      mr: "संविधान म्हणजे काय?"
    },
    answer: {
      en: "The Constitution of India is the supreme legal framework that defines the structure of government, powers of institutions, and rights and duties of citizens.",
      mr: "भारतीय संविधान हे भारताच्या शासनव्यवस्थेची रचना, संस्थांचे अधिकार तसेच नागरिकांचे अधिकार आणि कर्तव्ये निश्चित करणारे सर्वोच्च कायदेशीर दस्तऐवज आहे."
    }
  },
  {
    id: 2,
    question: {
      en: "When did the Constitution of India come into effect?",
      mr: "भारतीय संविधान कधी लागू झाले?"
    },
    answer: {
      en: "The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950.",
      mr: "भारतीय संविधान 26 नोव्हेंबर 1949 रोजी स्वीकारले गेले आणि 26 जानेवारी 1950 रोजी लागू झाले."
    }
  },
  {
    id: 3,
    question: {
      en: "How many Fundamental Rights are there?",
      mr: "मूलभूत अधिकार किती आहेत?"
    },
    answer: {
      en: "The Constitution currently provides six broad categories of Fundamental Rights under Part III.",
      mr: "भारतीय संविधानाच्या भाग III मध्ये सध्या मूलभूत अधिकारांच्या सहा प्रमुख श्रेणींची तरतूद आहे."
    }
  },
  {
    id: 4,
    question: {
      en: "What is the difference between an Article and an Amendment?",
      mr: "अनुच्छेद आणि घटनादुरुस्तीमध्ये काय फरक आहे?"
    },
    answer: {
      en: "An Article is a specific provision of the Constitution. An Amendment is a formal change made to the Constitution through the constitutional amendment process.",
      mr: "अनुच्छेद हा संविधानातील विशिष्ट तरतूद आहे. घटनादुरुस्ती म्हणजे संविधानातील तरतुदीत घटनात्मक प्रक्रियेद्वारे केलेला अधिकृत बदल."
    }
  },
  {
    id: 5,
    question: {
      en: "How is the Constitution of India structured?",
      mr: "भारतीय संविधानाची रचना कशी आहे?"
    },
    answer: {
      en: "The Constitution is organised into Parts, Articles and Schedules covering different aspects of India's constitutional and governance system.",
      mr: "भारतीय संविधानाची रचना विविध भाग, अनुच्छेद आणि अनुसूचींमध्ये करण्यात आली आहे. यामध्ये भारताच्या घटनात्मक आणि शासनव्यवस्थेशी संबंधित विविध विषयांचा समावेश आहे."
    }
  },
  {
    id: 6,
    question: {
      en: "Who drafted the Constitution of India?",
      mr: "भारतीय संविधान कोणी तयार केले?"
    },
    answer: {
      en: "The Constitution was framed by the Constituent Assembly. Dr. B. R. Ambedkar chaired the Drafting Committee.",
      mr: "भारतीय संविधानाची निर्मिती संविधान सभेने केली. डॉ. बाबासाहेब आंबेडकर हे मसुदा समितीचे अध्यक्ष होते."
    }
  }
];
function FAQSection() {
  const { pick } = useLanguage();
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId((current) => current === id ? null : id);
  };
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-saffron", children: pick({
        en: "Common Questions",
        mr: "सामान्य प्रश्न"
      }) }),
      /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick({
        en: "Frequently Asked Questions",
        mr: "वारंवार विचारले जाणारे प्रश्न"
      }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: pick({
        en: "Quick answers to common questions about the Constitution of India.",
        mr: "भारतीय संविधानाबद्दलच्या सामान्य प्रश्नांची सोप्या भाषेत उत्तरे."
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: faqs$1.map((faq) => {
      const isOpen = openId === faq.id;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "overflow-hidden rounded-2xl border border-navy/10 bg-white/60 dark:border-ink-dark/10 dark:bg-white/[0.04]",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => toggleFAQ(faq.id),
                "aria-expanded": isOpen,
                className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-navy dark:text-ink-dark", children: pick(faq.question) }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      size: 20,
                      className: `shrink-0 text-saffron transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsx("div", { className: "border-t border-navy/10 px-5 py-4 dark:border-ink-dark/10", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-ink/65 dark:text-ink-dark/65", children: pick(faq.answer) }) })
          ]
        },
        faq.id
      );
    }) })
  ] });
}
const books = [
  {
    id: "book-constitution-marathi",
    title: {
      en: "The Constitution of India",
      mr: "भारताचे संविधान"
    },
    author: "Dr. Babasaheb Ambedkar",
    description: {
      en: "The Constitution of India in Marathi, updated up to the 106th Constitutional Amendment, including the amendment related to Article 370.",
      mr: "भारताचे संविधान — 106व्या घटनादुरुस्तीपर्यंत अद्ययावत आवृत्ती, अनुच्छेद 370 संदर्भातील सुधारणेसह."
    },
    image: "/images/books/bharatache-sanvidhan.jpg",
    price: 430,
    affiliateUrl: "https://link.amazon/B0c3E6ZnQ",
    category: "Indian Constitution",
    language: "Marathi"
  },
  {
    id: "book-polity-marathi",
    title: {
      en: "Indian Polity — 8th Edition",
      mr: "भारतीय राजव्यवस्था — 8वी आवृत्ती"
    },
    author: "M. Laxmikanth",
    description: {
      en: "Marathi edition for UPSC and MPSC exams, featuring 95 well-structured chapters, 40+ conceptual videos, 18 appendices and solved MPSC PYQs.",
      mr: "UPSC आणि MPSC परीक्षांसाठी मराठी आवृत्ती. 95 सुव्यवस्थित प्रकरणे, 40+ संकल्पनात्मक व्हिडिओ, 18 परिशिष्टे आणि सोडवलेले MPSC PYQs यांचा समावेश."
    },
    image: "/images/books/upsc.jpg",
    price: 641,
    affiliateUrl: "https://link.amazon/B06aGhdJp",
    category: "UPSC / MPSC",
    language: "Marathi"
  }
];
const FEATURED_IDS = ["14", "19", "21", "21A", "32"];
function Home() {
  const { t, pick, language } = useLanguage();
  const fact = getTodaysFact();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  const featured = FEATURED_IDS.map((id) => articles.find((a) => a.id === id)).filter(Boolean);
  const recentAffairs = [...currentAffairs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Advertisement, { placement: "banner" }),
    /* @__PURE__ */ jsxs("section", { "data-reveal": true, className: "scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("explore_heading") }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: exploreCards.map((card) => /* @__PURE__ */ jsx(CategoryCard, { ...card }, card.path)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { "data-reveal": true, className: "scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 pb-14", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark sm:text-3xl", children: language === "mr" ? "अभ्यासाची सुरुवात कशी कराल?" : "A simple way to get started" }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: language === "mr" ? "उपलब्ध शैक्षणिक साधनांमधून विषय निवडा, संबंधित कलमांचे स्पष्टीकरण वाचा आणि शेवटी प्रश्नमंजुषेतून स्वतःची उजळणी करा." : "Choose a topic from the available study guides, read the related Article explanations, and use the quiz to review what you have learned." }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-3 sm:grid-cols-3", children: [
        {
          path: "/fundamental-rights",
          title: { en: "1. Start with a topic", mr: "१. विषय निवडा" },
          text: { en: "Begin with Fundamental Rights, Duties or Directive Principles.", mr: "मूलभूत अधिकार, कर्तव्ये किंवा मार्गदर्शक तत्त्वांपासून सुरुवात करा." }
        },
        {
          path: "/articles",
          title: { en: "2. Read selected Articles", mr: "२. निवडक कलमे वाचा" },
          text: { en: "Use the Article list to open the explanations currently available on the site.", mr: "संकेतस्थळावर सध्या उपलब्ध असलेली कलमांची स्पष्टीकरणे वाचण्यासाठी यादी वापरा." }
        },
        {
          path: "/quiz",
          title: { en: "3. Review with the quiz", mr: "३. प्रश्नमंजुषेतून उजळणी करा" },
          text: { en: "Answer the quiz questions and check your score at the end.", mr: "प्रश्नमंजुषेतील प्रश्न सोडवा आणि शेवटी आपला गुणांक पाहा." }
        }
      ].map((step) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: step.path,
          className: "rounded-2xl border border-navy/10 bg-white/60 p-5 transition-colors hover:border-gold/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:border-ink-dark/10 dark:bg-white/[0.04]",
          children: [
            /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display text-base font-semibold text-navy dark:text-ink-dark", children: pick(step.title) }),
            /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: pick(step.text) })
          ]
        },
        step.path
      )) })
    ] }),
    /* @__PURE__ */ jsx(RecommendedBooks, { books }),
    /* @__PURE__ */ jsx("section", { "data-reveal": true, className: "scroll-reveal border-y border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.02]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20", children: [
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
    recentAffairs.length > 0 && /* @__PURE__ */ jsxs("section", { "data-reveal": true, className: "scroll-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: t("nav_current_affairs") }) }),
        /* @__PURE__ */ jsxs(Link, { to: "/current-affairs", className: "inline-flex items-center gap-1.5 text-sm font-medium text-saffron", children: [
          t("view_all_articles"),
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-7 grid gap-4 md:grid-cols-3", children: recentAffairs.map((article) => /* @__PURE__ */ jsx(CurrentAffairsCard, { article }, article.id)) })
    ] }),
    /* @__PURE__ */ jsx("section", { "data-reveal": true, className: "scroll-reveal mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "quiz-invitation flex flex-col gap-5 rounded-2xl border border-gold/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold", children: /* @__PURE__ */ jsx(BookOpenCheck, { size: 22 }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark sm:text-2xl", children: t("quiz_title") }) })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/quiz",
          lang: language,
          className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-light",
          children: [
            t("quiz_start"),
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(FAQSection, {}),
    /* @__PURE__ */ jsx("section", { "data-reveal": true, className: "scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 dark:bg-white/[0.02]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6 sm:flex-row sm:items-center sm:p-8", children: [
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
  "/articles": { title: { en: "Selected Constitutional Article Explanations | Samvidhan", mr: "निवडक संवैधानिक कलमांची स्पष्टीकरणे | संविधान" }, description: { en: "Search a selection of Indian Constitution Articles and read clear, simplified explanations in English and Marathi.", mr: "भारतीय संविधानातील निवडक कलमे शोधा आणि मराठी व इंग्रजीत सोपी स्पष्टीकरणे वाचा." }, priority: "0.9", changefreq: "weekly" },
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
  "/privacy-policy": { title: { en: "Privacy Policy | Samvidhan", mr: "गोपनीयता धोरण | संविधान" }, description: { en: "Read the Samvidhan Privacy Policy covering information, cookies, analytics and advertising.", mr: "माहिती, कुकीज, विश्लेषण आणि जाहिरातींसंबंधी संविधानचे गोपनीयता धोरण वाचा." }, indexable: false },
  "/terms": { title: { en: "Terms & Conditions | Samvidhan", mr: "नियम आणि अटी | संविधान" }, description: { en: "Read the Samvidhan Terms and Conditions for using this educational website.", mr: "या शैक्षणिक वेबसाइटच्या वापरासाठी संविधानचे नियम आणि अटी वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/disclaimer": { title: { en: "Disclaimer | Samvidhan", mr: "अस्वीकरण | संविधान" }, description: { en: "Read the Samvidhan educational and informational content disclaimer.", mr: "संविधानच्या शैक्षणिक आणि माहितीपर सामग्रीचे अस्वीकरण वाचा." }, priority: "0.3", changefreq: "yearly" },
  "/learn": { title: { en: "Learn Indian Constitution | Samvidhan", mr: "भारतीय संविधान शिका | संविधान" }, description: { en: "Learn the Indian Constitution through guided Articles, Rights and exam preparation paths.", mr: "मार्गदर्शित कलमे, अधिकार आणि परीक्षा तयारीच्या माध्यमातून भारतीय संविधान शिका." }, priority: "0.8", changefreq: "monthly" },
  "/exam-preparation": { title: { en: "Exam Preparation | Samvidhan", mr: "परीक्षा तयारी | संविधान" }, description: { en: "Prepare for MPSC and UPSC Constitution and polity examinations.", mr: "MPSC आणि UPSC संविधान व राज्यशास्त्र परीक्षांची तयारी करा." }, priority: "0.7", changefreq: "monthly" },
  "/premium": { title: { en: "Samvidhan Premium | Learn Better", mr: "संविधान प्रीमियम | अधिक चांगले शिका" }, description: { en: "Explore structured constitutional revision, advanced practice and exam preparation.", mr: "संरचित संविधान उजळणी, प्रगत सराव आणि परीक्षा तयारीचा अनुभव घ्या." }, indexable: false },
  "/article/:id": { indexable: true, changefreq: "monthly", priority: "0.7" },
  "/dashboard": { title: { en: "Learning Dashboard | Samvidhan", mr: "अध्ययन डॅशबोर्ड | संविधान" }, description: { en: "Review saved Articles and the learning dashboard features available on Samvidhan.", mr: "Samvidhan वरील जतन केलेली कलमे आणि अध्ययन डॅशबोर्डची उपलब्ध वैशिष्ट्ये पाहा." }, indexable: false },
  "/progress": { title: { en: "Learning Progress | Samvidhan", mr: "अध्ययन प्रगती | संविधान" }, description: { en: "View the learning progress indicators and practice summaries available on Samvidhan.", mr: "Samvidhan वरील अध्ययन प्रगती निर्देशक आणि सराव सारांश पाहा." }, indexable: false },
  "/premium-quiz": { title: { en: "Advanced Quiz | Samvidhan", mr: "प्रगत प्रश्नमंजुषा | संविधान" }, description: { en: "Explore the advanced quiz interface and its topic and difficulty controls.", mr: "प्रगत प्रश्नमंजुषेचा इंटरफेस आणि विषय व कठीणता निवडीचे पर्याय पाहा." }, indexable: false },
  "/notes": { title: { en: "Revision Notes | Samvidhan", mr: "उजळणीच्या नोंदी | संविधान" }, description: { en: "Browse the revision note cards currently available on Samvidhan.", mr: "Samvidhan वर सध्या उपलब्ध असलेल्या उजळणीच्या नोंदी पहा." }, indexable: false },
  "/bookmarks": { title: { en: "Saved Articles | Samvidhan", mr: "जतन केलेली कलमे | संविधान" }, description: { en: "View the Constitution Articles saved in this browser.", mr: "या ब्राउझरमध्ये जतन केलेली संविधानातील कलमे पाहा." }, indexable: false }
};
function getSeoRoute(pathname) {
  if (seoRoutes[pathname]) return seoRoutes[pathname];
  if (pathname.startsWith("/article/")) return seoRoutes["/article/:id"];
  if (pathname.startsWith("/current-affairs/")) return { indexable: true, changefreq: "daily", priority: "0.7" };
  return { title: { en: siteConfig.defaultTitle, mr: "संविधान | भारताचे संविधान समजून घ्या" }, description: { en: siteConfig.defaultDescription, mr: "भारतीय संविधानाबद्दल सोप्या भाषेत जाणून घ्या." }, indexable: false };
}
const __vite_import_meta_env__$1 = {};
const SITE_URL$1 = ((__vite_import_meta_env__$1 == null ? void 0 : __vite_import_meta_env__$1.VITE_SITE_URL) || (typeof process !== "undefined" ? (_a = process.env) == null ? void 0 : _a.VITE_SITE_URL : "") || siteConfig.url).replace(/\/+$/, "");
function getCanonicalUrl(pathname) {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return `${SITE_URL$1}${cleanPath}`;
}
function getSeoMetadata(pathname, language, overrides = {}) {
  var _a2, _b2, _c, _d;
  const route = getSeoRoute(pathname);
  const article = pathname.startsWith("/article/") ? getArticleById(pathname.split("/").pop()) : null;
  const currentAffair = pathname.startsWith("/current-affairs/") ? getCurrentAffairBySlug(pathname.split("/").pop()) : null;
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const isFilteredArticleList = cleanPath === "/articles" && Boolean(overrides.search);
  let title = "";
  let description = "";
  let ogType = "website";
  let image = `${SITE_URL$1}/images/mysamvidhan-logo.svg`;
  let imageAlt = siteConfig.name;
  if (article) {
    const number = String(article.articleNumber || "").replace(/^article\s*/i, "").replace(/^कलम\s*/i, "").trim();
    const articleTitle = language === "mr" ? article.title.mr : article.title.en;
    title = language === "mr" ? `कलम ${number} – ${articleTitle} | MySamvidhan` : `Article ${number} – ${articleTitle} | MySamvidhan`;
    description = language === "mr" ? `भारतीय संविधानातील कलम ${number} सोप्या मराठीत आणि इंग्रजीत समजून घ्या. ${articleTitle}चा अर्थ, प्रमुख तरतुदी, उदाहरणे आणि महत्त्व जाणून घ्या.` : `Learn about Article ${number} of the Indian Constitution in simple English and Marathi. Understand its meaning, key provisions, examples and importance.`;
    image = `${SITE_URL$1}/images/articles/article-${String(article.id).toLowerCase()}.webp`;
    imageAlt = `${article.articleNumber} — ${articleTitle}`;
    ogType = "article";
  } else if (currentAffair) {
    title = language === "mr" ? ((_a2 = currentAffair.seoTitle) == null ? void 0 : _a2.mr) || currentAffair.title.mr : ((_b2 = currentAffair.seoTitle) == null ? void 0 : _b2.en) || currentAffair.title.en;
    description = language === "mr" ? currentAffair.shortDescription.mr : currentAffair.shortDescription.en;
    ogType = "article";
  } else if (((_c = seoRoutes[cleanPath]) == null ? void 0 : _c.title) && ((_d = seoRoutes[cleanPath]) == null ? void 0 : _d.description)) {
    title = language === "mr" ? route.title.mr : route.title.en;
    description = language === "mr" ? route.description.mr : route.description.en;
  } else {
    title = language === "mr" ? "पृष्ठ सापडले नाही | MySamvidhan" : "Page Not Found | MySamvidhan";
    description = language === "mr" ? "विनंती केलेले पृष्ठ सापडले नाही." : "The requested page could not be found.";
  }
  const canonicalUrl = getCanonicalUrl(pathname);
  const isUnknownDetail = pathname.startsWith("/article/") && !article || pathname.startsWith("/current-affairs/") && !currentAffair;
  const robots = overrides.robots || (isUnknownDetail || route.indexable === false || isFilteredArticleList ? "noindex, follow" : "index, follow");
  return {
    title: overrides.title || title,
    description: overrides.description || description,
    canonicalUrl: overrides.canonical ? getCanonicalUrl(overrides.canonical) : canonicalUrl,
    robots,
    ogType,
    image,
    imageAlt,
    language,
    indexable: robots.startsWith("index"),
    article,
    currentAffair
  };
}
function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}
function PageMeta(overrides = {}) {
  const { pathname, search } = useLocation();
  const { language } = useLanguage();
  useEffect(() => {
    var _a2, _b2, _c;
    const metadata = getSeoMetadata(pathname, language, { ...overrides, search });
    const lang = language === "mr" ? "mr-IN" : "en-IN";
    document.title = metadata.title;
    document.documentElement.lang = lang;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", metadata.robots);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:type", metadata.ogType);
    setMeta("property", "og:url", metadata.canonicalUrl);
    setMeta("property", "og:site_name", "Samvidhan");
    setMeta("property", "og:image", metadata.image);
    setMeta("property", "og:image:alt", metadata.imageAlt);
    setMeta("property", "og:locale", lang.replace("-", "_"));
    setMeta("name", "twitter:card", metadata.ogType === "article" ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", metadata.image);
    setMeta("name", "twitter:image:alt", metadata.imageAlt);
    setLink("canonical", metadata.canonicalUrl);
    if ((_b2 = (_a2 = metadata.article) == null ? void 0 : _a2.keywords) == null ? void 0 : _b2.length) {
      setMeta("name", "keywords", metadata.article.keywords.join(", "));
    } else {
      (_c = document.head.querySelector('meta[name="keywords"]')) == null ? void 0 : _c.remove();
    }
  }, [pathname, search, language, overrides.title, overrides.description, overrides.canonical, overrides.robots]);
  return null;
}
const constitutionSource = {
  url: "https://www.legislative.gov.in/documents",
  title: {
    en: "Constitution of India and Amendment Acts — Legislative Department, Government of India",
    mr: "भारताचे संविधान आणि दुरुस्ती अधिनियम — विधायी विभाग, भारत सरकार"
  },
  note: {
    en: "Use the official documents for the authoritative text; the explanations on this site are educational summaries.",
    mr: "अधिकृत मजकुरासाठी सरकारी दस्तऐवज पाहा; या संकेतस्थळावरील स्पष्टीकरणे शैक्षणिक सारांश आहेत."
  }
};
function OfficialSourceLink() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("aside", { className: "mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-5", children: [
    /* @__PURE__ */ jsx("p", { lang: language, className: "text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(constitutionSource.note) }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: constitutionSource.url,
        target: "_blank",
        rel: "noopener noreferrer",
        lang: language,
        className: "mt-3 inline-flex items-start gap-2 text-sm font-medium text-navy underline decoration-gold/70 underline-offset-4 hover:text-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron dark:text-ink-dark",
        children: [
          /* @__PURE__ */ jsx("span", { children: pick(constitutionSource.title) }),
          /* @__PURE__ */ jsx(ExternalLink, { size: 15, "aria-hidden": "true", className: "mt-0.5 shrink-0" })
        ]
      }
    )
  ] });
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
      ),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-4xl text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: language === "mr" ? "या पृष्ठावर सध्या उपलब्ध असलेल्या निवडक कलमांची सोपी स्पष्टीकरणे आहेत; ही संविधानाची संपूर्ण किंवा अधिकृत शब्दशः प्रत नाही." : "This page provides simplified explanations for a selection of Articles currently available here; it is not the complete or authoritative verbatim text of the Constitution." })
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
    results.length === 0 && /* @__PURE__ */ jsxs("section", { className: "mt-12 rounded-2xl border border-navy/10 bg-white/60 p-6 text-center dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsx("p", { lang: language, className: "text-sm text-ink/65 dark:text-ink-dark/65", children: t("no_results") }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60", children: language === "mr" ? "शोधातील शब्द बदलून पाहा, सर्व उपलब्ध कलमे ब्राउझ करा किंवा विषयानुसार मूलभूत अधिकार वाचा." : "Try different search terms, browse all available Article explanations, or explore the Fundamental Rights guide." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/articles", className: "rounded-full bg-navy px-4 py-2 text-sm font-medium text-paper hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron", children: language === "mr" ? "सर्व उपलब्ध कलमे" : "Browse available Articles" }),
        /* @__PURE__ */ jsx(Link, { to: "/fundamental-rights", className: "rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy hover:border-saffron/60 hover:text-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:border-ink-dark/20 dark:text-ink-dark", children: language === "mr" ? "मूलभूत अधिकार" : "Fundamental Rights" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(OfficialSourceLink, {})
  ] });
}
const clean = (value = "") => String(value).replace(/\s+/g, " ").trim();
const unique = (items) => [
  ...new Set(
    items.map(clean).filter(Boolean)
  )
];
function generateArticleSEO(article) {
  var _a2, _b2;
  if (!article) return null;
  const rawArticleNumber = clean(article.articleNumber || "");
  const number = rawArticleNumber.replace(/^article\s*/i, "").replace(/^कलम\s*/i, "").trim();
  const englishTitle = clean(
    typeof article.title === "object" ? (_a2 = article.title) == null ? void 0 : _a2.en : article.title
  );
  const marathiTitle = clean(
    typeof article.title === "object" ? (_b2 = article.title) == null ? void 0 : _b2.mr : ""
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
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
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
  const articleImage = `/images/articles/article-${String(article.id).toLowerCase()}.webp`;
  const englishFAQs = [
    {
      question: `What is ${englishArticle} of the Indian Constitution?`,
      answer: ((_a2 = article.simpleExplanation) == null ? void 0 : _a2.en) || ((_b2 = article.verySimple) == null ? void 0 : _b2.en) || ""
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
    /* @__PURE__ */ jsxs("div", { className: "article-reading mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16", children: [
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
      /* @__PURE__ */ jsx("div", { className: "mt-8 overflow-hidden rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] shadow-sm", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: articleImage,
          alt: language === "mr" ? `${marathiArticle} - ${pick(article.title)}` : `${englishArticle} - ${pick(article.title)}`,
          width: "1200",
          height: "630",
          loading: "eager",
          decoding: "async",
          className: "h-auto w-full object-cover"
        }
      ) }),
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
      en: "Covers freedoms such as speech and expression, peaceful assembly, movement, and the right to practise any profession, subject to reasonable restrictions. Article 21A, also included among the selected provisions here, concerns free and compulsory education for children aged six to fourteen.",
      mr: "भाषण व अभिव्यक्ती स्वातंत्र्य, शांततापूर्ण संमेलन, संचार आणि कोणताही व्यवसाय करण्याचा अधिकार यांचा समावेश करते, वाजवी निर्बंधांच्या अधीन राहून. येथे समाविष्ट केलेले कलम २१अ सहा ते चौदा वर्षे वयोगटातील मुलांच्या मोफत व सक्तीच्या शिक्षणाशी संबंधित आहे."
    },
    articleIds: ["19", "21", "21A"]
  },
  {
    id: "right-against-exploitation",
    icon: "ShieldOff",
    title: { en: "Right against Exploitation", mr: "शोषणाविरुद्धचा अधिकार" },
    explanation: {
      en: "Prohibits human trafficking, forced labour, and the employment of children in hazardous work.",
      mr: "मानवी तस्करी, वेठबिगारी आणि बालकांना धोकादायक कामांवर नियुक्त करण्यास प्रतिबंध करते."
    },
    articleIds: ["23", "24"]
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
    articleIds: []
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
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: language === "mr" ? "खालील सहा गटांतील स्पष्टीकरणे निवडक कलमांचा अभ्यास करण्यासाठीची संक्षिप्त माहिती आहेत; ती संविधानाचा संपूर्ण किंवा शब्दशः मजकूर नाहीत. प्रत्येक अधिकाराची व्याप्ती आणि लागू अटी संबंधित कलमांनुसार बदलतात." : "The six groups below are concise study guides to selected provisions, not the complete or verbatim text of the Constitution. The scope and applicable conditions of each right depend on the relevant Articles." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: fundamentalRights.map((right) => {
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
    }) }),
    /* @__PURE__ */ jsx(OfficialSourceLink, {})
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
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: language === "mr" ? "मूलभूत कर्तव्ये संविधानाच्या भाग IV-अ मधील कलम ५१अ मध्ये नमूद आहेत. खालील मांडणी अभ्यासासाठी सोप्या शब्दांत आहे; ती अधिकृत मजकुराची शब्दशः प्रत नाही. भाग IV-अ ४२व्या घटनादुरुस्तीने समाविष्ट झाला; शिक्षणाच्या संधीशी संबंधित खंड (k) ८६व्या घटनादुरुस्तीने जोडला." : "Fundamental Duties are set out in Article 51A in Part IV-A of the Constitution. The wording below is a simplified study aid, not a verbatim reproduction. Part IV-A was added by the 42nd Amendment; clause (k), concerning educational opportunities, was added by the 86th Amendment." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: fundamentalDuties.map((duty) => /* @__PURE__ */ jsxs(
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
    )) }),
    /* @__PURE__ */ jsx(OfficialSourceLink, {})
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
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]", children: [
      /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-lg font-semibold text-navy dark:text-ink-dark", children: language === "mr" ? "निवडक कलमांशी परिचय" : "A guide to selected Articles" }),
      /* @__PURE__ */ jsx("p", { lang: language, className: "mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: language === "mr" ? "ही उदाहरणे भाग IV मधील काही विषय दाखवतात; ती संपूर्ण यादी नाही." : "These examples point to a few themes in Part IV; they are not an exhaustive list." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:grid-cols-2", children: (language === "mr" ? [
        "कलम ३८ — लोककल्याणासाठी सामाजिक व्यवस्था प्रस्थापित करण्याचा राज्याचा प्रयत्न.",
        "कलम ३९अ — समान न्याय आणि मोफत कायदेशीर मदतीची तरतूद करण्याचे राज्याचे उद्दिष्ट.",
        "कलम ४० — ग्रामपंचायतींचे संघटन आणि त्यांना स्वशासनाची आवश्यक सत्ता देण्याचा प्रयत्न.",
        "कलम ४८अ — पर्यावरण, वने आणि वन्यजीवांचे संरक्षण व सुधारणा."
      ] : [
        "Article 38 — the State’s endeavour to promote a social order informed by the welfare of the people.",
        "Article 39A — the State’s aim to provide equal justice and free legal aid.",
        "Article 40 — the State’s endeavour to organise village panchayats and endow them with necessary powers.",
        "Article 48A — protection and improvement of the environment, forests and wildlife."
      ]).map((item) => /* @__PURE__ */ jsx("li", { lang: language, children: item }, item)) })
    ] }),
    /* @__PURE__ */ jsx(OfficialSourceLink, {})
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
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: language === "mr" ? "खाली काही निवडक घटनादुरुस्त्यांचा परिचय दिला आहे; ही संपूर्ण यादी नाही. येथे दिलेली संक्षिप्त माहिती प्राथमिक अभ्यासासाठी असून, अचूक कायदेशीर मजकूर आणि परिणामांसाठी अधिकृत दुरुस्ती अधिनियम तपासा." : "This page introduces a selection of constitutional amendments; it is not a complete list. These brief summaries are for initial study. Consult the official Amendment Acts for authoritative text and legal effect." }),
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
    )) }),
    /* @__PURE__ */ jsx(OfficialSourceLink, {})
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
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/articles",
          lang: language,
          className: "ml-3 inline-flex items-center rounded-full border border-navy/15 px-6 py-3 text-sm font-medium text-navy hover:border-saffron/60 hover:text-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:border-ink-dark/20 dark:text-ink-dark",
          children: language === "mr" ? "कलमांचा अभ्यास करा" : "Explore the Articles"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-2xl font-semibold text-navy dark:text-ink-dark sm:text-3xl", children: t("quiz_title") }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65", children: language === "mr" ? `या प्रश्नमंजुषेत ${quizData.length} प्रश्न एकावेळी एक दाखवले जातात. उत्तर निवडल्यानंतर लगेच अभिप्राय मिळतो; सर्व प्रश्न पूर्ण केल्यावर गुणांक पाहता येतो. प्रश्न या साधनात समाविष्ट केलेल्या निवडक विषयांवर आहेत.` : `This quiz presents ${quizData.length} questions one at a time. Selecting an answer shows immediate feedback; complete the questions to see your score. Questions cover selected topics included in this quiz.` }),
    /* @__PURE__ */ jsx(Link, { to: "/articles", lang: language, className: "mt-3 inline-flex text-sm font-medium text-saffron underline underline-offset-4 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:hover:text-ink-dark", children: language === "mr" ? "कलमांचे स्पष्टीकरण वाचा" : "Read the Article explanations" }),
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
const aboutContent = {
  title: { en: "About Samvidhan", mr: "संविधानाविषयी" },
  sections: [
    {
      id: "welcome",
      paragraphs: [
        {
          en: "Welcome to Samvidhan — an independent educational platform dedicated to making the Constitution of India simple, accessible, and easy to understand for everyone.",
          mr: "Samvidhan मध्ये तुमचे स्वागत आहे! भारतीय संविधान सोप्या, सुलभ आणि समजण्यास सोप्या भाषेत सर्वांपर्यंत पोहोचवण्याच्या उद्देशाने तयार केलेले हे एक स्वतंत्र शैक्षणिक व्यासपीठ आहे."
        },
        {
          en: "The Constitution of India provides the framework for the country’s democratic system, establishes the structure of government, and defines important rights, duties, and principles. Understanding the Constitution helps citizens learn about their rights, understand public institutions, and participate more thoughtfully in civic life.",
          mr: "भारतीय संविधान हे देशाच्या लोकशाही व्यवस्थेचा पाया आहे. ते शासनव्यवस्थेची रचना निश्चित करते आणि महत्त्वाचे हक्क, कर्तव्ये व तत्त्वे स्पष्ट करते. संविधान समजून घेतल्यामुळे नागरिकांना आपल्या हक्कांची माहिती मिळू शकते, सार्वजनिक संस्थांची भूमिका समजते आणि नागरी जीवनात अधिक जागरूकपणे सहभागी होता येते."
        },
        {
          en: "Our goal is to present constitutional information in a clear, structured, and approachable format so that learners can explore the Constitution without feeling overwhelmed by complex legal language.",
          mr: "कठीण कायदेशीर भाषा समजून घेण्यात अडचण येऊ नये, यासाठी घटनात्मक माहिती स्पष्ट, व्यवस्थित आणि समजण्यास सोप्या स्वरूपात सादर करणे हा आमचा उद्देश आहे."
        },
        {
          en: "Whether you are a student, a competitive examination aspirant, a teacher, or a curious citizen, Samvidhan aims to help you build a better understanding of India’s constitutional framework.",
          mr: "तुम्ही विद्यार्थी असाल, स्पर्धा परीक्षेची तयारी करत असाल, शिक्षक असाल किंवा संविधानाबद्दल जाणून घेण्याची इच्छा असलेले नागरिक असाल, तर भारतीय संविधानाची अधिक चांगली समज विकसित करण्यासाठी Samvidhan मदत करण्याचा प्रयत्न करते."
        }
      ]
    },
    {
      id: "mission",
      title: { en: "Our Mission", mr: "आमचे ध्येय" },
      paragraphs: [
        {
          en: "The Constitution is a fundamental part of India’s democracy and governance. However, constitutional provisions and legal terminology can sometimes be difficult for beginners to understand.",
          mr: "भारतीय संविधान हे देशाच्या लोकशाही आणि शासनव्यवस्थेचा महत्त्वाचा आधार आहे. मात्र, घटनात्मक तरतुदी आणि कायदेशीर संज्ञा सुरुवातीला समजून घेणे अनेकदा कठीण वाटू शकते."
        },
        {
          en: "Our mission is to make constitutional learning easier by presenting information in simple language, organising topics into meaningful sections, and helping readers explore important constitutional concepts step by step.",
          mr: "संविधानातील माहिती सोप्या भाषेत मांडणे, विषयांची योग्य विभागणी करणे आणि महत्त्वाच्या घटनात्मक संकल्पना टप्प्याटप्प्याने समजावून सांगणे, हे आमचे ध्येय आहे."
        },
        {
          en: "We aim to encourage informed learning, constitutional awareness, and a better understanding of the rights and responsibilities associated with citizenship.",
          mr: "नागरिकांमध्ये संविधानाविषयी जागरूकता वाढावी, माहितीपूर्ण शिक्षणाला प्रोत्साहन मिळावे आणि नागरिकत्वाशी संबंधित हक्क व जबाबदाऱ्यांची समज विकसित व्हावी, यासाठी आम्ही प्रयत्नशील आहोत."
        }
      ]
    },
    {
      id: "vision",
      title: { en: "Our Vision", mr: "आमची दूरदृष्टी" },
      paragraphs: [
        {
          en: "We envision a learning environment in which constitutional knowledge is accessible to people from different educational backgrounds and levels of familiarity with legal concepts.",
          mr: "वेगवेगळ्या शैक्षणिक पार्श्वभूमीतील आणि कायदेशीर संकल्पनांची कमी-अधिक माहिती असलेल्या प्रत्येक व्यक्तीला संविधान समजून घेण्यासाठी सुलभ व्यासपीठ उपलब्ध व्हावे, अशी आमची दूरदृष्टी आहे."
        },
        {
          en: "We want to make it easier for readers to discover constitutional topics, understand their significance, and continue learning at their own pace.",
          mr: "वाचकांना घटनात्मक विषय शोधता यावेत, त्यांचे महत्त्व समजावे आणि स्वतःच्या गतीने अभ्यास करता यावा, यासाठी आम्ही प्रयत्न करतो."
        },
        {
          en: "Through accessible educational content, we hope to contribute to greater public awareness of the Constitution and the principles that support democratic life.",
          mr: "सुलभ शैक्षणिक सामग्रीच्या माध्यमातून संविधानाविषयी आणि लोकशाहीला आधार देणाऱ्या तत्त्वांविषयी जनजागृती वाढण्यास हातभार लावणे हा आमचा उद्देश आहे."
        }
      ]
    },
    {
      id: "resources",
      title: { en: "What You Will Find on Samvidhan", mr: "Samvidhan वर तुम्हाला काय मिळेल?" },
      intro: {
        en: "Samvidhan brings together educational information about different aspects of the Constitution of India.",
        mr: "Samvidhan वर भारतीय संविधानाच्या विविध पैलूंविषयी शैक्षणिक आणि माहितीपर सामग्री उपलब्ध करून देण्याचा प्रयत्न केला जातो."
      },
      items: [
        {
          title: { en: "1. The Constitution of India", mr: "१. भारतीय संविधान" },
          paragraphs: [{
            en: "Explore general information about the Constitution, its purpose, its structure, and its importance in India’s democratic system.",
            mr: "भारतीय संविधानाचा उद्देश, त्याची रचना आणि देशाच्या लोकशाही व्यवस्थेतील त्याचे महत्त्व याविषयी सामान्य माहिती जाणून घ्या."
          }]
        },
        {
          title: { en: "2. Constitutional Articles and Provisions", mr: "२. संविधानातील अनुच्छेद आणि तरतुदी" },
          paragraphs: [{
            en: "Learn about selected important Articles and constitutional provisions through organised explanations designed to make their basic meaning easier to understand.",
            mr: "महत्त्वाचे अनुच्छेद आणि घटनात्मक तरतुदी यांचा मूलभूत अर्थ समजण्यास मदत करणारी व्यवस्थित माहिती वाचा."
          }]
        },
        {
          title: { en: "3. Fundamental Rights", mr: "३. मूलभूत हक्क" },
          paragraphs: [{
            en: "Understand the Fundamental Rights guaranteed by the Constitution, their significance, and their role in protecting individual freedoms and dignity.",
            mr: "संविधानाने दिलेले मूलभूत हक्क, त्यांचे महत्त्व आणि व्यक्तिस्वातंत्र्य व मानवी प्रतिष्ठेच्या संरक्षणातील त्यांची भूमिका समजून घ्या."
          }]
        },
        {
          title: { en: "4. Fundamental Duties", mr: "४. मूलभूत कर्तव्ये" },
          paragraphs: [{
            en: "Explore the Fundamental Duties and learn about the responsibilities expected of citizens in supporting the values and principles expressed in the Constitution.",
            mr: "मूलभूत कर्तव्यांविषयी जाणून घ्या आणि संविधानातील मूल्ये व तत्त्वे जपण्यासाठी नागरिकांकडून अपेक्षित असलेल्या जबाबदाऱ्या समजून घ्या."
          }]
        },
        {
          title: { en: "5. Directive Principles of State Policy", mr: "५. राज्याच्या धोरणाची मार्गदर्शक तत्त्वे" },
          paragraphs: [{
            en: "Learn about selected Directive Principles of State Policy and their role in guiding the State towards social and economic welfare.",
            mr: "राज्याच्या धोरणाची मार्गदर्शक तत्त्वे आणि सामाजिक व आर्थिक कल्याणाच्या दिशेने शासनाला मार्गदर्शन करण्यात त्यांची भूमिका समजून घ्या."
          }]
        },
        {
          title: { en: "6. Constitutional Amendments", mr: "६. घटनादुरुस्त्या" },
          paragraphs: [
            {
              en: "Read selected educational summaries about constitutional amendments and how changes to the Constitution can influence its interpretation and operation.",
              mr: "निवडक घटनादुरुस्त्यांविषयी शैक्षणिक सारांश वाचा आणि संविधानातील बदलांचा त्याच्या अर्थावर व अंमलबजावणीवर कसा परिणाम होऊ शकतो, हे जाणून घ्या."
            },
            {
              en: "For legal or official purposes, readers should verify the current constitutional text and relevant amendments using authoritative sources.",
              mr: "कायदेशीर किंवा अधिकृत वापरासाठी संविधानाचा अद्ययावत मजकूर आणि संबंधित घटनादुरुस्त्या अधिकृत स्रोतांमधून तपासाव्यात."
            }
          ]
        },
        {
          title: { en: "7. Schedules of the Constitution", mr: "७. संविधानाच्या अनुसूच्या" },
          paragraphs: [{
            en: "A dedicated educational guide to the Schedules is not currently available on this website. For information about the Schedules, consult the current official Constitution text and other authoritative sources.",
            mr: "संविधानाच्या अनुसूच्यांसाठी स्वतंत्र शैक्षणिक मार्गदर्शक सध्या या संकेतस्थळावर उपलब्ध नाही. अनुसूच्यांबद्दल माहितीसाठी संविधानाचा अद्ययावत अधिकृत मजकूर आणि इतर प्रामाणिक स्रोतांचा संदर्भ घ्या."
          }]
        },
        {
          title: { en: "8. Educational Articles and Explanations", mr: "८. शैक्षणिक लेख आणि स्पष्टीकरणे" },
          paragraphs: [{
            en: "Read selected educational content that breaks down constitutional concepts into manageable topics and provides context for further learning.",
            mr: "घटनात्मक संकल्पना लहान, समजण्यास सोप्या विषयांमध्ये विभागून समजावून सांगणारे निवडक लेख वाचा आणि पुढील अभ्यासासाठी आवश्यक संदर्भ मिळवा."
          }]
        },
        {
          title: { en: "9. Current Affairs and Constitutional Developments", mr: "९. चालू घडामोडी आणि घटनात्मक विकास" },
          paragraphs: [{
            en: "Where available, explore educational content about relevant current affairs, constitutional developments, and public institutions. Readers should verify time-sensitive information using current authoritative sources.",
            mr: "वेबसाइटवर उपलब्ध असल्यास, संबंधित चालू घडामोडी, घटनात्मक बदल आणि सार्वजनिक संस्थांविषयी शैक्षणिक माहिती जाणून घ्या. कालानुसार बदलणारी माहिती अद्ययावत आणि अधिकृत स्रोतांमधून पडताळून पाहा."
          }]
        },
        {
          title: { en: "10. Quizzes and Learning Resources", mr: "१०. प्रश्नमंजुषा आणि अभ्याससाधने" },
          paragraphs: [
            {
              en: "Use quizzes and other learning resources available on the website to revise concepts and test your understanding.",
              mr: "वेबसाइटवर उपलब्ध असलेल्या प्रश्नमंजुषा आणि इतर अभ्याससाधनांचा वापर करून शिकलेल्या संकल्पनांची उजळणी करा आणि स्वतःची समज तपासा."
            },
            {
              en: "These resources are intended to support learning and revision. They should be used alongside official syllabuses and other relevant study materials when preparing for examinations.",
              mr: "ही साधने अभ्यास व उजळणीसाठी आहेत. परीक्षेची तयारी करताना अधिकृत अभ्यासक्रम आणि इतर संबंधित अभ्याससाहित्याचाही वापर करावा."
            }
          ]
        }
      ]
    },
    {
      id: "simple-language",
      title: { en: "Learn the Constitution in Simple Language", mr: "संविधान सोप्या भाषेत शिकूया" },
      paragraphs: [
        {
          en: "Constitutional texts may include specialised terminology, formal expressions, and provisions that require additional context.",
          mr: "संविधानातील मजकुरामध्ये विशेष कायदेशीर संज्ञा, औपचारिक भाषा आणि अधिक संदर्भांची आवश्यकता असलेल्या तरतुदी असू शकतात."
        },
        {
          en: "Samvidhan aims to explain these topics in a more approachable way without losing sight of their importance. Our educational approach focuses on introducing concepts clearly, organising related information together, and encouraging readers to consult original sources when more detail is needed.",
          mr: "या विषयांचे महत्त्व कायम ठेवून ते अधिक सोप्या पद्धतीने समजावून सांगण्याचा Samvidhan चा प्रयत्न आहे. संकल्पना स्पष्टपणे मांडणे, संबंधित माहिती एकत्रित करणे आणि अधिक तपशीलासाठी मूळ स्रोतांचा संदर्भ घेण्यास प्रोत्साहन देणे, यावर आमचा भर आहे."
        },
        {
          en: "Simplified explanations are a starting point for learning. They do not replace the official constitutional text, judicial decisions, or professional legal advice.",
          mr: "सोप्या भाषेतील स्पष्टीकरण हा अभ्यासाचा प्रारंभबिंदू आहे. तो संविधानाचा अधिकृत मजकूर, न्यायालयीन निर्णय किंवा व्यावसायिक कायदेशीर सल्ला यांचा पर्याय नाही."
        }
      ]
    },
    {
      id: "audience",
      title: { en: "Who Can Benefit from Samvidhan?", mr: "Samvidhan चा उपयोग कोणाला होऊ शकतो?" },
      intro: {
        en: "Our educational content may be useful for:",
        mr: "आमची शैक्षणिक सामग्री पुढील व्यक्तींसाठी उपयुक्त ठरू शकते:"
      },
      bullets: [
        {
          en: "Students: Build a foundation in constitutional concepts as part of general learning.",
          mr: "विद्यार्थी: सामान्य अभ्यासाचा भाग म्हणून घटनात्मक संकल्पनांचा पाया मजबूत करू शकतात."
        },
        {
          en: "Competitive Examination Aspirants: Revise constitutional topics and supplement preparation for relevant examinations.",
          mr: "स्पर्धा परीक्षांचे परीक्षार्थी: घटनात्मक विषयांची उजळणी करू शकतात आणि संबंधित परीक्षांच्या तयारीसाठी पूरक माहिती मिळवू शकतात."
        },
        {
          en: "Teachers and Educators: Explore organised explanations that may support classroom discussions and learning activities.",
          mr: "शिक्षक आणि शिक्षण क्षेत्रातील व्यक्ती: वर्गातील चर्चा आणि शैक्षणिक उपक्रमांसाठी उपयुक्त ठरू शकणारी व्यवस्थित माहिती पाहू शकतात."
        },
        {
          en: "Citizens: Improve general awareness of constitutional rights, duties, institutions, and democratic principles.",
          mr: "नागरिक: घटनात्मक हक्क, कर्तव्ये, संस्था आणि लोकशाही तत्त्वांविषयी सामान्य जागरूकता वाढवू शकतात."
        },
        {
          en: "Curious Learners: Explore the Constitution at their own pace and develop a better understanding of India’s constitutional framework.",
          mr: "जिज्ञासू वाचक: स्वतःच्या गतीने संविधानाचा अभ्यास करून भारतीय घटनात्मक व्यवस्थेची अधिक चांगली समज विकसित करू शकतात."
        }
      ],
      closing: {
        en: "The usefulness of individual resources may vary according to the reader’s learning objectives and level of prior knowledge.",
        mr: "प्रत्येक साधनाची उपयुक्तता वाचकाचे उद्दिष्ट आणि आधीपासून असलेले ज्ञान यांनुसार बदलू शकते."
      }
    },
    {
      id: "approach",
      title: { en: "Our Approach to Content", mr: "सामग्री तयार करण्याची आमची पद्धत" },
      intro: {
        en: "We aim to make our content clear, useful, and easy to navigate. Our approach includes:",
        mr: "आमची सामग्री स्पष्ट, उपयुक्त आणि सहज शोधता येण्याजोगी ठेवण्याचा आम्ही प्रयत्न करतो. आमच्या पद्धतीमध्ये पुढील बाबींचा समावेश आहे:"
      },
      bullets: [
        { en: "Presenting educational information in a structured format.", mr: "शैक्षणिक माहिती व्यवस्थित स्वरूपात सादर करणे." },
        { en: "Explaining constitutional concepts in accessible language.", mr: "घटनात्मक संकल्पना सोप्या भाषेत समजावून सांगणे." },
        { en: "Organising related topics to support independent learning.", mr: "स्वतंत्र अभ्यासासाठी संबंधित विषयांची योग्य मांडणी करणे." },
        { en: "Reviewing content for clarity and accuracy where reasonably possible.", mr: "शक्य तिथे सामग्रीची स्पष्टता आणि अचूकता तपासणे." },
        { en: "Encouraging readers to consult original and authoritative sources for important information.", mr: "महत्त्वाच्या माहितीसाठी मूळ आणि अधिकृत स्रोतांचा संदर्भ घेण्यास प्रोत्साहन देणे." },
        { en: "Updating content when corrections or relevant changes are identified.", mr: "चुका किंवा संबंधित बदल लक्षात आल्यास सामग्री अद्ययावत करण्याचा प्रयत्न करणे." }
      ],
      closing: {
        en: "Although we make reasonable efforts to maintain useful information, we cannot guarantee that every page will always reflect the latest legal or constitutional developments.",
        mr: "उपयुक्त आणि अचूक माहिती देण्यासाठी आम्ही वाजवी प्रयत्न करतो. तथापि, प्रत्येक पृष्ठावर कायदेशीर किंवा घटनात्मक क्षेत्रातील सर्वात नवीन बदल नेहमीच प्रतिबिंबित होतील याची हमी देता येत नाही."
      }
    },
    {
      id: "accuracy",
      title: { en: "Accuracy and Responsible Learning", mr: "माहितीची अचूकता आणि जबाबदार अभ्यास" },
      paragraphs: [
        {
          en: "Constitutional provisions, legislation, judicial interpretations, and official notifications may change over time.",
          mr: "घटनात्मक तरतुदी, कायदे, न्यायालयीन स्पष्टीकरणे आणि अधिकृत अधिसूचनांमध्ये कालांतराने बदल होऊ शकतात."
        },
        {
          en: "We encourage readers to verify important or time-sensitive information through authoritative sources, including the current Constitution of India, relevant legislation, official government publications, and applicable court judgments.",
          mr: "महत्त्वाची किंवा कालानुसार बदलणारी माहिती भारतीय संविधानाचा अद्ययावत मजकूर, संबंधित कायदे, अधिकृत सरकारी प्रकाशने आणि लागू न्यायालयीन निर्णय अशा अधिकृत स्रोतांमधून पडताळून पाहण्याचे आम्ही सुचवतो."
        },
        {
          en: "Content on Samvidhan is intended for educational and informational purposes only. It is not legal advice and should not be used as the sole basis for legal decisions.",
          mr: "Samvidhan वरील सामग्री केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे. ती कायदेशीर सल्ला नाही आणि कायदेशीर निर्णय घेण्यासाठी तिच्यावरच अवलंबून राहू नये."
        }
      ]
    },
    {
      id: "languages",
      title: { en: "English and Marathi Learning", mr: "इंग्रजी आणि मराठीमध्ये अभ्यास" },
      paragraphs: [
        {
          en: "Samvidhan aims to make constitutional learning accessible to readers using English and Marathi.",
          mr: "इंग्रजी आणि मराठी या दोन्ही भाषांमध्ये संविधानाचा अभ्यास करणे सुलभ व्हावे, यासाठी Samvidhan प्रयत्न करते."
        },
        {
          en: "Language options help readers explore available content in a language they understand more comfortably. The wording of a translation may differ to preserve clarity and readability, but the intended educational meaning should remain consistent.",
          mr: "भाषेचे पर्याय वाचकांना त्यांना अधिक सहज समजणाऱ्या भाषेत उपलब्ध सामग्री वाचण्यास मदत करतात. स्पष्टता आणि वाचनीयता राखण्यासाठी भाषांतरातील शब्दरचना वेगळी असू शकते; मात्र शैक्षणिक अर्थ सुसंगत ठेवण्याचा प्रयत्न केला जातो."
        },
        {
          en: "For legal or official use, readers should refer to the applicable authoritative text rather than relying solely on a translated summary or simplified explanation.",
          mr: "कायदेशीर किंवा अधिकृत वापरासाठी केवळ भाषांतरित सारांश किंवा सोप्या स्पष्टीकरणावर अवलंबून न राहता संबंधित अधिकृत मजकूर तपासावा."
        }
      ]
    },
    {
      id: "independence",
      title: { en: "Independence and Transparency", mr: "स्वायत्तता आणि पारदर्शकता" },
      paragraphs: [
        {
          en: "Samvidhan is an independent educational and informational website. It is not affiliated with, endorsed by, or operated by the Government of India or any government authority unless explicitly stated and verified.",
          mr: "Samvidhan हे स्वतंत्र शैक्षणिक आणि माहितीपर संकेतस्थळ आहे. स्पष्टपणे नमूद केलेले आणि पडताळलेले नसल्यास, या संकेतस्थळाचा भारत सरकार किंवा कोणत्याही सरकारी प्राधिकरणाशी अधिकृत संबंध, संलग्नता किंवा मान्यता असल्याचा दावा केला जात नाही."
        },
        {
          en: "References to laws, public institutions, constitutional bodies, and official publications are provided for educational and informational purposes.",
          mr: "कायदे, सार्वजनिक संस्था, घटनात्मक संस्था आणि अधिकृत प्रकाशनांचे संदर्भ शैक्षणिक आणि माहितीपर उद्देशाने दिले जातात."
        },
        {
          en: "We aim to communicate the purpose and limitations of our content clearly. We do not promise examination success, legal outcomes, or any particular result from using this website.",
          mr: "आमच्या सामग्रीचा उद्देश आणि मर्यादा स्पष्टपणे सांगण्याचा आम्ही प्रयत्न करतो. या संकेतस्थळाचा वापर केल्याने परीक्षेत यश, कायदेशीर निकाल किंवा कोणत्याही विशिष्ट परिणामाची हमी दिली जात नाही."
        }
      ]
    },
    {
      id: "feedback",
      title: { en: "Help Us Improve", mr: "वेबसाइट सुधारण्यासाठी आम्हाला मदत करा" },
      paragraphs: [
        {
          en: "We value feedback that helps us improve the clarity, usefulness, and accuracy of our educational content.",
          mr: "आमच्या शैक्षणिक सामग्रीची स्पष्टता, उपयुक्तता आणि अचूकता सुधारण्यासाठी मिळणाऱ्या सूचनांना आम्ही महत्त्व देतो."
        },
        {
          en: "If you identify a factual error, outdated information, a broken link, or an area that could be explained more clearly, please contact us.",
          mr: "तुम्हाला एखादी तथ्यात्मक चूक, जुनी माहिती, कार्यरत नसलेली लिंक किंवा अधिक स्पष्टपणे समजावून सांगता येईल असा विषय आढळल्यास आमच्याशी संपर्क साधा."
        },
        {
          en: "When reporting a correction, it is helpful to mention the page or topic and provide a reliable reference where possible. This helps us understand and review the concern.",
          mr: "चुकीची माहिती कळवताना संबंधित पृष्ठाचे किंवा विषयाचे नाव आणि शक्य असल्यास विश्वासार्ह संदर्भ दिल्यास त्या बाबीची तपासणी करण्यास मदत होते."
        }
      ],
      contact: true
    },
    {
      id: "closing",
      title: { en: "Explore and Keep Learning", mr: "चला, शिकत राहूया!" },
      paragraphs: [
        {
          en: "Understanding the Constitution is an ongoing learning process. Exploring constitutional Articles, rights, duties, institutions, and amendments can help readers build a more informed understanding of India’s democratic framework.",
          mr: "संविधान समजून घेणे ही सतत चालणारी शिकण्याची प्रक्रिया आहे. घटनात्मक अनुच्छेद, हक्क, कर्तव्ये, संस्था आणि घटनादुरुस्त्यांचा अभ्यास केल्याने भारताच्या लोकशाही व्यवस्थेविषयी अधिक माहितीपूर्ण समज विकसित होऊ शकते."
        },
        {
          en: "We invite you to explore the available learning resources, revisit topics when needed, and continue learning at your own pace.",
          mr: "उपलब्ध अभ्याससाधने पाहा, आवश्यकतेनुसार विषयांची उजळणी करा आणि स्वतःच्या गतीने शिकत राहा."
        },
        {
          en: "Thank you for visiting Samvidhan.",
          mr: "Samvidhan ला भेट दिल्याबद्दल धन्यवाद!"
        }
      ],
      tagline: { en: "Samvidhan — Know Your Constitution.", mr: "Samvidhan — आपले संविधान जाणून घ्या." }
    },
    {
      id: "disclaimer",
      title: { en: "Disclaimer", mr: "अस्वीकरण" },
      paragraphs: [
        {
          en: "This website is created for educational and informational purposes only. It does not provide legal advice or an official interpretation of the Constitution or any law.",
          mr: "हे संकेतस्थळ केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी तयार करण्यात आले आहे. येथे कायदेशीर सल्ला किंवा संविधानाचा अथवा कोणत्याही कायद्याचा अधिकृत अर्थ दिला जात नाही."
        },
        {
          en: "Constitutional information and legal requirements may change. For legal or official purposes, consult current authoritative sources and seek advice from a qualified legal professional where appropriate.",
          mr: "घटनात्मक माहिती आणि कायदेशीर आवश्यकता बदलू शकतात. कायदेशीर किंवा अधिकृत वापरासाठी अद्ययावत आणि अधिकृत स्रोतांचा संदर्भ घ्यावा आणि आवश्यकतेनुसार पात्र कायदेशीर व्यावसायिकाचा सल्ला घ्यावा."
        }
      ]
    }
  ],
  email: "info@mysamvidhan.in"
};
function About() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("main", { className: "reading-page mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick(aboutContent.title) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-4", children: aboutContent.sections[0].paragraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { lang: language, className: "text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(paragraph) }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-10", children: aboutContent.sections.slice(1).map((section) => {
      var _a2;
      return /* @__PURE__ */ jsxs(
        "section",
        {
          "aria-labelledby": `about-${section.id}`,
          className: "rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]",
          children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                id: `about-${section.id}`,
                lang: language,
                className: "font-display text-lg font-semibold text-navy dark:text-ink-dark sm:text-xl",
                children: pick(section.title)
              }
            ),
            section.intro && /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base", children: pick(section.intro) }),
            (_a2 = section.paragraphs) == null ? void 0 : _a2.map((paragraph, index) => /* @__PURE__ */ jsx(
              "p",
              {
                lang: language,
                className: "mt-3 break-words text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base",
                children: pick(paragraph)
              },
              index
            )),
            section.items && /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-5", children: section.items.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { lang: language, className: "font-display text-base font-semibold text-navy dark:text-ink-dark", children: pick(item.title) }),
              item.paragraphs.map((paragraph, paragraphIndex) => /* @__PURE__ */ jsx(
                "p",
                {
                  lang: language,
                  className: "mt-2 break-words text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base",
                  children: pick(paragraph)
                },
                paragraphIndex
              ))
            ] }, index)) }),
            section.bullets && /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base", children: section.bullets.map((bullet, index) => /* @__PURE__ */ jsx("li", { lang: language, className: "break-words", children: pick(bullet) }, index)) }),
            section.closing && /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base", children: pick(section.closing) }),
            section.contact && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink/65 dark:text-ink-dark/65 sm:text-base", children: [
              /* @__PURE__ */ jsx("span", { lang: language, children: language === "mr" ? "ईमेल:" : "Email:" }),
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${aboutContent.email}`,
                  className: "break-all text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
                  children: aboutContent.email
                }
              )
            ] }),
            section.tagline && /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 font-display text-base font-semibold text-navy dark:text-ink-dark", children: pick(section.tagline) })
          ]
        },
        section.id
      );
    }) })
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
  return /* @__PURE__ */ jsxs("div", { className: "reading-page mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
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
  date: { en: "October 25, 2026", mr: "२५ ऑक्टोबर २०२६" },
  intro: {
    en: "This policy explains how information may be handled when you visit https://www.mysamvidhan.in/. The site uses Google Analytics and Google AdSense services, and stores a small number of learning preferences in your browser. The information described in this policy depends on the features you use and the third-party services that are active.",
    mr: "https://www.mysamvidhan.in/ ला भेट दिल्यावर माहितीचा वापर कसा होऊ शकतो हे या धोरणात स्पष्ट केले आहे. संकेतस्थळावर Google Analytics आणि Google AdSense सेवा वापरल्या जातात आणि अभ्यासाशी संबंधित काही पसंती तुमच्या ब्राउझरमध्ये साठवल्या जातात. या धोरणात नमूद केलेली माहिती तुम्ही वापरत असलेल्या सुविधांवर आणि सक्रिय असलेल्या तृतीय-पक्ष सेवांवर अवलंबून असते."
  },
  sections: [
    {
      title: {
        en: "Information You Send by Email",
        mr: "ईमेलद्वारे तुम्ही पाठवलेली माहिती"
      },
      paragraphs: [
        {
          en: "The Contact page provides an email link rather than an on-site contact form. If you email us, the information in your message and your email address are used to respond to your enquiry. Your email is handled through your and our email service providers.",
          mr: "संपर्क पृष्ठावर संकेतस्थळावरील फॉर्मऐवजी ईमेलची लिंक दिली आहे. तुम्ही ईमेल पाठवल्यास, तुमच्या संदेशातील माहिती आणि ईमेल पत्ता तुमच्या प्रश्नाला उत्तर देण्यासाठी वापरला जातो. हा ईमेल तुमच्या आणि आमच्या ईमेल सेवा पुरवठादारांमार्फत हाताळला जातो."
        },
        {
          en: "Please avoid including passwords, payment details, identity documents, or other sensitive personal information in an email unless it is necessary and you understand the risks of sharing it.",
          mr: "ईमेल पाठवताना पासवर्ड, पेमेंटची माहिती, ओळखपत्रे किंवा इतर संवेदनशील वैयक्तिक माहिती देणे टाळा. अशी माहिती देणे आवश्यक असल्यास, ती शेअर करण्यातील जोखीम समजून घ्या."
        }
      ]
    },
    {
      title: {
        en: "Preferences Stored in Your Browser",
        mr: "तुमच्या ब्राउझरमध्ये साठवलेल्या पसंती"
      },
      paragraphs: [
        {
          en: "The website stores your selected language and bookmarked Article identifiers in local storage on the browser you are using. These preferences are used to provide the related website features; they are not an account-sync service and do not automatically follow you to another browser or device. Clearing this browser storage removes the saved preferences.",
          mr: "संकेतस्थळ तुम्ही निवडलेली भाषा आणि जतन केलेल्या कलमांचे क्रमांक तुम्ही वापरत असलेल्या ब्राउझरच्या स्थानिक संचयात ठेवते. संबंधित सुविधा देण्यासाठी या पसंती वापरल्या जातात; ही खाते-सिंक सेवा नाही आणि त्या दुसऱ्या ब्राउझर किंवा उपकरणावर आपोआप उपलब्ध होत नाहीत. ब्राउझरचा हा संचय हटवल्यास जतन केलेल्या पसंतीही हटतात."
        },
        {
          en: "These locally stored preferences are distinct from information that may be processed by third-party services such as analytics or advertising providers.",
          mr: "ब्राउझरमध्ये स्थानिक पातळीवर साठवलेल्या या पसंती आणि विश्लेषण किंवा जाहिरात सेवा पुरवठादारांसारख्या तृतीय-पक्ष सेवांद्वारे प्रक्रिया केली जाऊ शकणारी माहिती या वेगवेगळ्या गोष्टी आहेत."
        }
      ]
    },
    {
      title: {
        en: "Quiz Answers and Learning Activity",
        mr: "प्रश्नमंजुषेतील उत्तरे आणि अभ्यासाशी संबंधित क्रिया"
      },
      paragraphs: [
        {
          en: "When you use an interactive quiz, your answers may be processed temporarily to calculate your score and display feedback. The website may also use browser-based functionality to support learning features. Do not assume that quiz progress is saved to an online account unless the website explicitly provides that feature.",
          mr: "परस्परसंवादी प्रश्नमंजुषा वापरताना तुमचे गुण मोजण्यासाठी आणि अभिप्राय दाखवण्यासाठी तुमच्या उत्तरांवर तात्पुरती प्रक्रिया केली जाऊ शकते. अभ्यासाशी संबंधित सुविधा उपलब्ध करून देण्यासाठी ब्राउझरमधील कार्यपद्धतीचाही वापर होऊ शकतो. वेबसाइटवर अशी सुविधा स्पष्टपणे उपलब्ध नसल्यास, प्रश्नमंजुषेतील प्रगती ऑनलाइन खात्यात साठवली जाते असे समजू नका."
        },
        {
          en: "The information used by a quiz depends on how the relevant feature is implemented. Please check the website interface for the available saving and progress features.",
          mr: "प्रश्नमंजुषेमध्ये वापरल्या जाणाऱ्या माहितीचे स्वरूप संबंधित सुविधा कशा प्रकारे तयार केली आहे यावर अवलंबून असते. उत्तरे किंवा प्रगती जतन करण्याच्या सुविधा उपलब्ध आहेत का हे वेबसाइटवर तपासा."
        }
      ]
    },
    {
      title: {
        en: "Google Analytics",
        mr: "Google Analytics"
      },
      paragraphs: [
        {
          en: "The website loads Google Analytics to measure site visits and interactions. Google may process information such as pages viewed, browser or device details, and approximate location in accordance with its own policies. Google Analytics data handling and available controls are described in Google’s privacy materials.",
          mr: "भेटी आणि वापरकर्त्यांचे संकेतस्थळावरील परस्परसंवाद मोजण्यासाठी येथे Google Analytics लोड केले जाते. Google स्वतःच्या धोरणांनुसार पाहिलेली पृष्ठे, ब्राउझर किंवा उपकरणाची माहिती आणि अंदाजे स्थान यांसारख्या माहितीवर प्रक्रिया करू शकते. Google Analytics मधील माहितीचा वापर आणि उपलब्ध नियंत्रणांची माहिती Google च्या गोपनीयता दस्तऐवजांत दिली आहे."
        },
        {
          en: "Analytics information may help us understand general website usage and identify areas that may need improvement. The exact information collected depends on the analytics configuration and applicable settings.",
          mr: "विश्लेषणातून मिळालेली माहिती वेबसाइटचा एकूण वापर समजून घेण्यासाठी आणि सुधारणा आवश्यक असलेली क्षेत्रे ओळखण्यासाठी मदत करू शकते. नेमकी कोणती माहिती गोळा होते हे Analytics च्या सेटिंग्ज आणि कॉन्फिगरेशनवर अवलंबून असते."
        }
      ],
      links: [
        {
          title: {
            en: "Google Privacy Policy",
            mr: "Google गोपनीयता धोरण"
          },
          url: "https://policies.google.com/privacy"
        },
        {
          title: {
            en: "Google Analytics opt-out browser add-on",
            mr: "Google Analytics मधून बाहेर पडण्यासाठी ब्राउझर अ‍ॅड-ऑन"
          },
          url: "https://tools.google.com/dlpage/gaoptout"
        }
      ]
    },
    {
      title: {
        en: "Google AdSense and Advertising",
        mr: "Google AdSense आणि जाहिराती"
      },
      paragraphs: [
        {
          en: "The website loads Google AdSense to provide advertising. Google and its partners may use cookies or similar technologies to serve, measure, or personalise ads, subject to applicable settings, consent requirements, and their own policies. We do not control the information practices of these providers.",
          mr: "जाहिराती दाखवण्यासाठी संकेतस्थळ Google AdSense लोड करते. लागू सेटिंग्ज, संमतीविषयक आवश्यकता आणि त्यांच्या स्वतःच्या धोरणांच्या अधीन राहून, Google आणि त्याचे भागीदार जाहिराती दाखवण्यासाठी, त्यांचे मोजमाप करण्यासाठी किंवा त्यांचे वैयक्तिकरण करण्यासाठी कुकीज किंवा तत्सम तंत्रज्ञान वापरू शकतात. या सेवा पुरवठादारांच्या माहितीविषयक पद्धतींवर आमचे नियंत्रण नाही."
        },
        {
          en: "The advertisements displayed may vary depending on factors such as the page being viewed, advertising settings, available inventory, and applicable privacy choices. The presence of an advertisement does not mean that we endorse the advertised product or service.",
          mr: "दाखवल्या जाणाऱ्या जाहिराती पृष्ठाचा प्रकार, जाहिरात सेटिंग्ज, उपलब्ध जाहिराती आणि लागू गोपनीयता पर्याय यांसारख्या घटकांनुसार बदलू शकतात. एखादी जाहिरात दिसणे म्हणजे त्या उत्पादनाला किंवा सेवेला आमची मान्यता आहे असे समजू नये."
        }
      ],
      links: [
        {
          title: {
            en: "Google information about advertising technologies",
            mr: "जाहिरात तंत्रज्ञानाबद्दल Google ची माहिती"
          },
          url: "https://policies.google.com/technologies/ads"
        },
        {
          title: {
            en: "Google Ads Settings",
            mr: "Google जाहिरात सेटिंग्ज"
          },
          url: "https://adssettings.google.com/"
        }
      ]
    },
    {
      title: {
        en: "Cookies and Your Choices",
        mr: "कुकीज आणि तुमचे पर्याय"
      },
      paragraphs: [
        {
          en: "Google services on this site may use cookies or similar technologies. You can manage or delete cookies through your browser settings; blocking them may affect third-party features. Google’s linked settings provide additional controls for Google services. The choices available can depend on your location and the service.",
          mr: "या संकेतस्थळावरील Google सेवा कुकीज किंवा तत्सम तंत्रज्ञान वापरू शकतात. ब्राउझर सेटिंग्जमधून तुम्ही कुकीज नियंत्रित किंवा हटवू शकता; त्या बंद केल्यास तृतीय-पक्ष सुविधांवर परिणाम होऊ शकतो. Google सेवांसाठी अतिरिक्त नियंत्रणांचे दुवे वर दिले आहेत. उपलब्ध पर्याय तुमचे स्थान आणि सेवेवर अवलंबून असू शकतात."
        },
        {
          en: "Browser controls may allow you to restrict, block, or delete certain cookies. However, some website features or third-party services may not function as expected if cookies are disabled.",
          mr: "ब्राउझरच्या सेटिंग्जमधून काही कुकीज मर्यादित करणे, बंद करणे किंवा हटवणे शक्य असू शकते. मात्र कुकीज बंद केल्यास वेबसाइटच्या काही सुविधा किंवा तृतीय-पक्ष सेवा अपेक्षेप्रमाणे कार्य करणार नाहीत."
        }
      ]
    },
    {
      title: {
        en: "Information Security and Retention",
        mr: "माहितीची सुरक्षितता आणि साठवण"
      },
      paragraphs: [
        {
          en: "We aim to handle information responsibly and take reasonable steps to protect information under our control. However, no website, electronic transmission, or storage method can be guaranteed to be completely secure.",
          mr: "माहिती जबाबदारीने हाताळण्याचा आणि आमच्या नियंत्रणाखालील माहितीचे संरक्षण करण्यासाठी वाजवी उपाय करण्याचा आम्ही प्रयत्न करतो. तथापि, कोणतीही वेबसाइट, इलेक्ट्रॉनिक माहिती पाठवण्याची पद्धत किंवा माहिती साठवण्याची पद्धत पूर्णपणे सुरक्षित असल्याची हमी देता येत नाही."
        },
        {
          en: "Information is retained for as long as reasonably necessary for the purpose for which it was provided or collected, subject to applicable requirements. Retention practices may differ between our email provider, browser storage, and third-party services.",
          mr: "माहिती ज्या उद्देशासाठी दिली किंवा गोळा केली आहे, त्या उद्देशासाठी वाजवीरीत्या आवश्यक असेपर्यंत ती साठवली जाऊ शकते. लागू आवश्यकतांचे पालन केले जाईल. आमचा ईमेल सेवा पुरवठादार, ब्राउझरमधील संचय आणि तृतीय-पक्ष सेवा यांच्यानुसार माहिती साठवण्याच्या पद्धती वेगवेगळ्या असू शकतात."
        }
      ]
    },
    {
      title: {
        en: "Your Privacy Choices and Requests",
        mr: "तुमचे गोपनीयता पर्याय आणि विनंत्या"
      },
      paragraphs: [
        {
          en: "You can manage some information through your browser settings, including deleting locally stored preferences and managing cookies. You may also use the controls provided by Google for its services.",
          mr: "ब्राउझर सेटिंग्जमधून स्थानिक पातळीवर साठवलेल्या पसंती हटवणे आणि कुकीज नियंत्रित करणे यांसारख्या काही गोष्टी तुम्ही करू शकता. Google च्या सेवांसाठी उपलब्ध असलेली नियंत्रणेही वापरू शकता."
        },
        {
          en: "If you have a question or request concerning information you have sent to us by email, contact us at the address below. We will consider the request in accordance with applicable law and the information reasonably available to us.",
          mr: "तुम्ही आम्हाला ईमेलद्वारे पाठवलेल्या माहितीबाबत काही प्रश्न किंवा विनंती असल्यास खाली दिलेल्या ईमेल पत्त्यावर संपर्क साधा. लागू कायदे आणि आमच्याकडे वाजवीरीत्या उपलब्ध असलेल्या माहितीच्या आधारे आम्ही तुमच्या विनंतीचा विचार करू."
        }
      ]
    },
    {
      title: {
        en: "Children’s Privacy",
        mr: "लहान मुलांची गोपनीयता"
      },
      paragraphs: [
        {
          en: "The website provides general educational information about the Constitution of India. It is not intended to request personal information from children through dedicated collection forms. Parents and guardians should guide children when using online services and sharing personal information.",
          mr: "या वेबसाइटवर भारतीय संविधानाविषयी सामान्य शैक्षणिक माहिती दिली जाते. विशेष माहिती-संकलन फॉर्मद्वारे मुलांकडून वैयक्तिक माहिती मागवणे हा वेबसाइटचा उद्देश नाही. मुलांनी ऑनलाइन सेवा वापरताना किंवा वैयक्तिक माहिती शेअर करताना पालकांनी किंवा संरक्षकांनी त्यांना मार्गदर्शन करावे."
        }
      ]
    },
    {
      title: {
        en: "Third-Party Websites",
        mr: "तृतीय-पक्ष संकेतस्थळे"
      },
      paragraphs: [
        {
          en: "Pages on this website may link to external websites, including official government sources. Those sites have their own privacy policies and practices, which we do not control. Review their policies when you follow an external link.",
          mr: "या संकेतस्थळावरील पृष्ठांवर अधिकृत सरकारी स्रोतांसह बाह्य संकेतस्थळांचे दुवे असू शकतात. त्या संकेतस्थळांची स्वतःची गोपनीयता धोरणे आणि पद्धती असतात; त्यांवर आमचे नियंत्रण नाही. बाह्य दुवा उघडल्यावर त्या संकेतस्थळाची धोरणे पाहा."
        }
      ]
    },
    {
      title: {
        en: "Changes to This Privacy Policy",
        mr: "या गोपनीयता धोरणातील बदल"
      },
      paragraphs: [
        {
          en: "This policy may be updated when the website’s features, third-party services, or applicable requirements change. The date at the top of this page indicates the latest revision. We encourage visitors to review this page periodically.",
          mr: "संकेतस्थळाच्या सुविधा, तृतीय-पक्ष सेवा किंवा लागू आवश्यकतांमध्ये बदल झाल्यास हे धोरण अद्ययावत केले जाऊ शकते. या पृष्ठाच्या सुरुवातीला दिलेली तारीख शेवटच्या बदलाची तारीख दर्शवते. वापरकर्त्यांनी वेळोवेळी हे पृष्ठ पाहावे."
        }
      ]
    }
  ],
  contact: {
    title: { en: "Contact Us", mr: "आमच्याशी संपर्क" },
    body: {
      en: "For questions about this Privacy Policy or information you have sent to us, email:",
      mr: "या गोपनीयता धोरणाबाबत किंवा तुम्ही आम्हाला पाठवलेल्या माहितीबाबत प्रश्न असल्यास ईमेल करा:"
    },
    email: { en: "Email:", mr: "ईमेल:" }
  }
};
function Privacy() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "reading-page mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx(ChakraMark, { className: "h-10 w-10 text-navy dark:text-saffron" }),
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl", children: pick(privacyPolicy.title) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-ink/55 dark:text-ink-dark/55", children: [
      /* @__PURE__ */ jsx("span", { lang: language, children: pick(privacyPolicy.lastUpdated) }),
      " ",
      pick(privacyPolicy.date)
    ] }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(privacyPolicy.intro) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: privacyPolicy.sections.map((section) => {
      var _a2;
      return /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { lang: language, className: "font-display text-xl font-semibold text-navy dark:text-ink-dark", children: pick(section.title) }),
        (_a2 = section.paragraphs) == null ? void 0 : _a2.map((paragraph, index) => /* @__PURE__ */ jsx("p", { lang: language, className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: pick(paragraph) }, index)),
        section.list && /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70", children: section.list.map((item) => /* @__PURE__ */ jsx("li", { lang: language, children: pick(item) }, item.en)) }),
        section.links && /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm", children: section.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            lang: language,
            className: "text-navy underline decoration-gold/70 underline-offset-4 hover:text-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:text-ink-dark",
            children: pick(link.title)
          }
        ) }, link.url)) })
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
  title: { en: "Terms and Conditions", mr: "नियम आणि अटी" },
  lastUpdated: { en: "Last Updated:", mr: "शेवटचे अद्यतन:" },
  date: { en: "25 October 2026", mr: "२५ ऑक्टोबर २०२६" },
  intro: {
    en: "Welcome to MySamvidhan. By accessing or using this website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using the website.",
    mr: "MySamvidhan वेबसाइटवर आपले स्वागत आहे. या वेबसाइटचा वापर करून तुम्ही या नियम आणि अटींचे पालन करण्यास सहमती दर्शवता. या अटींच्या कोणत्याही भागाशी तुम्ही सहमत नसल्यास कृपया वेबसाइटचा वापर करू नका."
  },
  sections: [
    {
      title: { en: "1. Purpose of the Website", mr: "१. वेबसाइटचा उद्देश" },
      paragraphs: [
        {
          en: "MySamvidhan is an independent educational and informational website designed to make information about the Constitution of India easier to understand and access.",
          mr: "MySamvidhan ही भारताच्या संविधानाशी संबंधित माहिती सोप्या पद्धतीने समजून घेता यावी आणि सहज उपलब्ध व्हावी यासाठी तयार केलेली स्वतंत्र शैक्षणिक आणि माहितीपर वेबसाइट आहे."
        },
        {
          en: "The website provides or may provide educational articles, constitutional provisions, fundamental rights and duties, current affairs, judicial decisions, study resources, quizzes, and other learning tools.",
          mr: "वेबसाइटवर घटनात्मक तरतुदी, मूलभूत अधिकार आणि कर्तव्ये, चालू घडामोडी, न्यायालयीन निर्णय, शैक्षणिक लेख, अभ्यास साहित्य, प्रश्नमंजुषा आणि इतर शिकण्याची साधने उपलब्ध करून दिली जाऊ शकतात."
        },
        {
          en: "All content published on this website is intended for general educational and informational purposes only.",
          mr: "वेबसाइटवर प्रकाशित केलेली सर्व सामग्री केवळ सामान्य शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे."
        }
      ]
    },
    {
      title: { en: "2. Accuracy and Updates", mr: "२. माहितीची अचूकता आणि अद्ययावतपणा" },
      paragraphs: [
        {
          en: "We make reasonable efforts to provide accurate and up-to-date information. However, we do not guarantee that all information on the website will always be accurate, complete, current, or free from errors.",
          mr: "अचूक आणि अद्ययावत माहिती देण्यासाठी आम्ही वाजवी प्रयत्न करतो. मात्र वेबसाइटवरील सर्व माहिती नेहमीच अचूक, संपूर्ण, अद्ययावत किंवा त्रुटीविरहित असेल याची आम्ही हमी देत नाही."
        },
        {
          en: "Constitutional provisions, laws, judicial decisions, and government information may change over time. Users should verify important information through official government sources or other reliable references where appropriate.",
          mr: "संविधानातील तरतुदी, कायदे, न्यायालयीन निर्णय आणि सरकारी माहितीमध्ये कालांतराने बदल होऊ शकतात. महत्त्वाच्या बाबींसाठी वापरकर्त्यांनी आवश्यकतेनुसार अधिकृत सरकारी किंवा विश्वसनीय स्रोतांमधून माहितीची पडताळणी करावी."
        },
        {
          en: "We may make reasonable efforts to correct errors or update outdated information when identified.",
          mr: "माहितीमध्ये त्रुटी किंवा कालबाह्य तपशील आढळल्यास ते दुरुस्त करण्यासाठी आम्ही वाजवी प्रयत्न करू."
        }
      ]
    },
    {
      title: { en: "3. No Legal Advice", mr: "३. कायदेशीर सल्ला नाही" },
      paragraphs: [
        {
          en: "The information available on MySamvidhan is provided for educational and informational purposes only. It does not constitute legal advice, professional advice, or guidance for any specific legal matter.",
          mr: "MySamvidhan वर उपलब्ध माहिती केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे. ती कायदेशीर सल्ला, व्यावसायिक सल्ला किंवा विशिष्ट कायदेशीर प्रकरणासाठी मार्गदर्शन म्हणून समजू नये."
        },
        {
          en: "For advice relating to a particular legal issue, users should consult a qualified legal professional.",
          mr: "विशिष्ट कायदेशीर बाबींसाठी पात्र कायदेशीर तज्ज्ञाचा सल्ला घ्यावा."
        }
      ]
    },
    {
      title: { en: "4. Educational Content and Exam Preparation", mr: "४. शैक्षणिक सामग्री आणि परीक्षेची तयारी" },
      paragraphs: [
        {
          en: "Articles, study guides, quizzes, and other educational resources are intended to help users understand the Constitution and support their learning.",
          mr: "लेख, अभ्यास मार्गदर्शक, प्रश्नमंजुषा आणि इतर शैक्षणिक साधने वापरकर्त्यांना भारतीय संविधान समजून घेण्यासाठी आणि अभ्यासात मदत करण्यासाठी तयार केली आहेत."
        },
        {
          en: "We do not guarantee examination results, marks, eligibility, selection, or success in any competitive examination.",
          mr: "कोणत्याही स्पर्धा परीक्षेत यश, विशिष्ट गुण, पात्रता किंवा निवड मिळण्याची हमी आम्ही देत नाही."
        },
        {
          en: "Quiz answers and explanations are intended for learning purposes. Users preparing for examinations should consult the relevant official syllabus, notifications, and reference materials.",
          mr: "प्रश्नमंजुषेतील उत्तरे आणि स्पष्टीकरणे अभ्यासासाठी आहेत. परीक्षेची तयारी करणाऱ्या वापरकर्त्यांनी संबंधित अधिकृत अभ्यासक्रम, अधिसूचना आणि संदर्भ साहित्य तपासावे."
        }
      ]
    },
    {
      title: { en: "5. Acceptable Use", mr: "५. वेबसाइटचा योग्य वापर" },
      paragraphs: [
        {
          en: "Users must use the website lawfully, responsibly, and in accordance with these terms.",
          mr: "वापरकर्त्यांनी वेबसाइटचा वापर कायदेशीर, जबाबदार आणि या नियमांशी सुसंगत पद्धतीने करावा."
        },
        {
          en: "Users must not:",
          mr: "वापरकर्त्यांनी खालील कृती करू नयेत:"
        }
      ],
      bullets: [
        {
          en: "Attempt to disrupt the website or compromise its security.",
          mr: "वेबसाइटचे कार्य बिघडवण्याचा किंवा तिच्या सुरक्षिततेला धोका निर्माण करण्याचा प्रयत्न करणे."
        },
        {
          en: "Attempt to gain unauthorized access to restricted areas or systems.",
          mr: "प्रतिबंधित भागांमध्ये किंवा प्रणालींमध्ये परवानगीशिवाय प्रवेश मिळवण्याचा प्रयत्न करणे."
        },
        {
          en: "Create misleading copies or fraudulent versions of the website.",
          mr: "वेबसाइटच्या दिशाभूल करणाऱ्या किंवा बनावट प्रती तयार करणे."
        },
        {
          en: "Perform activities that place unreasonable load on the website’s servers or interfere with its operation.",
          mr: "वेबसाइटच्या सर्व्हरवर अनावश्यक भार टाकणे किंवा तिच्या कार्यात अडथळा आणणे."
        },
        {
          en: "Use the website for activities that violate applicable laws.",
          mr: "लागू कायद्यांचे उल्लंघन करणाऱ्या कृतींसाठी वेबसाइटचा वापर करणे."
        },
        {
          en: "Copy or redistribute protected content in violation of applicable laws or the rights of its owners.",
          mr: "लागू कायदे किंवा सामग्रीच्या हक्कधारकांचे अधिकार यांचे उल्लंघन करून संरक्षित सामग्रीची प्रत तयार करणे किंवा तिचे पुनर्वितरण करणे."
        }
      ],
      closing: [
        {
          en: "Where appropriate and permitted by law, we may take reasonable measures to protect the website and its users against misuse.",
          mr: "योग्य परिस्थितीत आणि लागू कायद्याच्या अधीन राहून, वेबसाइटचा गैरवापर रोखण्यासाठी आम्ही आवश्यक ती वाजवी पावले उचलू शकतो."
        }
      ]
    },
    {
      title: { en: "6. Browser Preferences and Interactive Tools", mr: "६. ब्राउझरमधील पसंती आणि परस्परसंवादी साधने" },
      paragraphs: [
        {
          en: "Language preferences and saved article bookmarks may be stored in the browser used to access the website. These features do not necessarily provide account-based synchronization and may be lost if browser storage is cleared.",
          mr: "भाषा निवड आणि जतन केलेल्या लेखांच्या बुकमार्क्स वेबसाइट वापरण्यासाठी वापरलेल्या ब्राउझरमध्ये साठवल्या जाऊ शकतात. या सुविधांमध्ये खाते-आधारित सिंक्रोनायझेशन असेलच असे नाही. ब्राउझरमधील संचय हटवल्यास ही माहिती नष्ट होऊ शकते."
        },
        {
          en: "Quiz answers may be used during the current session to display feedback and results. The availability and operation of these features may depend on the browser and website functionality.",
          mr: "प्रश्नमंजुषेतील उत्तरे चालू सत्रात अभिप्राय आणि निकाल दाखवण्यासाठी वापरली जाऊ शकतात. या सुविधांची उपलब्धता ब्राउझर आणि वेबसाइटच्या कार्यपद्धतीवर अवलंबून असू शकते."
        },
        {
          en: "Saved preferences and bookmarks may not remain available if browser data is cleared or a different browser or device is used.",
          mr: "ब्राउझरमधील डेटा हटवल्यास किंवा दुसरा ब्राउझर अथवा डिव्हाइस वापरल्यास जतन केलेल्या पसंती आणि बुकमार्क्स उपलब्ध राहतीलच असे नाही."
        }
      ]
    },
    {
      title: { en: "7. Intellectual Property and Use of Content", mr: "७. बौद्धिक संपदा आणि सामग्रीचा वापर" },
      paragraphs: [
        {
          en: "Unless otherwise stated, original content created for MySamvidhan, including text, graphics, website design, and other materials, may be protected by applicable intellectual property laws.",
          mr: "वेगळे नमूद केले नसल्यास, MySamvidhan साठी तयार केलेली मूळ सामग्री, मजकूर, ग्राफिक्स, वेबसाइट डिझाइन आणि इतर साहित्य लागू बौद्धिक संपदा कायद्यांद्वारे संरक्षित असू शकते."
        },
        {
          en: "Users may access and use the website for personal, educational, and non-commercial purposes.",
          mr: "वापरकर्ते वेबसाइटचा वैयक्तिक, शैक्षणिक आणि गैर-व्यावसायिक वापर करू शकतात."
        },
        {
          en: "Unless permitted by applicable law or authorized in advance, original content must not be republished, redistributed, modified, or used commercially without the necessary permission.",
          mr: "लागू कायद्याने परवानगी दिलेली नसल्यास किंवा आवश्यक पूर्वपरवानगी मिळालेली नसल्यास, मूळ सामग्रीचे पुनर्प्रकाशन, पुनर्वितरण, बदल किंवा व्यावसायिक वापर करू नये."
        },
        {
          en: "The rights to official constitutional texts, legislation, public documents, and third-party materials may belong to their respective rights holders. Their use remains subject to applicable laws and licence terms.",
          mr: "संविधानाचा अधिकृत मजकूर, कायदे, सार्वजनिक दस्तऐवज आणि तृतीय-पक्ष सामग्रीचे हक्क संबंधित हक्कधारकांकडे असू शकतात. अशा सामग्रीचा वापर करताना लागू कायदे आणि परवान्यांच्या अटींचे पालन करणे आवश्यक आहे."
        }
      ]
    },
    {
      title: { en: "8. Third-Party Content and External Links", mr: "८. तृतीय-पक्ष सामग्री आणि बाह्य लिंक" },
      paragraphs: [
        {
          en: "The website may contain links to external websites or references to third-party information.",
          mr: "वेबसाइटवर बाह्य वेबसाइटच्या लिंक किंवा तृतीय-पक्षाच्या माहितीचे संदर्भ असू शकतात."
        },
        {
          en: "These links are provided for convenience and informational purposes. MySamvidhan does not control external websites and is not responsible for their content, accuracy, availability, or policies.",
          mr: "या लिंक सोयीसाठी आणि माहितीच्या उद्देशाने दिल्या जातात. बाह्य वेबसाइटवरील सामग्री, अचूकता, उपलब्धता किंवा धोरणांवर MySamvidhan चे नियंत्रण नाही."
        },
        {
          en: "Users should review the applicable terms and privacy policies before using external websites.",
          mr: "बाह्य वेबसाइट वापरण्यापूर्वी संबंधित अटी आणि गोपनीयता धोरण तपासण्याची जबाबदारी वापरकर्त्याची आहे."
        }
      ]
    },
    {
      title: { en: "9. Advertisements and Third-Party Services", mr: "९. जाहिराती आणि तृतीय-पक्ष सेवा" },
      paragraphs: [
        {
          en: "The website may use Google AdSense or other third-party advertising services.",
          mr: "वेबसाइटवर Google AdSense किंवा इतर तृतीय-पक्ष जाहिरात सेवा वापरल्या जाऊ शकतात."
        },
        {
          en: "Advertisements, their availability, and any related data processing may be governed by the policies of the relevant service providers.",
          mr: "जाहिराती, त्यांची उपलब्धता आणि संबंधित डेटा प्रक्रिया या संबंधित सेवा प्रदात्यांच्या धोरणांनुसार होऊ शकतात."
        },
        {
          en: "The appearance of an advertisement does not necessarily constitute an endorsement or guarantee by MySamvidhan of the advertised product, service, or advertiser.",
          mr: "वेबसाइटवर एखादी जाहिरात दिसणे म्हणजे त्या उत्पादनाची, सेवेची किंवा जाहिरातदाराची MySamvidhan कडून शिफारस किंवा हमी दिली आहे असे समजू नये."
        },
        {
          en: "For further information about advertising, cookies, personalized advertising, and data use, please refer to our Privacy Policy.",
          mr: "जाहिराती, कुकीज, वैयक्तिकृत जाहिराती आणि डेटा वापराबद्दल अधिक माहितीसाठी आमचे गोपनीयता धोरण पहा."
        }
      ]
    },
    {
      title: { en: "10. Privacy and Cookies", mr: "१०. गोपनीयता आणि कुकीज" },
      paragraphs: [
        {
          en: "Certain information may be stored in your browser, or technical information may be processed to support the operation of the website.",
          mr: "वेबसाइटच्या कार्यासाठी काही माहिती ब्राउझरमध्ये साठवली जाऊ शकते किंवा तांत्रिक माहितीवर प्रक्रिया केली जाऊ शकते."
        },
        {
          en: "Where advertising, cookies, analytics tools, or third-party services are used, relevant information about them should be provided in our Privacy Policy.",
          mr: "जाहिराती, कुकीज, विश्लेषण साधने किंवा तृतीय-पक्ष सेवा वापरल्या जात असल्यास, त्यासंबंधीची योग्य माहिती आमच्या गोपनीयता धोरणात दिली जावी."
        },
        {
          en: "Users should review the Privacy Policy to understand how applicable information may be collected, used, or processed.",
          mr: "संबंधित माहिती कशी गोळा, वापरली किंवा प्रक्रिया केली जाऊ शकते हे समजून घेण्यासाठी वापरकर्त्यांनी गोपनीयता धोरण वाचावे."
        }
      ]
    },
    {
      title: { en: "11. Website Availability and Changes", mr: "११. वेबसाइटची उपलब्धता आणि बदल" },
      paragraphs: [
        {
          en: "We make reasonable efforts to keep the website available and functioning properly. However, we do not guarantee uninterrupted, continuous, or error-free availability.",
          mr: "वेबसाइट शक्य तितकी उपलब्ध आणि व्यवस्थित कार्यरत ठेवण्यासाठी आम्ही वाजवी प्रयत्न करतो. मात्र वेबसाइट सतत, विनाव्यत्यय किंवा त्रुटीविरहित उपलब्ध राहील याची हमी देता येत नाही."
        },
        {
          en: "Some features may become temporarily unavailable because of maintenance, technical issues, security concerns, or other circumstances.",
          mr: "देखभाल, तांत्रिक अडचणी, सुरक्षिततेशी संबंधित कारणे किंवा इतर परिस्थितींमुळे काही सुविधा तात्पुरत्या अनुपलब्ध होऊ शकतात."
        },
        {
          en: "We may modify, suspend, or discontinue any part of the website when necessary, subject to applicable law.",
          mr: "लागू कायद्याच्या अधीन राहून, आवश्यकतेनुसार आम्ही वेबसाइटच्या कोणत्याही भागात बदल करू शकतो, तो तात्पुरता बंद करू शकतो किंवा सेवा थांबवू शकतो."
        }
      ]
    },
    {
      title: { en: "12. Limitation of Liability", mr: "१२. दायित्वाची मर्यादा" },
      paragraphs: [
        {
          en: "To the extent permitted by applicable law, MySamvidhan does not accept liability for losses arising from the use of, or reliance on, information published on the website.",
          mr: "लागू कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत, वेबसाइटवरील माहितीचा वापर केल्यामुळे किंवा त्यावर अवलंबून राहिल्यामुळे होणाऱ्या नुकसानीसाठी MySamvidhan दायित्व स्वीकारत नाही."
        },
        {
          en: "Liability relating to temporary website unavailability, technical errors, or third-party website content is limited to the extent permitted by applicable law.",
          mr: "वेबसाइट तात्पुरती अनुपलब्ध असणे, तांत्रिक त्रुटी किंवा तृतीय-पक्ष वेबसाइटवरील सामग्री यांच्याशी संबंधित दायित्व लागू कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत मर्यादित राहील."
        },
        {
          en: "Nothing in these terms is intended to exclude or limit any rights or liabilities that cannot lawfully be excluded or limited.",
          mr: "या अटींचा उद्देश लागू कायद्यानुसार वगळता किंवा मर्यादित करता न येणारे अधिकार अथवा दायित्वे वगळणे किंवा मर्यादित करणे हा नाही."
        }
      ]
    },
    {
      title: { en: "13. Changes to These Terms", mr: "१३. नियम आणि अटींमधील बदल" },
      paragraphs: [
        {
          en: "We may update these Terms and Conditions from time to time. The updated version will be published on this page with a revised last-updated date.",
          mr: "आम्ही वेळोवेळी या नियम आणि अटींमध्ये बदल करू शकतो. अद्ययावत आवृत्ती या पृष्ठावर प्रकाशित केली जाईल आणि त्यावर शेवटच्या अद्यतनाची तारीख नमूद केली जाईल."
        },
        {
          en: "Continued use of the website after updated terms are published will be subject to the revised terms to the extent permitted by applicable law.",
          mr: "अद्ययावत अटी प्रकाशित झाल्यानंतर वेबसाइटचा वापर सुरू ठेवल्यास, लागू कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत सुधारित अटी लागू होतील."
        }
      ]
    },
    {
      title: { en: "14. Applicable Law", mr: "१४. लागू कायदे" },
      paragraphs: [
        {
          en: "These Terms and Conditions shall be interpreted in accordance with applicable laws of India. Any dispute shall be addressed in accordance with applicable legal provisions.",
          mr: "या नियम आणि अटींचे अर्थनिर्णयन भारतातील लागू कायद्यांनुसार केले जाईल. कोणताही वाद उद्भवल्यास त्याचे निराकरण लागू कायदेशीर तरतुदींनुसार केले जाईल."
        }
      ]
    },
    {
      title: { en: "15. Contact Us", mr: "१५. आमच्याशी संपर्क" },
      paragraphs: [
        {
          en: "If you have any questions, suggestions, or requests for corrections regarding these Terms and Conditions, please contact us.",
          mr: "या नियम आणि अटींबाबत काही प्रश्न, सूचना किंवा दुरुस्तीची विनंती असल्यास आमच्याशी संपर्क साधा."
        }
      ],
      contact: true
    },
    {
      title: { en: "16. Independent Educational Website", mr: "१६. स्वतंत्र शैक्षणिक वेबसाइट" },
      paragraphs: [
        {
          en: "MySamvidhan is an independent educational and informational website. It does not claim to be the official website of any government authority or court unless expressly stated in a specific context.",
          mr: "MySamvidhan ही स्वतंत्र शैक्षणिक आणि माहितीपर वेबसाइट आहे. एखाद्या विशिष्ट ठिकाणी स्पष्टपणे नमूद केले नसल्यास, ही कोणत्याही सरकारी प्राधिकरणाची किंवा न्यायालयाची अधिकृत वेबसाइट असल्याचा दावा करत नाही."
        },
        {
          en: "For authoritative constitutional or legal information, users should refer to the relevant official sources.",
          mr: "अधिकृत घटनात्मक किंवा कायदेशीर माहितीसाठी वापरकर्त्यांनी संबंधित अधिकृत स्रोतांचा संदर्भ घ्यावा."
        }
      ]
    }
  ],
  email: "info@mysamvidhan.in"
};
function Terms() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("main", { className: "reading-page mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy sm:text-4xl", children: pick(termsConditions.title) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-ink/60", children: [
      /* @__PURE__ */ jsx("span", { lang: language, children: pick(termsConditions.lastUpdated) }),
      " ",
      /* @__PURE__ */ jsx("time", { dateTime: "2026-10-25", lang: language, children: pick(termsConditions.date) })
    ] }),
    /* @__PURE__ */ jsx("p", { lang: language, className: "mt-6 text-base leading-relaxed text-ink/75", children: pick(termsConditions.intro) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 divide-y divide-navy/10", children: termsConditions.sections.map((section, index) => {
      var _a2;
      return /* @__PURE__ */ jsxs(
        "section",
        {
          "aria-labelledby": `terms-section-${index + 1}`,
          className: "py-7 first:pt-0 last:pb-0",
          children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                id: `terms-section-${index + 1}`,
                lang: language,
                className: "font-display text-xl font-semibold leading-snug text-navy sm:text-2xl",
                children: pick(section.title)
              }
            ),
            section.paragraphs.map((paragraph, paragraphIndex) => /* @__PURE__ */ jsx(
              "p",
              {
                lang: language,
                className: "mt-3 break-words text-sm leading-7 text-ink/75 sm:text-base",
                children: pick(paragraph)
              },
              paragraphIndex
            )),
            section.bullets && /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-ink/75 sm:text-base", children: section.bullets.map((bullet, bulletIndex) => /* @__PURE__ */ jsx("li", { lang: language, className: "break-words", children: pick(bullet) }, bulletIndex)) }),
            (_a2 = section.closing) == null ? void 0 : _a2.map((paragraph, paragraphIndex) => /* @__PURE__ */ jsx(
              "p",
              {
                lang: language,
                className: "mt-3 break-words text-sm leading-7 text-ink/75 sm:text-base",
                children: pick(paragraph)
              },
              paragraphIndex
            )),
            section.contact && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-7 text-ink/75 sm:text-base", children: [
              /* @__PURE__ */ jsx("span", { lang: language, children: language === "mr" ? "ईमेल:" : "Email:" }),
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${termsConditions.email}`,
                  className: "break-all font-medium text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
                  children: termsConditions.email
                }
              )
            ] })
          ]
        },
        section.title.en
      );
    }) })
  ] });
}
const disclaimerContent = {
  title: { en: "Disclaimer", mr: "अस्वीकरण" },
  introduction: [
    {
      en: "This website, MySamvidhan, is created for educational and informational purposes only. Its purpose is to help readers understand the Constitution of India, constitutional provisions, fundamental rights and duties, and related civic and legal concepts in accessible language.",
      mr: "MySamvidhan हे संकेतस्थळ केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी तयार करण्यात आले आहे. भारतीय संविधान, घटनात्मक तरतुदी, मूलभूत हक्क आणि कर्तव्ये तसेच नागरिकत्वाशी आणि कायद्याशी संबंधित संकल्पना सोप्या भाषेत समजून घेण्यास वाचकांना मदत करणे हा या संकेतस्थळाचा उद्देश आहे."
    },
    {
      en: "The information provided on this website is intended for general learning and awareness. It should not be considered legal advice, professional advice, or an official interpretation of any constitutional provision or law.",
      mr: "या संकेतस्थळावरील माहिती सामान्य ज्ञान, अभ्यास आणि जनजागृतीसाठी आहे. ती कायदेशीर सल्ला, व्यावसायिक सल्ला किंवा कोणत्याही घटनात्मक तरतुदीचा अथवा कायद्याचा अधिकृत अर्थ समजू नये."
    }
  ],
  sections: [
    {
      title: { en: "1. No Legal Advice", mr: "१. कायदेशीर सल्ला नाही" },
      paragraphs: [
        {
          en: "The content published on MySamvidhan does not constitute legal advice and is not a substitute for advice from a qualified lawyer or other authorised legal professional.",
          mr: "MySamvidhan वर प्रकाशित केलेली सामग्री कायदेशीर सल्ला नाही आणि ती पात्र वकिलाच्या किंवा अधिकृत कायदेशीर व्यावसायिकाच्या सल्ल्याचा पर्याय नाही."
        },
        {
          en: "Every legal matter may involve different facts, circumstances, and applicable laws. If you require advice about a legal dispute, constitutional right, legal procedure, or any other specific matter, consult a qualified legal professional.",
          mr: "प्रत्येक कायदेशीर प्रकरणातील तथ्ये, परिस्थिती आणि लागू कायदे वेगवेगळे असू शकतात. कायदेशीर वाद, घटनात्मक हक्क, कायदेशीर प्रक्रिया किंवा इतर कोणत्याही विशिष्ट बाबतीत मार्गदर्शन आवश्यक असल्यास पात्र कायदेशीर व्यावसायिकाचा सल्ला घ्यावा."
        },
        {
          en: "Do not make legal decisions solely on the basis of information published on this website.",
          mr: "या संकेतस्थळावरील माहितीवरच अवलंबून राहून कायदेशीर निर्णय घेऊ नयेत."
        }
      ]
    },
    {
      title: { en: "2. Accuracy and Completeness of Information", mr: "२. माहितीची अचूकता आणि पूर्णता" },
      paragraphs: [
        {
          en: "We make reasonable efforts to present information clearly and accurately. However, we do not guarantee that all content is complete, current, error-free, or suitable for every situation.",
          mr: "माहिती स्पष्ट आणि अचूक पद्धतीने सादर करण्यासाठी आम्ही वाजवी प्रयत्न करतो. तथापि, संकेतस्थळावरील सर्व माहिती पूर्णपणे अचूक, अद्ययावत, त्रुटीविरहित किंवा प्रत्येक परिस्थितीसाठी योग्य असेल याची हमी देता येत नाही."
        },
        {
          en: "Constitutional provisions, legislation, judicial interpretations, government notifications, and legal procedures may change over time. Some content may not immediately reflect the latest developments.",
          mr: "घटनात्मक तरतुदी, कायदे, न्यायालयीन निर्णय, सरकारी अधिसूचना आणि कायदेशीर प्रक्रिया यांमध्ये कालांतराने बदल होऊ शकतात. काही सामग्रीमध्ये नवीनतम बदल लगेच प्रतिबिंबित होतीलच असे नाही."
        },
        {
          en: "Readers should independently verify important information against current authoritative sources.",
          mr: "महत्त्वाची माहिती वापरण्यापूर्वी वाचकांनी ती अद्ययावत आणि अधिकृत स्रोतांमधून स्वतंत्रपणे पडताळून पाहावी."
        }
      ]
    },
    {
      title: { en: "3. Constitution and Legal Updates", mr: "३. संविधान आणि कायदेशीर अद्यतने" },
      paragraphs: [
        {
          en: "Articles, amendments, constitutional provisions, court decisions, and other legal information are presented to support general understanding and learning.",
          mr: "भारतीय संविधान, घटनादुरुस्त्या, घटनात्मक तरतुदी, न्यायालयीन निर्णय आणि इतर कायदेशीर माहिती सामान्य समज व अभ्यासासाठी सादर केली जाते."
        },
        {
          en: "For official or legal use, consult the latest applicable text of the Constitution of India, relevant legislation, official government publications, and authoritative court judgments.",
          mr: "अधिकृत किंवा कायदेशीर वापरासाठी भारतीय संविधानाचा लागू असलेला नवीनतम मजकूर, संबंधित कायदे, अधिकृत सरकारी प्रकाशने आणि प्रामाणिक न्यायालयीन निर्णय तपासावेत."
        },
        {
          en: "Where appropriate, readers should check the original source rather than relying only on a summary or explanation published on this website.",
          mr: "शक्य असेल तेथे, या संकेतस्थळावरील सारांश किंवा स्पष्टीकरणावरच अवलंबून न राहता मूळ अधिकृत स्रोताचा संदर्भ घ्यावा."
        }
      ]
    },
    {
      title: { en: "4. Educational Content and Exam Preparation", mr: "४. शैक्षणिक सामग्री आणि परीक्षेची तयारी" },
      paragraphs: [
        {
          en: "MySamvidhan may provide educational articles, explanations, quizzes, study resources, and current-affairs content related to the Indian Constitution and civic awareness.",
          mr: "MySamvidhan वर भारतीय संविधान आणि नागरिक-जागृतीशी संबंधित शैक्षणिक लेख, स्पष्टीकरणे, प्रश्नमंजुषा, अभ्याससाहित्य आणि चालू घडामोडींवरील माहिती उपलब्ध असू शकते."
        },
        {
          en: "These resources are intended to support learning and revision. They do not guarantee examination results, selection in any competitive examination, or the completeness of preparation for a particular syllabus.",
          mr: "ही सामग्री अभ्यास आणि उजळणीसाठी मदत करण्याच्या उद्देशाने दिली जाते. या सामग्रीमुळे परीक्षेत यश, कोणत्याही स्पर्धा परीक्षेत निवड किंवा विशिष्ट अभ्यासक्रमाची संपूर्ण तयारी होण्याची हमी दिली जात नाही."
        },
        {
          en: "Students and candidates should refer to the official syllabus, examination notifications, prescribed materials, and other relevant authoritative resources.",
          mr: "विद्यार्थी आणि परीक्षार्थींनी अधिकृत अभ्यासक्रम, परीक्षा अधिसूचना, निर्धारित अभ्याससाहित्य आणि इतर संबंधित अधिकृत स्रोतांचा संदर्भ घ्यावा."
        }
      ]
    },
    {
      title: { en: "5. Independent Educational Website", mr: "५. स्वतंत्र शैक्षणिक संकेतस्थळ" },
      paragraphs: [
        {
          en: "MySamvidhan is an independent educational and informational website. Unless explicitly stated and verified, it is not affiliated with, endorsed by, or officially connected to the Government of India, any state government, court, statutory authority, or public institution.",
          mr: "MySamvidhan हे स्वतंत्र शैक्षणिक आणि माहितीपर संकेतस्थळ आहे. स्पष्टपणे नमूद केलेले आणि पडताळलेले नसल्यास, या संकेतस्थळाचा भारत सरकार, कोणतेही राज्य सरकार, न्यायालय, वैधानिक प्राधिकरण किंवा सार्वजनिक संस्थेशी अधिकृत संबंध किंवा संलग्नता असल्याचा दावा केला जात नाही."
        },
        {
          en: "References to public institutions, laws, constitutional bodies, or government publications are provided for educational and informational purposes.",
          mr: "सार्वजनिक संस्था, कायदे, घटनात्मक संस्था किंवा सरकारी प्रकाशनांचे संदर्भ शैक्षणिक आणि माहितीपर उद्देशाने दिले जातात."
        },
        {
          en: "The website name and its content should not be interpreted as an indication of official government status.",
          mr: "संकेतस्थळाचे नाव किंवा त्यावरील सामग्री यावरून हे अधिकृत सरकारी संकेतस्थळ असल्याचा अर्थ काढू नये."
        }
      ]
    },
    {
      title: { en: "6. External Links and Third-Party Content", mr: "६. बाह्य दुवे आणि तृतीय-पक्ष सामग्री" },
      paragraphs: [
        {
          en: "This website may include links to external websites, official publications, government portals, educational resources, or other third-party sources.",
          mr: "या संकेतस्थळावर बाह्य संकेतस्थळे, अधिकृत प्रकाशने, सरकारी पोर्टल्स, शैक्षणिक साधने किंवा इतर तृतीय-पक्ष स्रोतांचे दुवे असू शकतात."
        },
        {
          en: "These links are provided for convenience and further reference. We do not control external websites and cannot guarantee the accuracy, availability, security, or completeness of their content.",
          mr: "हे दुवे सोयीसाठी आणि अधिक माहिती मिळवण्यासाठी दिले जातात. बाह्य संकेतस्थळांवर आमचे नियंत्रण नसल्यामुळे तेथील माहितीची अचूकता, उपलब्धता, सुरक्षितता किंवा पूर्णता यांची हमी देता येत नाही."
        },
        {
          en: "Visiting an external website is subject to that website’s own terms, policies, and practices. Users should verify information directly with the relevant source.",
          mr: "बाह्य संकेतस्थळ वापरताना त्या संकेतस्थळाच्या स्वतःच्या अटी, धोरणे आणि कार्यपद्धती लागू होतात. वापरकर्त्यांनी संबंधित स्रोताकडून माहितीची पडताळणी करावी."
        }
      ]
    },
    {
      title: { en: "7. Limitation of Liability", mr: "७. दायित्वाची मर्यादा" },
      paragraphs: [
        {
          en: "To the extent permitted by applicable law, MySamvidhan and its contributors shall not be held responsible for loss, damage, or consequences arising from reliance on website content, errors or omissions, temporary unavailability, or changes in external resources.",
          mr: "लागू कायद्याने परवानगी दिलेल्या मर्यादेपर्यंत, संकेतस्थळावरील माहितीवर अवलंबून राहणे, माहितीतील चुका किंवा त्रुटी, संकेतस्थळ तात्पुरते अनुपलब्ध असणे किंवा बाह्य स्रोतांमधील बदल यांमुळे होणाऱ्या नुकसानासाठी किंवा परिणामांसाठी MySamvidhan आणि त्यातील योगदानकर्ते जबाबदार धरले जाणार नाहीत."
        },
        {
          en: "Users are responsible for independently evaluating the information and determining whether it is appropriate for their particular needs.",
          mr: "माहितीचे स्वतंत्र मूल्यमापन करणे आणि ती आपल्या विशिष्ट गरजांसाठी योग्य आहे का हे ठरवणे ही वापरकर्त्याची जबाबदारी आहे."
        },
        {
          en: "Nothing in this disclaimer is intended to exclude or limit any liability that cannot lawfully be excluded or limited under applicable law.",
          mr: "लागू कायद्यानुसार वगळता किंवा मर्यादित करता येत नसलेले कोणतेही दायित्व या अस्वीकरणाद्वारे वगळण्याचा किंवा मर्यादित करण्याचा उद्देश नाही."
        }
      ]
    },
    {
      title: { en: "8. Opinions and Interpretations", mr: "८. मते आणि स्पष्टीकरणे" },
      paragraphs: [
        {
          en: "Some educational content may explain constitutional concepts, historical developments, judicial decisions, or public issues in simplified language.",
          mr: "काही शैक्षणिक सामग्रीमध्ये घटनात्मक संकल्पना, ऐतिहासिक घडामोडी, न्यायालयीन निर्णय किंवा सार्वजनिक विषय सोप्या भाषेत स्पष्ट केलेले असू शकतात."
        },
        {
          en: "Such explanations are intended to improve general understanding and should not be treated as an official legal interpretation, a substitute for the original legal text, or a statement representing any government institution.",
          mr: "ही स्पष्टीकरणे सामान्य समज वाढवण्यासाठी आहेत. त्यांना अधिकृत कायदेशीर अर्थ, मूळ कायदेशीर मजकुराचा पर्याय किंवा कोणत्याही सरकारी संस्थेचे अधिकृत मत समजू नये."
        },
        {
          en: "Where interpretation matters, readers should consult the relevant original documents and qualified professionals.",
          mr: "कायदेशीर अर्थ लावण्याची आवश्यकता असल्यास संबंधित मूळ दस्तऐवज आणि पात्र व्यावसायिकांचा सल्ला घ्यावा."
        }
      ]
    },
    {
      title: { en: "9. Changes to This Disclaimer", mr: "९. अस्वीकरणातील बदल" },
      paragraphs: [
        {
          en: "This Disclaimer may be revised from time to time to reflect changes to website features, published content, or applicable requirements.",
          mr: "संकेतस्थळाच्या सुविधा, प्रकाशित सामग्री किंवा लागू आवश्यकतांमध्ये बदल झाल्यास हे अस्वीकरण वेळोवेळी अद्ययावत केले जाऊ शकते."
        },
        {
          en: "Any updated version will be published on this page. Readers are encouraged to review the Disclaimer periodically.",
          mr: "अद्ययावत आवृत्ती याच पृष्ठावर प्रकाशित केली जाईल. वाचकांनी वेळोवेळी हे अस्वीकरण तपासावे."
        }
      ]
    },
    {
      title: { en: "10. Contact Us", mr: "१०. आमच्याशी संपर्क" },
      paragraphs: [
        {
          en: "If you have questions about this Disclaimer or wish to report a content-related concern, you may contact us at:",
          mr: "या अस्वीकरणाबाबत काही प्रश्न असल्यास किंवा सामग्रीशी संबंधित समस्या कळवायची असल्यास खालील ईमेल पत्त्यावर संपर्क साधा."
        }
      ],
      contact: true
    }
  ],
  email: "info@mysamvidhan.in"
};
function Disclaimer() {
  const { language, pick } = useLanguage();
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20", children: [
    /* @__PURE__ */ jsx("h1", { lang: language, className: "font-display text-3xl font-semibold text-navy sm:text-4xl", children: pick(disclaimerContent.title) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: disclaimerContent.introduction.map((paragraph, index) => /* @__PURE__ */ jsx(
      "p",
      {
        lang: language,
        className: "text-base leading-relaxed text-ink/70 dark:text-ink-dark/70",
        children: pick(paragraph)
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-8", children: disclaimerContent.sections.map((section, index) => /* @__PURE__ */ jsxs("section", { "aria-labelledby": `disclaimer-section-${index + 1}`, children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          id: `disclaimer-section-${index + 1}`,
          lang: language,
          className: "font-display text-xl font-semibold text-navy dark:text-ink-dark",
          children: pick(section.title)
        }
      ),
      section.paragraphs.map((paragraph, paragraphIndex) => /* @__PURE__ */ jsx(
        "p",
        {
          lang: language,
          className: "mt-3 break-words text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-base",
          children: pick(paragraph)
        },
        paragraphIndex
      )),
      section.contact && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-base", children: [
        /* @__PURE__ */ jsx("span", { lang: language, children: language === "mr" ? "ईमेल:" : "Email:" }),
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `mailto:${disclaimerContent.email}`,
            className: "break-all text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
            children: disclaimerContent.email
          }
        )
      ] })
    ] }, section.title.en)) })
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
const __vite_import_meta_env__ = {};
const SITE_URL = ((__vite_import_meta_env__ == null ? void 0 : __vite_import_meta_env__.VITE_SITE_URL) || (typeof process !== "undefined" ? (_b = process.env) == null ? void 0 : _b.VITE_SITE_URL : "") || siteConfig.url).replace(/\/+$/, "");
const LOGO_URL = `${SITE_URL}/images/mysamvidhan-logo.svg`;
function localize(value, language) {
  return language === "mr" ? (value == null ? void 0 : value.mr) || "" : (value == null ? void 0 : value.en) || "";
}
function getBreadcrumbSchema(pathname, search, language, pageUrl) {
  const items = getBreadcrumbItems(pathname, search, {
    language,
    t: (key) => translateBreadcrumb(key, language),
    pick: (value) => localize(value, language)
  });
  if (!items.length) return null;
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...item.to ? { item: getCanonicalUrl(item.to) } : {}
    }))
  };
}
function getVisiblePageType(pathname) {
  if (pathname === "/about") return "AboutPage";
  if (pathname === "/contact") return "ContactPage";
  if (pathname === "/articles" || pathname === "/current-affairs") return "CollectionPage";
  return "WebPage";
}
function getArticleList(pathname, language) {
  const list = pathname === "/articles" ? articles : currentAffairs;
  return {
    "@type": "ItemList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: pathname === "/articles" ? `${SITE_URL}/article/${item.id}` : `${SITE_URL}/current-affairs/${item.slug}`,
      name: pathname === "/articles" ? item.articleNumber : localize(item.title, language)
    }))
  };
}
function buildStructuredData(pathname, search = "", language = "en") {
  var _a2, _b2;
  const route = getSeoRoute(pathname);
  const article = pathname.startsWith("/article/") ? getArticleById(pathname.split("/").pop()) : null;
  const currentAffair = pathname.startsWith("/current-affairs/") ? getCurrentAffairBySlug(pathname.split("/").pop()) : null;
  if (route.indexable === false || pathname === "/articles" && Boolean(search) || pathname.startsWith("/article/") && !article || pathname.startsWith("/current-affairs/") && !currentAffair || !route.title && !article && !currentAffair) {
    return [];
  }
  const pageUrl = getCanonicalUrl(pathname);
  const pick = (value) => localize(value, language);
  const title = article ? `${article.articleNumber} — ${pick(article.title)} | ${siteConfig.name}` : currentAffair ? pick(currentAffair.seoTitle || currentAffair.title) : pick(route.title);
  const description = article ? pick(article.simpleExplanation) : currentAffair ? pick(currentAffair.shortDescription) : pick(route.description);
  const organizationId = `${SITE_URL}#organization`;
  const websiteId = `${SITE_URL}#website`;
  const pageId = `${pageUrl}#webpage`;
  const breadcrumb = getBreadcrumbSchema(pathname, search, language, pageUrl);
  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL
      }
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      url: SITE_URL,
      publisher: { "@id": organizationId },
      inLanguage: language === "mr" ? "mr-IN" : "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/articles?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": getVisiblePageType(pathname),
      "@id": pageId,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": websiteId },
      inLanguage: language === "mr" ? "mr-IN" : "en-IN",
      ...breadcrumb ? { breadcrumb: { "@id": breadcrumb["@id"] } } : {},
      ...article || currentAffair ? { mainEntity: { "@id": `${pageUrl}#article` } } : {},
      ...pathname === "/articles" || pathname === "/current-affairs" ? { mainEntity: getArticleList(pathname, language) } : {}
    }
  ];
  if (breadcrumb) graph.push(breadcrumb);
  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: pick(article.title),
      description,
      image: `${SITE_URL}/images/articles/article-${String(article.id).toLowerCase()}.webp`,
      mainEntityOfPage: { "@id": pageId },
      url: pageUrl,
      inLanguage: language === "mr" ? "mr-IN" : "en-IN",
      publisher: { "@id": organizationId },
      ...article.articleNumber ? { articleSection: article.articleNumber } : {},
      ...((_a2 = article.keywords) == null ? void 0 : _a2.length) ? { keywords: article.keywords.join(", ") } : {}
    });
  }
  if (currentAffair) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: pick(currentAffair.title),
      description,
      mainEntityOfPage: { "@id": pageId },
      url: pageUrl,
      inLanguage: language === "mr" ? "mr-IN" : "en-IN",
      publisher: { "@id": organizationId },
      ...currentAffair.date ? { datePublished: currentAffair.date } : {},
      ...currentAffair.updatedAt ? { dateModified: currentAffair.updatedAt } : {},
      ...currentAffair.category ? { articleSection: currentAffair.category } : {},
      ...((_b2 = currentAffair.keywords) == null ? void 0 : _b2.length) ? { keywords: currentAffair.keywords.join(", ") } : {}
    });
  }
  if (pathname === "/faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      name: title,
      inLanguage: language === "mr" ? "mr-IN" : "en-IN",
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
  return graph;
}
const SCHEMA_ID = "samvidhan-jsonld";
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
  }).replace(/</g, "\\u003c");
}
function removeSchema() {
  var _a2;
  (_a2 = document.head.querySelector(`#${SCHEMA_ID}`)) == null ? void 0 : _a2.remove();
}
function SchemaJsonLd() {
  const { pathname, search } = useLocation();
  const { language } = useLanguage();
  useEffect(() => {
    const graph = buildStructuredData(pathname, search, language);
    if (graph.length) upsertSchema(graph);
    else removeSchema();
  }, [pathname, search, language]);
  return null;
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
  var _a2, _b2, _c, _d, _e;
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
  const seoSections = ((_a2 = article.seoSections) == null ? void 0 : _a2[language]) || [];
  const faqs2 = ((_b2 = article.faq) == null ? void 0 : _b2[language]) || [];
  const mcqs = ((_c = article.mcqs) == null ? void 0 : _c[language]) || [];
  const related = (article.relatedSlugs || []).map((relatedSlug) => getCurrentAffairBySlug(relatedSlug)).filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16", children: [
    /* @__PURE__ */ jsx(PageMeta, {}),
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
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "app-main flex-1", children: [
      /* @__PURE__ */ jsx(Breadcrumbs, {}),
      /* @__PURE__ */ jsxs(Routes, { children: [
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
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(BookmarkProvider, { children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(App, {}) }) }) }) }) })
  );
}
export {
  render
};
