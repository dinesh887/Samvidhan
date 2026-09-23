// Sample article records for the Samvidhan educational platform.
//
// CONTENT RULE: `officialText` must hold verified constitutional text taken
// from an authoritative source (e.g. the Ministry of Law & Justice's
// official Constitution of India PDF, or india.gov.in). The placeholder
// strings below are marked `verified: false` and must be checked and
// replaced before this data is treated as authoritative. `simpleExplanation`,
// `verySimple` and `example` are original educational content, not legal
// text, and are always clearly labelled as such in the UI.
//
// Add new Articles by pushing another object with this same shape.

export const articles = [
  {
    id: '14',
    articleNumber: 'Article 14',
    title: { en: 'Right to Equality', mr: 'समानतेचा अधिकार' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'The State must treat everyone equally before the law and give everyone equal protection of the law, regardless of who they are.',
      mr: 'राज्याने कायद्यासमोर प्रत्येकाशी समान वागणूक दिली पाहिजे आणि कायद्याचे समान संरक्षण दिले पाहिजे.',
    },
    verySimple: {
      en: 'No one is above the law, and no one is left out of its protection.',
      mr: 'कोणीही कायद्यापेक्षा मोठा नाही आणि कोणालाही त्याच्या संरक्षणापासून वंचित ठेवले जात नाही.',
    },
    example: {
      en: 'If two people are treated differently by the government without a valid legal reason, Article 14 may be relevant.',
      mr: 'सरकारने दोन व्यक्तींना वैध कारणाशिवाय वेगळी वागणूक दिल्यास, कलम १४ लागू होऊ शकते.',
    },
    keywords: ['equality', 'equal protection', 'rule of law', 'समानता'],
    relatedIds: ['19', '21', '32'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '18',
    articleNumber: 'Article 18',
    title: { en: 'Abolition of Titles', mr: 'पदव्यांचे निर्मूलन' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'No title, not being a military or academic distinction, shall be conferred by the State. No citizen of India shall accept any title from any foreign State.',
      mr: 'राज्य कोणतीही पदवी, लष्करी किंवा शैक्षणिक विशेषण वगळता, प्रदान करणार नाही. भारताचा कोणताही नागरिक कोणत्याही परदेशी राज्याकडून कोणतीही पदवी स्वीकारणार नाही.',
      verified: true,
    },
    simpleExplanation: {
      en: 'Article 18 abolishes titles that create artificial social distinctions. However, military and academic distinctions are excluded from this prohibition. The Article also places constitutional restrictions on accepting titles, presents, emoluments or offices from foreign States.',
      mr: 'कलम १८ सामाजिक भेद निर्माण करणाऱ्या पदव्यांच्या प्रथेला प्रतिबंध करते. मात्र लष्करी आणि शैक्षणिक विशेषणे याला अपवाद आहेत. तसेच परदेशी राज्यांकडून पदवी, भेटवस्तू, मानधन किंवा पद स्वीकारण्याबाबत संविधानात काही निर्बंध आहेत.',
    },
    verySimple: {
      en: 'The State cannot give titles that create social distinctions. Military and academic distinctions are exceptions.',
      mr: 'सामाजिक भेद निर्माण करणाऱ्या पदव्या राज्य देऊ शकत नाही. लष्करी आणि शैक्षणिक विशेषणे याला अपवाद आहेत.',
    },
    example: {
      en: 'A government cannot confer a title simply to create a special social status for a person. Academic and military distinctions are treated as exceptions under Article 18.',
      mr: 'एखाद्या व्यक्तीला विशेष सामाजिक दर्जा निर्माण करण्यासाठी सरकार पदवी देऊ शकत नाही. मात्र शैक्षणिक आणि लष्करी विशेषणे कलम १८ अंतर्गत अपवाद आहेत.',
    },
    keywords: ['article 18', 'abolition of titles', 'titles in India', 'fundamental rights', 'equality', 'Indian Constitution', 'कलम १८', 'पदव्यांचे निर्मूलन', 'समानता', 'मूलभूत अधिकार', 'भारतीय संविधान'],
    relatedIds: ['15', '16', '17', '19'],
    source: { name: 'Legislative Department, Ministry of Law and Justice, Government of India', url: 'https://www.legislative.gov.in/' },
    lastVerified: '2026-09-21',
  },
  {
    id: '19',
    articleNumber: 'Article 19',
    title: {
      en: 'Protection of Certain Rights Regarding Freedom of Speech, etc.',
      mr: 'भाषणस्वातंत्र्य इत्यादी संबंधी काही अधिकारांचे संरक्षण',
    },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions or co-operative societies; to move freely throughout the territory of India; to reside and settle in any part of the territory of India; and to practise any profession, or to carry on any occupation, trade or business, subject to the Constitution.',
      mr: 'सर्व नागरिकांना भाषण व अभिव्यक्ती स्वातंत्र्य, शांततेने व निःशस्त्र एकत्र जमण्याचे स्वातंत्र्य, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य, भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचे स्वातंत्र्य, भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य आणि कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य आहे; हे अधिकार संविधानातील तरतुदींच्या अधीन आहेत.',
      verified: true,
    },
    simpleExplanation: {
      en: 'Article 19 protects important freedoms of citizens. These include freedom of speech and expression, peaceful assembly, forming associations or unions or co-operative societies, moving freely throughout India, residing and settling anywhere in India, and practising a profession or carrying on an occupation, trade or business. These freedoms are subject to reasonable restrictions permitted by the Constitution.',
      mr: 'कलम १९ नागरिकांच्या काही महत्त्वाच्या स्वातंत्र्यांचे संरक्षण करते. यामध्ये भाषण व अभिव्यक्ती स्वातंत्र्य, शांततेने एकत्र जमणे, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करणे, भारतभर मुक्तपणे फिरणे, भारतात कुठेही राहणे व स्थायिक होणे आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य यांचा समावेश होतो. ही स्वातंत्र्ये संविधानाने परवानगी दिलेल्या वाजवी निर्बंधांच्या अधीन आहेत.',
    },
    verySimple: {
      en: 'Citizens have important freedoms such as speaking, peacefully gathering, forming groups, moving around India, living anywhere in India and carrying on a profession, subject to constitutional restrictions.',
      mr: 'नागरिकांना बोलण्याचे, शांततेने एकत्र जमण्याचे, संघटना स्थापन करण्याचे, भारतात मुक्तपणे फिरण्याचे, कुठेही राहण्याचे आणि व्यवसाय करण्याचे महत्त्वाचे स्वातंत्र्य आहे; मात्र हे अधिकार संविधानातील निर्बंधांच्या अधीन आहेत.',
    },
    example: {
      en: 'A citizen may express an opinion, peacefully assemble with others, form an association, travel to another part of India, settle there, or practise a profession, subject to applicable constitutional and legal restrictions.',
      mr: 'एखादा नागरिक आपले मत व्यक्त करू शकतो, शांततेने इतरांसोबत एकत्र जमू शकतो, संघटना स्थापन करू शकतो, भारतातील दुसऱ्या भागात प्रवास करू शकतो, तेथे स्थायिक होऊ शकतो किंवा व्यवसाय करू शकतो; मात्र लागू असलेल्या घटनात्मक आणि कायदेशीर निर्बंधांचे पालन करावे लागते.',
    },
    keywords: ['article 19', 'freedom of speech', 'freedom of expression', 'freedom of movement', 'freedom of association', 'right to profession', 'fundamental rights', 'Indian Constitution', 'कलम १९', 'भाषण स्वातंत्र्य', 'अभिव्यक्ती स्वातंत्र्य', 'हालचालीचे स्वातंत्र्य', 'संघटना स्थापन करण्याचे स्वातंत्र्य', 'मूलभूत अधिकार', 'भारतीय संविधान'],
    relatedIds: ['18', '20', '21'],
    source: { name: 'Legislative Department, Ministry of Law and Justice, Government of India', url: 'https://www.legislative.gov.in/' },
    lastVerified: '2026-09-21',
  },
  {
    id: '21',
    articleNumber: 'Article 21',
    title: { en: 'Protection of Life and Personal Liberty', mr: 'जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'Every person has legal protection regarding life and personal liberty, subject to constitutional and legal provisions.',
      mr: 'प्रत्येक व्यक्तीच्या जीवन आणि वैयक्तिक स्वातंत्र्याला कायद्याने संरक्षण दिले जाते.',
    },
    verySimple: {
      en: 'The government cannot take away your life or freedom except according to a lawful procedure.',
      mr: 'शासन कायदेशीर प्रक्रियेशिवाय तुमचे जीवन किंवा स्वातंत्र्य हिरावून घेऊ शकत नाही.',
    },
    example: {
      en: 'Courts have interpreted this Article to cover matters like personal dignity and a clean environment, beyond just physical life.',
      mr: 'न्यायालयांनी हे कलम केवळ शारीरिक जीवनापुरते मर्यादित न ठेवता वैयक्तिक प्रतिष्ठा आणि स्वच्छ पर्यावरणासारख्या बाबींनाही लागू केले आहे.',
    },
    keywords: ['life', 'liberty', 'personal freedom', 'due process', 'जीवन', 'स्वातंत्र्य'],
    relatedIds: ['14', '21a', '32'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '21a',
    articleNumber: 'Article 21A',
    title: { en: 'Right to Education', mr: 'शिक्षणाचा अधिकार' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'The State must provide free and compulsory education to children within an age range defined by law.',
      mr: 'कायद्याने ठरवलेल्या वयोगटातील मुलांना राज्याने मोफत आणि सक्तीचे शिक्षण दिले पाहिजे.',
    },
    verySimple: {
      en: 'Every child has a right to go to school for free.',
      mr: 'प्रत्येक मुलाला मोफत शाळेत जाण्याचा अधिकार आहे.',
    },
    example: {
      en: 'A government school that refuses to admit an eligible child without valid reason may be acting against this Article.',
      mr: 'वैध कारणाशिवाय पात्र मुलाला प्रवेश नाकारणारी सरकारी शाळा या कलमाच्या विरोधात वागत असू शकते.',
    },
    keywords: ['education', 'children', 'school', 'शिक्षण'],
    relatedIds: ['21', '14'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '32',
    articleNumber: 'Article 32',
    title: { en: 'Right to Constitutional Remedies', mr: 'संवैधानिक उपायांचा अधिकार' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'Citizens can approach the Supreme Court directly if their fundamental rights are violated, and the Court can issue appropriate orders or writs.',
      mr: 'मूलभूत अधिकारांचे उल्लंघन झाल्यास नागरिक थेट सर्वोच्च न्यायालयात दाद मागू शकतात, आणि न्यायालय योग्य आदेश किंवा रिट जारी करू शकते.',
    },
    verySimple: {
      en: 'If your rights are violated, you can go straight to the Supreme Court for help. Dr. B. R. Ambedkar called this the "heart and soul" of the Constitution.',
      mr: 'तुमच्या अधिकारांचे उल्लंघन झाल्यास तुम्ही थेट सर्वोच्च न्यायालयात मदतीसाठी जाऊ शकता. डॉ. बाबासाहेब आंबेडकरांनी याला संविधानाचा "आत्मा" म्हटले आहे.',
    },
    example: {
      en: 'A person whose right to equality was violated can file a writ petition in the Supreme Court under this Article.',
      mr: 'ज्या व्यक्तीच्या समानतेच्या अधिकाराचे उल्लंघन झाले आहे ती या कलमाखाली सर्वोच्च न्यायालयात रिट याचिका दाखल करू शकते.',
    },
    keywords: ['remedies', 'writ', 'supreme court', 'enforcement', 'उपाय', 'रिट'],
    relatedIds: ['14', '21'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '5',
    articleNumber: 'Article 5',
    title: { en: 'Citizenship at the Commencement of the Constitution', mr: 'संविधान अंमलात येताना नागरिकत्व' },
    categoryKey: 'citizenship',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'This Article laid out the rules for who was considered a citizen of India when the Constitution came into force.',
      mr: 'संविधान लागू झाले तेव्हा भारताचा नागरिक कोण मानला जाईल, याचे नियम या कलमात दिले आहेत.',
    },
    verySimple: {
      en: 'It decided who automatically became an Indian citizen in 1950.',
      mr: 'इ.स. १९५० मध्ये आपोआप भारताचा नागरिक कोण बनला हे यात ठरवले गेले.',
    },
    example: {
      en: 'Someone born in India and residing there at the time the Constitution began would generally fall under this Article.',
      mr: 'संविधान लागू झाले त्यावेळी भारतात जन्मलेली आणि वास्तव्यास असलेली व्यक्ती साधारणपणे या कलमाखाली येते.',
    },
    keywords: ['citizenship', 'nationality', 'नागरिकत्व'],
    relatedIds: [],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '79',
    articleNumber: 'Article 79',
    title: { en: 'Constitution of Parliament', mr: 'संसदेची रचना' },
    categoryKey: 'union-government',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'This Article establishes Parliament, consisting of the President and the two Houses — the Lok Sabha and the Rajya Sabha.',
      mr: 'या कलमानुसार राष्ट्रपती आणि दोन सभागृहे — लोकसभा आणि राज्यसभा — मिळून संसद स्थापन केली जाते.',
    },
    verySimple: {
      en: "India's Parliament has three parts: the President, the Lok Sabha, and the Rajya Sabha.",
      mr: 'भारताच्या संसदेत तीन भाग आहेत: राष्ट्रपती, लोकसभा आणि राज्यसभा.',
    },
    example: {
      en: 'A new law generally needs to be passed by both the Lok Sabha and Rajya Sabha before it goes to the President.',
      mr: 'नवीन कायदा राष्ट्रपतींकडे जाण्यापूर्वी साधारणपणे लोकसभा आणि राज्यसभा या दोन्ही सभागृहांनी मंजूर करणे आवश्यक असते.',
    },
    keywords: ['parliament', 'lok sabha', 'rajya sabha', 'संसद'],
    relatedIds: [],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
    id: '153',
    articleNumber: 'Article 153',
    title: { en: 'Governors of States', mr: 'राज्यांचे राज्यपाल' },
    categoryKey: 'state-government',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'This Article requires that every State have a Governor, who acts as the head of the State executive.',
      mr: 'या कलमानुसार प्रत्येक राज्याला राज्यपाल असणे आवश्यक आहे, जो राज्याच्या कार्यकारी मंडळाचा प्रमुख असतो.',
    },
    verySimple: {
      en: 'Each state has a Governor, similar to how the country has a President.',
      mr: 'देशाला राष्ट्रपती असतात त्याचप्रमाणे प्रत्येक राज्याला राज्यपाल असतात.',
    },
    example: {
      en: 'A Governor giving assent to a state legislature bill is acting within the role described near this Article.',
      mr: 'राज्य विधानसभेच्या विधेयकाला संमती देणारे राज्यपाल या कलमाजवळ वर्णन केलेल्या भूमिकेत कार्य करत असतात.',
    },
    keywords: ['governor', 'state executive', 'राज्यपाल'],
    relatedIds: [],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
  id: '124',

  articleNumber: 'Article 124',

  title: {
    en: 'Establishment and Constitution of the Supreme Court',
    mr: 'सर्वोच्च न्यायालयाची स्थापना आणि रचना',
  },

  categoryKey: 'judiciary',

  officialText: {
    en: 'Article 124 of the Constitution of India provides for the establishment and constitution of the Supreme Court of India and contains provisions relating to the appointment and qualifications of its judges. The official constitutional text should be verified against the latest authoritative version before publication.',
    mr: 'भारतीय संविधानातील कलम 124 भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबाबत तरतुदी करते तसेच सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्ती आणि पात्रतेशी संबंधित तरतुदींचा समावेश करते. अधिकृत मजकूर प्रकाशित करण्यापूर्वी अद्ययावत अधिकृत संविधानाच्या प्रतीशी पडताळला जावा.',
    verified: false,
  },

  simpleExplanation: {
    en: 'Article 124 deals with the establishment and constitution of the Supreme Court of India. It provides the constitutional framework for the Court and contains provisions relating to the appointment, qualifications, tenure and removal of Supreme Court judges.',
    mr: 'कलम 124 भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबाबत तरतुदी करते. या कलमामध्ये सर्वोच्च न्यायालयाच्या न्यायाधीशांची नियुक्ती, पात्रता, कार्यकाळ आणि पदावरून हटविण्याशी संबंधित घटनात्मक तरतुदींचा समावेश आहे.',
  },

  verySimple: {
    en: 'Article 124 is the constitutional provision that establishes the Supreme Court of India and sets out important rules concerning its judges.',
    mr: 'कलम 124 हे भारताच्या सर्वोच्च न्यायालयाच्या स्थापनेशी आणि त्याच्या न्यायाधीशांशी संबंधित महत्त्वाच्या घटनात्मक तरतुदी सांगणारे कलम आहे.',
  },

  example: {
    en: 'When studying how the Supreme Court is constitutionally established and how its judges are dealt with under the Constitution, Article 124 is one of the key provisions to understand.',
    mr: 'भारतीय संविधानानुसार सर्वोच्च न्यायालयाची स्थापना आणि त्याच्या न्यायाधीशांशी संबंधित घटनात्मक तरतुदी समजून घेताना कलम 124 हे महत्त्वाचे कलम आहे.',
  },
  seoSections: {
  en: [
    {
      heading: 'What is Article 124 of the Indian Constitution?',
      content:
        'Article 124 provides for the establishment and constitution of the Supreme Court of India and contains important provisions relating to its judges.',
    },
    {
      heading: 'Article 124(1)',
      content:
        'Article 124(1) provides for the establishment of the Supreme Court of India and specifies its constitutional composition.',
    },
    {
      heading: 'Article 124(2)',
      content:
        'Article 124(2) contains provisions relating to the appointment of judges of the Supreme Court and their tenure in office.',
    },
    {
      heading: 'Supreme Court and Articles 124 to 147',
      content:
        'Articles 124 to 147 of the Constitution contain provisions relating to the Supreme Court of India, covering matters concerning its establishment, judges, jurisdiction, powers and related constitutional provisions.',
    },
    {
      heading: 'Why is Article 124 important?',
      content:
        'Article 124 forms an important part of the constitutional framework governing the Supreme Court of India and its judges.',
    },
  ],

  mr: [
    {
      heading: 'भारतीय संविधानातील कलम 124 म्हणजे काय?',
      content:
        'कलम 124 भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबाबत तरतुदी करते तसेच त्याच्या न्यायाधीशांशी संबंधित महत्त्वाच्या घटनात्मक तरतुदी सांगते.',
    },
    {
      heading: 'कलम 124(1)',
      content:
        'कलम 124(1) भारताच्या सर्वोच्च न्यायालयाच्या स्थापनेची आणि त्याच्या घटनात्मक रचनेची तरतूद करते.',
    },
    {
      heading: 'कलम 124(2)',
      content:
        'कलम 124(2) सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्ती आणि त्यांच्या पदाशी संबंधित तरतुदी करते.',
    },
    {
      heading: 'कलम 124 ते 147 आणि सर्वोच्च न्यायालय',
      content:
        'भारतीय संविधानातील कलम 124 ते 147 मध्ये सर्वोच्च न्यायालयाची स्थापना, न्यायाधीश, अधिकारक्षेत्र, अधिकार आणि संबंधित घटनात्मक तरतुदींचा समावेश आहे.',
    },
    {
      heading: 'कलम 124 महत्त्वाचे का आहे?',
      content:
        'कलम 124 भारताच्या सर्वोच्च न्यायालयाच्या घटनात्मक रचनेचा आणि त्याच्या न्यायाधीशांशी संबंधित तरतुदींचा महत्त्वाचा आधार आहे.',
    },
  ],
},
  keywords: [
    'Article 124',
    'Article 124 of Indian Constitution',
    'Article 124 Indian Constitution',
    'Article 124 explained',
    'What is Article 124',
    'Article 124(1)',
    'Article 124(2)',
    'Supreme Court Article 124',
    'Supreme Court of India',
    'Articles 124 to 147',
    'कलम 124',
    'कलम 124 भारतीय संविधान',
    'कलम 124 मराठीत',
    'कलम 124 म्हणजे काय',
    'सर्वोच्च न्यायालय',
  ],

  relatedIds: ['32'],

  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://legislative.gov.in/constitution-of-india/',
  },

  lastVerified: null,
},
  {
    id: '352',
    articleNumber: 'Article 352',
    title: { en: 'Proclamation of Emergency', mr: 'आणीबाणीची घोषणा' },
    categoryKey: 'emergency-provisions',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'This Article allows the President to proclaim a national Emergency if the security of India is threatened by war, external aggression, or armed rebellion.',
      mr: 'युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाळीमुळे भारताच्या सुरक्षेला धोका असल्यास राष्ट्रपती राष्ट्रीय आणीबाणी जाहीर करू शकतात, अशी तरतूद या कलमात आहे.',
    },
    verySimple: {
      en: 'It gives the President special emergency powers during a serious national crisis.',
      mr: 'गंभीर राष्ट्रीय संकटाच्या वेळी राष्ट्रपतींना विशेष आणीबाणी अधिकार देते.',
    },
    example: {
      en: 'India has invoked provisions related to this Article in the past during periods of declared national emergency.',
      mr: 'भारताने भूतकाळात जाहीर राष्ट्रीय आणीबाणीच्या काळात या कलमाशी संबंधित तरतुदींचा वापर केला आहे.',
    },
    keywords: ['emergency', 'proclamation', 'national security', 'आणीबाणी'],
    relatedIds: [],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
  },
  {
  id: '15',
  articleNumber: 'Article 15',
  title: {
    en: 'Prohibition of Discrimination',
    mr: 'भेदभावास प्रतिबंध'
  },
  categoryKey: 'fundamental-rights',

  officialText: {
    en: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.',
    mr: 'राज्य कोणत्याही नागरिकाविरुद्ध केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यांपैकी कोणत्याही कारणावरून भेदभाव करणार नाही.',
    verified: true
  },

  simpleExplanation: {
    en: 'Article 15 prohibits the State from discriminating against citizens on specified grounds such as religion, race, caste, sex and place of birth. The Constitution also permits certain special provisions for disadvantaged groups.',
    mr: 'कलम १५ राज्याला धर्म, वंश, जात, लिंग आणि जन्मस्थान यांसारख्या ठरावीक आधारांवर नागरिकांमध्ये भेदभाव करण्यास प्रतिबंध करते. संविधानाने परवानगी दिलेल्या परिस्थितीत वंचित किंवा मागास घटकांसाठी विशेष तरतुदी करण्याची मुभाही राज्याला आहे.'
  },

  verySimple: {
    en: 'The government cannot discriminate against citizens simply because of their religion, race, caste, sex or place of birth.',
    mr: 'केवळ धर्म, जात, वंश, लिंग किंवा जन्मस्थानाच्या आधारावर सरकार नागरिकांशी भेदभाव करू शकत नाही.'
  },

  example: {
    en: 'If a government authority refuses a public benefit to an eligible citizen only because of their caste or religion, Article 15 may become relevant.',
    mr: 'एखाद्या पात्र नागरिकाला केवळ त्याच्या जातीमुळे किंवा धर्मामुळे सरकारी सुविधा नाकारली गेल्यास कलम १५ संबंधित ठरू शकते.'
  },

  keywords: [
    'article 15',
    'prohibition of discrimination',
    'discrimination in India',
    'fundamental rights',
    'equality',
    'caste discrimination',
    'religion',
    'Indian Constitution',
    'कलम १५',
    'भेदभावास प्रतिबंध',
    'समानता',
    'मूलभूत अधिकार',
    'भारतीय संविधान'
  ],

  relatedIds: ['16', '17'],

  source: {
    name: 'Ministry of Law and Justice, Government of India',
    url: ''
  },

  lastVerified: null
},
{
  id: '16',
  articleNumber: 'Article 16',
  title: {
    en: 'Equality of Opportunity in Public Employment',
    mr: 'सार्वजनिक नोकरीतील समान संधी'
  },
  categoryKey: 'fundamental-rights',

  officialText: {
    en: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
    mr: 'राज्याच्या अंतर्गत कोणत्याही पदावरील नोकरी किंवा नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असेल.',
    verified: true
  },

  simpleExplanation: {
    en: 'Article 16 guarantees equality of opportunity for citizens in matters relating to employment or appointment to offices under the State. The Constitution also provides for certain forms of reservation and special measures in public employment.',
    mr: 'कलम १६ राज्याच्या अंतर्गत नोकरी किंवा पदावर नियुक्तीच्या बाबतीत नागरिकांना समान संधी देण्याची हमी देते. सार्वजनिक नोकरीमध्ये काही प्रकारच्या आरक्षणासाठी आणि विशेष तरतुदींसाठी संविधानात तरतूद करण्यात आली आहे.'
  },

  verySimple: {
    en: 'Citizens should get equal opportunity when applying for government jobs, subject to the Constitution and laws.',
    mr: 'सरकारी नोकरी मिळवताना नागरिकांना संविधान आणि कायद्याच्या चौकटीत समान संधी मिळाली पाहिजे.'
  },

  example: {
    en: 'If a citizen applies for a government job, the selection process must provide equality of opportunity in accordance with constitutional and legal rules.',
    mr: 'एखादा नागरिक सरकारी नोकरीसाठी अर्ज करत असल्यास, निवड प्रक्रिया संविधान आणि कायद्यानुसार समान संधीच्या तत्त्वावर आधारित असली पाहिजे.'
  },

  keywords: [
    'article 16',
    'equality of opportunity',
    'government jobs',
    'public employment',
    'reservation',
    'fundamental rights',
    'Indian Constitution',
    'कलम १६',
    'समान संधी',
    'सरकारी नोकरी',
    'सार्वजनिक रोजगार',
    'आरक्षण',
    'मूलभूत अधिकार'
  ],

  relatedIds: ['15', '17'],

  source: {
    name: 'Ministry of Law and Justice, Government of India',
    url: ''
  },

  lastVerified: null
},
{
  id: '17',
  articleNumber: 'Article 17',
  title: {
    en: 'Abolition of Untouchability',
    mr: 'अस्पृश्यता निर्मूलन'
  },
  categoryKey: 'fundamental-rights',

  officialText: {
    en: 'Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law.',
    mr: 'अस्पृश्यता नष्ट करण्यात आली आहे आणि तिचे कोणत्याही स्वरूपातील आचरण निषिद्ध आहे. अस्पृश्यतेमुळे उद्भवणारी कोणतीही अयोग्यता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध असेल.',
    verified: true
  },

  simpleExplanation: {
    en: 'Article 17 abolishes untouchability and prohibits its practice in any form. It also provides that enforcing any disability arising from untouchability is punishable according to law.',
    mr: 'कलम १७ अस्पृश्यता नष्ट करते आणि कोणत्याही स्वरूपात तिच्या प्रथेवर बंदी घालते. अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अयोग्यता लागू करणे कायद्यानुसार दंडनीय आहे.'
  },

  verySimple: {
    en: 'Untouchability is abolished. No person can be denied rights or treated unfairly because of the practice of untouchability.',
    mr: 'अस्पृश्यता पूर्णपणे रद्द करण्यात आली आहे. अस्पृश्यतेच्या आधारावर कोणालाही अधिकारांपासून वंचित करता किंवा अन्यायकारक वागणूक देता येत नाही.'
  },

  example: {
    en: 'If a person is denied access to a public place because of the practice of untouchability, the matter may attract legal consequences under the Constitution and relevant law.',
    mr: 'अस्पृश्यतेच्या प्रथेच्या आधारावर एखाद्या व्यक्तीला सार्वजनिक ठिकाणी प्रवेश नाकारला गेल्यास संविधान आणि संबंधित कायद्यानुसार कायदेशीर परिणाम होऊ शकतात.'
  },

  keywords: [
    'article 17',
    'abolition of untouchability',
    'untouchability in India',
    'fundamental rights',
    'equality',
    'Indian Constitution',
    'कलम १७',
    'अस्पृश्यता निर्मूलन',
    'समानता',
    'मूलभूत अधिकार',
    'भारतीय संविधान'
  ],

  relatedIds: ['15', '16'],

  source: {
    name: 'Ministry of Law and Justice, Government of India',
    url: ''
  },

  lastVerified: null
},
]

export function getArticleById(id) {
  if (!id) return undefined

  return articles.find(
    (a) => a.id.toLowerCase() === String(id).toLowerCase()
  )
}

/**
 * Automatically finds related Articles.
 *
 * Priority:
 * 1. Manually defined relatedIds
 * 2. Same category
 * 3. Matching keywords
 * 4. Nearby Article numbers
 *
 * This means new Articles can automatically get internal links
 * without manually updating every other Article.
 */
export function getRelatedArticles(article, limit = 6) {
  if (!article) return []

  const manualIds = Array.isArray(article.relatedIds)
    ? article.relatedIds.map(String)
    : []

  const articleKeywords = new Set(
    Array.isArray(article.keywords)
      ? article.keywords.map((keyword) =>
          String(keyword).toLowerCase().trim()
        )
      : []
  )

  const articleNumber = Number(
    String(article.id).replace(/[^0-9]/g, '')
  )

  const scoredArticles = articles
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => {
      let score = 0

      // Highest priority: manually selected related Articles
      if (manualIds.includes(candidate.id)) {
        score += 100
      }

      // Same constitutional category
      if (
        article.categoryKey &&
        candidate.categoryKey === article.categoryKey
      ) {
        score += 30
      }

      // Shared keywords
      const candidateKeywords = Array.isArray(candidate.keywords)
        ? candidate.keywords.map((keyword) =>
            String(keyword).toLowerCase().trim()
          )
        : []

      const sharedKeywords = candidateKeywords.filter((keyword) =>
        articleKeywords.has(keyword)
      ).length

      score += sharedKeywords * 10

      // Article numbers that are close to each other
      const candidateNumber = Number(
        String(candidate.id).replace(/[^0-9]/g, '')
      )

      if (
        Number.isFinite(articleNumber) &&
        Number.isFinite(candidateNumber)
      ) {
        const difference = Math.abs(
          articleNumber - candidateNumber
        )

        if (difference <= 3) {
          score += 8
        } else if (difference <= 10) {
          score += 4
        }
      }

      return {
        article: candidate,
        score,
      }
    })

  return scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article: relatedArticle }) => relatedArticle)
}
