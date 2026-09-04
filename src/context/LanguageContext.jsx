import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'samvidhan_language'

const STRINGS = {
  en: {
    nav_home: 'Home',
    nav_articles: 'Articles',
    nav_categories: 'Categories',
    nav_rights: 'Fundamental Rights',
    nav_amendments: 'Amendments',
    nav_quiz: 'Quiz',
    nav_about: 'About',
    nav_duties: 'Fundamental Duties',
    nav_directive: 'Directive Principles',
    nav_bookmarks: 'Saved Articles',
    search_placeholder: 'Search Article number, rights or keywords...',
    search_button: 'Search',
    popular_searches: 'Popular searches',
    hero_badge: 'Indian Constitution',
    hero_heading_1: 'Know Your Constitution.',
    hero_heading_2: 'Know Your Rights.',
    hero_desc:
      'Explore the Constitution of India and understand its Articles, Rights, Duties and Amendments in simple and easy language.',
    stat_articles: 'Articles',
    stat_parts: 'Parts',
    stat_schedules: 'Schedules',
    stat_amendments: 'Amendments',
    explore_heading: 'Explore the Constitution',
    important_articles: 'Important Articles You Should Know',
    view_all_articles: 'View all Articles',
    learn_more: 'Learn More',
    view_details: 'View Details',
    did_you_know: 'Did you know?',
    footer_tagline: 'Know Your Constitution. Know Your Rights.',
    footer_disclaimer_title: 'Disclaimer',
    footer_disclaimer:
      'This website is created for educational and informational purposes only. It does not provide legal advice. For legal matters, consult a qualified legal professional.',
    footer_copyright: '© 2026 Samvidhan.',
    articles_page_title: 'Constitutional Articles',
    articles_page_sub: 'Search and explore the Articles of the Indian Constitution.',
    filter_all: 'All Articles',
    sort_asc: 'Article Number: Ascending',
    sort_desc: 'Article Number: Descending',
    no_results: 'No articles match your search.',
    official_text: 'Official Constitutional Text',
    simple_explanation: 'Simple Explanation',
    marathi_explanation: 'सोप्या मराठीत',
    very_simple: 'Very Simple',
    easy_example: 'Easy Example',
    related_articles: 'Related Articles',
    save_article: 'Save Article',
    saved: 'Saved',
    source_label: 'Source',
    last_verified: 'Last Verified',
    verify_notice:
      'This content is a sample educational structure. Please verify all constitutional text against an authoritative source before relying on it.',
    rights_title: 'Fundamental Rights',
    rights_sub: 'Understand your fundamental rights, guaranteed by the Constitution.',
    duties_title: 'Fundamental Duties',
    duties_sub: 'Know your duties as a citizen of India.',
    directive_title: 'Directive Principles of State Policy',
    directive_sub: 'Guidelines that shape governance and public policy.',
    amendments_title: 'Constitutional Amendments',
    amendments_sub: 'Explore important changes made to the Constitution over time.',
    quiz_title: 'Test Your Constitution Knowledge',
    quiz_start: 'Start Quiz',
    quiz_next: 'Next',
    quiz_finish: 'Finish',
    quiz_score: 'Your Score',
    quiz_correct: 'Correct Answers',
    quiz_wrong: 'Wrong Answers',
    quiz_percentage: 'Percentage',
    quiz_excellent: 'Excellent!',
    quiz_keep_learning: 'Keep Learning!',
    quiz_try_again: 'Try Again',
    quiz_question: 'Question',
    quiz_of: 'of',
    bookmarks_title: 'My Saved Articles',
    bookmarks_empty: 'No saved Articles yet.',
    about_title: 'About Samvidhan',
    about_body:
      'Samvidhan is an educational platform created to help people understand the Constitution of India in simple and accessible language.',
    about_mission_title: 'Our Mission',
    about_mission_body: 'Make constitutional knowledge easy and accessible.',
    about_intro: 'Welcome to Samvidhan – a platform dedicated to making the Constitution of India simple, accessible and easy to understand for everyone.',
    about_goal: 'Our goal is to provide clear and informative content about the Constitution of India, Fundamental Rights and Duties, constitutional provisions, important Articles, Amendments, Schedules and other important aspects of the Indian Constitution.',
    about_mission_detail: 'The Constitution of India is the foundation of our democracy. However, constitutional information can sometimes be difficult to understand because of complex legal language.',
    about_mission_detail_2: 'At Samvidhan, our mission is to present constitutional information in a simple, structured and easy-to-understand format so that students, citizens, competitive exam aspirants and anyone interested in the Constitution can learn about it easily.',
    about_find_title: 'What You Will Find on Samvidhan',
    about_find_1: 'Information about the Constitution of India', about_find_2: 'Articles and constitutional provisions', about_find_3: 'Fundamental Rights and Fundamental Duties', about_find_4: 'Directive Principles of State Policy', about_find_5: 'Constitutional Amendments', about_find_6: 'Schedules of the Constitution', about_find_7: 'Important constitutional facts', about_find_8: 'Educational and informative articles', about_find_9: 'Information useful for students and competitive exam preparation',
    about_commitment_title: 'Our Commitment',
    about_commitment: 'We aim to provide accurate, useful and regularly updated information. We make reasonable efforts to verify the information published on this website using reliable and publicly available sources.',
    about_independent: 'Samvidhan is an independent informational and educational website. It is not affiliated with or operated by the Government of India unless specifically stated on a particular page.',
    about_contact: 'If you find an error, outdated information or have a suggestion, please contact us.', about_email: 'Email:', about_thanks: 'Thank you for visiting Samvidhan.', about_tagline: 'Samvidhan – Know Your Constitution.',
    contact_title: 'Contact Us', contact_intro: 'We would love to hear from you.', contact_intro_detail: 'If you have a question, suggestion, feedback, correction or notice an error on our website, please feel free to contact us.', contact_get_in_touch: 'Get in Touch', contact_can_contact: 'You can contact us regarding:', contact_item_1: 'Suggestions and feedback', contact_item_2: 'Correction of information', contact_item_3: 'Website-related issues', contact_item_4: 'Content-related queries', contact_item_5: 'Copyright concerns', contact_item_6: 'General enquiries', contact_response: 'We try to review and respond to genuine enquiries as soon as possible.', contact_corrections: 'Content Corrections', contact_corrections_detail: 'We make reasonable efforts to ensure that the information published on Samvidhan is accurate and useful.', contact_corrections_request: 'If you believe that any information on the website is incorrect, incomplete or outdated, please email us with the relevant page URL and details of the correction.', contact_corrections_thanks: 'We appreciate your help in improving the accuracy and quality of our content.', contact_thanks: 'Thank you for getting in touch with Samvidhan.',
    category: 'Category',
    read_time: 'min read',
    search_results_for: 'Search results for',
    clear_search: 'Clear search',
    nav_premium: 'Premium', common_easy: 'Easy', common_medium: 'Medium', common_hard: 'Hard',
    nav_preamble: 'Preamble', nav_faq: 'FAQ', footer_navigation: 'Navigation', footer_privacy: 'Privacy Policy', footer_terms: 'Terms & Conditions',
    nav_dashboard: 'Dashboard',
    nav_open_menu: 'Open menu',
    nav_close_menu: 'Close menu',
    dashboard_title: 'Dashboard', dashboard_welcome: 'Welcome back!', dashboard_intro: 'Continue your journey of learning the Indian Constitution.',
    exam_title: 'Exam Preparation', exam_sub: 'Structured Constitution and polity practice for MPSC and UPSC learners.', exam_mpsc: 'MPSC Constitution Preparation', exam_upsc: 'UPSC Polity Preparation', exam_mpsc_desc: 'A practical path from foundational Articles to Maharashtra-focused revision.', exam_upsc_desc: 'Build conceptual depth and practise the reasoning expected in civil services exams.', notes_title: 'Premium Notes', notes_sub: 'Compact, searchable note architecture ready for verified study content.', progress_title: 'My Progress', progress_sub: 'A clear view of your practice habits. Account sync will be added with authentication.', learn_title: 'Learn Indian Constitution', learn_sub: 'Choose a path that matches your curiosity, then build from reliable constitutional concepts.', advanced_title: 'Advanced Quiz', advanced_sub: 'Challenge your understanding with focused, exam-oriented practice.', learn_article: 'Article Explained', learn_article_desc: 'Read clear explanations of individual Articles.', learn_rights: 'Fundamental Rights Explained', learn_rights_desc: 'Understand rights, remedies and real-world meaning.', learn_basics: 'Constitution Basics', learn_basics_desc: 'Start with the structure and language of the Constitution.', learn_amendments: 'Important Amendments', learn_amendments_desc: 'Trace the changes that shaped constitutional practice.', learn_mpsc: 'MPSC Preparation', learn_mpsc_desc: 'Build a focused foundation for MPSC polity study.', learn_upsc: 'UPSC Preparation', learn_upsc_desc: 'Develop depth through structured polity practice.',
    dashboard_learning: 'My Learning', dashboard_saved: 'Saved Articles', dashboard_recent_quiz: 'Recent Quiz', dashboard_quiz_progress: 'Quiz Progress', dashboard_premium_status: 'Premium Status', dashboard_recommended_topics: 'Recommended Topics', dashboard_quick_actions: 'Quick Actions', dashboard_continue: 'Continue Learning', dashboard_explore: 'Explore Articles', dashboard_take_quiz: 'Take a Quiz', dashboard_view_progress: 'View Progress', dashboard_bookmarks: 'My Bookmarks', dashboard_empty: 'No saved articles yet.', dashboard_empty_help: 'Start exploring the Constitution and save important Articles.', dashboard_activity: 'Recent Activity', dashboard_your_progress: 'Your Progress', dashboard_completed: 'Quizzes Completed', dashboard_average: 'Average Score', dashboard_best: 'Best Score', dashboard_questions: 'Questions Answered', dashboard_correct: 'Correct Answers', dashboard_accuracy: 'Accuracy', dashboard_premium: 'Premium', dashboard_free: 'Free Plan', dashboard_member: 'Premium Member', dashboard_upgrade: 'Upgrade to Premium', dashboard_recommended: 'Recommended for You', dashboard_important: 'Important Articles', dashboard_rights: 'Fundamental Rights', dashboard_duties: 'Fundamental Duties', dashboard_amendments: 'Constitutional Amendments', dashboard_view_all: 'View All', dashboard_no_activity: 'No recent activity yet.',
    premium_title: 'Premium', premium_hero: 'Unlock More. Learn Better.', premium_features: 'Premium Features', premium_monthly: 'Monthly Plan', premium_yearly: 'Yearly Plan', premium_upgrade: 'Upgrade Now', premium_best: 'Best Value', premium_ad_free: 'Ad-Free Experience', premium_content: 'Premium Content', premium_quiz: 'Advanced Quiz', premium_exam: 'Exam Preparation', premium_tracking: 'Progress Tracking', premium_current: 'Current plan', premium_choose: 'Choose plan', premium_unlock: 'Upgrade to unlock this content.', premium_view_plans: 'View Premium Plans', common_reading_list: 'Reading list', common_link_soon: 'Link coming soon', common_buy: 'Buy book', common_practice: 'Practice now', common_open_note: 'Open note', common_all_topics: 'All topics', common_all_levels: 'All levels', common_topic: 'Topic', common_difficulty: 'Difficulty', common_question: 'Question', common_view_progress: 'View my progress', common_study_tracks: 'Study tracks', common_revision_library: 'Revision library', common_learning_record: 'Learning record', common_my_learning_space: 'My learning space', common_start_learning: 'Start learning', common_quick_links: 'Quick links', common_plan: 'Plan', common_saved_list: 'Your personal reading list', common_no_attempts: 'No attempts yet', common_current_access: 'Current access', common_not_started: 'Not started', common_free_access: 'Basic access', common_everything_monthly: 'Everything in Monthly', common_full_year: 'Full-year access', common_advanced_revision: 'Advanced revision tools', common_what_adds: 'What Premium adds', common_explore_exam: 'Explore exam preparation', common_challenge: 'Challenge your understanding with focused, exam-oriented practice.', common_premium_notes: 'Premium Notes', common_compact_notes: 'Compact, searchable note architecture ready for verified study content.', common_topics_practiced: 'Topics practiced', common_guided_start: 'A guided starting point', common_choose_path: 'Choose a path that matches your curiosity, then build from reliable constitutional concepts.', common_start: 'Start learning', common_current_plan: 'Current plan', common_free: 'Free', common_premium_member: 'Premium', common_unlock: 'Unlock Premium', common_continue: 'Continue learning', common_not_available: '—', common_book_cover: 'Book cover', common_account_sync: 'Account sync will be added with authentication.',
  },
  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_articles: 'कलमे',
    nav_categories: 'श्रेणी',
    nav_rights: 'मूलभूत अधिकार',
    nav_amendments: 'दुरुस्त्या',
    nav_quiz: 'प्रश्नमंजुषा',
    nav_about: 'आमच्याविषयी',
    nav_duties: 'मूलभूत कर्तव्ये',
    nav_directive: 'मार्गदर्शक तत्त्वे',
    nav_bookmarks: 'जतन केलेली कलमे',
    search_placeholder: 'कलम क्रमांक, अधिकार किंवा कीवर्ड शोधा...',
    search_button: 'शोधा',
    popular_searches: 'लोकप्रिय शोध',
    hero_badge: 'भारतीय संविधान',
    hero_heading_1: 'आपले संविधान जाणून घ्या.',
    hero_heading_2: 'आपले अधिकार समजून घ्या.',
    hero_desc: 'भारतीय संविधानातील कलमे, अधिकार, कर्तव्ये आणि दुरुस्त्या सोप्या भाषेत समजून घ्या.',
    stat_articles: 'कलमे',
    stat_parts: 'भाग',
    stat_schedules: 'परिशिष्टे',
    stat_amendments: 'दुरुस्त्या',
    explore_heading: 'संविधान जाणून घ्या',
    important_articles: 'महत्त्वाची कलमे जी तुम्हाला माहीत असावीत',
    view_all_articles: 'सर्व कलमे पहा',
    learn_more: 'अधिक जाणून घ्या',
    view_details: 'तपशील पहा',
    did_you_know: 'तुम्हाला माहिती आहे का?',
    footer_tagline: 'आपले संविधान जाणून घ्या. आपले अधिकार समजून घ्या.',
    footer_disclaimer_title: 'अस्वीकरण',
    footer_disclaimer:
      'ही वेबसाइट केवळ शैक्षणिक आणि माहितीच्या उद्देशाने तयार करण्यात आली आहे. ही कायदेशीर सल्ला सेवा नाही. कायदेशीर बाबींसाठी पात्र कायदे तज्ज्ञांचा सल्ला घ्या.',
    footer_copyright: '© २०२६ संविधान.',
    articles_page_title: 'संवैधानिक कलमे',
    articles_page_sub: 'भारतीय संविधानातील कलमे शोधा आणि जाणून घ्या.',
    filter_all: 'सर्व कलमे',
    sort_asc: 'कलम क्रमांक: चढत्या क्रमाने',
    sort_desc: 'कलम क्रमांक: उतरत्या क्रमाने',
    no_results: 'तुमच्या शोधाशी जुळणारे कोणतेही कलम नाही.',
    official_text: 'अधिकृत संवैधानिक मजकूर',
    simple_explanation: 'सोपे स्पष्टीकरण (इंग्रजी)',
    marathi_explanation: 'सोप्या मराठीत',
    very_simple: 'अगदी सोपे',
    easy_example: 'सोपे उदाहरण',
    related_articles: 'संबंधित कलमे',
    save_article: 'कलम जतन करा',
    saved: 'जतन केले',
    source_label: 'स्रोत',
    last_verified: 'शेवटची पडताळणी',
    verify_notice:
      'हा मजकूर एक नमुना शैक्षणिक रचना आहे. यावर अवलंबून राहण्यापूर्वी कृपया सर्व संवैधानिक मजकूर अधिकृत स्रोताकडून पडताळून पहा.',
    rights_title: 'मूलभूत अधिकार',
    rights_sub: 'संविधानाने हमी दिलेले तुमचे मूलभूत अधिकार समजून घ्या.',
    duties_title: 'मूलभूत कर्तव्ये',
    duties_sub: 'भारताचा नागरिक म्हणून तुमची कर्तव्ये जाणून घ्या.',
    directive_title: 'राज्याच्या धोरणाची मार्गदर्शक तत्त्वे',
    directive_sub: 'शासन आणि सार्वजनिक धोरणाला दिशा देणारी मार्गदर्शक तत्त्वे.',
    amendments_title: 'संविधान दुरुस्त्या',
    amendments_sub: 'कालांतराने संविधानात झालेले महत्त्वाचे बदल जाणून घ्या.',
    quiz_title: 'तुमच्या संविधानाच्या ज्ञानाची चाचणी घ्या',
    quiz_start: 'प्रश्नमंजुषा सुरू करा',
    quiz_next: 'पुढे',
    quiz_finish: 'समाप्त करा',
    quiz_score: 'तुमचे गुण',
    quiz_correct: 'बरोबर उत्तरे',
    quiz_wrong: 'चुकीची उत्तरे',
    quiz_percentage: 'टक्केवारी',
    quiz_excellent: 'उत्कृष्ट!',
    quiz_keep_learning: 'शिकत रहा!',
    quiz_try_again: 'पुन्हा प्रयत्न करा',
    quiz_question: 'प्रश्न',
    quiz_of: 'पैकी',
    bookmarks_title: 'माझी जतन केलेली कलमे',
    bookmarks_empty: 'अजून कोणतेही कलम जतन केलेले नाही.',
    about_title: 'संविधान विषयी',
    about_body:
      'संविधान हे भारतीय संविधान सर्वसामान्य लोकांना सोप्या आणि समजण्यासारख्या भाषेत समजावून सांगण्यासाठी तयार केलेले शैक्षणिक व्यासपीठ आहे.',
    about_mission_title: 'आमचे ध्येय',
    about_mission_body: 'संवैधानिक ज्ञान सोपे आणि सहज उपलब्ध करून देणे.',
    about_intro: 'संविधान – भारताच्या संविधानाची माहिती सोप्या, स्पष्ट आणि सर्वांना सहज समजेल अशा पद्धतीने उपलब्ध करून देण्यासाठी तयार केलेले एक शैक्षणिक आणि माहितीपर व्यासपीठ आहे.',
    about_goal: 'भारताचे संविधान, मूलभूत अधिकार आणि कर्तव्ये, संविधानातील महत्त्वाचे अनुच्छेद, घटनादुरुस्त्या, अनुसूच्या आणि संविधानाशी संबंधित इतर महत्त्वाच्या विषयांची माहिती सोप्या भाषेत उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.',
    about_mission_detail: 'भारताचे संविधान हा आपल्या लोकशाहीचा पाया आहे. मात्र संविधानातील कायदेशीर आणि तांत्रिक भाषा अनेकदा समजण्यास कठीण वाटू शकते.',
    about_mission_detail_2: 'Samvidhan चे उद्दिष्ट संविधानातील माहिती सोप्या, व्यवस्थित आणि समजण्यास सुलभ स्वरूपात मांडणे आहे, जेणेकरून विद्यार्थी, नागरिक, स्पर्धा परीक्षांची तयारी करणारे विद्यार्थी आणि संविधानाबद्दल जाणून घेण्याची इच्छा असणाऱ्या प्रत्येकाला त्याचा सहज अभ्यास करता येईल.',
    about_find_title: 'Samvidhan वर तुम्हाला काय मिळेल?',
    about_find_1: 'भारताच्या संविधानाची माहिती', about_find_2: 'संविधानातील अनुच्छेद आणि तरतुदी', about_find_3: 'मूलभूत अधिकार आणि मूलभूत कर्तव्ये', about_find_4: 'राज्याच्या धोरणाची मार्गदर्शक तत्त्वे', about_find_5: 'संविधानातील घटनादुरुस्त्या', about_find_6: 'संविधानाच्या अनुसूच्या', about_find_7: 'संविधानाशी संबंधित महत्त्वाची तथ्ये', about_find_8: 'शैक्षणिक आणि माहितीपर लेख', about_find_9: 'विद्यार्थी आणि स्पर्धा परीक्षांसाठी उपयुक्त माहिती',
    about_commitment_title: 'आमची बांधिलकी',
    about_commitment: 'आम्ही अचूक, उपयुक्त आणि शक्य तितकी अद्ययावत माहिती देण्याचा प्रयत्न करतो. वेबसाइटवर प्रकाशित केलेली माहिती विश्वसनीय आणि सार्वजनिकरित्या उपलब्ध स्रोतांच्या आधारे तपासण्याचा आम्ही वाजवी प्रयत्न करतो.',
    about_independent: 'Samvidhan हे एक स्वतंत्र शैक्षणिक आणि माहितीपर व्यासपीठ आहे. एखाद्या पृष्ठावर स्पष्टपणे नमूद केले नसल्यास, ही वेबसाइट भारत सरकारशी संलग्न किंवा भारत सरकारद्वारे चालवली जात नाही.',
    about_contact: 'वेबसाइटवरील कोणतीही माहिती चुकीची किंवा कालबाह्य असल्याचे आढळल्यास किंवा तुमच्याकडे काही सूचना असल्यास आमच्याशी संपर्क साधा.', about_email: 'ईमेल:', about_thanks: 'Samvidhan ला भेट दिल्याबद्दल धन्यवाद.', about_tagline: 'Samvidhan – आपले संविधान जाणून घ्या.',
    contact_title: 'आमच्याशी संपर्क साधा', contact_intro: 'तुमचे प्रश्न, सूचना आणि अभिप्राय जाणून घेण्यास आम्हाला आनंद होईल.', contact_intro_detail: 'वेबसाइटशी संबंधित काही प्रश्न असल्यास, सूचना किंवा अभिप्राय द्यायचा असल्यास किंवा वेबसाइटवरील कोणतीही माहिती चुकीची अथवा कालबाह्य असल्याचे आढळल्यास आमच्याशी संपर्क साधा.', contact_get_in_touch: 'संपर्क', contact_can_contact: 'तुम्ही खालील बाबींसाठी आमच्याशी संपर्क साधू शकता:', contact_item_1: 'सूचना आणि अभिप्राय', contact_item_2: 'माहितीमध्ये दुरुस्ती', contact_item_3: 'वेबसाइटशी संबंधित समस्या', contact_item_4: 'सामग्रीशी संबंधित प्रश्न', contact_item_5: 'कॉपीराइटशी संबंधित बाबी', contact_item_6: 'सामान्य चौकशी', contact_response: 'आम्ही प्राप्त झालेल्या योग्य चौकशीचे शक्य तितक्या लवकर परीक्षण करून उत्तर देण्याचा प्रयत्न करतो.', contact_corrections: 'माहितीमध्ये दुरुस्ती', contact_corrections_detail: 'Samvidhan वर प्रकाशित केलेली माहिती अचूक आणि उपयुक्त असावी यासाठी आम्ही वाजवी प्रयत्न करतो.', contact_corrections_request: 'वेबसाइटवरील कोणतीही माहिती चुकीची, अपूर्ण किंवा कालबाह्य असल्याचे तुम्हाला वाटत असल्यास, संबंधित पृष्ठाची लिंक आणि दुरुस्तीची माहिती आम्हाला ईमेलद्वारे पाठवा.', contact_corrections_thanks: 'वेबसाइटवरील माहितीची अचूकता आणि गुणवत्ता सुधारण्यासाठी तुमचे सहकार्य आमच्यासाठी महत्त्वाचे आहे.', contact_thanks: 'Samvidhan शी संपर्क साधल्याबद्दल धन्यवाद.',
    category: 'श्रेणी',
    read_time: 'मिनिट वाचन',
    search_results_for: 'यासाठी शोध निकाल',
    clear_search: 'शोध साफ करा',
    nav_premium: 'प्रीमियम', common_easy: 'सोपे', common_medium: 'मध्यम', common_hard: 'कठीण',
    nav_preamble: 'उद्देशिका', nav_faq: 'प्रश्नोत्तरे', footer_navigation: 'नेव्हिगेशन', footer_privacy: 'गोपनीयता धोरण', footer_terms: 'नियम आणि अटी',
    nav_dashboard: 'डॅशबोर्ड',
    nav_open_menu: 'मेनू उघडा',
    nav_close_menu: 'मेनू बंद करा',
    dashboard_title: 'डॅशबोर्ड', dashboard_welcome: 'पुन्हा स्वागत आहे!', dashboard_intro: 'भारतीय संविधान शिकण्याचा तुमचा प्रवास सुरू ठेवा.',
    exam_title: 'परीक्षा तयारी', exam_sub: 'MPSC आणि UPSC विद्यार्थ्यांसाठी संविधान आणि राज्यशास्त्राचा संरचित सराव.', exam_mpsc: 'MPSC संविधान तयारी', exam_upsc: 'UPSC राज्यशास्त्र तयारी', exam_mpsc_desc: 'मूलभूत कलमांपासून महाराष्ट्र-केंद्रित उजळणीपर्यंतचा व्यावहारिक मार्ग.', exam_upsc_desc: 'नागरी सेवा परीक्षांसाठी आवश्यक संकल्पनात्मक सखोलता आणि तर्क विकसित करा.', notes_title: 'प्रीमियम नोंदी', notes_sub: 'पडताळलेल्या अभ्यास सामग्रीसाठी संक्षिप्त आणि शोधता येणारी नोंद रचना.', progress_title: 'माझी प्रगती', progress_sub: 'तुमच्या सरावाची स्पष्ट नोंद. प्रमाणीकरण जोडल्यानंतर खाते समक्रमण उपलब्ध होईल.', learn_title: 'भारतीय संविधान शिका', learn_sub: 'तुमच्या आवडीनुसार मार्ग निवडा आणि विश्वसनीय संवैधानिक संकल्पनांपासून पुढे जा.', advanced_title: 'प्रगत प्रश्नमंजुषा', advanced_sub: 'केंद्रित, परीक्षाभिमुख सरावाने तुमचे ज्ञान तपासा.', learn_article: 'कलमाचे स्पष्टीकरण', learn_article_desc: 'वैयक्तिक कलमांची स्पष्ट स्पष्टीकरणे वाचा.', learn_rights: 'मूलभूत अधिकारांचे स्पष्टीकरण', learn_rights_desc: 'अधिकार, उपाय आणि त्यांचा वास्तविक अर्थ समजून घ्या.', learn_basics: 'संविधानाची मूलतत्त्वे', learn_basics_desc: 'संविधानाची रचना आणि भाषा समजून सुरुवात करा.', learn_amendments: 'महत्त्वाच्या दुरुस्त्या', learn_amendments_desc: 'संवैधानिक व्यवहार घडवणारे बदल जाणून घ्या.', learn_mpsc: 'MPSC तयारी', learn_mpsc_desc: 'MPSC राज्यशास्त्राच्या अभ्यासासाठी केंद्रित पाया तयार करा.', learn_upsc: 'UPSC तयारी', learn_upsc_desc: 'संरचित राज्यशास्त्राच्या सरावातून सखोलता वाढवा.',
    dashboard_learning: 'माझे शिक्षण', dashboard_saved: 'जतन केलेली कलमे', dashboard_recent_quiz: 'अलीकडील प्रश्नमंजुषा', dashboard_quiz_progress: 'प्रश्नमंजुषेची प्रगती', dashboard_premium_status: 'प्रीमियम स्थिती', dashboard_recommended_topics: 'शिफारस केलेले विषय', dashboard_quick_actions: 'जलद पर्याय', dashboard_continue: 'शिकणे सुरू ठेवा', dashboard_explore: 'कलमे पहा', dashboard_take_quiz: 'प्रश्नमंजुषा सोडवा', dashboard_view_progress: 'प्रगती पहा', dashboard_bookmarks: 'माझी जतन केलेली कलमे', dashboard_empty: 'अजून कोणतेही कलम जतन केलेले नाही.', dashboard_empty_help: 'संविधानातील महत्त्वाची कलमे शोधा आणि जतन करा.', dashboard_activity: 'अलीकडील कृती', dashboard_your_progress: 'तुमची प्रगती', dashboard_completed: 'पूर्ण केलेल्या प्रश्नमंजुषा', dashboard_average: 'सरासरी गुण', dashboard_best: 'सर्वोत्तम गुण', dashboard_questions: 'उत्तर दिलेले प्रश्न', dashboard_correct: 'बरोबर उत्तरे', dashboard_accuracy: 'अचूकता', dashboard_premium: 'प्रीमियम', dashboard_free: 'मोफत योजना', dashboard_member: 'प्रीमियम सदस्य', dashboard_upgrade: 'प्रीमियममध्ये अपग्रेड करा', dashboard_recommended: 'तुमच्यासाठी शिफारस', dashboard_important: 'महत्त्वाची कलमे', dashboard_rights: 'मूलभूत अधिकार', dashboard_duties: 'मूलभूत कर्तव्ये', dashboard_amendments: 'संविधान दुरुस्त्या', dashboard_view_all: 'सर्व पहा', dashboard_no_activity: 'अलीकडील कोणतीही कृती नाही.',
    premium_title: 'प्रीमियम', premium_hero: 'अधिक शिका. अधिक चांगले समजून घ्या.', premium_features: 'प्रीमियम वैशिष्ट्ये', premium_monthly: 'मासिक योजना', premium_yearly: 'वार्षिक योजना', premium_upgrade: 'आता अपग्रेड करा', premium_best: 'सर्वोत्तम पर्याय', premium_ad_free: 'जाहिरातमुक्त अनुभव', premium_content: 'प्रीमियम सामग्री', premium_quiz: 'प्रगत प्रश्नमंजुषा', premium_exam: 'स्पर्धा परीक्षा तयारी', premium_tracking: 'प्रगतीचे निरीक्षण', premium_current: 'सध्याची योजना', premium_choose: 'योजना निवडा', premium_unlock: 'हे सामग्री पाहण्यासाठी अपग्रेड करा.', premium_view_plans: 'प्रीमियम योजना पहा', common_reading_list: 'वाचन यादी', common_link_soon: 'लिंक लवकरच उपलब्ध होईल', common_buy: 'पुस्तक खरेदी करा', common_practice: 'आता सराव करा', common_open_note: 'नोंद उघडा', common_all_topics: 'सर्व विषय', common_all_levels: 'सर्व स्तर', common_topic: 'विषय', common_difficulty: 'कठीणता', common_question: 'प्रश्न', common_view_progress: 'माझी प्रगती पहा', common_study_tracks: 'अभ्यास मार्ग', common_revision_library: 'उजळणी संग्रह', common_learning_record: 'शिकण्याची नोंद', common_my_learning_space: 'माझे शिक्षण क्षेत्र', common_start_learning: 'शिकायला सुरुवात करा', common_quick_links: 'जलद दुवे', common_plan: 'योजना', common_saved_list: 'तुमची वैयक्तिक वाचन यादी', common_no_attempts: 'अजून प्रयत्न केलेले नाहीत', common_current_access: 'सध्याचा प्रवेश', common_not_started: 'सुरू केलेले नाही', common_free_access: 'मूलभूत प्रवेश', common_everything_monthly: 'मासिक योजनेतील सर्व सुविधा', common_full_year: 'पूर्ण वर्षाचा प्रवेश', common_advanced_revision: 'प्रगत उजळणी साधने', common_what_adds: 'प्रीमियममध्ये काय मिळते', common_explore_exam: 'परीक्षा तयारी पहा', common_challenge: 'केंद्रित, परीक्षाभिमुख सरावाने तुमचे ज्ञान तपासा.', common_premium_notes: 'प्रीमियम नोंदी', common_compact_notes: 'पडताळलेल्या अभ्यास सामग्रीसाठी संक्षिप्त आणि शोधता येणारी नोंद रचना.', common_topics_practiced: 'सराव केलेले विषय', common_guided_start: 'मार्गदर्शित सुरुवात', common_choose_path: 'तुमच्या आवडीनुसार मार्ग निवडा आणि विश्वसनीय संवैधानिक संकल्पनांपासून पुढे जा.', common_start: 'शिकायला सुरुवात करा', common_current_plan: 'सध्याची योजना', common_free: 'मोफत', common_premium_member: 'प्रीमियम', common_unlock: 'प्रीमियम मिळवा', common_continue: 'शिकणे सुरू ठेवा', common_not_available: '—', common_book_cover: 'पुस्तकाचे मुखपृष्ठ', common_account_sync: 'प्रमाणीकरण जोडल्यानंतर खाते समक्रमण उपलब्ध होईल.',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* ignore storage errors */
    }
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang) => setLanguageState(lang)
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'en' ? 'mr' : 'en'))

  const t = (key) => STRINGS[language]?.[key] ?? STRINGS.en[key] ?? key
  const pick = (obj) => (obj ? obj[language] ?? obj.en : '')

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, pick }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
