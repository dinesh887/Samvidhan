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
    en: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
    mr: 'राज्य भारताच्या राज्यक्षेत्रात कोणत्याही व्यक्तीस कायद्यासमोर समानता किंवा कायद्यांचे समान संरक्षण नाकारू शकणार नाही.',
    verified: true,
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

म्हणूनच कलम 14 हे केवळ "सर्वांना सारखे वागवा" एवढे साधे तत्त्व नाही. राज्याच्या मनमानी कृतीपासून आणि योग्य घटनात्मक आधार नसलेल्या असमान वागणुकीपासून संरक्षण देणारी ही व्यापक घटनात्मक हमी आहे.`,
  },

  verySimple: {
    en: `Article 14 means that every person is entitled to equality before the law and equal protection of the laws. The State cannot make arbitrary or unjustified distinctions between people.`,
    mr: `कलम 14 म्हणजे प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण मिळण्याची घटनात्मक हमी. राज्याला मनमानी किंवा योग्य आधार नसलेला भेद करता येत नाही.`,
  },

  example: {
    en: `Suppose a government authority has to provide a public benefit to people who satisfy the same eligibility conditions. If the authority gives the benefit to one person but denies it to another person who is in the same relevant circumstances, without a valid legal or constitutional reason, Article 14 may become relevant.

Consider another example. A law may create different rules for two groups of people. The mere fact that the groups are treated differently does not automatically mean that Article 14 has been violated. The distinction may be constitutionally permissible if there is a valid basis for the classification and the distinction has a rational connection with the purpose of the law.

For example, laws may sometimes prescribe different rules for children and adults because their circumstances and legal needs are different. The constitutional question is not simply whether the treatment is identical, but whether the distinction has a legitimate and constitutionally acceptable basis.

These examples are intended to explain the basic concept of Article 14 and should not be treated as a legal conclusion about any particular real-life case.`,

    mr: `समजा एखाद्या सरकारी योजनेचा लाभ मिळण्यासाठी दोन व्यक्ती समान पात्रता पूर्ण करतात. तरीही संबंधित प्राधिकरणाने कोणतेही वैध कायदेशीर किंवा घटनात्मक कारण नसताना एका व्यक्तीला लाभ दिला आणि दुसऱ्या समान परिस्थितीतील व्यक्तीला लाभ नाकारला, तर अशा वागणुकीच्या संदर्भात कलम 14 चा प्रश्न निर्माण होऊ शकतो.

दुसरे उदाहरण पाहूया. एखाद्या कायद्यात दोन वेगवेगळ्या गटांसाठी वेगवेगळे नियम केले असतील, तर केवळ वेगळी वागणूक आहे म्हणून कलम 14 चे उल्लंघन झाले असे आपोआप म्हणता येत नाही. जर त्या वर्गीकरणाला वैध आधार असेल आणि त्याचा कायद्याच्या उद्देशाशी तर्कसंगत संबंध असेल, तर असे वर्गीकरण घटनात्मकदृष्ट्या मान्य असू शकते.

उदाहरणार्थ, मुले आणि प्रौढ यांच्या परिस्थिती आणि कायदेशीर गरजा वेगळ्या असल्यामुळे काही कायद्यांमध्ये त्यांच्यासाठी वेगवेगळ्या तरतुदी असू शकतात. त्यामुळे कलम 14 समजताना प्रत्येकाला प्रत्येक परिस्थितीत अगदी समान वागणूक मिळते का, एवढेच पाहिले जात नाही; त्या फरकाला घटनात्मकदृष्ट्या योग्य आधार आहे का, हेही महत्त्वाचे असते.

ही उदाहरणे कलम 14 ची मूलभूत संकल्पना समजावण्यासाठी आहेत. एखाद्या विशिष्ट प्रकरणाबाबत कायदेशीर निष्कर्ष म्हणून त्यांचा वापर करू नये.`,
  },

  seoSections: {
    en: [
      {
        heading: 'What is Article 14 of the Indian Constitution?',
        content: `Article 14 is a Fundamental Right that guarantees equality before the law and equal protection of the laws to every person within the territory of India. It is part of the Right to Equality under Part III of the Constitution.

The provision is important because it places a constitutional requirement on the State to avoid arbitrary and unjustified unequal treatment. Its protection extends to every person within the territory of India, subject to the constitutional framework.`,
      },

      {
        heading: 'What does equality before law mean?',
        content: `Equality before law is one of the two expressions used in Article 14. In simple terms, it reflects the principle that people are subject to the law and that no person should receive an arbitrary superior legal position merely because of status or identity.

The principle is connected with the idea that the legal system should operate according to law rather than personal privilege. It does not mean that every person must receive identical treatment in every circumstance.`,
      },

      {
        heading: 'What is equal protection of laws?',
        content: `Equal protection of laws is the second important expression in Article 14. It focuses on the application of legal protection to people who are similarly situated.

This principle recognizes that people in materially different circumstances may sometimes require different legal treatment. The constitutional concern is whether the distinction has a valid basis and whether the different treatment is connected with the purpose of the law.`,
      },

      {
        heading: 'Does Article 14 apply to all persons or only citizens?',
        content: `Article 14 uses the expression "any person". Therefore, unlike some Fundamental Rights that are specifically expressed in terms of citizens, Article 14 is framed as a guarantee to every person within the territory of India.

This distinction is useful when studying the Fundamental Rights because the Constitution does not use identical language for every right. The exact wording of each Article determines its scope.`,
      },

      {
        heading: 'Does Article 14 mean everyone must be treated exactly the same?',
        content: `No. Article 14 does not require identical treatment in every situation. Constitutional equality can permit reasonable classification where people or circumstances are genuinely different.

For example, legislation may distinguish between categories of people when the distinction has a valid basis and is connected to the objective of the law. The existence of a classification by itself is therefore not enough to establish a violation of Article 14.`,
      },

      {
        heading: 'Article 14 and reasonable classification',
        content: `The concept of reasonable classification is important when studying Article 14. A classification separates people or situations into groups for the purpose of applying different legal rules.

For a classification to be constitutionally sustainable, the distinction must have a rational basis and must be related to the objective sought to be achieved by the law. The exact application of these principles depends on the facts and legal context of a case.`,
      },

      {
        heading: 'Article 14 and arbitrary State action',
        content: `Article 14 is also important in the constitutional examination of arbitrary State action. Government authorities exercise powers under the Constitution and laws, and those powers cannot be treated as unlimited simply because they are exercised by a public authority.

Where State action creates unequal treatment without an adequate constitutional or legal basis, Article 14 may become relevant. Whether a particular action is constitutionally valid depends on the applicable law and the facts of the individual matter.`,
      },

      {
        heading: 'Article 14 and the Right to Equality',
        content: `Article 14 is the first provision in the constitutional group commonly described as the Right to Equality. Articles 15, 16, 17 and 18 contain additional constitutional protections and principles relating to equality and discrimination.

Studying these provisions together helps explain the broader constitutional approach to equality. Article 14 provides the general constitutional guarantee of equality before law and equal protection of laws, while the following Articles address more specific situations.`,
      },

      {
        heading: 'Article 14 and Articles 15 and 16',
        content: `Article 14, Article 15 and Article 16 are closely connected but they address different constitutional situations.

Article 14 provides equality before law and equal protection of laws to every person. Article 15 specifically deals with discrimination against citizens on certain specified grounds. Article 16 deals with equality of opportunity for citizens in matters relating to employment or appointment to offices under the State.

Understanding these differences helps avoid treating all equality-related provisions as if they had exactly the same scope.`,
      },

      {
        heading: 'Why is Article 14 important?',
        content: `Article 14 is important because equality is a foundational principle of the constitutional system. It provides a standard against which certain forms of unequal treatment by the State can be examined.

The provision is relevant to constitutional studies because it combines the ideas of equality before law and equal protection of laws. It also provides an important framework for understanding why constitutionally valid distinctions can sometimes exist while arbitrary discrimination cannot simply be justified by making a distinction.`,
      },

      {
        heading: 'Common misunderstandings about Article 14',
        content: `One common misunderstanding is that Article 14 requires identical treatment for every person in every situation. The constitutional concept of equality allows distinctions where they are based on constitutionally acceptable grounds.

Another misunderstanding is that Article 14 applies only to Indian citizens. The text uses the expression "any person", making the provision broader in wording than rights that are expressly limited to citizens.

A third misunderstanding is that any difference in treatment automatically violates Article 14. The legal analysis generally requires examination of the nature of the classification, its basis, its purpose and the constitutional context.`,
      },

      {
        heading: 'Why should students study Article 14?',
        content: `Article 14 is an important topic for students studying the Indian Constitution, Fundamental Rights, law and competitive examinations.

It provides the foundation for understanding constitutional equality and helps students distinguish between equality before law, equal protection of laws, reasonable classification and arbitrary State action.

For exams such as UPSC, MPSC, Police Bharti and other competitive examinations, learning the exact constitutional wording together with its basic meaning and related Articles provides a stronger conceptual understanding than memorizing a one-line definition.`,
      },

      {
        heading: 'Key points to remember about Article 14',
        content: `Article 14 guarantees equality before the law and equal protection of the laws.

It applies to every person within the territory of India.

The Article contains two closely connected concepts: equality before law and equal protection of laws.

Article 14 does not require identical treatment in every situation.

Constitutionally permissible classification may allow different treatment where there is a valid basis connected with the purpose of the law.

Articles 15 and 16 provide more specific equality-related protections and should be studied alongside Article 14.`,
      },
    ],

    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 14 म्हणजे काय?',
        content: `कलम 14 हे भारतीय संविधानातील मूलभूत अधिकारांपैकी एक महत्त्वाचे कलम आहे. भारताच्या राज्यक्षेत्रात प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण मिळावे, अशी घटनात्मक हमी या कलमातून दिली आहे.

कलम 14 हे संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा महत्त्वाचा आधार आहे. राज्याकडून होणाऱ्या मनमानी किंवा योग्य घटनात्मक आधार नसलेल्या असमान वागणुकीच्या संदर्भात या कलमाचे विशेष महत्त्व आहे.`,
      },

      {
        heading: 'कायद्यासमोर समानता म्हणजे काय?',
        content: `कायद्यासमोर समानता ही कलम 14 मधील दोन प्रमुख संकल्पनांपैकी एक आहे. सोप्या भाषेत, कोणतीही व्यक्ती कायद्यापेक्षा वरचढ नसावी आणि केवळ सामाजिक किंवा इतर दर्जामुळे एखाद्याला मनमानी पद्धतीने विशेष कायदेशीर स्थान मिळू नये, हा या तत्त्वाचा मूलभूत अर्थ आहे.

याचा अर्थ प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी समान वागणूक दिलीच पाहिजे असा नाही. समानतेचा घटनात्मक अर्थ परिस्थितीनुसार अधिक व्यापक आहे.`,
      },

      {
        heading: 'कायद्यांचे समान संरक्षण म्हणजे काय?',
        content: `कायद्यांचे समान संरक्षण म्हणजे समान परिस्थितीत असलेल्या व्यक्तींना कायद्याचे समान संरक्षण मिळणे. राज्याने कायदा लागू करताना समान स्वरूपाच्या परिस्थितींमध्ये अनावश्यक किंवा मनमानी फरक करू नये, हा यामागील महत्त्वाचा विचार आहे.

मात्र परिस्थिती खरोखरच वेगळी असल्यास संविधान काही वैध वर्गीकरणांना परवानगी देऊ शकते. त्यामुळे समान संरक्षण समजताना व्यक्तींच्या परिस्थितीचा आणि कायद्याच्या उद्देशाचा संदर्भ महत्त्वाचा ठरतो.`,
      },

      {
        heading: 'कलम 14 सर्व व्यक्तींना लागू होते का?',
        content: `होय. कलम 14 मध्ये "any person" म्हणजेच "कोणतीही व्यक्ती" असा शब्दप्रयोग आहे. त्यामुळे हे कलम केवळ भारतीय नागरिकांपुरते मर्यादित नसून भारताच्या राज्यक्षेत्रातील प्रत्येक व्यक्तीच्या संदर्भात घटनात्मक हमी देते.

मूलभूत अधिकारांचा अभ्यास करताना हा फरक महत्त्वाचा आहे, कारण संविधानातील सर्व अधिकारांसाठी समान शब्दरचना वापरलेली नाही.`,
      },

      {
        heading: 'कलम 14 म्हणजे सर्वांना अगदी सारखी वागणूक देणे का?',
        content: `नाही. कलम 14 चा अर्थ प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी एकसारखी वागणूक मिळाली पाहिजे असा नाही.

काही परिस्थितीत व्यक्ती किंवा गट यांच्यातील वास्तविक फरक लक्षात घेऊन कायद्यात वेगवेगळ्या तरतुदी असू शकतात. मात्र अशा फरकाला वैध आधार असणे आणि त्या वर्गीकरणाचा कायद्याच्या उद्देशाशी योग्य संबंध असणे महत्त्वाचे आहे.

त्यामुळे "वेगळी वागणूक" आणि "घटनाबाह्य भेदभाव" या दोन गोष्टी नेहमी समान नसतात.`,
      },

      {
        heading: 'कलम 14 आणि वाजवी वर्गीकरण',
        content: `कलम 14 समजताना वाजवी वर्गीकरण ही संकल्पना महत्त्वाची आहे. एखाद्या कायद्याच्या उद्देशाने लोक किंवा परिस्थिती यांचे वेगवेगळे वर्ग तयार केले जाऊ शकतात.

अशा वर्गीकरणामागे वैध आणि तर्कसंगत आधार असणे तसेच त्या वर्गीकरणाचा कायद्याने साध्य करायच्या उद्देशाशी संबंध असणे आवश्यक असते. एखाद्या विशिष्ट प्रकरणात वर्गीकरण घटनात्मकदृष्ट्या योग्य आहे का, हे त्या प्रकरणातील तथ्ये आणि लागू कायद्यावर अवलंबून असते.`,
      },

      {
        heading: 'कलम 14 आणि राज्याची मनमानी कृती',
        content: `राज्य किंवा सरकारी प्राधिकरणाला संविधान आणि कायद्याच्या चौकटीत काम करावे लागते. केवळ एखादी कृती सरकारी प्राधिकरणाने केली आहे म्हणून ती कोणत्याही घटनात्मक तपासणीच्या पलीकडे जात नाही.

जर राज्याची कृती योग्य घटनात्मक किंवा कायदेशीर आधाराशिवाय व्यक्तींमध्ये असमान वागणूक निर्माण करत असेल, तर कलम 14 चा प्रश्न उपस्थित होऊ शकतो. मात्र एखादी विशिष्ट कृती घटनात्मकदृष्ट्या वैध आहे का, हे संबंधित तथ्ये आणि कायदेशीर चौकटीच्या आधारे ठरवावे लागते.`,
      },

      {
        heading: 'कलम 14 आणि समानतेचा अधिकार',
        content: `कलम 14 हे संविधानातील समानतेशी संबंधित मूलभूत अधिकारांच्या सुरुवातीच्या तरतुदींपैकी एक आहे. त्यानंतर कलम 15, 16, 17 आणि 18 मध्ये समानता, भेदभाव आणि सामाजिक विशेषाधिकारांशी संबंधित अधिक विशिष्ट घटनात्मक तरतुदी आहेत.

या सर्व कलमांचा एकत्र अभ्यास केल्यास संविधानातील समानतेची व्यापक रचना अधिक स्पष्टपणे समजते.`,
      },

      {
        heading: 'कलम 14, 15 आणि 16 मधील फरक',
        content: `कलम 14, 15 आणि 16 हे समानतेशी संबंधित असले तरी त्यांचा विषय आणि घटनात्मक आवाका समान नाही.

कलम 14 प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देते. कलम 15 नागरिकांविरुद्ध विशिष्ट आधारांवर होणाऱ्या भेदभावाशी संबंधित आहे. कलम 16 राज्याच्या अंतर्गत नोकरी किंवा नियुक्तीमध्ये नागरिकांना समान संधी देण्याशी संबंधित आहे.

त्यामुळे समानतेशी संबंधित सर्व कलमे एकाच अर्थाने लागू होतात असे समजणे योग्य नाही.`,
      },

      {
        heading: 'कलम 14 महत्त्वाचे का आहे?',
        content: `समानता हा भारतीय संविधानाच्या मूलभूत तत्त्वांपैकी एक आहे. राज्याकडून होणाऱ्या विशिष्ट प्रकारच्या असमान वागणुकीचे घटनात्मक परीक्षण करण्यासाठी कलम 14 महत्त्वाची चौकट देते.

कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण या दोन संकल्पना समजून घेण्यासाठी हे कलम विशेष महत्त्वाचे आहे. तसेच वैध वर्गीकरण आणि मनमानी भेदभाव यातील फरक समजण्यासही ते मदत करते.`,
      },

      {
        heading: 'कलम 14 बाबत सामान्य गैरसमज',
        content: `एक सामान्य गैरसमज असा आहे की कलम 14 मुळे प्रत्येक व्यक्तीला प्रत्येक परिस्थितीत अगदी समान वागणूक मिळाली पाहिजे. प्रत्यक्षात घटनात्मक समानता काही वैध वर्गीकरणांना परवानगी देते.

दुसरा गैरसमज असा आहे की कलम 14 केवळ भारतीय नागरिकांसाठी आहे. मात्र कलमाच्या शब्दरचनेत "any person" असा उल्लेख असल्यामुळे त्याचा आवाका अधिक व्यापक आहे.

तिसरा गैरसमज असा आहे की कोणतीही वेगळी वागणूक म्हणजे कलम 14 चे उल्लंघन. प्रत्यक्ष घटनात्मक विश्लेषणात त्या वर्गीकरणाचा आधार, उद्देश आणि त्यांच्यातील संबंध यांचा विचार केला जातो.`,
      },

      {
        heading: 'विद्यार्थ्यांनी कलम 14 का अभ्यासावे?',
        content: `भारतीय संविधान, मूलभूत अधिकार, कायदा आणि स्पर्धा परीक्षांचा अभ्यास करणाऱ्या विद्यार्थ्यांसाठी कलम 14 हा महत्त्वाचा विषय आहे.

या कलमामुळे घटनात्मक समानता, कायद्यासमोर समानता, कायद्यांचे समान संरक्षण, वाजवी वर्गीकरण आणि राज्याची मनमानी कृती यांसारख्या संकल्पना समजून घेण्याचा आधार मिळतो.

UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी केवळ एक ओळ पाठ करण्याऐवजी कलमाचा अचूक मजकूर, त्याचा साधा अर्थ आणि संबंधित कलमांशी असलेला संबंध समजून घेणे अधिक उपयुक्त ठरते.`,
      },

      {
        heading: 'कलम 14 चे महत्त्वाचे मुद्दे',
        content: `कलम 14 प्रत्येक व्यक्तीला कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण देण्याची घटनात्मक हमी देते.

हे कलम भारताच्या राज्यक्षेत्रातील प्रत्येक व्यक्तीच्या संदर्भात लागू होते.

कायद्यासमोर समानता आणि कायद्यांचे समान संरक्षण या दोन महत्त्वाच्या संकल्पना कलम 14 मध्ये आहेत.

कलम 14 चा अर्थ प्रत्येक परिस्थितीत सर्वांना तंतोतंत समान वागणूक देणे असा नाही.

वैध आधार आणि कायद्याच्या उद्देशाशी तर्कसंगत संबंध असलेल्या काही वर्गीकरणांना घटनात्मक चौकटीत मान्यता मिळू शकते.

कलम 15 आणि 16 ही समानतेशी संबंधित अधिक विशिष्ट घटनात्मक तरतुदी आहेत आणि त्यांचा कलम 14 सोबत अभ्यास करणे उपयुक्त ठरते.`,
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
    'Article 14 in simple words',
    'Article 14 reasonable classification',
    'Article 14 arbitrary action',
    'Article 14 Fundamental Rights',
    'Article 14 and Article 15',
    'Article 14 and Article 16',
    'art 14',
    '14 article',
    'कलम 14',
    'कलम 14 भारतीय संविधान',
    'कलम 14 मराठीत',
    'कलम 14 म्हणजे काय',
    'समानतेचा अधिकार',
    'कायद्यासमोर समानता',
    'कायद्यांचे समान संरक्षण',
    'वाजवी वर्गीकरण',
  ],

  relatedIds: ['15', '16', '17', '18', '19', '21'],

  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },

  lastVerified: '2026-09-28',
},

  {
  id: '18',
  articleNumber: 'Article 18',
  title: {
    en: 'Abolition of Titles',
    mr: 'पदव्या रद्द करणे',
  },
  categoryKey: 'fundamental-rights',
  officialText: {
    en: 'Abolition of titles.—(1) No title, not being a military or academic distinction, shall be conferred by the State. (2) No citizen of India shall accept any title from any foreign State. (3) No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State. (4) No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.',
    mr: 'पदव्या रद्द करणे.—(1) लष्करी किंवा शैक्षणिक सन्मान वगळता, राज्य कोणतीही पदवी प्रदान करणार नाही. (2) भारताचा कोणताही नागरिक कोणत्याही परकीय राज्याकडून कोणतीही पदवी स्वीकारणार नाही. (3) भारताचा नागरिक नसलेली कोणतीही व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे कोणतेही पद धारण करत असताना, राष्ट्रपतींच्या संमतीशिवाय कोणत्याही परकीय राज्याकडून कोणतीही पदवी स्वीकारणार नाही. (4) राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे कोणतेही पद धारण करणारी कोणतीही व्यक्ती, राष्ट्रपतींच्या संमतीशिवाय, कोणत्याही परकीय राज्याकडून किंवा त्याच्या अधीन कोणतीही भेट, मानधन किंवा कोणत्याही प्रकारचे पद स्वीकारणार नाही.',
    verified: true,
  },
  simpleExplanation: {
    en: `Article 18 deals with the abolition of titles and forms part of the Right to Equality under Part III of the Constitution. Its basic purpose is to prevent the State from creating a system of official titles that could create artificial social distinctions or hereditary-style honours among citizens.

The Article does not prohibit every form of honour or recognition. It specifically allows military and academic distinctions. For example, academic qualifications and distinctions associated with education are not prohibited by Article 18, and military distinctions are also expressly excluded from the prohibition.

Article 18 also places restrictions on accepting titles and certain benefits from foreign States. Indian citizens cannot accept a title from a foreign State. In the case of a person who is not an Indian citizen and holds an office of profit or trust under the State, acceptance of a foreign title requires the President's consent. Similarly, a person holding an office of profit or trust under the State requires the President's consent to accept certain presents, emoluments or offices from or under a foreign State.

Therefore, Article 18 is concerned with maintaining equality in the constitutional system and preventing official titles or foreign honours from creating a separate class of privileged citizens.`,
    mr: `कलम 18 हे समानतेच्या अधिकाराचा भाग असून ते संविधानाच्या भाग III मध्ये समाविष्ट आहे. राज्याकडून अशा अधिकृत पदव्या देण्यास प्रतिबंध करणे हा त्याचा मुख्य उद्देश आहे, ज्यामुळे नागरिकांमध्ये कृत्रिम सामाजिक भेद किंवा विशेष दर्जाची व्यवस्था निर्माण होऊ शकते.

कलम 18 प्रत्येक प्रकारच्या सन्मानाला प्रतिबंध करत नाही. लष्करी आणि शैक्षणिक सन्मानांना या कलमातून स्पष्टपणे अपवाद देण्यात आला आहे. त्यामुळे शैक्षणिक पात्रता किंवा शैक्षणिक क्षेत्रातील सन्मान आणि लष्करी सन्मान यांना कलम 18 मधील पदव्यांवरील बंदी लागू होत नाही.

या कलमात परकीय राज्यांकडून पदवी किंवा काही प्रकारचे लाभ स्वीकारण्याबाबतही तरतुदी आहेत. भारताचा नागरिक कोणत्याही परकीय राज्याकडून पदवी स्वीकारू शकत नाही. भारताचा नागरिक नसलेली व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करत असल्यास, परकीय राज्याकडून पदवी स्वीकारण्यासाठी राष्ट्रपतींची संमती आवश्यक आहे. त्याचप्रमाणे राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला परकीय राज्याकडून किंवा त्याच्या अधीन काही भेट, मानधन किंवा पद स्वीकारण्यासाठी राष्ट्रपतींची संमती आवश्यक आहे.

म्हणूनच कलम 18 चे महत्त्व समानतेच्या घटनात्मक तत्त्वाशी जोडलेले आहे. अधिकृत पदव्या किंवा परकीय सन्मानांच्या माध्यमातून समाजात विशेषाधिकार असलेला स्वतंत्र वर्ग निर्माण होऊ नये, यासाठी या कलमात मर्यादा घालण्यात आल्या आहेत.`,
  },
  verySimple: {
    en: 'Article 18 prevents the State from conferring titles, except military and academic distinctions. It also restricts Indian citizens from accepting titles from foreign States and places certain conditions on people holding offices under the State who receive honours or benefits from foreign States.',
    mr: 'कलम 18 नुसार राज्य लष्करी आणि शैक्षणिक सन्मान वगळता कोणत्याही पदव्या देऊ शकत नाही. तसेच भारताच्या नागरिकांना परकीय राज्यांकडून पदव्या स्वीकारण्यास मनाई आहे आणि राज्याच्या अधीन पद धारण करणाऱ्या व्यक्तींवर परकीय राज्यांकडून मिळणाऱ्या काही सन्मान किंवा लाभांबाबत मर्यादा आहेत.',
  },
  example: {
    en: `Suppose the State creates an official title and begins attaching that title to certain citizens as a permanent mark of social status. Article 18 prevents the State from establishing such titles, unless the distinction falls within the constitutional exceptions for military or academic distinctions.

For another example, imagine an Indian citizen is offered an official title by a foreign State. Article 18 expressly says that an Indian citizen cannot accept such a title.

A separate situation applies to a person holding an office of profit or trust under the State. If that person is offered a present, emolument or office by or under a foreign State, the Constitution requires the President's consent before it can be accepted, subject to the terms of Article 18.`,
    mr: `समजा राज्य एखाद्या व्यक्तीला कायमस्वरूपी सामाजिक दर्जा दर्शवणारी अधिकृत पदवी देण्याची व्यवस्था तयार करते. अशा प्रकारची पदवी कलम 18 च्या तरतुदींशी विसंगत ठरू शकते. मात्र लष्करी किंवा शैक्षणिक सन्मानांना या कलमात स्पष्ट अपवाद आहे.

दुसरे उदाहरण घेऊया. एखाद्या भारतीय नागरिकाला परकीय राज्याकडून अधिकृत पदवी देण्याची ऑफर मिळाली, तर कलम 18 नुसार भारतीय नागरिकाला अशी पदवी स्वीकारता येत नाही.

तसेच राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला परकीय राज्याकडून भेट, मानधन किंवा पद देण्याची ऑफर मिळाल्यास, संविधानातील तरतुदीनुसार राष्ट्रपतींची संमती आवश्यक ठरू शकते.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 18 of the Indian Constitution?',
        content: 'Article 18 is a provision under the Right to Equality in Part III of the Indian Constitution. It deals with the abolition of titles and prevents the State from conferring titles, except for military and academic distinctions. The Article also regulates the acceptance of titles and certain benefits from foreign States.',
      },
      {
        heading: 'Why was Article 18 included in the Constitution?',
        content: 'Article 18 reflects the constitutional principle that citizens should not be divided into officially recognised classes through State-created titles. The provision was designed to discourage systems of official distinction that could create artificial social hierarchies and special status based on titles.',
      },
      {
        heading: 'What does abolition of titles mean?',
        content: 'Abolition of titles means that the State cannot confer titles as official markers of social rank, subject to the exceptions expressly recognised by the Constitution. Article 18 therefore addresses State-created titles rather than every form of achievement, recognition or professional qualification.',
      },
      {
        heading: 'Are academic distinctions prohibited under Article 18?',
        content: 'No. Article 18 expressly excludes academic distinctions from its prohibition. Academic qualifications and recognised distinctions connected with education are therefore not treated as prohibited titles under this provision.',
      },
      {
        heading: 'Are military distinctions prohibited under Article 18?',
        content: 'No. Military distinctions are also expressly excluded from the prohibition contained in Article 18. This means that the constitutional restriction on titles does not prevent the State from recognising military service through appropriate military distinctions.',
      },
      {
        heading: 'Can an Indian citizen accept a title from a foreign State?',
        content: 'Article 18(2) provides that no citizen of India shall accept any title from any foreign State. This is a constitutional restriction specifically directed at foreign titles and is separate from the exceptions for military and academic distinctions recognised under Article 18(1).',
      },
      {
        heading: 'What does Article 18 say about non-citizens?',
        content: 'Article 18(3) deals with a person who is not an Indian citizen and who holds an office of profit or trust under the State. Such a person cannot accept a title from a foreign State without the consent of the President.',
      },
      {
        heading: 'What are the rules regarding foreign presents and offices?',
        content: 'Article 18(4) states that a person holding an office of profit or trust under the State cannot, without the consent of the President, accept any present, emolument or office of any kind from or under a foreign State. This provision addresses potential constitutional concerns connected with foreign benefits or positions.',
      },
      {
        heading: 'Is every award or honour prohibited by Article 18?',
        content: 'Article 18 should not be understood as a general prohibition on every award, recognition or honour. The constitutional text specifically prohibits titles while expressly preserving military and academic distinctions. The nature and legal character of a particular recognition therefore matter when considering Article 18.',
      },
      {
        heading: 'How is Article 18 connected with the Right to Equality?',
        content: 'Article 18 is included within the constitutional provisions dealing with the Right to Equality. Its restrictions on State-conferred titles support the broader constitutional approach of avoiding officially created distinctions that could place some citizens in a separate class based merely on titles.',
      },
      {
        heading: 'What is the difference between a title and an academic qualification?',
        content: 'A title under Article 18 refers to the kind of distinction that the State is constitutionally restricted from conferring, subject to the stated exceptions. An academic qualification or distinction is expressly excluded from this prohibition. Therefore, educational degrees and academic distinctions should not automatically be treated as prohibited titles.',
      },
      {
        heading: 'Why is Article 18 important?',
        content: 'Article 18 is important because it establishes constitutional limits on official titles and regulates the acceptance of certain foreign honours and benefits by persons connected with State offices. It forms part of the constitutional framework supporting equality and preventing officially created title-based distinctions among citizens.',
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 18 म्हणजे काय?',
        content: 'कलम 18 हे संविधानाच्या भाग III मधील समानतेच्या अधिकाराशी संबंधित आहे. या कलमानुसार राज्याला लष्करी किंवा शैक्षणिक सन्मान वगळता पदव्या प्रदान करण्यास मनाई आहे. तसेच परकीय राज्यांकडून पदव्या आणि काही प्रकारचे लाभ स्वीकारण्याबाबतही या कलमात नियम आहेत.',
      },
      {
        heading: 'कलम 18 संविधानात का समाविष्ट करण्यात आले?',
        content: 'राज्याच्या माध्यमातून नागरिकांमध्ये अधिकृत पदव्यांच्या आधारे वेगळा सामाजिक दर्जा निर्माण होऊ नये, हा या तरतुदीमागील महत्त्वाचा घटनात्मक विचार आहे. पदव्यांमुळे निर्माण होणारी कृत्रिम सामाजिक श्रेणी टाळण्याच्या दृष्टीने कलम 18 महत्त्वाचे आहे.',
      },
      {
        heading: 'पदव्या रद्द करणे म्हणजे काय?',
        content: 'पदव्या रद्द करणे म्हणजे राज्याने नागरिकांना अधिकृत सामाजिक दर्जा दर्शविणाऱ्या पदव्या प्रदान करू नयेत, असा घटनात्मक नियम. मात्र संविधानाने लष्करी आणि शैक्षणिक सन्मानांना स्पष्टपणे अपवाद दिला आहे.',
      },
      {
        heading: 'कलम 18 अंतर्गत शैक्षणिक सन्मानांना मनाई आहे का?',
        content: 'नाही. कलम 18 मध्ये शैक्षणिक सन्मानांना स्पष्टपणे अपवाद देण्यात आला आहे. त्यामुळे शिक्षणाशी संबंधित शैक्षणिक पात्रता किंवा मान्यताप्राप्त शैक्षणिक सन्मानांना कलम 18 मधील पदव्यांवरील बंदी लागू होत नाही.',
      },
      {
        heading: 'लष्करी सन्मानांना कलम 18 लागू होते का?',
        content: 'नाही. लष्करी सन्मानांनाही कलम 18 मधील पदव्यांवरील बंदीतून स्पष्टपणे वगळण्यात आले आहे. त्यामुळे लष्करी सेवेशी संबंधित घटनात्मकदृष्ट्या मान्य सन्मान या तरतुदीच्या सामान्य बंदीत येत नाहीत.',
      },
      {
        heading: 'भारतीय नागरिक परकीय राज्याकडून पदवी स्वीकारू शकतो का?',
        content: 'कलम 18(2) नुसार भारताचा कोणताही नागरिक कोणत्याही परकीय राज्याकडून पदवी स्वीकारू शकत नाही. ही तरतूद परकीय राज्यांकडून मिळणाऱ्या पदव्यांशी संबंधित स्वतंत्र घटनात्मक मर्यादा आहे.',
      },
      {
        heading: 'भारताचा नागरिक नसलेल्या व्यक्तीबाबत कलम 18 काय सांगते?',
        content: 'कलम 18(3) नुसार भारताचा नागरिक नसलेली व्यक्ती राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करत असल्यास, राष्ट्रपतींच्या संमतीशिवाय परकीय राज्याकडून पदवी स्वीकारू शकत नाही.',
      },
      {
        heading: 'परकीय राज्याकडून मिळणाऱ्या भेटवस्तू किंवा पदांबाबत काय नियम आहेत?',
        content: 'कलम 18(4) नुसार राज्याच्या अधीन नफा मिळविणारे किंवा विश्वासाचे पद धारण करणाऱ्या व्यक्तीला राष्ट्रपतींच्या संमतीशिवाय परकीय राज्याकडून किंवा त्याच्या अधीन कोणतीही भेट, मानधन किंवा कोणत्याही प्रकारचे पद स्वीकारता येत नाही.',
      },
      {
        heading: 'कलम 18 प्रत्येक पुरस्काराला प्रतिबंध करते का?',
        content: 'नाही. कलम 18 चा अर्थ प्रत्येक पुरस्कार, सन्मान किंवा मान्यतेवर सर्वसाधारण बंदी असा नाही. संविधानातील मजकूर विशेषतः पदव्यांबाबत नियम करतो आणि लष्करी व शैक्षणिक सन्मानांना स्पष्ट अपवाद देतो.',
      },
      {
        heading: 'कलम 18 आणि समानतेचा अधिकार यांचा संबंध काय?',
        content: 'कलम 18 हे समानतेच्या अधिकाराशी संबंधित घटनात्मक तरतुदींच्या समूहात येते. राज्याकडून निर्माण होणाऱ्या पदवी-आधारित विशेष सामाजिक भेदांना मर्यादा घालून हे कलम समानतेच्या व्यापक घटनात्मक तत्त्वाला आधार देते.',
      },
      {
        heading: 'पदवी आणि शैक्षणिक पात्रता यात काय फरक आहे?',
        content: 'कलम 18 मधील पदवी म्हणजे राज्याकडून प्रदान केली जाणारी अशी अधिकृत उपाधी ज्यावर या कलमात मर्यादा घातल्या आहेत. त्याउलट शैक्षणिक पात्रता किंवा शैक्षणिक सन्मान यांना संविधानाने स्पष्ट अपवाद दिला आहे. त्यामुळे प्रत्येक शैक्षणिक पदवीला कलम 18 अंतर्गत प्रतिबंधित पदवी समजणे योग्य नाही.',
      },
      {
        heading: 'कलम 18 चे महत्त्व काय आहे?',
        content: 'कलम 18 चे महत्त्व राज्याकडून दिल्या जाणाऱ्या अधिकृत पदव्यांवर घटनात्मक मर्यादा घालण्यात आणि परकीय राज्यांकडून पदवी किंवा काही लाभ स्वीकारण्याच्या बाबतीत नियम निश्चित करण्यात आहे. हे कलम समानतेच्या घटनात्मक चौकटीतील एक महत्त्वाची तरतूद आहे.',
      },
    ],
  },
  keywords: [
    'Article 18',
    'Article 18 Indian Constitution',
    'Abolition of Titles',
    'Article 18 explained',
    'Article 18 in Marathi',
    'कलम 18',
    'कलम 18 भारतीय संविधान',
    'पदव्या रद्द करणे',
    'Right to Equality',
    'Fundamental Rights Article 18',
  ],
  relatedIds: ['14', '15', '16', '17', '19'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '19',
  articleNumber: 'Article 19',
  title: {
    en: 'Protection of Certain Rights Regarding Freedom of Speech, etc.',
    mr: 'भाषणस्वातंत्र्य इत्यादींबाबत काही अधिकारांचे संरक्षण',
  },
  categoryKey: 'fundamental-rights',
  officialText: {
    en: 'Protection of certain rights regarding freedom of speech, etc.—(1) All citizens shall have the right—(a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions or co-operative societies; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (g) to practise any profession, or to carry on any occupation, trade or business. (2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence. (3) Nothing in sub-clause (b) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order, reasonable restrictions on the exercise of the right conferred by the said sub-clause. (4) Nothing in sub-clause (c) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order or morality, reasonable restrictions on the exercise of the right conferred by the said sub-clause. (5) Nothing in sub-clauses (d) and (e) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing reasonable restrictions on the exercise of any of the rights conferred by the said sub-clauses either in the interests of the general public or for the protection of the interests of any Scheduled Tribe. (6) Nothing in sub-clause (g) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the general public, reasonable restrictions on the exercise of the right conferred by the said sub-clause, and, in particular, nothing in the said sub-clause shall affect the operation of any existing law in so far as it relates to or prevent the State from making any law relating to—(i) the professional or technical qualifications necessary for practising any profession or carrying on any occupation, trade or business, or (ii) the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise.',
    mr: 'भाषणस्वातंत्र्य इत्यादींबाबत काही अधिकारांचे संरक्षण.—(1) सर्व नागरिकांना—(a) भाषण व अभिव्यक्तीचे स्वातंत्र्य; (b) शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचे स्वातंत्र्य; (c) संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य; (d) भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचे स्वातंत्र्य; (e) भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य; आणि (g) कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य असे अधिकार असतील. (2) खंड (1) मधील उपखंड (a) मुळे मिळणाऱ्या अधिकाराच्या वापरावर भारताचे सार्वभौमत्व व अखंडता, राज्याची सुरक्षा, परकीय राज्यांशी मैत्रीपूर्ण संबंध, सार्वजनिक सुव्यवस्था, सभ्यता किंवा नीतिमत्ता यांच्या हितासाठी किंवा न्यायालयाचा अवमान, मानहानी किंवा गुन्ह्यास प्रवृत्त करणे यासंबंधी वाजवी निर्बंध घालणाऱ्या विद्यमान कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (3) उपखंड (b) मधील अधिकारावर भारताचे सार्वभौमत्व व अखंडता किंवा सार्वजनिक सुव्यवस्थेच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (4) उपखंड (c) मधील अधिकारावर भारताचे सार्वभौमत्व व अखंडता, सार्वजनिक सुव्यवस्था किंवा नीतिमत्ता यांच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (5) उपखंड (d) आणि (e) मधील अधिकारांवर सर्वसामान्य जनतेच्या हितासाठी किंवा कोणत्याही अनुसूचित जमातीच्या हितांचे संरक्षण करण्यासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. (6) उपखंड (g) मधील अधिकारावर सर्वसामान्य जनतेच्या हितासाठी वाजवी निर्बंध घालणाऱ्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही किंवा राज्याला असा कायदा करण्यास प्रतिबंध होणार नाही. विशेषतः, कोणताही व्यवसाय किंवा उपजीविका, व्यापार किंवा उद्योग करण्यासाठी आवश्यक असलेल्या व्यावसायिक किंवा तांत्रिक पात्रतेसंबंधी कायदे तसेच राज्य किंवा राज्याच्या मालकीच्या किंवा नियंत्रणाखालील महामंडळाकडून व्यापार, व्यवसाय, उद्योग किंवा सेवा चालविण्याबाबतचे कायदे यांवर या उपखंडाचा परिणाम होणार नाही.',
    verified: true,
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

म्हणून कलम 19 हे केवळ स्वातंत्र्यांची यादी नाही. हे नागरिकांच्या स्वातंत्र्यांचे संरक्षण आणि सार्वजनिक हितासाठी संविधानाने मान्य केलेले वाजवी नियमन यांच्यातील घटनात्मक चौकट स्पष्ट करते.`,
  },
  verySimple: {
    en: 'Article 19 gives Indian citizens important freedoms, including freedom of speech and expression, peaceful assembly, forming associations, movement, residence and settlement, and practising a profession or carrying on a trade or business. These freedoms are subject to reasonable restrictions permitted by the Constitution.',
    mr: 'कलम 19 भारतीय नागरिकांना भाषण व अभिव्यक्ती, शांततेने एकत्र येणे, संघटना स्थापन करणे, भारतभर फिरणे, कुठेही राहणे व स्थायिक होणे आणि व्यवसाय किंवा व्यापार करण्याचे स्वातंत्र्य देते. या अधिकारांवर संविधानाने मान्य केलेले वाजवी निर्बंध लागू होऊ शकतात.',
  },
  example: {
    en: `Suppose a citizen wants to express an opinion on a public issue. Article 19(1)(a) protects freedom of speech and expression. However, the Constitution also permits reasonable restrictions on this freedom on the specific grounds mentioned in Article 19(2).

Consider another situation where citizens want to organise a peaceful gathering without weapons. Article 19(1)(b) recognises the right to assemble peacefully and without arms. This right can also be subject to reasonable restrictions permitted under Article 19(3), including restrictions connected with public order.

A different example concerns employment or business. A citizen may choose a profession or conduct a trade or business, but laws may prescribe professional or technical qualifications for certain professions and may regulate activities in the general public interest.

These examples show that Article 19 protects important freedoms while also recognising that their exercise operates within a constitutional framework of specified restrictions.`,
    mr: `समजा एखाद्या नागरिकाला एखाद्या सार्वजनिक विषयावर आपले मत व्यक्त करायचे आहे. कलम 19(1)(a) भाषण व अभिव्यक्तीच्या स्वातंत्र्याचे संरक्षण करते. मात्र कलम 19(2) मध्ये नमूद केलेल्या विशिष्ट आधारांवर या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.

दुसरे उदाहरण म्हणजे नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येऊन सभा आयोजित करायची आहे. कलम 19(1)(b) अशा शांततापूर्ण एकत्र येण्याच्या अधिकाराला मान्यता देते. मात्र सार्वजनिक सुव्यवस्थेसह संविधानात नमूद केलेल्या आधारांवर या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.

व्यवसायाचे उदाहरण घेतल्यास, एखाद्या नागरिकाला व्यवसाय, व्यापार किंवा उपजीविका करण्याचे स्वातंत्र्य आहे. परंतु काही व्यवसायांसाठी आवश्यक व्यावसायिक किंवा तांत्रिक पात्रता कायद्याने निश्चित केली जाऊ शकते आणि सार्वजनिक हितासाठी त्या क्षेत्राचे नियमन केले जाऊ शकते.

यावरून दिसते की कलम 19 नागरिकांच्या महत्त्वाच्या स्वातंत्र्यांचे संरक्षण करते आणि त्याच वेळी त्यांच्या वापरासाठी संविधानाने ठरवलेली नियमनाची चौकटही निश्चित करते.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 19 of the Indian Constitution?',
        content: 'Article 19 is part of the Right to Freedom in Part III of the Constitution. It protects certain freedoms of Indian citizens, including speech and expression, peaceful assembly, associations, movement, residence and settlement, and profession, occupation, trade or business.',
      },
      {
        heading: 'What freedoms are guaranteed under Article 19?',
        content: 'Article 19(1) recognises six currently operative categories of freedom for citizens: freedom of speech and expression; peaceful assembly without arms; forming associations, unions or co-operative societies; moving freely throughout India; residing and settling in any part of India; and practising a profession or carrying on an occupation, trade or business.',
      },
      {
        heading: 'Is Article 19 available to all persons?',
        content: 'The rights listed in Article 19(1) are expressly described as rights of all citizens. Therefore, the constitutional wording of Article 19 distinguishes these freedoms from provisions that apply to every person irrespective of citizenship.',
      },
      {
        heading: 'What is freedom of speech and expression under Article 19?',
        content: 'Article 19(1)(a) protects freedom of speech and expression for citizens. The constitutional protection covers the exercise of this freedom within the framework of Article 19, including the specific grounds on which reasonable restrictions may be imposed under clause (2).',
      },
      {
        heading: 'Are there restrictions on freedom of speech?',
        content: 'Yes. Article 19(2) expressly permits reasonable restrictions on freedom of speech and expression on specified grounds. These include the sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation and incitement to an offence.',
      },
      {
        heading: 'What is the right to peaceful assembly?',
        content: 'Article 19(1)(b) gives citizens the right to assemble peaceably and without arms. Article 19(3) allows reasonable restrictions on this right in the interests of the sovereignty and integrity of India or public order.',
      },
      {
        heading: 'What is the freedom to form associations?',
        content: 'Article 19(1)(c) protects the right of citizens to form associations or unions or co-operative societies. Article 19(4) permits reasonable restrictions on this freedom in the interests of the sovereignty and integrity of India, public order or morality.',
      },
      {
        heading: 'Can citizens freely move anywhere in India?',
        content: 'Article 19(1)(d) recognises the freedom of citizens to move freely throughout the territory of India. Article 19(5) allows reasonable restrictions in the interests of the general public or for the protection of the interests of any Scheduled Tribe.',
      },
      {
        heading: 'Can a citizen live and settle anywhere in India?',
        content: 'Article 19(1)(e) protects the right of citizens to reside and settle in any part of India. This right is subject to reasonable restrictions permitted by Article 19(5), including restrictions in the interests of the general public or for protecting the interests of Scheduled Tribes.',
      },
      {
        heading: 'What is the right to practise a profession or carry on business?',
        content: 'Article 19(1)(g) protects the right of citizens to practise a profession or carry on an occupation, trade or business. Article 19(6) allows reasonable restrictions in the general public interest and recognises provisions relating to professional or technical qualifications and State participation in trade, business, industry or services.',
      },
      {
        heading: 'What does reasonable restriction mean in Article 19?',
        content: 'Article 19 does not describe its protected freedoms as absolute. Instead, clauses (2) to (6) specify circumstances in which laws may impose reasonable restrictions. The permissible grounds differ depending on the particular freedom involved.',
      },
      {
        heading: 'What happened to Article 19(1)(f)?',
        content: 'The original right contained in Article 19(1)(f), relating to property, was omitted by the Constitution (Forty-fourth Amendment) Act, 1978 with effect from 20 June 1979. The currently operative text therefore moves from sub-clause (e) to sub-clause (g).',
      },
      {
        heading: 'Why is Article 19 important?',
        content: 'Article 19 is important because it constitutionally protects several freedoms that affect communication, participation in society, movement, residence and economic activity. At the same time, it provides specific constitutional grounds for reasonable restrictions, creating a framework for balancing these freedoms with specified public interests.',
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 19 म्हणजे काय?',
        content: 'कलम 19 हे संविधानाच्या भाग III मधील स्वातंत्र्याच्या अधिकाराचा भाग आहे. हे भारतीय नागरिकांना भाषण व अभिव्यक्ती, शांततेने एकत्र येणे, संघटना स्थापन करणे, भारतभर फिरणे, राहणे व स्थायिक होणे आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्यासंबंधी काही स्वातंत्र्यांचे संरक्षण देते.',
      },
      {
        heading: 'कलम 19 अंतर्गत कोणती स्वातंत्र्ये आहेत?',
        content: 'कलम 19(1) अंतर्गत सध्या लागू असलेल्या सहा प्रमुख स्वातंत्र्यांमध्ये भाषण व अभिव्यक्तीचे स्वातंत्र्य, शांततेने व शस्त्रांशिवाय एकत्र येण्याचे स्वातंत्र्य, संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचे स्वातंत्र्य, भारतभर मुक्तपणे फिरण्याचे स्वातंत्र्य, भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य आणि व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य यांचा समावेश होतो.',
      },
      {
        heading: 'कलम 19 सर्व व्यक्तींना लागू होते का?',
        content: 'कलम 19(1) मधील अधिकार संविधानाच्या भाषेत सर्व नागरिकांना दिले आहेत. त्यामुळे या कलमातील स्वातंत्र्ये नागरिकांशी संबंधित आहेत. संविधानातील काही इतर मूलभूत अधिकार मात्र प्रत्येक व्यक्तीला लागू होतात.',
      },
      {
        heading: 'कलम 19 अंतर्गत भाषण व अभिव्यक्तीचे स्वातंत्र्य काय आहे?',
        content: 'कलम 19(1)(a) भारतीय नागरिकांच्या भाषण व अभिव्यक्तीच्या स्वातंत्र्याचे संरक्षण करते. या स्वातंत्र्याचा वापर संविधानाच्या चौकटीत होतो आणि कलम 19(2) मध्ये नमूद केलेल्या आधारांवर वाजवी निर्बंध लागू होऊ शकतात.',
      },
      {
        heading: 'भाषण व अभिव्यक्तीच्या स्वातंत्र्यावर निर्बंध असू शकतात का?',
        content: 'होय. कलम 19(2) नुसार भारताचे सार्वभौमत्व व अखंडता, राज्याची सुरक्षा, परकीय राज्यांशी मैत्रीपूर्ण संबंध, सार्वजनिक सुव्यवस्था, सभ्यता किंवा नीतिमत्ता, न्यायालयाचा अवमान, मानहानी आणि गुन्ह्यास प्रवृत्त करणे या आधारांवर वाजवी निर्बंध घालता येऊ शकतात.',
      },
      {
        heading: 'शांततेने एकत्र येण्याचा अधिकार म्हणजे काय?',
        content: 'कलम 19(1)(b) नागरिकांना शांततेने आणि शस्त्रांशिवाय एकत्र येण्याचा अधिकार देते. कलम 19(3) नुसार भारताचे सार्वभौमत्व व अखंडता किंवा सार्वजनिक सुव्यवस्थेच्या हितासाठी या अधिकारावर वाजवी निर्बंध लागू होऊ शकतात.',
      },
      {
        heading: 'संघटना स्थापन करण्याचा अधिकार काय आहे?',
        content: 'कलम 19(1)(c) नागरिकांना संघटना, संघ किंवा सहकारी संस्था स्थापन करण्याचा अधिकार देते. भारताचे सार्वभौमत्व व अखंडता, सार्वजनिक सुव्यवस्था किंवा नीतिमत्ता यांच्या हितासाठी या अधिकारावर कलम 19(4) अंतर्गत वाजवी निर्बंध लागू होऊ शकतात.',
      },
      {
        heading: 'भारतात नागरिकांना मुक्तपणे कुठेही फिरता येते का?',
        content: 'कलम 19(1)(d) नागरिकांना भारताच्या संपूर्ण प्रदेशात मुक्तपणे फिरण्याचा अधिकार देते. मात्र सर्वसामान्य जनतेच्या हितासाठी किंवा अनुसूचित जमातींच्या हितांचे संरक्षण करण्यासाठी कलम 19(5) अंतर्गत वाजवी निर्बंध लागू होऊ शकतात.',
      },
      {
        heading: 'नागरिक भारतात कुठेही राहू व स्थायिक होऊ शकतो का?',
        content: 'कलम 19(1)(e) नागरिकांना भारताच्या कोणत्याही भागात राहण्याचे व स्थायिक होण्याचे स्वातंत्र्य देते. मात्र कलम 19(5) नुसार सर्वसामान्य जनतेच्या हितासाठी किंवा अनुसूचित जमातींच्या हितांचे संरक्षण करण्यासाठी वाजवी निर्बंध लागू होऊ शकतात.',
      },
      {
        heading: 'व्यवसाय किंवा व्यापार करण्याचा अधिकार काय आहे?',
        content: 'कलम 19(1)(g) नागरिकांना कोणताही व्यवसाय, उपजीविका, व्यापार किंवा उद्योग करण्याचे स्वातंत्र्य देते. कलम 19(6) नुसार सर्वसामान्य जनतेच्या हितासाठी वाजवी निर्बंध लागू होऊ शकतात. काही व्यवसायांसाठी आवश्यक व्यावसायिक किंवा तांत्रिक पात्रतेबाबतही कायदे करता येतात.',
      },
      {
        heading: 'कलम 19 मधील वाजवी निर्बंध म्हणजे काय?',
        content: 'कलम 19 मधील स्वातंत्र्ये पूर्णपणे अमर्यादित नाहीत. खंड (2) ते (6) मध्ये प्रत्येक संबंधित अधिकारावर कोणत्या परिस्थितीत कायद्याद्वारे वाजवी निर्बंध लागू करता येतात हे नमूद केले आहे. प्रत्येक स्वातंत्र्यासाठी निर्बंधांची घटनात्मक कारणे वेगवेगळी आहेत.',
      },
      {
        heading: 'कलम 19(1)(f) चे काय झाले?',
        content: 'कलम 19(1)(f) मधील मालमत्तेशी संबंधित मूलभूत अधिकार 44व्या घटनादुरुस्ती अधिनियम, 1978 द्वारे वगळण्यात आला आणि ही दुरुस्ती 20 जून 1979 पासून प्रभावी झाली. त्यामुळे सध्याच्या कलम 19 मध्ये (e) नंतर थेट (g) येतो.',
      },
      {
        heading: 'कलम 19 चे महत्त्व काय आहे?',
        content: 'कलम 19 महत्त्वाचे आहे कारण ते नागरिकांच्या संवाद, सामाजिक सहभाग, हालचाल, निवास आणि आर्थिक क्रियाकलापांशी संबंधित अनेक स्वातंत्र्यांना घटनात्मक संरक्षण देते. त्याच वेळी या स्वातंत्र्यांवर विशिष्ट सार्वजनिक हितांच्या आधारावर वाजवी निर्बंध लावण्यासाठी संविधानिक चौकटही उपलब्ध करून देते.',
      },
    ],
  },
  keywords: [
    'Article 19',
    'Article 19 Indian Constitution',
    'Article 19 freedoms',
    'freedom of speech and expression',
    'freedom of assembly',
    'freedom of association',
    'freedom of movement in India',
    'freedom of residence',
    'freedom of profession',
    'reasonable restrictions Article 19',
    'Article 19 in Marathi',
    'कलम 19',
    'कलम 19 भारतीय संविधान',
    'भाषण स्वातंत्र्य',
    'स्वातंत्र्याचा अधिकार',
  ],
  relatedIds: ['14', '15', '16', '17', '18', '21'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '21',
  articleNumber: 'Article 21',
  title: {
    en: 'Protection of Life and Personal Liberty',
    mr: 'जीवन व व्यक्तिगत स्वातंत्र्याचे संरक्षण',
  },
  categoryKey: 'fundamental-rights',
  officialText: {
    en: 'Protection of life and personal liberty.—No person shall be deprived of his life or personal liberty except according to procedure established by law.',
    mr: 'जीवन व व्यक्तिगत स्वातंत्र्याचे संरक्षण.—कायद्याने स्थापित केलेल्या प्रक्रियेनुसारच एखाद्या व्यक्तीस तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येईल.',
    verified: true,
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

म्हणून कलम 21 हे जीवन आणि व्यक्तिगत स्वातंत्र्याचे व्यापक घटनात्मक संरक्षण देते आणि या अधिकारांपासून वंचित करण्यासाठी कायद्याने स्थापित केलेल्या प्रक्रियेचे पालन आवश्यक करते.`,
  },
  verySimple: {
    en: 'Article 21 protects the life and personal liberty of every person. It says that no person can be deprived of life or personal liberty except according to a procedure established by law.',
    mr: 'कलम 21 प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते. कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येत नाही.',
  },
  example: {
    en: `Suppose a person is taken into custody by a public authority and their personal liberty is affected. The State cannot treat deprivation of liberty as something that can be done without legal authority and procedure. Article 21 requires that deprivation of personal liberty must take place according to a procedure established by law.

Another example can be understood through the idea of personal dignity. Life under the Constitution is not understood merely as continuing to exist physically. Judicial interpretation of Article 21 has connected the protection of life with various conditions necessary for living with human dignity.

The exact legal protection available in a particular situation depends on the applicable law, constitutional provisions and judicial interpretation. Article 21 therefore operates as an important constitutional safeguard whenever State action affects a person's life or personal liberty.`,
    mr: `समजा एखाद्या सार्वजनिक प्राधिकरणाकडून एखाद्या व्यक्तीला ताब्यात घेतले जाते आणि तिच्या व्यक्तिगत स्वातंत्र्यावर परिणाम होतो. व्यक्तीचे स्वातंत्र्य हिरावून घेणे ही कायदेशीर अधिकार आणि प्रक्रिया नसतानाही करता येणारी कृती नाही. कलम 21 नुसार व्यक्तिगत स्वातंत्र्यापासून वंचित करण्याची कारवाई कायद्याने स्थापित केलेल्या प्रक्रियेनुसार असणे आवश्यक आहे.

जीवनाच्या अधिकाराचे उदाहरण मानवी प्रतिष्ठेच्या संदर्भातूनही समजता येते. संविधानाच्या दृष्टीने जीवनाचा अर्थ केवळ शारीरिक अस्तित्व टिकून राहणे एवढाच मर्यादित नाही. न्यायालयीन व्याख्येमध्ये कलम 21 अंतर्गत मानवी प्रतिष्ठेशी संबंधित विविध पैलूंचा विचार करण्यात आला आहे.

एखाद्या विशिष्ट परिस्थितीत नेमके कोणते कायदेशीर संरक्षण लागू होईल हे संबंधित कायदा, संविधानातील इतर तरतुदी आणि न्यायालयीन व्याख्येवर अवलंबून असते. त्यामुळे एखाद्या व्यक्तीच्या जीवनावर किंवा व्यक्तिगत स्वातंत्र्यावर राज्याच्या कारवाईचा परिणाम होत असल्यास कलम 21 महत्त्वाचे घटनात्मक संरक्षण प्रदान करते.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 21 of the Indian Constitution?',
        content: 'Article 21 provides constitutional protection for life and personal liberty. It states that no person shall be deprived of life or personal liberty except according to procedure established by law. It is included in Part III under Fundamental Rights.',
      },
      {
        heading: 'What does Article 21 protect?',
        content: 'The text of Article 21 expressly protects two closely connected interests: life and personal liberty. Its wording applies to every person and not only to Indian citizens.',
      },
      {
        heading: 'Does Article 21 apply to all persons?',
        content: 'Yes. Article 21 uses the expression "No person", making its constitutional protection applicable to every person. This is different from certain Fundamental Rights whose text specifically refers to citizens.',
      },
      {
        heading: 'What does personal liberty mean under Article 21?',
        content: 'Personal liberty refers broadly to an individual’s freedom from unlawful or constitutionally impermissible deprivation of liberty. The scope of personal liberty has been developed through constitutional and judicial interpretation and can include different aspects of individual freedom depending on the circumstances.',
      },
      {
        heading: 'What does the right to life mean under Article 21?',
        content: 'Article 21 expressly protects life. Through judicial interpretation, the meaning of protection of life has been considered in connection with living with human dignity and other interests necessary for meaningful human existence. The precise scope of particular protections depends on constitutional interpretation and applicable law.',
      },
      {
        heading: 'What is procedure established by law?',
        content: 'Article 21 requires deprivation of life or personal liberty to take place according to a procedure established by law. Therefore, State action affecting these interests must have a legal basis and follow the applicable legal procedure.',
      },
      {
        heading: 'Is the right under Article 21 absolute?',
        content: 'Article 21 protects life and personal liberty, but its text itself recognises that deprivation may occur according to procedure established by law. The validity of a particular deprivation therefore depends on the applicable constitutional requirements, law and judicial interpretation.',
      },
      {
        heading: 'Article 21 and human dignity',
        content: 'Judicial interpretation has connected the protection of life under Article 21 with the concept of human dignity. As a result, the constitutional understanding of life is not limited to mere physical existence and may encompass conditions associated with a dignified life.',
      },
      {
        heading: 'Article 21 and privacy',
        content: 'The constitutional protection of privacy has been recognised as an aspect of the freedoms and protections guaranteed by the Constitution, including Article 21. The Supreme Court recognised privacy as a constitutionally protected right in its interpretation of the Constitution.',
      },
      {
        heading: 'Article 21 and personal freedom',
        content: 'Article 21 provides a constitutional safeguard when State action affects an individual\'s personal liberty. Other constitutional provisions, including Article 22 concerning arrest and detention in certain cases, can also become relevant depending on the circumstances.',
      },

      {
        heading: 'Why is Article 21 important?',
        content: 'Article 21 is important because it establishes constitutional protection for life and personal liberty for every person. Its broad wording and subsequent constitutional interpretation have made it relevant to many issues concerning individual dignity, liberty and State action.',
      },

      {
        heading: 'Article 21 in simple words',
        content: 'In simple terms, Article 21 means that every person has constitutional protection for life and personal liberty, and the State cannot deprive a person of these except according to a legally established procedure.',
      },

      ],
    mr: [
      {
          heading: 'भारतीय संविधानातील कलम 21 म्हणजे काय?',
          content: 'कलम 21 प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे घटनात्मक संरक्षण करते. कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करता येत नाही. हे कलम मूलभूत अधिकारांच्या भाग III मध्ये आहे.',
        },

        {
          heading: 'कलम 21 कोणत्या अधिकारांचे संरक्षण करते?',
          content: 'कलम 21 च्या मजकुरात जीवन आणि व्यक्तिगत स्वातंत्र्य या दोन महत्त्वाच्या बाबींचे स्पष्ट संरक्षण केले आहे. या कलमातील संरक्षण प्रत्येक व्यक्तीला लागू होते; ते केवळ भारतीय नागरिकांपुरते मर्यादित नाही.',
        },

        {
          heading: 'कलम 21 सर्व व्यक्तींना लागू होते का?',
          content: 'होय. कलम 21 मध्ये "No person" म्हणजे "कोणतीही व्यक्ती" असे शब्द वापरले आहेत. त्यामुळे हे संरक्षण प्रत्येक व्यक्तीला लागू होते. काही इतर मूलभूत अधिकारांच्या बाबतीत संविधानात विशेषतः नागरिकांचा उल्लेख करण्यात आला आहे.',
        },
      {
        heading: 'कलम 21 मधील व्यक्तिगत स्वातंत्र्य म्हणजे काय?',
        content: 'व्यक्तिगत स्वातंत्र्याचा व्यापक अर्थ व्यक्तीला कायदेशीर किंवा घटनात्मक आधाराशिवाय स्वातंत्र्यापासून वंचित न करण्याशी संबंधित आहे. व्यक्तिगत स्वातंत्र्याची नेमकी व्याप्ती न्यायालयीन व घटनात्मक व्याख्येतून विकसित झाली आहे आणि परिस्थितीनुसार त्यात व्यक्तिस्वातंत्र्याचे विविध पैलू समाविष्ट होऊ शकतात.',
      },
      {
        heading: 'कलम 21 मधील जीवनाचा अधिकार म्हणजे काय?',
        content: 'कलम 21 जीवनाचे संरक्षण करते. न्यायालयीन व्याख्येमध्ये जीवनाचा विचार मानवी प्रतिष्ठेसह केला गेला आहे. त्यामुळे जीवनाचा घटनात्मक अर्थ केवळ शारीरिक अस्तित्वापुरता मर्यादित न राहता मानवी जीवनाशी संबंधित इतर पैलूंशी जोडला जाऊ शकतो.',
      },
      {
        heading: 'कायद्याने स्थापित केलेली प्रक्रिया म्हणजे काय?',
        content: 'कलम 21 नुसार जीवन किंवा व्यक्तिगत स्वातंत्र्यापासून वंचित करण्याची कारवाई कायद्याने स्थापित केलेल्या प्रक्रियेनुसार झाली पाहिजे. म्हणजेच अशा राज्यकारवाईला कायदेशीर आधार असणे आणि लागू असलेल्या कायदेशीर प्रक्रियेचे पालन करणे आवश्यक आहे.',
      },
      {
        heading: 'कलम 21 मधील अधिकार पूर्णपणे अमर्यादित आहे का?',
        content: 'कलम 21 जीवन आणि व्यक्तिगत स्वातंत्र्याचे संरक्षण करते; मात्र त्याच मजकुरात कायद्याने स्थापित केलेल्या प्रक्रियेनुसार वंचित करण्याची शक्यता नमूद आहे. त्यामुळे एखाद्या विशिष्ट परिस्थितीत झालेली कारवाई संविधान, संबंधित कायदा आणि न्यायालयीन व्याख्येच्या चौकटीत तपासली जाते.',
      },
      {
        heading: 'कलम 21 आणि मानवी प्रतिष्ठा',
        content: 'न्यायालयीन व्याख्येमध्ये कलम 21 अंतर्गत जीवनाच्या संरक्षणाचा संबंध मानवी प्रतिष्ठेशी जोडला गेला आहे. त्यामुळे संविधानातील जीवनाचा अर्थ केवळ जिवंत राहणे एवढाच नसून मानवी प्रतिष्ठेशी संबंधित परिस्थितींचाही विचार त्यात केला जाऊ शकतो.',
      },
      {
        heading: 'कलम 21 आणि गोपनीयतेचा अधिकार',
        content: 'गोपनीयतेचे घटनात्मक संरक्षण हे संविधानातील स्वातंत्र्य आणि अधिकारांच्या चौकटीत मान्य करण्यात आले आहे आणि त्याचा संबंध कलम 21 शीही जोडला गेला आहे. सर्वोच्च न्यायालयाने गोपनीयतेला घटनात्मक संरक्षण असलेला अधिकार म्हणून मान्यता दिली आहे.',
      },
      {
        heading: 'कलम 21 आणि व्यक्तिगत स्वातंत्र्य',
        content: 'राज्याच्या कारवाईमुळे एखाद्या व्यक्तीच्या व्यक्तिगत स्वातंत्र्यावर परिणाम होत असल्यास कलम 21 महत्त्वाचे घटनात्मक संरक्षण देते. परिस्थितीनुसार अटक आणि स्थानबद्धतेशी संबंधित कलम 22 सारख्या इतर घटनात्मक तरतुदीही लागू होऊ शकतात.',
      },
      {
        heading: 'कलम 21 चे महत्त्व काय आहे?',
        content: 'कलम 21 महत्त्वाचे आहे कारण ते प्रत्येक व्यक्तीच्या जीवनाचे आणि व्यक्तिगत स्वातंत्र्याचे घटनात्मक संरक्षण निश्चित करते. त्यातील व्यापक शब्दरचना आणि त्यानंतर झालेल्या न्यायालयीन व्याख्येमुळे मानवी प्रतिष्ठा, स्वातंत्र्य आणि राज्याच्या कारवाईशी संबंधित अनेक विषयांमध्ये या कलमाला महत्त्व प्राप्त झाले आहे.',
      },
      {
        heading: 'सोप्या भाषेत कलम 21',
        content: 'सोप्या भाषेत सांगायचे झाल्यास, प्रत्येक व्यक्तीच्या जीवनाला आणि व्यक्तिगत स्वातंत्र्याला संविधानाचे संरक्षण आहे आणि कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय राज्य एखाद्या व्यक्तीला या अधिकारांपासून वंचित करू शकत नाही.',
      },
    ],
  },
  keywords: [
    'Article 21',
    'Article 21 Indian Constitution',
    'Right to Life',
    'Right to Personal Liberty',
    'Article 21 explained',
    'Article 21 in Marathi',
    'Right to Life and Personal Liberty',
    'Protection of Life and Personal Liberty',
    'कलम 21',
    'कलम 21 भारतीय संविधान',
    'जीवनाचा अधिकार',
    'व्यक्तिगत स्वातंत्र्य',
    'मूलभूत अधिकार',
    'Right to Privacy Article 21',
  ],
  relatedIds: ['19', '20', '21A', '22', '32'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '21A',
  articleNumber: 'Article 21A',
  title: {
    en: 'Right to Education',
    mr: 'शिक्षणाचा अधिकार',
  },
  categoryKey: 'fundamental-rights',
  officialText: {
    en: 'Right to education.—The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.',
    mr: 'शिक्षणाचा अधिकार.—राज्य, कायद्याद्वारे ठरवील अशा रीतीने, सहा ते चौदा वर्षे वयोगटातील सर्व बालकांना मोफत व सक्तीचे शिक्षण देईल.',
    verified: true,
  },
  simpleExplanation: {
    en: `Article 21A establishes the Right to Education as a Fundamental Right under Part III of the Indian Constitution. It requires the State to provide free and compulsory education to all children between the ages of six and fourteen years.

The provision was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002. The amendment was brought into effect from 1 April 2010. With this constitutional change, the right to elementary education for children in the specified age group became part of the Fundamental Rights framework.

The words "free" and "compulsory" are important in Article 21A. Free education means that a child within the specified age group should not be prevented from receiving the prescribed education because of fees or expenses that would prevent access to education. Compulsory education refers to the State\'s responsibility to ensure that children in the specified age group receive education in accordance with the legal framework.

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

म्हणून कलम 21A हे निश्चित वयोगटातील बालकांसाठी मोफत आणि सक्तीच्या शिक्षणाला घटनात्मक आधार देते आणि या अधिकाराची अंमलबजावणी कायदेशीर चौकटीत करण्याची जबाबदारी राज्यावर ठेवते.`,
  },
  verySimple: {
    en: 'Article 21A gives children between six and fourteen years of age a Fundamental Right to free and compulsory education. The State must provide this education in the manner determined by law.',
    mr: 'कलम 21A नुसार सहा ते चौदा वर्षे वयोगटातील बालकांना मोफत आणि सक्तीच्या शिक्षणाचा मूलभूत अधिकार आहे. हे शिक्षण कायद्याने ठरविलेल्या पद्धतीने देण्याची जबाबदारी राज्याची आहे.',
  },
  example: {
    en: `Suppose a child is eight years old and is within the age group covered by Article 21A. The constitutional provision requires the State to provide free and compulsory education to that child in accordance with the applicable legal framework.

For example, if a family is unable to afford the prescribed cost of elementary education, the constitutional framework is intended to ensure that a child in the six-to-fourteen age group is not denied the opportunity to receive education merely because of such financial circumstances.

Another important point is that Article 21A does not operate by prescribing every detail of the education system itself. The Constitution leaves the manner of implementation to be determined by law. The Right of Children to Free and Compulsory Education Act, 2009 provides the principal statutory framework for giving effect to this right.

Thus, Article 21A can be understood as the constitutional guarantee, while the legislation provides the detailed framework through which the guarantee is implemented.`,
    mr: `समजा एखादे मूल आठ वर्षांचे आहे आणि ते कलम 21A मध्ये नमूद केलेल्या वयोगटात येते. अशा मुलाला लागू असलेल्या कायदेशीर चौकटीप्रमाणे मोफत आणि सक्तीचे शिक्षण मिळावे, अशी घटनात्मक तरतूद कलम 21A करते.

उदाहरणार्थ, एखाद्या कुटुंबाला शिक्षणाचा आवश्यक खर्च परवडत नसेल, तर केवळ त्या आर्थिक परिस्थितीमुळे सहा ते चौदा वर्षे वयोगटातील मुलाला शिक्षणाच्या संधीपासून वंचित ठेवले जाऊ नये, हा या घटनात्मक अधिकाराचा मूलभूत उद्देश आहे.

कलम 21A शिक्षण व्यवस्थेतील प्रत्येक बाब स्वतः ठरवत नाही, हेही महत्त्वाचे आहे. शिक्षण कोणत्या पद्धतीने उपलब्ध करून द्यायचे हे कायद्याद्वारे ठरविण्याची तरतूद संविधानात आहे. या अधिकाराची अंमलबजावणी करण्यासाठी Right of Children to Free and Compulsory Education Act, 2009 हा महत्त्वाचा कायदेशीर आधार आहे.

म्हणून कलम 21A ला घटनात्मक हमी आणि संबंधित कायद्याला त्या हमीची अंमलबजावणी करणारी सविस्तर कायदेशीर चौकट असे समजता येते.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 21A of the Indian Constitution?',
        content: 'Article 21A is the constitutional provision dealing with the Right to Education. It requires the State to provide free and compulsory education to all children between six and fourteen years of age in the manner determined by law.',
      },
      {
        heading: 'What is the Right to Education under Article 21A?',
        content: 'Article 21A makes the right to free and compulsory education for children aged six to fourteen years a Fundamental Right. It places a constitutional responsibility on the State to provide this education through the legal framework.',
      },
      {
        heading: 'Who is covered under Article 21A?',
        content: 'Article 21A specifically covers children who are six to fourteen years of age. The constitutional text refers to all children within this age group.',
      },
      {
        heading: 'What does free education mean under Article 21A?',
        content: 'The term "free" relates to ensuring that a child covered by Article 21A can receive the prescribed education without financial barriers that would prevent access to elementary education. The detailed conditions and implementation are governed by the applicable law.',
      },
      {
        heading: 'What does compulsory education mean under Article 21A?',
        content: 'The term "compulsory" reflects the responsibility of the State to ensure that children in the specified age group receive education within the legal framework. Article 21A therefore places an obligation on the State rather than treating education merely as an optional service.',
      },
      {
        heading: 'When was Article 21A added to the Constitution?',
        content: 'Article 21A was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002. The provision came into effect on 1 April 2010. The amendment made education for children in the six-to-fourteen age group part of the Fundamental Rights framework.',
      },
      {
        heading: 'What is the Right of Children to Free and Compulsory Education Act, 2009?',
        content: 'The Right of Children to Free and Compulsory Education Act, 2009 is the principal legislation enacted to give effect to the constitutional requirement under Article 21A. The Act came into force on 1 April 2010.',
      },
      {
        heading: 'Article 21A and Article 45',
        content: 'The Eighty-sixth Amendment also changed Article 45. The revised Article 45 directs the State to endeavour to provide early childhood care and education for all children until they complete the age of six years. This complements the age group covered by Article 21A.',
      },
      {
        heading: 'Article 21A and Article 51A(k)',
        content: 'The Eighty-sixth Amendment added Article 51A(k), which concerns the fundamental duty of a parent or guardian to provide opportunities for education to their child or ward between six and fourteen years of age. This provision exists alongside the State obligation under Article 21A.',
      },
      {
        heading: 'Is Article 21A available to adults?',
        content: 'Article 21A specifically concerns children between six and fourteen years of age. It should therefore not be described as a constitutional Fundamental Right under Article 21A for every age group.',
      },
      {
        heading: 'Why is Article 21A important?',
        content: "Article 21A is important because it places free and compulsory education for children aged six to fourteen within the Fundamental Rights framework. It provides a constitutional foundation for the State's responsibility to ensure access to education for children in the specified age group.",
      },
      {
        heading: 'Article 21A in simple words',
        content: 'In simple terms, Article 21A means that every child between six and fourteen years of age has a constitutional right to free and compulsory education, with the manner of providing that education determined by law.',
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 21A म्हणजे काय?',
        content: 'कलम 21A हे शिक्षणाच्या अधिकाराशी संबंधित घटनात्मक तरतूद आहे. सहा ते चौदा वर्षे वयोगटातील सर्व बालकांना कायद्याने ठरविलेल्या पद्धतीने मोफत आणि सक्तीचे शिक्षण देण्याची जबाबदारी या कलमाद्वारे राज्यावर ठेवण्यात आली आहे.',
      },
      {
        heading: 'कलम 21A अंतर्गत कोणती मुले येतात?',
        content: 'कलम 21A विशेषतः सहा ते चौदा वर्षे वयोगटातील बालकांना लागू होते. संविधानातील या तरतुदीत या वयोगटातील सर्व बालकांचा उल्लेख आहे.',
      },
      {
        heading: 'कलम 21A मधील मोफत शिक्षण म्हणजे काय?',
        content: 'कलम 21A मधील "मोफत" या संकल्पनेचा संबंध बालकाला शिक्षण घेण्यापासून आर्थिक अडथळ्यांमुळे वंचित राहावे लागू नये याच्याशी आहे. याची सविस्तर अंमलबजावणी संबंधित कायदेशीर चौकटीद्वारे केली जाते.',
      },
      {
        heading: 'कलम 21A मधील सक्तीचे शिक्षण म्हणजे काय?',
        content: 'सक्तीचे शिक्षण म्हणजे निश्चित वयोगटातील बालकांना शिक्षण मिळेल याची खात्री करण्याची जबाबदारी राज्यावर असणे. त्यामुळे शिक्षण ही केवळ ऐच्छिक सरकारी सेवा न राहता घटनात्मक जबाबदारीच्या चौकटीत येते.',
      },
      {
        heading: 'कलम 21A संविधानात कधी समाविष्ट करण्यात आले?',
        content: 'कलम 21A हे संविधानाच्या 86व्या घटनादुरुस्ती अधिनियम, 2002 द्वारे समाविष्ट करण्यात आले. हे कलम 1 एप्रिल 2010 पासून प्रभावी झाले. त्यामुळे सहा ते चौदा वर्षे वयोगटातील बालकांचे शिक्षण मूलभूत अधिकारांच्या चौकटीत आले.',
      },
      {
        heading: 'Right of Children to Free and Compulsory Education Act, 2009 म्हणजे काय?',
        content: 'कलम 21A ची अंमलबजावणी करण्यासाठी संसदने Right of Children to Free and Compulsory Education Act, 2009 केला. हा कायदा 1 एप्रिल 2010 पासून लागू झाला आणि शिक्षणाच्या घटनात्मक अधिकारासाठी सविस्तर कायदेशीर चौकट उपलब्ध करून देतो.',
      },
      {
        heading: 'कलम 21A आणि कलम 45 यांचा संबंध',
        content: '86व्या घटनादुरुस्तीमुळे कलम 45 मध्येही बदल करण्यात आला. सुधारित कलम 45 नुसार सहा वर्षे पूर्ण होईपर्यंतच्या बालकांसाठी प्रारंभिक बालसंगोपन आणि शिक्षण उपलब्ध करून देण्यासाठी राज्याने प्रयत्न करावेत. त्यामुळे कलम 45 आणि कलम 21A वेगवेगळ्या वयोगटांशी संबंधित आहेत.',
      },
      {
        heading: 'कलम 21A आणि कलम 51A(k) यांचा संबंध',
        content: '86व्या घटनादुरुस्तीमुळे कलम 51A(k) समाविष्ट करण्यात आले. सहा ते चौदा वर्षे वयोगटातील मुलांना शिक्षणाच्या संधी उपलब्ध करून देणे हे पालक किंवा पालकत्व असलेल्या व्यक्तीच्या मूलभूत कर्तव्याशी ही तरतूद संबंधित आहे. हे कलम 21A मधील राज्याच्या जबाबदारीसोबत कार्य करते.',
      },
      {
        heading: 'कलम 21A प्रौढ व्यक्तींना लागू होते का?',
        content: 'नाही. कलम 21A विशेषतः सहा ते चौदा वर्षे वयोगटातील बालकांच्या शिक्षणाशी संबंधित आहे. त्यामुळे प्रत्येक वयोगटासाठी कलम 21A अंतर्गत समान मूलभूत अधिकार असल्याचे म्हणणे योग्य नाही.',
      },
      {
        heading: 'कलम 21A चे महत्त्व काय आहे?',
        content: 'कलम 21A महत्त्वाचे आहे कारण सहा ते चौदा वर्षे वयोगटातील बालकांसाठी मोफत आणि सक्तीचे शिक्षण मूलभूत अधिकारांच्या घटनात्मक चौकटीत आणले आहे. त्यामुळे या वयोगटातील बालकांना शिक्षण उपलब्ध करून देण्याची राज्याची जबाबदारी स्पष्ट होते.',
      },
      {
        heading: 'सोप्या भाषेत कलम 21A',
        content: 'सोप्या भाषेत सांगायचे झाल्यास, सहा ते चौदा वर्षे वयोगटातील प्रत्येक बालकाला मोफत आणि सक्तीच्या शिक्षणाचा घटनात्मक अधिकार आहे आणि हे शिक्षण कोणत्या पद्धतीने दिले जाईल हे कायद्याद्वारे ठरवले जाते.',
      },
    ],
  },
  keywords: [
    'Article 21A',
    'Article 21A Indian Constitution',
    'Right to Education',
    'Right to Education in India',
    'Article 21A explained',
    'Article 21A in Marathi',
    'Right to Education Fundamental Right',
    'free and compulsory education',
    '86th Constitutional Amendment',
    'RTE Act 2009',
    'कलम 21A',
    'कलम 21A भारतीय संविधान',
    'शिक्षणाचा अधिकार',
    'मोफत व सक्तीचे शिक्षण',
    'मूलभूत अधिकार शिक्षण',
  ],
  relatedIds: ['21', '45', '51A', '32'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

{
  id: '22',
  articleNumber: 'Article 22',
  title: {
    en: 'Protection against Arrest and Detention in Certain Cases',
    mr: 'काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून संरक्षण',
  },
  categoryKey: 'fundamental-rights',

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
    verified: true,
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

म्हणूनच कलम 22 हे व्यक्तीचे वैयक्तिक स्वातंत्र्य आणि अटक व प्रतिबंधात्मक नजरकैदेबाबत राज्याला असलेले कायदेशीर अधिकार यांच्यात घटनात्मक चौकट निर्माण करते. एखाद्या विशिष्ट प्रकरणात कोणते अधिकार आणि प्रक्रिया लागू होतात, हे संविधान, संबंधित कायदा आणि त्या प्रकरणातील तथ्यांवर अवलंबून असते.`,
  },

  verySimple: {
    en: `Article 22 protects a person against arbitrary arrest and detention. It generally requires the reasons for arrest to be communicated, provides the right to consult a lawyer, and requires an arrested person to be produced before a magistrate within twenty-four hours, subject to constitutional exceptions.

It also provides specific safeguards for persons detained under preventive detention laws.`,

    mr: `कलम 22 व्यक्तीला मनमानी अटक आणि नजरकैदेपासून घटनात्मक संरक्षण देते. सामान्य अटकेच्या वेळी अटकेची कारणे सांगणे, वकिलाचा सल्ला घेण्याची संधी देणे आणि साधारणपणे चोवीस तासांच्या आत दंडाधिकाऱ्यासमोर हजर करणे यांसारखी संरक्षणे या कलमात आहेत.

प्रतिबंधात्मक नजरकैदेअंतर्गत ताब्यात घेतलेल्या व्यक्तींसाठीही या कलमात स्वतंत्र घटनात्मक संरक्षणे दिली आहेत.`,
  },

  example: {
    en: `Suppose a person is arrested by the police in connection with an alleged offence. The person cannot simply be kept in custody indefinitely without being informed of the grounds of arrest. Subject to the applicable law, the person must be informed of the grounds of arrest and has the right to consult and be defended by a legal practitioner of their choice.

If the person is arrested and detained in custody, they must generally be produced before the nearest magistrate within twenty-four hours, excluding the necessary travel time. Continued custody beyond that period requires the authority of a magistrate.

Now consider a different situation involving preventive detention. In such a case, the ordinary protections under clauses (1) and (2) operate differently. However, the Constitution provides separate safeguards, including communication of the grounds of preventive detention and an opportunity to make a representation against the detention order.

These examples are intended to explain the basic constitutional framework of Article 22. The actual legality of an arrest or detention depends on the Constitution, the applicable law and the facts of the individual case.`,

    mr: `समजा एखाद्या व्यक्तीला कथित गुन्ह्याच्या संदर्भात पोलिसांनी अटक केली. त्या व्यक्तीला अटकेची कारणे न सांगता अनिश्चित काळासाठी ताब्यात ठेवता येत नाही. लागू कायद्याच्या अधीन राहून तिला अटकेची कारणे कळवली पाहिजेत आणि आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा व त्याच्यामार्फत बचाव करून घेण्याचा अधिकार असतो.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. या कालावधीत आवश्यक प्रवासाचा वेळ मोजला जात नाही. त्यानंतर ताब्यात ठेवण्यासाठी दंडाधिकाऱ्याचा अधिकार आवश्यक असतो.

आता प्रतिबंधात्मक नजरकैदेचे उदाहरण पाहूया. अशा प्रकरणात खंड (1) आणि (2) मधील सामान्य संरक्षणे त्याच पद्धतीने लागू होत नाहीत. मात्र संविधान अशा व्यक्तीसाठी स्वतंत्र संरक्षण देते. त्यामध्ये नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी देणे यांचा समावेश होतो.

ही उदाहरणे कलम 22 ची मूलभूत घटनात्मक रचना समजावण्यासाठी आहेत. एखादी विशिष्ट अटक किंवा नजरकैद कायदेशीर आहे का, हे संविधान, लागू कायदा आणि त्या प्रकरणातील तथ्यांवर अवलंबून असते.`,
  },

  seoSections: {
    en: [
      {
        heading: 'What is Article 22 of the Indian Constitution?',
        content: `Article 22 of the Indian Constitution provides constitutional protection against arrest and detention in certain cases. It is part of the Fundamental Rights contained in Part III of the Constitution.

The Article deals with important safeguards relating to arrest, including communication of the grounds of arrest, access to a legal practitioner and production before a magistrate within twenty-four hours, subject to the exceptions specified by the Constitution.

Article 22 also contains separate provisions relating to preventive detention.`,
      },

      {
        heading: 'What are the main protections under Article 22?',
        content: `Article 22 provides several important constitutional safeguards. A person who is arrested must generally be informed of the grounds of arrest as soon as may be and cannot be denied the right to consult and be defended by a legal practitioner of their choice.

A person arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours, excluding the necessary journey time. Continued detention beyond this period requires the authority of a magistrate.`,
      },

      {
        heading: 'What is the 24-hour rule under Article 22?',
        content: `Article 22(2) provides that a person who is arrested and detained in custody must be produced before the nearest magistrate within twenty-four hours of the arrest, excluding the time necessary for the journey from the place of arrest to the magistrate's court.

The person cannot ordinarily be detained beyond this period without the authority of a magistrate. The constitutional provision is therefore an important safeguard against prolonged detention without judicial oversight.`,
      },

      {
        heading: 'Does Article 22 give an arrested person the right to a lawyer?',
        content: `Yes. Article 22(1) provides that an arrested person shall not be denied the right to consult, and to be defended by, a legal practitioner of their choice.

This is an important constitutional safeguard for an arrested person. The exact manner in which legal representation operates in a particular case is also governed by the applicable procedural and legal framework.`,
      },

      {
        heading: 'What information must be given after arrest?',
        content: `Article 22(1) provides that a person who is arrested must be informed, as soon as may be, of the grounds for the arrest.

The purpose of this safeguard is to ensure that an arrested person is not kept in custody without being informed of the basis of the arrest, subject to the constitutional and statutory framework applicable to the case.`,
      },

      {
        heading: 'What is preventive detention?',
        content: `Preventive detention refers to detention intended to prevent certain future acts rather than to punish a person for an offence already committed.

Article 22 specifically recognises preventive detention and provides a separate constitutional framework for it. The ordinary protections under clauses (1) and (2) do not apply in the same manner to persons arrested or detained under a law providing for preventive detention.

At the same time, Article 22 contains specific safeguards relating to preventive detention, including communication of the grounds of detention and an opportunity to make a representation against the detention order.`,
      },

      {
        heading: 'Does Article 22 completely prohibit preventive detention?',
        content: `No. The Constitution does not completely prohibit preventive detention. Article 22 contains specific provisions dealing with preventive detention and lays down constitutional safeguards for persons detained under such laws.

The validity of a particular preventive detention order depends on the Constitution, the relevant preventive detention law and the facts and circumstances of the individual case.`,
      },

      {
        heading: 'What is the role of an Advisory Board under Article 22?',
        content: `Article 22(4) deals with the constitutional framework relating to detention under preventive detention laws and refers to an Advisory Board consisting of persons who are, have been, or are qualified to be appointed as Judges of a High Court.

The Constitution provides a framework concerning detention beyond three months, subject to the provisions of Article 22 and laws made by Parliament. The detailed operation of preventive detention depends on the applicable law.`,
      },

      {
        heading: 'What rights does a person have under preventive detention?',
        content: `Article 22(5) provides that when a person is detained under a preventive detention law, the authority making the detention order must, as soon as may be, communicate the grounds on which the order has been made and provide the earliest opportunity to make a representation against the order.

Article 22(6) also provides an exception concerning facts that the authority considers to be against the public interest to disclose.`,
      },

      {
        heading: 'Who is not covered by the ordinary protections in Article 22(1) and 22(2)?',
        content: `Article 22(3) states that clauses (1) and (2) do not apply to a person who is for the time being an enemy alien or to a person who is arrested or detained under a law providing for preventive detention.

These are constitutional exceptions expressly stated in Article 22.`,
      },

      {
        heading: 'Article 22 and personal liberty',
        content: `Article 22 is closely connected with the constitutional protection of personal liberty. Article 21 protects life and personal liberty, while Article 22 provides specific constitutional safeguards relating to arrest and detention.

Together, these provisions form an important part of the constitutional framework governing individual liberty and State action.`,
      },

      {
        heading: 'Article 22 and Article 21',
        content: `Article 21 provides that no person shall be deprived of life or personal liberty except according to procedure established by law. Article 22 specifically addresses safeguards relating to arrest and detention in certain cases.

Studying Articles 21 and 22 together helps explain the constitutional framework surrounding personal liberty, arrest, detention and procedural safeguards.`,
      },

      {
        heading: 'Article 22 and Article 20',
        content: `Article 20 provides specific protections in respect of conviction for offences, including protection against ex post facto criminal laws, double jeopardy and compelled self-incrimination.

Article 22, on the other hand, specifically deals with safeguards relating to arrest and detention. These provisions are separate but can be studied together when understanding constitutional protections available to persons involved in criminal proceedings.`,
      },

      {
        heading: 'Why is Article 22 important?',
        content: `Article 22 is important because arrest and detention directly affect personal liberty. The Constitution therefore provides specific safeguards concerning information about the grounds of arrest, access to legal representation and judicial oversight through production before a magistrate.

The Article also creates a separate constitutional framework for preventive detention, including safeguards relating to communication of grounds and representation against detention orders.`,
      },

      {
        heading: 'Common misunderstandings about Article 22',
        content: `One common misunderstanding is that Article 22 means every arrested person must be released within twenty-four hours. The Article instead requires an arrested person who is detained in custody to be produced before the nearest magistrate within twenty-four hours, excluding necessary travel time. Continued detention may be authorised by a magistrate.

Another misunderstanding is that Article 22 completely prohibits preventive detention. The Constitution recognises preventive detention but provides specific constitutional safeguards for it.

It is also important to distinguish the ordinary arrest safeguards under clauses (1) and (2) from the separate provisions dealing with preventive detention.`,
      },

      {
        heading: 'Why should students study Article 22?',
        content: `Article 22 is an important topic for students studying the Indian Constitution, Fundamental Rights, law and competitive examinations.

For UPSC, MPSC, Police Bharti and other competitive examinations, students should understand the relationship between Article 20, Article 21 and Article 22, along with the distinction between ordinary arrest and preventive detention.

Understanding the constitutional wording and its basic structure is more useful than memorising only a one-line definition.`,
      },

      {
        heading: 'Key points to remember about Article 22',
        content: `Article 22 provides constitutional safeguards against arrest and detention in certain cases.

An arrested person must generally be informed of the grounds of arrest.

An arrested person has the right to consult and be defended by a legal practitioner of their choice.

A person arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours, excluding necessary journey time.

Article 22 contains separate provisions relating to preventive detention.

A person detained under a preventive detention law must generally be informed of the grounds of detention and given the earliest opportunity to make a representation against the order.

Article 22(3) specifies constitutional exceptions to the protections in clauses (1) and (2).`,
      },
    ],

    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 22 म्हणजे काय?',
        content: `कलम 22 हे भारतीय संविधानातील काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून संरक्षण देणारे महत्त्वाचे मूलभूत अधिकारांचे कलम आहे. हे संविधानाच्या भाग III मधील मूलभूत अधिकारांचा भाग आहे.

या कलमात अटकेची कारणे कळवणे, कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा अधिकार आणि अटक केलेल्या व्यक्तीला चोवीस तासांच्या आत दंडाधिकाऱ्यासमोर हजर करण्यासंबंधी घटनात्मक संरक्षणे दिली आहेत.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र घटनात्मक तरतुदीही आहेत.`,
      },

      {
        heading: 'कलम 22 अंतर्गत कोणती प्रमुख संरक्षणे आहेत?',
        content: `कलम 22 मध्ये अटक केलेल्या व्यक्तीसाठी अनेक महत्त्वाची घटनात्मक संरक्षणे आहेत. अटकेची कारणे शक्य तितक्या लवकर कळवणे आणि आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा व त्याच्यामार्फत बचाव करून घेण्याचा अधिकार यांचा त्यात समावेश आहे.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. या कालावधीत आवश्यक प्रवासाचा वेळ मोजला जात नाही.`,
      },

      {
        heading: 'कलम 22 मधील 24 तासांचा नियम काय आहे?',
        content: `कलम 22(2) नुसार अटक करून ताब्यात ठेवलेल्या व्यक्तीला अटकेपासून चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. अटकेच्या ठिकाणाहून दंडाधिकाऱ्याच्या न्यायालयापर्यंत जाण्यास लागणारा आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही.

दंडाधिकाऱ्याच्या अधिकाराशिवाय व्यक्तीला या कालावधीपुढे ताब्यात ठेवता येत नाही. त्यामुळे दीर्घकाळ न्यायालयीन देखरेखीशिवाय ताब्यात ठेवण्यापासून संरक्षण देणारी ही महत्त्वाची घटनात्मक तरतूद आहे.`,
      },

      {
        heading: 'कलम 22 अंतर्गत अटक केलेल्या व्यक्तीला वकिलाचा अधिकार आहे का?',
        content: `होय. कलम 22(1) नुसार अटक केलेल्या व्यक्तीला आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत बचाव करून घेण्याचा अधिकार नाकारता येत नाही.

हे अटक केलेल्या व्यक्तीच्या घटनात्मक संरक्षणाचा महत्त्वाचा भाग आहे. एखाद्या विशिष्ट प्रकरणात कायदेशीर प्रतिनिधित्वाची प्रक्रिया संबंधित कायदे आणि प्रक्रियात्मक नियमांनुसार ठरते.`,
      },

      {
        heading: 'अटकेनंतर कोणती माहिती देणे आवश्यक आहे?',
        content: `कलम 22(1) नुसार अटक केलेल्या व्यक्तीला अटकेची कारणे शक्य तितक्या लवकर कळवली पाहिजेत.

या संरक्षणाचा उद्देश असा आहे की एखाद्या व्यक्तीला अटकेचा आधार न सांगता ताब्यात ठेवले जाऊ नये. मात्र विशिष्ट प्रकरणात लागू असलेली घटनात्मक आणि कायदेशीर चौकटही विचारात घेतली जाते.`,
      },

      {
        heading: 'प्रतिबंधात्मक नजरकैद म्हणजे काय?',
        content: `प्रतिबंधात्मक नजरकैद म्हणजे एखाद्या व्यक्तीने भविष्यात विशिष्ट प्रकारची कृती करू नये किंवा संभाव्य धोका टाळता यावा या उद्देशाने कायद्यानुसार व्यक्तीला ताब्यात ठेवण्याची व्यवस्था.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेचा स्वतंत्र घटनात्मक विचार केला आहे. खंड (1) आणि (2) मधील सामान्य संरक्षणे प्रतिबंधात्मक नजरकैदेतील व्यक्तींना त्याच पद्धतीने लागू होत नाहीत.

मात्र अशा व्यक्तींना नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी देणे यांसारखी स्वतंत्र घटनात्मक संरक्षणे कलम 22 मध्ये आहेत.`,
      },

      {
        heading: 'कलम 22 प्रतिबंधात्मक नजरकैद पूर्णपणे बंद करते का?',
        content: `नाही. भारतीय संविधान प्रतिबंधात्मक नजरकैदेला पूर्णपणे प्रतिबंध करत नाही. कलम 22 मध्ये अशा नजरकैदेबाबत स्वतंत्र तरतुदी आणि घटनात्मक संरक्षणे दिली आहेत.

एखाद्या विशिष्ट प्रतिबंधात्मक नजरकैदेचा आदेश कायदेशीर आहे का, हे संविधान, संबंधित प्रतिबंधात्मक नजरकैदेचा कायदा आणि त्या प्रकरणातील तथ्ये व परिस्थिती यावर अवलंबून असते.`,
      },

      {
        heading: 'कलम 22 मध्ये सल्लागार मंडळाची भूमिका काय आहे?',
        content: `कलम 22(4) मध्ये प्रतिबंधात्मक नजरकैदेच्या घटनात्मक चौकटीत सल्लागार मंडळाचा उल्लेख आहे. या मंडळात उच्च न्यायालयाचे न्यायाधीश म्हणून नियुक्त झालेले, पूर्वी न्यायाधीश राहिलेले किंवा उच्च न्यायालयाचे न्यायाधीश म्हणून नियुक्त होण्यास पात्र असलेले व्यक्ती असतात.

तीन महिन्यांपेक्षा जास्त काळ प्रतिबंधात्मक नजरकैद ठेवण्याच्या घटनात्मक चौकटीशी या तरतुदीचा संबंध आहे. त्याची सविस्तर अंमलबजावणी संबंधित कायद्यावर अवलंबून असते.`,
      },

      {
        heading: 'प्रतिबंधात्मक नजरकैदेत असलेल्या व्यक्तीला कोणते अधिकार आहेत?',
        content: `कलम 22(5) नुसार प्रतिबंधात्मक नजरकैदेच्या कायद्याअंतर्गत एखाद्या व्यक्तीला ताब्यात घेतल्यास, त्या व्यक्तीला नजरकैदेचा आदेश कोणत्या कारणांवर आधारित आहे, ती कारणे शक्य तितक्या लवकर कळवली पाहिजेत.

तसेच त्या व्यक्तीला त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची सर्वात लवकर संधी दिली पाहिजे.

कलम 22(6) मध्ये सार्वजनिक हिताच्या दृष्टीने उघड करणे योग्य नाही असे प्राधिकरणाला वाटणाऱ्या काही तथ्यांबाबत अपवाद दिला आहे.`,
      },

      {
        heading: 'कलम 22(1) आणि 22(2) मधील संरक्षणे कोणाला लागू होत नाहीत?',
        content: `कलम 22(3) नुसार खंड (1) आणि (2) मधील संरक्षणे त्या वेळी शत्रू परदेशी असलेल्या व्यक्तीला किंवा प्रतिबंधात्मक नजरकैदेची तरतूद करणाऱ्या कायद्याअंतर्गत अटक किंवा ताब्यात घेतलेल्या व्यक्तीला लागू होत नाहीत.

हे अपवाद संविधानाच्या कलम 22 मध्ये स्पष्टपणे नमूद केले आहेत.`,
      },

      {
        heading: 'कलम 22 आणि वैयक्तिक स्वातंत्र्य',
        content: `कलम 22 चा वैयक्तिक स्वातंत्र्याच्या घटनात्मक संरक्षणाशी जवळचा संबंध आहे. कलम 21 जीवन आणि वैयक्तिक स्वातंत्र्याचे संरक्षण करते, तर कलम 22 अटक आणि नजरकैदेबाबत विशिष्ट घटनात्मक संरक्षणे देते.

ही दोन्ही कलमे एकत्रितपणे व्यक्तीचे स्वातंत्र्य आणि राज्याच्या अटक व नजरकैदेच्या अधिकारांमधील घटनात्मक चौकट समजून घेण्यासाठी महत्त्वाची आहेत.`,
      },

      {
        heading: 'कलम 22 आणि कलम 21',
        content: `कलम 21 नुसार कायद्याने स्थापित केलेल्या प्रक्रियेशिवाय कोणत्याही व्यक्तीला तिच्या जीवनापासून किंवा वैयक्तिक स्वातंत्र्यापासून वंचित करता येत नाही. कलम 22 अटक आणि नजरकैदेच्या संदर्भात विशिष्ट संरक्षणे सांगते.

कलम 21 आणि कलम 22 यांचा एकत्र अभ्यास केल्यास वैयक्तिक स्वातंत्र्य, अटक, नजरकैद आणि प्रक्रियात्मक संरक्षणांची घटनात्मक चौकट अधिक स्पष्टपणे समजते.`,
      },

      {
        heading: 'कलम 22 आणि कलम 20',
        content: `कलम 20 मध्ये गुन्ह्यांसाठी दोषसिद्धीच्या संदर्भात विशिष्ट संरक्षणे दिली आहेत. त्यामध्ये पूर्वलक्षी दंडात्मक कायद्यापासून संरक्षण, एकाच गुन्ह्यासाठी पुन्हा शिक्षा होण्यापासून संरक्षण आणि स्वतःविरुद्ध साक्ष देण्यास सक्ती न करण्याचे संरक्षण यांचा समावेश होतो.

कलम 22 मात्र मुख्यतः अटक आणि नजरकैदेबाबतच्या घटनात्मक संरक्षणांशी संबंधित आहे. व्यक्तीच्या घटनात्मक संरक्षणांचा अभ्यास करताना कलम 20, 21 आणि 22 यांचा एकत्र अभ्यास उपयुक्त ठरतो.`,
      },

      {
        heading: 'कलम 22 महत्त्वाचे का आहे?',
        content: `अटक आणि नजरकैद यांचा व्यक्तीच्या वैयक्तिक स्वातंत्र्यावर थेट परिणाम होतो. त्यामुळे अटकेची कारणे कळवणे, कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा अधिकार आणि दंडाधिकाऱ्यासमोर हजर करण्याची प्रक्रिया यांसारखी घटनात्मक संरक्षणे महत्त्वाची आहेत.

कलम 22 प्रतिबंधात्मक नजरकैदेबाबतही स्वतंत्र घटनात्मक चौकट निर्माण करते. त्यामध्ये नजरकैदेची कारणे कळवणे आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची संधी यांचा समावेश आहे.`,
      },

      {
        heading: 'कलम 22 बाबत सामान्य गैरसमज',
        content: `एक सामान्य गैरसमज असा आहे की कलम 22 मुळे अटक केलेल्या प्रत्येक व्यक्तीला चोवीस तासांच्या आत सोडावे लागते. प्रत्यक्षात कलम 22(2) नुसार अटक करून ताब्यात ठेवलेल्या व्यक्तीला चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर करणे आवश्यक आहे. आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही. त्यानंतर दंडाधिकाऱ्याच्या अधिकाराने पुढील ताबा सुरू राहू शकतो.

दुसरा गैरसमज असा आहे की संविधान प्रतिबंधात्मक नजरकैदेला पूर्णपणे प्रतिबंध करते. प्रत्यक्षात कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र तरतुदी आहेत.

तसेच सामान्य अटकेसाठी असलेली कलम 22(1) आणि 22(2) मधील संरक्षणे आणि प्रतिबंधात्मक नजरकैदेबाबतच्या स्वतंत्र तरतुदी यांच्यातील फरक समजून घेणे महत्त्वाचे आहे.`,
      },

      {
        heading: 'विद्यार्थ्यांनी कलम 22 का अभ्यासावे?',
        content: `भारतीय संविधान, मूलभूत अधिकार, कायदा आणि स्पर्धा परीक्षांचा अभ्यास करणाऱ्या विद्यार्थ्यांसाठी कलम 22 हा महत्त्वाचा विषय आहे.

UPSC, MPSC, Police Bharti आणि इतर स्पर्धा परीक्षांसाठी कलम 20, 21 आणि 22 यांचा परस्पर संबंध समजून घेणे तसेच सामान्य अटक आणि प्रतिबंधात्मक नजरकैद यातील फरक समजणे उपयुक्त ठरते.

केवळ एका ओळीतील व्याख्या पाठ करण्याऐवजी घटनात्मक मजकूर, त्याचा साधा अर्थ आणि संबंधित कलमांशी असलेला संबंध समजून घेणे अधिक उपयुक्त आहे.`,
      },

      {
        heading: 'कलम 22 चे महत्त्वाचे मुद्दे',
        content: `कलम 22 काही प्रकरणांमध्ये अटक आणि नजरकैदेपासून घटनात्मक संरक्षण देते.

अटक केलेल्या व्यक्तीला सामान्यतः अटकेची कारणे कळवली पाहिजेत.

अटक केलेल्या व्यक्तीला आपल्या पसंतीच्या कायदेविषयक व्यवसायिकाचा सल्ला घेण्याचा आणि त्याच्यामार्फत बचाव करून घेण्याचा अधिकार आहे.

अटक करून ताब्यात ठेवलेल्या व्यक्तीला सामान्यतः चोवीस तासांच्या आत जवळच्या दंडाधिकाऱ्यासमोर हजर केले पाहिजे. आवश्यक प्रवासाचा वेळ या कालावधीत मोजला जात नाही.

कलम 22 मध्ये प्रतिबंधात्मक नजरकैदेबाबत स्वतंत्र तरतुदी आहेत.

प्रतिबंधात्मक नजरकैदेअंतर्गत ताब्यात घेतलेल्या व्यक्तीला सामान्यतः नजरकैदेची कारणे कळवली पाहिजेत आणि त्या आदेशाविरुद्ध प्रतिनिधित्व करण्याची सर्वात लवकर संधी दिली पाहिजे.

कलम 22(3) मध्ये खंड (1) आणि (2) मधील संरक्षणांना लागू असलेले घटनात्मक अपवाद नमूद केले आहेत.`,
      },
    ],
  },

  keywords: [
    'Article 22',
    'Article 22 of Indian Constitution',
    'Article 22 Indian Constitution',
    'Article 22 explained',
    'What is Article 22',
    'Article 22 Fundamental Rights',
    'Article 22 protection against arrest',
    'Protection against arrest and detention',
    'Article 22 24 hours',
    'Article 22 right to lawyer',
    'Article 22 preventive detention',
    'Preventive Detention India',
    'Article 22 and Article 21',
    'Article 22 and Article 20',
    'Article 22 in simple words',
    'arrest and detention rights India',
    '24 hours arrest rule India',
    'Article 22 Advisory Board',
    'कलम 22',
    'कलम 22 भारतीय संविधान',
    'कलम 22 मराठीत',
    'कलम 22 म्हणजे काय',
    'अटक आणि नजरकैदेपासून संरक्षण',
    'अटकेपासून संरक्षण',
    'नजरकैद',
    'प्रतिबंधात्मक नजरकैद',
    'अटकेनंतर 24 तास',
    'अटक केलेल्या व्यक्तीचे अधिकार',
    'वकिलाचा अधिकार',
  ],

  relatedIds: ['20', '21', '21A', '23'],

  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },

  lastVerified: '2026-10-01',
},

  {
  id: '32',
  articleNumber: 'Article 32',
  title: {
    en: 'Right to Constitutional Remedies',
    mr: 'घटनात्मक उपाययोजनांचा अधिकार',
  },
  categoryKey: 'fundamental-rights',
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
    verified: true,
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

त्यामुळे अनुच्छेद 32 हा मूलभूत अधिकार आणि त्यांच्या न्यायालयीन अंमलबजावणीमधील महत्त्वाचा घटनात्मक दुवा आहे.`,
  },
  verySimple: {
    en: `Article 32 gives a constitutional right to approach the Supreme Court for enforcement of Fundamental Rights guaranteed by Part III of the Constitution.

The Supreme Court can issue appropriate directions, orders and writs, including habeas corpus, mandamus, prohibition, quo warranto and certiorari.`,
    mr: `अनुच्छेद 32 मुळे Part III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालयात दाद मागण्याचा घटनात्मक अधिकार मिळतो.

सर्वोच्च न्यायालय योग्य निर्देश, आदेश आणि हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी यांसारख्या रिट्स जारी करू शकते.`,
  },
  example: {
    en: `Suppose a person's Fundamental Right guaranteed under Part III is violated through State action. The person may seek enforcement of that Fundamental Right through appropriate proceedings under Article 32 before the Supreme Court.

For example, where the circumstances involve unlawful detention and a Fundamental Right is affected, habeas corpus may become relevant. In another type of constitutional dispute, a different writ may be appropriate depending on the nature of the authority involved, the legal duty or jurisdictional issue, and the relief sought.

The important point is that Article 32 is specifically concerned with enforcement of Fundamental Rights guaranteed by Part III.`,
    mr: `समजा, राज्याच्या कृतीमुळे एखाद्या व्यक्तीच्या Part III अंतर्गत हमी दिलेल्या मूलभूत अधिकाराचा प्रश्न निर्माण झाला. अशा परिस्थितीत त्या अधिकाराच्या अंमलबजावणीसाठी व्यक्ती अनुच्छेद 32 अंतर्गत योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागू शकते.

उदाहरणार्थ, एखाद्या व्यक्तीला बेकायदेशीरपणे ताब्यात ठेवले असल्याचा आणि मूलभूत अधिकाराचा प्रश्न निर्माण झाल्यास परिस्थितीनुसार हेबियस कॉर्पस संबंधित ठरू शकतो. दुसऱ्या प्रकारच्या घटनात्मक प्रकरणात प्रकरणाच्या स्वरूपानुसार वेगळी रिट लागू होऊ शकते.

महत्त्वाचे म्हणजे अनुच्छेद 32 हा विशेषतः Part III मध्ये हमी दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीशी संबंधित आहे.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 32 of the Indian Constitution?',
        content: `Article 32 provides a constitutional remedy for enforcement of Fundamental Rights contained in Part III of the Indian Constitution. It guarantees the right to move the Supreme Court through appropriate proceedings for enforcement of these rights.`,
      },
      {
        heading: 'Why is Article 32 called the Right to Constitutional Remedies?',
        content: `Article 32 is called the Right to Constitutional Remedies because it provides a constitutional mechanism for seeking judicial enforcement of Fundamental Rights. It connects the rights guaranteed by Part III with a constitutional remedy.`,
      },
      {
        heading: 'What does Article 32(1) provide?',
        content: `Article 32(1) guarantees the right to move the Supreme Court by appropriate proceedings for enforcement of the rights conferred by Part III of the Constitution.`,
      },
      {
        heading: 'What powers does the Supreme Court have under Article 32?',
        content: `Under Article 32(2), the Supreme Court has the power to issue directions, orders and writs for enforcement of Fundamental Rights. The Constitution specifically mentions five writs.`,
      },
      {
        heading: 'What are the five writs under Article 32?',
        content: `The five writs specifically mentioned in Article 32(2) are habeas corpus, mandamus, prohibition, quo warranto and certiorari. Each has a different legal purpose and its applicability depends on the facts and circumstances of the case.`,
      },
      {
        heading: 'What is Habeas Corpus?',
        content: `Habeas corpus is a judicial remedy associated with unlawful detention. It allows the court to examine the legality of a person's detention and is closely connected with protection of personal liberty.`,
      },
      {
        heading: 'What is Mandamus?',
        content: `Mandamus is a writ generally associated with directing a public authority or public official to perform a legal duty when the legal requirements for issuing the writ are satisfied.`,
      },
      {
        heading: 'What is Prohibition?',
        content: `Prohibition is generally used to prevent a judicial or quasi-judicial authority from continuing proceedings beyond its lawful jurisdiction. Its applicability depends on the nature of the proceedings and the legal circumstances.`,
      },
      {
        heading: 'What is Certiorari?',
        content: `Certiorari is generally associated with judicial review of the legality of proceedings or orders of a lower judicial or quasi-judicial authority. The availability of the writ depends on the circumstances and applicable law.`,
      },
      {
        heading: 'What is Quo Warranto?',
        content: `Quo warranto concerns the legal authority of a person to hold a public office. It allows the court to examine whether the person has the required legal authority to occupy that office.`,
      },
      {
        heading: 'Article 32 and Fundamental Rights',
        content: `Article 32 specifically concerns enforcement of Fundamental Rights guaranteed by Part III. It therefore operates as an important constitutional remedy connected with the protection of those rights.`,
      },
      {
        heading: 'Article 32 and Article 226',
        content: `Article 32 deals specifically with the Supreme Court's constitutional remedy for enforcement of Fundamental Rights. Article 226 gives High Courts constitutional writ jurisdiction. The two provisions have distinct constitutional scopes.`,
      },
      {
        heading: 'Who can approach the Supreme Court under Article 32?',
        content: `A person seeking enforcement of a Fundamental Right guaranteed by Part III may approach the Supreme Court through appropriate proceedings under Article 32. The appropriate proceeding and remedy depend on the facts and legal circumstances.`,
      },
      {
        heading: 'Why is Article 32 important?',
        content: `Article 32 is important because it provides a constitutional route for judicial enforcement of Fundamental Rights. It connects the rights guaranteed by Part III with an institutional remedy through the Supreme Court.`,
      },
      {
        heading: 'Article 32 in simple words',
        content: `In simple words, Article 32 provides a constitutional remedy for enforcing Fundamental Rights. Where enforcement of a Part III Fundamental Right is required, the Supreme Court can be approached through appropriate proceedings and may issue an appropriate constitutional remedy.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 32 म्हणजे काय?',
        content: `अनुच्छेद 32 हा Part III मध्ये दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय उपलब्ध करून देतो. या अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागण्याचा अधिकार या अनुच्छेदात दिला आहे.`,
      },
      {
        heading: 'अनुच्छेद 32 ला घटनात्मक उपाययोजनांचा अधिकार का म्हणतात?',
        content: `अनुच्छेद 32 ला घटनात्मक उपाययोजनांचा अधिकार म्हटले जाते कारण मूलभूत अधिकारांच्या न्यायालयीन अंमलबजावणीसाठी संविधान स्वतः एक उपाय उपलब्ध करून देते. त्यामुळे Part III मधील अधिकार आणि त्यांची अंमलबजावणी यांच्यात घटनात्मक दुवा निर्माण होतो.`,
      },
      {
        heading: 'अनुच्छेद 32(1) मध्ये काय तरतूद आहे?',
        content: `अनुच्छेद 32(1) नुसार Part III मध्ये प्रदान केलेल्या अधिकारांच्या अंमलबजावणीसाठी योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागण्याचा अधिकार हमीपूर्वक दिला आहे.`,
      },
      {
        heading: 'अनुच्छेद 32 अंतर्गत सर्वोच्च न्यायालयाला कोणते अधिकार आहेत?',
        content: `अनुच्छेद 32(2) नुसार मूलभूत अधिकारांच्या अंमलबजावणीसाठी सर्वोच्च न्यायालय निर्देश, आदेश आणि रिट जारी करू शकते. संविधानात पाच रिट्सचा विशेष उल्लेख आहे.`,
      },
      {
        heading: 'अनुच्छेद 32 मध्ये नमूद केलेल्या पाच रिट्स कोणत्या?',
        content: `अनुच्छेद 32(2) मध्ये हेबियस कॉर्पस, मँडमस, प्रोहिबिशन, क्वो वॉरंटो आणि सर्टिओरारी या पाच रिट्सचा उल्लेख आहे. प्रत्येक रिटचा उद्देश वेगळा असून तिची लागू शक्यता प्रकरणाच्या तथ्यांवर आणि परिस्थितीवर अवलंबून असते.`,
      },
      {
        heading: 'हेबियस कॉर्पस म्हणजे काय?',
        content: `हेबियस कॉर्पस ही रिट प्रामुख्याने बेकायदेशीर ताबा किंवा अटकेच्या परिस्थितीशी संबंधित असते. न्यायालयाला व्यक्तीच्या ताब्याची कायदेशीरता तपासण्याची संधी या उपायामुळे मिळते.`,
      },
      {
        heading: 'मँडमस म्हणजे काय?',
        content: `मँडमस ही रिट सामान्यतः सार्वजनिक प्राधिकरण किंवा अधिकाऱ्याला त्याच्यावर असलेले कायदेशीर कर्तव्य पार पाडण्याबाबत निर्देश देण्याशी संबंधित असते, जेव्हा त्यासाठी आवश्यक कायदेशीर अटी पूर्ण होतात.`,
      },
      {
        heading: 'प्रोहिबिशन म्हणजे काय?',
        content: `प्रोहिबिशनचा संबंध न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाला त्याच्या कायदेशीर अधिकारक्षेत्राच्या पलीकडे कार्यवाही पुढे सुरू ठेवण्यापासून रोखण्याशी असतो. त्याची लागू शक्यता प्रकरणाच्या स्वरूपावर आणि कायदेशीर परिस्थितीवर अवलंबून असते.`,
      },
      {
        heading: 'सर्टिओरारी म्हणजे काय?',
        content: `सर्टिओरारीचा संबंध कनिष्ठ न्यायिक किंवा अर्ध-न्यायिक प्राधिकरणाच्या कार्यवाही किंवा आदेशाच्या कायदेशीरतेच्या न्यायालयीन परीक्षणाशी असतो. ही रिट लागू होईल की नाही हे प्रकरणातील परिस्थिती आणि लागू कायद्यावर अवलंबून असते.`,
      },
      {
        heading: 'क्वो वॉरंटो म्हणजे काय?',
        content: `क्वो वॉरंटोचा संबंध एखाद्या व्यक्तीला सार्वजनिक पद धारण करण्याचा कायदेशीर अधिकार आहे का याच्या परीक्षणाशी असतो. न्यायालय संबंधित व्यक्तीला ते पद धारण करण्याचा आवश्यक कायदेशीर अधिकार आहे का हे तपासू शकते.`,
      },
      {
        heading: 'अनुच्छेद 32 आणि मूलभूत अधिकार',
        content: `अनुच्छेद 32 हा Part III मध्ये हमी दिलेल्या मूलभूत अधिकारांच्या अंमलबजावणीशी थेट संबंधित आहे. त्यामुळे मूलभूत अधिकारांच्या संरक्षणासाठी हा एक महत्त्वाचा घटनात्मक उपाय आहे.`,
      },
      {
        heading: 'अनुच्छेद 32 आणि अनुच्छेद 226 मधील फरक',
        content: `अनुच्छेद 32 हा सर्वोच्च न्यायालयाकडून मूलभूत अधिकारांच्या अंमलबजावणीसाठी उपलब्ध असलेल्या घटनात्मक उपायाशी संबंधित आहे. अनुच्छेद 226 अंतर्गत उच्च न्यायालयांना घटनात्मक रिट अधिकारक्षेत्र आहे. दोन्ही तरतुदींचा घटनात्मक आवाका वेगळा आहे.`,
      },
      {
        heading: 'अनुच्छेद 32 अंतर्गत सर्वोच्च न्यायालयात कोण जाऊ शकते?',
        content: `Part III मध्ये हमी दिलेल्या मूलभूत अधिकाराच्या अंमलबजावणीसाठी संबंधित व्यक्ती अनुच्छेद 32 अंतर्गत योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागू शकते. कोणती प्रक्रिया किंवा उपाय योग्य आहे हे प्रकरणाच्या तथ्यांवर आणि लागू कायद्यावर अवलंबून असते.`,
      },
      {
        heading: 'अनुच्छेद 32 चे महत्त्व काय आहे?',
        content: `अनुच्छेद 32 महत्त्वाचा आहे कारण तो मूलभूत अधिकारांच्या न्यायालयीन अंमलबजावणीसाठी घटनात्मक मार्ग उपलब्ध करून देतो. Part III मधील अधिकारांना सर्वोच्च न्यायालयातील घटनात्मक उपायाशी जोडणारी ही महत्त्वाची तरतूद आहे.`,
      },
      {
        heading: 'सोप्या भाषेत अनुच्छेद 32',
        content: `सोप्या भाषेत सांगायचे झाल्यास, अनुच्छेद 32 मूलभूत अधिकारांच्या अंमलबजावणीसाठी घटनात्मक उपाय देतो. Part III मधील मूलभूत अधिकाराची अंमलबजावणी आवश्यक असल्यास योग्य कार्यवाहीद्वारे सर्वोच्च न्यायालयात दाद मागता येते.`,
      },
    ],
  },
  keywords: [
    'Article 32',
    'Article 32 Indian Constitution',
    'Right to Constitutional Remedies',
    'Article 32 explained',
    'Article 32 writs',
    'Article 32 Supreme Court',
    'Fundamental Rights remedies',
    'Habeas Corpus',
    'Mandamus',
    'Prohibition',
    'Quo Warranto',
    'Certiorari',
    'Article 32 in Marathi',
    'कलम 32',
    'कलम 32 भारतीय संविधान',
    'घटनात्मक उपाययोजनांचा अधिकार',
    'मूलभूत अधिकारांचे उपाय',
    'सर्वोच्च न्यायालय रिट',
  ],
  relatedIds: ['21', '21A', '226', '14', '19'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '5',
  articleNumber: 'Article 5',
  title: {
    en: 'Citizenship at the Commencement of the Constitution',
    mr: 'संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व',
  },
  categoryKey: 'citizenship',
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
    verified: true,
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

त्यामुळे अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी भारताचे नागरिकत्व कोणत्या घटनात्मक निकषांवर ठरवले गेले हे समजून घेण्यासाठी महत्त्वाचा आहे.`,
  },
  verySimple: {
    en: `Article 5 explains who would be considered a citizen of India when the Constitution commenced.

A person had to have domicile in India and satisfy at least one of these conditions: birth in India, birth of either parent in India, or ordinary residence in India for at least five years immediately before the commencement of the Constitution.`,
    mr: `अनुच्छेद 5 संविधानाच्या प्रारंभाच्या वेळी कोणाला भारताचा नागरिक मानले जाईल हे स्पष्ट करतो.

व्यक्तीचा भारतात अधिवास असणे आणि जन्म, आई-वडिलांचा जन्म किंवा संविधानाच्या प्रारंभापूर्वी किमान पाच वर्षांचा सामान्य रहिवास यापैकी कोणतीही एक अट पूर्ण असणे आवश्यक होते.`,
  },
  example: {
    en: `Suppose a person was domiciled in India when the Constitution commenced. If that person was born in India, the birth condition under Article 5 could be satisfied.

Similarly, if a person had domicile in India and either of the person's parents had been born in India, the parentage condition could apply.

Another person could qualify through the residence condition if the person had domicile in India and had been ordinarily resident in India for at least five years immediately before the commencement of the Constitution.

These examples illustrate that the Constitution provided alternative constitutional conditions in Article 5. The provision must be understood in its historical context and together with the other citizenship provisions in Part II.`,
    mr: `समजा, संविधानाच्या प्रारंभाच्या वेळी एखाद्या व्यक्तीचा भारतात अधिवास होता आणि तिचा जन्म भारताच्या राज्यक्षेत्रात झाला होता. अशा परिस्थितीत अनुच्छेद 5 मधील जन्माशी संबंधित अट लागू होऊ शकते.

दुसऱ्या उदाहरणात, व्यक्तीचा भारतात अधिवास असेल आणि तिच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारतात झाला असेल, तर पालकाच्या जन्माशी संबंधित अट लागू होऊ शकते.

तिसऱ्या उदाहरणात, व्यक्तीचा भारतात अधिवास असेल आणि संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे ती भारतात सर्वसाधारणपणे वास्तव्यास असेल, तर रहिवासाशी संबंधित अट लागू होऊ शकते.

या उदाहरणांवरून स्पष्ट होते की अनुच्छेद 5 मध्ये पर्यायी घटनात्मक अटी देण्यात आल्या होत्या. हा अनुच्छेद त्याच्या ऐतिहासिक संदर्भात आणि नागरिकत्वावरील भाग II मधील इतर तरतुदींसोबत समजून घेणे आवश्यक आहे.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 5 of the Indian Constitution?',
        content: `Article 5 deals with citizenship at the commencement of the Constitution. It provides the constitutional conditions under which a person would be recognised as a citizen of India when the Constitution commenced.`,
      },
      {
        heading: 'Which Part of the Constitution contains Article 5?',
        content: `Article 5 is contained in Part II of the Indian Constitution, which deals with Citizenship. Articles 5 to 11 form the constitutional provisions in this Part concerning citizenship.`,
      },
      {
        heading: 'What is the main purpose of Article 5?',
        content: `The main purpose of Article 5 is to establish the initial constitutional criteria for citizenship at the commencement of the Constitution. It considers domicile in India together with birth, parentage or ordinary residence.`,
      },
      {
        heading: 'What is domicile under Article 5?',
        content: `Article 5 requires the person to have domicile in the territory of India. In the context of Article 5, domicile is a significant constitutional requirement and is considered together with one of the alternative conditions specified in clauses (a), (b) or (c).`,
      },
      {
        heading: 'What are the conditions under Article 5?',
        content: `Article 5 provides three alternative conditions in addition to domicile in India. The person could qualify if they were born in India, if either parent was born in India, or if they had been ordinarily resident in India for at least five years immediately before the commencement of the Constitution.`,
      },
      {
        heading: 'Does Article 5 require all three conditions?',
        content: `No. The conditions in clauses (a), (b) and (c) are alternatives. The constitutional text uses "or" between them. Therefore, satisfying one of the specified conditions along with the domicile requirement was sufficient under Article 5.`,
      },
      {
        heading: 'Article 5 and birth in India',
        content: `Article 5 recognises birth in the territory of India as one of the alternative conditions for citizenship at the commencement of the Constitution, provided the person also had domicile in the territory of India.`,
      },
      {
        heading: 'Article 5 and parents born in India',
        content: `Under Article 5, a person could qualify if either of their parents was born in the territory of India, together with the requirement of domicile in India at the commencement of the Constitution.`,
      },
      {
        heading: 'Article 5 and five years residence',
        content: `Article 5 also provides an alternative based on ordinary residence. A person with domicile in India could qualify if they had been ordinarily resident in the territory of India for not less than five years immediately preceding the commencement of the Constitution.`,
      },
      {
        heading: 'Article 5 and Articles 6 to 8',
        content: `Article 5 should be read together with Articles 6, 7 and 8. These provisions address different historical citizenship situations, including certain persons who migrated between India and Pakistan and certain persons of Indian origin residing outside India.`,
      },
      {
        heading: 'Is Article 5 the current citizenship law?',
        content: `Article 5 is a constitutional provision concerning citizenship at the commencement of the Constitution. It should not be treated as the complete present-day procedure for acquiring Indian citizenship. Article 11 specifically recognises Parliament's power to make laws concerning acquisition and termination of citizenship and related matters.`,
      },
      {
        heading: 'Article 5 and Parliament',
        content: `Article 11 provides that Parliament has the power to make provisions relating to acquisition and termination of citizenship and other citizenship matters. Therefore, Article 5 forms part of the initial constitutional citizenship framework, while later citizenship law is also governed by legislation made by Parliament.`,
      },
      {
        heading: 'Why is Article 5 important?',
        content: `Article 5 is important because it establishes the constitutional starting point for citizenship at the commencement of the Constitution. It helps explain how the Constitution initially identified Indian citizens using domicile, birth, parentage and residence criteria.`,
      },
      {
        heading: 'Article 5 in simple words',
        content: `In simple words, Article 5 explains who would be recognised as an Indian citizen when the Constitution commenced. A person needed domicile in India and had to satisfy one of the specified conditions relating to birth, parentage or residence.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 5 म्हणजे काय?',
        content: `अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी नागरिकत्वाशी संबंधित आहे. संविधान लागू होताना कोणत्या घटनात्मक अटी पूर्ण करणाऱ्या व्यक्तीला भारताचा नागरिक मानले जाईल हे या अनुच्छेदातून स्पष्ट होते.`,
      },
      {
        heading: 'अनुच्छेद 5 संविधानाच्या कोणत्या भागात आहे?',
        content: `अनुच्छेद 5 हा भारतीय संविधानाच्या भाग II मध्ये आहे. भाग II मध्ये नागरिकत्वाशी संबंधित अनुच्छेद 5 ते 11 या तरतुदी आहेत.`,
      },
      {
        heading: 'अनुच्छेद 5 चा मुख्य उद्देश काय आहे?',
        content: `अनुच्छेद 5 चा मुख्य उद्देश संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व ठरवण्यासाठी घटनात्मक निकष निश्चित करणे हा आहे. यात भारतातील अधिवासासोबत जन्म, पालकांचा जन्म किंवा सर्वसाधारण रहिवास यांचा विचार केला आहे.`,
      },
      {
        heading: 'अनुच्छेद 5 मधील अधिवास म्हणजे काय?',
        content: `अनुच्छेद 5 नुसार संबंधित व्यक्तीचा भारताच्या राज्यक्षेत्रात अधिवास असणे आवश्यक आहे. या अधिवासाच्या अटीसोबत खंड (क), (ख) किंवा (ग) मधील नमूद केलेल्या पर्यायी अटींपैकी एक अट लागू होते.`,
      },
      {
        heading: 'अनुच्छेद 5 अंतर्गत कोणत्या अटी आहेत?',
        content: `अनुच्छेद 5 मध्ये भारतातील अधिवासासोबत तीन पर्यायी अटी दिल्या आहेत. व्यक्तीचा भारतात जन्म झालेला असणे, तिच्या आई-वडिलांपैकी कोणत्याही एकाचा भारतात जन्म झालेला असणे किंवा संविधानाच्या प्रारंभापूर्वी किमान पाच वर्षे भारतात सर्वसाधारणपणे वास्तव्यास असणे यापैकी कोणतीही एक अट लागू होऊ शकते.`,
      },
      {
        heading: 'अनुच्छेद 5 मधील सर्व अटी पूर्ण करणे आवश्यक आहे का?',
        content: `नाही. खंड (क), (ख) आणि (ग) मधील अटी पर्यायी आहेत. संविधानातील मजकुरात या अटींमध्ये "or" म्हणजे "किंवा" वापरले आहे. त्यामुळे अधिवासाची अट पूर्ण करून नमूद केलेल्या पर्यायांपैकी एक अट पूर्ण होणे पुरेसे होते.`,
      },
      {
        heading: 'अनुच्छेद 5 आणि भारतात जन्म',
        content: `संविधानाच्या प्रारंभाच्या वेळी भारताच्या राज्यक्षेत्रात जन्म झालेला असणे ही अनुच्छेद 5 मधील नागरिकत्वासाठी दिलेल्या पर्यायी अटींपैकी एक आहे. यासोबत भारतातील अधिवासाची अट देखील लागू होती.`,
      },
      {
        heading: 'अनुच्छेद 5 आणि आई-वडिलांचा भारतातील जन्म',
        content: `अनुच्छेद 5 नुसार व्यक्तीच्या आई-वडिलांपैकी कोणत्याही एकाचा जन्म भारताच्या राज्यक्षेत्रात झालेला असल्यास, भारतातील अधिवासाच्या अटीसोबत ही नागरिकत्वासाठीची पर्यायी अट लागू होऊ शकते.`,
      },
      {
        heading: 'अनुच्छेद 5 आणि पाच वर्षांचा रहिवास',
        content: `अनुच्छेद 5 मध्ये सर्वसाधारण रहिवासावर आधारित पर्याय देखील आहे. संविधानाच्या प्रारंभाच्या तत्पूर्वी किमान पाच वर्षे भारताच्या राज्यक्षेत्रात सर्वसाधारणपणे वास्तव्यास असलेली आणि भारतात अधिवास असलेली व्यक्ती या अटीअंतर्गत पात्र ठरू शकत होती.`,
      },
      {
        heading: 'अनुच्छेद 5 आणि अनुच्छेद 6 ते 8',
        content: `अनुच्छेद 5 हा अनुच्छेद 6, 7 आणि 8 सोबत वाचणे महत्त्वाचे आहे. या तरतुदींमध्ये भारत-पाकिस्तान स्थलांतराशी संबंधित काही व्यक्ती आणि भारताबाहेर राहणाऱ्या भारतीय वंशाच्या काही व्यक्तींच्या नागरिकत्वाबाबत स्वतंत्र घटनात्मक तरतुदी आहेत.`,
      },
      {
        heading: 'अनुच्छेद 5 हा आजचा नागरिकत्वाचा संपूर्ण कायदा आहे का?',
        content: `अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळी नागरिकत्वाशी संबंधित घटनात्मक तरतूद आहे. आज भारताचे नागरिकत्व मिळवण्याची संपूर्ण प्रक्रिया फक्त अनुच्छेद 5 वर आधारित आहे असे म्हणणे योग्य नाही. अनुच्छेद 11 संसदेला नागरिकत्वाच्या संपादन आणि समाप्तीबाबत कायदे करण्याचा अधिकार देतो.`,
      },
      {
        heading: 'अनुच्छेद 5 आणि संसद',
        content: `अनुच्छेद 11 नुसार नागरिकत्वाचे संपादन, समाप्ती आणि संबंधित इतर बाबींवर संसद कायदे करू शकते. त्यामुळे अनुच्छेद 5 हा संविधानाच्या प्रारंभाच्या वेळच्या नागरिकत्वाच्या घटनात्मक चौकटीचा भाग आहे, तर पुढील नागरिकत्वविषयक कायदे संसदेने केलेल्या कायद्यांद्वारे नियंत्रित होतात.`,
      },
      {
        heading: 'अनुच्छेद 5 चे महत्त्व काय आहे?',
        content: `अनुच्छेद 5 महत्त्वाचा आहे कारण तो संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व निश्चित करण्यासाठीची घटनात्मक सुरुवात स्पष्ट करतो. अधिवास, जन्म, पालकांचा जन्म आणि रहिवास या निकषांचा नागरिकत्वाशी असलेला संबंध समजून घेण्यासाठी हा अनुच्छेद महत्त्वाचा आहे.`,
      },
      {
        heading: 'सोप्या भाषेत अनुच्छेद 5',
        content: `सोप्या भाषेत सांगायचे झाल्यास, संविधान लागू होताना कोणाला भारताचा नागरिक मानले जाईल हे अनुच्छेद 5 स्पष्ट करतो. व्यक्तीचा भारतात अधिवास असणे आणि जन्म, पालकांचा जन्म किंवा रहिवास यापैकी संविधानात नमूद केलेली एक अट पूर्ण असणे आवश्यक होते.`,
      },
    ],
  },
  keywords: [
    'Article 5',
    'Article 5 Indian Constitution',
    'Article 5 explained',
    'Citizenship at commencement of Constitution',
    'Article 5 citizenship',
    'Indian citizenship Article 5',
    'Article 5 in Marathi',
    'Part II Citizenship',
    'Constitutional citizenship',
    'Domicile Article 5',
    'कलम 5',
    'कलम 5 भारतीय संविधान',
    'संविधानाच्या प्रारंभाच्या वेळी नागरिकत्व',
    'भारतीय नागरिकत्व',
    'नागरिकत्व कलम 5',
    'भाग 2 नागरिकत्व',
    'अधिवास आणि नागरिकत्व',
  ],
  relatedIds: ['6', '7', '8', '9', '10', '11'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '79',
  articleNumber: 'Article 79',
  title: {
    en: 'Constitution of Parliament',
    mr: 'संसदेची रचना',
  },
  categoryKey: 'parliament',
  officialText: {
    en: `Constitution of Parliament.—There shall be a Parliament for the Union which shall consist of the President and two Houses to be known respectively as the Council of States and the House of the People.`,
    mr: `संसदेची रचना.—संघासाठी एक संसद असेल आणि ती राष्ट्रपती आणि अनुक्रमे राज्यसभा आणि लोकसभा म्हणून ओळखल्या जाणाऱ्या दोन सभागृहांची मिळून बनलेली असेल.`,
    verified: true,
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

त्यामुळे भारताच्या संसदेची मूलभूत घटनात्मक रचना समजून घेण्यासाठी अनुच्छेद 79 हा महत्त्वाचा प्रारंभिक अनुच्छेद आहे.`,
  },
  verySimple: {
    en: `Article 79 defines the constitutional structure of the Parliament of India.

It provides that the Parliament of the Union consists of the President, the Council of States (Rajya Sabha) and the House of the People (Lok Sabha).`,
    mr: `अनुच्छेद 79 भारताच्या संसदेची मूलभूत घटनात्मक रचना स्पष्ट करतो.

संघाची संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या तीन घटनात्मक घटकांनी बनलेली आहे.`,
  },
  example: {
    en: `Suppose we want to understand what constitutes the Parliament of India at the constitutional level. Article 79 provides the starting point: Parliament consists of the President and two Houses.

The first House is the Council of States, commonly called the Rajya Sabha. The second is the House of the People, commonly called the Lok Sabha.

For example, when studying how the Rajya Sabha is constituted, Article 80 provides the relevant constitutional details. When studying the composition of the Lok Sabha, Article 81 provides the relevant provision.

Therefore, Article 79 gives the basic constitutional structure, while subsequent provisions provide more detailed rules concerning the two Houses and parliamentary functioning.`,
    mr: `भारताची संसद घटनात्मकदृष्ट्या कशापासून बनते हे समजून घ्यायचे असल्यास अनुच्छेद 79 हा सुरुवातीचा आधार देतो. या अनुच्छेदानुसार संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली आहे.

पहिले सभागृह म्हणजे Council of States, ज्याला सामान्यतः राज्यसभा म्हटले जाते. दुसरे सभागृह म्हणजे House of the People, ज्याला सामान्यतः लोकसभा म्हटले जाते.

उदाहरणार्थ, राज्यसभेची रचना समजून घेण्यासाठी अनुच्छेद 80 पाहावा लागतो. त्याचप्रमाणे लोकसभेची रचना समजून घेण्यासाठी अनुच्छेद 81 महत्त्वाचा आहे.

म्हणून अनुच्छेद 79 संसदेची मूलभूत घटनात्मक रचना सांगतो, तर पुढील अनुच्छेद दोन्ही सभागृहांची रचना आणि संसदेच्या कामकाजाशी संबंधित अधिक सविस्तर तरतुदी देतात.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 79 of the Indian Constitution?',
        content: `Article 79 defines the constitutional structure of the Parliament of India. It provides that the Parliament for the Union consists of the President and two Houses known as the Council of States and the House of the People.`,
      },
      {
        heading: 'What does Article 79 say?',
        content: `Article 79 states that there shall be a Parliament for the Union consisting of the President and two Houses. These Houses are constitutionally known as the Council of States and the House of the People.`,
      },
      {
        heading: 'Which Part contains Article 79?',
        content: `Article 79 is contained in Part V of the Constitution, which deals with the Union. It appears in Chapter II, which deals with Parliament.`,
      },
      {
        heading: 'What are the three components of Parliament?',
        content: `Under Article 79, Parliament consists of the President, the Council of States and the House of the People. The Council of States is commonly known as the Rajya Sabha and the House of the People as the Lok Sabha.`,
      },
      {
        heading: 'Is the President part of Parliament under Article 79?',
        content: `Yes. Article 79 expressly includes the President as a component of the Parliament of the Union. This constitutional inclusion does not mean that the President is a member of either House.`,
      },
      {
        heading: 'What is the Council of States?',
        content: `The Council of States is the constitutional name of the Rajya Sabha. Its detailed composition is provided under Article 80 of the Constitution.`,
      },
      {
        heading: 'What is the House of the People?',
        content: `The House of the People is the constitutional name of the Lok Sabha. Its composition is dealt with under Article 81 of the Constitution.`,
      },
      {
        heading: 'Article 79 and Rajya Sabha',
        content: `Article 79 identifies the Council of States as one of the two Houses of Parliament. Article 80 provides the detailed constitutional provisions concerning its composition.`,
      },
      {
        heading: 'Article 79 and Lok Sabha',
        content: `Article 79 identifies the House of the People as the second House of Parliament. Article 81 provides the detailed constitutional provision concerning its composition.`,
      },
      {
        heading: 'Article 79 and Article 80',
        content: `Article 79 establishes the basic constitutional structure of Parliament, while Article 80 deals with the composition of the Council of States. Reading these provisions together helps explain the constitutional structure of Parliament.`,
      },
      {
        heading: 'Article 79 and Article 81',
        content: `Article 79 establishes Parliament as consisting of the President and two Houses. Article 81 deals specifically with the composition of the House of the People.`,
      },
      {
        heading: 'Does Article 79 explain how Parliament functions?',
        content: `Article 79 primarily establishes the constitutional composition of Parliament. Detailed provisions concerning membership, qualifications, privileges, legislative procedure and other parliamentary matters are contained in subsequent constitutional provisions and laws.`,
      },
      {
        heading: 'Why is Article 79 important?',
        content: `Article 79 is important because it provides the constitutional starting point for understanding the Parliament of India. It identifies the President, Rajya Sabha and Lok Sabha as the components of the Union Parliament.`,
      },
      {
        heading: 'Article 79 in simple words',
        content: `In simple words, Article 79 tells us what constitutes the Parliament of India. The Parliament of the Union consists of the President, Rajya Sabha and Lok Sabha.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 79 म्हणजे काय?',
        content: `अनुच्छेद 79 भारताच्या संसदेची मूलभूत घटनात्मक रचना स्पष्ट करतो. संघासाठी संसद असेल आणि ती राष्ट्रपती, राज्यसभा आणि लोकसभा या घटकांनी बनलेली असेल, असे या अनुच्छेदात सांगितले आहे.`,
      },
      {
        heading: 'अनुच्छेद 79 मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद 79 नुसार संघासाठी एक संसद असेल. या संसदेमध्ये राष्ट्रपती आणि अनुक्रमे राज्यसभा व लोकसभा म्हणून ओळखली जाणारी दोन सभागृहे असतील.`,
      },
      {
        heading: 'अनुच्छेद 79 संविधानाच्या कोणत्या भागात आहे?',
        content: `अनुच्छेद 79 हा संविधानाच्या भाग V मध्ये आहे. भाग V संघाशी संबंधित आहे आणि त्याच्या अध्याय II मध्ये संसदेसंबंधी तरतुदी आहेत.`,
      },
      {
        heading: 'संसदेचे तीन घटनात्मक घटक कोणते?',
        content: `अनुच्छेद 79 नुसार संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या तीन घटनात्मक घटकांनी बनलेली आहे. राज्यसभेला Council of States आणि लोकसभेला House of the People असे संविधानात म्हटले आहे.`,
      },
      {
        heading: 'अनुच्छेद 79 नुसार राष्ट्रपती संसदेत समाविष्ट आहेत का?',
        content: `होय. अनुच्छेद 79 मध्ये राष्ट्रपतींचा संसदेच्या घटक म्हणून स्पष्टपणे समावेश केला आहे. मात्र, याचा अर्थ राष्ट्रपती हे राज्यसभा किंवा लोकसभेचे सदस्य आहेत असा होत नाही.`,
      },
      {
        heading: 'राज्यसभा म्हणजे काय?',
        content: `राज्यसभा हे Council of States चे सामान्यतः वापरले जाणारे नाव आहे. राज्यसभेच्या रचनेबाबत सविस्तर घटनात्मक तरतूद अनुच्छेद 80 मध्ये आहे.`,
      },
      {
        heading: 'लोकसभा म्हणजे काय?',
        content: `लोकसभा हे House of the People चे सामान्यतः वापरले जाणारे नाव आहे. लोकसभेच्या रचनेबाबत अनुच्छेद 81 मध्ये घटनात्मक तरतूद आहे.`,
      },
      {
        heading: 'अनुच्छेद 79 आणि राज्यसभा',
        content: `अनुच्छेद 79 मध्ये राज्यसभेला संसदेच्या दोन सभागृहांपैकी एक म्हणून ओळखले आहे. राज्यसभेच्या सविस्तर रचनेबाबत अनुच्छेद 80 मध्ये तरतुदी आहेत.`,
      },
      {
        heading: 'अनुच्छेद 79 आणि लोकसभा',
        content: `अनुच्छेद 79 मध्ये लोकसभेला संसदेच्या दोन सभागृहांपैकी दुसरे सभागृह म्हणून ओळखले आहे. लोकसभेच्या रचनेबाबत अनुच्छेद 81 मध्ये सविस्तर तरतूद आहे.`,
      },
      {
        heading: 'अनुच्छेद 79 आणि अनुच्छेद 80',
        content: `अनुच्छेद 79 संसदची मूलभूत घटनात्मक रचना सांगतो, तर अनुच्छेद 80 राज्यसभेच्या रचनेबाबत तरतूद करतो. हे दोन्ही अनुच्छेद एकत्र वाचल्यास संसदेची घटनात्मक रचना अधिक स्पष्ट होते.`,
      },
      {
        heading: 'अनुच्छेद 79 आणि अनुच्छेद 81',
        content: `अनुच्छेद 79 नुसार संसद राष्ट्रपती आणि दोन सभागृहांनी बनलेली आहे. अनुच्छेद 81 विशेषतः लोकसभेच्या रचनेशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद 79 मध्ये संसदेच्या कामकाजाची माहिती आहे का?',
        content: `अनुच्छेद 79 मुख्यतः संसदेची घटनात्मक रचना सांगतो. सदस्यांची पात्रता, अपात्रता, विशेषाधिकार, विधिमंडळाची प्रक्रिया आणि संसदेच्या इतर कामकाजाबाबतच्या सविस्तर तरतुदी पुढील अनुच्छेद आणि संबंधित कायद्यांमध्ये आहेत.`,
      },
      {
        heading: 'अनुच्छेद 79 चे महत्त्व काय आहे?',
        content: `अनुच्छेद 79 महत्त्वाचा आहे कारण भारताच्या संसदेची घटनात्मक रचना समजून घेण्यासाठी तो मूलभूत आधार देतो. राष्ट्रपती, राज्यसभा आणि लोकसभा हे संघाच्या संसदेचे घटक आहेत हे या अनुच्छेदातून स्पष्ट होते.`,
      },
      {
        heading: 'सोप्या भाषेत अनुच्छेद 79',
        content: `सोप्या भाषेत सांगायचे झाल्यास, भारताची संसद कोणापासून बनलेली आहे हे अनुच्छेद 79 सांगतो. संघाची संसद राष्ट्रपती, राज्यसभा आणि लोकसभा या घटकांनी बनलेली आहे.`,
      },
    ],
  },
  keywords: [
    'Article 79',
    'Article 79 Indian Constitution',
    'Article 79 explained',
    'Constitution of Parliament',
    'Parliament of India',
    'Indian Parliament',
    'Rajya Sabha',
    'Lok Sabha',
    'Council of States',
    'House of the People',
    'Article 79 in Marathi',
    'कलम 79',
    'कलम 79 भारतीय संविधान',
    'संसदेची रचना',
    'भारतीय संसद',
    'राज्यसभा',
    'लोकसभा',
    'संसद म्हणजे काय',
  ],
  relatedIds: ['80', '81', '83', '85', '100'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '153',
  articleNumber: 'Article 153',
  title: {
    en: 'Governors of States',
    mr: 'राज्यांचे राज्यपाल',
  },
  categoryKey: 'state-executive',
  officialText: {
    en: `Governors of States.—There shall be a Governor for each State:

Provided that nothing in this article shall prevent the appointment of the same person as Governor for two or more States.`,
    mr: `राज्यांचे राज्यपाल.—प्रत्येक राज्यासाठी एक राज्यपाल असेल:

परंतु, या अनुच्छेदातील कोणतीही गोष्ट एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्यास प्रतिबंध करणार नाही.`,
    verified: true,
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

त्यामुळे राज्यांमधील राज्यपालाच्या घटनात्मक पदाची मूलभूत रचना समजून घेण्यासाठी अनुच्छेद 153 महत्त्वाचा आहे.`,
  },
  verySimple: {
    en: `Article 153 provides that there shall be a Governor for each State.

The same person can also be appointed as Governor for two or more States.`,
    mr: `अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल.

एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती देखील करता येते.`,
  },
  example: {
    en: `Suppose the same person is appointed as Governor for two States. Article 153 permits this arrangement because the Constitution expressly allows the same person to be appointed as Governor for two or more States.

The Article therefore establishes the constitutional office of Governor for every State while also providing flexibility to have one Governor serve more than one State.

The detailed powers, appointment process and term of the Governor are provided under other constitutional provisions.`,
    mr: `समजा, एकाच व्यक्तीची दोन राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्यात आली. अनुच्छेद 153 अशा व्यवस्थेला परवानगी देतो कारण संविधान एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची परवानगी देते.

त्यामुळे प्रत्येक राज्यासाठी राज्यपालाचे घटनात्मक पद निश्चित करताना एकाच व्यक्तीला एकापेक्षा जास्त राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची लवचिकताही या अनुच्छेदात आहे.

राज्यपालांचे अधिकार, नियुक्तीची प्रक्रिया आणि कार्यकाळ याबाबतच्या सविस्तर तरतुदी संविधानातील इतर अनुच्छेदांमध्ये आहेत.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 153 of the Indian Constitution?',
        content: `Article 153 provides for the constitutional office of Governor in the States. It states that there shall be a Governor for each State.`,
      },
      {
        heading: 'What does Article 153 say?',
        content: `Article 153 states that there shall be a Governor for each State. It also allows the same person to be appointed as Governor for two or more States.`,
      },
      {
        heading: 'Which Part contains Article 153?',
        content: `Article 153 is contained in Part VI of the Indian Constitution, which deals with the States. It forms part of the provisions relating to the State Executive.`,
      },
      {
        heading: 'Is there a Governor for every State?',
        content: `Article 153 provides that there shall be a Governor for each State. The same provision also permits one person to serve as Governor for two or more States.`,
      },
      {
        heading: 'Can one person be Governor of two States?',
        content: `Yes. The proviso to Article 153 expressly allows the same person to be appointed as Governor for two or more States.`,
      },
      {
        heading: 'What is the importance of Article 153?',
        content: `Article 153 establishes the constitutional office of Governor within the State executive structure and provides for flexibility by allowing one person to serve as Governor for more than one State.`,
      },
      {
        heading: 'Article 153 and Article 154',
        content: `Article 153 establishes the office of Governor, while Article 154 deals with the executive power of the State.`,
      },
      {
        heading: 'Article 153 and Article 155',
        content: `Article 153 provides for the office of Governor, while Article 155 deals with the appointment of the Governor.`,
      },
      {
        heading: 'Article 153 and Article 156',
        content: `Article 153 establishes the office of Governor, while Article 156 deals with the Governor's term of office.`,
      },
      {
        heading: 'Article 153 and State Executive',
        content: `Article 153 forms part of the constitutional framework of the State Executive. Other provisions deal with the Governor's appointment, qualifications, powers and term.`,
      },
      {
        heading: "Does Article 153 describe the Governor's powers?",
        content: `Article 153 primarily establishes the office of Governor. The powers and functions of the Governor are dealt with under several other provisions of Part VI.`,
      },
      {
        heading: 'Why can one person be Governor of multiple States?',
        content: `Article 153 expressly permits the same person to be appointed as Governor for two or more States, providing constitutional flexibility in the State executive structure.`,
      },
      {
        heading: 'Why is Article 153 important?',
        content: `Article 153 is important because it establishes the constitutional office of Governor for the States and provides the possibility of one person serving as Governor for multiple States.`,
      },
      {
        heading: 'Article 153 in simple words',
        content: `In simple words, Article 153 provides for a Governor for every State and allows one person to serve as Governor for two or more States.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 153 म्हणजे काय?',
        content: `अनुच्छेद 153 हा राज्यपालाच्या घटनात्मक पदाशी संबंधित आहे. प्रत्येक राज्यासाठी एक राज्यपाल असेल, अशी तरतूद या अनुच्छेदात आहे.`,
      },
      {
        heading: 'अनुच्छेद 153 मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल. तसेच, एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`,
      },
      {
        heading: 'अनुच्छेद 153 संविधानाच्या कोणत्या भागात आहे?',
        content: `अनुच्छेद 153 हा संविधानाच्या भाग VI मध्ये आहे. भाग VI मध्ये राज्यांशी संबंधित तरतुदी आहेत.`,
      },
      {
        heading: 'प्रत्येक राज्यासाठी राज्यपाल असतो का?',
        content: `होय. अनुच्छेद 153 नुसार प्रत्येक राज्यासाठी एक राज्यपाल असेल. त्याच अनुच्छेदानुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`,
      },
      {
        heading: 'एक व्यक्ती दोन राज्यांची राज्यपाल होऊ शकते का?',
        content: `होय. अनुच्छेद 153 मधील तरतुदीनुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`,
      },
      {
        heading: 'अनुच्छेद 153 चे महत्त्व काय आहे?',
        content: `अनुच्छेद 153 राज्याच्या कार्यकारी व्यवस्थेतील राज्यपालाचे घटनात्मक पद निश्चित करतो आणि एकाच व्यक्तीला दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद 153 आणि अनुच्छेद 154',
        content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 154 राज्याच्या कार्यकारी अधिकाराबाबत तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद 153 आणि अनुच्छेद 155',
        content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 155 राज्यपालांच्या नियुक्तीबाबत तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद 153 आणि अनुच्छेद 156',
        content: `अनुच्छेद 153 राज्यपालाचे पद निश्चित करतो, तर अनुच्छेद 156 राज्यपालांच्या कार्यकाळाबाबत तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद 153 आणि राज्याची कार्यकारी व्यवस्था',
        content: `अनुच्छेद 153 हा राज्याच्या कार्यकारी व्यवस्थेच्या घटनात्मक चौकटीचा भाग आहे. राज्यपालांच्या नियुक्ती, पात्रता, अधिकार आणि कार्यकाळाबाबत इतर अनुच्छेदांमध्ये तरतुदी आहेत.`,
      },
      {
        heading: 'अनुच्छेद 153 मध्ये राज्यपालांचे अधिकार दिले आहेत का?',
        content: `अनुच्छेद 153 मुख्यतः राज्यपालाचे घटनात्मक पद निश्चित करतो. राज्यपालांचे अधिकार आणि कार्ये संविधानातील इतर तरतुदींमध्ये दिली आहेत.`,
      },
      {
        heading: 'एकाच व्यक्तीला अनेक राज्यांचा राज्यपाल का करता येतो?',
        content: `अनुच्छेद 153 मध्ये स्पष्टपणे एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करण्याची परवानगी दिली आहे. यामुळे राज्याच्या कार्यकारी व्यवस्थेत घटनात्मक लवचिकता राहते.`,
      },
      {
        heading: 'अनुच्छेद 153 चे महत्त्व',
        content: `अनुच्छेद 153 महत्त्वाचा आहे कारण तो राज्यपालाचे घटनात्मक पद निश्चित करतो आणि एकाच व्यक्तीला एकापेक्षा जास्त राज्यांसाठी राज्यपाल म्हणून नियुक्त करण्याची शक्यता निर्माण करतो.`,
      },
      {
        heading: 'सोप्या भाषेत अनुच्छेद 153',
        content: `सोप्या भाषेत सांगायचे झाल्यास, प्रत्येक राज्यासाठी राज्यपालाचे घटनात्मक पद असते आणि एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती करता येते.`,
      },
    ],
  },
  keywords: [
    'Article 153',
    'Article 153 Indian Constitution',
    'Article 153 explained',
    'Governors of States',
    'Governor of State',
    'State Governor',
    'Article 153 in Marathi',
    'Indian Constitution Governor',
    'State Executive',
    'कलम 153',
    'कलम 153 भारतीय संविधान',
    'राज्यांचे राज्यपाल',
    'राज्यपाल म्हणजे काय',
    'भारतीय संविधान राज्यपाल',
    'राज्य कार्यकारी मंडळ',
  ],
  relatedIds: ['154', '155', '156', '157', '158'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '124',
  articleNumber: 'Article 124',
  title: {
    en: 'Establishment and Constitution of the Supreme Court',
    mr: 'सर्वोच्च न्यायालयाची स्थापना व रचना',
  },
  categoryKey: 'union-judiciary',
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
    verified: true,
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

त्यामुळे अनुच्छेद १२४ सर्वोच्च न्यायालयाची रचना, न्यायाधीशांची पात्रता, नियुक्ती, कार्यकाळ, राजीनामा, पदावरून दूर करण्याची प्रक्रिया आणि शपथ यांचा घटनात्मक पाया निश्चित करतो.`,
  },
  verySimple: {
    en: 'Article 124 establishes the Supreme Court of India and provides constitutional rules relating to its Judges, including their qualifications, tenure, resignation and removal.',
    mr: 'अनुच्छेद १२४ सर्वोच्च न्यायालयाची स्थापना करतो आणि त्याच्या न्यायाधीशांची पात्रता, कार्यकाळ, राजीनामा व पदावरून दूर करण्याची घटनात्मक प्रक्रिया सांगतो.',
  },
  example: {
    en: `Suppose a person is being considered for appointment as a Judge of the Supreme Court. The person must be an Indian citizen and must satisfy one of the constitutional qualification requirements, such as having the required experience as a High Court Judge or advocate, or being a distinguished jurist in the opinion of the President.

For another example, if a Supreme Court Judge wishes to resign, the Constitution permits the Judge to submit a written resignation addressed to the President.

If removal of a Judge is sought on the ground of proved misbehaviour or incapacity, the constitutional parliamentary procedure under Article 124(4) must be followed. A simple decision by one authority is not sufficient.`,
    mr: `समजा एखाद्या व्यक्तीचा सर्वोच्च न्यायालयाच्या न्यायाधीशपदासाठी विचार केला जात आहे. ती व्यक्ती भारताची नागरिक असणे आवश्यक आहे आणि उच्च न्यायालयाचा न्यायाधीश किंवा अधिवक्ता म्हणून आवश्यक अनुभव किंवा राष्ट्रपतींच्या मते प्रतिष्ठित विधिज्ञ असणे यापैकी संविधानातील पात्रतेची अट पूर्ण करणे आवश्यक आहे.

दुसरे उदाहरण म्हणजे सर्वोच्च न्यायालयातील एखाद्या न्यायाधीशाला राजीनामा द्यायचा असल्यास, संविधानानुसार तो न्यायाधीश राष्ट्रपतींना उद्देशून लेखी राजीनामा देऊ शकतो.

जर एखाद्या न्यायाधीशाला सिद्ध झालेले गैरवर्तन किंवा असमर्थता या कारणावरून पदावरून दूर करण्याची प्रक्रिया सुरू करायची असेल, तर अनुच्छेद १२४(४) मध्ये दिलेली संसदीय घटनात्मक प्रक्रिया पूर्ण करावी लागते. केवळ एका प्राधिकरणाचा साधा निर्णय पुरेसा नसतो.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 124 of the Indian Constitution?',
        content: `Article 124 deals with the establishment and constitution of the Supreme Court of India. It contains provisions concerning the composition of the Court and important matters relating to Supreme Court Judges.`,
      },
      {
        heading: 'What does Article 124 establish?',
        content: `Article 124 establishes the Supreme Court of India as the constitutional apex court of the Union Judiciary. It provides that the Court consists of the Chief Justice of India and other Judges, subject to the number prescribed by Parliament.`,
      },
      {
        heading: 'Which Part contains Article 124?',
        content: `Article 124 is contained in Part V of the Constitution, which deals with the Union. It appears in Chapter IV, titled the Union Judiciary.`,
      },
      {
        heading: 'How many Judges can the Supreme Court have?',
        content: `Article 124 provides for the Chief Justice of India and a number of other Judges prescribed by Parliament. The current statutory maximum is thirty-three other Judges in addition to the Chief Justice of India.`,
      },
      {
        heading: 'What are the qualifications for a Supreme Court Judge?',
        content: `A person must be a citizen of India and must satisfy one of the constitutional requirements: at least five years as a Judge of a High Court or two or more High Courts in succession, at least ten years as an advocate of a High Court or two or more High Courts in succession, or being a distinguished jurist in the opinion of the President.`,
      },
      {
        heading: 'What is the retirement age of a Supreme Court Judge?',
        content: `A Judge of the Supreme Court holds office until attaining the age of sixty-five years. This age is specifically provided in Article 124(2).`,
      },
      {
        heading: 'Who appoints Supreme Court Judges?',
        content: `Article 124 provides that every Judge of the Supreme Court is appointed by the President by warrant under his hand and seal. The constitutional text also contains consultation requirements concerning Judges of the Supreme Court and High Courts.`,
      },
      {
        heading: 'Can a Supreme Court Judge resign?',
        content: `Yes. Article 124 permits a Supreme Court Judge to resign by writing addressed to the President.`,
      },
      {
        heading: 'How can a Supreme Court Judge be removed?',
        content: `Article 124 provides a special constitutional procedure for removal. Removal requires an order of the President after an address by each House of Parliament supported by the required majorities, on the ground of proved misbehaviour or incapacity.`,
      },
      {
        heading: 'What majority is required for removal of a Supreme Court Judge?',
        content: `The address must be supported by a majority of the total membership of the House and by a majority of not less than two-thirds of the members of that House present and voting. The address must be presented to the President in the same session.`,
      },
      {
        heading: 'What oath does a Supreme Court Judge take?',
        content: `Before entering office, every person appointed as a Supreme Court Judge must make and subscribe an oath or affirmation before the President or a person appointed by the President, according to the form provided in the Third Schedule.`,
      },
      {
        heading: 'Can a retired Supreme Court Judge practise in courts in India?',
        content: `No. Article 124(7) provides that a person who has held office as a Judge of the Supreme Court shall not plead or act in any court or before any authority within the territory of India.`,
      },
      {
        heading: 'Article 124 and judicial independence',
        content: `Article 124 creates constitutional safeguards relating to the tenure, resignation and removal of Supreme Court Judges. The special removal procedure requires participation and prescribed majorities in both Houses of Parliament.`,
      },
      {
        heading: 'Article 124 and the Supreme Court of India',
        content: `Article 124 is the foundational constitutional provision for the establishment and composition of the Supreme Court. Other Articles in Chapter IV deal with matters such as salaries, acting Chief Justice, jurisdiction, powers and procedures of the Supreme Court.`,
      },
      {
        heading: 'Article 124 in simple words',
        content: `In simple words, Article 124 establishes the Supreme Court of India and explains the constitutional framework relating to its Judges, including their appointment, qualifications, retirement age, resignation, removal and oath.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील अनुच्छेद १२४ म्हणजे काय?',
        content: `अनुच्छेद १२४ भारताच्या सर्वोच्च न्यायालयाची स्थापना आणि रचना याबद्दल आहे. यात सर्वोच्च न्यायालयाच्या न्यायाधीशांशी संबंधित अनेक महत्त्वाच्या घटनात्मक तरतुदी दिल्या आहेत.`,
      },
      {
        heading: 'अनुच्छेद १२४ काय स्थापित करतो?',
        content: `अनुच्छेद १२४ भारताचे सर्वोच्च न्यायालय स्थापित करतो. या न्यायालयामध्ये भारताचे मुख्य न्यायाधीश आणि संसद कायद्याद्वारे निश्चित करेल त्या संख्येतील इतर न्यायाधीश असतात.`,
      },
      {
        heading: 'अनुच्छेद १२४ कोणत्या भागात आहे?',
        content: `अनुच्छेद १२४ हा संविधानाच्या भाग V मध्ये आहे. तो भाग Union म्हणजेच संघाशी संबंधित आहे. अनुच्छेद १२४ हा Chapter IV — Union Judiciary मध्ये येतो.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयात किती न्यायाधीश असू शकतात?',
        content: `अनुच्छेद १२४ मध्ये भारताचे मुख्य न्यायाधीश आणि इतर न्यायाधीशांची तरतूद आहे. सध्याच्या कायदेशीर मर्यादेनुसार मुख्य न्यायाधीशांव्यतिरिक्त सर्वोच्च न्यायालयात जास्तीत जास्त तेहतीस इतर न्यायाधीश असू शकतात.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाच्या न्यायाधीशासाठी कोणती पात्रता आवश्यक आहे?',
        content: `व्यक्ती भारताची नागरिक असणे आवश्यक आहे. त्यासोबत किमान पाच वर्षे उच्च न्यायालयाचा न्यायाधीश असणे, किंवा किमान दहा वर्षे उच्च न्यायालयाचा अधिवक्ता असणे, किंवा राष्ट्रपतींच्या मते प्रतिष्ठित विधिज्ञ असणे यापैकी संविधानातील पात्रतेची अट पूर्ण करावी लागते.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाच्या न्यायाधीशांचे निवृत्तीचे वय किती आहे?',
        content: `सर्वोच्च न्यायालयाचा न्यायाधीश वयाची पासष्ट वर्षे पूर्ण होईपर्यंत पदावर राहतो. ही वयोमर्यादा अनुच्छेद १२४(२) मध्ये दिली आहे.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाच्या न्यायाधीशांची नियुक्ती कोण करतो?',
        content: `अनुच्छेद १२४ नुसार सर्वोच्च न्यायालयातील प्रत्येक न्यायाधीशाची नियुक्ती राष्ट्रपती आपल्या स्वाक्षरी व शिक्क्याच्या अधिपत्राद्वारे करतात. नियुक्तीच्या प्रक्रियेशी संबंधित सल्लामसलतीची घटनात्मक तरतूदही या अनुच्छेदात आहे.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाचा न्यायाधीश राजीनामा देऊ शकतो का?',
        content: `होय. अनुच्छेद १२४ नुसार सर्वोच्च न्यायालयाचा न्यायाधीश राष्ट्रपतींना उद्देशून लेखी राजीनामा देऊ शकतो.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाच्या न्यायाधीशाला पदावरून कसे दूर करता येते?',
        content: `सिद्ध झालेले गैरवर्तन किंवा असमर्थता या आधारावर अनुच्छेद १२४ मध्ये विशेष घटनात्मक प्रक्रिया दिली आहे. संसदेच्या दोन्ही सभागृहांनी आवश्यक बहुमताने संबोधन मंजूर केल्यानंतर राष्ट्रपतींच्या आदेशाद्वारे न्यायाधीशाला पदावरून दूर करता येते.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाच्या न्यायाधीशाला दूर करण्यासाठी किती बहुमत आवश्यक आहे?',
        content: `संसदेच्या संबंधित सभागृहाच्या एकूण सदस्यसंख्येच्या बहुमतासोबत उपस्थित राहून मतदान करणाऱ्या सदस्यांपैकी किमान दोन-तृतीयांश बहुमत आवश्यक आहे. दोन्ही सभागृहांमधील प्रक्रिया त्याच अधिवेशनात पूर्ण होणे आवश्यक आहे.`,
      },
      {
        heading: 'सर्वोच्च न्यायालयाचा न्यायाधीश कोणती शपथ घेतो?',
        content: `पदभार स्वीकारण्यापूर्वी सर्वोच्च न्यायालयाचा प्रत्येक न्यायाधीश राष्ट्रपतींसमोर किंवा राष्ट्रपतींनी नियुक्त केलेल्या व्यक्तीसमोर तिसऱ्या अनुसूचीत दिलेल्या नमुन्यानुसार शपथ किंवा प्रतिज्ञा घेतो.`,
      },
      {
        heading: 'निवृत्त सर्वोच्च न्यायालयाचा न्यायाधीश भारतातील न्यायालयात वकिली करू शकतो का?',
        content: `नाही. अनुच्छेद १२४(७) नुसार सर्वोच्च न्यायालयाचा न्यायाधीश म्हणून पद धारण केलेली व्यक्ती भारताच्या राज्यक्षेत्रातील कोणत्याही न्यायालयात किंवा कोणत्याही प्राधिकरणासमोर वकिली किंवा कार्य करू शकत नाही.`,
      },
      {
        heading: 'अनुच्छेद १२४ आणि न्यायव्यवस्थेचे स्वातंत्र्य',
        content: `अनुच्छेद १२४ न्यायाधीशांचा कार्यकाळ, राजीनामा आणि पदावरून दूर करण्याची विशेष प्रक्रिया याबाबत घटनात्मक तरतुदी देतो. न्यायाधीशाला दूर करण्यासाठी संसदेच्या दोन्ही सभागृहांमध्ये निर्धारित बहुमताची आवश्यकता असते.`,
      },
      {
        heading: 'अनुच्छेद १२४ आणि भारताचे सर्वोच्च न्यायालय',
        content: `अनुच्छेद १२४ हा सर्वोच्च न्यायालयाच्या स्थापना व रचनेचा मूलभूत घटनात्मक अनुच्छेद आहे. त्यानंतरचे अनुच्छेद सर्वोच्च न्यायालयाचे वेतन, कार्यवाहक मुख्य न्यायाधीश, अधिकारिता, अधिकार आणि कार्यपद्धती यांसारख्या बाबींशी संबंधित आहेत.`,
      },
      {
        heading: 'अनुच्छेद १२४ सोप्या भाषेत',
        content: `सोप्या भाषेत, अनुच्छेद १२४ भारताचे सर्वोच्च न्यायालय स्थापित करतो आणि त्याच्या न्यायाधीशांची नियुक्ती, पात्रता, निवृत्तीचे वय, राजीनामा, पदावरून दूर करण्याची प्रक्रिया आणि शपथ यांचे घटनात्मक नियम सांगतो.`,
      },
    ],
  },
  keywords: [
    'Article 124',
    'Article 124 of Indian Constitution',
    'Supreme Court of India',
    'Supreme Court Judges',
    'Supreme Court Judge qualifications',
    'appointment of Supreme Court Judges',
    'removal of Supreme Court Judge',
    'retirement age Supreme Court Judge',
    'Article 124 in simple words',
    'कलम 124',
    'भारतीय संविधान कलम 124',
    'सर्वोच्च न्यायालय',
    'सर्वोच्च न्यायालयाचे न्यायाधीश',
    'सर्वोच्च न्यायालय न्यायाधीश पात्रता',
    'सर्वोच्च न्यायालय न्यायाधीश नियुक्ती',
    'न्यायाधीश पदावरून दूर करणे',
  ],
  relatedIds: ['125', '126', '127', '128', '129', '130', '131'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
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
    verified: true,
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

त्यामुळे अनुच्छेद ३५२ राष्ट्रीय आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया स्पष्ट करतो आणि कार्यपालिका तसेच संसदेसाठी विशिष्ट घटनात्मक अटी निश्चित करतो.`,
  },
  verySimple: {
    en: 'Article 352 allows a national Emergency to be proclaimed when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion, subject to the constitutional procedure and parliamentary approval.',
    mr: 'अनुच्छेद ३५२ नुसार युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आल्यास घटनात्मक प्रक्रियेनुसार राष्ट्रीय आणीबाणी जाहीर करता येते आणि त्यासाठी संसदेची मंजुरी आवश्यक असते.',
  },
  example: {
    en: `Suppose a situation involving war creates a serious threat to the security of India. If the constitutional conditions under Article 352 are satisfied, the Union Cabinet communicates its decision to the President in writing and the President may issue a Proclamation of Emergency. The Proclamation must then be placed before both Houses of Parliament for approval within the constitutionally prescribed period.

Another example is a situation where there is an imminent danger of armed rebellion. Article 352 permits a Proclamation to be made even before the actual occurrence if the President is satisfied that such an imminent danger exists.

These examples illustrate the constitutional procedure; they do not mean that every security-related incident automatically results in an Emergency under Article 352.`,
    mr: `समजा युद्धामुळे भारताच्या सुरक्षेला गंभीर धोका निर्माण झाला. अनुच्छेद ३५२ मधील घटनात्मक अटी पूर्ण झाल्यास केंद्रीय मंत्रिमंडळ आपला निर्णय राष्ट्रपतींना लेखी स्वरूपात कळवते आणि राष्ट्रपती आणीबाणीची उद्घोषणा करू शकतात. त्यानंतर ही उद्घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवून घटनात्मक कालमर्यादेत मंजुरी घेणे आवश्यक असते.

दुसरे उदाहरण म्हणजे सशस्त्र बंडाचा तातडीचा धोका निर्माण होणे. अशा परिस्थितीत प्रत्यक्ष बंड सुरू होण्यापूर्वीदेखील, असा तातडीचा धोका असल्याचे राष्ट्रपतींचे समाधान झाल्यास अनुच्छेद ३५२ अंतर्गत उद्घोषणा करता येते.

ही उदाहरणे केवळ घटनात्मक प्रक्रिया समजावून सांगण्यासाठी आहेत. प्रत्येक सुरक्षा-संबंधित घटना आपोआप अनुच्छेद ३५२ अंतर्गत आणीबाणी निर्माण करते असे यावरून म्हणता येत नाही.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 352 of the Indian Constitution?',
        content: `Article 352 deals with the Proclamation of Emergency at the national level. It specifies the constitutional circumstances in which an Emergency may be proclaimed when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion.`,
      },
      {
        heading: 'What does Article 352 say?',
        content: `Article 352 provides the constitutional procedure for proclaiming an Emergency. It deals with the grounds for Emergency, the role of the President and Union Cabinet, the geographical scope of the Proclamation, and the requirement of approval by both Houses of Parliament.`,
      },
      {
        heading: 'Which Part of the Constitution contains Article 352?',
        content: `Article 352 is contained in Part XVIII of the Constitution of India, which deals with Emergency Provisions. Articles in this Part address different constitutional situations involving national, State and financial emergencies.`,
      },
      {
        heading: 'On what grounds can an Emergency be proclaimed under Article 352?',
        content: `Article 352 identifies three grounds: war, external aggression and armed rebellion. The constitutional text also permits a Proclamation where there is an imminent danger of war, external aggression or armed rebellion, if the required constitutional satisfaction exists.`,
      },
      {
        heading: 'Can an Emergency under Article 352 apply only to part of India?',
        content: `Yes. Article 352 permits a Proclamation in respect of the whole of India or only such part of the territory of India as may be specified in the Proclamation.`,
      },
      {
        heading: 'What is the role of the Union Cabinet under Article 352?',
        content: `The President cannot issue an Emergency Proclamation under Article 352 unless the decision of the Union Cabinet to issue it has been communicated to the President in writing. This requirement is expressly stated in Article 352(3).`,
      },
      {
        heading: 'Does Parliament have to approve an Emergency Proclamation?',
        content: `Yes. An Emergency Proclamation must be laid before each House of Parliament. Except for a Proclamation revoking an earlier one, it generally ceases to operate after one month unless both Houses approve it by resolutions within that period.`,
      },
      {
        heading: 'Can an Article 352 Proclamation be changed or revoked?',
        content: `Yes. Article 352 provides that a Proclamation may be varied or revoked by a subsequent Proclamation. The Constitution therefore provides a mechanism for changing or ending an Emergency Proclamation.`,
      },
      {
        heading: 'What is the difference between Article 352 and Article 356?',
        content: `Article 352 concerns a national Emergency when the security of India or a part of its territory is threatened by war, external aggression or armed rebellion. Article 356 deals with provisions relating to failure of constitutional machinery in States. They address different constitutional situations.`,
      },
      {
        heading: 'What is the difference between Article 352 and Article 360?',
        content: `Article 352 deals with a national Emergency based on threats to the security of India or a part of its territory. Article 360 deals with provisions relating to a financial emergency. The constitutional grounds and procedures are therefore different.`,
      },
      {
        heading: 'What is an Emergency under Article 352 in simple terms?',
        content: `In simple terms, Article 352 provides a constitutional mechanism for dealing with a grave threat to national security arising from war, external aggression or armed rebellion. It also establishes procedural safeguards involving the Union Cabinet and Parliament.`,
      },
      {
        heading: 'Why is parliamentary approval important under Article 352?',
        content: `Parliamentary approval creates an important constitutional check on the continuation of an Emergency Proclamation. The Constitution requires both Houses of Parliament to consider the Proclamation within the specified period.`,
      },
      {
        heading: 'Can Article 352 be invoked before an actual emergency occurs?',
        content: `Yes, the Explanation to Article 352 allows a Proclamation where there is an imminent danger of war, external aggression or armed rebellion, provided the President is satisfied that the required imminent danger exists.`,
      },
      {
        heading: 'Article 352 and Emergency Provisions',
        content: `Article 352 is the opening provision of Part XVIII dealing with Emergency Provisions. Other provisions in this Part address the effects and related constitutional consequences of Emergency situations.`,
      },
      {
        heading: 'Article 352 in simple words',
        content: `Article 352 provides the constitutional procedure for proclaiming a national Emergency when India or a part of its territory faces a serious security threat from war, external aggression or armed rebellion. The process includes written Union Cabinet advice and parliamentary approval.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील अनुच्छेद ३५२ म्हणजे काय?',
        content: `अनुच्छेद ३५२ राष्ट्रीय पातळीवरील आणीबाणीच्या घोषणेशी संबंधित आहे. युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताची किंवा त्याच्या कोणत्याही भागाची सुरक्षा धोक्यात आल्यास या अनुच्छेदातील घटनात्मक तरतुदी लागू होतात.`,
      },
      {
        heading: 'अनुच्छेद ३५२ मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद ३५२ आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया स्पष्ट करतो. यात आणीबाणीची कारणे, राष्ट्रपती आणि केंद्रीय मंत्रिमंडळाची भूमिका, आणीबाणीचा भौगोलिक विस्तार आणि संसदेच्या दोन्ही सभागृहांच्या मंजुरीची आवश्यकता यांचा समावेश होतो.`,
      },
      {
        heading: 'अनुच्छेद ३५२ कोणत्या भागात आहे?',
        content: `अनुच्छेद ३५२ हा भारतीय संविधानाच्या भाग XVIII मध्ये आहे. या भागाला Emergency Provisions म्हणजेच आणीबाणीच्या तरतुदी असे म्हटले जाते.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत आणीबाणी कोणत्या कारणांवर जाहीर करता येते?',
        content: `अनुच्छेद ३५२ मध्ये तीन प्रमुख कारणे नमूद केली आहेत: युद्ध, बाह्य आक्रमण आणि सशस्त्र बंड. तसेच अशा परिस्थितीचा तातडीचा धोका असल्यास प्रत्यक्ष घटना घडण्यापूर्वीदेखील उद्घोषणा करता येते.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत संपूर्ण भारतासाठीच आणीबाणी लागू होते का?',
        content: `नाही. अनुच्छेद ३५२ नुसार आणीबाणीची उद्घोषणा संपूर्ण भारतासाठी किंवा उद्घोषणेत नमूद केलेल्या भारताच्या कोणत्याही विशिष्ट भागासाठी केली जाऊ शकते.`,
      },
      {
        heading: 'अनुच्छेद ३५२ मध्ये केंद्रीय मंत्रिमंडळाची भूमिका काय आहे?',
        content: `राष्ट्रपतींना आणीबाणीची उद्घोषणा जारी करण्यापूर्वी केंद्रीय मंत्रिमंडळाचा असा निर्णय लेखी स्वरूपात कळविला जाणे आवश्यक आहे की अशी उद्घोषणा जारी केली जावी. ही अट अनुच्छेद ३५२(३) मध्ये दिली आहे.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत संसदेची मंजुरी आवश्यक आहे का?',
        content: `होय. आणीबाणीची उद्घोषणा संसदेच्या दोन्ही सभागृहांसमोर ठेवावी लागते. दोन्ही सभागृहांनी घटनात्मक कालमर्यादेत ठरावाद्वारे मंजुरी न दिल्यास, सामान्यतः एक महिन्यानंतर ती कार्यरत राहत नाही.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत आणीबाणीची घोषणा बदलता किंवा रद्द करता येते का?',
        content: `होय. अनुच्छेद ३५२ नुसार आधीची उद्घोषणा त्यानंतरच्या उद्घोषणेद्वारे बदलता किंवा रद्द करता येते.`,
      },
      {
        heading: 'अनुच्छेद ३५२ आणि अनुच्छेद ३५६ मध्ये काय फरक आहे?',
        content: `अनुच्छेद ३५२ राष्ट्रीय सुरक्षेला युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे निर्माण झालेल्या धोक्याशी संबंधित राष्ट्रीय आणीबाणीची प्रक्रिया सांगतो. अनुच्छेद ३५६ राज्यातील घटनात्मक यंत्रणा अपयशी ठरल्यास लागू होणाऱ्या तरतुदींशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद ३५२ आणि अनुच्छेद ३६० मध्ये काय फरक आहे?',
        content: `अनुच्छेद ३५२ राष्ट्रीय सुरक्षेला असलेल्या गंभीर धोक्याशी संबंधित आणीबाणीबाबत आहे. अनुच्छेद ३६० आर्थिक आणीबाणीशी संबंधित तरतुदी सांगतो. त्यामुळे दोन्ही अनुच्छेदांची घटनात्मक कारणे वेगवेगळी आहेत.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत आणीबाणी म्हणजे काय?',
        content: `सोप्या भाषेत, युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या सुरक्षेला गंभीर धोका निर्माण झाल्यास त्या परिस्थितीला घटनात्मक पद्धतीने हाताळण्यासाठी अनुच्छेद ३५२ प्रक्रिया उपलब्ध करून देतो.`,
      },
      {
        heading: 'अनुच्छेद ३५२ अंतर्गत संसदेची मंजुरी महत्त्वाची का आहे?',
        content: `संसदेची मंजुरी ही आणीबाणीच्या घोषणेवरील महत्त्वाची घटनात्मक तपासणी आहे. संविधानानुसार उद्घोषणा दोन्ही सभागृहांसमोर ठेवणे आणि आवश्यक कालमर्यादेत त्यांची मंजुरी घेणे आवश्यक आहे.`,
      },
      {
        heading: 'प्रत्यक्ष घटना घडण्यापूर्वी अनुच्छेद ३५२ अंतर्गत आणीबाणी जाहीर करता येते का?',
        content: `होय. जर युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडाचा तातडीचा धोका असल्याचे राष्ट्रपतींचे समाधान झाले, तर प्रत्यक्ष घटना घडण्यापूर्वीदेखील अनुच्छेद ३५२ अंतर्गत उद्घोषणा करता येते.`,
      },
      {
        heading: 'अनुच्छेद ३५२ आणि आणीबाणीच्या तरतुदी',
        content: `अनुच्छेद ३५२ हा संविधानाच्या भाग XVIII मधील आणीबाणीच्या तरतुदींचा प्रमुख प्रारंभिक अनुच्छेद आहे. या भागातील पुढील अनुच्छेद आणीबाणीच्या परिणामांशी आणि संबंधित घटनात्मक बाबींशी संबंधित आहेत.`,
      },
      {
        heading: 'अनुच्छेद ३५२ सोप्या भाषेत',
        content: `अनुच्छेद ३५२ नुसार युद्ध, बाह्य आक्रमण किंवा सशस्त्र बंडामुळे भारताच्या किंवा त्याच्या कोणत्याही भागाच्या सुरक्षेला गंभीर धोका निर्माण झाल्यास राष्ट्रीय आणीबाणी जाहीर करण्याची घटनात्मक प्रक्रिया उपलब्ध आहे. या प्रक्रियेत केंद्रीय मंत्रिमंडळाचा लेखी निर्णय आणि संसदेची मंजुरी यांचा समावेश होतो.`,
      },
    ],
  },
  keywords: [
    'Article 352',
    'Article 352 of Indian Constitution',
    'Proclamation of Emergency',
    'National Emergency',
    'Emergency provisions in India',
    'war external aggression armed rebellion',
    'Union Cabinet Article 352',
    'Parliament approval Emergency',
    'Article 352 in simple words',
    'कलम 352',
    'भारतीय संविधान कलम 352',
    'आणीबाणीची घोषणा',
    'राष्ट्रीय आणीबाणी',
    'आणीबाणीच्या तरतुदी',
    'युद्ध बाह्य आक्रमण सशस्त्र बंड',
  ],
  relatedIds: ['353', '354', '355', '356', '358', '359'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '15',
  articleNumber: 'Article 15',
  title: {
    en: 'Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex or Place of Birth',
    mr: 'धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर भेदभावास प्रतिबंध',
  },
  categoryKey: 'fundamental-rights',
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
    verified: true,
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

म्हणून अनुच्छेद १५ एकीकडे विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो आणि दुसरीकडे संविधानाने स्पष्टपणे परवानगी दिलेल्या काही विशेष तरतुदींसाठी जागा ठेवतो.`,
  },
  verySimple: {
    en: 'Article 15 prohibits discrimination against citizens solely on the grounds of religion, race, caste, sex or place of birth, while allowing certain constitutionally permitted special provisions for specified groups.',
    mr: 'अनुच्छेद १५ नागरिकांशी केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर भेदभाव करण्यास प्रतिबंध करतो आणि संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींनाही मान्यता देतो.',
  },
  example: {
    en: `Suppose a public facility covered by Article 15(2) is available for general public use. A citizen cannot be denied access to that facility solely because of the citizen's religion, race, caste, sex or place of birth.

Another example is a law that makes a special provision for women or children. Article 15(3) expressly permits the State to make such special provisions.

Similarly, the Constitution permits certain special provisions for socially and educationally backward classes, Scheduled Castes and Scheduled Tribes, and economically weaker sections, subject to the specific constitutional conditions.

These examples show that Article 15 contains both a prohibition against specified forms of discrimination and express constitutional permission for certain special provisions.`,
    mr: `समजा अनुच्छेद १५(२) अंतर्गत येणारी एखादी सार्वजनिक सुविधा सर्वसामान्य जनतेच्या वापरासाठी उपलब्ध आहे. एखाद्या नागरिकाला केवळ त्याच्या धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर त्या सुविधेचा वापर करण्यापासून रोखता येणार नाही.

दुसरे उदाहरण म्हणजे महिला किंवा बालकांसाठी एखादी विशेष तरतूद करणारा कायदा. अनुच्छेद १५(३) राज्याला अशा विशेष तरतुदी करण्याची परवानगी देतो.

त्याचप्रमाणे सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या वर्गांसाठी, अनुसूचित जाती-जमातींसाठी तसेच आर्थिकदृष्ट्या दुर्बल घटकांसाठी संविधानातील संबंधित अटींच्या अधीन राहून काही विशेष तरतुदी करता येतात.

यावरून स्पष्ट होते की अनुच्छेद १५ मध्ये विशिष्ट प्रकारच्या भेदभावास प्रतिबंध करण्याबरोबरच काही विशेष तरतुदींनाही घटनात्मक मान्यता दिली आहे.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 15 of the Indian Constitution?',
        content: `Article 15 is a Fundamental Right under the Right to Equality. It prohibits the State from discriminating against any citizen solely on the grounds of religion, race, caste, sex or place of birth.`,
      },
      {
        heading: 'What does Article 15 say?',
        content: `Article 15 prohibits specified forms of discrimination and also contains constitutional provisions permitting certain special measures for women, children, socially and educationally backward classes, Scheduled Castes, Scheduled Tribes and economically weaker sections.`,
      },
      {
        heading: 'Which Fundamental Right includes Article 15?',
        content: `Article 15 forms part of the Right to Equality under Part III of the Constitution. It follows Article 14 and is closely related to the constitutional guarantee of equality.`,
      },
      {
        heading: 'Which grounds of discrimination are prohibited under Article 15?',
        content: `Article 15(1) specifically refers to religion, race, caste, sex and place of birth. The State cannot discriminate against a citizen solely on any of these grounds or a combination of them.`,
      },
      {
        heading: 'Does Article 15 protect citizens from discrimination?',
        content: `Yes. Article 15(1) protects citizens against discrimination by the State on the specified grounds. Article 15(2) additionally addresses certain forms of exclusion from public places and facilities.`,
      },
      {
        heading: 'What does Article 15(2) provide?',
        content: `Article 15(2) provides that citizens cannot, solely on the specified grounds, be subjected to disability, liability, restriction or condition regarding access to listed public places and public-use facilities.`,
      },
      {
        heading: 'Does Article 15 allow special provisions for women and children?',
        content: `Yes. Article 15(3) expressly permits the State to make special provisions for women and children.`,
      },
      {
        heading: 'What is Article 15(4)?',
        content: `Article 15(4) permits the State to make special provisions for the advancement of socially and educationally backward classes of citizens and for the Scheduled Castes and Scheduled Tribes.`,
      },
      {
        heading: 'What is Article 15(5)?',
        content: `Article 15(5) permits certain special provisions by law concerning admission to educational institutions for socially and educationally backward classes and for Scheduled Castes and Scheduled Tribes, subject to the constitutional conditions and the exception for minority educational institutions under Article 30(1).`,
      },
      {
        heading: 'What is Article 15(6)?',
        content: `Article 15(6) permits special provisions for economically weaker sections other than the classes mentioned in clauses (4) and (5). It also addresses certain special provisions concerning admission to educational institutions, including private educational institutions, subject to the constitutional conditions.`,
      },
      {
        heading: 'Article 15 and equality before law',
        content: `Article 15 is closely connected with the broader constitutional principle of equality. Article 14 provides equality before law and equal protection of laws, while Article 15 addresses specified forms of discrimination against citizens.`,
      },
      {
        heading: 'Article 15 and Article 16 difference',
        content: `Article 15 primarily concerns discrimination in the contexts covered by its provisions, including public access and certain educational provisions. Article 16 specifically concerns equality of opportunity in matters of public employment.`,
      },
      {
        heading: 'Why is Article 15 important?',
        content: `Article 15 provides a constitutional safeguard against discrimination on specified grounds while recognising that the Constitution may permit certain special provisions to address specified social, educational and economic circumstances.`,
      },
      {
        heading: 'Article 15 in simple words',
        content: `In simple words, Article 15 says that citizens should not be discriminated against by the State solely because of religion, race, caste, sex or place of birth. At the same time, the Constitution permits certain special provisions for specified groups.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील अनुच्छेद १५ म्हणजे काय?',
        content: `अनुच्छेद १५ हा समानतेच्या अधिकाराचा भाग आहे. तो राज्याला केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर नागरिकांशी भेदभाव करण्यास प्रतिबंध करतो.`,
      },
      {
        heading: 'अनुच्छेद १५ मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद १५ विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो आणि महिला, बालक, सामाजिक व शैक्षणिकदृष्ट्या मागासलेले वर्ग, अनुसूचित जाती-जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांसाठी संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींची तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद १५ कोणत्या मूलभूत अधिकाराचा भाग आहे?',
        content: `अनुच्छेद १५ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४ नंतर येतो आणि समानतेच्या घटनात्मक तत्त्वाशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद १५ अंतर्गत कोणत्या आधारांवरील भेदभावास प्रतिबंध आहे?',
        content: `अनुच्छेद १५(१) मध्ये धर्म, वंश, जात, लिंग आणि जन्मस्थान या आधारांचा स्पष्ट उल्लेख आहे. या आधारांपैकी कोणत्याही एका किंवा एकापेक्षा अधिक आधारांवर केवळ भेदभाव करता येत नाही.`,
      },
      {
        heading: 'अनुच्छेद १५ नागरिकांना भेदभावापासून संरक्षण देतो का?',
        content: `होय. अनुच्छेद १५(१) राज्याकडून विशिष्ट आधारांवर होणाऱ्या भेदभावापासून नागरिकांचे संरक्षण करतो. अनुच्छेद १५(२) काही सार्वजनिक ठिकाणे आणि सुविधांमधील प्रवेशाशी संबंधित अतिरिक्त संरक्षण देतो.`,
      },
      {
        heading: 'अनुच्छेद १५(२) मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद १५(२) नुसार केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानाच्या आधारावर नागरिकाला दुकाने, सार्वजनिक उपाहारगृहे, हॉटेल्स, सार्वजनिक मनोरंजनाची ठिकाणे आणि संविधानात नमूद केलेल्या इतर सार्वजनिक सुविधांच्या वापरावर निर्बंध लावता येत नाहीत.`,
      },
      {
        heading: 'अनुच्छेद १५ महिलांसाठी आणि बालकांसाठी विशेष तरतूद करण्यास परवानगी देतो का?',
        content: `होय. अनुच्छेद १५(३) राज्याला महिला आणि बालकांसाठी विशेष तरतुदी करण्याची स्पष्ट परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद १५(४) म्हणजे काय?',
        content: `अनुच्छेद १५(४) राज्याला सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या नागरिकांच्या वर्गांच्या तसेच अनुसूचित जाती आणि अनुसूचित जमातींच्या प्रगतीसाठी विशेष तरतुदी करण्याची परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद १५(५) म्हणजे काय?',
        content: `अनुच्छेद १५(५) काही घटनात्मक अटींच्या अधीन राहून सामाजिक आणि शैक्षणिकदृष्ट्या मागासलेल्या वर्गांसाठी तसेच अनुसूचित जाती-जमातींसाठी शैक्षणिक संस्थांमध्ये प्रवेशासंबंधी विशेष तरतुदी करण्यास परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद १५(६) म्हणजे काय?',
        content: `अनुच्छेद १५(६) खंड (४) आणि (५) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी विशेष तरतुदींना परवानगी देतो. यात काही अटींच्या अधीन राहून शैक्षणिक संस्थांमधील प्रवेशाशी संबंधित तरतुदींचाही समावेश आहे.`,
      },
      {
        heading: 'अनुच्छेद १५ आणि कायद्यापुढील समानता',
        content: `अनुच्छेद १५ हा व्यापक समानतेच्या घटनात्मक तत्त्वाशी संबंधित आहे. अनुच्छेद १४ कायद्यापुढे समानता आणि कायद्यांचे समान संरक्षण सांगतो, तर अनुच्छेद १५ विशिष्ट प्रकारच्या भेदभावास प्रतिबंध करतो.`,
      },
      {
        heading: 'अनुच्छेद १५ आणि अनुच्छेद १६ मध्ये काय फरक आहे?',
        content: `अनुच्छेद १५ विशिष्ट आधारांवरील भेदभाव आणि त्यातील सार्वजनिक व शैक्षणिक संदर्भांशी संबंधित आहे. अनुच्छेद १६ विशेषतः राज्याच्या अंतर्गत सार्वजनिक रोजगार आणि नियुक्तीतील समान संधीशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद १५ महत्त्वाचा का आहे?',
        content: `अनुच्छेद १५ नागरिकांना विशिष्ट आधारांवरील भेदभावापासून घटनात्मक संरक्षण देतो. त्याच वेळी, विशिष्ट सामाजिक, शैक्षणिक आणि आर्थिक परिस्थितींना संबोधित करण्यासाठी संविधानाने परवानगी दिलेल्या विशेष तरतुदींनाही तो मान्यता देतो.`,
      },
      {
        heading: 'अनुच्छेद १५ सोप्या भाषेत',
        content: `सोप्या भाषेत, राज्याने नागरिकांशी केवळ धर्म, वंश, जात, लिंग किंवा जन्मस्थानामुळे भेदभाव करू नये, असे अनुच्छेद १५ सांगतो. त्याच वेळी संविधानाने काही विशिष्ट वर्गांसाठी विशेष तरतुदींनाही परवानगी दिली आहे.`,
      },
    ],
  },
  keywords: [
    'Article 15',
    'Article 15 of Indian Constitution',
    'Prohibition of discrimination',
    'Right to Equality',
    'Article 15(1)',
    'Article 15(2)',
    'Article 15(3)',
    'Article 15(4)',
    'Article 15(5)',
    'Article 15(6)',
    'discrimination on grounds of religion caste sex',
    'Article 15 reservation provisions',
    'कलम 15',
    'भारतीय संविधान कलम 15',
    'भेदभावास प्रतिबंध',
    'समानतेचा अधिकार',
    'कलम 15(4)',
    'कलम 15(5)',
    'कलम 15(6)',
  ],
  relatedIds: ['14', '16', '17', '18', '19'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},

  {
  id: '16',
  articleNumber: 'Article 16',
  title: {
    en: 'Equality of Opportunity in Matters of Public Employment',
    mr: 'सार्वजनिक रोजगाराच्या बाबतीत समान संधी',
  },
  categoryKey: 'fundamental-rights',
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
    verified: true,
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

म्हणून अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीसाठी घटनात्मक चौकट तयार करतो आणि त्याच वेळी संविधानाने स्पष्टपणे मान्य केलेल्या काही विशेष तरतुदींनाही जागा देतो.`,
  },
  verySimple: {
    en: 'Article 16 guarantees equality of opportunity for citizens in matters of public employment and prohibits discrimination on specified grounds, while allowing certain constitutionally permitted special provisions.',
    mr: 'अनुच्छेद १६ सार्वजनिक रोजगाराच्या बाबतीत नागरिकांना समान संधी देतो आणि विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो, तसेच संविधानाने परवानगी दिलेल्या काही विशेष तरतुदींना मान्यता देतो.',
  },
  example: {
    en: `Suppose a citizen applies for a government job. The selection process must provide equality of opportunity and cannot exclude the citizen solely because of religion, race, caste, sex, descent, place of birth or residence, subject to the specific constitutional provisions.

Another example concerns reservation. Where the constitutional requirements of Article 16 are satisfied, the State may make provisions for reservation in public employment for specified categories covered by the relevant clauses.

Article 16 also recognises that Parliament may prescribe certain residence requirements for specified classes of employment and that the Constitution permits particular reservation provisions, including those relating to Scheduled Castes, Scheduled Tribes and economically weaker sections under the conditions stated in the Article.

These examples show that Article 16 combines the general principle of equal opportunity with specific constitutional provisions concerning public employment.`,
    mr: `समजा एखादा नागरिक सरकारी नोकरीसाठी अर्ज करतो. निवड प्रक्रियेत समान संधीचे घटनात्मक तत्त्व पाळले पाहिजे आणि केवळ धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान किंवा निवास या आधारांवर त्याला अपात्र ठरवता येणार नाही, अर्थात संविधानातील विशिष्ट तरतुदी लागू असतील त्या अधीन राहून.

दुसरे उदाहरण आरक्षणाशी संबंधित आहे. अनुच्छेद १६ मधील संबंधित घटनात्मक अटी पूर्ण झाल्यास, राज्य सार्वजनिक रोजगारामध्ये काही विशिष्ट वर्गांसाठी आरक्षणाची तरतूद करू शकते.

तसेच संसदेला काही विशिष्ट प्रकारच्या रोजगारासाठी निवासाची अट निश्चित करण्याची घटनात्मक तरतूद आहे. अनुसूचित जाती, अनुसूचित जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांसाठीही अनुच्छेद १६ मध्ये संबंधित अटींसह विशेष तरतुदींची व्यवस्था आहे.

यावरून स्पष्ट होते की अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीच्या सामान्य तत्त्वासोबत काही विशिष्ट घटनात्मक तरतुदींनाही मान्यता देतो.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 16 of the Indian Constitution?',
        content: `Article 16 is a Fundamental Right under the Right to Equality. It provides for equality of opportunity for citizens in matters relating to employment or appointment to any office under the State.`,
      },
      {
        heading: 'What does Article 16 say?',
        content: `Article 16 provides equality of opportunity in public employment and prohibits discrimination on specified grounds. It also contains provisions relating to residence requirements, reservation and certain exceptions.`,
      },
      {
        heading: 'Which Fundamental Right includes Article 16?',
        content: `Article 16 is part of the Right to Equality under Part III of the Constitution. It follows Articles 14 and 15 and focuses specifically on public employment.`,
      },
      {
        heading: 'What is Article 16(1)?',
        content: `Article 16(1) provides that there shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.`,
      },
      {
        heading: 'What does Article 16(2) prohibit?',
        content: `Article 16(2) prohibits a citizen from being made ineligible for or discriminated against in public employment solely on grounds of religion, race, caste, sex, descent, place of birth or residence.`,
      },
      {
        heading: 'What is Article 16(3)?',
        content: `Article 16(3) permits Parliament to make a law prescribing certain residence requirements for specified classes of employment or appointment under a State or Union territory.`,
      },
      {
        heading: 'What is Article 16(4)?',
        content: `Article 16(4) permits the State to make provision for reservation of appointments or posts in favour of backward classes of citizens that, in the opinion of the State, are not adequately represented in services under the State.`,
      },
      {
        heading: 'What is Article 16(4A)?',
        content: `Article 16(4A) permits the State to make provisions for reservation in matters of promotion, with consequential seniority, for Scheduled Castes and Scheduled Tribes where the constitutional conditions specified in the clause are satisfied.`,
      },
      {
        heading: 'What is Article 16(4B)?',
        content: `Article 16(4B) deals with certain unfilled reserved vacancies and permits them to be treated as a separate class of vacancies for being filled in subsequent years, subject to the constitutional provision.`,
      },
      {
        heading: 'What is Article 16(5)?',
        content: `Article 16(5) provides that the Article does not affect a law requiring the incumbent of an office connected with the affairs of a religious or denominational institution, or a member of its governing body, to profess a particular religion or belong to a particular denomination.`,
      },
      {
        heading: 'What is Article 16(6)?',
        content: `Article 16(6) permits the State to make reservation provisions for economically weaker sections other than the classes mentioned in Article 16(4), subject to the conditions and maximum specified in the Constitution.`,
      },
      {
        heading: 'Article 16 and reservation in public employment',
        content: `Article 16 contains several provisions concerning reservation in public employment. These provisions apply within the constitutional framework and include specific clauses concerning backward classes, Scheduled Castes, Scheduled Tribes and economically weaker sections.`,
      },
      {
        heading: 'What is the difference between Article 15 and Article 16?',
        content: `Article 15 primarily addresses specified forms of discrimination and certain special provisions in contexts covered by that Article. Article 16 specifically deals with equality of opportunity in matters of public employment.`,
      },
      {
        heading: 'Why is Article 16 important?',
        content: `Article 16 provides a constitutional framework for equality of opportunity in public employment. It also explains specific circumstances in which Parliament or the State may make provisions concerning residence or reservation.`,
      },
      {
        heading: 'Article 16 in simple words',
        content: `In simple words, Article 16 says that citizens should receive equal opportunity in public employment and should not be discriminated against solely on the specified grounds, while certain special constitutional provisions may apply.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील अनुच्छेद १६ म्हणजे काय?',
        content: `अनुच्छेद १६ हा समानतेच्या अधिकाराचा भाग आहे. तो राज्याच्या अंतर्गत रोजगार किंवा पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी देण्याची घटनात्मक तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद १६ मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधी आणि विशिष्ट आधारांवरील भेदभावास प्रतिबंध याबद्दल सांगतो. तसेच निवासाची अट, आरक्षण आणि काही विशिष्ट अपवादांशी संबंधित तरतुदीही यात आहेत.`,
      },
      {
        heading: 'अनुच्छेद १६ कोणत्या मूलभूत अधिकाराचा भाग आहे?',
        content: `अनुच्छेद १६ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४ आणि १५ नंतर येतो आणि विशेषतः सार्वजनिक रोजगाराशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद १६(१) म्हणजे काय?',
        content: `अनुच्छेद १६(१) नुसार राज्याच्या अंतर्गत रोजगार किंवा कोणत्याही पदावरील नियुक्तीच्या बाबतीत सर्व नागरिकांना समान संधी असली पाहिजे.`,
      },
      {
        heading: 'अनुच्छेद १६(२) मध्ये कोणत्या गोष्टींना प्रतिबंध आहे?',
        content: `अनुच्छेद १६(२) नुसार धर्म, वंश, जात, लिंग, वंशपरंपरा, जन्मस्थान किंवा निवास या आधारांवर केवळ भेदभाव करून नागरिकाला राज्याच्या अंतर्गत रोजगार किंवा पदासाठी अपात्र ठरवता येत नाही.`,
      },
      {
        heading: 'अनुच्छेद १६(३) म्हणजे काय?',
        content: `अनुच्छेद १६(३) संसदेला विशिष्ट प्रकारच्या रोजगार किंवा नियुक्तीसाठी राज्य किंवा केंद्रशासित प्रदेशात निवासाची काही अट निश्चित करणारा कायदा करण्याची परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद १६(४) म्हणजे काय?',
        content: `अनुच्छेद १६(४) राज्याला अशा मागासलेल्या नागरिकांच्या वर्गासाठी नियुक्त्या किंवा पदांमध्ये आरक्षणाची तरतूद करण्यास परवानगी देतो, ज्यांचे राज्याच्या सेवांमध्ये पुरेसे प्रतिनिधित्व नाही असे राज्याच्या मते आढळते.`,
      },
      {
        heading: 'अनुच्छेद १६(४A) म्हणजे काय?',
        content: `अनुच्छेद १६(४A) घटनात्मक अटी पूर्ण झाल्यास अनुसूचित जाती आणि अनुसूचित जमातींसाठी पदोन्नतीमध्ये, परिणामी ज्येष्ठतेसह, आरक्षणाची तरतूद करण्यास राज्याला परवानगी देतो.`,
      },
      {
        heading: 'अनुच्छेद १६(४B) म्हणजे काय?',
        content: `अनुच्छेद १६(४B) काही न भरलेल्या राखीव रिक्त जागांशी संबंधित आहे. अशा रिक्त जागांना पुढील वर्षांत भरण्यासाठी स्वतंत्र वर्गातील रिक्त जागा म्हणून विचार करण्याची घटनात्मक तरतूद यात आहे.`,
      },
      {
        heading: 'अनुच्छेद १६(५) म्हणजे काय?',
        content: `अनुच्छेद १६(५) धार्मिक किंवा सांप्रदायिक संस्थांशी संबंधित विशिष्ट पदांसाठी विशिष्ट धर्म किंवा पंथाशी संबंधित असण्याची अट असलेल्या कायद्याच्या अंमलबजावणीवर परिणाम होणार नाही अशी तरतूद करतो.`,
      },
      {
        heading: 'अनुच्छेद १६(६) म्हणजे काय?',
        content: `अनुच्छेद १६(६) अनुच्छेद १६(४) मध्ये नमूद केलेल्या वर्गांव्यतिरिक्त आर्थिकदृष्ट्या दुर्बल घटकांसाठी सार्वजनिक रोजगारातील आरक्षणाच्या तरतुदींना परवानगी देतो, संविधानात नमूद केलेल्या अटी आणि मर्यादांच्या अधीन राहून.`,
      },
      {
        heading: 'अनुच्छेद १६ आणि सार्वजनिक रोजगारातील आरक्षण',
        content: `अनुच्छेद १६ मध्ये सार्वजनिक रोजगारातील आरक्षणाशी संबंधित अनेक तरतुदी आहेत. त्यामध्ये मागासलेले वर्ग, अनुसूचित जाती, अनुसूचित जमाती आणि आर्थिकदृष्ट्या दुर्बल घटकांशी संबंधित विशिष्ट घटनात्मक तरतुदींचा समावेश आहे.`,
      },
      {
        heading: 'अनुच्छेद १५ आणि अनुच्छेद १६ मध्ये काय फरक आहे?',
        content: `अनुच्छेद १५ विशिष्ट प्रकारच्या भेदभावास आणि त्यातील काही विशेष तरतुदींना संबोधित करतो. अनुच्छेद १६ विशेषतः राज्याच्या अंतर्गत सार्वजनिक रोजगारातील समान संधीशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद १६ महत्त्वाचा का आहे?',
        content: `अनुच्छेद १६ सार्वजनिक रोजगारातील समान संधीसाठी घटनात्मक चौकट प्रदान करतो. तसेच निवासाची अट किंवा आरक्षणासंबंधी काही विशिष्ट घटनात्मक तरतुदी कोणत्या परिस्थितीत लागू होऊ शकतात हे स्पष्ट करतो.`,
      },
      {
        heading: 'अनुच्छेद १६ सोप्या भाषेत',
        content: `सोप्या भाषेत, अनुच्छेद १६ नागरिकांना सार्वजनिक रोजगारामध्ये समान संधी मिळावी आणि संविधानात नमूद केलेल्या आधारांवर केवळ भेदभाव होऊ नये असे सांगतो. त्याच वेळी काही विशिष्ट घटनात्मक विशेष तरतुदींनाही परवानगी आहे.`,
      },
    ],
  },
  keywords: [
    'Article 16',
    'Article 16 of Indian Constitution',
    'Equality of opportunity in public employment',
    'Article 16 public employment',
    'Article 16 reservation',
    'Article 16(1)',
    'Article 16(2)',
    'Article 16(3)',
    'Article 16(4)',
    'Article 16(4A)',
    'Article 16(4B)',
    'Article 16(5)',
    'Article 16(6)',
    'reservation in government jobs',
    'Right to Equality',
    'कलम 16',
    'भारतीय संविधान कलम 16',
    'सार्वजनिक रोजगारातील समान संधी',
    'सरकारी नोकरीतील समान संधी',
    'कलम 16 आरक्षण',
  ],
  relatedIds: ['14', '15', '17', '18', '19'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
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
    en: `Abolition of Untouchability.—“Untouchability” is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of “Untouchability” shall be an offence punishable in accordance with law.`,
    mr: `अस्पृश्यता निर्मूलन.—“अस्पृश्यता” नष्ट करण्यात आली आहे आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे. “अस्पृश्यते”मुळे उद्भवणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र असा अपराध असेल.`,
    verified: true,
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

म्हणून अनुच्छेद १७ हा घटनात्मक बंदीबरोबरच अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रता आणि भेदभावाविरुद्ध कायदेशीर संरक्षणाचा आधार आहे.`,
  },
  verySimple: {
    en: 'Article 17 abolishes untouchability and forbids its practice in any form. Enforcing any disability arising from untouchability is an offence punishable according to law.',
    mr: 'अनुच्छेद १७ अस्पृश्यता नष्ट करतो आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध करतो. अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.',
  },
  example: {
    en: `Suppose a person is denied access to a place or facility solely because of a practice associated with untouchability. Such exclusion cannot be justified merely by treating it as a social custom, because Article 17 constitutionally abolishes untouchability and prohibits its practice.

Another example would be imposing a disability on a person because of a practice arising from untouchability. Article 17 specifically provides that enforcement of such a disability is an offence punishable in accordance with law.

The exact legal consequences depend on the applicable legislation and facts of the case. Article 17 provides the constitutional foundation for protection against such practices.`,
    mr: `समजा एखाद्या व्यक्तीला अस्पृश्यतेशी संबंधित प्रथेच्या आधारावर एखाद्या सार्वजनिक ठिकाणी किंवा सुविधेचा वापर करण्यापासून रोखले जाते. अशा प्रकारचा बहिष्कार केवळ सामाजिक प्रथा असल्याचे सांगून योग्य ठरवता येत नाही, कारण अनुच्छेद १७ अस्पृश्यता घटनात्मकदृष्ट्या नष्ट करतो आणि तिचा आचार निषिद्ध करतो.

दुसरे उदाहरण म्हणजे अस्पृश्यतेशी संबंधित प्रथेमुळे एखाद्या व्यक्तीवर कोणतीही अपात्रता लादणे. अनुच्छेद १७ स्पष्टपणे सांगतो की अशा अपात्रतेची अंमलबजावणी हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.

या कृतीचे नेमके कायदेशीर परिणाम संबंधित कायदा आणि प्रकरणातील तथ्यांवर अवलंबून असतात. अनुच्छेद १७ अशा प्रथांविरुद्ध घटनात्मक संरक्षणाचा आधार प्रदान करतो.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 17 of the Indian Constitution?',
        content: `Article 17 is a Fundamental Right that abolishes untouchability and prohibits its practice in any form. It also provides that enforcement of any disability arising from untouchability shall be an offence punishable according to law.`,
      },
      {
        heading: 'What does Article 17 say?',
        content: `Article 17 states that untouchability is abolished and that its practice in any form is forbidden. It further provides that enforcing any disability arising from untouchability is an offence punishable in accordance with law.`,
      },
      {
        heading: 'Which Fundamental Right includes Article 17?',
        content: `Article 17 forms part of the Right to Equality in Part III of the Constitution. It appears after Articles 14, 15 and 16 and before Article 18.`,
      },
      {
        heading: 'What is the purpose of Article 17?',
        content: `The purpose of Article 17 is to constitutionally abolish untouchability and prevent disabilities imposed on people because of practices arising from untouchability. It gives this protection the status of a Fundamental Right.`,
      },
      {
        heading: 'Does Article 17 prohibit untouchability in every form?',
        content: `Yes. The constitutional text expressly states that the practice of untouchability in any form is forbidden. The Article does not provide a constitutional exception permitting its practice.`,
      },
      {
        heading: 'Is violation of Article 17 punishable?',
        content: `Article 17 expressly provides that enforcement of any disability arising out of untouchability shall be an offence punishable in accordance with law. Parliament has enacted legislation giving effect to this constitutional provision.`,
      },
      {
        heading: 'Which law was made to give effect to Article 17?',
        content: `The Untouchability (Offences) Act, 1955 was enacted in pursuance of Article 17. It was subsequently amended and renamed the Protection of Civil Rights Act, 1955.`,
      },
      {
        heading: 'What is the Protection of Civil Rights Act, 1955?',
        content: `The Protection of Civil Rights Act, 1955 is legislation connected with the constitutional prohibition of untouchability under Article 17. It provides legal measures relating to offences associated with the enforcement of disabilities arising from untouchability.`,
      },
      {
        heading: 'What is the difference between Article 15 and Article 17?',
        content: `Article 15 prohibits discrimination on specified grounds such as religion, race, caste, sex and place of birth. Article 17 has a specific constitutional focus on abolishing untouchability and prohibiting its practice in any form.`,
      },
      {
        heading: 'Is Article 17 a Fundamental Right?',
        content: `Yes. Article 17 is contained in Part III of the Constitution, which deals with Fundamental Rights, under the Right to Equality.`,
      },
      {
        heading: 'Why is Article 17 important?',
        content: `Article 17 gives constitutional protection against untouchability and practices arising from it. It also expressly treats enforcement of disabilities arising from untouchability as an offence punishable according to law.`,
      },
      {
        heading: 'Article 17 and equality',
        content: `Article 17 supports the constitutional principle of equality by prohibiting a specific form of social exclusion and disability. It complements the broader equality protections contained in Articles 14, 15 and 16.`,
      },
      {
        heading: 'What does Article 17 mean in simple words?',
        content: `In simple words, Article 17 says that untouchability has no place under the Constitution. Its practice in any form is prohibited, and enforcing disabilities arising from it can result in punishment under law.`,
      },
      {
        heading: 'Article 17 in the Indian Constitution',
        content: `Article 17 is a short but significant constitutional provision. It directly abolishes untouchability and creates a constitutional basis for legal action against enforcement of disabilities arising from such practices.`,
      },
      {
        heading: 'Article 17 key points',
        content: `The key points are: untouchability is abolished; its practice in any form is forbidden; enforcement of disabilities arising from untouchability is an offence; and laws may provide the applicable punishment and legal procedure.`,
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील अनुच्छेद १७ म्हणजे काय?',
        content: `अनुच्छेद १७ हा समानतेच्या अधिकाराचा भाग आहे. तो अस्पृश्यता नष्ट करतो आणि तिचा कोणत्याही स्वरूपातील आचार निषिद्ध करतो. अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ मध्ये काय सांगितले आहे?',
        content: `अनुच्छेद १७ मध्ये अस्पृश्यता नष्ट करण्यात आली असून तिचा कोणत्याही स्वरूपातील आचार निषिद्ध असल्याचे सांगितले आहे. तसेच अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ कोणत्या मूलभूत अधिकाराचा भाग आहे?',
        content: `अनुच्छेद १७ हा संविधानाच्या भाग III मधील समानतेच्या अधिकाराचा भाग आहे. तो अनुच्छेद १४, १५ आणि १६ नंतर आणि अनुच्छेद १८ च्या आधी येतो.`,
      },
      {
        heading: 'अनुच्छेद १७ चा उद्देश काय आहे?',
        content: `अनुच्छेद १७ चा उद्देश अस्पृश्यता घटनात्मकदृष्ट्या नष्ट करणे आणि अस्पृश्यतेशी संबंधित प्रथांमुळे व्यक्तींवर लादल्या जाणाऱ्या अपात्रता व सामाजिक बहिष्काराला प्रतिबंध करणे हा आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ कोणत्याही स्वरूपातील अस्पृश्यतेला प्रतिबंध करतो का?',
        content: `होय. संविधानातील मजकुरात अस्पृश्यतेचा कोणत्याही स्वरूपातील आचार निषिद्ध असल्याचे स्पष्टपणे सांगितले आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ चे उल्लंघन केल्यास शिक्षा होऊ शकते का?',
        content: `होय. अनुच्छेद १७ नुसार अस्पृश्यतेमुळे निर्माण होणारी कोणतीही अपात्रता लादणे हा कायद्यानुसार शिक्षेस पात्र अपराध आहे. या घटनात्मक तरतुदीला प्रभावी करण्यासाठी संबंधित कायदे करण्यात आले आहेत.`,
      },
      {
        heading: 'अनुच्छेद १७ लागू करण्यासाठी कोणता कायदा करण्यात आला?',
        content: `अस्पृश्यता (अपराध) अधिनियम, १९५५ हा अनुच्छेद १७ च्या घटनात्मक तरतुदीच्या अनुषंगाने करण्यात आला. नंतर त्यात दुरुस्ती करण्यात आली आणि त्याचे नाव Protection of Civil Rights Act, 1955 असे करण्यात आले.`,
      },
      {
        heading: 'Protection of Civil Rights Act, 1955 म्हणजे काय?',
        content: `Protection of Civil Rights Act, 1955 हा अनुच्छेद १७ अंतर्गत अस्पृश्यतेच्या घटनात्मक बंदीशी संबंधित कायदा आहे. अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रतेच्या अंमलबजावणीशी संबंधित अपराधांबाबत या कायद्यात तरतुदी आहेत.`,
      },
      {
        heading: 'अनुच्छेद १५ आणि अनुच्छेद १७ मध्ये काय फरक आहे?',
        content: `अनुच्छेद १५ धर्म, वंश, जात, लिंग आणि जन्मस्थान यांसारख्या विशिष्ट आधारांवरील भेदभावास प्रतिबंध करतो. अनुच्छेद १७ विशेषतः अस्पृश्यता नष्ट करण्यावर आणि तिच्या कोणत्याही स्वरूपातील आचारास प्रतिबंध करण्यावर केंद्रित आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ हा मूलभूत अधिकार आहे का?',
        content: `होय. अनुच्छेद १७ हा संविधानाच्या भाग III मध्ये आहे. भाग III मध्ये मूलभूत अधिकारांची तरतूद आहे आणि अनुच्छेद १७ समानतेच्या अधिकाराशी संबंधित आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ महत्त्वाचा का आहे?',
        content: `अनुच्छेद १७ अस्पृश्यतेविरुद्ध घटनात्मक संरक्षण देतो. तसेच अस्पृश्यतेमुळे निर्माण होणाऱ्या अपात्रतेची अंमलबजावणी हा कायद्यानुसार शिक्षेस पात्र अपराध असल्याचे स्पष्ट करतो.`,
      },
      {
        heading: 'अनुच्छेद १७ आणि समानता',
        content: `अनुच्छेद १७ सामाजिक बहिष्कार आणि अस्पृश्यतेशी संबंधित अपात्रतेला प्रतिबंध करून संविधानातील समानतेच्या तत्त्वाला बळकटी देतो. तो अनुच्छेद १४, १५ आणि १६ मधील व्यापक समानता संरक्षणांना पूरक आहे.`,
      },
      {
        heading: 'अनुच्छेद १७ सोप्या भाषेत काय सांगतो?',
        content: `सोप्या भाषेत, संविधानानुसार अस्पृश्यतेला कोणतेही स्थान नाही. तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे आणि तिच्यामुळे निर्माण होणारी अपात्रता लादल्यास कायद्यानुसार शिक्षा होऊ शकते.`,
      },
      {
        heading: 'भारतीय संविधानातील अनुच्छेद १७',
        content: `अनुच्छेद १७ हा आकाराने छोटा पण महत्त्वाचा घटनात्मक अनुच्छेद आहे. तो थेट अस्पृश्यता नष्ट करतो आणि अशा प्रथांमुळे निर्माण होणाऱ्या अपात्रतेविरुद्ध कायदेशीर कारवाईचा घटनात्मक आधार देतो.`,
      },
      {
        heading: 'अनुच्छेद १७ चे महत्त्वाचे मुद्दे',
        content: `महत्त्वाचे मुद्दे म्हणजे: अस्पृश्यता नष्ट करण्यात आली आहे; तिचा कोणत्याही स्वरूपातील आचार निषिद्ध आहे; अस्पृश्यतेमुळे निर्माण होणारी अपात्रता लादणे हा अपराध आहे; आणि संबंधित कायद्यांनुसार त्यासाठी शिक्षा व कायदेशीर प्रक्रिया ठरवली जाऊ शकते.`,
      },
    ],
  },
  keywords: [
    'Article 17',
    'Article 17 of Indian Constitution',
    'Abolition of Untouchability',
    'Article 17 Fundamental Right',
    'Article 17 in simple words',
    'untouchability in Indian Constitution',
    'Protection of Civil Rights Act 1955',
    'Article 17 and equality',
    'Article 15 and Article 17',
    'कलम 17',
    'भारतीय संविधान कलम 17',
    'अस्पृश्यता निर्मूलन',
    'अस्पृश्यता कायदा',
    'मूलभूत अधिकार कलम 17',
    'समानतेचा अधिकार',
  ],
  relatedIds: ['14', '15', '16', '18', '19'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-09-28',
},
{
  id: '105',
  articleNumber: 'Article 105',
  title: {
    en: 'Powers, Privileges and Immunities of Parliament and its Members',
    mr: 'संसद आणि तिच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती',
  },
  categoryKey: 'union-legislature',
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

(4) खंड (1), (2) आणि (3) मधील तरतुदी संविधानामुळे संसदेत किंवा तिच्या कोणत्याही समितीच्या कार्यवाहीत बोलण्याचा आणि अन्य प्रकारे सहभागी होण्याचा अधिकार असलेल्या व्यक्तींनाही संसद सदस्यांप्रमाणे लागू होतील.`,
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

म्हणून कलम 105 संसदेत भाषण, मतदान आणि संसदीय कार्याशी संबंधित काही संरक्षणांना घटनात्मक आधार देते आणि इतर विशेषाधिकार कायद्याद्वारे निश्चित करण्याची तरतूद करते.`,
  },
  verySimple: {
    en: 'Article 105 protects freedom of speech in Parliament and provides certain privileges and immunities to Parliament, its members and committees. It helps members perform their parliamentary functions effectively within the constitutional framework.',
    mr: 'कलम 105 संसदेत भाषणस्वातंत्र्याचे संरक्षण करते आणि संसद, तिचे सदस्य व समित्यांना काही विशेषाधिकार व उन्मुक्ती देते. यामुळे घटनात्मक चौकटीत संसदीय कामकाज प्रभावीपणे पार पाडता येते.',
  },
  example: {
    en: `Suppose a Member of Parliament makes a statement or casts a vote during parliamentary proceedings. Article 105(2) provides constitutional protection against court proceedings in respect of that speech or vote.

For example, a parliamentary debate may involve strong criticism of a government policy. The constitutional protection under Article 105 concerns what the member says or votes in Parliament in the exercise of parliamentary functions.

This protection is intended to preserve the independence and effective functioning of Parliament. It should not be understood as giving a member unlimited immunity for every act performed outside parliamentary proceedings.`,
    mr: `समजा एखादा संसद सदस्य संसदेच्या कामकाजादरम्यान एखादे वक्तव्य करतो किंवा एखाद्या प्रस्तावावर मतदान करतो. कलम 105(2) नुसार त्या वक्तव्याबद्दल किंवा मतदानाबद्दल न्यायालयीन कार्यवाहीपासून संबंधित सदस्याला घटनात्मक संरक्षण मिळते.

उदाहरणार्थ, संसदेतील चर्चेदरम्यान एखादा सदस्य सरकारी धोरणावर तीव्र टीका करू शकतो. संसदीय कार्यवाहीत सदस्याने केलेल्या अशा वक्तव्याशी संबंधित संरक्षण कलम 105 अंतर्गत दिलेले आहे.

या संरक्षणाचा उद्देश संसदेचे स्वातंत्र्य आणि प्रभावी कामकाज राखणे हा आहे. मात्र याचा अर्थ संसद सदस्याने संसदेबाहेर केलेल्या प्रत्येक कृतीला अमर्यादित संरक्षण मिळते असा नाही.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 105 of the Indian Constitution?',
        content: 'Article 105 deals with the powers, privileges and immunities of Parliament, its members and committees. It also provides for freedom of speech in Parliament.',
      },
      {
        heading: 'What is parliamentary privilege under Article 105?',
        content: 'Parliamentary privilege refers to constitutional protections and powers that enable Parliament and its members to perform their legislative functions effectively. Article 105 provides the constitutional framework for these privileges.',
      },
      {
        heading: 'What does Article 105(1) provide?',
        content: 'Article 105(1) provides for freedom of speech in Parliament, subject to the Constitution and the rules and standing orders regulating parliamentary procedure.',
      },
      {
        heading: 'What does Article 105(2) provide?',
        content: 'Article 105(2) protects Members of Parliament from court proceedings in respect of anything said or any vote given by them in Parliament or a parliamentary committee, subject to the constitutional provision.',
      },
      {
        heading: 'What is the difference between Article 105 and Article 194?',
        content: 'Article 105 deals with the powers, privileges and immunities of Parliament and its members, while Article 194 deals with the corresponding powers, privileges and immunities of State Legislatures and their members.',
      },
      {
        heading: 'Does Article 105 give MPs unlimited immunity?',
        content: 'No. Article 105 provides specific constitutional protections relating to parliamentary proceedings and privileges. It should not be understood as a general immunity from every law or judicial process.',
      },
      {
        heading: 'Why are parliamentary privileges important?',
        content: 'Parliamentary privileges help Parliament and its members perform their constitutional and legislative functions effectively and protect parliamentary proceedings from improper interference.',
      },
      {
        heading: 'Article 105 and Freedom of Speech',
        content: 'Article 105 provides freedom of speech in Parliament, while Article 19(1)(a) protects freedom of speech and expression for citizens. The two provisions operate in different constitutional contexts.',
      },
      {
        heading: 'Article 105 in simple words',
        content: 'In simple terms, Article 105 gives Parliament and its members constitutional protections and privileges necessary for effective parliamentary functioning, including freedom of speech in Parliament.',
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 105 म्हणजे काय?',
        content: 'कलम 105 हे संसद, तिचे सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती यांच्याशी संबंधित आहे. तसेच संसदेत भाषणस्वातंत्र्याची घटनात्मक तरतूद करते.',
      },
      {
        heading: 'कलम 105 अंतर्गत संसदीय विशेषाधिकार म्हणजे काय?',
        content: 'संसदीय विशेषाधिकार म्हणजे संसद आणि तिच्या सदस्यांना संसदीय व घटनात्मक कार्य प्रभावीपणे पार पाडण्यासाठी मिळणारे घटनात्मक संरक्षण व अधिकार. कलम 105 या विशेषाधिकारांना घटनात्मक आधार देते.',
      },
      {
        heading: 'कलम 105(1) मध्ये काय आहे?',
        content: 'कलम 105(1) नुसार संविधान आणि संसदेच्या कार्यपद्धतीचे नियमन करणारे नियम यांच्या अधीन राहून संसदेत भाषणस्वातंत्र्य आहे.',
      },
      {
        heading: 'कलम 105(2) मध्ये काय आहे?',
        content: 'कलम 105(2) नुसार संसदेत किंवा संसदीय समितीत सदस्याने केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर न्यायालयीन कार्यवाही करता येत नाही.',
      },
      {
        heading: 'कलम 105 आणि कलम 194 मध्ये काय फरक आहे?',
        content: 'कलम 105 हे संसद आणि तिच्या सदस्यांच्या अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे, तर कलम 194 हे राज्य विधिमंडळ आणि त्याच्या सदस्यांच्या संबंधित अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे.',
      },
      {
        heading: 'कलम 105 मुळे खासदारांना अमर्यादित संरक्षण मिळते का?',
        content: 'नाही. कलम 105 संसदीय कार्यवाही आणि विशेषाधिकारांशी संबंधित विशिष्ट घटनात्मक संरक्षण देते. प्रत्येक कायदा किंवा न्यायालयीन प्रक्रियेपासून सर्वसाधारण सूट मिळते असे या कलमाचे स्वरूप नाही.',
      },
      {
        heading: 'संसदीय विशेषाधिकार महत्त्वाचे का आहेत?',
        content: 'संसदीय विशेषाधिकारांमुळे संसद आणि तिचे सदस्य घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडू शकतात आणि संसदीय कार्यवाहीत अनुचित हस्तक्षेपापासून संरक्षण मिळते.',
      },
      {
        heading: 'कलम 105 आणि भाषणस्वातंत्र्य',
        content: 'कलम 105 संसदेत भाषणस्वातंत्र्याशी संबंधित आहे, तर कलम 19(1)(अ) नागरिकांच्या भाषण आणि अभिव्यक्ती स्वातंत्र्याचे संरक्षण करते. दोन्ही तरतुदींचा घटनात्मक संदर्भ वेगळा आहे.',
      },
      {
        heading: 'सोप्या भाषेत कलम 105',
        content: 'सोप्या भाषेत सांगायचे झाल्यास, संसद आणि तिच्या सदस्यांना संसदीय कामकाज प्रभावीपणे पार पाडण्यासाठी आवश्यक घटनात्मक संरक्षण आणि विशेषाधिकार कलम 105 अंतर्गत मिळतात.',
      },
    ],
  },
  keywords: [
    'Article 105',
    'Article 105 Indian Constitution',
    'Parliamentary Privileges',
    'Parliamentary Privileges in India',
    'Privileges of Parliament',
    'MP Privileges',
    'Article 105 explained',
    'Article 105 in Marathi',
    'Freedom of Speech in Parliament',
    'Parliamentary Immunity',
    'कलम 105',
    'कलम 105 भारतीय संविधान',
    'संसदीय विशेषाधिकार',
    'खासदारांचे विशेषाधिकार',
    'संसद विशेषाधिकार',
  ],
  relatedIds: ['19', '194', '32', '122'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-10-05',
},
{
  id: '194',
  articleNumber: 'Article 194',
  title: {
    en: 'Powers, Privileges and Immunities of State Legislatures and their Members',
    mr: 'राज्य विधिमंडळ आणि त्याच्या सदस्यांचे अधिकार, विशेषाधिकार व उन्मुक्ती',
  },
  categoryKey: 'state-legislature',
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

(4) खंड (1), (2) आणि (3) मधील तरतुदी संविधानामुळे राज्याच्या विधिमंडळाच्या सभागृहात किंवा त्याच्या कोणत्याही समितीत बोलण्याचा आणि अन्य प्रकारे कार्यवाहीत सहभागी होण्याचा अधिकार असलेल्या व्यक्तींनाही त्या विधिमंडळाच्या सदस्यांप्रमाणे लागू होतील.`,
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

म्हणून कलम 194 राज्य विधिमंडळातील भाषणस्वातंत्र्य तसेच राज्य विधिमंडळाचे अधिकार, विशेषाधिकार आणि उन्मुक्ती यांना घटनात्मक आधार देते.`,
  },
  verySimple: {
    en: 'Article 194 gives State Legislatures and their members certain powers, privileges and immunities. It also protects freedom of speech in State Legislatures, subject to the Constitution and legislative rules.',
    mr: 'कलम 194 राज्य विधिमंडळ आणि त्याच्या सदस्यांना काही अधिकार, विशेषाधिकार व उन्मुक्ती देते. तसेच संविधान आणि विधिमंडळाच्या नियमांच्या अधीन राहून राज्य विधिमंडळात भाषणस्वातंत्र्याचे संरक्षण करते.',
  },
  example: {
    en: `Suppose a Member of a State Legislative Assembly makes a statement or casts a vote during legislative proceedings. Article 194(2) provides constitutional protection in respect of that speech or vote.

For example, during a legislative debate, a member may express a view on a government policy. The constitutional protection under Article 194 applies to the member's speech and vote within the legislative proceedings, subject to the constitutional framework.

Article 194 also becomes relevant when a question arises about whether an action amounts to a breach of legislative privilege. The specific issue must be examined in the context of the Constitution, applicable law and the relevant legislative proceedings.

Thus, Article 194 provides the constitutional foundation for State Legislative privileges while supporting the effective functioning of State Legislatures.`,
    mr: `समजा एखादा आमदार विधानसभेच्या कामकाजादरम्यान एखादे वक्तव्य करतो किंवा एखाद्या प्रस्तावावर मतदान करतो. कलम 194(2) त्या वक्तव्याबद्दल किंवा मतदानाबद्दल घटनात्मक संरक्षण देते.

उदाहरणार्थ, विधिमंडळातील चर्चेदरम्यान एखादा आमदार सरकारी धोरणाबद्दल आपले मत मांडू शकतो. विधिमंडळाच्या कार्यवाहीदरम्यान केलेल्या अशा वक्तव्याला आणि मतदानाला कलम 194 अंतर्गत घटनात्मक संरक्षण मिळते.

एखाद्या कृतीमुळे विधिमंडळाच्या विशेषाधिकाराचा भंग झाला आहे का, असा प्रश्न निर्माण झाल्यासही कलम 194 महत्त्वाचे ठरते. मात्र प्रत्येक प्रकरणाचा निर्णय संविधान, लागू कायदे आणि संबंधित विधिमंडळाच्या कार्यवाहीच्या संदर्भात घ्यावा लागतो.

म्हणून कलम 194 हे राज्य विधिमंडळाच्या विशेषाधिकारांना घटनात्मक आधार देते आणि राज्य विधिमंडळाचे प्रभावी कामकाज सुनिश्चित करण्यास मदत करते.`,
  },
  seoSections: {
    en: [
      {
        heading: 'What is Article 194 of the Indian Constitution?',
        content: 'Article 194 deals with the powers, privileges and immunities of State Legislatures, their members and committees. It also provides for freedom of speech in State Legislatures.',
      },
      {
        heading: 'What are Legislative Privileges under Article 194?',
        content: 'Legislative privileges are constitutional powers, protections and immunities available to State Legislatures and their members to enable them to perform their legislative and constitutional functions effectively.',
      },
      {
        heading: 'What does Article 194(1) provide?',
        content: 'Article 194(1) provides for freedom of speech in the Legislature of every State, subject to the Constitution and the rules and standing orders regulating legislative procedure.',
      },
      {
        heading: 'What does Article 194(2) provide?',
        content: 'Article 194(2) provides protection from court proceedings for members of State Legislatures in respect of anything said or any vote given by them in the Legislature or its committees, subject to the constitutional provision.',
      },
      {
        heading: 'What is the difference between Article 105 and Article 194?',
        content: 'Article 105 deals with parliamentary privileges and immunities, while Article 194 deals with the corresponding powers, privileges and immunities of State Legislatures and their members.',
      },
      {
        heading: 'Why are legislative privileges important?',
        content: 'Legislative privileges help State Legislatures and their members perform their constitutional and legislative functions effectively and protect legislative proceedings from improper interference.',
      },
      {
        heading: 'What is breach of privilege?',
        content: 'A breach of privilege generally refers to conduct that violates or interferes with a privilege of a House, its members or its committees. The specific issue depends on the applicable constitutional framework, law and legislative rules.',
      },
      {
        heading: 'Article 194 and Freedom of Speech',
        content: 'Article 194 provides for freedom of speech in State Legislatures, while Article 19(1)(a) protects freedom of speech and expression for citizens. The two provisions operate in different constitutional contexts.',
      },
      {
        heading: 'Article 194 and the Supreme Court',
        content: 'Questions concerning the scope and limits of legislative privileges under Article 194 can involve constitutional interpretation and the relationship between legislative privileges, fundamental rights and judicial review.',
      },
      {
        heading: 'Article 194 in simple words',
        content: 'In simple terms, Article 194 provides State Legislatures and their members with constitutional protections and privileges needed to perform legislative functions effectively, including freedom of speech in the Legislature.',
      },
    ],
    mr: [
      {
        heading: 'भारतीय संविधानातील कलम 194 म्हणजे काय?',
        content: 'कलम 194 हे राज्य विधिमंडळ, त्याचे सदस्य आणि समित्यांचे अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे. तसेच राज्य विधिमंडळात भाषणस्वातंत्र्याची तरतूद करते.',
      },
      {
        heading: 'कलम 194 अंतर्गत विधिमंडळाचे विशेषाधिकार म्हणजे काय?',
        content: 'विधिमंडळाचे विशेषाधिकार म्हणजे राज्य विधिमंडळ आणि त्याच्या सदस्यांना घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडण्यासाठी मिळणारे अधिकार, संरक्षण आणि उन्मुक्ती.',
      },
      {
        heading: 'कलम 194(1) मध्ये काय आहे?',
        content: 'कलम 194(1) नुसार संविधान आणि विधिमंडळाच्या कार्यपद्धतीचे नियमन करणारे नियम यांच्या अधीन राहून प्रत्येक राज्याच्या विधिमंडळात भाषणस्वातंत्र्य आहे.',
      },
      {
        heading: 'कलम 194(2) मध्ये काय आहे?',
        content: 'कलम 194(2) नुसार राज्य विधिमंडळाच्या सदस्याने विधिमंडळात किंवा त्याच्या समितीत केलेल्या वक्तव्याबद्दल किंवा दिलेल्या मताबद्दल त्याच्यावर न्यायालयीन कार्यवाही करता येत नाही.',
      },
      {
        heading: 'कलम 105 आणि कलम 194 मध्ये काय फरक आहे?',
        content: 'कलम 105 संसद आणि तिच्या सदस्यांच्या विशेषाधिकारांशी संबंधित आहे, तर कलम 194 राज्य विधिमंडळ आणि त्याच्या सदस्यांच्या अधिकार, विशेषाधिकार व उन्मुक्तींशी संबंधित आहे.',
      },
      {
        heading: 'विधिमंडळाचे विशेषाधिकार महत्त्वाचे का आहेत?',
        content: 'विधिमंडळाचे विशेषाधिकार राज्य विधिमंडळ आणि त्याचे सदस्य घटनात्मक व विधिमंडळाशी संबंधित कामकाज प्रभावीपणे पार पाडू शकतील आणि कार्यवाहीत अनुचित हस्तक्षेप होऊ नये यासाठी महत्त्वाचे आहेत.',
      },
      {
        heading: 'विशेषाधिकारभंग म्हणजे काय?',
        content: 'विधिमंडळाच्या सभागृहाचा, त्याच्या सदस्यांचा किंवा समित्यांचा एखादा विशेषाधिकार भंग करणे किंवा त्याच्या कार्यात अडथळा आणणे याला सामान्यतः विशेषाधिकारभंगाच्या संदर्भात पाहिले जाते. संबंधित प्रकरणाचा निर्णय संविधान, कायदा आणि विधिमंडळाच्या नियमांच्या चौकटीत केला जातो.',
      },
      {
        heading: 'कलम 194 आणि भाषणस्वातंत्र्य',
        content: 'कलम 194 राज्य विधिमंडळातील भाषणस्वातंत्र्याशी संबंधित आहे, तर कलम 19(1)(अ) नागरिकांच्या भाषण आणि अभिव्यक्ती स्वातंत्र्याचे संरक्षण करते. दोन्ही तरतुदींचा घटनात्मक संदर्भ वेगळा आहे.',
      },
      {
        heading: 'कलम 194 आणि सर्वोच्च न्यायालय',
        content: 'कलम 194 अंतर्गत विधिमंडळाच्या विशेषाधिकारांची व्याप्ती आणि मर्यादा याबाबतचे प्रश्न घटनात्मक अर्थ लावण्याशी संबंधित असू शकतात. अशा प्रश्नांमध्ये विशेषाधिकार, मूलभूत अधिकार आणि न्यायालयीन पुनरावलोकन यांचा संबंध महत्त्वाचा ठरतो.',
      },
      {
        heading: 'सोप्या भाषेत कलम 194',
        content: 'सोप्या भाषेत सांगायचे झाल्यास, राज्य विधिमंडळाचे कामकाज प्रभावीपणे चालावे यासाठी त्याला आणि त्याच्या सदस्यांना काही घटनात्मक अधिकार, विशेषाधिकार व संरक्षण कलम 194 अंतर्गत मिळते.',
      },
    ],
  },
  keywords: [
    'Article 194',
    'Article 194 Indian Constitution',
    'Legislative Privileges',
    'Legislative Privileges in India',
    'State Legislature Privileges',
    'MLA Privileges',
    'Article 194 explained',
    'Article 194 in Marathi',
    'Breach of Privilege',
    'State Legislative Assembly Privileges',
    'कलम 194',
    'कलम 194 भारतीय संविधान',
    'विधिमंडळाचे विशेषाधिकार',
    'आमदारांचे विशेषाधिकार',
    'विधानसभेचे विशेषाधिकार',
    'विशेषाधिकारभंग',
  ],
  relatedIds: ['19', '21', '105', '32'],
  source: {
    name: 'Legislative Department, Ministry of Law and Justice, Government of India',
    url: 'https://www.legislative.gov.in/constitution-of-india/',
  },
  lastVerified: '2026-10-05',
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