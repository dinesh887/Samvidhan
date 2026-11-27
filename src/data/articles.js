// Migrated from the public MySamvidhan /articles listing. Summaries are the
// published educational explanations; they are not presented as verbatim law.
import { migratedArticles } from './migratedArticles.js'

const existingArticles = [
  { number:'5', title:'Citizenship at the Commencement of the Constitution', part:'II', category:'Citizenship', summary:'Article 5 is the first provision in Part II of the Indian Constitution, which deals with citizenship. It establishes the constitutional conditions for determining who would be recognised as a citizen of India at the commencement of the Constitution. The provision is specifically concerned with the commencement of the Constitution. Article 5 requires a person to have domicile in the territory of India. Along with domicile, it provides alternative conditions relating to birth, parentage or ordinary residence immediately before commencement. Read with Articles 6 to 11, it sets out the initial constitutional criteria for citizenship.', keywords:'citizenship domicile commencement' },
  { number:'14', title:'Right to Equality', part:'III', category:'Fundamental Rights', summary:'Article 14 is one of the Fundamental Rights guaranteed by the Constitution of India. It provides that the State shall not deny any person equality before the law or equal protection of the laws within the territory of India. The provision applies to every person, not only to citizens. Article 14 contains two closely connected ideas: equality before the law and equal protection of the laws. Equality before the law reflects the principle that no person is above the law. Equal protection focuses on providing equal legal protection to people who are similarly situated. Article 14 does not mean that every person must always be treated identically; constitutional law can permit reasonable distinctions with a valid basis connected to the purpose of the law. It is a broader guarantee against arbitrary State action and unjustified unequal treatment.', content:'Article 14 is one of the Fundamental Rights guaranteed by the Constitution of India. It provides that the State shall not deny any person equality before the law or equal protection of the laws within the territory of India. The provision applies to every person, not only to citizens. This is important because the wording of Article 14 uses the expression “any person”.\n\nIt therefore protects individuals within the territory of India against unequal treatment by the State in matters covered by the constitutional guarantee. Article 14 contains two closely connected ideas: equality before the law and equal protection of the laws. Equality before the law reflects the principle that no person is above the law and that the law should not arbitrarily give one person a superior legal status over another.\n\nEqual protection of the laws focuses on providing equal legal protection to people who are similarly situated. Article 14 does not mean that every person must always be treated identically in every situation. Constitutional law can permit reasonable distinctions when there is a valid basis for treating different groups differently. The important question is whether the classification or distinction has a constitutionally acceptable basis and is connected with the purpose of the law.\n\nFor this reason, Article 14 is not simply a rule saying “everyone must receive exactly the same treatment”. It is a broader constitutional guarantee against arbitrary State action and unjustified unequal treatment.', keywords:'equality law equal protection classification arbitrary state action', related:['15','16','17','18','19','21'] },
  { number:'15', title:'Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex or Place of Birth', part:'III', category:'Fundamental Rights', summary:'Article 15 is an important Fundamental Right under the Right to Equality. It prevents the State from discriminating against citizens solely on the grounds of religion, race, caste, sex or place of birth. The protection also extends to access to certain public places and facilities. Article 15 does not prohibit every form of classification or special provision: the Constitution permits specified provisions for women and children, socially and educationally backward classes, Scheduled Castes and Scheduled Tribes, and economically weaker sections, subject to constitutional conditions.', keywords:'discrimination equality religion race caste sex place of birth' },
  { number:'16', title:'Equality of Opportunity in Matters of Public Employment', part:'III', category:'Fundamental Rights', summary:'Article 16 is a Fundamental Right under the Right to Equality and deals with equality of opportunity in public employment. Article 16(1) provides equality of opportunity in matters relating to employment or appointment to offices under the State. Article 16(2) prohibits discrimination on specified grounds. The Constitution also recognises circumstances for specified residence requirements and reservation provisions, subject to the conditions in its clauses. Article 16 establishes the framework for equality of opportunity in public employment while providing for defined exceptions and special provisions.', keywords:'employment public service equality opportunity reservation' },
  { number:'17', title:'Abolition of Untouchability', part:'III', category:'Fundamental Rights', summary:'Article 17 is a Fundamental Right under the Right to Equality. It abolishes “Untouchability” and prohibits its practice in any form. Enforcing any disability arising from untouchability is an offence punishable in accordance with law. The Article gives this prohibition constitutional status and provides a foundation for legal protection against disabilities arising from the practice. Parliament has enacted laws to give effect to Article 17, including the Protection of Civil Rights Act, 1955.', keywords:'untouchability equality civil rights', related:['14','15','18','19','16','21'] },
  { number:'18', title:'Abolition of Titles', part:'III', category:'Fundamental Rights', summary:'Article 18 deals with the abolition of titles and forms part of the Right to Equality under Part III. Its purpose is to prevent the State from creating official titles that could produce artificial social distinctions. The Article allows military and academic distinctions. It also places restrictions on accepting titles and certain benefits from foreign States, subject to the terms set out in the provision.', keywords:'titles equality military academic foreign state' },
  { number:'19', title:'Protection of Certain Rights Regarding Freedom of Speech, etc.', part:'III', category:'Fundamental Rights', summary:'Article 19 is an important provision under the Right to Freedom in Part III. It protects certain freedoms of Indian citizens: speech and expression, peaceful assembly without arms, forming associations or unions or co-operative societies, movement throughout India, residing and settling in any part of India, and practising a profession or carrying on an occupation, trade or business. These freedoms are not unrestricted. The Constitution allows reasonable restrictions in specified circumstances, with different grounds for different freedoms.', content:'Article 19 is one of the important provisions under the Right to Freedom in Part III of the Indian Constitution. It protects certain freedoms of Indian citizens and provides a constitutional framework within which these freedoms can be exercised.\n\nThe Article protects freedom of speech and expression, peaceful assembly without arms, forming associations or unions or co-operative societies, free movement throughout India, residing and settling in any part of India, and practising a profession or carrying on an occupation, trade or business. These freedoms are important, but they are not expressed as completely unrestricted rights. The Constitution itself allows the State to impose reasonable restrictions in specified circumstances.\n\nThe restrictions are different for different freedoms and must be connected with the grounds specifically mentioned in Article 19. For example, freedom of speech and expression is subject to restrictions relating to matters such as the sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation and incitement to an offence.\n\nSimilarly, the right to assemble peacefully may be subject to reasonable restrictions in the interests of the sovereignty and integrity of India or public order. The freedom to form associations can also be regulated on specified constitutional grounds. The freedoms of movement and residence may be subject to reasonable restrictions in the interests of the general public or for protecting the interests of Scheduled Tribes.\n\nThe freedom to practise a profession or carry on a trade, occupation or business may also be regulated in the general public interest, including through requirements concerning professional or technical qualifications. Therefore, Article 19 establishes both individual freedoms and the constitutional framework for regulating those freedoms through specified reasonable restrictions.', keywords:'speech expression assembly association movement residence profession trade restrictions', related:['18','21','16','17','14','15'] },
  { number:'20', title:'Protection in Respect of Conviction for Offences', part:'III', category:'Fundamental Rights', summary:'Article 20 provides three important protections in criminal law. A person cannot be convicted for an act that was not an offence under the law in force when committed, or given a greater penalty retrospectively. A person cannot be prosecuted and punished more than once for the same offence. An accused person cannot be compelled to be a witness against themselves. These protections help prevent arbitrary criminal punishment and safeguard fairness in criminal proceedings.', keywords:'criminal law conviction retrospective double jeopardy self incrimination' },
  { number:'21', title:'Protection of Life and Personal Liberty', part:'III', category:'Fundamental Rights', summary:'Article 21 is one of the most important Fundamental Rights in Part III. It protects the life and personal liberty of every person and places a constitutional requirement on the State when a person may be deprived of these interests. Its wording uses “No person”, so its protection extends beyond citizens. No person may be deprived of life or personal liberty except according to procedure established by law. The Supreme Court has interpreted Article 21 in relation to aspects of a dignified life and personal liberty. Its exact scope in a particular situation depends on constitutional interpretation and the facts of the case. It is closely connected with other Fundamental Rights.', content:'Article 21 is one of the most important Fundamental Rights in Part III of the Indian Constitution. It protects the life and personal liberty of every person and places a constitutional requirement on the State when a person may be deprived of these interests. The wording of Article 21 is significant because it uses the expression “No person”. Unlike some rights in Part III that are specifically available to citizens, Article 21 protects every person. Its protection therefore extends beyond Indian citizens.\n\nThe Article states that no person shall be deprived of life or personal liberty except according to procedure established by law. This means that deprivation of life or personal liberty cannot simply be arbitrary; there must be a legally established procedure. The constitutional understanding of Article 21 has developed significantly through judicial interpretation. The protection is not limited to mere physical existence.\n\nThe Supreme Court has interpreted Article 21 in relation to various aspects of a dignified life and personal liberty, while the exact scope of individual rights depends on constitutional interpretation and the facts of each case. Article 21 is also closely connected with other Fundamental Rights.\n\nConstitutional protections relating to equality, freedoms, criminal procedure, privacy, education, legal assistance and other aspects of personal liberty can interact with Article 21 depending on the circumstances. Therefore, Article 21 provides a broad constitutional protection for life and personal liberty and requires deprivation of these interests to follow a legally established procedure.', keywords:'life liberty dignity privacy state procedure', related:['20','19','21A','22','32','18'] },
  { number:'21A', title:'Right to Education', part:'III', category:'Fundamental Rights', summary:'Article 21A establishes the Right to Education as a Fundamental Right under Part III. It requires the State to provide free and compulsory education to children between six and fourteen years of age. The provision was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002 and came into effect on 1 April 2010. Parliament enacted the Right of Children to Free and Compulsory Education Act, 2009 to give effect to this constitutional provision. Article 21A is connected with Article 45 and Article 51A(k).', content:'Article 21A establishes the Right to Education as a Fundamental Right under Part III of the Indian Constitution. It requires the State to provide free and compulsory education to all children between the ages of six and fourteen years. The provision was inserted through the Constitution (Eighty-sixth Amendment) Act, 2002. The amendment was brought into effect from 1 April 2010.\n\nWith this constitutional change, the right to elementary education for children in the specified age group became part of the Fundamental Rights framework. The words “free” and “compulsory” are important in Article 21A. Free education means that a child within the specified age group should not be prevented from receiving the prescribed education because of fees or expenses that would prevent access to education.\n\nCompulsory education refers to the State’s responsibility to ensure that children in the specified age group receive education in accordance with the legal framework. Article 21A does not itself describe every operational detail of how education must be provided. Instead, it states that education shall be provided in such manner as the State may, by law, determine. Parliament enacted the Right of Children to Free and Compulsory Education Act, 2009 to give effect to this constitutional provision.\n\nThe Act came into force on 1 April 2010. The constitutional provision is specifically concerned with children from six to fourteen years of age. It is therefore important to distinguish Article 21A from other constitutional provisions concerning early childhood care, education and broader educational policy. Article 21A is also connected with Article 45 and Article 51A(k).\n\nThe Eighty-sixth Amendment changed Article 45 to focus on early childhood care and education for children below six years and added a fundamental duty concerning educational opportunities for children between six and fourteen years. Therefore, Article 21A provides a constitutional foundation for free and compulsory education for children in the specified age group and places responsibility on the State to implement this right through the legal framework.', keywords:'education children free compulsory 86th amendment', related:['21','32','18','19','22','14'] },
  { number:'22', title:'Protection against Arrest and Detention in Certain Cases', part:'III', category:'Fundamental Rights', summary:'Article 22 provides constitutional safeguards against arbitrary arrest and detention in certain cases. For an ordinary arrest, a person must be informed of the grounds of arrest and must not be denied the right to consult and be defended by a legal practitioner of their choice. A person arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours, excluding travel time. Article 22 also deals with preventive detention and contains separate safeguards for it. The exact rights and procedures depend on the Constitution, relevant law and the facts of a case.', keywords:'arrest detention magistrate preventive detention legal practitioner', related:['21','21A','23','19','14','18'] },
  { number:'23', title:'Prohibition of Traffic in Human Beings and Forced Labour', part:'III', category:'Right against Exploitation', summary:'Article 23 is a Fundamental Right under the Right against Exploitation. It protects people from human trafficking, begar and other similar forms of forced labour. Any violation is an offence punishable according to law. The State may impose compulsory service for public purposes, but cannot discriminate solely on the grounds of religion, race, caste or class while doing so.', keywords:'trafficking forced labour begar exploitation' },
  { number:'24', title:'Prohibition of Employment of Children in Factories, etc.', part:'III', category:'Right against Exploitation', summary:'Article 24 prohibits the employment of children below fourteen years of age in factories, mines and other hazardous employment. It is part of the Right against Exploitation under Part III and aims to protect children from dangerous working conditions that may threaten their health, safety and development. It should be read alongside applicable child labour laws, which may provide additional protections and restrictions.', keywords:'children employment factories mines hazardous exploitation' },
  { number:'32', title:'Right to Constitutional Remedies', part:'III', category:'Fundamental Rights', summary:'Article 32 provides a constitutional remedy for enforcing Fundamental Rights. It gives a person the right to approach the Supreme Court through appropriate proceedings when a Fundamental Right guaranteed by Part III needs to be enforced. Under Article 32(2), the Supreme Court can issue directions, orders and writs. The Constitution identifies five writs: habeas corpus, mandamus, prohibition, quo warranto and certiorari. Article 32 therefore creates an important connection between Fundamental Rights and judicial remedies for their enforcement.', content:'Article 32 is a provision in Part III of the Indian Constitution that provides a constitutional remedy for the enforcement of Fundamental Rights. It gives a person the right to approach the Supreme Court through appropriate proceedings when a Fundamental Right guaranteed by Part III needs to be enforced. Therefore, Article 32 is not merely about declaring Fundamental Rights; it provides a constitutional mechanism for seeking their enforcement.\n\nUnder Article 32(2), the Supreme Court can issue directions, orders and writs for the enforcement of Fundamental Rights. The Constitution specifically mentions five types of writs: habeas corpus, mandamus, prohibition, quo warranto and certiorari. The five writs have different purposes. Habeas corpus is associated with protection against unlawful detention. Mandamus generally concerns the performance of a public legal duty.\n\nProhibition is generally used to prevent a judicial or quasi-judicial authority from proceeding beyond its jurisdiction. Certiorari is generally concerned with reviewing the legality of proceedings or orders of a lower judicial or quasi-judicial authority. Quo warranto concerns the legal authority of a person to hold a public office.\n\nArticle 32(3) provides that Parliament may by law empower another court to exercise some or all of the powers that the Supreme Court can exercise under Article 32(2), within that court’s local jurisdiction. Article 32(4) states that the right guaranteed under Article 32 shall not be suspended except as otherwise provided by the Constitution. Article 32 therefore creates an important constitutional connection between Fundamental Rights and judicial remedies for their enforcement.', keywords:'constitutional remedies supreme court writs fundamental rights' },
  { number:'51A', title:'Fundamental Duties', part:'IVA', category:'Fundamental Duties', summary:'Article 51A lists the Fundamental Duties of citizens of India. These duties encourage citizens to respect the Constitution, protect the country’s unity, promote harmony, preserve cultural heritage, protect the environment, develop scientific temper, safeguard public property and support children’s education. Fundamental Duties were added through the 42nd Constitutional Amendment in 1976. Clause (k), concerning educational opportunities for children between six and fourteen years, was added by the 86th Amendment in 2002. Their enforceability depends on the relevant constitutional provisions and applicable laws.', keywords:'fundamental duties citizens 42nd amendment environment' },
  { number:'79', title:'Constitution of Parliament', part:'V', category:'Union Legislature', summary:'Article 79 is the first provision in Chapter II of Part V dealing with Parliament. It establishes Parliament for the Union as consisting of the President, the Council of States (Rajya Sabha) and the House of the People (Lok Sabha). The President is included as a component of Parliament but is not a member of either House. Articles 80 and 81 deal with the composition of the two Houses. Article 79 provides the basic constitutional foundation for understanding the Parliament of India.', keywords:'parliament president rajya sabha lok sabha' },
  { number:'105', title:'Powers, Privileges and Immunities of Parliament and its Members', part:'V', category:'Union Legislature', summary:'Article 105 deals with the powers, privileges and immunities of Parliament, its Houses, members and committees. It provides for freedom of speech in Parliament subject to the Constitution and parliamentary procedure, and protections for members relating to things said or votes given in Parliament or its committees. Parliament may define other powers, privileges and immunities by law. These privileges enable Parliament and its members to perform constitutional functions and do not create a general exemption from all laws or judicial processes.', keywords:'parliament privileges immunity freedom of speech' },
  { number:'124', title:'Establishment and Constitution of the Supreme Court', part:'V', category:'Union Judiciary', summary:'Article 124 establishes the Supreme Court of India and sets out constitutional provisions concerning its composition and judges. The Court consists of the Chief Justice of India and other Judges; Parliament may by law prescribe a larger number. The Article provides qualifications for appointment, including requirements relating to experience as a High Court Judge, experience as an advocate, or being a distinguished jurist in the President’s opinion. It also covers tenure, resignation and the constitutional procedure for removal of a Judge.', keywords:'supreme court judges appointment tenure removal judiciary' },
  { number:'153', title:'Governors of States', part:'VI', category:'State Executive', summary:'Article 153 is part of Part VI of the Constitution, which deals with the States. It provides for the constitutional office of the Governor and states that there shall be a Governor for each State. It also allows the same person to be appointed as Governor for two or more States. Other provisions cover appointment, term, qualifications, powers and conditions of office. Article 153 provides the basic constitutional foundation for the office of Governor in the States.', keywords:'governor states state executive' },
  { number:'194', title:'Powers, Privileges and Immunities of State Legislatures and their Members', part:'VI', category:'State Legislature', summary:'Article 194 deals with powers, privileges and immunities of State Legislatures, their members and committees. It provides for freedom of speech in a State Legislature subject to the Constitution and legislative procedure, and constitutional protection for members for things said or votes given in the Legislature or a committee. Other privileges may be defined by State Legislature law. It corresponds broadly to Article 105, which deals with Parliament. These privileges operate within the constitutional framework and are not unlimited immunity from judicial review or other constitutional limitations.', keywords:'state legislature privileges immunity legislative speech' },
  { number:'352', title:'Proclamation of Emergency', part:'XVIII', category:'Emergency Provisions', summary:'Article 352 deals with a Proclamation of Emergency at the national level. It applies when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion. The President may issue a Proclamation when constitutional conditions are satisfied, after the Union Cabinet’s decision is communicated in writing. The Proclamation must be laid before both Houses of Parliament and requires parliamentary approval within the period specified in the Constitution. Article 352 sets out a constitutional procedure and requirements for the Executive and Parliament.', keywords:'emergency war external aggression armed rebellion president parliament' },

 {
    "id": "25",
    "articleNumber": "Article 25",
    "title": {
      "en": "Freedom of Conscience and Free Profession, Practice and Propagation of Religion",
      "mr": "धर्मस्वातंत्र्याचा अधिकार"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "The Constitution guarantees freedom of conscience and the right freely to profess, practise and propagate religion, subject to public order, morality, health and the other provisions of Part III. It also permits laws regulating secular activities associated with religious practice and certain social-welfare reforms.",
      "mr": "संविधान सार्वजनिक सुव्यवस्था, नैतिकता, आरोग्य आणि भाग III मधील इतर तरतुदींच्या अधीन राहून प्रत्येक व्यक्तीला विवेकस्वातंत्र्य तसेच धर्म मानणे, आचरण करणे आणि प्रचार करणे यांचा अधिकार देते. धार्मिक आचरणाशी संबंधित लौकिक बाबींचे नियमन आणि सामाजिक सुधारणा यांसाठी कायदे करण्याचीही तरतूद आहे.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 25 protects religious freedom, subject to constitutional limits and laws supporting public order, morality, health and social reform.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe freedom described here includes an individual's inner freedom of belief and outward religious expression. The Constitution does not treat every religious activity as immune from regulation: the text expressly allows measures relating to public order, morality, health and social welfare, and also refers to the other provisions of Part III. The distinction between religious matters and secular activities associated with religious practice can matter when legislation or public administration is examined. Article 25 should therefore be understood as a meaningful freedom within a constitutional framework, rather than an unlimited permission. Its application to a particular practice may depend on the facts, other constitutional rights and the relevant law. This article is often studied alongside Articles 26 to 28, which address related aspects of religious freedom and institutions.",
      "mr": "कलम 25 धार्मिक स्वातंत्र्याची हमी देते; मात्र हे स्वातंत्र्य घटनात्मक मर्यादा आणि सामाजिक सुधारणांसाठी केलेल्या कायद्यांच्या अधीन आहे.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nया कलमात व्यक्तीच्या अंतर्मनातील श्रद्धा आणि धर्माशी संबंधित बाह्य आचरण या दोन्ही बाबींचा विचार होतो. मात्र धार्मिक स्वातंत्र्य अमर्याद नाही. कलमाच्या शब्दरचनेत सार्वजनिक सुव्यवस्था, नैतिकता, आरोग्य आणि भाग III मधील इतर अधिकारांचा संदर्भ आहे. धार्मिक आचरणाशी संबंधित लौकिक बाबींचे नियमन किंवा सामाजिक कल्याणासाठी कायदे करण्यास घटनात्मक चौकट परवानगी देते. त्यामुळे कलम 25 म्हणजे कोणत्याही परिस्थितीत कोणताही धार्मिक व्यवहार निर्बंधांशिवाय करता येतो, असा अर्थ होत नाही. एखाद्या विशिष्ट आचरणाला संरक्षण मिळते का हे परिस्थिती, इतर घटनात्मक अधिकार आणि लागू कायदे यांवर अवलंबून असू शकते. धर्मस्वातंत्र्याची व्यापक रचना समजण्यासाठी कलम 25 सोबत कलम 26 ते 28 चा अभ्यास करणे उपयुक्त ठरते."
    },
    "verySimple": {
      "en": "Article 25 protects religious freedom, subject to constitutional limits and laws supporting public order, morality, health and social reform.",
      "mr": "कलम 25 धार्मिक स्वातंत्र्याची हमी देते; मात्र हे स्वातंत्र्य घटनात्मक मर्यादा आणि सामाजिक सुधारणांसाठी केलेल्या कायद्यांच्या अधीन आहे."
    },
    "example": {
      "en": "Suppose a person chooses a religion or performs a religious practice. Article 25 may protect that freedom, subject to the stated constitutional limits and applicable law.",
      "mr": "एखादी व्यक्ती धर्म स्वीकारते किंवा धार्मिक आचरण करते, तेव्हा कलम 25 त्या स्वातंत्र्याचे संरक्षण करू शकते; मात्र घटनात्मक मर्यादा आणि लागू कायदे यांचा विचार आवश्यक आहे."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 25 of the Indian Constitution?",
          "content": "Article 25 protects religious freedom, subject to constitutional limits and laws supporting public order, morality, health and social reform.\n\nThe freedom described here includes an individual's inner freedom of belief and outward religious expression. The Constitution does not treat every religious activity as immune from regulation: the text expressly allows measures relating to public order, morality, health and social welfare, and also refers to the other provisions of Part III. The distinction between religious matters and secular activities associated with religious practice can matter when legislation or public administration is examined. Article 25 should therefore be understood as a meaningful freedom within a constitutional framework, rather than an unlimited permission. Its application to a particular practice may depend on the facts, other constitutional rights and the relevant law. This article is often studied alongside Articles 26 to 28, which address related aspects of religious freedom and institutions."
        },
        {
          "heading": "Why is Article 25 important?",
          "content": "Article 25 protects religious freedom, subject to constitutional limits and laws supporting public order, morality, health and social reform.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 25",
          "content": "Suppose a person chooses a religion or performs a religious practice. Article 25 may protect that freedom, subject to the stated constitutional limits and applicable law.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 25 म्हणजे काय?",
          "content": "कलम 25 धार्मिक स्वातंत्र्याची हमी देते; मात्र हे स्वातंत्र्य घटनात्मक मर्यादा आणि सामाजिक सुधारणांसाठी केलेल्या कायद्यांच्या अधीन आहे.\n\nया कलमात व्यक्तीच्या अंतर्मनातील श्रद्धा आणि धर्माशी संबंधित बाह्य आचरण या दोन्ही बाबींचा विचार होतो. मात्र धार्मिक स्वातंत्र्य अमर्याद नाही. कलमाच्या शब्दरचनेत सार्वजनिक सुव्यवस्था, नैतिकता, आरोग्य आणि भाग III मधील इतर अधिकारांचा संदर्भ आहे. धार्मिक आचरणाशी संबंधित लौकिक बाबींचे नियमन किंवा सामाजिक कल्याणासाठी कायदे करण्यास घटनात्मक चौकट परवानगी देते. त्यामुळे कलम 25 म्हणजे कोणत्याही परिस्थितीत कोणताही धार्मिक व्यवहार निर्बंधांशिवाय करता येतो, असा अर्थ होत नाही. एखाद्या विशिष्ट आचरणाला संरक्षण मिळते का हे परिस्थिती, इतर घटनात्मक अधिकार आणि लागू कायदे यांवर अवलंबून असू शकते. धर्मस्वातंत्र्याची व्यापक रचना समजण्यासाठी कलम 25 सोबत कलम 26 ते 28 चा अभ्यास करणे उपयुक्त ठरते."
        },
        {
          "heading": "कलम 25 महत्त्वाचे का आहे?",
          "content": "कलम 25 धार्मिक स्वातंत्र्याची हमी देते; मात्र हे स्वातंत्र्य घटनात्मक मर्यादा आणि सामाजिक सुधारणांसाठी केलेल्या कायद्यांच्या अधीन आहे.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 25 चे उदाहरण",
          "content": "एखादी व्यक्ती धर्म स्वीकारते किंवा धार्मिक आचरण करते, तेव्हा कलम 25 त्या स्वातंत्र्याचे संरक्षण करू शकते; मात्र घटनात्मक मर्यादा आणि लागू कायदे यांचा विचार आवश्यक आहे.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 25",
      "Article 25 of Indian Constitution",
      "Article 25 explained",
      "कलम 25",
      "कलम 25 भारतीय संविधान",
      "Freedom of Conscience and Free Profession, Practice and Propagation of Religion",
      "धर्मस्वातंत्र्याचा अधिकार"
    ],
    "relatedIds": [
      "26",
      "27",
      "28"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "26",
    "articleNumber": "Article 26",
    "title": {
      "en": "Freedom to Manage Religious Affairs",
      "mr": "धार्मिक संस्थांचे व्यवस्थापन करण्याचा अधिकार"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Subject to public order, morality and health, every religious denomination or section thereof has the right to establish and maintain institutions for religious and charitable purposes, manage its affairs in matters of religion, own and acquire property, and administer such property in accordance with law.",
      "mr": "सार्वजनिक सुव्यवस्था, नैतिकता आणि आरोग्य यांच्या अधीन राहून प्रत्येक धार्मिक पंथ किंवा त्याचा विभाग धार्मिक व धर्मादाय संस्था स्थापन करण्याचा, धार्मिक बाबींचे व्यवस्थापन करण्याचा, मालमत्ता मिळवण्याचा आणि कायद्यानुसार तिचे प्रशासन करण्याचा अधिकार राखतो.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 26 protects specified institutional rights of religious denominations, while administration of property remains subject to law.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe provision is concerned with the rights of religious denominations or sections of them, not simply with individual belief. Its clauses address the ability to establish institutions, manage religious affairs, hold and acquire property, and administer property in accordance with law. The wording also places these rights under the conditions of public order, morality and health. It is useful to distinguish the management of religious matters from the administration of property and other activities that may be regulated by law. Article 26 forms part of the constitutional balance between institutional religious autonomy and the wider legal framework. Its meaning should be read with Article 25 and relevant legislation and judicial interpretation, rather than assuming that every institutional decision is beyond regulation.",
      "mr": "कलम 26 धार्मिक पंथांच्या काही संस्थात्मक अधिकारांचे संरक्षण करते; संस्थांच्या मालमत्तेचे प्रशासन कायद्याच्या अधीन असते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nहे कलम व्यक्तीच्या श्रद्धेपेक्षा धार्मिक पंथ किंवा त्याच्या विभागाच्या संस्थात्मक अधिकारांशी संबंधित आहे. धार्मिक आणि धर्मादाय संस्था स्थापन करणे, धार्मिक बाबींचे व्यवस्थापन करणे, मालमत्ता मिळवणे आणि कायद्यानुसार मालमत्तेचे प्रशासन करणे अशा बाबींचा त्यात समावेश आहे. या अधिकारांवर सार्वजनिक सुव्यवस्था, नैतिकता आणि आरोग्य यांची घटनात्मक मर्यादा आहे. धार्मिक बाबींचे व्यवस्थापन आणि मालमत्ता किंवा इतर लौकिक व्यवहारांचे प्रशासन यातील फरक समजणे महत्त्वाचे आहे. कलम 26 हे धार्मिक संस्थांना स्वायत्तता देणाऱ्या घटनात्मक चौकटीचा भाग आहे, पण प्रत्येक संस्थात्मक निर्णय कायद्याच्या नियंत्रणापलीकडे असतो असे नाही. कलम 25, संबंधित कायदे आणि न्यायालयीन निर्णयांच्या संदर्भात त्याचा अर्थ समजावा."
    },
    "verySimple": {
      "en": "Article 26 protects specified institutional rights of religious denominations, while administration of property remains subject to law.",
      "mr": "कलम 26 धार्मिक पंथांच्या काही संस्थात्मक अधिकारांचे संरक्षण करते; संस्थांच्या मालमत्तेचे प्रशासन कायद्याच्या अधीन असते."
    },
    "example": {
      "en": "A religious denomination may establish an institution and manage its religious affairs, subject to the constitutional limits and applicable law.",
      "mr": "एखादा धार्मिक पंथ संस्था स्थापन करून धार्मिक बाबींचे व्यवस्थापन करू शकतो; हे अधिकार घटनात्मक मर्यादा आणि लागू कायद्यांच्या अधीन आहेत."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 26 of the Indian Constitution?",
          "content": "Article 26 protects specified institutional rights of religious denominations, while administration of property remains subject to law.\n\nThe provision is concerned with the rights of religious denominations or sections of them, not simply with individual belief. Its clauses address the ability to establish institutions, manage religious affairs, hold and acquire property, and administer property in accordance with law. The wording also places these rights under the conditions of public order, morality and health. It is useful to distinguish the management of religious matters from the administration of property and other activities that may be regulated by law. Article 26 forms part of the constitutional balance between institutional religious autonomy and the wider legal framework. Its meaning should be read with Article 25 and relevant legislation and judicial interpretation, rather than assuming that every institutional decision is beyond regulation."
        },
        {
          "heading": "Why is Article 26 important?",
          "content": "Article 26 protects specified institutional rights of religious denominations, while administration of property remains subject to law.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 26",
          "content": "A religious denomination may establish an institution and manage its religious affairs, subject to the constitutional limits and applicable law.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 26 म्हणजे काय?",
          "content": "कलम 26 धार्मिक पंथांच्या काही संस्थात्मक अधिकारांचे संरक्षण करते; संस्थांच्या मालमत्तेचे प्रशासन कायद्याच्या अधीन असते.\n\nहे कलम व्यक्तीच्या श्रद्धेपेक्षा धार्मिक पंथ किंवा त्याच्या विभागाच्या संस्थात्मक अधिकारांशी संबंधित आहे. धार्मिक आणि धर्मादाय संस्था स्थापन करणे, धार्मिक बाबींचे व्यवस्थापन करणे, मालमत्ता मिळवणे आणि कायद्यानुसार मालमत्तेचे प्रशासन करणे अशा बाबींचा त्यात समावेश आहे. या अधिकारांवर सार्वजनिक सुव्यवस्था, नैतिकता आणि आरोग्य यांची घटनात्मक मर्यादा आहे. धार्मिक बाबींचे व्यवस्थापन आणि मालमत्ता किंवा इतर लौकिक व्यवहारांचे प्रशासन यातील फरक समजणे महत्त्वाचे आहे. कलम 26 हे धार्मिक संस्थांना स्वायत्तता देणाऱ्या घटनात्मक चौकटीचा भाग आहे, पण प्रत्येक संस्थात्मक निर्णय कायद्याच्या नियंत्रणापलीकडे असतो असे नाही. कलम 25, संबंधित कायदे आणि न्यायालयीन निर्णयांच्या संदर्भात त्याचा अर्थ समजावा."
        },
        {
          "heading": "कलम 26 महत्त्वाचे का आहे?",
          "content": "कलम 26 धार्मिक पंथांच्या काही संस्थात्मक अधिकारांचे संरक्षण करते; संस्थांच्या मालमत्तेचे प्रशासन कायद्याच्या अधीन असते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 26 चे उदाहरण",
          "content": "एखादा धार्मिक पंथ संस्था स्थापन करून धार्मिक बाबींचे व्यवस्थापन करू शकतो; हे अधिकार घटनात्मक मर्यादा आणि लागू कायद्यांच्या अधीन आहेत.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 26",
      "Article 26 of Indian Constitution",
      "Article 26 explained",
      "कलम 26",
      "कलम 26 भारतीय संविधान",
      "Freedom to Manage Religious Affairs",
      "धार्मिक संस्थांचे व्यवस्थापन करण्याचा अधिकार"
    ],
    "relatedIds": [
      "25",
      "27",
      "28"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "27",
    "articleNumber": "Article 27",
    "title": {
      "en": "Freedom from Taxation for Promotion of a Religion",
      "mr": "विशिष्ट धर्माच्या प्रचारासाठी कर देण्यासंबंधी स्वातंत्र्य"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "No person shall be compelled to pay any tax, the proceeds of which are specifically appropriated for the payment of expenses for the promotion or maintenance of any particular religion or religious denomination.",
      "mr": "कोणत्याही व्यक्तीला विशिष्ट धर्म किंवा धार्मिक पंथाच्या प्रचारासाठी अथवा देखभालीसाठी खर्च करण्याकरिता खास विनियोजित केलेला कर भरण्यास बाध्य करता येणार नाही.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 27 concerns taxes specifically appropriated to promote or maintain a particular religion or denomination; it is not a blanket exemption from every tax involving religious institutions.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe wording of Article 27 focuses on a tax whose proceeds are specifically appropriated for expenses promoting or maintaining a particular religion or religious denomination. The constitutional question is about the purpose and earmarking of the tax, not simply whether a taxpayer or recipient has a religious connection. The provision should not be confused with every fee, tax or general public expenditure that may incidentally benefit religious places or communities. Understanding the distinction between a specifically allocated tax and general public administration is important when studying this Article. Article 27 is part of the wider set of provisions dealing with religious freedom and should be read in the context of Articles 25 to 28 and the applicable legal framework.",
      "mr": "कलम 27 विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास विनियोजित करांशी संबंधित आहे; धार्मिक संस्थांशी संबंधित प्रत्येक करातून सार्वत्रिक सूट देणारे हे कलम नाही.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 27 च्या शब्दरचनेत विशिष्ट धर्म किंवा धार्मिक पंथाच्या प्रचारासाठी अथवा देखभालीच्या खर्चाकरिता खास विनियोजित केलेल्या कराचा उल्लेख आहे. त्यामुळे या कलमाचा विचार करताना कराचा उद्देश आणि त्यातून मिळणाऱ्या निधीचे विशिष्ट विनियोजन महत्त्वाचे ठरते; केवळ करदाता किंवा लाभार्थी धार्मिक संस्थेशी संबंधित आहे म्हणून प्रश्न निर्माण होतो असे नाही. प्रत्येक कर, शुल्क किंवा सर्वसाधारण सार्वजनिक खर्चातून धार्मिक स्थळांना अप्रत्यक्ष लाभ मिळतो म्हणून तो कलम 27 अंतर्गत येतो असे गृहीत धरता येत नाही. खास धर्मासाठी निधी राखून ठेवणारा कर आणि सर्वसाधारण प्रशासनातील खर्च यातील फरक समजणे आवश्यक आहे. कलम 27 चा अभ्यास कलम 25 ते 28 आणि लागू कायद्यांच्या संदर्भात करावा."
    },
    "verySimple": {
      "en": "Article 27 concerns taxes specifically appropriated to promote or maintain a particular religion or denomination; it is not a blanket exemption from every tax involving religious institutions.",
      "mr": "कलम 27 विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास विनियोजित करांशी संबंधित आहे; धार्मिक संस्थांशी संबंधित प्रत्येक करातून सार्वत्रिक सूट देणारे हे कलम नाही."
    },
    "example": {
      "en": "A tax specifically earmarked to fund promotion or maintenance of a particular religion raises the issue addressed by Article 27.",
      "mr": "विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास निधी राखून ठेवणारा कर कलम 27 च्या तरतुदींच्या संदर्भात तपासला जाऊ शकतो."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 27 of the Indian Constitution?",
          "content": "Article 27 concerns taxes specifically appropriated to promote or maintain a particular religion or denomination; it is not a blanket exemption from every tax involving religious institutions.\n\nThe wording of Article 27 focuses on a tax whose proceeds are specifically appropriated for expenses promoting or maintaining a particular religion or religious denomination. The constitutional question is about the purpose and earmarking of the tax, not simply whether a taxpayer or recipient has a religious connection. The provision should not be confused with every fee, tax or general public expenditure that may incidentally benefit religious places or communities. Understanding the distinction between a specifically allocated tax and general public administration is important when studying this Article. Article 27 is part of the wider set of provisions dealing with religious freedom and should be read in the context of Articles 25 to 28 and the applicable legal framework."
        },
        {
          "heading": "Why is Article 27 important?",
          "content": "Article 27 concerns taxes specifically appropriated to promote or maintain a particular religion or denomination; it is not a blanket exemption from every tax involving religious institutions.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 27",
          "content": "A tax specifically earmarked to fund promotion or maintenance of a particular religion raises the issue addressed by Article 27.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 27 म्हणजे काय?",
          "content": "कलम 27 विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास विनियोजित करांशी संबंधित आहे; धार्मिक संस्थांशी संबंधित प्रत्येक करातून सार्वत्रिक सूट देणारे हे कलम नाही.\n\nकलम 27 च्या शब्दरचनेत विशिष्ट धर्म किंवा धार्मिक पंथाच्या प्रचारासाठी अथवा देखभालीच्या खर्चाकरिता खास विनियोजित केलेल्या कराचा उल्लेख आहे. त्यामुळे या कलमाचा विचार करताना कराचा उद्देश आणि त्यातून मिळणाऱ्या निधीचे विशिष्ट विनियोजन महत्त्वाचे ठरते; केवळ करदाता किंवा लाभार्थी धार्मिक संस्थेशी संबंधित आहे म्हणून प्रश्न निर्माण होतो असे नाही. प्रत्येक कर, शुल्क किंवा सर्वसाधारण सार्वजनिक खर्चातून धार्मिक स्थळांना अप्रत्यक्ष लाभ मिळतो म्हणून तो कलम 27 अंतर्गत येतो असे गृहीत धरता येत नाही. खास धर्मासाठी निधी राखून ठेवणारा कर आणि सर्वसाधारण प्रशासनातील खर्च यातील फरक समजणे आवश्यक आहे. कलम 27 चा अभ्यास कलम 25 ते 28 आणि लागू कायद्यांच्या संदर्भात करावा."
        },
        {
          "heading": "कलम 27 महत्त्वाचे का आहे?",
          "content": "कलम 27 विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास विनियोजित करांशी संबंधित आहे; धार्मिक संस्थांशी संबंधित प्रत्येक करातून सार्वत्रिक सूट देणारे हे कलम नाही.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 27 चे उदाहरण",
          "content": "विशिष्ट धर्माच्या प्रचारासाठी किंवा देखभालीसाठी खास निधी राखून ठेवणारा कर कलम 27 च्या तरतुदींच्या संदर्भात तपासला जाऊ शकतो.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 27",
      "Article 27 of Indian Constitution",
      "Article 27 explained",
      "कलम 27",
      "कलम 27 भारतीय संविधान",
      "Freedom from Taxation for Promotion of a Religion",
      "विशिष्ट धर्माच्या प्रचारासाठी कर देण्यासंबंधी स्वातंत्र्य"
    ],
    "relatedIds": [
      "25",
      "26",
      "28"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "28",
    "articleNumber": "Article 28",
    "title": {
      "en": "Freedom as to Attendance at Religious Instruction or Worship in Certain Educational Institutions",
      "mr": "काही शैक्षणिक संस्थांमधील धार्मिक शिक्षण व उपासनेबाबत स्वातंत्र्य"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Article 28 addresses religious instruction and attendance at religious worship in educational institutions. It prohibits religious instruction in institutions wholly maintained out of State funds, subject to the constitutional exception for institutions established under an endowment or trust requiring such instruction. It also protects consent in specified institutions receiving State aid or recognition.",
      "mr": "कलम 28 शैक्षणिक संस्थांमधील धार्मिक शिक्षण आणि धार्मिक उपासनेतील सहभाग याबाबत तरतुदी करते. राज्याच्या निधीतून पूर्णपणे चालवल्या जाणाऱ्या संस्थांमध्ये धार्मिक शिक्षण देण्यास मनाई आहे; मात्र धार्मिक शिक्षणाची अट असलेल्या दान किंवा विश्वस्त निधीतून स्थापन संस्थेसाठी घटनात्मक अपवाद आहे. राज्याची मदत किंवा मान्यता असलेल्या काही संस्थांमध्ये सहभागासाठी संमतीचे संरक्षणही आहे.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 28 sets constitutional rules on religious instruction in educational institutions and consent to participation in specified settings.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe Article differentiates between types of educational institutions and the circumstances in which religious instruction or worship may take place. The constitutional text includes a specific exception for institutions established under an endowment or trust that requires religious instruction, and it sets consent protections in institutions receiving State aid or recognition. These distinctions mean that the Article should not be summarized as a universal ban on all religious teaching in every school. Instead, its clauses create rules based on the institution's funding, legal character and the participation of students. When applying the provision, the particular clause and institutional circumstances must be identified. Article 28 is commonly studied with Articles 25, 26, 29 and 30 to understand constitutional protections relating to religion and education.",
      "mr": "कलम 28 शैक्षणिक संस्थांतील धार्मिक शिक्षणाबाबत नियम ठरवते आणि काही परिस्थितींमध्ये धार्मिक उपासनेत सहभागासाठी संमतीचे संरक्षण करते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nया कलमात शैक्षणिक संस्थांचे प्रकार आणि धार्मिक शिक्षण किंवा उपासनेत सहभागाची परिस्थिती यानुसार वेगवेगळ्या तरतुदी आहेत. धार्मिक शिक्षणाची अट असलेल्या दान किंवा विश्वस्त निधीतून स्थापन संस्थेसाठी विशिष्ट घटनात्मक अपवाद आहे. राज्याची मदत किंवा मान्यता असलेल्या संस्थांमध्ये धार्मिक शिक्षण किंवा उपासनेत सहभागासाठी संमतीशी संबंधित संरक्षणही दिले आहे. त्यामुळे प्रत्येक शाळेत सर्व प्रकारचे धार्मिक शिक्षण पूर्णपणे निषिद्ध आहे, असा सरसकट अर्थ कलम 28 चा होत नाही. संस्थेचा निधी, तिचे कायदेशीर स्वरूप आणि विद्यार्थ्यांचा सहभाग यांचा संदर्भ पाहावा लागतो. संबंधित परिस्थितीत कलमातील कोणती तरतूद लागू होते हे ओळखणे महत्त्वाचे आहे. कलम 25, 26, 29 आणि 30 सोबत अभ्यास केल्यास धर्म आणि शिक्षणाशी संबंधित घटनात्मक रचना समजते."
    },
    "verySimple": {
      "en": "Article 28 sets constitutional rules on religious instruction in educational institutions and consent to participation in specified settings.",
      "mr": "कलम 28 शैक्षणिक संस्थांतील धार्मिक शिक्षणाबाबत नियम ठरवते आणि काही परिस्थितींमध्ये धार्मिक उपासनेत सहभागासाठी संमतीचे संरक्षण करते."
    },
    "example": {
      "en": "Students in a covered institution cannot be compelled to participate in religious instruction or worship where Article 28 requires consent.",
      "mr": "कलम 28 लागू असलेल्या संस्थेत ज्या परिस्थितीत संमती आवश्यक आहे, त्या परिस्थितीत विद्यार्थ्यांना धार्मिक शिक्षण किंवा उपासनेत सहभागी होण्यास बाध्य करता येत नाही."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 28 of the Indian Constitution?",
          "content": "Article 28 sets constitutional rules on religious instruction in educational institutions and consent to participation in specified settings.\n\nThe Article differentiates between types of educational institutions and the circumstances in which religious instruction or worship may take place. The constitutional text includes a specific exception for institutions established under an endowment or trust that requires religious instruction, and it sets consent protections in institutions receiving State aid or recognition. These distinctions mean that the Article should not be summarized as a universal ban on all religious teaching in every school. Instead, its clauses create rules based on the institution's funding, legal character and the participation of students. When applying the provision, the particular clause and institutional circumstances must be identified. Article 28 is commonly studied with Articles 25, 26, 29 and 30 to understand constitutional protections relating to religion and education."
        },
        {
          "heading": "Why is Article 28 important?",
          "content": "Article 28 sets constitutional rules on religious instruction in educational institutions and consent to participation in specified settings.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 28",
          "content": "Students in a covered institution cannot be compelled to participate in religious instruction or worship where Article 28 requires consent.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 28 म्हणजे काय?",
          "content": "कलम 28 शैक्षणिक संस्थांतील धार्मिक शिक्षणाबाबत नियम ठरवते आणि काही परिस्थितींमध्ये धार्मिक उपासनेत सहभागासाठी संमतीचे संरक्षण करते.\n\nया कलमात शैक्षणिक संस्थांचे प्रकार आणि धार्मिक शिक्षण किंवा उपासनेत सहभागाची परिस्थिती यानुसार वेगवेगळ्या तरतुदी आहेत. धार्मिक शिक्षणाची अट असलेल्या दान किंवा विश्वस्त निधीतून स्थापन संस्थेसाठी विशिष्ट घटनात्मक अपवाद आहे. राज्याची मदत किंवा मान्यता असलेल्या संस्थांमध्ये धार्मिक शिक्षण किंवा उपासनेत सहभागासाठी संमतीशी संबंधित संरक्षणही दिले आहे. त्यामुळे प्रत्येक शाळेत सर्व प्रकारचे धार्मिक शिक्षण पूर्णपणे निषिद्ध आहे, असा सरसकट अर्थ कलम 28 चा होत नाही. संस्थेचा निधी, तिचे कायदेशीर स्वरूप आणि विद्यार्थ्यांचा सहभाग यांचा संदर्भ पाहावा लागतो. संबंधित परिस्थितीत कलमातील कोणती तरतूद लागू होते हे ओळखणे महत्त्वाचे आहे. कलम 25, 26, 29 आणि 30 सोबत अभ्यास केल्यास धर्म आणि शिक्षणाशी संबंधित घटनात्मक रचना समजते."
        },
        {
          "heading": "कलम 28 महत्त्वाचे का आहे?",
          "content": "कलम 28 शैक्षणिक संस्थांतील धार्मिक शिक्षणाबाबत नियम ठरवते आणि काही परिस्थितींमध्ये धार्मिक उपासनेत सहभागासाठी संमतीचे संरक्षण करते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 28 चे उदाहरण",
          "content": "कलम 28 लागू असलेल्या संस्थेत ज्या परिस्थितीत संमती आवश्यक आहे, त्या परिस्थितीत विद्यार्थ्यांना धार्मिक शिक्षण किंवा उपासनेत सहभागी होण्यास बाध्य करता येत नाही.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 28",
      "Article 28 of Indian Constitution",
      "Article 28 explained",
      "कलम 28",
      "कलम 28 भारतीय संविधान",
      "Freedom as to Attendance at Religious Instruction or Worship in Certain Educational Institutions",
      "काही शैक्षणिक संस्थांमधील धार्मिक शिक्षण व उपासनेबाबत स्वातंत्र्य"
    ],
    "relatedIds": [
      "25",
      "26",
      "29",
      "30"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "29",
    "articleNumber": "Article 29",
    "title": {
      "en": "Protection of Interests of Minorities",
      "mr": "अल्पसंख्याकांच्या भाषा, लिपी व संस्कृतीचे संरक्षण"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Article 29 protects the right of any section of citizens having a distinct language, script or culture to conserve it. It also prohibits denial of admission to State-maintained or State-aided educational institutions on grounds only of religion, race, caste, language or any of them, as provided in clause (2).",
      "mr": "कलम 29 विशिष्ट भाषा, लिपी किंवा संस्कृती असलेल्या नागरिकांच्या कोणत्याही समूहाला ती जतन करण्याचा अधिकार देते. तसेच कलम 29(2) नुसार राज्य चालवत असलेल्या किंवा राज्याच्या मदतीने चालणाऱ्या शैक्षणिक संस्थांमध्ये धर्म, वंश, जात, भाषा किंवा यांपैकी केवळ कोणत्याही एका आधारावर प्रवेश नाकारण्यास मनाई आहे.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 29 protects cultural conservation and contains a specific safeguard against certain grounds-based denial of admission in covered educational institutions.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nClause (1) is framed around a section of citizens with a distinct language, script or culture and its ability to conserve those characteristics. Clause (2) addresses admission to educational institutions maintained by the State or receiving State aid and specifies grounds on which admission cannot be denied. These clauses have different subjects and should not be merged into a single general statement. Article 29 is relevant to cultural preservation and educational access, and its wording should be considered carefully when identifying who is protected and in what setting. It is also helpful to study it alongside Article 30, which specifically concerns religious and linguistic minorities and their educational institutions. A real admission dispute requires analysis of the facts and applicable law.",
      "mr": "कलम 29 सांस्कृतिक जतनाचा अधिकार देते आणि काही शैक्षणिक संस्थांमध्ये विशिष्ट आधारांवर प्रवेश नाकारण्याविरुद्ध संरक्षण देते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 29(1) विशिष्ट भाषा, लिपी किंवा संस्कृती असलेल्या नागरिकांच्या समूहाला ती जतन करण्याच्या अधिकाराशी संबंधित आहे. कलम 29(2) राज्य चालवत असलेल्या किंवा राज्याच्या मदतीने चालणाऱ्या शैक्षणिक संस्थांमध्ये प्रवेश नाकारण्याबाबत विशिष्ट आधारांवर प्रतिबंध घालते. या दोन तरतुदींचा विषय वेगळा आहे, त्यामुळे त्यांना एकाच सर्वसाधारण विधानात मिसळू नये. कलम 29 सांस्कृतिक जतन आणि शैक्षणिक प्रवेशाच्या संदर्भात महत्त्वाचे आहे. संरक्षण कोणाला आणि कोणत्या परिस्थितीत मिळते हे समजण्यासाठी कलमाची अचूक शब्दरचना वाचणे आवश्यक आहे. कलम 30 सोबत त्याचा अभ्यास केल्यास अल्पसंख्याकांच्या शैक्षणिक संस्थांशी संबंधित अधिकारांमधील फरक समजतो. एखाद्या वास्तविक प्रवेश-विवादासाठी तथ्ये आणि लागू कायदे तपासावे लागतात."
    },
    "verySimple": {
      "en": "Article 29 protects cultural conservation and contains a specific safeguard against certain grounds-based denial of admission in covered educational institutions.",
      "mr": "कलम 29 सांस्कृतिक जतनाचा अधिकार देते आणि काही शैक्षणिक संस्थांमध्ये विशिष्ट आधारांवर प्रवेश नाकारण्याविरुद्ध संरक्षण देते."
    },
    "example": {
      "en": "A community seeks to preserve its language or culture through activities. Article 29(1) may protect that conservation effort.",
      "mr": "एखादा समूह आपली भाषा किंवा संस्कृती जतन करण्यासाठी प्रयत्न करतो, तेव्हा कलम 29(1) त्या जतनाच्या अधिकाराचे संरक्षण करू शकते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 29 of the Indian Constitution?",
          "content": "Article 29 protects cultural conservation and contains a specific safeguard against certain grounds-based denial of admission in covered educational institutions.\n\nClause (1) is framed around a section of citizens with a distinct language, script or culture and its ability to conserve those characteristics. Clause (2) addresses admission to educational institutions maintained by the State or receiving State aid and specifies grounds on which admission cannot be denied. These clauses have different subjects and should not be merged into a single general statement. Article 29 is relevant to cultural preservation and educational access, and its wording should be considered carefully when identifying who is protected and in what setting. It is also helpful to study it alongside Article 30, which specifically concerns religious and linguistic minorities and their educational institutions. A real admission dispute requires analysis of the facts and applicable law."
        },
        {
          "heading": "Why is Article 29 important?",
          "content": "Article 29 protects cultural conservation and contains a specific safeguard against certain grounds-based denial of admission in covered educational institutions.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 29",
          "content": "A community seeks to preserve its language or culture through activities. Article 29(1) may protect that conservation effort.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 29 म्हणजे काय?",
          "content": "कलम 29 सांस्कृतिक जतनाचा अधिकार देते आणि काही शैक्षणिक संस्थांमध्ये विशिष्ट आधारांवर प्रवेश नाकारण्याविरुद्ध संरक्षण देते.\n\nकलम 29(1) विशिष्ट भाषा, लिपी किंवा संस्कृती असलेल्या नागरिकांच्या समूहाला ती जतन करण्याच्या अधिकाराशी संबंधित आहे. कलम 29(2) राज्य चालवत असलेल्या किंवा राज्याच्या मदतीने चालणाऱ्या शैक्षणिक संस्थांमध्ये प्रवेश नाकारण्याबाबत विशिष्ट आधारांवर प्रतिबंध घालते. या दोन तरतुदींचा विषय वेगळा आहे, त्यामुळे त्यांना एकाच सर्वसाधारण विधानात मिसळू नये. कलम 29 सांस्कृतिक जतन आणि शैक्षणिक प्रवेशाच्या संदर्भात महत्त्वाचे आहे. संरक्षण कोणाला आणि कोणत्या परिस्थितीत मिळते हे समजण्यासाठी कलमाची अचूक शब्दरचना वाचणे आवश्यक आहे. कलम 30 सोबत त्याचा अभ्यास केल्यास अल्पसंख्याकांच्या शैक्षणिक संस्थांशी संबंधित अधिकारांमधील फरक समजतो. एखाद्या वास्तविक प्रवेश-विवादासाठी तथ्ये आणि लागू कायदे तपासावे लागतात."
        },
        {
          "heading": "कलम 29 महत्त्वाचे का आहे?",
          "content": "कलम 29 सांस्कृतिक जतनाचा अधिकार देते आणि काही शैक्षणिक संस्थांमध्ये विशिष्ट आधारांवर प्रवेश नाकारण्याविरुद्ध संरक्षण देते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 29 चे उदाहरण",
          "content": "एखादा समूह आपली भाषा किंवा संस्कृती जतन करण्यासाठी प्रयत्न करतो, तेव्हा कलम 29(1) त्या जतनाच्या अधिकाराचे संरक्षण करू शकते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 29",
      "Article 29 of Indian Constitution",
      "Article 29 explained",
      "कलम 29",
      "कलम 29 भारतीय संविधान",
      "Protection of Interests of Minorities",
      "अल्पसंख्याकांच्या भाषा, लिपी व संस्कृतीचे संरक्षण"
    ],
    "relatedIds": [
      "30"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "30",
    "articleNumber": "Article 30",
    "title": {
      "en": "Right of Minorities to Establish and Administer Educational Institutions",
      "mr": "अल्पसंख्याकांना शैक्षणिक संस्था स्थापन व व्यवस्थापित करण्याचा अधिकार"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Religious and linguistic minorities have the right to establish and administer educational institutions of their choice. Article 30 also contains safeguards relating to State aid and acquisition of property of such institutions, as set out in its clauses.",
      "mr": "धार्मिक आणि भाषिक अल्पसंख्याकांना त्यांच्या पसंतीच्या शैक्षणिक संस्था स्थापन करण्याचा आणि त्यांचे व्यवस्थापन करण्याचा अधिकार आहे. कलम 30 मध्ये राज्याकडून मदत आणि अशा संस्थांच्या मालमत्तेच्या अधिग्रहणासंबंधीही तरतुदी आहेत.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 30 protects minority educational institutions, while regulatory requirements may apply within constitutional limits.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe constitutional protection relates to educational institutions established and administered by religious or linguistic minorities. The phrase 'of their choice' is important to the scope of the provision, but it does not mean institutions operate outside all regulation. Educational standards, administration and other lawful regulatory measures may be relevant, provided they are consistent with constitutional protections. Article 30 also includes clauses dealing with State aid and acquisition of institutional property, so its scope is broader than a single right to open a school. The provision is often considered in discussions of educational diversity, minority identity and institutional autonomy. Articles 29 and 30 should be studied together, while keeping their separate wording and protections in mind.",
      "mr": "कलम 30 अल्पसंख्याकांच्या शैक्षणिक संस्थांचे संरक्षण करते; घटनात्मक मर्यादेत नियामक अटी लागू होऊ शकतात.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nया कलमाचे संरक्षण धार्मिक किंवा भाषिक अल्पसंख्याकांनी स्थापन केलेल्या आणि व्यवस्थापित केलेल्या शैक्षणिक संस्थांशी संबंधित आहे. 'त्यांच्या पसंतीच्या' संस्था हा शब्दप्रयोग महत्त्वाचा असला तरी संस्थांना सर्व कायदेशीर नियमनापासून पूर्ण सूट मिळते असा अर्थ होत नाही. शैक्षणिक गुणवत्ता, प्रशासन आणि इतर कायदेशीर नियामक उपाय घटनात्मक मर्यादेत लागू होऊ शकतात. कलम 30 मध्ये राज्याच्या मदतीशी आणि संस्थांच्या मालमत्तेच्या अधिग्रहणाशी संबंधित तरतुदीही आहेत; त्यामुळे हा अधिकार केवळ शाळा सुरू करण्यापुरता मर्यादित नाही. शिक्षणातील विविधता, अल्पसंख्याकांची ओळख आणि संस्थात्मक स्वायत्तता यांचा अभ्यास करताना हे कलम महत्त्वाचे ठरते. कलम 29 आणि 30 एकत्र अभ्यासताना त्यांचे स्वतंत्र अधिकार लक्षात ठेवावेत."
    },
    "verySimple": {
      "en": "Article 30 protects minority educational institutions, while regulatory requirements may apply within constitutional limits.",
      "mr": "कलम 30 अल्पसंख्याकांच्या शैक्षणिक संस्थांचे संरक्षण करते; घटनात्मक मर्यादेत नियामक अटी लागू होऊ शकतात."
    },
    "example": {
      "en": "A linguistic minority establishes a school to support education and its language. Article 30 provides a constitutional framework for its institutional rights.",
      "mr": "भाषिक अल्पसंख्याक शिक्षण आणि भाषेच्या संवर्धनासाठी शाळा स्थापन करतात, तेव्हा कलम 30 त्यांच्या संस्थात्मक अधिकारांना घटनात्मक चौकट देते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 30 of the Indian Constitution?",
          "content": "Article 30 protects minority educational institutions, while regulatory requirements may apply within constitutional limits.\n\nThe constitutional protection relates to educational institutions established and administered by religious or linguistic minorities. The phrase 'of their choice' is important to the scope of the provision, but it does not mean institutions operate outside all regulation. Educational standards, administration and other lawful regulatory measures may be relevant, provided they are consistent with constitutional protections. Article 30 also includes clauses dealing with State aid and acquisition of institutional property, so its scope is broader than a single right to open a school. The provision is often considered in discussions of educational diversity, minority identity and institutional autonomy. Articles 29 and 30 should be studied together, while keeping their separate wording and protections in mind."
        },
        {
          "heading": "Why is Article 30 important?",
          "content": "Article 30 protects minority educational institutions, while regulatory requirements may apply within constitutional limits.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 30",
          "content": "A linguistic minority establishes a school to support education and its language. Article 30 provides a constitutional framework for its institutional rights.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 30 म्हणजे काय?",
          "content": "कलम 30 अल्पसंख्याकांच्या शैक्षणिक संस्थांचे संरक्षण करते; घटनात्मक मर्यादेत नियामक अटी लागू होऊ शकतात.\n\nया कलमाचे संरक्षण धार्मिक किंवा भाषिक अल्पसंख्याकांनी स्थापन केलेल्या आणि व्यवस्थापित केलेल्या शैक्षणिक संस्थांशी संबंधित आहे. 'त्यांच्या पसंतीच्या' संस्था हा शब्दप्रयोग महत्त्वाचा असला तरी संस्थांना सर्व कायदेशीर नियमनापासून पूर्ण सूट मिळते असा अर्थ होत नाही. शैक्षणिक गुणवत्ता, प्रशासन आणि इतर कायदेशीर नियामक उपाय घटनात्मक मर्यादेत लागू होऊ शकतात. कलम 30 मध्ये राज्याच्या मदतीशी आणि संस्थांच्या मालमत्तेच्या अधिग्रहणाशी संबंधित तरतुदीही आहेत; त्यामुळे हा अधिकार केवळ शाळा सुरू करण्यापुरता मर्यादित नाही. शिक्षणातील विविधता, अल्पसंख्याकांची ओळख आणि संस्थात्मक स्वायत्तता यांचा अभ्यास करताना हे कलम महत्त्वाचे ठरते. कलम 29 आणि 30 एकत्र अभ्यासताना त्यांचे स्वतंत्र अधिकार लक्षात ठेवावेत."
        },
        {
          "heading": "कलम 30 महत्त्वाचे का आहे?",
          "content": "कलम 30 अल्पसंख्याकांच्या शैक्षणिक संस्थांचे संरक्षण करते; घटनात्मक मर्यादेत नियामक अटी लागू होऊ शकतात.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 30 चे उदाहरण",
          "content": "भाषिक अल्पसंख्याक शिक्षण आणि भाषेच्या संवर्धनासाठी शाळा स्थापन करतात, तेव्हा कलम 30 त्यांच्या संस्थात्मक अधिकारांना घटनात्मक चौकट देते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 30",
      "Article 30 of Indian Constitution",
      "Article 30 explained",
      "कलम 30",
      "कलम 30 भारतीय संविधान",
      "Right of Minorities to Establish and Administer Educational Institutions",
      "अल्पसंख्याकांना शैक्षणिक संस्था स्थापन व व्यवस्थापित करण्याचा अधिकार"
    ],
    "relatedIds": [
      "29"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "31",
    "articleNumber": "Article 31",
    "title": {
      "en": "Compulsory Acquisition of Property (Former Fundamental Right; Repealed)",
      "mr": "मालमत्तेचा अधिकार—रद्द केलेली जुनी तरतूद"
    },
    "categoryKey": "historical",
    "officialText": {
      "en": "Article 31, which formerly addressed compulsory acquisition of property as a Fundamental Right, was repealed by the Constitution (Forty-fourth Amendment) Act, 1978. The right to property is now protected under Article 300A, which provides that no person shall be deprived of property except by authority of law.",
      "mr": "कलम 31 हे पूर्वी मालमत्तेच्या सक्तीच्या अधिग्रहणासंबंधी मूलभूत अधिकाराची तरतूद होते. संविधानाच्या 44व्या घटनादुरुस्ती अधिनियम, 1978 ने ते रद्द केले. मालमत्तेचा अधिकार आता कलम 300A अंतर्गत संरक्षित आहे; कायद्याच्या अधिकाराशिवाय कोणालाही मालमत्तेपासून वंचित करता येत नाही.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Former Article 31 was repealed. Property is no longer a Fundamental Right, but Article 300A protects against deprivation except by authority of law.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 31 is important for understanding constitutional history and the evolution of property rights in India. It was part of the original Fundamental Rights framework and dealt with compulsory acquisition or requisition of property in the circumstances described by its former text. The Constitution (Forty-fourth Amendment) Act, 1978 repealed Article 31 as a Fundamental Right. The present constitutional protection concerning deprivation of property is found in Article 300A, which states that a person cannot be deprived of property except by authority of law. Article 300A is not listed among the Fundamental Rights in Part III. When discussing property rights today, it is therefore necessary to distinguish the historical Article 31 from the current provision and from legal remedies that may apply to particular acquisitions. This historical explanation is educational and does not determine the validity of any individual property action.",
      "mr": "माजी कलम 31 रद्द झाले आहे. मालमत्ता हा आता मूलभूत अधिकार नाही, परंतु कलम 300A कायद्याच्या अधिकाराशिवाय मालमत्तेपासून वंचित करण्यास प्रतिबंध करते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 31 भारतीय संविधानाच्या इतिहासात आणि मालमत्तेच्या अधिकाराच्या बदलत्या घटनात्मक स्थितीत महत्त्वाचे आहे. ते मूळ संविधानातील मूलभूत अधिकारांच्या चौकटीत होते आणि त्याच्या पूर्वीच्या शब्दरचनेनुसार मालमत्तेचे सक्तीचे अधिग्रहण किंवा ताबा याबाबत तरतुदी करत होते. संविधानाच्या 44व्या घटनादुरुस्ती अधिनियम, 1978 ने कलम 31 मूलभूत अधिकार म्हणून रद्द केले. मालमत्तेपासून वंचित करण्याबाबतची सध्याची घटनात्मक तरतूद कलम 300A मध्ये आहे; त्यानुसार कायद्याच्या अधिकाराशिवाय कोणालाही मालमत्तेपासून वंचित करता येत नाही. कलम 300A हा भाग III मधील मूलभूत अधिकारांमध्ये समाविष्ट नाही. आज मालमत्तेच्या अधिकाराबद्दल बोलताना पूर्वीचे कलम 31, सध्याचे कलम 300A आणि विशिष्ट अधिग्रहणासाठी उपलब्ध कायदेशीर उपाय यातील फरक स्पष्ट करणे आवश्यक आहे. हा ऐतिहासिक आढावा एखाद्या विशिष्ट अधिग्रहणाची वैधता ठरवत नाही."
    },
    "verySimple": {
      "en": "Former Article 31 was repealed. Property is no longer a Fundamental Right, but Article 300A protects against deprivation except by authority of law.",
      "mr": "माजी कलम 31 रद्द झाले आहे. मालमत्ता हा आता मूलभूत अधिकार नाही, परंतु कलम 300A कायद्याच्या अधिकाराशिवाय मालमत्तेपासून वंचित करण्यास प्रतिबंध करते."
    },
    "example": {
      "en": "An explanation of Article 31 today should describe its historical role and clarify the current constitutional position under Article 300A.",
      "mr": "आज कलम 31 समजावताना त्याची ऐतिहासिक भूमिका आणि कलम 300A अंतर्गत सध्याची घटनात्मक स्थिती स्पष्ट करणे आवश्यक आहे."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 31 of the Indian Constitution?",
          "content": "Former Article 31 was repealed. Property is no longer a Fundamental Right, but Article 300A protects against deprivation except by authority of law.\n\nArticle 31 is important for understanding constitutional history and the evolution of property rights in India. It was part of the original Fundamental Rights framework and dealt with compulsory acquisition or requisition of property in the circumstances described by its former text. The Constitution (Forty-fourth Amendment) Act, 1978 repealed Article 31 as a Fundamental Right. The present constitutional protection concerning deprivation of property is found in Article 300A, which states that a person cannot be deprived of property except by authority of law. Article 300A is not listed among the Fundamental Rights in Part III. When discussing property rights today, it is therefore necessary to distinguish the historical Article 31 from the current provision and from legal remedies that may apply to particular acquisitions. This historical explanation is educational and does not determine the validity of any individual property action."
        },
        {
          "heading": "Why is Article 31 important?",
          "content": "Former Article 31 was repealed. Property is no longer a Fundamental Right, but Article 300A protects against deprivation except by authority of law.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 31",
          "content": "An explanation of Article 31 today should describe its historical role and clarify the current constitutional position under Article 300A.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 31 म्हणजे काय?",
          "content": "माजी कलम 31 रद्द झाले आहे. मालमत्ता हा आता मूलभूत अधिकार नाही, परंतु कलम 300A कायद्याच्या अधिकाराशिवाय मालमत्तेपासून वंचित करण्यास प्रतिबंध करते.\n\nकलम 31 भारतीय संविधानाच्या इतिहासात आणि मालमत्तेच्या अधिकाराच्या बदलत्या घटनात्मक स्थितीत महत्त्वाचे आहे. ते मूळ संविधानातील मूलभूत अधिकारांच्या चौकटीत होते आणि त्याच्या पूर्वीच्या शब्दरचनेनुसार मालमत्तेचे सक्तीचे अधिग्रहण किंवा ताबा याबाबत तरतुदी करत होते. संविधानाच्या 44व्या घटनादुरुस्ती अधिनियम, 1978 ने कलम 31 मूलभूत अधिकार म्हणून रद्द केले. मालमत्तेपासून वंचित करण्याबाबतची सध्याची घटनात्मक तरतूद कलम 300A मध्ये आहे; त्यानुसार कायद्याच्या अधिकाराशिवाय कोणालाही मालमत्तेपासून वंचित करता येत नाही. कलम 300A हा भाग III मधील मूलभूत अधिकारांमध्ये समाविष्ट नाही. आज मालमत्तेच्या अधिकाराबद्दल बोलताना पूर्वीचे कलम 31, सध्याचे कलम 300A आणि विशिष्ट अधिग्रहणासाठी उपलब्ध कायदेशीर उपाय यातील फरक स्पष्ट करणे आवश्यक आहे. हा ऐतिहासिक आढावा एखाद्या विशिष्ट अधिग्रहणाची वैधता ठरवत नाही."
        },
        {
          "heading": "कलम 31 महत्त्वाचे का आहे?",
          "content": "माजी कलम 31 रद्द झाले आहे. मालमत्ता हा आता मूलभूत अधिकार नाही, परंतु कलम 300A कायद्याच्या अधिकाराशिवाय मालमत्तेपासून वंचित करण्यास प्रतिबंध करते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 31 चे उदाहरण",
          "content": "आज कलम 31 समजावताना त्याची ऐतिहासिक भूमिका आणि कलम 300A अंतर्गत सध्याची घटनात्मक स्थिती स्पष्ट करणे आवश्यक आहे.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 31",
      "Article 31 of Indian Constitution",
      "Article 31 explained",
      "कलम 31",
      "कलम 31 भारतीय संविधान",
      "Compulsory Acquisition of Property (Former Fundamental Right; Repealed)",
      "मालमत्तेचा अधिकार—रद्द केलेली जुनी तरतूद"
    ],
    "relatedIds": [
      "300A"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "33",
    "articleNumber": "Article 33",
    "title": {
      "en": "Power of Parliament to Modify Fundamental Rights in Their Application to Forces, etc.",
      "mr": "सशस्त्र दलांसाठी मूलभूत अधिकारांमध्ये मर्यादा घालण्याचा संसदेचा अधिकार"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Parliament may by law determine to what extent Fundamental Rights shall be restricted or abrogated for members of the armed forces, forces charged with maintaining public order, intelligence and related organizations, to ensure proper discharge of duties and maintenance of discipline.",
      "mr": "सशस्त्र दल, सार्वजनिक सुव्यवस्था राखणारी दलं, गुप्तचर संस्था आणि संबंधित सेवांतील सदस्यांना त्यांची कर्तव्ये योग्य प्रकारे पार पाडता यावीत आणि शिस्त राखता यावी यासाठी मूलभूत अधिकार कितपत मर्यादित किंवा रद्द केले जाऊ शकतात, हे संसद कायद्याद्वारे ठरवू शकते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 33 authorizes Parliament—not unrestricted executive action—to prescribe specified limitations on Fundamental Rights for certain services to support discipline and duty.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 33 recognizes that certain services have distinctive responsibilities and discipline requirements. It empowers Parliament to determine, by law, the extent to which specified Fundamental Rights may be restricted or abrogated for the groups named in the Article, for the purpose of ensuring proper discharge of duties and maintenance of discipline. The provision does not give every authority an unrestricted power to remove rights; the constitutional text assigns this law-making role to Parliament and describes the purpose for which it may be exercised. The exact restrictions depend on the law enacted under this authority. Article 33 is therefore best studied as a carefully defined constitutional provision relating to service discipline, rather than a blanket exclusion of all rights for every person working in government or security-related roles.",
      "mr": "कलम 33 विशिष्ट सेवांमध्ये शिस्त आणि कर्तव्यपालनासाठी मूलभूत अधिकारांवरील मर्यादा कायद्याद्वारे ठरवण्याचा अधिकार संसदेला देते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 33 काही सेवांमध्ये असलेल्या विशिष्ट जबाबदाऱ्या आणि शिस्तीच्या गरजा लक्षात घेते. या कलमात नमूद केलेल्या गटांसाठी मूलभूत अधिकार कितपत मर्यादित किंवा रद्द केले जाऊ शकतात हे संसद कायद्याद्वारे ठरवू शकते, जेणेकरून कर्तव्यांचे योग्य पालन आणि शिस्त राखता येईल. अधिकार काढून टाकण्याचा प्रत्येक प्राधिकरणाला अमर्याद अधिकार आहे, असा अर्थ यातून होत नाही. घटनात्मक मजकूर हा कायदे करण्याचा अधिकार संसदेला देतो आणि त्यासाठी विशिष्ट उद्देश सांगतो. नेमक्या मर्यादा संबंधित कायद्यावर अवलंबून असतात. म्हणून कलम 33 हे विशिष्ट सेवांमध्ये कर्तव्यपालन आणि शिस्तीसाठी ठरवलेल्या घटनात्मक चौकटीच्या संदर्भात समजावे; सरकारी किंवा सुरक्षा-संबंधित काम करणाऱ्या प्रत्येक व्यक्तीचे सर्व अधिकार आपोआप संपतात असा सरसकट अर्थ घेऊ नये."
    },
    "verySimple": {
      "en": "Article 33 authorizes Parliament—not unrestricted executive action—to prescribe specified limitations on Fundamental Rights for certain services to support discipline and duty.",
      "mr": "कलम 33 विशिष्ट सेवांमध्ये शिस्त आणि कर्तव्यपालनासाठी मूलभूत अधिकारांवरील मर्यादा कायद्याद्वारे ठरवण्याचा अधिकार संसदेला देते."
    },
    "example": {
      "en": "Parliament may enact a law prescribing limits on certain rights for a covered force, within Article 33's purpose and scope.",
      "mr": "कलम 33 च्या उद्देश आणि व्याप्तीमध्ये संसद विशिष्ट दलासाठी काही अधिकारांवरील मर्यादा कायद्याद्वारे ठरवू शकते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 33 of the Indian Constitution?",
          "content": "Article 33 authorizes Parliament—not unrestricted executive action—to prescribe specified limitations on Fundamental Rights for certain services to support discipline and duty.\n\nArticle 33 recognizes that certain services have distinctive responsibilities and discipline requirements. It empowers Parliament to determine, by law, the extent to which specified Fundamental Rights may be restricted or abrogated for the groups named in the Article, for the purpose of ensuring proper discharge of duties and maintenance of discipline. The provision does not give every authority an unrestricted power to remove rights; the constitutional text assigns this law-making role to Parliament and describes the purpose for which it may be exercised. The exact restrictions depend on the law enacted under this authority. Article 33 is therefore best studied as a carefully defined constitutional provision relating to service discipline, rather than a blanket exclusion of all rights for every person working in government or security-related roles."
        },
        {
          "heading": "Why is Article 33 important?",
          "content": "Article 33 authorizes Parliament—not unrestricted executive action—to prescribe specified limitations on Fundamental Rights for certain services to support discipline and duty.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 33",
          "content": "Parliament may enact a law prescribing limits on certain rights for a covered force, within Article 33's purpose and scope.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 33 म्हणजे काय?",
          "content": "कलम 33 विशिष्ट सेवांमध्ये शिस्त आणि कर्तव्यपालनासाठी मूलभूत अधिकारांवरील मर्यादा कायद्याद्वारे ठरवण्याचा अधिकार संसदेला देते.\n\nकलम 33 काही सेवांमध्ये असलेल्या विशिष्ट जबाबदाऱ्या आणि शिस्तीच्या गरजा लक्षात घेते. या कलमात नमूद केलेल्या गटांसाठी मूलभूत अधिकार कितपत मर्यादित किंवा रद्द केले जाऊ शकतात हे संसद कायद्याद्वारे ठरवू शकते, जेणेकरून कर्तव्यांचे योग्य पालन आणि शिस्त राखता येईल. अधिकार काढून टाकण्याचा प्रत्येक प्राधिकरणाला अमर्याद अधिकार आहे, असा अर्थ यातून होत नाही. घटनात्मक मजकूर हा कायदे करण्याचा अधिकार संसदेला देतो आणि त्यासाठी विशिष्ट उद्देश सांगतो. नेमक्या मर्यादा संबंधित कायद्यावर अवलंबून असतात. म्हणून कलम 33 हे विशिष्ट सेवांमध्ये कर्तव्यपालन आणि शिस्तीसाठी ठरवलेल्या घटनात्मक चौकटीच्या संदर्भात समजावे; सरकारी किंवा सुरक्षा-संबंधित काम करणाऱ्या प्रत्येक व्यक्तीचे सर्व अधिकार आपोआप संपतात असा सरसकट अर्थ घेऊ नये."
        },
        {
          "heading": "कलम 33 महत्त्वाचे का आहे?",
          "content": "कलम 33 विशिष्ट सेवांमध्ये शिस्त आणि कर्तव्यपालनासाठी मूलभूत अधिकारांवरील मर्यादा कायद्याद्वारे ठरवण्याचा अधिकार संसदेला देते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 33 चे उदाहरण",
          "content": "कलम 33 च्या उद्देश आणि व्याप्तीमध्ये संसद विशिष्ट दलासाठी काही अधिकारांवरील मर्यादा कायद्याद्वारे ठरवू शकते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 33",
      "Article 33 of Indian Constitution",
      "Article 33 explained",
      "कलम 33",
      "कलम 33 भारतीय संविधान",
      "Power of Parliament to Modify Fundamental Rights in Their Application to Forces, etc.",
      "सशस्त्र दलांसाठी मूलभूत अधिकारांमध्ये मर्यादा घालण्याचा संसदेचा अधिकार"
    ],
    "relatedIds": [
      "34"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "34",
    "articleNumber": "Article 34",
    "title": {
      "en": "Restriction on Rights While Martial Law is in Force in Any Area",
      "mr": "एखाद्या क्षेत्रात लष्करी कायदा लागू असताना अधिकारांवरील मर्यादा"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Article 34 addresses restrictions on Fundamental Rights and parliamentary indemnity legislation in relation to acts done in an area where martial law was in force, as specified by the Constitution.",
      "mr": "कलम 34 एखाद्या क्षेत्रात लष्करी कायदा लागू असताना केलेल्या कृतींच्या संदर्भात मूलभूत अधिकारांवरील मर्यादा आणि संसदेकडून नुकसानभरपाई किंवा संरक्षण देणाऱ्या कायद्यांबाबत तरतूद करते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 34 is a specific constitutional provision concerning an area under martial law; it is not itself a general emergency declaration provision.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 34 is a specific provision concerning an area where martial law was in force. It addresses Parliament's power to make laws relating to acts done in such an area, including indemnity in the circumstances described by the constitutional text, and the validation of certain acts or proceedings. The Article is distinct from the provisions that govern the declaration of a national, State or financial emergency. Its operation depends on the particular constitutional situation and the law enacted under it. The term martial law should not casually be treated as interchangeable with an emergency declared under the Constitution. Article 34 is primarily studied to understand the constitutional treatment of extraordinary circumstances and legal consequences associated with actions taken in an area under martial law.",
      "mr": "कलम 34 हे लष्करी कायदा लागू असलेल्या क्षेत्रासंबंधी विशिष्ट घटनात्मक कलम आहे; ते स्वतः सर्वसाधारण आणीबाणी घोषित करण्याचे कलम नाही.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 34 हे एखाद्या क्षेत्रात लष्करी कायदा लागू असलेल्या परिस्थितीशी संबंधित विशिष्ट घटनात्मक कलम आहे. अशा क्षेत्रात केलेल्या कृतींबाबत संसद कायदे करू शकते, ज्यामध्ये घटनात्मक शब्दरचनेनुसार काही परिस्थितींमध्ये संरक्षण किंवा नुकसानभरपाई देण्याच्या तरतुदी आणि विशिष्ट कृती अथवा कार्यवाही वैध ठरवण्याचे विषय येऊ शकतात. या कलमाचा वापर विशिष्ट घटनात्मक परिस्थिती आणि त्याअंतर्गत केलेल्या कायद्यावर अवलंबून असतो. लष्करी कायदा आणि संविधानातील राष्ट्रीय, राज्य किंवा आर्थिक आणीबाणी या संकल्पना एकच आहेत असे समजू नये. कलम 34 चा अभ्यास असामान्य परिस्थितींमध्ये केलेल्या कृतींचे कायदेशीर परिणाम आणि संविधान त्यांना कशी चौकट देते हे समजण्यासाठी उपयुक्त आहे."
    },
    "verySimple": {
      "en": "Article 34 is a specific constitutional provision concerning an area under martial law; it is not itself a general emergency declaration provision.",
      "mr": "कलम 34 हे लष्करी कायदा लागू असलेल्या क्षेत्रासंबंधी विशिष्ट घटनात्मक कलम आहे; ते स्वतः सर्वसाधारण आणीबाणी घोषित करण्याचे कलम नाही."
    },
    "example": {
      "en": "Article 34 may become relevant to legal questions about acts performed during martial law in an area, within the constitutional text.",
      "mr": "एखाद्या क्षेत्रात लष्करी कायदा लागू असताना झालेल्या कृतींबाबत घटनात्मक चौकटीत कलम 34 लागू होऊ शकते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 34 of the Indian Constitution?",
          "content": "Article 34 is a specific constitutional provision concerning an area under martial law; it is not itself a general emergency declaration provision.\n\nArticle 34 is a specific provision concerning an area where martial law was in force. It addresses Parliament's power to make laws relating to acts done in such an area, including indemnity in the circumstances described by the constitutional text, and the validation of certain acts or proceedings. The Article is distinct from the provisions that govern the declaration of a national, State or financial emergency. Its operation depends on the particular constitutional situation and the law enacted under it. The term martial law should not casually be treated as interchangeable with an emergency declared under the Constitution. Article 34 is primarily studied to understand the constitutional treatment of extraordinary circumstances and legal consequences associated with actions taken in an area under martial law."
        },
        {
          "heading": "Why is Article 34 important?",
          "content": "Article 34 is a specific constitutional provision concerning an area under martial law; it is not itself a general emergency declaration provision.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 34",
          "content": "Article 34 may become relevant to legal questions about acts performed during martial law in an area, within the constitutional text.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 34 म्हणजे काय?",
          "content": "कलम 34 हे लष्करी कायदा लागू असलेल्या क्षेत्रासंबंधी विशिष्ट घटनात्मक कलम आहे; ते स्वतः सर्वसाधारण आणीबाणी घोषित करण्याचे कलम नाही.\n\nकलम 34 हे एखाद्या क्षेत्रात लष्करी कायदा लागू असलेल्या परिस्थितीशी संबंधित विशिष्ट घटनात्मक कलम आहे. अशा क्षेत्रात केलेल्या कृतींबाबत संसद कायदे करू शकते, ज्यामध्ये घटनात्मक शब्दरचनेनुसार काही परिस्थितींमध्ये संरक्षण किंवा नुकसानभरपाई देण्याच्या तरतुदी आणि विशिष्ट कृती अथवा कार्यवाही वैध ठरवण्याचे विषय येऊ शकतात. या कलमाचा वापर विशिष्ट घटनात्मक परिस्थिती आणि त्याअंतर्गत केलेल्या कायद्यावर अवलंबून असतो. लष्करी कायदा आणि संविधानातील राष्ट्रीय, राज्य किंवा आर्थिक आणीबाणी या संकल्पना एकच आहेत असे समजू नये. कलम 34 चा अभ्यास असामान्य परिस्थितींमध्ये केलेल्या कृतींचे कायदेशीर परिणाम आणि संविधान त्यांना कशी चौकट देते हे समजण्यासाठी उपयुक्त आहे."
        },
        {
          "heading": "कलम 34 महत्त्वाचे का आहे?",
          "content": "कलम 34 हे लष्करी कायदा लागू असलेल्या क्षेत्रासंबंधी विशिष्ट घटनात्मक कलम आहे; ते स्वतः सर्वसाधारण आणीबाणी घोषित करण्याचे कलम नाही.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 34 चे उदाहरण",
          "content": "एखाद्या क्षेत्रात लष्करी कायदा लागू असताना झालेल्या कृतींबाबत घटनात्मक चौकटीत कलम 34 लागू होऊ शकते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 34",
      "Article 34 of Indian Constitution",
      "Article 34 explained",
      "कलम 34",
      "कलम 34 भारतीय संविधान",
      "Restriction on Rights While Martial Law is in Force in Any Area",
      "एखाद्या क्षेत्रात लष्करी कायदा लागू असताना अधिकारांवरील मर्यादा"
    ],
    "relatedIds": [
      "33"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "35",
    "articleNumber": "Article 35",
    "title": {
      "en": "Legislation to Give Effect to Certain Provisions of Part III",
      "mr": "भाग III मधील काही तरतुदी लागू करण्यासाठी कायदे करण्याचा अधिकार"
    },
    "categoryKey": "fundamental-rights",
    "officialText": {
      "en": "Article 35 specifies matters for which Parliament has exclusive power to legislate to give effect to certain provisions of Part III, and addresses laws and penalties concerning specified constitutional prohibitions.",
      "mr": "कलम 35 भाग III मधील काही तरतुदी प्रभावी करण्यासाठी कोणत्या विषयांवर संसदेला विशेष कायदे करण्याचा अधिकार आहे हे ठरवते. काही घटनात्मक प्रतिबंधांशी संबंधित कायदे आणि शिक्षांबाबतही ते तरतूद करते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 35 assigns specified legislative matters relating to certain Fundamental Rights to Parliament.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 35 is a provision about legislative authority and implementation of certain Part III guarantees. It assigns specified matters to Parliament and addresses legislation relating to particular constitutional prohibitions and offences. The provision is significant because the Constitution itself identifies the legislature responsible for making laws in the matters it covers. It should not be interpreted as giving Parliament unlimited power over every Fundamental Right or as replacing the separate legislative arrangements found elsewhere in the Constitution. Readers should identify the specific clause of Article 35 and the subject it addresses before drawing conclusions about legislative competence. Studying Article 35 alongside the relevant Articles of Part III helps explain how constitutional rights, enforcement mechanisms and law-making powers fit together.",
      "mr": "कलम 35 मूलभूत अधिकारांशी संबंधित काही विशिष्ट विषयांवरील कायदे करण्याचा अधिकार संसदेकडे सोपवते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 35 भाग III मधील काही अधिकार आणि तरतुदी प्रभावी करण्यासाठी कायदे करण्याच्या अधिकाराशी संबंधित आहे. विशिष्ट विषयांवर कायदे करण्याचा विशेष अधिकार संसदेकडे सोपवला जातो आणि काही घटनात्मक प्रतिबंध व अपराधांशी संबंधित कायद्यांबाबतही तरतूद केली जाते. संविधान स्वतः कोणत्या विषयासाठी कायदे करणारी संस्था कोणती असेल हे ठरवते, म्हणून हे कलम महत्त्वाचे आहे. मात्र कलम 35 संसदेला प्रत्येक मूलभूत अधिकाराबाबत अमर्याद अधिकार देते किंवा संविधानातील इतर कायदे करण्याच्या व्यवस्थेला बदलते, असा अर्थ घेऊ नये. कलम 35 मधील नेमकी तरतूद आणि तिचा विषय ओळखून कायदेशीर अधिकार समजावा. भाग III मधील संबंधित कलमांसोबत अभ्यास केल्यास अधिकार, अंमलबजावणी आणि कायदे करण्याचे अधिकार यांचा संबंध स्पष्ट होतो."
    },
    "verySimple": {
      "en": "Article 35 assigns specified legislative matters relating to certain Fundamental Rights to Parliament.",
      "mr": "कलम 35 मूलभूत अधिकारांशी संबंधित काही विशिष्ट विषयांवरील कायदे करण्याचा अधिकार संसदेकडे सोपवते."
    },
    "example": {
      "en": "Where Article 35 assigns a specified matter to Parliament, the legislative authority must be understood in accordance with the constitutional text.",
      "mr": "कलम 35 अंतर्गत एखादा विषय संसदेकडे दिलेला असल्यास, त्या विषयावरील कायदे करण्याचा अधिकार संविधानाच्या शब्दरचनेनुसार समजला पाहिजे."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 35 of the Indian Constitution?",
          "content": "Article 35 assigns specified legislative matters relating to certain Fundamental Rights to Parliament.\n\nArticle 35 is a provision about legislative authority and implementation of certain Part III guarantees. It assigns specified matters to Parliament and addresses legislation relating to particular constitutional prohibitions and offences. The provision is significant because the Constitution itself identifies the legislature responsible for making laws in the matters it covers. It should not be interpreted as giving Parliament unlimited power over every Fundamental Right or as replacing the separate legislative arrangements found elsewhere in the Constitution. Readers should identify the specific clause of Article 35 and the subject it addresses before drawing conclusions about legislative competence. Studying Article 35 alongside the relevant Articles of Part III helps explain how constitutional rights, enforcement mechanisms and law-making powers fit together."
        },
        {
          "heading": "Why is Article 35 important?",
          "content": "Article 35 assigns specified legislative matters relating to certain Fundamental Rights to Parliament.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 35",
          "content": "Where Article 35 assigns a specified matter to Parliament, the legislative authority must be understood in accordance with the constitutional text.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 35 म्हणजे काय?",
          "content": "कलम 35 मूलभूत अधिकारांशी संबंधित काही विशिष्ट विषयांवरील कायदे करण्याचा अधिकार संसदेकडे सोपवते.\n\nकलम 35 भाग III मधील काही अधिकार आणि तरतुदी प्रभावी करण्यासाठी कायदे करण्याच्या अधिकाराशी संबंधित आहे. विशिष्ट विषयांवर कायदे करण्याचा विशेष अधिकार संसदेकडे सोपवला जातो आणि काही घटनात्मक प्रतिबंध व अपराधांशी संबंधित कायद्यांबाबतही तरतूद केली जाते. संविधान स्वतः कोणत्या विषयासाठी कायदे करणारी संस्था कोणती असेल हे ठरवते, म्हणून हे कलम महत्त्वाचे आहे. मात्र कलम 35 संसदेला प्रत्येक मूलभूत अधिकाराबाबत अमर्याद अधिकार देते किंवा संविधानातील इतर कायदे करण्याच्या व्यवस्थेला बदलते, असा अर्थ घेऊ नये. कलम 35 मधील नेमकी तरतूद आणि तिचा विषय ओळखून कायदेशीर अधिकार समजावा. भाग III मधील संबंधित कलमांसोबत अभ्यास केल्यास अधिकार, अंमलबजावणी आणि कायदे करण्याचे अधिकार यांचा संबंध स्पष्ट होतो."
        },
        {
          "heading": "कलम 35 महत्त्वाचे का आहे?",
          "content": "कलम 35 मूलभूत अधिकारांशी संबंधित काही विशिष्ट विषयांवरील कायदे करण्याचा अधिकार संसदेकडे सोपवते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 35 चे उदाहरण",
          "content": "कलम 35 अंतर्गत एखादा विषय संसदेकडे दिलेला असल्यास, त्या विषयावरील कायदे करण्याचा अधिकार संविधानाच्या शब्दरचनेनुसार समजला पाहिजे.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 35",
      "Article 35 of Indian Constitution",
      "Article 35 explained",
      "कलम 35",
      "कलम 35 भारतीय संविधान",
      "Legislation to Give Effect to Certain Provisions of Part III",
      "भाग III मधील काही तरतुदी लागू करण्यासाठी कायदे करण्याचा अधिकार"
    ],
    "relatedIds": [
      "32"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "36",
    "articleNumber": "Article 36",
    "title": {
      "en": "Definition of State",
      "mr": "राज्याची व्याख्या"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 36 provides that, in Part IV, unless the context otherwise requires, State has the same meaning as in Part III.",
      "mr": "कलम 36 नुसार भाग IV मध्ये, संदर्भानुसार वेगळा अर्थ आवश्यक नसल्यास, 'राज्य' या शब्दाचा अर्थ भाग III मध्ये दिलेल्या अर्थाप्रमाणेच आहे.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 36 carries the Part III definition of State into Part IV, unless the context requires otherwise.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nPart IV contains the Directive Principles of State Policy, and Article 36 provides a definition to be used in that Part. By referring back to Part III, it connects the meaning of 'State' used in the Directive Principles with the definition already provided for Fundamental Rights, unless the context requires otherwise. This cross-reference helps maintain consistency in the Constitution's terminology. Article 36 is short, but definitions and cross-references are important because they determine how later provisions are read. It is not itself a Directive Principle setting out a social or economic objective; rather, it supplies the meaning of a term used in Part IV. It should be read with Article 12 and the context of the Directive Principles.",
      "mr": "कलम 36 भाग III मधील 'राज्य'ची व्याख्या भाग IV मध्ये लागू करते, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद आहे.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nभाग IV मध्ये राज्याच्या धोरणाची निर्देशक तत्त्वे आहेत आणि कलम 36 या भागासाठी एक व्याख्या देते. भाग III मधील 'राज्य' या शब्दाची व्याख्या भाग IV मध्येही लागू होईल, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद असेल, असे हे कलम सांगते. या संदर्भामुळे संविधानातील शब्दप्रयोग सुसंगत राहण्यास मदत होते. कलम 36 लहान असले तरी व्याख्या आणि इतर कलमांकडे निर्देश करणाऱ्या तरतुदी पुढील कलमांचा अर्थ समजण्यासाठी महत्त्वाच्या असतात. हे स्वतः सामाजिक किंवा आर्थिक उद्दिष्ट सांगणारे निर्देशक तत्त्व नाही; भाग IV मध्ये वापरलेल्या शब्दाचा अर्थ स्पष्ट करणारी तरतूद आहे. कलम 12 आणि निर्देशक तत्त्वांच्या संदर्भात त्याचा अभ्यास करावा."
    },
    "verySimple": {
      "en": "Article 36 carries the Part III definition of State into Part IV, unless the context requires otherwise.",
      "mr": "कलम 36 भाग III मधील 'राज्य'ची व्याख्या भाग IV मध्ये लागू करते, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद आहे."
    },
    "example": {
      "en": "To understand who is addressed by a Directive Principle, Article 36 directs readers to the meaning of State in Part III.",
      "mr": "निर्देशक तत्त्वे कोणाला लागू होतात हे समजण्यासाठी कलम 36 भाग III मधील 'राज्य'च्या व्याख्येकडे निर्देश करते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 36 of the Indian Constitution?",
          "content": "Article 36 carries the Part III definition of State into Part IV, unless the context requires otherwise.\n\nPart IV contains the Directive Principles of State Policy, and Article 36 provides a definition to be used in that Part. By referring back to Part III, it connects the meaning of 'State' used in the Directive Principles with the definition already provided for Fundamental Rights, unless the context requires otherwise. This cross-reference helps maintain consistency in the Constitution's terminology. Article 36 is short, but definitions and cross-references are important because they determine how later provisions are read. It is not itself a Directive Principle setting out a social or economic objective; rather, it supplies the meaning of a term used in Part IV. It should be read with Article 12 and the context of the Directive Principles."
        },
        {
          "heading": "Why is Article 36 important?",
          "content": "Article 36 carries the Part III definition of State into Part IV, unless the context requires otherwise.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 36",
          "content": "To understand who is addressed by a Directive Principle, Article 36 directs readers to the meaning of State in Part III.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 36 म्हणजे काय?",
          "content": "कलम 36 भाग III मधील 'राज्य'ची व्याख्या भाग IV मध्ये लागू करते, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद आहे.\n\nभाग IV मध्ये राज्याच्या धोरणाची निर्देशक तत्त्वे आहेत आणि कलम 36 या भागासाठी एक व्याख्या देते. भाग III मधील 'राज्य' या शब्दाची व्याख्या भाग IV मध्येही लागू होईल, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद असेल, असे हे कलम सांगते. या संदर्भामुळे संविधानातील शब्दप्रयोग सुसंगत राहण्यास मदत होते. कलम 36 लहान असले तरी व्याख्या आणि इतर कलमांकडे निर्देश करणाऱ्या तरतुदी पुढील कलमांचा अर्थ समजण्यासाठी महत्त्वाच्या असतात. हे स्वतः सामाजिक किंवा आर्थिक उद्दिष्ट सांगणारे निर्देशक तत्त्व नाही; भाग IV मध्ये वापरलेल्या शब्दाचा अर्थ स्पष्ट करणारी तरतूद आहे. कलम 12 आणि निर्देशक तत्त्वांच्या संदर्भात त्याचा अभ्यास करावा."
        },
        {
          "heading": "कलम 36 महत्त्वाचे का आहे?",
          "content": "कलम 36 भाग III मधील 'राज्य'ची व्याख्या भाग IV मध्ये लागू करते, संदर्भानुसार वेगळा अर्थ आवश्यक असल्यास त्याला अपवाद आहे.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 36 चे उदाहरण",
          "content": "निर्देशक तत्त्वे कोणाला लागू होतात हे समजण्यासाठी कलम 36 भाग III मधील 'राज्य'च्या व्याख्येकडे निर्देश करते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 36",
      "Article 36 of Indian Constitution",
      "Article 36 explained",
      "कलम 36",
      "कलम 36 भारतीय संविधान",
      "Definition of State",
      "राज्याची व्याख्या"
    ],
    "relatedIds": [
      "37",
      "38",
      "39"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "37",
    "articleNumber": "Article 37",
    "title": {
      "en": "Application of the Principles Contained in Part IV",
      "mr": "राज्याच्या धोरणाची निर्देशक तत्त्वे लागू करण्याबाबत"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Directive Principles are not enforceable by any court, but they are fundamental in the governance of the country. It is the duty of the State to apply these principles in making laws.",
      "mr": "राज्याच्या धोरणाची निर्देशक तत्त्वे कोणत्याही न्यायालयाद्वारे थेट अंमलात आणता येत नाहीत; परंतु देशाच्या शासनव्यवस्थेत ती मूलभूत आहेत. कायदे करताना ही तत्त्वे लागू करणे हे राज्याचे कर्तव्य आहे.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 37 explains the legal status of Directive Principles: they are non-justiciable, yet fundamental to governance and a duty guiding lawmaking.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 37 describes the constitutional status of the Directive Principles. It states that these principles are not enforceable by any court, while also declaring them fundamental in the governance of the country and making it the State's duty to apply them in making laws. This creates an important distinction between judicial enforceability and their role in policy and law-making. The Directive Principles are not simply optional suggestions to be ignored; the constitutional text assigns them a guiding role. At the same time, Article 37 does not make every policy objective an individually enforceable claim. Understanding this balance is useful when studying welfare legislation, governance and the relationship between Part IV and the Fundamental Rights in Part III.",
      "mr": "कलम 37 निर्देशक तत्त्वांची कायदेशीर स्थिती स्पष्ट करते: ती न्यायालयात थेट अंमलात आणता येत नसली तरी शासनासाठी मूलभूत आणि कायदे करताना मार्गदर्शक आहेत.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 37 निर्देशक तत्त्वांची घटनात्मक स्थिती स्पष्ट करते. ही तत्त्वे कोणत्याही न्यायालयाद्वारे थेट अंमलात आणता येत नाहीत, असे ते सांगते; त्याच वेळी देशाच्या शासनव्यवस्थेत ती मूलभूत आहेत आणि कायदे करताना ती लागू करणे राज्याचे कर्तव्य आहे, असेही नमूद करते. त्यामुळे न्यायालयात थेट अंमलबजावणी आणि शासन व कायदे-निर्मितीमध्ये मार्गदर्शक भूमिका यातील फरक महत्त्वाचा आहे. निर्देशक तत्त्वे केवळ दुर्लक्ष करण्याजोग्या सूचना नाहीत; संविधान त्यांना शासनासाठी महत्त्वाचे स्थान देते. मात्र प्रत्येक धोरणात्मक उद्दिष्ट व्यक्तीला थेट न्यायालयीन दावा म्हणून मिळते असेही नाही. कलम 37 चा अभ्यास कलम 38, 39 आणि भाग III मधील मूलभूत अधिकारांशी असलेला संबंध समजण्यासाठी उपयुक्त आहे."
    },
    "verySimple": {
      "en": "Article 37 explains the legal status of Directive Principles: they are non-justiciable, yet fundamental to governance and a duty guiding lawmaking.",
      "mr": "कलम 37 निर्देशक तत्त्वांची कायदेशीर स्थिती स्पष्ट करते: ती न्यायालयात थेट अंमलात आणता येत नसली तरी शासनासाठी मूलभूत आणि कायदे करताना मार्गदर्शक आहेत."
    },
    "example": {
      "en": "A legislature considers a welfare-oriented policy while making a law. Directive Principles can guide that policy, although they are not directly enforceable in court.",
      "mr": "कायदा करताना विधिमंडळ कल्याणकारी धोरणाचा विचार करते. निर्देशक तत्त्वे धोरणाला दिशा देऊ शकतात, जरी ती थेट न्यायालयात अंमलात आणता येत नसली तरी."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 37 of the Indian Constitution?",
          "content": "Article 37 explains the legal status of Directive Principles: they are non-justiciable, yet fundamental to governance and a duty guiding lawmaking.\n\nArticle 37 describes the constitutional status of the Directive Principles. It states that these principles are not enforceable by any court, while also declaring them fundamental in the governance of the country and making it the State's duty to apply them in making laws. This creates an important distinction between judicial enforceability and their role in policy and law-making. The Directive Principles are not simply optional suggestions to be ignored; the constitutional text assigns them a guiding role. At the same time, Article 37 does not make every policy objective an individually enforceable claim. Understanding this balance is useful when studying welfare legislation, governance and the relationship between Part IV and the Fundamental Rights in Part III."
        },
        {
          "heading": "Why is Article 37 important?",
          "content": "Article 37 explains the legal status of Directive Principles: they are non-justiciable, yet fundamental to governance and a duty guiding lawmaking.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 37",
          "content": "A legislature considers a welfare-oriented policy while making a law. Directive Principles can guide that policy, although they are not directly enforceable in court.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 37 म्हणजे काय?",
          "content": "कलम 37 निर्देशक तत्त्वांची कायदेशीर स्थिती स्पष्ट करते: ती न्यायालयात थेट अंमलात आणता येत नसली तरी शासनासाठी मूलभूत आणि कायदे करताना मार्गदर्शक आहेत.\n\nकलम 37 निर्देशक तत्त्वांची घटनात्मक स्थिती स्पष्ट करते. ही तत्त्वे कोणत्याही न्यायालयाद्वारे थेट अंमलात आणता येत नाहीत, असे ते सांगते; त्याच वेळी देशाच्या शासनव्यवस्थेत ती मूलभूत आहेत आणि कायदे करताना ती लागू करणे राज्याचे कर्तव्य आहे, असेही नमूद करते. त्यामुळे न्यायालयात थेट अंमलबजावणी आणि शासन व कायदे-निर्मितीमध्ये मार्गदर्शक भूमिका यातील फरक महत्त्वाचा आहे. निर्देशक तत्त्वे केवळ दुर्लक्ष करण्याजोग्या सूचना नाहीत; संविधान त्यांना शासनासाठी महत्त्वाचे स्थान देते. मात्र प्रत्येक धोरणात्मक उद्दिष्ट व्यक्तीला थेट न्यायालयीन दावा म्हणून मिळते असेही नाही. कलम 37 चा अभ्यास कलम 38, 39 आणि भाग III मधील मूलभूत अधिकारांशी असलेला संबंध समजण्यासाठी उपयुक्त आहे."
        },
        {
          "heading": "कलम 37 महत्त्वाचे का आहे?",
          "content": "कलम 37 निर्देशक तत्त्वांची कायदेशीर स्थिती स्पष्ट करते: ती न्यायालयात थेट अंमलात आणता येत नसली तरी शासनासाठी मूलभूत आणि कायदे करताना मार्गदर्शक आहेत.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 37 चे उदाहरण",
          "content": "कायदा करताना विधिमंडळ कल्याणकारी धोरणाचा विचार करते. निर्देशक तत्त्वे धोरणाला दिशा देऊ शकतात, जरी ती थेट न्यायालयात अंमलात आणता येत नसली तरी.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 37",
      "Article 37 of Indian Constitution",
      "Article 37 explained",
      "कलम 37",
      "कलम 37 भारतीय संविधान",
      "Application of the Principles Contained in Part IV",
      "राज्याच्या धोरणाची निर्देशक तत्त्वे लागू करण्याबाबत"
    ],
    "relatedIds": [
      "38",
      "39",
      "39A"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "38",
    "articleNumber": "Article 38",
    "title": {
      "en": "State to Secure a Social Order for the Promotion of Welfare of the People",
      "mr": "लोककल्याणासाठी सामाजिक व्यवस्था निर्माण करण्याचे राज्याचे कर्तव्य"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 38 directs the State to promote the welfare of the people by securing and protecting a social order informed by justice, and to strive to minimize inequalities in income, status, facilities and opportunities.",
      "mr": "कलम 38 राज्याला न्यायावर आधारित सामाजिक व्यवस्था निर्माण करून लोककल्याण वाढवण्याचे आणि उत्पन्न, दर्जा, सुविधा व संधी यांतील असमानता कमी करण्यासाठी प्रयत्न करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 38 guides the State toward a just social order and reducing inequalities across dimensions identified in the Constitution.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 38 expresses a broad commitment to social welfare and justice. Clause (1) speaks of securing and protecting a social order in which social, economic and political justice informs national life. Clause (2) directs the State to strive to minimize inequalities in income and to eliminate inequalities in status, facilities and opportunities, among individuals and groups. The provision is a guiding constitutional objective for public policy rather than a detailed programme with a specific individual remedy. It can be considered when studying policies aimed at social inclusion, equitable access to services and reducing structural disparities. Article 38 should be read with other Directive Principles, including Articles 39 and 39A, which provide more specific policy guidance in related areas.",
      "mr": "कलम 38 राज्याला न्यायपूर्ण सामाजिक व्यवस्था आणि संविधानात नमूद केलेल्या विविध क्षेत्रांतील असमानता कमी करण्यासाठी मार्गदर्शन करते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 38 सामाजिक कल्याण आणि न्यायपूर्ण व्यवस्था निर्माण करण्याबाबत व्यापक घटनात्मक उद्दिष्ट व्यक्त करते. पहिल्या भागात सामाजिक, आर्थिक आणि राजकीय न्याय राष्ट्रीय जीवनाच्या सर्व संस्थांमध्ये प्रतिबिंबित होईल अशी सामाजिक व्यवस्था निर्माण करण्याचे निर्देश आहेत. पुढील भागात उत्पन्नातील असमानता कमी करणे आणि व्यक्ती व समूहांमधील दर्जा, सुविधा आणि संधी यांतील असमानता दूर करण्यासाठी प्रयत्न करण्याचे निर्देश दिले आहेत. हे विशिष्ट वैयक्तिक उपाय किंवा तत्काळ लाभ ठरवणारे कलम नसून सार्वजनिक धोरणासाठी मार्गदर्शक तत्त्व आहे. सामाजिक समावेशन, सेवांमध्ये समान प्रवेश आणि असमानता कमी करण्याच्या धोरणांचा अभ्यास करताना त्याचा संदर्भ घेतला जाऊ शकतो. कलम 38 सोबत कलम 39 आणि 39A यांचा अभ्यास केल्यास संबंधित अधिक विशिष्ट उद्दिष्टे समजतात."
    },
    "verySimple": {
      "en": "Article 38 guides the State toward a just social order and reducing inequalities across dimensions identified in the Constitution.",
      "mr": "कलम 38 राज्याला न्यायपूर्ण सामाजिक व्यवस्था आणि संविधानात नमूद केलेल्या विविध क्षेत्रांतील असमानता कमी करण्यासाठी मार्गदर्शन करते."
    },
    "example": {
      "en": "A public policy aims to reduce disparities in access to opportunities or facilities. Article 38 can serve as a Directive Principle guiding such policy.",
      "mr": "संधी किंवा सुविधांमधील असमानता कमी करण्याचे सार्वजनिक धोरण आखताना कलम 38 मार्गदर्शक तत्त्व ठरू शकते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 38 of the Indian Constitution?",
          "content": "Article 38 guides the State toward a just social order and reducing inequalities across dimensions identified in the Constitution.\n\nArticle 38 expresses a broad commitment to social welfare and justice. Clause (1) speaks of securing and protecting a social order in which social, economic and political justice informs national life. Clause (2) directs the State to strive to minimize inequalities in income and to eliminate inequalities in status, facilities and opportunities, among individuals and groups. The provision is a guiding constitutional objective for public policy rather than a detailed programme with a specific individual remedy. It can be considered when studying policies aimed at social inclusion, equitable access to services and reducing structural disparities. Article 38 should be read with other Directive Principles, including Articles 39 and 39A, which provide more specific policy guidance in related areas."
        },
        {
          "heading": "Why is Article 38 important?",
          "content": "Article 38 guides the State toward a just social order and reducing inequalities across dimensions identified in the Constitution.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 38",
          "content": "A public policy aims to reduce disparities in access to opportunities or facilities. Article 38 can serve as a Directive Principle guiding such policy.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 38 म्हणजे काय?",
          "content": "कलम 38 राज्याला न्यायपूर्ण सामाजिक व्यवस्था आणि संविधानात नमूद केलेल्या विविध क्षेत्रांतील असमानता कमी करण्यासाठी मार्गदर्शन करते.\n\nकलम 38 सामाजिक कल्याण आणि न्यायपूर्ण व्यवस्था निर्माण करण्याबाबत व्यापक घटनात्मक उद्दिष्ट व्यक्त करते. पहिल्या भागात सामाजिक, आर्थिक आणि राजकीय न्याय राष्ट्रीय जीवनाच्या सर्व संस्थांमध्ये प्रतिबिंबित होईल अशी सामाजिक व्यवस्था निर्माण करण्याचे निर्देश आहेत. पुढील भागात उत्पन्नातील असमानता कमी करणे आणि व्यक्ती व समूहांमधील दर्जा, सुविधा आणि संधी यांतील असमानता दूर करण्यासाठी प्रयत्न करण्याचे निर्देश दिले आहेत. हे विशिष्ट वैयक्तिक उपाय किंवा तत्काळ लाभ ठरवणारे कलम नसून सार्वजनिक धोरणासाठी मार्गदर्शक तत्त्व आहे. सामाजिक समावेशन, सेवांमध्ये समान प्रवेश आणि असमानता कमी करण्याच्या धोरणांचा अभ्यास करताना त्याचा संदर्भ घेतला जाऊ शकतो. कलम 38 सोबत कलम 39 आणि 39A यांचा अभ्यास केल्यास संबंधित अधिक विशिष्ट उद्दिष्टे समजतात."
        },
        {
          "heading": "कलम 38 महत्त्वाचे का आहे?",
          "content": "कलम 38 राज्याला न्यायपूर्ण सामाजिक व्यवस्था आणि संविधानात नमूद केलेल्या विविध क्षेत्रांतील असमानता कमी करण्यासाठी मार्गदर्शन करते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 38 चे उदाहरण",
          "content": "संधी किंवा सुविधांमधील असमानता कमी करण्याचे सार्वजनिक धोरण आखताना कलम 38 मार्गदर्शक तत्त्व ठरू शकते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 38",
      "Article 38 of Indian Constitution",
      "Article 38 explained",
      "कलम 38",
      "कलम 38 भारतीय संविधान",
      "State to Secure a Social Order for the Promotion of Welfare of the People",
      "लोककल्याणासाठी सामाजिक व्यवस्था निर्माण करण्याचे राज्याचे कर्तव्य"
    ],
    "relatedIds": [
      "39",
      "39A",
      "40"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "39",
    "articleNumber": "Article 39",
    "title": {
      "en": "Certain Principles of Policy to Be Followed by the State",
      "mr": "राज्याने अनुसरावयाची धोरणाची काही तत्त्वे"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 39 directs the State toward principles including adequate livelihood for all, fair distribution of material resources, prevention of concentration of wealth, equal pay for equal work, protection of workers and children, and opportunities for healthy development of children.",
      "mr": "कलम 39 राज्याला सर्वांना उपजीविकेची पुरेशी साधने, भौतिक संसाधनांचे न्याय्य वितरण, संपत्तीचे केंद्रीकरण रोखणे, समान कामासाठी समान वेतन, कामगार व बालकांचे संरक्षण आणि बालकांच्या निरोगी विकासासाठी संधी यांसारख्या तत्त्वांचे मार्गदर्शन देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 39 contains policy principles concerning livelihood, resources, economic concentration, equal pay, worker protection and child development.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nThe principles listed in Article 39 cover several dimensions of economic and social policy. They include adequate means of livelihood, distribution of material resources for the common good, prevention of harmful concentration of wealth, equal pay for equal work for men and women, protection of workers' health and strength, and protection of children from abuse and from circumstances that undermine development. The Article also addresses opportunities for children to develop in a healthy manner and with dignity. These are Directive Principles that guide the State in policy and law-making. They are not a substitute for reading the specific laws that implement particular objectives. Article 39 is commonly studied with Articles 38, 39A, 41, 42 and 43 to understand the Constitution's welfare and social justice framework.",
      "mr": "कलम 39 उपजीविका, संसाधने, आर्थिक केंद्रीकरण, समान वेतन, कामगारांचे संरक्षण आणि बालविकास यासंबंधी धोरणात्मक तत्त्वे मांडते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 39 मधील तत्त्वे सामाजिक आणि आर्थिक धोरणाच्या विविध पैलूंशी संबंधित आहेत. सर्वांना उपजीविकेची पुरेशी साधने, भौतिक संसाधनांचे सामान्य हितासाठी वितरण, संपत्तीचे हानिकारक केंद्रीकरण रोखणे, स्त्री आणि पुरुषांना समान कामासाठी समान वेतन, कामगारांच्या आरोग्याचे संरक्षण आणि बालकांचे शोषण रोखणे यांचा त्यात समावेश आहे. बालकांना निरोगी विकास आणि सन्मानाने वाढण्याची संधी मिळावी, याबाबतही हे कलम मार्गदर्शन करते. ही राज्याच्या धोरणाची निर्देशक तत्त्वे आहेत आणि कायदे व धोरणे तयार करताना दिशा देतात. विशिष्ट उद्दिष्टांसाठी लागू केलेले कायदे स्वतंत्रपणे पाहणे आवश्यक आहे. कलम 39 चा अभ्यास कलम 38, 39A, 41, 42 आणि 43 सोबत केल्यास सामाजिक कल्याणाची घटनात्मक चौकट अधिक स्पष्ट होते."
    },
    "verySimple": {
      "en": "Article 39 contains policy principles concerning livelihood, resources, economic concentration, equal pay, worker protection and child development.",
      "mr": "कलम 39 उपजीविका, संसाधने, आर्थिक केंद्रीकरण, समान वेतन, कामगारांचे संरक्षण आणि बालविकास यासंबंधी धोरणात्मक तत्त्वे मांडते."
    },
    "example": {
      "en": "A policymaker considers access to livelihoods, fair resource distribution or child welfare. These concerns are among the subjects addressed by Article 39.",
      "mr": "उपजीविका, संसाधनांचे न्याय्य वितरण किंवा बालकल्याण याबाबत धोरण तयार करताना कलम 39 मधील तत्त्वांचा विचार होऊ शकतो."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 39 of the Indian Constitution?",
          "content": "Article 39 contains policy principles concerning livelihood, resources, economic concentration, equal pay, worker protection and child development.\n\nThe principles listed in Article 39 cover several dimensions of economic and social policy. They include adequate means of livelihood, distribution of material resources for the common good, prevention of harmful concentration of wealth, equal pay for equal work for men and women, protection of workers' health and strength, and protection of children from abuse and from circumstances that undermine development. The Article also addresses opportunities for children to develop in a healthy manner and with dignity. These are Directive Principles that guide the State in policy and law-making. They are not a substitute for reading the specific laws that implement particular objectives. Article 39 is commonly studied with Articles 38, 39A, 41, 42 and 43 to understand the Constitution's welfare and social justice framework."
        },
        {
          "heading": "Why is Article 39 important?",
          "content": "Article 39 contains policy principles concerning livelihood, resources, economic concentration, equal pay, worker protection and child development.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 39",
          "content": "A policymaker considers access to livelihoods, fair resource distribution or child welfare. These concerns are among the subjects addressed by Article 39.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 39 म्हणजे काय?",
          "content": "कलम 39 उपजीविका, संसाधने, आर्थिक केंद्रीकरण, समान वेतन, कामगारांचे संरक्षण आणि बालविकास यासंबंधी धोरणात्मक तत्त्वे मांडते.\n\nकलम 39 मधील तत्त्वे सामाजिक आणि आर्थिक धोरणाच्या विविध पैलूंशी संबंधित आहेत. सर्वांना उपजीविकेची पुरेशी साधने, भौतिक संसाधनांचे सामान्य हितासाठी वितरण, संपत्तीचे हानिकारक केंद्रीकरण रोखणे, स्त्री आणि पुरुषांना समान कामासाठी समान वेतन, कामगारांच्या आरोग्याचे संरक्षण आणि बालकांचे शोषण रोखणे यांचा त्यात समावेश आहे. बालकांना निरोगी विकास आणि सन्मानाने वाढण्याची संधी मिळावी, याबाबतही हे कलम मार्गदर्शन करते. ही राज्याच्या धोरणाची निर्देशक तत्त्वे आहेत आणि कायदे व धोरणे तयार करताना दिशा देतात. विशिष्ट उद्दिष्टांसाठी लागू केलेले कायदे स्वतंत्रपणे पाहणे आवश्यक आहे. कलम 39 चा अभ्यास कलम 38, 39A, 41, 42 आणि 43 सोबत केल्यास सामाजिक कल्याणाची घटनात्मक चौकट अधिक स्पष्ट होते."
        },
        {
          "heading": "कलम 39 महत्त्वाचे का आहे?",
          "content": "कलम 39 उपजीविका, संसाधने, आर्थिक केंद्रीकरण, समान वेतन, कामगारांचे संरक्षण आणि बालविकास यासंबंधी धोरणात्मक तत्त्वे मांडते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 39 चे उदाहरण",
          "content": "उपजीविका, संसाधनांचे न्याय्य वितरण किंवा बालकल्याण याबाबत धोरण तयार करताना कलम 39 मधील तत्त्वांचा विचार होऊ शकतो.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 39",
      "Article 39 of Indian Constitution",
      "Article 39 explained",
      "कलम 39",
      "कलम 39 भारतीय संविधान",
      "Certain Principles of Policy to Be Followed by the State",
      "राज्याने अनुसरावयाची धोरणाची काही तत्त्वे"
    ],
    "relatedIds": [
      "38",
      "39A",
      "41",
      "42",
      "43"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "39A",
    "articleNumber": "Article 39A",
    "title": {
      "en": "Equal Justice and Free Legal Aid",
      "mr": "समान न्याय व मोफत कायदेशीर मदत"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 39A directs the State to ensure that the legal system promotes justice on a basis of equal opportunity and to provide free legal aid through suitable legislation, schemes or other means so that opportunities for securing justice are not denied because of economic or other disabilities.",
      "mr": "कलम 39A राज्याला समान संधीच्या आधारावर न्यायव्यवस्था न्यायाला प्रोत्साहन देईल याची खात्री करण्याचे आणि आर्थिक किंवा इतर अडचणींमुळे न्याय मिळवण्याच्या संधी नाकारल्या जाऊ नयेत म्हणून कायदे, योजना किंवा इतर उपायांद्वारे मोफत कायदेशीर मदत उपलब्ध करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 39A is a Directive Principle supporting equal access to justice and free legal aid, implemented through laws and schemes.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 39A emphasizes that access to justice should not depend solely on a person's financial resources or other disadvantages. It directs the State to promote a legal system based on equal opportunity and to provide free legal aid through suitable legislation, schemes or other means. The constitutional objective is to help ensure that opportunities to secure justice are not denied because of economic or other barriers. Legal aid is delivered through the legal framework and institutions established for that purpose, and eligibility and procedures depend on the applicable rules. Article 39A is a Directive Principle, not a standalone guarantee that every person in every dispute automatically receives a particular lawyer or service. It is important to study it with Article 14 and the legal-aid legislation and schemes.",
      "mr": "कलम 39A समान न्यायप्रवेश आणि मोफत कायदेशीर मदतीला पाठबळ देणारे निर्देशक तत्त्व आहे; त्याची अंमलबजावणी कायदे व योजनांद्वारे होते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 39A न्याय मिळवण्याची संधी व्यक्तीच्या आर्थिक परिस्थितीवर किंवा इतर अडचणींवर अवलंबून राहू नये, या उद्दिष्टावर भर देते. समान संधीच्या आधारावर न्यायव्यवस्थेने न्यायाला प्रोत्साहन द्यावे आणि आर्थिक किंवा इतर अडचणींमुळे न्याय मिळवण्याच्या संधी नाकारल्या जाऊ नयेत म्हणून कायदे, योजना किंवा इतर उपायांद्वारे मोफत कायदेशीर मदत उपलब्ध करावी, असे राज्याला निर्देश दिले आहेत. कायदेशीर मदत संबंधित कायदे आणि संस्थांद्वारे दिली जाते; पात्रता, प्रक्रिया आणि उपलब्ध सेवा लागू नियमांवर अवलंबून असतात. कलम 39A हे निर्देशक तत्त्व आहे, त्यामुळे प्रत्येक व्यक्तीला प्रत्येक वादात आपोआप विशिष्ट वकील किंवा सेवा मिळते असा अर्थ होत नाही. कलम 14 आणि कायदेशीर मदतविषयक कायदे व योजनांसोबत त्याचा अभ्यास उपयुक्त ठरतो."
    },
    "verySimple": {
      "en": "Article 39A is a Directive Principle supporting equal access to justice and free legal aid, implemented through laws and schemes.",
      "mr": "कलम 39A समान न्यायप्रवेश आणि मोफत कायदेशीर मदतीला पाठबळ देणारे निर्देशक तत्त्व आहे; त्याची अंमलबजावणी कायदे व योजनांद्वारे होते."
    },
    "example": {
      "en": "A person cannot afford legal assistance. Legal-aid mechanisms seek to reduce barriers to access to justice, reflecting Article 39A.",
      "mr": "एखाद्या व्यक्तीला कायदेशीर मदत परवडत नसल्यास, न्यायप्रवेशातील अडथळे कमी करण्यासाठी कायदेशीर मदत यंत्रणा कार्य करतात; हे कलम 39A च्या तत्त्वाशी संबंधित आहे."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 39A of the Indian Constitution?",
          "content": "Article 39A is a Directive Principle supporting equal access to justice and free legal aid, implemented through laws and schemes.\n\nArticle 39A emphasizes that access to justice should not depend solely on a person's financial resources or other disadvantages. It directs the State to promote a legal system based on equal opportunity and to provide free legal aid through suitable legislation, schemes or other means. The constitutional objective is to help ensure that opportunities to secure justice are not denied because of economic or other barriers. Legal aid is delivered through the legal framework and institutions established for that purpose, and eligibility and procedures depend on the applicable rules. Article 39A is a Directive Principle, not a standalone guarantee that every person in every dispute automatically receives a particular lawyer or service. It is important to study it with Article 14 and the legal-aid legislation and schemes."
        },
        {
          "heading": "Why is Article 39A important?",
          "content": "Article 39A is a Directive Principle supporting equal access to justice and free legal aid, implemented through laws and schemes.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 39A",
          "content": "A person cannot afford legal assistance. Legal-aid mechanisms seek to reduce barriers to access to justice, reflecting Article 39A.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 39A म्हणजे काय?",
          "content": "कलम 39A समान न्यायप्रवेश आणि मोफत कायदेशीर मदतीला पाठबळ देणारे निर्देशक तत्त्व आहे; त्याची अंमलबजावणी कायदे व योजनांद्वारे होते.\n\nकलम 39A न्याय मिळवण्याची संधी व्यक्तीच्या आर्थिक परिस्थितीवर किंवा इतर अडचणींवर अवलंबून राहू नये, या उद्दिष्टावर भर देते. समान संधीच्या आधारावर न्यायव्यवस्थेने न्यायाला प्रोत्साहन द्यावे आणि आर्थिक किंवा इतर अडचणींमुळे न्याय मिळवण्याच्या संधी नाकारल्या जाऊ नयेत म्हणून कायदे, योजना किंवा इतर उपायांद्वारे मोफत कायदेशीर मदत उपलब्ध करावी, असे राज्याला निर्देश दिले आहेत. कायदेशीर मदत संबंधित कायदे आणि संस्थांद्वारे दिली जाते; पात्रता, प्रक्रिया आणि उपलब्ध सेवा लागू नियमांवर अवलंबून असतात. कलम 39A हे निर्देशक तत्त्व आहे, त्यामुळे प्रत्येक व्यक्तीला प्रत्येक वादात आपोआप विशिष्ट वकील किंवा सेवा मिळते असा अर्थ होत नाही. कलम 14 आणि कायदेशीर मदतविषयक कायदे व योजनांसोबत त्याचा अभ्यास उपयुक्त ठरतो."
        },
        {
          "heading": "कलम 39A महत्त्वाचे का आहे?",
          "content": "कलम 39A समान न्यायप्रवेश आणि मोफत कायदेशीर मदतीला पाठबळ देणारे निर्देशक तत्त्व आहे; त्याची अंमलबजावणी कायदे व योजनांद्वारे होते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 39A चे उदाहरण",
          "content": "एखाद्या व्यक्तीला कायदेशीर मदत परवडत नसल्यास, न्यायप्रवेशातील अडथळे कमी करण्यासाठी कायदेशीर मदत यंत्रणा कार्य करतात; हे कलम 39A च्या तत्त्वाशी संबंधित आहे.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 39A",
      "Article 39A of Indian Constitution",
      "Article 39A explained",
      "कलम 39A",
      "कलम 39A भारतीय संविधान",
      "Equal Justice and Free Legal Aid",
      "समान न्याय व मोफत कायदेशीर मदत"
    ],
    "relatedIds": [
      "14",
      "38",
      "39"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "40",
    "articleNumber": "Article 40",
    "title": {
      "en": "Organization of Village Panchayats",
      "mr": "ग्रामपंचायतींची स्थापना व संघटन"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 40 directs the State to organize village panchayats and endow them with powers and authority necessary to function as units of self-government.",
      "mr": "कलम 40 राज्याला ग्रामपंचायतींचे संघटन करण्याचे आणि स्वशासनाच्या संस्था म्हणून कार्य करण्यासाठी आवश्यक अधिकार व क्षमता प्रदान करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 40 is a Directive Principle supporting village-level self-government through panchayats.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 40 reflects the constitutional goal of strengthening local self-government at the village level. It directs the State to organize village panchayats and provide them with powers and authority necessary to function as units of self-government. The Article is part of the Directive Principles and states an objective for governance and policy. The later constitutional framework relating to Panchayats, including Part IX, provides more detailed constitutional provisions for local institutions. Article 40 should therefore be understood as an early policy direction that is complemented by later constitutional and statutory arrangements. Panchayat functions, elections, finances and responsibilities are determined by the applicable provisions and laws. The Article is relevant to discussions about decentralization, community participation and rural governance.",
      "mr": "कलम 40 ग्रामपंचायतींच्या माध्यमातून गावपातळीवरील स्वशासनाला पाठबळ देणारे निर्देशक तत्त्व आहे.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 40 गावपातळीवरील स्वशासन मजबूत करण्याच्या घटनात्मक उद्दिष्टाशी संबंधित आहे. राज्याने ग्रामपंचायतींचे संघटन करून स्वशासनाच्या संस्था म्हणून कार्य करण्यासाठी आवश्यक अधिकार आणि क्षमता त्यांना द्याव्यात, असे हे कलम सांगते. हे भाग IV मधील निर्देशक तत्त्व असून शासन आणि धोरणासाठी दिशा देते. पुढील घटनात्मक रचनेत पंचायतींसाठी भाग IX आणि त्यातील अधिक तपशीलवार तरतुदी आहेत. त्यामुळे कलम 40 हे स्थानिक स्वशासनाला पाठबळ देणारे प्रारंभीचे धोरणात्मक निर्देश असून पुढील घटनात्मक व कायदेशीर व्यवस्थांद्वारे त्याला अधिक तपशील मिळतो. पंचायतांचे कार्य, निवडणुका, वित्त आणि जबाबदाऱ्या लागू तरतुदी व कायद्यांनुसार ठरतात. विकेंद्रीकरण, स्थानिक सहभाग आणि ग्रामीण प्रशासनाचा अभ्यास करताना हे कलम महत्त्वाचे आहे."
    },
    "verySimple": {
      "en": "Article 40 is a Directive Principle supporting village-level self-government through panchayats.",
      "mr": "कलम 40 ग्रामपंचायतींच्या माध्यमातून गावपातळीवरील स्वशासनाला पाठबळ देणारे निर्देशक तत्त्व आहे."
    },
    "example": {
      "en": "A village-level body plans local services and development. Article 40 expresses the constitutional policy supporting panchayat self-government.",
      "mr": "गावपातळीवरील संस्था स्थानिक सेवा आणि विकासाचे नियोजन करते. कलम 40 पंचायत स्वशासनाला पाठबळ देणारे घटनात्मक धोरण व्यक्त करते."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 40 of the Indian Constitution?",
          "content": "Article 40 is a Directive Principle supporting village-level self-government through panchayats.\n\nArticle 40 reflects the constitutional goal of strengthening local self-government at the village level. It directs the State to organize village panchayats and provide them with powers and authority necessary to function as units of self-government. The Article is part of the Directive Principles and states an objective for governance and policy. The later constitutional framework relating to Panchayats, including Part IX, provides more detailed constitutional provisions for local institutions. Article 40 should therefore be understood as an early policy direction that is complemented by later constitutional and statutory arrangements. Panchayat functions, elections, finances and responsibilities are determined by the applicable provisions and laws. The Article is relevant to discussions about decentralization, community participation and rural governance."
        },
        {
          "heading": "Why is Article 40 important?",
          "content": "Article 40 is a Directive Principle supporting village-level self-government through panchayats.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 40",
          "content": "A village-level body plans local services and development. Article 40 expresses the constitutional policy supporting panchayat self-government.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 40 म्हणजे काय?",
          "content": "कलम 40 ग्रामपंचायतींच्या माध्यमातून गावपातळीवरील स्वशासनाला पाठबळ देणारे निर्देशक तत्त्व आहे.\n\nकलम 40 गावपातळीवरील स्वशासन मजबूत करण्याच्या घटनात्मक उद्दिष्टाशी संबंधित आहे. राज्याने ग्रामपंचायतींचे संघटन करून स्वशासनाच्या संस्था म्हणून कार्य करण्यासाठी आवश्यक अधिकार आणि क्षमता त्यांना द्याव्यात, असे हे कलम सांगते. हे भाग IV मधील निर्देशक तत्त्व असून शासन आणि धोरणासाठी दिशा देते. पुढील घटनात्मक रचनेत पंचायतींसाठी भाग IX आणि त्यातील अधिक तपशीलवार तरतुदी आहेत. त्यामुळे कलम 40 हे स्थानिक स्वशासनाला पाठबळ देणारे प्रारंभीचे धोरणात्मक निर्देश असून पुढील घटनात्मक व कायदेशीर व्यवस्थांद्वारे त्याला अधिक तपशील मिळतो. पंचायतांचे कार्य, निवडणुका, वित्त आणि जबाबदाऱ्या लागू तरतुदी व कायद्यांनुसार ठरतात. विकेंद्रीकरण, स्थानिक सहभाग आणि ग्रामीण प्रशासनाचा अभ्यास करताना हे कलम महत्त्वाचे आहे."
        },
        {
          "heading": "कलम 40 महत्त्वाचे का आहे?",
          "content": "कलम 40 ग्रामपंचायतींच्या माध्यमातून गावपातळीवरील स्वशासनाला पाठबळ देणारे निर्देशक तत्त्व आहे.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 40 चे उदाहरण",
          "content": "गावपातळीवरील संस्था स्थानिक सेवा आणि विकासाचे नियोजन करते. कलम 40 पंचायत स्वशासनाला पाठबळ देणारे घटनात्मक धोरण व्यक्त करते.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 40",
      "Article 40 of Indian Constitution",
      "Article 40 explained",
      "कलम 40",
      "कलम 40 भारतीय संविधान",
      "Organization of Village Panchayats",
      "ग्रामपंचायतींची स्थापना व संघटन"
    ],
    "relatedIds": [
      "73",
      "243"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "41",
    "articleNumber": "Article 41",
    "title": {
      "en": "Right to Work, Education and Public Assistance in Certain Cases",
      "mr": "काम, शिक्षण व सार्वजनिक सहाय्याबाबत राज्याचे धोरण"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 41 directs the State, within its economic capacity and development, to make effective provision for the right to work, education and public assistance in cases of unemployment, old age, sickness, disablement and other cases of undeserved want.",
      "mr": "कलम 41 राज्याच्या आर्थिक क्षमता आणि विकासाच्या मर्यादेत बेरोजगारी, वृद्धत्व, आजारपण, अपंगत्व आणि अन्य अनपेक्षित गरजेच्या परिस्थितींमध्ये काम, शिक्षण व सार्वजनिक सहाय्यासाठी प्रभावी तरतूद करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 41 is a Directive Principle qualified by the State's economic capacity and development.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 41 identifies areas in which the State is directed to make effective provision, including work, education and public assistance in specified situations. Its wording expressly qualifies this responsibility by the State's economic capacity and development. The situations listed include unemployment, old age, sickness, disablement and other cases of undeserved want. This qualification is significant: the Article sets a policy direction rather than promising an unconditional, immediate benefit of a fixed amount to every person. Government schemes and laws may give practical effect to these aims, with their eligibility rules and procedures. Article 41 is part of the broader social welfare framework of Part IV and is often studied with Articles 38, 39, 42 and 43.",
      "mr": "कलम 41 हे राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन असलेले निर्देशक तत्त्व आहे.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 41 मध्ये काम, शिक्षण आणि विशिष्ट परिस्थितींमध्ये सार्वजनिक सहाय्य याबाबत राज्याने प्रभावी तरतूद करण्याचे निर्देश दिले आहेत. मात्र या जबाबदारीची शब्दरचना राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन आहे. बेरोजगारी, वृद्धत्व, आजारपण, अपंगत्व आणि अन्य अनपेक्षित गरजेच्या परिस्थितींचा त्यात उल्लेख आहे. ही मर्यादा महत्त्वाची आहे: कलम 41 प्रत्येक व्यक्तीला तत्काळ, अमर्याद किंवा ठराविक रकमेचा लाभ देण्याची स्वतंत्र हमी म्हणून समजू नये. विविध कायदे आणि सरकारी योजनांद्वारे या उद्दिष्टांना व्यवहारात रूप दिले जाऊ शकते; त्यांची पात्रता आणि प्रक्रिया वेगवेगळी असू शकते. कलम 41 हे भाग IV मधील व्यापक सामाजिक कल्याणाच्या चौकटीचा भाग आहे आणि कलम 38, 39, 42 व 43 सोबत अभ्यासावे."
    },
    "verySimple": {
      "en": "Article 41 is a Directive Principle qualified by the State's economic capacity and development.",
      "mr": "कलम 41 हे राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन असलेले निर्देशक तत्त्व आहे."
    },
    "example": {
      "en": "Public assistance programmes for people facing unemployment, old age or disability may reflect policy aims addressed by Article 41.",
      "mr": "बेरोजगारी, वृद्धत्व किंवा अपंगत्वाचा सामना करणाऱ्यांसाठी सार्वजनिक सहाय्य योजना कलम 41 मधील धोरणात्मक उद्दिष्टांशी संबंधित असू शकतात."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 41 of the Indian Constitution?",
          "content": "Article 41 is a Directive Principle qualified by the State's economic capacity and development.\n\nArticle 41 identifies areas in which the State is directed to make effective provision, including work, education and public assistance in specified situations. Its wording expressly qualifies this responsibility by the State's economic capacity and development. The situations listed include unemployment, old age, sickness, disablement and other cases of undeserved want. This qualification is significant: the Article sets a policy direction rather than promising an unconditional, immediate benefit of a fixed amount to every person. Government schemes and laws may give practical effect to these aims, with their eligibility rules and procedures. Article 41 is part of the broader social welfare framework of Part IV and is often studied with Articles 38, 39, 42 and 43."
        },
        {
          "heading": "Why is Article 41 important?",
          "content": "Article 41 is a Directive Principle qualified by the State's economic capacity and development.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 41",
          "content": "Public assistance programmes for people facing unemployment, old age or disability may reflect policy aims addressed by Article 41.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 41 म्हणजे काय?",
          "content": "कलम 41 हे राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन असलेले निर्देशक तत्त्व आहे.\n\nकलम 41 मध्ये काम, शिक्षण आणि विशिष्ट परिस्थितींमध्ये सार्वजनिक सहाय्य याबाबत राज्याने प्रभावी तरतूद करण्याचे निर्देश दिले आहेत. मात्र या जबाबदारीची शब्दरचना राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन आहे. बेरोजगारी, वृद्धत्व, आजारपण, अपंगत्व आणि अन्य अनपेक्षित गरजेच्या परिस्थितींचा त्यात उल्लेख आहे. ही मर्यादा महत्त्वाची आहे: कलम 41 प्रत्येक व्यक्तीला तत्काळ, अमर्याद किंवा ठराविक रकमेचा लाभ देण्याची स्वतंत्र हमी म्हणून समजू नये. विविध कायदे आणि सरकारी योजनांद्वारे या उद्दिष्टांना व्यवहारात रूप दिले जाऊ शकते; त्यांची पात्रता आणि प्रक्रिया वेगवेगळी असू शकते. कलम 41 हे भाग IV मधील व्यापक सामाजिक कल्याणाच्या चौकटीचा भाग आहे आणि कलम 38, 39, 42 व 43 सोबत अभ्यासावे."
        },
        {
          "heading": "कलम 41 महत्त्वाचे का आहे?",
          "content": "कलम 41 हे राज्याच्या आर्थिक क्षमता आणि विकासाच्या अधीन असलेले निर्देशक तत्त्व आहे.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 41 चे उदाहरण",
          "content": "बेरोजगारी, वृद्धत्व किंवा अपंगत्वाचा सामना करणाऱ्यांसाठी सार्वजनिक सहाय्य योजना कलम 41 मधील धोरणात्मक उद्दिष्टांशी संबंधित असू शकतात.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 41",
      "Article 41 of Indian Constitution",
      "Article 41 explained",
      "कलम 41",
      "कलम 41 भारतीय संविधान",
      "Right to Work, Education and Public Assistance in Certain Cases",
      "काम, शिक्षण व सार्वजनिक सहाय्याबाबत राज्याचे धोरण"
    ],
    "relatedIds": [
      "38",
      "39",
      "42",
      "43"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "42",
    "articleNumber": "Article 42",
    "title": {
      "en": "Provision for Just and Humane Conditions of Work and Maternity Relief",
      "mr": "कामाच्या न्याय्य व मानवी परिस्थिती आणि प्रसूती सहाय्य"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 42 directs the State to make provision for securing just and humane conditions of work and for maternity relief.",
      "mr": "कलम 42 राज्याला कामाच्या न्याय्य आणि मानवी परिस्थिती सुनिश्चित करण्यासाठी तसेच प्रसूती सहाय्याची तरतूद करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 42 guides policy on humane working conditions and maternity relief.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 42 has two linked policy objectives: securing just and humane conditions of work and providing maternity relief. The provision reflects the Constitution's concern for working conditions and the circumstances associated with pregnancy and maternity. It is a Directive Principle, so it guides the State in developing laws and policies rather than setting out a detailed procedure or benefit by itself. Specific entitlements, duration, eligibility and employer responsibilities are addressed through legislation and applicable rules. When studying maternity protection or workplace conditions, Article 42 offers constitutional context, but the relevant statute and current regulations must also be consulted. The Article is often read alongside Article 41 and Article 43, which address public assistance and worker living conditions, respectively.",
      "mr": "कलम 42 कामाच्या मानवी परिस्थिती आणि प्रसूती सहाय्याबाबत धोरणाला दिशा देते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 42 मध्ये दोन संबंधित धोरणात्मक उद्दिष्टे आहेत: कामाच्या न्याय्य आणि मानवी परिस्थिती सुनिश्चित करणे आणि प्रसूती सहाय्याची तरतूद करणे. कामाच्या परिस्थिती तसेच गर्भधारणा आणि प्रसूतीशी संबंधित गरजांबाबत संविधानाची काळजी या कलमातून व्यक्त होते. हे निर्देशक तत्त्व असल्यामुळे स्वतःच एखादी विशिष्ट प्रक्रिया, लाभाची कालमर्यादा किंवा पात्रता ठरवत नाही. विशिष्ट हक्क, लाभ, कालावधी आणि नियोक्त्याच्या जबाबदाऱ्या संबंधित कायदे व नियमांमध्ये ठरतात. कामाच्या ठिकाणी संरक्षण किंवा प्रसूती लाभांचा अभ्यास करताना कलम 42 घटनात्मक संदर्भ देते; मात्र लागू कायदे आणि अद्ययावत नियम तपासणे आवश्यक आहे. कलम 41 आणि 43 सोबत अभ्यास केल्यास सार्वजनिक सहाय्य व कामगारांच्या जीवनमानाशी संबंधित तत्त्वे समजतात."
    },
    "verySimple": {
      "en": "Article 42 guides policy on humane working conditions and maternity relief.",
      "mr": "कलम 42 कामाच्या मानवी परिस्थिती आणि प्रसूती सहाय्याबाबत धोरणाला दिशा देते."
    },
    "example": {
      "en": "Workplace policies that seek humane conditions and maternity relief are among the policy concerns reflected in Article 42.",
      "mr": "कामाच्या ठिकाणी मानवी परिस्थिती आणि प्रसूती सहाय्य सुनिश्चित करणारी धोरणे कलम 42 मधील उद्दिष्टांशी संबंधित आहेत."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 42 of the Indian Constitution?",
          "content": "Article 42 guides policy on humane working conditions and maternity relief.\n\nArticle 42 has two linked policy objectives: securing just and humane conditions of work and providing maternity relief. The provision reflects the Constitution's concern for working conditions and the circumstances associated with pregnancy and maternity. It is a Directive Principle, so it guides the State in developing laws and policies rather than setting out a detailed procedure or benefit by itself. Specific entitlements, duration, eligibility and employer responsibilities are addressed through legislation and applicable rules. When studying maternity protection or workplace conditions, Article 42 offers constitutional context, but the relevant statute and current regulations must also be consulted. The Article is often read alongside Article 41 and Article 43, which address public assistance and worker living conditions, respectively."
        },
        {
          "heading": "Why is Article 42 important?",
          "content": "Article 42 guides policy on humane working conditions and maternity relief.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 42",
          "content": "Workplace policies that seek humane conditions and maternity relief are among the policy concerns reflected in Article 42.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 42 म्हणजे काय?",
          "content": "कलम 42 कामाच्या मानवी परिस्थिती आणि प्रसूती सहाय्याबाबत धोरणाला दिशा देते.\n\nकलम 42 मध्ये दोन संबंधित धोरणात्मक उद्दिष्टे आहेत: कामाच्या न्याय्य आणि मानवी परिस्थिती सुनिश्चित करणे आणि प्रसूती सहाय्याची तरतूद करणे. कामाच्या परिस्थिती तसेच गर्भधारणा आणि प्रसूतीशी संबंधित गरजांबाबत संविधानाची काळजी या कलमातून व्यक्त होते. हे निर्देशक तत्त्व असल्यामुळे स्वतःच एखादी विशिष्ट प्रक्रिया, लाभाची कालमर्यादा किंवा पात्रता ठरवत नाही. विशिष्ट हक्क, लाभ, कालावधी आणि नियोक्त्याच्या जबाबदाऱ्या संबंधित कायदे व नियमांमध्ये ठरतात. कामाच्या ठिकाणी संरक्षण किंवा प्रसूती लाभांचा अभ्यास करताना कलम 42 घटनात्मक संदर्भ देते; मात्र लागू कायदे आणि अद्ययावत नियम तपासणे आवश्यक आहे. कलम 41 आणि 43 सोबत अभ्यास केल्यास सार्वजनिक सहाय्य व कामगारांच्या जीवनमानाशी संबंधित तत्त्वे समजतात."
        },
        {
          "heading": "कलम 42 महत्त्वाचे का आहे?",
          "content": "कलम 42 कामाच्या मानवी परिस्थिती आणि प्रसूती सहाय्याबाबत धोरणाला दिशा देते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 42 चे उदाहरण",
          "content": "कामाच्या ठिकाणी मानवी परिस्थिती आणि प्रसूती सहाय्य सुनिश्चित करणारी धोरणे कलम 42 मधील उद्दिष्टांशी संबंधित आहेत.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 42",
      "Article 42 of Indian Constitution",
      "Article 42 explained",
      "कलम 42",
      "कलम 42 भारतीय संविधान",
      "Provision for Just and Humane Conditions of Work and Maternity Relief",
      "कामाच्या न्याय्य व मानवी परिस्थिती आणि प्रसूती सहाय्य"
    ],
    "relatedIds": [
      "41",
      "43"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "43",
    "articleNumber": "Article 43",
    "title": {
      "en": "Living Wage, etc., for Workers",
      "mr": "कामगारांसाठी जीवनमान वेतन व सन्मानजनक जीवन"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 43 directs the State to endeavour to secure, by suitable legislation or economic organization or other means, a living wage, decent conditions of work and a decent standard of life for workers, and to promote cottage industries in rural areas.",
      "mr": "कलम 43 राज्याला योग्य कायदे, आर्थिक संघटन किंवा इतर उपायांद्वारे कामगारांना जीवनमान वेतन, कामाच्या सन्मानजनक परिस्थिती आणि योग्य जीवनमान मिळवून देण्यासाठी प्रयत्न करण्याचे तसेच ग्रामीण भागातील कुटीर उद्योगांना प्रोत्साहन देण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 43 addresses living wages, decent work and life conditions for workers and promotion of cottage industries in rural areas.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 43 directs the State to endeavour to secure a living wage and decent conditions of work and life for workers. It also refers to promoting cottage industries in rural areas, particularly through individual or cooperative organization. The text is broader than a minimum wage alone: it expresses a policy objective concerning the ability of workers to maintain a dignified standard of living. The practical details of wages, working hours, benefits and workplace protections are addressed through legislation and regulations, which may change over time. Article 43 is a Directive Principle and should not be read as a standalone calculation of a wage entitlement. It is useful to study with Articles 39, 41 and 42 to understand the Constitution's approach to labour and social welfare.",
      "mr": "कलम 43 कामगारांचे जीवनमान वेतन, सन्मानजनक काम व जीवनस्थिती आणि ग्रामीण कुटीर उद्योगांच्या प्रोत्साहनाशी संबंधित आहे.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 43 राज्याला कामगारांसाठी जीवनमान वेतन, कामाच्या सन्मानजनक परिस्थिती आणि योग्य जीवनमान मिळवून देण्यासाठी प्रयत्न करण्याचे निर्देश देते. ग्रामीण भागात कुटीर उद्योगांना प्रोत्साहन देण्याचा उल्लेखही त्यात आहे, विशेषतः वैयक्तिक किंवा सहकारी संघटनांच्या माध्यमातून. हे कलम केवळ किमान वेतनाच्या संकल्पनेपुरते मर्यादित नाही; कामगारांना सन्मानाने जगता यावे यासाठी व्यापक धोरणात्मक उद्दिष्ट व्यक्त करते. वेतन, कामाचे तास, लाभ आणि कामाच्या ठिकाणचे संरक्षण यांची व्यवहारातील माहिती संबंधित कायदे आणि नियमांमध्ये असते, जे काळानुसार बदलू शकतात. कलम 43 हे निर्देशक तत्त्व आहे, त्यामुळे ते स्वतः विशिष्ट वेतनाची गणना किंवा स्वतंत्र दावा ठरवत नाही. कलम 39, 41 आणि 42 सोबत त्याचा अभ्यास करणे उपयुक्त आहे."
    },
    "verySimple": {
      "en": "Article 43 addresses living wages, decent work and life conditions for workers and promotion of cottage industries in rural areas.",
      "mr": "कलम 43 कामगारांचे जीवनमान वेतन, सन्मानजनक काम व जीवनस्थिती आणि ग्रामीण कुटीर उद्योगांच्या प्रोत्साहनाशी संबंधित आहे."
    },
    "example": {
      "en": "Policies supporting decent living standards for workers and rural cottage industries reflect Article 43's objectives.",
      "mr": "कामगारांचे सन्मानजनक जीवनमान आणि ग्रामीण कुटीर उद्योगांना पाठबळ देणारी धोरणे कलम 43 मधील उद्दिष्टांशी संबंधित आहेत."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 43 of the Indian Constitution?",
          "content": "Article 43 addresses living wages, decent work and life conditions for workers and promotion of cottage industries in rural areas.\n\nArticle 43 directs the State to endeavour to secure a living wage and decent conditions of work and life for workers. It also refers to promoting cottage industries in rural areas, particularly through individual or cooperative organization. The text is broader than a minimum wage alone: it expresses a policy objective concerning the ability of workers to maintain a dignified standard of living. The practical details of wages, working hours, benefits and workplace protections are addressed through legislation and regulations, which may change over time. Article 43 is a Directive Principle and should not be read as a standalone calculation of a wage entitlement. It is useful to study with Articles 39, 41 and 42 to understand the Constitution's approach to labour and social welfare."
        },
        {
          "heading": "Why is Article 43 important?",
          "content": "Article 43 addresses living wages, decent work and life conditions for workers and promotion of cottage industries in rural areas.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 43",
          "content": "Policies supporting decent living standards for workers and rural cottage industries reflect Article 43's objectives.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 43 म्हणजे काय?",
          "content": "कलम 43 कामगारांचे जीवनमान वेतन, सन्मानजनक काम व जीवनस्थिती आणि ग्रामीण कुटीर उद्योगांच्या प्रोत्साहनाशी संबंधित आहे.\n\nकलम 43 राज्याला कामगारांसाठी जीवनमान वेतन, कामाच्या सन्मानजनक परिस्थिती आणि योग्य जीवनमान मिळवून देण्यासाठी प्रयत्न करण्याचे निर्देश देते. ग्रामीण भागात कुटीर उद्योगांना प्रोत्साहन देण्याचा उल्लेखही त्यात आहे, विशेषतः वैयक्तिक किंवा सहकारी संघटनांच्या माध्यमातून. हे कलम केवळ किमान वेतनाच्या संकल्पनेपुरते मर्यादित नाही; कामगारांना सन्मानाने जगता यावे यासाठी व्यापक धोरणात्मक उद्दिष्ट व्यक्त करते. वेतन, कामाचे तास, लाभ आणि कामाच्या ठिकाणचे संरक्षण यांची व्यवहारातील माहिती संबंधित कायदे आणि नियमांमध्ये असते, जे काळानुसार बदलू शकतात. कलम 43 हे निर्देशक तत्त्व आहे, त्यामुळे ते स्वतः विशिष्ट वेतनाची गणना किंवा स्वतंत्र दावा ठरवत नाही. कलम 39, 41 आणि 42 सोबत त्याचा अभ्यास करणे उपयुक्त आहे."
        },
        {
          "heading": "कलम 43 महत्त्वाचे का आहे?",
          "content": "कलम 43 कामगारांचे जीवनमान वेतन, सन्मानजनक काम व जीवनस्थिती आणि ग्रामीण कुटीर उद्योगांच्या प्रोत्साहनाशी संबंधित आहे.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 43 चे उदाहरण",
          "content": "कामगारांचे सन्मानजनक जीवनमान आणि ग्रामीण कुटीर उद्योगांना पाठबळ देणारी धोरणे कलम 43 मधील उद्दिष्टांशी संबंधित आहेत.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 43",
      "Article 43 of Indian Constitution",
      "Article 43 explained",
      "कलम 43",
      "कलम 43 भारतीय संविधान",
      "Living Wage, etc., for Workers",
      "कामगारांसाठी जीवनमान वेतन व सन्मानजनक जीवन"
    ],
    "relatedIds": [
      "39",
      "41",
      "42"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
  {
    "id": "44",
    "articleNumber": "Article 44",
    "title": {
      "en": "Uniform Civil Code for the Citizens",
      "mr": "नागरिकांसाठी समान नागरी संहिता"
    },
    "categoryKey": "directive-principles",
    "officialText": {
      "en": "Article 44 directs the State to endeavour to secure for citizens a uniform civil code throughout the territory of India.",
      "mr": "कलम 44 राज्याला भारताच्या संपूर्ण राज्यक्षेत्रात नागरिकांसाठी समान नागरी संहिता लागू करण्याच्या दिशेने प्रयत्न करण्याचे निर्देश देते.",
      "verified": false
    },
    "simpleExplanation": {
      "en": "Article 44 is a Directive Principle—not a Fundamental Right—and states an objective for the State to endeavour toward a uniform civil code for citizens.\n\nThis provision is part of the constitutional framework and should be read with the relevant provisions, laws and context.\n\nArticle 44 is one of the Directive Principles of State Policy. Its text directs the State to endeavour to secure a uniform civil code for citizens throughout the territory of India. It sets out a constitutional policy objective, not an individually enforceable Fundamental Right. Discussions about a uniform civil code often involve legal, social, cultural and legislative questions, and proposals may differ in scope and detail. Article 44 itself does not specify a draft code, its contents or a timetable for implementation. Those matters would require legislative and policy processes. When studying the Article, it is important to distinguish the constitutional objective expressed in Part IV from the laws currently in force and from arguments or proposals in public debate.",
      "mr": "कलम 44 हे मूलभूत अधिकार नसून निर्देशक तत्त्व आहे. नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत असे ते सांगते.\n\nही तरतूद संबंधित घटनात्मक तरतुदी, लागू कायदे आणि परिस्थिती यांच्या संदर्भात समजून घ्यावी.\n\nकलम 44 हे राज्याच्या धोरणाची निर्देशक तत्त्वांपैकी एक आहे. भारताच्या संपूर्ण राज्यक्षेत्रात नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत, असे त्याची शब्दरचना सांगते. हे धोरणात्मक घटनात्मक उद्दिष्ट आहे; स्वतंत्रपणे अंमलात आणता येणारा मूलभूत अधिकार नाही. समान नागरी संहितेबाबतच्या चर्चांमध्ये कायदेशीर, सामाजिक, सांस्कृतिक आणि विधिमंडळाशी संबंधित प्रश्न येतात आणि विविध प्रस्तावांचा आवाका वेगवेगळा असू शकतो. कलम 44 स्वतः संहितेचा मसुदा, त्यातील नियम किंवा अंमलबजावणीची तारीख निश्चित करत नाही. या बाबींसाठी कायदे आणि धोरणात्मक प्रक्रिया आवश्यक असतात. अभ्यास करताना भाग IV मधील घटनात्मक उद्दिष्ट, सध्या लागू असलेले कायदे आणि सार्वजनिक चर्चेतील प्रस्ताव यातील फरक स्पष्ट ठेवणे महत्त्वाचे आहे."
    },
    "verySimple": {
      "en": "Article 44 is a Directive Principle—not a Fundamental Right—and states an objective for the State to endeavour toward a uniform civil code for citizens.",
      "mr": "कलम 44 हे मूलभूत अधिकार नसून निर्देशक तत्त्व आहे. नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत असे ते सांगते."
    },
    "example": {
      "en": "Article 44 can be discussed in debates and policy studies about a uniform civil code, while its status as a Directive Principle should be kept clear.",
      "mr": "समान नागरी संहितेबाबत चर्चा आणि धोरण-अभ्यासात कलम 44 चा संदर्भ घेतला जाऊ शकतो; मात्र निर्देशक तत्त्व म्हणून त्याची स्थिती स्पष्ट ठेवणे महत्त्वाचे आहे."
    },
    "seoSections": {
      "en": [
        {
          "heading": "What is Article 44 of the Indian Constitution?",
          "content": "Article 44 is a Directive Principle—not a Fundamental Right—and states an objective for the State to endeavour toward a uniform civil code for citizens.\n\nArticle 44 is one of the Directive Principles of State Policy. Its text directs the State to endeavour to secure a uniform civil code for citizens throughout the territory of India. It sets out a constitutional policy objective, not an individually enforceable Fundamental Right. Discussions about a uniform civil code often involve legal, social, cultural and legislative questions, and proposals may differ in scope and detail. Article 44 itself does not specify a draft code, its contents or a timetable for implementation. Those matters would require legislative and policy processes. When studying the Article, it is important to distinguish the constitutional objective expressed in Part IV from the laws currently in force and from arguments or proposals in public debate."
        },
        {
          "heading": "Why is Article 44 important?",
          "content": "Article 44 is a Directive Principle—not a Fundamental Right—and states an objective for the State to endeavour toward a uniform civil code for citizens.\n\nIt helps readers understand this constitutional provision and its place in the Constitution."
        },
        {
          "heading": "Example of Article 44",
          "content": "Article 44 can be discussed in debates and policy studies about a uniform civil code, while its status as a Directive Principle should be kept clear.\n\nThis illustration is intended to clarify the general constitutional idea. The actual legal position in a particular matter depends on the text of the applicable law, the circumstances and relevant legal interpretation."
        }
      ],
      "mr": [
        {
          "heading": "भारतीय संविधानातील कलम 44 म्हणजे काय?",
          "content": "कलम 44 हे मूलभूत अधिकार नसून निर्देशक तत्त्व आहे. नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत असे ते सांगते.\n\nकलम 44 हे राज्याच्या धोरणाची निर्देशक तत्त्वांपैकी एक आहे. भारताच्या संपूर्ण राज्यक्षेत्रात नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत, असे त्याची शब्दरचना सांगते. हे धोरणात्मक घटनात्मक उद्दिष्ट आहे; स्वतंत्रपणे अंमलात आणता येणारा मूलभूत अधिकार नाही. समान नागरी संहितेबाबतच्या चर्चांमध्ये कायदेशीर, सामाजिक, सांस्कृतिक आणि विधिमंडळाशी संबंधित प्रश्न येतात आणि विविध प्रस्तावांचा आवाका वेगवेगळा असू शकतो. कलम 44 स्वतः संहितेचा मसुदा, त्यातील नियम किंवा अंमलबजावणीची तारीख निश्चित करत नाही. या बाबींसाठी कायदे आणि धोरणात्मक प्रक्रिया आवश्यक असतात. अभ्यास करताना भाग IV मधील घटनात्मक उद्दिष्ट, सध्या लागू असलेले कायदे आणि सार्वजनिक चर्चेतील प्रस्ताव यातील फरक स्पष्ट ठेवणे महत्त्वाचे आहे."
        },
        {
          "heading": "कलम 44 महत्त्वाचे का आहे?",
          "content": "कलम 44 हे मूलभूत अधिकार नसून निर्देशक तत्त्व आहे. नागरिकांसाठी समान नागरी संहिता मिळवण्याच्या दिशेने राज्याने प्रयत्न करावेत असे ते सांगते.\n\nया कलमाचा घटनात्मक संदर्भ आणि नागरिकांच्या दृष्टीने त्याचे महत्त्व समजून घेण्यासाठी ही तरतूद उपयुक्त आहे."
        },
        {
          "heading": "कलम 44 चे उदाहरण",
          "content": "समान नागरी संहितेबाबत चर्चा आणि धोरण-अभ्यासात कलम 44 चा संदर्भ घेतला जाऊ शकतो; मात्र निर्देशक तत्त्व म्हणून त्याची स्थिती स्पष्ट ठेवणे महत्त्वाचे आहे.\n\nहे उदाहरण घटनात्मक संकल्पना समजावण्यासाठी आहे. एखाद्या विशिष्ट प्रकरणातील कायदेशीर स्थिती संबंधित कायदा, परिस्थिती आणि लागू कायदेशीर अर्थनिर्णय यांवर अवलंबून असते."
        }
      ]
    },
    "keywords": [
      "Article 44",
      "Article 44 of Indian Constitution",
      "Article 44 explained",
      "कलम 44",
      "कलम 44 भारतीय संविधान",
      "Uniform Civil Code for the Citizens",
      "नागरिकांसाठी समान नागरी संहिता"
    ],
    "relatedIds": [
      "39",
      "45"
    ],
    "source": {
      "name": "Legislative Department, Ministry of Law and Justice, Government of India",
      "url": "https://www.legislative.gov.in/constitution-of-india/"
    },
    "lastVerified": null
  },
]

const migratedByNumber = new Map(migratedArticles.map((item) => [item.id.toLowerCase(), item]))
const categoryDetails = {
  'fundamental-rights': { part: 'III', category: 'Fundamental Rights' },
  'directive-principles': { part: 'IV', category: 'Directive Principles' },
  historical: { part: 'I', category: 'Historical Provisions' },
}

export const articles = existingArticles.map((source) => {
  // Accept both the legacy article shape and migrated bilingual records.
  const number = source.number || source.id
  const migrated = source.id ? source : migratedByNumber.get(number.toLowerCase())
  const details = categoryDetails[source.categoryKey] || {}
  const article = {
    ...source,
    number,
    title: typeof source.title === 'string' ? source.title : source.title?.en || `Article ${number}`,
    part: source.part || details.part || '',
    category: source.category || details.category || source.categoryKey || 'Constitutional Provisions',
    summary: source.summary || source.simpleExplanation?.en || '',
    keywords: Array.isArray(source.keywords) ? source.keywords.join(' ') : source.keywords || '',
  }
  if (!migrated) return article
  return {
    ...article,
    migrated,
    content: article.content || migrated.simpleExplanation?.en || '',
    introduction: article.introduction || migrated.verySimple?.en || '',
    example: migrated.example?.en || '',
    migrationSections: migrated.seoSections?.en || [],
    migrationFaq: migrated.faq?.en || [],
    migrationMcqs: migrated.mcqs?.en || [],
    constitutionalText: migrated.officialText?.verified ? migrated.officialText.en : undefined,
    sources: migrated.source?.url ? [{ label: migrated.source.name || 'Source', url: migrated.source.url }] : article.sources,
    keywords: `${article.keywords || ''} ${typeof migrated.keywords === 'string' ? migrated.keywords : ''}`.trim(),
    related: [...new Set([...(article.related || []), ...(migrated.relatedIds || [])])],
    image: `/images/articles/article-${number.toLowerCase()}.webp`,
  }
}).sort((a, b) => a.number.localeCompare(b.number, 'en', { numeric: true }))

export const expandedContent = {
  '5': 'Article 5 is the first provision in Part II of the Indian Constitution, which deals with citizenship. It establishes the constitutional conditions for determining who would be recognised as a citizen of India at the commencement of the Constitution. The provision is specifically concerned with the commencement of the Constitution rather than functioning as a complete set of rules for acquiring citizenship today.\n\nArticle 5 requires a person to have domicile in the territory of India. In addition to domicile, the provision provides three alternative conditions. A person could qualify if the person was born in the territory of India, if either parent was born in the territory of India, or if the person had been ordinarily resident in the territory of India for at least five years immediately before the commencement of the Constitution. The three conditions are alternatives; the text does not require all three to be satisfied together.\n\nArticle 5 should be read in the context of Articles 6 to 11, which address related citizenship questions. It sets out the initial constitutional criteria based on domicile, birth, parentage or residence.',
  '15': 'Article 15 is an important Fundamental Right under the Right to Equality. It prevents the State from discriminating against citizens solely on the grounds of religion, race, caste, sex or place of birth. The protection also extends to access to certain public places and facilities.\n\nArticle 15(2) specifically addresses shops, public restaurants, hotels and places of public entertainment, as well as public-use facilities such as wells, tanks, bathing ghats, roads and other places maintained wholly or partly from State funds or dedicated to public use. Article 15 does not mean that every form of classification or special provision is prohibited. The Constitution itself permits certain special provisions intended to address particular social and educational circumstances.\n\nArticle 15(3) permits special provisions for women and children. Article 15(4) permits special provisions for the advancement of socially and educationally backward classes and for the Scheduled Castes and Scheduled Tribes. Article 15(5) deals specifically with special provisions relating to admission to educational institutions, including private educational institutions, subject to the constitutional exception for minority educational institutions under Article 30(1).\n\nArticle 15(6) provides for special provisions for economically weaker sections other than the classes covered by clauses (4) and (5), including provisions relating to admission to educational institutions, subject to the conditions stated in the Constitution. Thus, Article 15 combines a general prohibition of discrimination with constitutionally permitted special provisions designed for specified groups and circumstances.',
  '16': 'Article 16 is a Fundamental Right under the Right to Equality and specifically deals with equality of opportunity in matters of public employment. Article 16(1) provides that all citizens should have equality of opportunity in matters relating to employment or appointment to offices under the State. This means that public employment must operate within the constitutional principle of equal opportunity.\n\nArticle 16(2) prohibits discrimination in public employment solely on the grounds of religion, race, caste, sex, descent, place of birth or residence. The Constitution also recognises specific circumstances in which special provisions can be made. Article 16(3) permits Parliament to prescribe certain residence requirements for specified classes of employment or appointments.\n\nArticle 16(4) permits the State to make reservation provisions for backward classes of citizens that, in the opinion of the State, are not adequately represented in State services. Article 16(4A) concerns reservation in promotion, with consequential seniority, for Scheduled Castes and Scheduled Tribes where the constitutional conditions mentioned in the provision are satisfied. Article 16(4B) deals with certain unfilled reserved vacancies and their treatment in subsequent years.\n\nArticle 16(5) recognises a specific exception concerning offices connected with the affairs of religious or denominational institutions. Article 16(6) permits the State to make reservation provisions for economically weaker sections other than the classes mentioned in Article 16(4), subject to the constitutional conditions and the maximum specified in the Constitution. Therefore, Article 16 establishes the framework for equality of opportunity in public employment while also providing for specified exceptions and special provisions.',
  '18': 'Article 18 deals with the abolition of titles and forms part of the Right to Equality under Part III of the Constitution. Its basic purpose is to prevent the State from creating a system of official titles that could create artificial social distinctions or hereditary-style honours among citizens. The Article does not prohibit every form of honour or recognition. It specifically allows military and academic distinctions.\n\nAcademic qualifications and distinctions associated with education are not prohibited by Article 18, and military distinctions are also expressly excluded from the prohibition. Article 18 also places restrictions on accepting titles and certain benefits from foreign States. Indian citizens cannot accept a title from a foreign State. In the case of a person who is not an Indian citizen and holds an office of profit or trust under the State, acceptance of a foreign title requires the President’s consent.\n\nA person holding an office of profit or trust under the State requires the President’s consent to accept certain presents, emoluments or offices from or under a foreign State. Article 18 is concerned with maintaining equality in the constitutional system and preventing official titles or foreign honours from creating a separate class of privileged citizens.',
  '20': 'Article 20 provides three important protections in criminal law. First, a person cannot be convicted for an act that was not an offence under the law in force when it was committed, nor given a greater penalty retrospectively. Second, a person cannot be prosecuted and punished more than once for the same offence. Third, an accused person cannot be compelled to be a witness against themselves. These protections help prevent arbitrary criminal punishment and safeguard fairness in criminal proceedings.',
  '23': 'Article 23 is a Fundamental Right under the Right against Exploitation. It protects people from human trafficking, begar and other similar forms of forced labour. Article 23(1) prohibits traffic in human beings and begar and other similar forms of forced labour. Any violation of this constitutional prohibition is an offence punishable according to law. Human trafficking refers to the unlawful trade or exploitation of persons.\n\nForced labour refers to situations where a person is made to work against their will through force, coercion or other forms of compulsion. The Constitution also protects people against begar, which refers to forced labour where a person is required to work without proper payment or against their will. Article 23(2) provides a specific exception. The State may impose compulsory service for public purposes.\n\nWhile imposing such service, the State cannot discriminate solely on the grounds of religion, race, caste or class. Article 23 aims to protect human dignity and prevent exploitation while recognising a limited constitutional provision for compulsory public service without discrimination on the specified grounds.',
  '24': 'Article 24 prohibits the employment of children below fourteen years of age in factories, mines and other hazardous employment. It is part of the Right against Exploitation under Part III of the Constitution. This provision aims to protect children from dangerous working conditions that may threaten their health, safety and development. Article 24 should be read alongside applicable child labour laws, which may provide additional protections and restrictions.',
  '32': 'Article 32 is a provision in Part III of the Indian Constitution that provides a constitutional remedy for the enforcement of Fundamental Rights. It gives a person the right to approach the Supreme Court through appropriate proceedings when a Fundamental Right guaranteed by Part III needs to be enforced. Therefore, Article 32 is not merely about declaring Fundamental Rights; it provides a constitutional mechanism for seeking their enforcement.\n\nUnder Article 32(2), the Supreme Court can issue directions, orders and writs for the enforcement of Fundamental Rights. The Constitution specifically mentions five types of writs: habeas corpus, mandamus, prohibition, quo warranto and certiorari. The five writs have different purposes. Habeas corpus is associated with protection against unlawful detention. Mandamus generally concerns the performance of a public legal duty.\n\nProhibition is generally used to prevent a judicial or quasi-judicial authority from proceeding beyond its jurisdiction. Certiorari is generally concerned with reviewing the legality of proceedings or orders of a lower judicial or quasi-judicial authority. Quo warranto concerns the legal authority of a person to hold a public office.\n\nArticle 32(3) provides that Parliament may by law empower another court to exercise some or all of the powers that the Supreme Court can exercise under Article 32(2), within that court’s local jurisdiction. Article 32(4) states that the right guaranteed by Article 32 shall not be suspended except as otherwise provided by the Constitution. Article 32 therefore creates an important constitutional connection between Fundamental Rights and judicial remedies for their enforcement.',
  '51A': 'Article 51A lists the Fundamental Duties of citizens of India. These duties encourage citizens to respect the Constitution, protect the country’s unity, promote harmony, preserve cultural heritage, protect the environment, develop scientific temper, safeguard public property and support children’s education. Fundamental Duties were added to the Constitution through the 42nd Constitutional Amendment in 1976.\n\nClause (k), relating to providing educational opportunities for children between six and fourteen years, was added by the 86th Constitutional Amendment in 2002. These duties guide responsible citizenship. Their legal enforceability depends on the relevant constitutional provisions and applicable laws.',
  '79': 'Article 79 is the first provision in Chapter II of Part V of the Indian Constitution dealing with Parliament. It establishes the constitutional structure of Parliament for the Union. According to Article 79, Parliament consists of three constitutional components: the President, the Council of States and the House of the People. The Council of States is commonly known as the Rajya Sabha, while the House of the People is commonly known as the Lok Sabha.\n\nArticle 79 is important because it defines the constitutional composition of Parliament. It does not by itself describe the detailed composition, membership, elections or functioning of each House. Those matters are addressed by subsequent constitutional provisions and laws. Articles 80 and 81 deal with the composition of the two Houses.\n\nOther provisions in Part V deal with matters such as the duration of Houses, qualifications and disqualifications of members, parliamentary privileges, legislative procedure and other aspects. The President is included as a component of Parliament under Article 79; this does not mean that the President is a member of either House. Article 79 provides the basic constitutional foundation for understanding Parliament and how the Union legislature is organised.',
  '105': 'Article 105 deals with the powers, privileges and immunities of Parliament, its Houses, members and committees. Clause (1) provides for freedom of speech in Parliament, subject to the Constitution and the rules and standing orders regulating parliamentary procedure. Clause (2) provides constitutional protection to members for anything said or any vote given in Parliament or in a parliamentary committee. The clause also protects certain authorised publications of parliamentary proceedings.\n\nClause (3) deals with the other powers, privileges and immunities of each House and its members and committees. Parliament may define these by law. Clause (4) extends the relevant protections to persons who have a constitutional right to speak in and participate in parliamentary proceedings even though they are not necessarily members of Parliament.\n\nParliamentary privileges are intended to enable Parliament and its members to perform their constitutional functions effectively and without improper interference. These privileges operate within the constitutional framework and are not a general exemption from all laws or judicial processes.',
  '124': 'Article 124 establishes the Supreme Court of India and sets out important constitutional provisions concerning its composition and judges. The Supreme Court consists of the Chief Justice of India and other Judges. Parliament may by law prescribe a larger number of Judges. Article 124 also provides qualifications for appointment as a Supreme Court Judge.\n\nA person must be a citizen of India and must satisfy one of the constitutional requirements relating to experience as a High Court Judge, experience as an advocate of a High Court, or being a distinguished jurist in the opinion of the President. The Article provides that Supreme Court Judges hold office until the age of sixty-five years. It also provides for resignation and establishes the constitutional procedure for removal of a Judge.\n\nRemoval is subject to a special parliamentary procedure. It requires an address by each House of Parliament supported by the required majorities and is based on proved misbehaviour or incapacity. Article 124 therefore provides the constitutional foundation for the Supreme Court’s composition, appointment qualifications, tenure, resignation, removal and oath of office.',
  '153': 'Article 153 is part of Part VI of the Indian Constitution, which deals with the States. It provides for the constitutional office of the Governor. The Article states that there shall be a Governor for each State. It also allows the same person to be appointed as Governor for two or more States.\n\nArticle 153 establishes the office of Governor, but it does not contain all the rules relating to the Governor. Other provisions deal with appointment, term, qualifications, powers and conditions of office. Article 154 concerns State executive power, and Article 163 provides for a Council of Ministers to aid and advise the Governor, subject to the Constitution. Article 153 provides the basic constitutional foundation for the office of Governor in the States.',
  '194': 'Article 194 deals with the powers, privileges and immunities of State Legislatures, including Legislative Assemblies and Legislative Councils, and their members and committees. Clause (1) provides for freedom of speech in the Legislature of every State, subject to the Constitution and the rules and standing orders regulating legislative procedure.\n\nClause (2) provides constitutional protection to members of State Legislatures for anything said or any vote given by them in the Legislature or in a committee thereof. It also provides protection relating to authorised publication of legislative proceedings. Clause (3) deals with other powers, privileges and immunities of State Legislative Houses, their members and committees. These may be defined by the State Legislature by law.\n\nClause (4) extends the relevant protections to persons who have a constitutional right to speak in and participate in proceedings of a State Legislature or its committees. Article 194 is the principal constitutional provision dealing with State Legislative privileges and corresponds broadly to Article 105, which deals with Parliament. Legislative privileges exist to enable State Legislatures and their members to perform their functions effectively. These privileges are part of the constitutional framework and should not automatically be understood as unlimited immunity from judicial review or other constitutional limitations.',
  '17': 'Article 17 is a Fundamental Right under the Right to Equality. It abolishes “Untouchability” and prohibits its practice in any form. The Article does more than simply declare that untouchability is abolished. It also provides that enforcing any disability arising from untouchability is an offence punishable in accordance with law. The constitutional provision is aimed at preventing exclusion, discrimination and disabilities imposed on people because of practices associated with untouchability.\n\nIt therefore gives the principle constitutional status and requires the legal system to address conduct arising from such practices. Article 17 is different from Article 15 in its specific constitutional focus. Article 15 prohibits discrimination on specified grounds, while Article 17 specifically abolishes untouchability and makes enforcement of disabilities arising from it an offence punishable according to law. Parliament has enacted laws to give effect to Article 17.\n\nThe Untouchability (Offences) Act, 1955 was subsequently amended and renamed the Protection of Civil Rights Act, 1955. The Legislative Department records that the Protection of Civil Rights Act was enacted in pursuance of Article 17. Therefore, Article 17 is both a constitutional prohibition and a foundation for legal protection against disabilities arising from the practice.',
  '22': 'Article 22 is a Fundamental Right that provides constitutional safeguards against arbitrary arrest and detention in certain cases. For an ordinary arrest, Article 22 provides important protections. A person who is arrested must be informed of the grounds of arrest as soon as may be, and must not be denied the right to consult and be defended by a legal practitioner of their choice.\n\nA person who is arrested and detained in custody must generally be produced before the nearest magistrate within twenty-four hours of the arrest, excluding the time necessary for the journey to the magistrate’s court. Continued detention beyond this period requires the authority of a magistrate. Article 22 also deals specifically with preventive detention.\n\nPreventive detention is different from ordinary punitive detention because it is intended to prevent certain future acts rather than to punish a person for an offence already committed. The protections in clauses (1) and (2) do not apply in the same manner to persons detained under a law providing for preventive detention.\n\nHowever, Article 22 contains separate constitutional safeguards for preventive detention, including requirements relating to communication of the grounds of detention and an opportunity to make a representation against the detention order. Article 22 therefore attempts to balance individual personal liberty with the State’s authority to make laws dealing with arrest and preventive detention.\n\nThe exact rights and procedures applicable in a particular case depend on the Constitution, the relevant law and the facts of that case.',
  '352': 'Article 352 deals with the Proclamation of Emergency at the national level. It applies when the security of India or any part of its territory is threatened by war, external aggression or armed rebellion. The President may issue a Proclamation of Emergency when the constitutional conditions are satisfied. The President cannot issue such a Proclamation solely on personal discretion. The decision of the Union Cabinet must first be communicated to the President in writing.\n\nThis requirement is expressly provided in Article 352(3). An Emergency under Article 352 may apply to the whole of India or only to a specified part of the territory, depending on the circumstances mentioned in the Proclamation. The Constitution also permits a Proclamation to be made when there is an imminent danger of war, external aggression or armed rebellion, even before the actual event occurs. Parliamentary approval is an important constitutional safeguard.\n\nA Proclamation must be laid before both Houses of Parliament and, except for a revoking Proclamation, it generally ceases to operate after one month unless both Houses approve it by resolutions within that period. Once approved, the Constitution provides a framework for its continuation and further parliamentary approval. Article 352 therefore establishes the constitutional procedure for a national Emergency and places specific requirements on the Executive and Parliament.'
}
export const relatedArticleNumbers = {'352':['14','18','19','21','21A','22']}
export const articleByNumber = (number) => articles.find((article) => article.number.toLowerCase() === number.toLowerCase())
export const articlePath = (number) => `/article/${number}`
