// Content for the Fundamental Rights page. Each entry groups one of the
// six rights with a plain-language explanation and the Articles that
// relate to it (cross-referenced against articles.js where available).

export const fundamentalRights = [
  {
    id: 'right-to-equality',
    icon: 'Scale',
    title: { en: 'Right to Equality', mr: 'समानतेचा अधिकार' },
    explanation: {
      en: 'Guarantees equality before the law and equal protection of the laws, and prohibits discrimination on grounds such as religion, race, caste, sex, or place of birth.',
      mr: 'कायद्यासमोर समानता आणि कायद्याचे समान संरक्षण याची हमी देते, तसेच धर्म, वंश, जात, लिंग किंवा जन्मस्थान यांसारख्या कारणांवरून भेदभाव करण्यास मनाई करते.',
    },
    articleIds: ['14'],
  },
  {
    id: 'right-to-freedom',
    icon: 'Wind',
    title: { en: 'Right to Freedom', mr: 'स्वातंत्र्याचा अधिकार' },
    explanation: {
      en: 'Covers freedoms such as speech and expression, peaceful assembly, movement, and the right to practise any profession, subject to reasonable restrictions.',
      mr: 'भाषण व अभिव्यक्ती स्वातंत्र्य, शांततापूर्ण संमेलन, संचार आणि कोणताही व्यवसाय करण्याचा अधिकार यांचा समावेश करते, वाजवी निर्बंधांच्या अधीन राहून.',
    },
    articleIds: ['19', '21', '21a'],
  },
  {
    id: 'right-against-exploitation',
    icon: 'ShieldOff',
    title: { en: 'Right against Exploitation', mr: 'शोषणाविरुद्धचा अधिकार' },
    explanation: {
      en: 'Prohibits human trafficking, forced labour, and the employment of children in hazardous work.',
      mr: 'मानवी तस्करी, वेठबिगारी आणि बालकांना धोकादायक कामांवर नियुक्त करण्यास प्रतिबंध करते.',
    },
    articleIds: [],
  },
  {
    id: 'right-to-freedom-of-religion',
    icon: 'Landmark',
    title: { en: 'Right to Freedom of Religion', mr: 'धार्मिक स्वातंत्र्याचा अधिकार' },
    explanation: {
      en: 'Gives every person the freedom of conscience and the right to freely profess, practise, and propagate religion, within public order and morality.',
      mr: 'प्रत्येक व्यक्तीला सद्सद्विवेकबुद्धीचे स्वातंत्र्य आणि सार्वजनिक सुव्यवस्था व नैतिकतेच्या मर्यादेत धर्माचे पालन, आचरण व प्रसार करण्याचा अधिकार देते.',
    },
    articleIds: [],
  },
  {
    id: 'cultural-educational-rights',
    icon: 'BookOpen',
    title: { en: 'Cultural and Educational Rights', mr: 'सांस्कृतिक आणि शैक्षणिक अधिकार' },
    explanation: {
      en: 'Protects the right of communities to preserve their language, script and culture, and to establish and administer educational institutions.',
      mr: 'समुदायांना त्यांची भाषा, लिपी आणि संस्कृती जपण्याचा तसेच शैक्षणिक संस्था स्थापन करून चालवण्याचा अधिकार देते.',
    },
    articleIds: ['21a'],
  },
  {
    id: 'right-to-constitutional-remedies',
    icon: 'Gavel',
    title: { en: 'Right to Constitutional Remedies', mr: 'संवैधानिक उपायांचा अधिकार' },
    explanation: {
      en: 'Allows citizens to move the Supreme Court directly for the enforcement of their fundamental rights.',
      mr: 'नागरिकांना त्यांच्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी थेट सर्वोच्च न्यायालयात जाण्याची मुभा देते.',
    },
    articleIds: ['32'],
  },
]
