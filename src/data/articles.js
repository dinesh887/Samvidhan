// Sample article records for the Samvidhan educational platform.
//
// CONTENT RULE: `officialText` must hold verified constitutional text taken
// from an authoritative source (e.g. the Ministry of Law & Justice's
// official Constitution of India PDF, or india.gov.in).
//
// `simpleExplanation`, `verySimple`, `example` and `seoSections` are
// original educational content and are not presented as verbatim legal text.
//
// Add new Articles by pushing another object with this same shape.

export const articles = [
  {
    id: '14',
    articleNumber: 'Article 14',
    title: {
      en: 'Right to Equality',
      mr: 'समानतेचा अधिकार',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 14 guarantees equality before the law and equal protection of the laws to every person within India.',
      mr: 'कलम 14 भारतातील प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देण्याची हमी देते.',
    },

    verySimple: {
      en: 'Everyone is equal before the law.',
      mr: 'कायद्यासमोर प्रत्येकजण समान आहे.',
    },

    example: {
      en: 'If a government authority treats similarly placed people differently without a valid constitutional or legal basis, Article 14 may become relevant.',
      mr: 'समान परिस्थितीत असलेल्या व्यक्तींना वैध घटनात्मक किंवा कायदेशीर आधाराशिवाय वेगळी वागणूक दिल्यास कलम 14 संबंधित ठरू शकते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 14 of the Indian Constitution?',
          content:
            'Article 14 provides equality before the law and equal protection of the laws to every person within the territory of India.',
        },
        {
          heading: 'What does Right to Equality mean?',
          content:
            'The Right to Equality means that people are subject to the same legal framework and are entitled to equal protection of the law, subject to constitutionally permitted classifications and distinctions.',
        },
        {
          heading: 'Article 14 and equality before law',
          content:
            'Equality before law is an important part of Article 14. It means that legal protection is not based on a person receiving a higher or lower status before the law.',
        },
        {
          heading: 'Article 14 and equal protection of laws',
          content:
            'Equal protection of laws requires the law to provide equal protection to persons in comparable circumstances, while constitutionally valid classifications may be permitted.',
        },
        {
          heading: 'Why is Article 14 important?',
          content:
            'Article 14 is a key provision under the Fundamental Rights and forms an important constitutional guarantee of equality.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 14 म्हणजे काय?',
          content:
            'कलम 14 भारताच्या हद्दीत प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देण्याची हमी देते.',
        },
        {
          heading: 'समानतेचा अधिकार म्हणजे काय?',
          content:
            'समानतेचा अधिकार म्हणजे समान परिस्थितीत असलेल्या व्यक्तींना कायद्याचे समान संरक्षण मिळणे. संविधानाच्या चौकटीत वैध वर्गीकरण किंवा फरक करण्यास काही परिस्थितीत परवानगी असू शकते.',
        },
        {
          heading: 'कलम 14 आणि कायद्यासमोर समानता',
          content:
            'कायद्यासमोर समानता हा कलम 14 चा महत्त्वाचा भाग आहे. व्यक्तीच्या सामाजिक किंवा इतर स्थितीच्या आधारावर कायद्यापुढे अनावश्यक विशेष दर्जा देण्यास या तत्त्वाचा विरोध आहे.',
        },
        {
          heading: 'कलम 14 आणि कायद्यांचे समान संरक्षण',
          content:
            'समान परिस्थितीत असलेल्या व्यक्तींना कायद्याचे समान संरक्षण मिळणे हे कलम 14 च्या मुख्य तत्त्वांपैकी एक आहे.',
        },
        {
          heading: 'कलम 14 महत्त्वाचे का आहे?',
          content:
            'कलम 14 हे मूलभूत अधिकारांमधील समानतेचे एक महत्त्वाचे घटनात्मक संरक्षण आहे.',
        },
      ],
    },

    keywords: [
      'Article 14',
      'Article 14 of Indian Constitution',
      'Article 14 Indian Constitution',
      'Article 14 explained',
      'What is Article 14',
      'Article 14 right to equality',
      'Right to Equality',
      'equality before law',
      'equal protection of laws',
      'right to equality in which article',
      'Article 14 in simple words',
      'art 14',
      '14 article',
      'कलम 14',
      'कलम 14 भारतीय संविधान',
      'कलम 14 मराठीत',
      'कलम 14 म्हणजे काय',
      'समानतेचा अधिकार',
      'कायद्यासमोर समानता',
    ],

    relatedIds: ['15', '16', '17', '19', '21', '32'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '18',
    articleNumber: 'Article 18',
    title: {
      en: 'Abolition of Titles',
      mr: 'पदव्यांचे निर्मूलन',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'No title, not being a military or academic distinction, shall be conferred by the State. No citizen of India shall accept any title from any foreign State.',
      mr: 'राज्य कोणतीही पदवी, लष्करी किंवा शैक्षणिक विशेषण वगळता, प्रदान करणार नाही. भारताचा कोणताही नागरिक कोणत्याही परदेशी राज्याकडून कोणतीही पदवी स्वीकारणार नाही.',
      verified: true,
    },

    simpleExplanation: {
      en: 'Article 18 abolishes titles that create artificial social distinctions. Military and academic distinctions are excluded from this prohibition. The Article also contains restrictions concerning titles, presents, emoluments and offices from foreign States.',
      mr: 'कलम 18 सामाजिक भेद निर्माण करणाऱ्या पदव्यांच्या प्रथेला प्रतिबंध करते. लष्करी आणि शैक्षणिक विशेषणे याला अपवाद आहेत. परदेशी राज्यांकडून पदवी, भेटवस्तू, मानधन किंवा पद स्वीकारण्याबाबतही संविधानात निर्बंध आहेत.',
    },

    verySimple: {
      en: 'The State cannot confer titles that create artificial social distinctions, subject to the constitutional exceptions.',
      mr: 'घटनात्मक अपवाद वगळता सामाजिक भेद निर्माण करणाऱ्या पदव्या राज्य देऊ शकत नाही.',
    },

    example: {
      en: 'A government cannot confer a title simply to create a special social status for a person. Academic and military distinctions are treated differently under Article 18.',
      mr: 'एखाद्या व्यक्तीला विशेष सामाजिक दर्जा देण्यासाठी सरकार पदवी देऊ शकत नाही. शैक्षणिक आणि लष्करी विशेषणे कलम 18 अंतर्गत वेगळ्या प्रकारे हाताळली जातात.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 18 of the Indian Constitution?',
          content:
            'Article 18 deals with the abolition of titles and places constitutional restrictions on the conferment and acceptance of certain titles.',
        },
        {
          heading: 'What does Article 18 prohibit?',
          content:
            'Article 18 generally prevents the State from conferring titles, except for military or academic distinctions, and places additional constitutional restrictions concerning titles from foreign States.',
        },
        {
          heading: 'Article 18 and military or academic distinctions',
          content:
            'Military and academic distinctions are expressly treated as exceptions to the prohibition on titles under Article 18.',
        },
        {
          heading: 'Why is Article 18 important?',
          content:
            'Article 18 supports the constitutional principle that citizens should not be divided through State-created titles that create artificial social distinctions.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 18 म्हणजे काय?',
          content:
            'कलम 18 पदव्यांच्या निर्मूलनाशी संबंधित आहे आणि काही प्रकारच्या पदव्या देणे किंवा स्वीकारणे यावर घटनात्मक निर्बंध घालते.',
        },
        {
          heading: 'कलम 18 मध्ये कोणत्या पदव्यांना प्रतिबंध आहे?',
          content:
            'कलम 18 नुसार राज्याकडून काही प्रकारच्या पदव्या देण्यास प्रतिबंध आहे. मात्र लष्करी आणि शैक्षणिक विशेषणे याला घटनात्मक अपवाद आहेत.',
        },
        {
          heading: 'कलम 18 आणि लष्करी व शैक्षणिक विशेषणे',
          content:
            'लष्करी आणि शैक्षणिक विशेषणे ही कलम 18 मधील पदव्यांवरील प्रतिबंधाच्या अपवादांमध्ये येतात.',
        },
        {
          heading: 'कलम 18 महत्त्वाचे का आहे?',
          content:
            'राज्यनिर्मित कृत्रिम सामाजिक भेद कमी करण्याच्या घटनात्मक तत्त्वात कलम 18 महत्त्वाची भूमिका बजावते.',
        },
      ],
    },

    keywords: [
      'Article 18',
      'Article 18 of Indian Constitution',
      'Article 18 explained',
      'Abolition of Titles',
      'titles in India',
      'Article 18 Fundamental Rights',
      'Article 18 Indian Constitution',
      'कलम 18',
      'कलम 18 भारतीय संविधान',
      'कलम 18 मराठीत',
      'पदव्यांचे निर्मूलन',
      'मूलभूत अधिकार',
    ],

    relatedIds: ['15', '16', '17', '19'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

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
      en: 'Article 19 protects important freedoms of citizens, including speech and expression, peaceful assembly, association, movement, residence and settlement, and profession, occupation, trade or business, subject to constitutional restrictions.',
      mr: 'कलम 19 नागरिकांच्या भाषण व अभिव्यक्ती, शांततेने एकत्र जमणे, संघटना स्थापन करणे, भारतात मुक्तपणे फिरणे, राहणे व स्थायिक होणे तसेच व्यवसाय किंवा व्यापार करण्याच्या स्वातंत्र्यांचे संरक्षण करते. ही स्वातंत्र्ये संविधानातील निर्बंधांच्या अधीन आहेत.',
    },

    verySimple: {
      en: 'Article 19 protects several important freedoms of citizens, subject to constitutional restrictions.',
      mr: 'कलम 19 नागरिकांच्या अनेक महत्त्वाच्या स्वातंत्र्यांचे संरक्षण करते; मात्र ही स्वातंत्र्ये घटनात्मक निर्बंधांच्या अधीन आहेत.',
    },

    example: {
      en: 'A citizen may express an opinion, peacefully assemble, form an association, move within India or practise a profession, subject to applicable constitutional and legal restrictions.',
      mr: 'एखादा नागरिक आपले मत व्यक्त करू शकतो, शांततेने एकत्र जमू शकतो, संघटना स्थापन करू शकतो, भारतात फिरू शकतो किंवा व्यवसाय करू शकतो; मात्र लागू घटनात्मक आणि कायदेशीर निर्बंधांचे पालन करावे लागते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 19 of the Indian Constitution?',
          content:
            'Article 19 protects specified freedoms of citizens, including freedom of speech and expression, peaceful assembly, association, movement, residence and settlement, and profession, occupation, trade or business.',
        },
        {
          heading: 'What are the freedoms under Article 19?',
          content:
            'Article 19 covers six important freedoms of citizens relating to speech and expression, peaceful assembly, associations or unions or co-operative societies, movement, residence and settlement, and profession, occupation, trade or business.',
        },
        {
          heading: 'Article 19 and freedom of speech',
          content:
            'Freedom of speech and expression is one of the freedoms protected under Article 19. The exercise of this freedom is subject to restrictions permitted by the Constitution.',
        },
        {
          heading: 'Are Article 19 rights absolute?',
          content:
            'The freedoms protected by Article 19 are not absolute. The Constitution permits specified restrictions subject to the conditions laid down in the relevant constitutional provisions.',
        },
        {
          heading: 'Why is Article 19 important?',
          content:
            'Article 19 is an important Fundamental Right because it protects several civic freedoms that are central to participation and expression in a constitutional democracy.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 19 म्हणजे काय?',
          content:
            'कलम 19 नागरिकांच्या भाषण व अभिव्यक्ती, शांततेने एकत्र जमणे, संघटना किंवा संघ किंवा सहकारी संस्था स्थापन करणे, भारतात मुक्तपणे फिरणे, राहणे व स्थायिक होणे तसेच व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याच्या स्वातंत्र्यांचे संरक्षण करते.',
        },
        {
          heading: 'कलम 19 अंतर्गत कोणती स्वातंत्र्ये आहेत?',
          content:
            'कलम 19 मध्ये नागरिकांना भाषण व अभिव्यक्ती, शांततापूर्ण सभा, संघटना, भारतात मुक्त हालचाल, निवास व स्थायिक होणे आणि व्यवसाय किंवा व्यापार करण्याशी संबंधित स्वातंत्र्ये दिली आहेत.',
        },
        {
          heading: 'कलम 19 आणि भाषण स्वातंत्र्य',
          content:
            'भाषण आणि अभिव्यक्ती स्वातंत्र्य हे कलम 19 अंतर्गत संरक्षित स्वातंत्र्यांपैकी एक आहे. या स्वातंत्र्यावर संविधानाने परवानगी दिलेले काही निर्बंध लागू होऊ शकतात.',
        },
        {
          heading: 'कलम 19 मधील अधिकार पूर्णपणे अमर्यादित आहेत का?',
          content:
            'कलम 19 मधील स्वातंत्र्ये पूर्णपणे अमर्यादित नाहीत. संविधानाच्या संबंधित तरतुदींनुसार काही विशिष्ट निर्बंध लागू होऊ शकतात.',
        },
        {
          heading: 'कलम 19 महत्त्वाचे का आहे?',
          content:
            'कलम 19 नागरिकांच्या अनेक महत्त्वाच्या स्वातंत्र्यांचे घटनात्मक संरक्षण करते आणि त्यामुळे ते मूलभूत अधिकारांचा महत्त्वाचा भाग आहे.',
        },
      ],
    },

    keywords: [
      'Article 19',
      'Article 19 of Indian Constitution',
      'Article 19 explained',
      'freedom of speech',
      'freedom of expression',
      'freedom of movement',
      'freedom of association',
      'Article 19 Fundamental Rights',
      'Article 19 in simple words',
      'art 19',
      '19 article',
      'कलम 19',
      'कलम 19 भारतीय संविधान',
      'कलम 19 मराठीत',
      'भाषण स्वातंत्र्य',
      'अभिव्यक्ती स्वातंत्र्य',
      'हालचालीचे स्वातंत्र्य',
    ],

    relatedIds: ['14', '18', '20', '21'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: '2026-09-21',
  },

  {
    id: '21',
    articleNumber: 'Article 21',
    title: {
      en: 'Protection of Life and Personal Liberty',
      mr: 'जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 21 protects the life and personal liberty of every person except according to procedure established by law.',
      mr: 'कलम 21 प्रत्येक व्यक्तीच्या जीवन आणि वैयक्तिक स्वातंत्र्याचे कायद्याने स्थापित केलेल्या प्रक्रियेनुसार संरक्षण करते.',
    },

    verySimple: {
      en: 'A person cannot be deprived of life or personal liberty except according to a lawful procedure.',
      mr: 'कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीचे जीवन किंवा वैयक्तिक स्वातंत्र्य हिरावून घेता येत नाही.',
    },

    example: {
      en: 'Article 21 is relevant when a State action affects a person’s life or personal liberty and the constitutional requirements governing such action need to be examined.',
      mr: 'राज्याच्या एखाद्या कृतीमुळे व्यक्तीच्या जीवनावर किंवा वैयक्तिक स्वातंत्र्यावर परिणाम होत असल्यास आणि त्या कृतीची घटनात्मक वैधता तपासायची असल्यास कलम 21 संबंधित ठरू शकते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 21 of the Indian Constitution?',
          content:
            'Article 21 provides that no person shall be deprived of life or personal liberty except according to procedure established by law.',
        },
        {
          heading: 'What does Article 21 protect?',
          content:
            'Article 21 directly protects life and personal liberty. Judicial decisions have also interpreted the provision in relation to several aspects of dignified life, subject to the Constitution and applicable law.',
        },
        {
          heading: 'Article 21 and personal liberty',
          content:
            'Personal liberty is a central part of Article 21. Any State action affecting personal liberty must operate within the constitutional and legal framework.',
        },
        {
          heading: 'Article 21 and right to life',
          content:
            'The constitutional protection of life under Article 21 is broader than merely physical existence and has been considered by courts in the context of living with dignity and related rights.',
        },
        {
          heading: 'Why is Article 21 important?',
          content:
            'Article 21 is one of the key Fundamental Rights because it protects life and personal liberty for every person.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 21 म्हणजे काय?',
          content:
            'कलम 21 नुसार कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा वैयक्तिक स्वातंत्र्यापासून वंचित करता येत नाही.',
        },
        {
          heading: 'कलम 21 कोणते अधिकार संरक्षित करते?',
          content:
            'कलम 21 थेट जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण करते. न्यायालयीन निर्णयांमध्ये सन्मानाने जगणे आणि संबंधित अधिकारांच्या संदर्भात या तरतुदीचा विस्ताराने विचार करण्यात आला आहे.',
        },
        {
          heading: 'कलम 21 आणि वैयक्तिक स्वातंत्र्य',
          content:
            'वैयक्तिक स्वातंत्र्य हा कलम 21 चा महत्त्वाचा भाग आहे. व्यक्तीच्या स्वातंत्र्यावर परिणाम करणारी राज्याची कृती घटनात्मक आणि कायदेशीर चौकटीत असणे आवश्यक आहे.',
        },
        {
          heading: 'कलम 21 आणि जीवनाचा अधिकार',
          content:
            'कलम 21 मधील जीवनाचे घटनात्मक संरक्षण केवळ शारीरिक अस्तित्वापुरते मर्यादित मानले गेलेले नाही. न्यायालयीन व्याख्यांमध्ये सन्मानाने जगण्याशी संबंधित बाबींचाही विचार करण्यात आला आहे.',
        },
        {
          heading: 'कलम 21 महत्त्वाचे का आहे?',
          content:
            'कलम 21 प्रत्येक व्यक्तीच्या जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण करणारा मूलभूत अधिकार आहे.',
        },
      ],
    },

    keywords: [
      'Article 21',
      'Article 21 of Indian Constitution',
      'Article 21 explained',
      'right to life',
      'right to personal liberty',
      'Article 21 right to life',
      'Article 21 Fundamental Rights',
      'Article 21 in simple words',
      'life and personal liberty',
      'art 21',
      '21 article',
      'कलम 21',
      'कलम 21 भारतीय संविधान',
      'कलम 21 मराठीत',
      'जीवनाचा अधिकार',
      'वैयक्तिक स्वातंत्र्य',
      'जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण',
    ],

    relatedIds: ['14', '19', '21a', '32'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '21a',
    articleNumber: 'Article 21A',
    title: {
      en: 'Right to Education',
      mr: 'शिक्षणाचा अधिकार',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 21A provides for free and compulsory education for children within the age group specified by the Constitution.',
      mr: 'कलम 21A संविधानात नमूद केलेल्या वयोगटातील मुलांना मोफत आणि सक्तीच्या शिक्षणाची तरतूद करते.',
    },

    verySimple: {
      en: 'Children in the constitutionally specified age group have a right to free and compulsory education.',
      mr: 'संविधानात नमूद केलेल्या वयोगटातील मुलांना मोफत आणि सक्तीच्या शिक्षणाचा अधिकार आहे.',
    },

    example: {
      en: 'The constitutional framework under Article 21A requires the State to provide free and compulsory education to children in the specified age group, subject to the applicable law.',
      mr: 'कलम 21A अंतर्गत संविधानाने नमूद केलेल्या वयोगटातील मुलांना लागू कायद्याच्या चौकटीत मोफत आणि सक्तीचे शिक्षण उपलब्ध करून देण्याची राज्याची जबाबदारी आहे.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 21A of the Indian Constitution?',
          content:
            'Article 21A provides for free and compulsory education for children in the age group specified by the Constitution, in the manner determined by law.',
        },
        {
          heading: 'What is the Right to Education under Article 21A?',
          content:
            'Article 21A makes free and compulsory education a constitutional right for children within the specified age group.',
        },
        {
          heading: 'What age group is covered by Article 21A?',
          content:
            'Article 21A applies to children between six and fourteen years of age, with the manner of implementation determined by law.',
        },
        {
          heading: 'Article 21A and free education',
          content:
            'The constitutional provision requires the State to provide free and compulsory education to children covered by Article 21A.',
        },
        {
          heading: 'Why is Article 21A important?',
          content:
            'Article 21A places the Right to Education within the framework of Fundamental Rights and establishes a constitutional basis for free and compulsory education for the specified age group.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 21A म्हणजे काय?',
          content:
            'कलम 21A संविधानाने नमूद केलेल्या वयोगटातील मुलांना कायद्याने ठरवलेल्या पद्धतीने मोफत आणि सक्तीचे शिक्षण देण्याची तरतूद करते.',
        },
        {
          heading: 'कलम 21A अंतर्गत शिक्षणाचा अधिकार म्हणजे काय?',
          content:
            'कलम 21A मुळे ठरावीक वयोगटातील मुलांसाठी मोफत आणि सक्तीचे शिक्षण हा घटनात्मक अधिकार बनतो.',
        },
        {
          heading: 'कलम 21A कोणत्या वयोगटासाठी आहे?',
          content:
            'कलम 21A सहा ते चौदा वर्षे वयोगटातील मुलांना लागू होते. त्याची अंमलबजावणी कायद्याने ठरवलेल्या पद्धतीनुसार केली जाते.',
        },
        {
          heading: 'कलम 21A आणि मोफत शिक्षण',
          content:
            'कलम 21A अंतर्गत संबंधित वयोगटातील मुलांना मोफत आणि सक्तीचे शिक्षण उपलब्ध करून देण्याची घटनात्मक तरतूद आहे.',
        },
        {
          heading: 'कलम 21A महत्त्वाचे का आहे?',
          content:
            'कलम 21A शिक्षणाच्या अधिकाराला मूलभूत अधिकारांच्या चौकटीत स्थान देते आणि संबंधित वयोगटातील मुलांच्या मोफत व सक्तीच्या शिक्षणासाठी घटनात्मक आधार देते.',
        },
      ],
    },

    keywords: [
      'Article 21A',
      'Article 21A of Indian Constitution',
      'Article 21A explained',
      'What is Article 21A',
      'Article 21A right to education',
      'Right to Education Article',
      'right to education in India',
      'Article 21A age',
      'Article 21A Fundamental Right',
      '21A article',
      'article 21 a of indian constitution',
      'art 21a',
      'कलम 21A',
      'कलम 21A भारतीय संविधान',
      'कलम 21A मराठीत',
      'कलम 21A म्हणजे काय',
      'शिक्षणाचा अधिकार',
    ],

    relatedIds: ['21', '14', '15', '32'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '32',
    articleNumber: 'Article 32',
    title: {
      en: 'Right to Constitutional Remedies',
      mr: 'संवैधानिक उपायांचा अधिकार',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'The official constitutional text of Article 32 should be verified against the latest authoritative Constitution of India PDF before being presented as verbatim official text.',
      mr: 'कलम 32 चा अधिकृत घटनात्मक मजकूर शब्दशः दाखवण्यापूर्वी भारताच्या संविधानाच्या अद्ययावत अधिकृत PDF शी पडताळला जावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 32 guarantees the right to approach the Supreme Court for the enforcement of Fundamental Rights contained in Part III of the Constitution. The Supreme Court can issue appropriate directions, orders and writs to enforce these rights.',
      mr: 'कलम 32 संविधानाच्या भाग III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालयात जाण्याचा अधिकार हमीने देते. या अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालय योग्य निर्देश, आदेश आणि रिट जारी करू शकते.',
    },

    verySimple: {
      en: 'If a Fundamental Right is violated, Article 32 provides a constitutional route to approach the Supreme Court for enforcement of that right.',
      mr: 'मूलभूत अधिकाराचे उल्लंघन झाल्यास त्या अधिकाराच्या अंमलबजावणीसाठी कलम 32 अंतर्गत सर्वोच्च न्यायालयात जाण्याचा घटनात्मक मार्ग उपलब्ध आहे.',
    },

    example: {
      en: 'If a person alleges that a Fundamental Right protected under Part III has been violated, they may approach the Supreme Court under Article 32 and seek an appropriate constitutional remedy.',
      mr: 'एखाद्या व्यक्तीच्या भाग III अंतर्गत संरक्षित मूलभूत अधिकाराचे उल्लंघन झाल्याचा दावा असल्यास, ती व्यक्ती कलम 32 अंतर्गत सर्वोच्च न्यायालयात जाऊन योग्य घटनात्मक उपाय मागू शकते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 32 of the Indian Constitution?',
          content:
            'Article 32 guarantees the right to approach the Supreme Court for the enforcement of Fundamental Rights guaranteed by Part III of the Constitution. It is commonly known as the Right to Constitutional Remedies.',
        },
        {
          heading: 'What is the Right to Constitutional Remedies?',
          content:
            'The Right to Constitutional Remedies enables a person to approach the Supreme Court when a Fundamental Right protected by Part III is violated. Article 32 provides the constitutional mechanism for seeking enforcement of these rights.',
        },
        {
          heading: 'Article 32 and Fundamental Rights',
          content:
            'Article 32 is directly connected with the enforcement of Fundamental Rights contained in Part III of the Constitution. The Supreme Court can issue appropriate directions, orders or writs for enforcing these rights.',
        },
        {
          heading: 'Which writs can be issued under Article 32?',
          content:
            'Article 32 specifically refers to writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari for enforcement of the rights conferred by Part III.',
        },
        {
          heading: 'Can a person approach the Supreme Court under Article 32?',
          content:
            'Article 32 guarantees the right to move the Supreme Court by appropriate proceedings for enforcement of the Fundamental Rights conferred by Part III of the Constitution.',
        },
        {
          heading: 'Why is Article 32 important?',
          content:
            'Article 32 provides a constitutional mechanism for enforcing Fundamental Rights and seeking appropriate remedies before the Supreme Court.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 32 म्हणजे काय?',
          content:
            'कलम 32 संविधानाच्या भाग III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालयात जाण्याचा अधिकार हमीने देते. याला संवैधानिक उपायांचा अधिकार असे म्हटले जाते.',
        },
        {
          heading: 'संवैधानिक उपायांचा अधिकार म्हणजे काय?',
          content:
            'भाग III मध्ये संरक्षित मूलभूत अधिकारांचे उल्लंघन झाल्यास सर्वोच्च न्यायालयात दाद मागण्याची घटनात्मक सुविधा म्हणजे संवैधानिक उपायांचा अधिकार.',
        },
        {
          heading: 'कलम 32 आणि मूलभूत अधिकार',
          content:
            'कलम 32 हे संविधानाच्या भाग III मधील मूलभूत अधिकारांच्या अंमलबजावणीशी थेट संबंधित आहे. या अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालय योग्य निर्देश, आदेश किंवा रिट जारी करू शकते.',
        },
        {
          heading: 'कलम 32 अंतर्गत कोणत्या रिटचा उल्लेख आहे?',
          content:
            'कलम 32 मध्ये हेबियस कॉर्पस, मँडेमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी या रिटचा उल्लेख आहे. भाग III मधील अधिकारांच्या अंमलबजावणीसाठी परिस्थितीनुसार त्यांचा वापर केला जाऊ शकतो.',
        },
        {
          heading: 'कलम 32 अंतर्गत सर्वोच्च न्यायालयात जाता येते का?',
          content:
            'संविधानाच्या भाग III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात जाण्याचा अधिकार कलम 32 हमीने देते.',
        },
        {
          heading: 'कलम 32 महत्त्वाचे का आहे?',
          content:
            'कलम 32 मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय उपलब्ध करून देते आणि सर्वोच्च न्यायालयासमोर दाद मागण्याचा घटनात्मक मार्ग प्रदान करते.',
        },
      ],
    },

    keywords: [
      'Article 32',
      'Article 32 of Indian Constitution',
      'Article 32 Indian Constitution',
      'Article 32 explained',
      'What is Article 32',
      'Article 32 right to constitutional remedies',
      'Right to Constitutional Remedies',
      'Right to Constitutional Remedies Article',
      'Article 32 Fundamental Rights',
      'Article 32 writs',
      'writ under Article 32',
      'Supreme Court Article 32',
      'Article 32 in simple words',
      'Article 32 of Constitution',
      'art 32',
      '32 article',
      'कलम 32',
      'कलम 32 भारतीय संविधान',
      'कलम 32 मराठीत',
      'कलम 32 म्हणजे काय',
      'संवैधानिक उपायांचा अधिकार',
      'मूलभूत अधिकारांची अंमलबजावणी',
      'सर्वोच्च न्यायालय',
    ],

    relatedIds: ['14', '21', '124'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '5',
    articleNumber: 'Article 5',
    title: {
      en: 'Citizenship at the Commencement of the Constitution',
      mr: 'संविधान अंमलात येताना नागरिकत्व',
    },
    categoryKey: 'citizenship',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 5 dealt with citizenship at the commencement of the Constitution and specified the conditions under which a person could be regarded as a citizen of India at that time.',
      mr: 'कलम 5 संविधानाच्या प्रारंभी नागरिकत्वाशी संबंधित होते आणि त्या वेळी कोणत्या अटींवर एखादी व्यक्ती भारताची नागरिक मानली जाईल हे स्पष्ट करते.',
    },

    verySimple: {
      en: 'Article 5 dealt with who was considered an Indian citizen when the Constitution commenced.',
      mr: 'संविधान लागू झाले तेव्हा कोणाला भारतीय नागरिक मानले जाईल यासंबंधी कलम 5 मध्ये तरतूद होती.',
    },

    example: {
      en: 'A person connected with India by birth, parentage or ordinary residence could fall within the citizenship framework described in Article 5, subject to its constitutional conditions.',
      mr: 'जन्म, पालकत्व किंवा सामान्य वास्तव्याशी संबंधित घटनात्मक अटी पूर्ण करणारी व्यक्ती कलम 5 मधील नागरिकत्वाच्या चौकटीत येऊ शकत होती.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 5 of the Indian Constitution?',
          content:
            'Article 5 dealt with citizenship at the commencement of the Constitution and specified constitutional conditions for citizenship at that time.',
        },
        {
          heading: 'Citizenship at the commencement of the Constitution',
          content:
            'Article 5 formed part of the original constitutional provisions dealing with citizenship when the Constitution commenced.',
        },
        {
          heading: 'Who was covered by Article 5?',
          content:
            'Article 5 referred to persons domiciled in India and set out conditions relating to birth in India, parentage and ordinary residence for citizenship at the commencement of the Constitution.',
        },
        {
          heading: 'Article 5 and Indian citizenship',
          content:
            'Article 5 is part of the constitutional provisions on citizenship contained in Part II of the Constitution.',
        },
        {
          heading: 'Why is Article 5 important?',
          content:
            'Article 5 is important for understanding the constitutional framework that determined citizenship at the commencement of the Constitution.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 5 म्हणजे काय?',
          content:
            'कलम 5 हे संविधानाच्या प्रारंभीच्या नागरिकत्वाशी संबंधित होते आणि त्या काळात नागरिकत्वासाठी आवश्यक घटनात्मक अटी स्पष्ट करते.',
        },
        {
          heading: 'संविधान अंमलात येताना नागरिकत्व',
          content:
            'संविधान लागू होताना कोणाला भारताचा नागरिक मानले जाईल यासंबंधीच्या मूळ घटनात्मक तरतुदींमध्ये कलम 5 चा समावेश आहे.',
        },
        {
          heading: 'कलम 5 कोणाला लागू होते?',
          content:
            'कलम 5 मध्ये भारतात अधिवास असलेल्या व्यक्तींच्या नागरिकत्वासाठी जन्म, पालकत्व आणि सामान्य वास्तव्याशी संबंधित अटी नमूद करण्यात आल्या होत्या.',
        },
        {
          heading: 'कलम 5 आणि भारतीय नागरिकत्व',
          content:
            'कलम 5 हे संविधानाच्या भाग II मधील नागरिकत्वाशी संबंधित घटनात्मक तरतुदींचा एक भाग आहे.',
        },
        {
          heading: 'कलम 5 महत्त्वाचे का आहे?',
          content:
            'संविधानाच्या प्रारंभी नागरिकत्व कसे ठरवले गेले हे समजण्यासाठी कलम 5 महत्त्वाचे आहे.',
        },
      ],
    },

    keywords: [
      'Article 5',
      'Article 5 of Indian Constitution',
      'Article 5 explained',
      'What is Article 5',
      'citizenship at commencement of constitution',
      'citizenship Article 5',
      'Article 5 citizenship',
      'Indian citizenship Article 5',
      'Article 5 in simple words',
      'art 5',
      '5 article',
      'what is article 5 of indian constitution',
      'citizenship at the commencement of the constitution',
      'कलम 5',
      'कलम 5 भारतीय संविधान',
      'कलम 5 मराठीत',
      'कलम 5 म्हणजे काय',
      'संविधान अंमलात येताना नागरिकत्व',
      'नागरिकत्व',
    ],

    relatedIds: [],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '79',
    articleNumber: 'Article 79',
    title: {
      en: 'Constitution of Parliament',
      mr: 'संसदेची रचना',
    },
    categoryKey: 'union-government',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 79 provides for Parliament of India consisting of the President and two Houses known as the Council of States and House of the People.',
      mr: 'कलम 79 नुसार भारताची संसद राष्ट्रपती आणि राज्यसभा व लोकसभा या दोन सभागृहांनी बनलेली असते.',
    },

    verySimple: {
      en: 'India has a Parliament consisting of the President, Rajya Sabha and Lok Sabha.',
      mr: 'भारताच्या संसदेत राष्ट्रपती, राज्यसभा आणि लोकसभा यांचा समावेश होतो.',
    },

    example: {
      en: 'When studying the constitutional structure of the Union Parliament, Article 79 provides the basic constitutional starting point for understanding its composition.',
      mr: 'केंद्राच्या संसदेची घटनात्मक रचना समजून घेताना कलम 79 हे तिच्या रचनेचा मूलभूत घटनात्मक आधार स्पष्ट करते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 79 of the Indian Constitution?',
          content:
            'Article 79 deals with the constitution of Parliament of India and provides that Parliament consists of the President and two Houses.',
        },
        {
          heading: 'What are the two Houses of Parliament?',
          content:
            'The two Houses of Parliament are the Council of States, known as the Rajya Sabha, and the House of the People, known as the Lok Sabha.',
        },
        {
          heading: 'Article 79 and Parliament of India',
          content:
            'Article 79 provides the constitutional basis for understanding the composition of the Parliament of India.',
        },
        {
          heading: 'Why is Article 79 important?',
          content:
            'Article 79 is important because it establishes the constitutional composition of Parliament at the Union level.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 79 म्हणजे काय?',
          content:
            'कलम 79 भारताच्या संसदेच्या रचनेशी संबंधित आहे आणि संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली असल्याचे स्पष्ट करते.',
        },
        {
          heading: 'संसदेची दोन सभागृहे कोणती?',
          content:
            'संसदेची दोन सभागृहे म्हणजे राज्यसभा आणि लोकसभा. संविधानात त्यांना अनुक्रमे Council of States आणि House of the People असे संबोधले आहे.',
        },
        {
          heading: 'कलम 79 आणि भारताची संसद',
          content:
            'भारताच्या संसदेची घटनात्मक रचना समजून घेण्यासाठी कलम 79 हा मूलभूत आधार आहे.',
        },
        {
          heading: 'कलम 79 महत्त्वाचे का आहे?',
          content:
            'केंद्राच्या पातळीवरील संसदेची घटनात्मक रचना स्पष्ट करण्यासाठी कलम 79 महत्त्वाचे आहे.',
        },
      ],
    },

    keywords: [
      'Article 79',
      'Article 79 of Indian Constitution',
      'Article 79 explained',
      'What is Article 79',
      'Article 79 Parliament',
      'Parliament of India Article 79',
      'Lok Sabha Rajya Sabha Article 79',
      'art 79',
      '79 article',
      'कलम 79',
      'कलम 79 भारतीय संविधान',
      'कलम 79 मराठीत',
      'कलम 79 म्हणजे काय',
      'संसदेची रचना',
      'भारतीय संसद',
      'लोकसभा',
      'राज्यसभा',
    ],

    relatedIds: ['124', '153'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '153',
    articleNumber: 'Article 153',
    title: {
      en: 'Governors of States',
      mr: 'राज्यांचे राज्यपाल',
    },
    categoryKey: 'state-government',

    officialText: {
      en: 'Verified official constitutional text should be inserted here from an authoritative source.',
      mr: 'अधिकृत स्रोताकडून पडताळलेला अधिकृत मजकूर येथे समाविष्ट करावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 153 provides that there shall be a Governor for each State, subject to the constitutional provision allowing the same person to be appointed Governor of two or more States.',
      mr: 'कलम 153 नुसार प्रत्येक राज्यासाठी राज्यपाल असतो. संविधानातील तरतुदीनुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती केली जाऊ शकते.',
    },

    verySimple: {
      en: 'Every State has a Governor under the Constitution.',
      mr: 'संविधानानुसार प्रत्येक राज्याला राज्यपाल असतो.',
    },

    example: {
      en: 'When studying the constitutional position of a State Governor, Article 153 provides the basic provision requiring a Governor for each State.',
      mr: 'राज्यपालांच्या घटनात्मक पदाचा अभ्यास करताना प्रत्येक राज्यासाठी राज्यपाल असण्याची मूलभूत तरतूद कलम 153 मध्ये आहे.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 153 of the Indian Constitution?',
          content:
            'Article 153 provides for a Governor for each State and also allows the same person to be appointed as Governor of two or more States, as provided by the Constitution.',
        },
        {
          heading: 'Who is the Governor of a State?',
          content:
            'The Governor is the constitutional head of the State under the framework of the State executive established by the Constitution.',
        },
        {
          heading: 'Can one person be Governor of two States?',
          content:
            'Yes. Article 153 permits the same person to be appointed Governor of two or more States.',
        },
        {
          heading: 'Article 153 and State Government',
          content:
            'Article 153 is one of the constitutional provisions dealing with the State executive and the office of the Governor.',
        },
        {
          heading: 'Why is Article 153 important?',
          content:
            'Article 153 establishes the constitutional requirement for the office of Governor in the States.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 153 म्हणजे काय?',
          content:
            'कलम 153 नुसार प्रत्येक राज्यासाठी राज्यपाल असतो. संविधानानुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.',
        },
        {
          heading: 'राज्यपाल कोण असतो?',
          content:
            'राज्यपाल हे राज्याच्या घटनात्मक कार्यकारी व्यवस्थेतील महत्त्वाचे घटनात्मक पद आहे.',
        },
        {
          heading: 'एक व्यक्ती दोन राज्यांचा राज्यपाल होऊ शकतो का?',
          content:
            'होय. कलम 153 नुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.',
        },
        {
          heading: 'कलम 153 आणि राज्य सरकार',
          content:
            'कलम 153 हे राज्याच्या कार्यकारी व्यवस्थेशी आणि राज्यपालांच्या पदाशी संबंधित घटनात्मक तरतुदींचा एक भाग आहे.',
        },
        {
          heading: 'कलम 153 महत्त्वाचे का आहे?',
          content:
            'प्रत्येक राज्यात राज्यपालाचे घटनात्मक पद असण्याची मूलभूत तरतूद कलम 153 मध्ये आहे.',
        },
      ],
    },

    keywords: [
      'Article 153',
      'Article 153 of Indian Constitution',
      'Article 153 explained',
      'What is Article 153',
      'Article 153 Governor',
      'Governor Article 153',
      'Governor of States',
      'State Governor Article 153',
      'art 153',
      '153 article',
      'कलम 153',
      'कलम 153 भारतीय संविधान',
      'कलम 153 मराठीत',
      'कलम 153 म्हणजे काय',
      'राज्यांचे राज्यपाल',
      'राज्यपाल',
      'राज्य सरकार',
    ],

    relatedIds: ['79', '124'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

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
      en: 'The official constitutional text of Article 124 should be verified against the latest authoritative Constitution of India PDF before being presented as verbatim official text.',
      mr: 'कलम 124 चा अधिकृत घटनात्मक मजकूर शब्दशः दाखवण्यापूर्वी भारताच्या संविधानाच्या अद्ययावत अधिकृत PDF शी पडताळला जावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 124 deals with the establishment and constitution of the Supreme Court of India and contains important constitutional provisions relating to its judges.',
      mr: 'कलम 124 भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबाबत तरतुदी करते तसेच त्याच्या न्यायाधीशांशी संबंधित महत्त्वाच्या घटनात्मक तरतुदी सांगते.',
    },

    verySimple: {
      en: 'Article 124 is the constitutional provision dealing with the establishment of the Supreme Court and important provisions concerning its judges.',
      mr: 'कलम 124 सर्वोच्च न्यायालयाची स्थापना आणि त्याच्या न्यायाधीशांशी संबंधित महत्त्वाच्या घटनात्मक तरतुदींशी संबंधित आहे.',
    },

    example: {
      en: 'When studying the constitutional establishment of the Supreme Court and provisions concerning its judges, Article 124 is one of the key provisions to understand.',
      mr: 'सर्वोच्च न्यायालयाची घटनात्मक स्थापना आणि त्याच्या न्यायाधीशांशी संबंधित तरतुदी समजून घेताना कलम 124 हे महत्त्वाचे कलम आहे.',
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
            'Article 124(1) provides for the establishment of the Supreme Court of India and its constitutional composition.',
        },
        {
          heading: 'Article 124(2)',
          content:
            'Article 124(2) contains provisions concerning the appointment of judges of the Supreme Court and their tenure in office.',
        },
        {
          heading: 'Supreme Court and Articles 124 to 147',
          content:
            'Articles 124 to 147 contain constitutional provisions concerning the Supreme Court of India, including provisions relating to its judges, jurisdiction and powers.',
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
            'कलम 124(2) सर्वोच्च न्यायालयाच्या न्यायाधीशांच्या नियुक्तीशी आणि त्यांच्या पदाशी संबंधित तरतुदी करते.',
        },
        {
          heading: 'कलम 124 ते 147 आणि सर्वोच्च न्यायालय',
          content:
            'भारतीय संविधानातील कलम 124 ते 147 मध्ये सर्वोच्च न्यायालय, त्याचे न्यायाधीश, अधिकारक्षेत्र आणि अधिकार यांच्याशी संबंधित घटनात्मक तरतुदींचा समावेश आहे.',
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
      'Article 124 judges',
      'article 124 appointment of judges',
      'art 124 of indian constitution',
      'article 124 1',
      'article 124 2',
      '124 article',
      'कलम 124',
      'कलम 124 भारतीय संविधान',
      'कलम 124 मराठीत',
      'कलम 124 म्हणजे काय',
      'सर्वोच्च न्यायालय',
    ],

    relatedIds: ['32', '79', '153'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '352',
    articleNumber: 'Article 352',

    title: {
      en: 'Proclamation of Emergency',
      mr: 'आणीबाणीची घोषणा',
    },

    categoryKey: 'emergency-provisions',

    officialText: {
      en: 'The official constitutional text of Article 352 should be verified against the latest authoritative Constitution of India PDF before being presented as verbatim official text.',
      mr: 'कलम 352 चा अधिकृत घटनात्मक मजकूर शब्दशः दाखवण्यापूर्वी भारताच्या संविधानाच्या अद्ययावत अधिकृत PDF शी पडताळला जावा.',
      verified: false,
    },

    simpleExplanation: {
      en: 'Article 352 deals with the proclamation of a National Emergency when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion.',
      mr: 'कलम 352 अंतर्गत युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या किंवा त्याच्या कोणत्याही भागाच्या सुरक्षेला धोका निर्माण झाल्यास राष्ट्रीय आणीबाणीची घोषणा करण्याची घटनात्मक तरतूद आहे.',
    },

    verySimple: {
      en: 'Article 352 explains the constitutional framework for proclaiming a National Emergency in India.',
      mr: 'कलम 352 भारतात राष्ट्रीय आणीबाणी घोषित करण्याची घटनात्मक चौकट स्पष्ट करते.',
    },

    example: {
      en: 'If the constitutional conditions relating to war, external aggression or armed rebellion are satisfied, Article 352 provides the constitutional framework for a Proclamation of Emergency, subject to the required procedures and parliamentary approval.',
      mr: 'युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाशी संबंधित घटनात्मक अटी पूर्ण झाल्यास, आवश्यक प्रक्रिया आणि संसदीय मंजुरीच्या अधीन राहून कलम 352 राष्ट्रीय आणीबाणीच्या घोषणेची घटनात्मक चौकट देते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 352 of the Indian Constitution?',
          content:
            'Article 352 deals with the Proclamation of Emergency in India when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion.',
        },
        {
          heading: 'When can Article 352 be invoked?',
          content:
            'Article 352 provides for a National Emergency when the constitutional conditions relating to war, external aggression or armed rebellion are satisfied.',
        },
        {
          heading: 'Article 352 and National Emergency',
          content:
            'Article 352 is the constitutional provision dealing with a National Emergency. The Proclamation may apply to the whole of India or to such part of the territory as may be specified.',
        },
        {
          heading: 'Who issues a Proclamation under Article 352?',
          content:
            'The President may issue a Proclamation under Article 352 when the constitutional requirements are satisfied. The decision of the Union Cabinet to issue the Proclamation must be communicated to the President in writing.',
        },
        {
          heading: 'Parliamentary approval under Article 352',
          content:
            'A Proclamation issued under Article 352 must be laid before both Houses of Parliament and is subject to the approval process and time limits prescribed by the Constitution.',
        },
        {
          heading: 'Why is Article 352 important?',
          content:
            'Article 352 forms an important part of the Emergency Provisions in Part XVIII of the Constitution and establishes the constitutional framework for a National Emergency.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 352 म्हणजे काय?',
          content:
            'कलम 352 भारतातील आणीबाणीच्या घोषणेशी संबंधित आहे. युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या किंवा त्याच्या कोणत्याही भागाच्या सुरक्षेला धोका निर्माण झाल्यास या कलमाची तरतूद लागू होते.',
        },
        {
          heading: 'कलम 352 कधी लागू केले जाऊ शकते?',
          content:
            'युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाशी संबंधित घटनात्मक परिस्थिती निर्माण झाल्यास कलम 352 अंतर्गत राष्ट्रीय आणीबाणीची घोषणा करता येते.',
        },
        {
          heading: 'कलम 352 आणि राष्ट्रीय आणीबाणी',
          content:
            'कलम 352 हे राष्ट्रीय आणीबाणीशी संबंधित घटनात्मक तरतूद आहे. आणीबाणीची घोषणा संपूर्ण भारतासाठी किंवा घोषणेत नमूद केलेल्या भारताच्या कोणत्याही भागासाठी केली जाऊ शकते.',
        },
        {
          heading: 'कलम 352 अंतर्गत घोषणा कोण करते?',
          content:
            'घटनात्मक अटी पूर्ण झाल्यास राष्ट्रपती कलम 352 अंतर्गत आणीबाणीची घोषणा करू शकतात. केंद्रीय मंत्रिमंडळाचा संबंधित निर्णय राष्ट्रपतींना लेखी स्वरूपात कळवणे आवश्यक आहे.',
        },
        {
          heading: 'कलम 352 अंतर्गत संसदेची मंजुरी',
          content:
            'कलम 352 अंतर्गत केलेली घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवावी लागते आणि संविधानात दिलेल्या मंजुरीच्या प्रक्रिया व कालमर्यादांचे पालन करावे लागते.',
        },
        {
          heading: 'कलम 352 महत्त्वाचे का आहे?',
          content:
            'कलम 352 हे संविधानाच्या भाग XVIII मधील आणीबाणीच्या तरतुदींचा महत्त्वाचा भाग असून राष्ट्रीय आणीबाणीची घटनात्मक चौकट निश्चित करते.',
        },
      ],
    },

    keywords: [
      'Article 352',
      'Article 352 of Indian Constitution',
      'Article 352 Indian Constitution',
      'Article 352 explained',
      'What is Article 352',
      'Article 352 Emergency',
      'National Emergency in India',
      'Proclamation of Emergency',
      'Article 352 National Emergency',
      'Article 352 of Constitution',
      'art 352',
      '352 article',
      'Article 352 emergency provisions',
      'कलम 352',
      'कलम 352 भारतीय संविधान',
      'कलम 352 मराठीत',
      'कलम 352 म्हणजे काय',
      'राष्ट्रीय आणीबाणी',
      'आणीबाणीची घोषणा',
    ],

    relatedIds: ['356', '360', '32'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '15',
    articleNumber: 'Article 15',
    title: {
      en: 'Prohibition of Discrimination',
      mr: 'भेदभावास प्रतिबंध',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.',
      mr: 'राज्य कोणत्याही नागरिकाविरुद्ध केवळ धर्म, वंश, जात, लिंग, जन्मस्थान किंवा यांपैकी कोणत्याही कारणावरून भेदभाव करणार नाही.',
      verified: true,
    },

    simpleExplanation: {
      en: 'Article 15 prohibits the State from discriminating against citizens on specified grounds such as religion, race, caste, sex and place of birth. The Constitution also permits certain special provisions in specified circumstances.',
      mr: 'कलम 15 राज्याला धर्म, वंश, जात, लिंग आणि जन्मस्थान यांसारख्या ठरावीक आधारांवर नागरिकांमध्ये भेदभाव करण्यास प्रतिबंध करते. संविधानाने परवानगी दिलेल्या परिस्थितीत काही विशेष तरतुदी करण्याची मुभाही राज्याला आहे.',
    },

    verySimple: {
      en: 'The government cannot discriminate against citizens only on specified constitutional grounds.',
      mr: 'संविधानात नमूद केलेल्या ठरावीक आधारांवर सरकार नागरिकांशी भेदभाव करू शकत नाही.',
    },

    example: {
      en: 'If a government authority denies a public benefit to an eligible citizen only on a prohibited ground covered by Article 15, the constitutional provision may become relevant.',
      mr: 'एखाद्या पात्र नागरिकाला कलम 15 मध्ये नमूद केलेल्या प्रतिबंधित आधारावरच सरकारी सुविधा नाकारली गेल्यास हे कलम संबंधित ठरू शकते.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 15 of the Indian Constitution?',
          content:
            'Article 15 prohibits the State from discriminating against citizens on the specified grounds of religion, race, caste, sex or place of birth, subject to the other provisions of the Constitution.',
        },
        {
          heading: 'Which discrimination is prohibited by Article 15?',
          content:
            'Article 15 addresses discrimination by the State on specified constitutional grounds including religion, race, caste, sex and place of birth.',
        },
        {
          heading: 'Article 15 and special provisions',
          content:
            'The Constitution also contains provisions that permit certain special measures for specified groups and circumstances. These provisions must be understood together with the text of Article 15.',
        },
        {
          heading: 'Why is Article 15 important?',
          content:
            'Article 15 is an important Fundamental Right dealing with equality and protection against specified forms of discrimination by the State.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 15 म्हणजे काय?',
          content:
            'कलम 15 राज्याला धर्म, वंश, जात, लिंग आणि जन्मस्थान या नमूद आधारांवर नागरिकांमध्ये भेदभाव करण्यास प्रतिबंध करते.',
        },
        {
          heading: 'कलम 15 कोणत्या भेदभावाला प्रतिबंध करते?',
          content:
            'धर्म, वंश, जात, लिंग आणि जन्मस्थान या संविधानात नमूद केलेल्या आधारांवर राज्याकडून होणाऱ्या भेदभावाशी कलम 15 संबंधित आहे.',
        },
        {
          heading: 'कलम 15 आणि विशेष तरतुदी',
          content:
            'संविधानात काही विशिष्ट गट आणि परिस्थितींसाठी विशेष उपाययोजना करण्यास परवानगी देणाऱ्या तरतुदीही आहेत. त्या तरतुदी कलम 15 सोबत समजून घेणे आवश्यक आहे.',
        },
        {
          heading: 'कलम 15 महत्त्वाचे का आहे?',
          content:
            'राज्याकडून होणाऱ्या विशिष्ट प्रकारच्या भेदभावापासून संरक्षण देणारा हा महत्त्वाचा मूलभूत अधिकार आहे.',
        },
      ],
    },

    keywords: [
      'Article 15',
      'Article 15 of Indian Constitution',
      'Article 15 explained',
      'prohibition of discrimination',
      'discrimination in India',
      'Article 15 Fundamental Rights',
      'caste discrimination Article 15',
      'religion discrimination Article 15',
      'कलम 15',
      'कलम 15 भारतीय संविधान',
      'कलम 15 मराठीत',
      'भेदभावास प्रतिबंध',
      'समानता',
      'मूलभूत अधिकार',
    ],

    relatedIds: ['14', '16', '17', '18'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '16',
    articleNumber: 'Article 16',
    title: {
      en: 'Equality of Opportunity in Public Employment',
      mr: 'सार्वजनिक नोकरीतील समान संधी',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
      mr: 'राज्याच्या अंतर्गत कोणत्याही पदावरील नोकरी किंवा नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असेल.',
      verified: true,
    },

    simpleExplanation: {
      en: 'Article 16 guarantees equality of opportunity for citizens in matters relating to employment or appointment to offices under the State. The Constitution also contains provisions for certain reservations and special measures.',
      mr: 'कलम 16 राज्याच्या अंतर्गत नोकरी किंवा पदावर नियुक्तीच्या बाबतीत नागरिकांना समान संधी देण्याची हमी देते. संविधानात काही प्रकारच्या आरक्षणासाठी आणि विशेष तरतुदींसाठीही तरतूद आहे.',
    },

    verySimple: {
      en: 'Citizens should have equality of opportunity in public employment, subject to the Constitution and law.',
      mr: 'सार्वजनिक नोकरीमध्ये नागरिकांना संविधान आणि कायद्याच्या चौकटीत समान संधी मिळाली पाहिजे.',
    },

    example: {
      en: 'When a citizen applies for a public post, the recruitment process must operate within the constitutional framework governing equality of opportunity and applicable special provisions.',
      mr: 'एखादा नागरिक सार्वजनिक पदासाठी अर्ज करत असल्यास भरती प्रक्रिया समान संधीच्या घटनात्मक चौकटीत आणि लागू विशेष तरतुदींनुसार असली पाहिजे.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 16 of the Indian Constitution?',
          content:
            'Article 16 provides equality of opportunity for citizens in matters relating to employment or appointment to offices under the State.',
        },
        {
          heading: 'Article 16 and government jobs',
          content:
            'Article 16 is directly relevant to equality of opportunity in public employment and appointments to offices under the State.',
        },
        {
          heading: 'Does Article 16 allow reservation?',
          content:
            'The Constitution contains specific provisions within Article 16 concerning reservations and special measures in public employment. These provisions operate subject to their constitutional conditions.',
        },
        {
          heading: 'Why is Article 16 important?',
          content:
            'Article 16 is an important Fundamental Right because it establishes equality of opportunity in public employment.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 16 म्हणजे काय?',
          content:
            'कलम 16 राज्याच्या अंतर्गत नोकरी किंवा कोणत्याही पदावरील नियुक्तीच्या बाबतीत नागरिकांना समान संधी देण्याची हमी देते.',
        },
        {
          heading: 'कलम 16 आणि सरकारी नोकरी',
          content:
            'सार्वजनिक रोजगार आणि राज्याच्या अंतर्गत पदांवरील नियुक्तींमध्ये समान संधीशी कलम 16 थेट संबंधित आहे.',
        },
        {
          heading: 'कलम 16 मध्ये आरक्षणाची तरतूद आहे का?',
          content:
            'सार्वजनिक रोजगारात आरक्षण आणि काही विशेष उपाययोजनांशी संबंधित विशिष्ट घटनात्मक तरतुदी कलम 16 मध्ये आहेत. त्या संबंधित घटनात्मक अटींच्या अधीन असतात.',
        },
        {
          heading: 'कलम 16 महत्त्वाचे का आहे?',
          content:
            'सार्वजनिक नोकरीतील समान संधीचे घटनात्मक संरक्षण देणारा कलम 16 हा महत्त्वाचा मूलभूत अधिकार आहे.',
        },
      ],
    },

    keywords: [
      'Article 16',
      'Article 16 of Indian Constitution',
      'Article 16 explained',
      'equality of opportunity',
      'government jobs Article 16',
      'public employment Article 16',
      'reservation Article 16',
      'Article 16 Fundamental Rights',
      'art 16',
      '16 article',
      'कलम 16',
      'कलम 16 भारतीय संविधान',
      'कलम 16 मराठीत',
      'समान संधी',
      'सरकारी नोकरी',
      'सार्वजनिक रोजगार',
      'आरक्षण',
    ],

    relatedIds: ['14', '15', '17'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: null,
  },

  {
    id: '17',
    articleNumber: 'Article 17',
    title: {
      en: 'Abolition of Untouchability',
      mr: 'अस्पृश्यता निर्मूलन',
    },
    categoryKey: 'fundamental-rights',

    officialText: {
      en: 'Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law.',
      mr: 'अस्पृश्यता नष्ट करण्यात आली आहे आणि तिचे कोणत्याही स्वरूपातील आचरण निषिद्ध आहे. अस्पृश्यतेमुळे उद्भवणारी कोणतीही अयोग्यता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध असेल.',
      verified: true,
    },

    simpleExplanation: {
      en: 'Article 17 abolishes untouchability and prohibits its practice in any form. Enforcement of any disability arising from untouchability is punishable according to law.',
      mr: 'कलम 17 अस्पृश्यता नष्ट करते आणि कोणत्याही स्वरूपात तिच्या प्रथेवर बंदी घालते. अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अयोग्यता लागू करणे कायद्यानुसार दंडनीय आहे.',
    },

    verySimple: {
      en: 'Untouchability is abolished and its practice in any form is prohibited.',
      mr: 'अस्पृश्यता नष्ट करण्यात आली असून तिचे कोणत्याही स्वरूपातील आचरण निषिद्ध आहे.',
    },

    example: {
      en: 'If a person is denied access to a public place because of the practice of untouchability, the matter may attract constitutional and legal consequences.',
      mr: 'अस्पृश्यतेच्या प्रथेच्या आधारावर एखाद्या व्यक्तीला सार्वजनिक ठिकाणी प्रवेश नाकारला गेल्यास संविधान आणि संबंधित कायद्यानुसार कायदेशीर परिणाम होऊ शकतात.',
    },

    seoSections: {
      en: [
        {
          heading: 'What is Article 17 of the Indian Constitution?',
          content:
            'Article 17 abolishes untouchability and forbids its practice in any form. Enforcement of any disability arising from untouchability is punishable according to law.',
        },
        {
          heading: 'What does Article 17 prohibit?',
          content:
            'Article 17 prohibits the practice of untouchability in any form and provides constitutional protection against disabilities arising from such practice.',
        },
        {
          heading: 'Article 17 and equality',
          content:
            'Article 17 is part of the Fundamental Rights and supports the constitutional principle of equality and dignity by abolishing untouchability.',
        },
        {
          heading: 'Why is Article 17 important?',
          content:
            'Article 17 is a specific constitutional prohibition against untouchability and provides that its enforcement is punishable according to law.',
        },
      ],
      mr: [
        {
          heading: 'भारतीय संविधानातील कलम 17 म्हणजे काय?',
          content:
            'कलम 17 अस्पृश्यता नष्ट करते आणि तिचे कोणत्याही स्वरूपातील आचरण निषिद्ध करते. अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अयोग्यता लागू करणे कायद्यानुसार दंडनीय आहे.',
        },
        {
          heading: 'कलम 17 मध्ये कशाला प्रतिबंध आहे?',
          content:
            'कलम 17 अस्पृश्यतेच्या कोणत्याही स्वरूपातील प्रथेला प्रतिबंध करते आणि त्यातून निर्माण होणाऱ्या अयोग्यतेच्या अंमलबजावणीवर दंडनीयतेची तरतूद करते.',
        },
        {
          heading: 'कलम 17 आणि समानता',
          content:
            'अस्पृश्यता नष्ट करून समानता आणि मानवी प्रतिष्ठेच्या घटनात्मक तत्त्वाला बळ देणाऱ्या मूलभूत अधिकारांमध्ये कलम 17 चा समावेश आहे.',
        },
        {
          heading: 'कलम 17 महत्त्वाचे का आहे?',
          content:
            'अस्पृश्यतेवर स्पष्ट घटनात्मक बंदी घालणारे आणि तिच्या अंमलबजावणीला कायद्यानुसार दंडनीय ठरवणारे कलम 17 महत्त्वाचे आहे.',
        },
      ],
    },

    keywords: [
      'Article 17',
      'Article 17 of Indian Constitution',
      'Article 17 explained',
      'Abolition of Untouchability',
      'untouchability in India',
      'Article 17 Fundamental Rights',
      'Article 17 equality',
      'art 17',
      '17 article',
      'कलम 17',
      'कलम 17 भारतीय संविधान',
      'कलम 17 मराठीत',
      'अस्पृश्यता निर्मूलन',
      'समानता',
      'मूलभूत अधिकार',
    ],

    relatedIds: ['14', '15', '16', '18'],

    source: {
      name: 'Legislative Department, Ministry of Law and Justice, Government of India',
      url: 'https://www.legislative.gov.in/constitution-of-india/',
    },

    lastVerified: '2026-09-21',
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