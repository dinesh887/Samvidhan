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
    id: '19',
    articleNumber: 'Article 19',
    title: { en: 'Protection of Certain Freedoms', mr: 'काही स्वातंत्र्यांचे संरक्षण' },
    categoryKey: 'fundamental-rights',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'Citizens have certain freedoms — such as speech, assembly, and movement — that the State protects, subject to reasonable restrictions defined by law.',
      mr: 'नागरिकांना भाषण, संमेलन आणि संचार यांसारखी काही स्वातंत्र्ये आहेत, जी कायद्याने ठरवलेल्या वाजवी निर्बंधांच्या अधीन राहून संरक्षित असतात.',
    },
    verySimple: {
      en: 'You can speak your mind, gather peacefully, and travel freely — within reasonable limits set by law.',
      mr: 'तुम्ही तुमचे मत मांडू शकता, शांततेने एकत्र येऊ शकता आणि मुक्तपणे प्रवास करू शकता — कायद्याने ठरवलेल्या वाजवी मर्यादेत.',
    },
    example: {
      en: 'A peaceful public protest organised within legal guidelines is an exercise of freedoms discussed under Article 19.',
      mr: 'कायदेशीर मार्गदर्शक तत्त्वांनुसार आयोजित केलेले शांततापूर्ण आंदोलन हे कलम १९ अंतर्गत चर्चिलेल्या स्वातंत्र्यांचा वापर आहे.',
    },
    keywords: ['freedom', 'speech', 'expression', 'assembly', 'movement', 'स्वातंत्र्य'],
    relatedIds: ['14', '21'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
    lastVerified: null,
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
    title: { en: 'Establishment of the Supreme Court', mr: 'सर्वोच्च न्यायालयाची स्थापना' },
    categoryKey: 'judiciary',
    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },
    simpleExplanation: {
      en: 'This Article establishes the Supreme Court of India as the apex court, along with rules for the appointment of judges.',
      mr: 'या कलमानुसार भारताचे सर्वोच्च न्यायालय हे सर्वोच्च न्यायसंस्था म्हणून स्थापन केले जाते, तसेच न्यायाधीशांच्या नियुक्तीचे नियमही यात दिले आहेत.',
    },
    verySimple: {
      en: 'This is the Article that creates the Supreme Court, the highest court in the country.',
      mr: 'या कलमामुळेच देशातील सर्वोच्च न्यायालय अस्तित्वात आले आहे.',
    },
    example: {
      en: 'When the Supreme Court hears a final appeal in a major case, it is exercising authority rooted in this Article.',
      mr: 'सर्वोच्च न्यायालय एखाद्या मोठ्या खटल्यातील अंतिम अपील ऐकते तेव्हा ते या कलमात नमूद अधिकाराचा वापर करत असते.',
    },
    keywords: ['supreme court', 'judges', 'judiciary', 'न्यायालय'],
    relatedIds: ['32'],
    source: { name: 'Ministry of Law and Justice, Government of India', url: '' },
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
]

export function getArticleById(id) {
  return articles.find((a) => a.id === id.toLowerCase())
}

export function getRelatedArticles(article) {
  if (!article?.relatedIds) return []
  return article.relatedIds.map((id) => getArticleById(id)).filter(Boolean)
}
