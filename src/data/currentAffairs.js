// The three records below are the verified Current Affairs items already shown
// on the homepage. Optional detail fields are omitted unless present in source.
import { migratedCurrentAffairs } from './migratedCurrentAffairs.js'

const curatedCurrentAffairs = [
  {
    slug: 'two-child-norm-supreme-court-larger-bench-2026', category: 'Polity and Constitution', publishedAt: '2026-11-05',
    title: 'Two-Child Norm and Indian Constitution: Supreme Court Seeks Reconsideration',
    summary: 'The Supreme Court has referred the 2003 Javed judgment on the two-child disqualification for local body elections to a larger bench for reconsideration.',
    icon: 'SC', content: [
      { heading: 'What happened', paragraphs: ['On 4 November 2026, the Supreme Court referred the question of the two-child disqualification for local body elections to a larger bench, asking it to reconsider the 2003 Javed judgment. The reference means the legal question is under reconsideration; it is not a final ruling overturning that judgment.'] },
      { heading: 'Constitutional connection', paragraphs: ['The existing explainer connects the issue to equality and personal liberty under Articles 14 and 21. The constitutional questions concern how the disqualification operates and the rights arguments raised around it.'] },
    ], relatedArticles: ['14', '21'], seo: { description: 'The Supreme Court has referred the two-child norm disqualification question to a larger bench for reconsideration. Read the constitutional context.' },
  },
  {
    slug: 'malad-appapada-krantinagar-120-feet-dp-road-rehabilitation', category: 'Local News and Civic Issues', publishedAt: '2026-11-03',
    title: 'Malad DP Road Project: Rehabilitation Concerns',
    summary: 'Residents have raised concerns about rehabilitation linked to the proposed 120-foot Development Plan road in Malad.',
    icon: 'CIVIC', content: [],
  },
  {
    slug: 'save-bhimashankar-saidongar-karjat-tree-felling-2026', category: 'Environment', publishedAt: '2026-10-25',
    title: 'Bhimashankar Hydropower Project Debate',
    summary: 'Explore the proposed Karjat project, reported tree felling and the environmental concerns raised around it.',
    icon: 'ENV', content: [
      { heading: 'Project and reported concerns', paragraphs: ['The proposed Saidongar-I Karjat pumped storage project has prompted concern over reported felling of 32,490 trees. The Forest Department clarified that the proposed project area is not inside the Bhimashankar Wildlife Sanctuary.'] },
    ],
  },
  {
  "id": "shaktipeeth-expressway-land-acquisition-protests-2026",
  "articleNumber": "Current Affairs",
  "categoryKey": "current-affairs",
  "slug": "shaktipeeth-expressway-land-acquisition-farmers-protests-maharashtra",
  "title": {
    "en": "Shaktipeeth Expressway: Farmers’ Concerns, Land Rights and Public Participation",
    "mr": "शक्तिपीठ महामार्ग: शेतकऱ्यांच्या चिंता, जमिनीचे हक्क आणि जनसहभाग"
  },
  "seoTitle": {
    "en": "Shaktipeeth Expressway: Farmers’ Concerns and Land Acquisition | MySamvidhan",
    "mr": "शक्तिपीठ महामार्ग: शेतकऱ्यांच्या चिंता आणि जमीन अधिग्रहण | MySamvidhan"
  },
  "shortDescription": {
    "en": "Explore the concerns raised over the proposed Shaktipeeth Expressway, including farmland, livelihoods, compensation, environmental impact and the need for transparent public participation.",
    "mr": "प्रस्तावित शक्तिपीठ महामार्गाबाबत शेतीजमीन, उपजीविका, भरपाई, पर्यावरणीय परिणाम आणि पारदर्शक जनसहभागाची गरज यासंदर्भात उपस्थित झालेल्या प्रश्नांचा आढावा घ्या."
  },
  "category": "Polity and Constitution",
  "categoryMr": "राज्यशास्त्र आणि राज्यघटना",
  "date": "2026-11-25",
  "introduction": {
    "en": "The proposed Shaktipeeth Expressway has become a subject of debate in Maharashtra, particularly among farmers and residents who fear that the project could affect agricultural land, village life and local livelihoods. Reported protests in parts of Kolhapur and Sangli have brought attention to questions about surveys, land acquisition, compensation and how affected communities are consulted. Infrastructure development can bring connectivity benefits, but decisions involving people's land and livelihoods also require transparency, meaningful participation, careful assessment of alternatives and fair treatment of those affected.",
    "mr": "प्रस्तावित शक्तिपीठ महामार्ग महाराष्ट्रात चर्चेचा विषय ठरला आहे. विशेषतः शेतकरी आणि स्थानिक नागरिकांना या प्रकल्पामुळे शेतीजमीन, गावातील जीवन आणि उपजीविकेवर परिणाम होण्याची चिंता आहे. कोल्हापूर आणि सांगलीतील काही भागांमध्ये आंदोलन झाल्याच्या बातम्यांमुळे सर्वेक्षण, जमीन अधिग्रहण, भरपाई आणि प्रभावित नागरिकांना निर्णय प्रक्रियेत कितपत सहभागी करून घेतले जाते, यासंबंधी प्रश्न पुढे आले आहेत. पायाभूत सुविधांचा विकास वाहतूक सुविधा वाढवू शकतो; मात्र नागरिकांच्या जमिनी आणि उपजीविकेशी संबंधित निर्णय घेताना पारदर्शकता, अर्थपूर्ण जनसहभाग, पर्यायांचा विचार आणि प्रभावित नागरिकांशी न्याय्य वागणूकही आवश्यक आहे."
  },
  "simpleExplanation": {
    "en": "The Shaktipeeth Expressway is a proposed highway intended to improve road connectivity between Maharashtra and Goa. Its proposed route may affect farmland, villages and the livelihoods of people who depend on land. Some farmers have opposed survey activities and the project, raising concerns about land loss, compensation, access to fields, irrigation and the long-term impact on their families. These concerns deserve clear answers and publicly accessible information. A survey is not the same as completed land acquisition, and the status of each parcel should be checked against official documents. The wider discussion is about how infrastructure plans can be evaluated while respecting people's rights, local concerns and environmental considerations.",
    "mr": "शक्तिपीठ महामार्ग हा महाराष्ट्र आणि गोवा यांच्यातील रस्ते संपर्क सुधारण्यासाठी प्रस्तावित महामार्ग आहे. प्रस्तावित मार्गामुळे शेतीजमीन, गावं आणि जमिनीवर अवलंबून असलेल्या नागरिकांच्या उपजीविकेवर परिणाम होऊ शकतो. काही शेतकऱ्यांनी सर्वेक्षणाच्या कामाला आणि प्रकल्पाला विरोध करत जमीन गमावण्याची शक्यता, भरपाई, शेतापर्यंत पोहोचण्याचे मार्ग, सिंचन आणि कुटुंबाच्या दीर्घकालीन उत्पन्नाबाबत चिंता व्यक्त केली आहे. या प्रश्नांना स्पष्ट उत्तरे आणि सार्वजनिकरीत्या उपलब्ध माहिती मिळणे महत्त्वाचे आहे. सर्वेक्षण म्हणजे जमीन अधिग्रहण पूर्ण झाले असे नाही; प्रत्येक भूखंडाची स्थिती अधिकृत कागदपत्रांद्वारे तपासली पाहिजे. पायाभूत सुविधा योजनांचे मूल्यांकन करताना नागरिकांचे हक्क, स्थानिक चिंता आणि पर्यावरणीय बाबींचा आदर कसा राखला जाईल, हा व्यापक प्रश्न आहे."
  },
  "verySimple": {
    "en": "The Shaktipeeth Expressway is a proposed highway. Farmers and villagers worry that it could affect their land, livelihoods and surroundings. They are asking for transparent information, fair treatment and a meaningful say in decisions that affect them.",
    "mr": "शक्तिपीठ महामार्ग हा प्रस्तावित महामार्ग आहे. यामुळे शेतकरी आणि गावकऱ्यांच्या जमीन, उपजीविका आणि परिसरावर परिणाम होण्याची चिंता आहे. प्रभावित नागरिकांना पारदर्शक माहिती, न्याय्य वागणूक आणि त्यांच्या जीवनावर परिणाम करणाऱ्या निर्णयांमध्ये अर्थपूर्ण सहभाग हवा आहे."
  },
  "example": {
    "en": "If a proposed highway is planned through a farmer's land, the impact may go beyond the area taken. The remaining plot could become harder to access or cultivate, irrigation arrangements may be affected and a family could lose part of its income. Before a decision is made, affected people need understandable details about the alignment, the process, compensation, access arrangements and whether alternatives have been examined.",
    "mr": "एखाद्या शेतकऱ्याच्या जमिनीतून महामार्ग प्रस्तावित असल्यास, परिणाम केवळ अधिग्रहित होणाऱ्या क्षेत्रापुरता मर्यादित नसू शकतो. उर्वरित जमिनीपर्यंत पोहोचणे किंवा तिची मशागत करणे कठीण होऊ शकते, सिंचन व्यवस्थेवर परिणाम होऊ शकतो आणि कुटुंबाचे उत्पन्न कमी होऊ शकते. निर्णय घेण्यापूर्वी प्रभावित नागरिकांना मार्गाची माहिती, प्रक्रिया, भरपाई, शेतापर्यंत पोहोचण्याची व्यवस्था आणि पर्यायी मार्गांचा विचार झाला आहे का, याबाबत स्पष्ट माहिती मिळणे आवश्यक आहे."
  },
  "content": {
    "en": "The proposed Shaktipeeth Expressway is being discussed as a major road infrastructure project intended to improve connectivity between Maharashtra and Goa. At the same time, its proposed route has raised concerns among farmers and residents in areas that may be affected by land requirements and construction.\n\nFor people whose families depend on agricultural land, a highway can mean more than a change in the landscape. Land acquisition may affect crop production, access to fields, irrigation networks, farm structures, village roads, land fragmentation and the income that supports households over generations. Residents may also seek clarity about the route, the land parcels identified, the survey process, compensation and the timing of any proposed action.\n\nReports of opposition to survey activities in parts of Bhudargad taluka in Kolhapur district—including villages such as Mhaswe, Nilpan, Darwad, Nadhavade and Konavade—have brought these concerns into focus. News reports describe confrontations during survey activities, reported damage to survey equipment and protests. Protest-related developments in Sangli have also reportedly led to police action and detentions. These reported events should be understood in their specific context and not taken as proof that acquisition or construction has been completed along the entire route.\n\nThe questions raised by affected communities include: What land is proposed to be used, and why? How will the impact on farms and access routes be assessed? What compensation process will apply? How will objections be heard? Have alternative alignments or measures to reduce harm been considered? What information and project documents will be made publicly available?\n\nSurvey, notification, acquisition, approvals and construction are distinct stages. A survey alone does not transfer ownership or establish that construction is authorised on every surveyed parcel. The status of specific land should be checked against official notifications, land records and project documents. The applicable legal process and opportunities for objections or remedies depend on the relevant law and stage of proceedings.\n\nInfrastructure development and public welfare should not be treated as competing slogans. A public-interest approach requires accessible information, genuine consultation, careful examination of alternatives, environmental and social assessment where applicable, fair compensation under the law and attention to the practical needs of affected families. Connectivity benefits should be evaluated alongside the costs borne by farmers, villagers and the environment.\n\nThe protests and concerns reported in Kolhapur and Sangli underline the importance of listening to affected communities and ensuring that decisions about land and livelihoods are transparent, accountable and informed by evidence. The route, land acquisition status, compensation arrangements, approvals and implementation status should be independently examined before drawing conclusions.",
    "mr": "प्रस्तावित शक्तिपीठ महामार्ग हा महाराष्ट्र आणि गोवा यांच्यातील संपर्क सुधारण्यासाठी नियोजित मोठा रस्ते पायाभूत सुविधा प्रकल्प म्हणून चर्चेत आहे. त्याचवेळी, ज्या भागांमध्ये जमीन आणि बांधकामाची आवश्यकता भासू शकते, तेथील शेतकरी आणि स्थानिक नागरिकांनी प्रस्तावित मार्गाबाबत चिंता व्यक्त केली आहे.\n\nज्या कुटुंबांचे जीवन आणि उत्पन्न शेतीजमिनीवर अवलंबून आहे, त्यांच्यासाठी महामार्गामुळे केवळ परिसराचे स्वरूप बदलत नाही. जमीन अधिग्रहणामुळे शेती उत्पादन, शेतापर्यंत पोहोचण्याचे मार्ग, सिंचन व्यवस्था, शेतातील बांधकामे, गावातील रस्ते, जमिनीचे तुकडे होणे आणि अनेक पिढ्यांपासून कुटुंबाला आधार देणारे उत्पन्न प्रभावित होऊ शकते. प्रस्तावित मार्ग, कोणते भूखंड निश्चित केले आहेत, सर्वेक्षणाची प्रक्रिया, भरपाई आणि पुढील कारवाईची वेळ याबाबत नागरिकांना स्पष्टता हवी असू शकते.\n\nकोल्हापूर जिल्ह्यातील भुदरगड तालुक्यात म्हसवे, निलपण, दरवाड, नाधवडे आणि कोनवडे यांसारख्या गावांमध्ये सर्वेक्षणाच्या कामाला विरोध झाल्याच्या बातम्यांमुळे या चिंता पुढे आल्या आहेत. सर्वेक्षणादरम्यान संघर्ष, उपकरणांचे नुकसान झाल्याचे वृत्त आणि आंदोलनाच्या घटना बातम्यांमध्ये नोंदवण्यात आल्या आहेत. सांगलीतील आंदोलनाशी संबंधित घटनांमध्ये पोलिसांनी कारवाई करून काही व्यक्तींना ताब्यात घेतल्याचेही वृत्त आहे. या घटनांचा संदर्भ लक्षात घेणे आवश्यक असून, त्यावरून संपूर्ण मार्गावरील जमीन अधिग्रहण किंवा बांधकाम पूर्ण झाले आहे असा निष्कर्ष काढता येत नाही.\n\nप्रभावित समुदायांनी उपस्थित केलेले प्रश्न असे आहेत: कोणती जमीन आणि कोणत्या कारणासाठी प्रस्तावित आहे? शेती आणि शेतापर्यंतच्या मार्गांवरील परिणामाचे मूल्यांकन कसे होणार? भरपाईची प्रक्रिया काय असेल? नागरिकांच्या हरकती ऐकून घेतल्या जातील का? पर्यायी मार्ग किंवा नुकसान कमी करण्याच्या उपायांचा विचार झाला आहे का? प्रकल्पाची कागदपत्रे आणि माहिती सार्वजनिकरीत्या उपलब्ध केली जाणार का?\n\nसर्वेक्षण, अधिसूचना, जमीन अधिग्रहण, मंजुरी आणि बांधकाम हे वेगवेगळे टप्पे आहेत. केवळ सर्वेक्षणामुळे जमिनीची मालकी हस्तांतरित होत नाही किंवा प्रत्येक सर्वेक्षण केलेल्या भूखंडावर बांधकाम करण्याची मंजुरी मिळाली असे सिद्ध होत नाही. विशिष्ट जमिनीची स्थिती अधिकृत अधिसूचना, जमीन अभिलेख आणि प्रकल्प दस्तऐवजांद्वारे तपासली पाहिजे. लागू कायदेशीर प्रक्रिया आणि हरकत किंवा उपाययोजना करण्याच्या संधी या संबंधित कायदा आणि प्रक्रियेच्या टप्प्यावर अवलंबून असतात.\n\nपायाभूत सुविधा विकास आणि जनकल्याण यांना परस्परविरोधी घोषणांमध्ये मर्यादित ठेवू नये. जनहिताचा दृष्टिकोन म्हणजे माहिती सहज उपलब्ध करणे, अर्थपूर्ण सल्लामसलत, पर्यायांचा काळजीपूर्वक विचार, लागू असल्यास पर्यावरणीय आणि सामाजिक मूल्यांकन, कायद्यानुसार न्याय्य भरपाई आणि प्रभावित कुटुंबांच्या व्यावहारिक गरजांकडे लक्ष देणे. वाहतूक संपर्काचे फायदे मोजताना शेतकरी, गावकरी आणि पर्यावरणावर होणारा खर्चही विचारात घेतला पाहिजे.\n\nकोल्हापूर आणि सांगलीमध्ये नोंदवलेल्या आंदोलनांमधून आणि नागरिकांच्या चिंतांमधून प्रभावित समुदायांचे म्हणणे ऐकणे आणि जमीन व उपजीविकेसंबंधी निर्णय पारदर्शक, उत्तरदायी आणि पुराव्यांवर आधारित असणे महत्त्वाचे ठरते. निष्कर्ष काढण्यापूर्वी मार्ग, जमीन अधिग्रहणाची स्थिती, भरपाई, मंजुरी आणि अंमलबजावणी यांची स्वतंत्र तपासणी आवश्यक आहे."
  },
  "seoSections": {
    "en": [
      {
        "heading": "What is the Shaktipeeth Expressway?",
        "content": "The Shaktipeeth Expressway is a proposed highway project intended to improve road connectivity between Maharashtra and Goa. Its route and land requirements have become a subject of discussion among affected residents."
      },
      {
        "heading": "Why are farmers and villagers raising concerns?",
        "content": "Residents have raised questions about farmland, access to fields, livelihoods, compensation, survey activities and the opportunity for affected communities to participate in decisions."
      },
      {
        "heading": "What has been reported in Kolhapur?",
        "content": "Reports describe opposition to survey activities in parts of Bhudargad taluka, including confrontations and reported damage to survey equipment. These incidents should be considered alongside official project and land records."
      },
      {
        "heading": "Does a survey mean land has been acquired?",
        "content": "No. Survey activity and land acquisition are distinct. Acquisition requires the applicable legal process and documents; a survey alone does not transfer ownership."
      },
      {
        "heading": "What questions should affected residents ask?",
        "content": "Residents may seek clear information about the alignment, land parcels, process, compensation, access arrangements, alternatives, impact assessment and how objections or concerns can be submitted."
      },
      {
        "heading": "Why is public participation important in infrastructure projects?",
        "content": "Meaningful consultation, accessible information, assessment of impacts and fair treatment help ensure that public decisions consider affected communities as well as intended infrastructure benefits."
      }
    ],
    "mr": [
      {
        "heading": "शक्तिपीठ महामार्ग म्हणजे काय?",
        "content": "शक्तिपीठ महामार्ग हा महाराष्ट्र आणि गोवा यांच्यातील रस्ते संपर्क सुधारण्यासाठी प्रस्तावित महामार्ग आहे. त्याचा मार्ग आणि जमीन आवश्यकतेबाबत प्रभावित नागरिकांमध्ये चर्चा सुरू आहे."
      },
      {
        "heading": "शेतकरी आणि गावकरी चिंता का व्यक्त करत आहेत?",
        "content": "शेतीजमीन, शेतापर्यंत पोहोचण्याचे मार्ग, उपजीविका, भरपाई, सर्वेक्षण आणि निर्णय प्रक्रियेत प्रभावित समुदायांच्या सहभागाबाबत नागरिकांनी प्रश्न उपस्थित केले आहेत."
      },
      {
        "heading": "कोल्हापूरमध्ये काय नोंदवले गेले?",
        "content": "भुदरगड तालुक्यातील काही भागांमध्ये सर्वेक्षणाच्या कामाला विरोध, संघर्ष आणि उपकरणांचे नुकसान झाल्याच्या बातम्या समोर आल्या आहेत. या घटनांचा विचार अधिकृत प्रकल्प आणि जमीन अभिलेखांच्या संदर्भात करणे आवश्यक आहे."
      },
      {
        "heading": "सर्वेक्षण म्हणजे जमीन अधिग्रहित झाली का?",
        "content": "नाही. सर्वेक्षण आणि जमीन अधिग्रहण वेगवेगळ्या प्रक्रिया आहेत. अधिग्रहणासाठी लागू कायदेशीर प्रक्रिया आणि कागदपत्रे आवश्यक असतात; केवळ सर्वेक्षणामुळे जमिनीची मालकी हस्तांतरित होत नाही."
      },
      {
        "heading": "प्रभावित नागरिकांनी कोणते प्रश्न विचारावेत?",
        "content": "प्रस्तावित मार्ग, भूखंड, प्रक्रिया, भरपाई, शेतापर्यंत पोहोचण्याची व्यवस्था, पर्याय, परिणाम मूल्यांकन आणि हरकती किंवा चिंता मांडण्याच्या प्रक्रियेबाबत स्पष्ट माहिती मागता येते."
      },
      {
        "heading": "पायाभूत सुविधा प्रकल्पांमध्ये जनसहभाग का महत्त्वाचा आहे?",
        "content": "अर्थपूर्ण सल्लामसलत, सहज उपलब्ध माहिती, परिणामांचे मूल्यांकन आणि न्याय्य वागणूक यामुळे सार्वजनिक निर्णयांमध्ये प्रभावित समुदाय आणि प्रकल्पाचे अपेक्षित फायदे दोन्ही विचारात घेता येतात."
      }
    ]
  },
  "faq": {
    "en": [
      {
        "question": "What is the Shaktipeeth Expressway?",
        "answer": "It is a proposed highway project intended to improve road connectivity between Maharashtra and Goa."
      },
      {
        "question": "Why are farmers and residents concerned?",
        "answer": "Concerns include potential effects on agricultural land, livelihoods, access to fields, compensation and whether affected communities will have meaningful opportunities to participate."
      },
      {
        "question": "Has land acquisition been completed for the entire project?",
        "answer": "The status must be checked through official notifications and land records for each area. Survey activity or protests alone do not establish that acquisition is complete."
      },
      {
        "question": "What information should affected residents seek?",
        "answer": "They can seek details about the alignment, land parcels, acquisition process, compensation, alternatives, impact assessment and the process for raising objections or concerns."
      },
      {
        "question": "What is the difference between a land survey and land acquisition?",
        "answer": "A survey identifies, measures or assesses land. Acquisition is a separate legal process subject to applicable procedures."
      }
    ],
    "mr": [
      {
        "question": "शक्तिपीठ महामार्ग म्हणजे काय?",
        "answer": "महाराष्ट्र आणि गोवा यांच्यातील रस्ते संपर्क सुधारण्यासाठी प्रस्तावित महामार्ग प्रकल्प म्हणजे शक्तिपीठ महामार्ग."
      },
      {
        "question": "शेतकरी आणि स्थानिक नागरिक चिंता का व्यक्त करत आहेत?",
        "answer": "शेतीजमीन, उपजीविका, शेतापर्यंत पोहोचण्याचे मार्ग, भरपाई आणि प्रभावित समुदायांना निर्णय प्रक्रियेत सहभागी होण्याची संधी मिळेल का, याबाबत चिंता व्यक्त केली जात आहे."
      },
      {
        "question": "संपूर्ण प्रकल्पासाठी जमीन अधिग्रहण पूर्ण झाले आहे का?",
        "answer": "प्रत्येक क्षेत्रातील स्थिती अधिकृत अधिसूचना आणि जमीन अभिलेखांद्वारे तपासणे आवश्यक आहे. सर्वेक्षण किंवा आंदोलन झाल्यामुळे अधिग्रहण पूर्ण झाले असे सिद्ध होत नाही."
      },
      {
        "question": "प्रभावित नागरिकांनी कोणती माहिती मागावी?",
        "answer": "प्रस्तावित मार्ग, भूखंड, अधिग्रहण प्रक्रिया, भरपाई, पर्याय, परिणाम मूल्यांकन आणि हरकती किंवा चिंता मांडण्याच्या प्रक्रियेबाबत माहिती मागता येते."
      },
      {
        "question": "जमीन सर्वेक्षण आणि जमीन अधिग्रहण यात काय फरक आहे?",
        "answer": "सर्वेक्षणामध्ये जमिनीची ओळख, मोजणी किंवा मूल्यांकन केले जाते. अधिग्रहण ही लागू कायदेशीर प्रक्रियेच्या अधीन असलेली स्वतंत्र प्रक्रिया आहे."
      }
    ]
  },
  "mcqs": {
    "en": [
      {
        "question": "The Shaktipeeth Expressway is proposed primarily to improve connectivity between which regions?",
        "options": [
          "Maharashtra and Goa",
          "Maharashtra and Gujarat only",
          "Delhi and Uttar Pradesh",
          "Punjab and Haryana"
        ],
        "answer": "Maharashtra and Goa"
      },
      {
        "question": "Which of the following is a concern raised by farmers regarding the proposed highway?",
        "options": [
          "Impact on agricultural land and livelihoods",
          "Increase in ocean salinity",
          "Changes to international borders",
          "Abolition of local government"
        ],
        "answer": "Impact on agricultural land and livelihoods"
      },
      {
        "question": "Does a land survey automatically transfer ownership to the government?",
        "options": [
          "Yes, in every case",
          "No, a survey is not the same as acquisition",
          "Yes, without any notification",
          "Only if a highway is proposed"
        ],
        "answer": "No, a survey is not the same as acquisition"
      },
      {
        "question": "Which district has reported protests linked to survey activities in Bhudargad taluka?",
        "options": [
          "Kolhapur",
          "Nashik",
          "Nanded",
          "Nagpur"
        ],
        "answer": "Kolhapur"
      }
    ],
    "mr": [
      {
        "question": "शक्तिपीठ महामार्ग मुख्यतः कोणत्या प्रदेशांमधील संपर्क सुधारण्यासाठी प्रस्तावित आहे?",
        "options": [
          "महाराष्ट्र आणि गोवा",
          "केवळ महाराष्ट्र आणि गुजरात",
          "दिल्ली आणि उत्तर प्रदेश",
          "पंजाब आणि हरियाणा"
        ],
        "answer": "महाराष्ट्र आणि गोवा"
      },
      {
        "question": "प्रस्तावित महामार्गाबाबत शेतकऱ्यांनी कोणती चिंता व्यक्त केली आहे?",
        "options": [
          "शेतीजमीन आणि उपजीविकेवर होणारा परिणाम",
          "समुद्रातील क्षारतेत वाढ",
          "आंतरराष्ट्रीय सीमांमध्ये बदल",
          "स्थानिक शासन व्यवस्था रद्द होणे"
        ],
        "answer": "शेतीजमीन आणि उपजीविकेवर होणारा परिणाम"
      },
      {
        "question": "जमीन सर्वेक्षणामुळे जमिनीची मालकी आपोआप सरकारकडे हस्तांतरित होते का?",
        "options": [
          "होय, प्रत्येक प्रकरणात",
          "नाही, सर्वेक्षण आणि अधिग्रहण वेगळे आहेत",
          "होय, अधिसूचना न देता",
          "केवळ महामार्ग प्रस्तावित असल्यास"
        ],
        "answer": "नाही, सर्वेक्षण आणि अधिग्रहण वेगळे आहेत"
      },
      {
        "question": "भुदरगड तालुक्यात सर्वेक्षणाशी संबंधित आंदोलन कोणत्या जिल्ह्यात नोंदवले गेले?",
        "options": [
          "कोल्हापूर",
          "नाशिक",
          "नांदेड",
          "नागपूर"
        ],
        "answer": "कोल्हापूर"
      }
    ]
  },
  "source": {
    "name": "The Times of India",
    "url": "https://timesofindia.indiatimes.com/city/kolhapur/shaktipeeth-survey-sparks-farmers-fury-equipment-torched-in-kolhapur-hundreds-detained-in-sangli/amp_articleshow/136138801.cms"
  },
  "lastVerified": "2026-11-25",
  "verified": true,
  "relatedSlugs": [],
  "keywords": [
    "Shaktipeeth Expressway",
    "Shaktipeeth Highway",
    "Maharashtra Goa Highway",
    "Farmers Concerns",
    "Land Acquisition Maharashtra",
    "Bhudargad",
    "Kolhapur",
    "Sangli",
    "Agricultural Land",
    "Rural Livelihoods",
    "Public Participation",
    "Land Rights",
    "Infrastructure Development",
    "Land Survey",
    "Compensation"
  ]
},
{
  "id": "vadhvan-port-land-acquisition-livelihood-environment-2026",
  "articleNumber": "Current Affairs",
  "categoryKey": "current-affairs",
  "slug": "vadhvan-port-palghar-land-acquisition-fisherfolk-environment",
  "title": {
    "en": "Vadhvan Port Project: Land, Coastal Livelihoods and Local Opposition",
    "mr": "वाढवण बंदर प्रकल्प: जमीन, किनारपट्टीवरील उपजीविका आणि स्थानिक विरोध"
  },
  "seoTitle": {
    "en": "Vadhvan Port Palghar: Land, Livelihood and Environmental Concerns | MySamvidhan",
    "mr": "वाढवण बंदर, पालघर: जमीन, उपजीविका आणि पर्यावरणीय चिंता | MySamvidhan"
  },
  "shortDescription": {
    "en": "Understand local opposition to the Vadhvan Port project, land acquisition for connectivity, coastal livelihoods and environmental concerns in Palghar.",
    "mr": "वाढवण बंदर प्रकल्पाला स्थानिक विरोध, संपर्क सुविधांसाठी जमीन अधिग्रहण, किनारपट्टीवरील उपजीविका आणि पालघरमधील पर्यावरणीय चिंता समजून घ्या."
  },
  "category": "Polity and Constitution",
  "categoryMr": "राज्यशास्त्र आणि राज्यघटना",
  "date": "2026-11-25",
  "introduction": {
    "en": "The proposed Vadhvan Port in Palghar district has sparked debate over infrastructure development, land acquisition, coastal ecology and the future of local communities. Farmers, fishing communities and residents have raised concerns about possible impacts on land, fishing grounds, livelihoods, water resources and the environment. Protests have continued alongside project-related preparatory activity, bringing public participation and transparency into focus.",
    "mr": "पालघर जिल्ह्यातील प्रस्तावित वाढवण बंदरामुळे पायाभूत सुविधा विकास, जमीन अधिग्रहण, किनारपट्टीवरील पर्यावरण आणि स्थानिक समुदायांच्या भविष्याबाबत चर्चा निर्माण झाली आहे. शेतकरी, मच्छीमार समुदाय आणि स्थानिक नागरिकांनी जमीन, मासेमारी क्षेत्र, उपजीविका, जलस्रोत आणि पर्यावरणावर होणाऱ्या संभाव्य परिणामांबाबत चिंता व्यक्त केली आहे. प्रकल्पाशी संबंधित पूर्वतयारीच्या कामांसोबत आंदोलनेही सुरू असून नागरिकांचा सहभाग आणि पारदर्शकतेचे मुद्दे चर्चेत आले आहेत."
  },
  "simpleExplanation": {
    "en": "Vadhvan Port is a proposed major port near Dahanu in Palghar district. The port and supporting road and rail links require land and construction activity, raising questions among affected communities. Residents, farmers, fisherfolk and groups opposing the project have expressed concerns about livelihood disruption, environmental impacts, compensation and consultation. Reports in November 2026 described residents blocking trucks transporting soil and stones for port-related work. Protest activity and preliminary work do not mean every component of the project is complete.",
    "mr": "वाढवण बंदर हा पालघर जिल्ह्यातील डहाणू परिसरात प्रस्तावित मोठा बंदर प्रकल्प आहे. बंदर आणि त्याच्याशी संबंधित रस्ते व रेल्वे संपर्क सुविधांसाठी जमीन आणि बांधकामाची आवश्यकता असल्याने प्रभावित समुदायांमध्ये प्रश्न निर्माण झाले आहेत. स्थानिक नागरिक, शेतकरी, मच्छीमार आणि प्रकल्पाला विरोध करणाऱ्या गटांनी उपजीविका, पर्यावरणीय परिणाम, भरपाई आणि नागरिकांशी सल्लामसलत याबाबत चिंता व्यक्त केली आहे. नोव्हेंबर 2026 मधील वृत्तांमध्ये बंदराशी संबंधित कामासाठी माती-दगड वाहून नेणाऱ्या ट्रकांना रोखण्याचे आंदोलन नोंदवले आहे. आंदोलन किंवा प्राथमिक काम म्हणजे प्रकल्पाचे सर्व घटक पूर्ण झाले आहेत असे नाही."
  },
  "verySimple": {
    "en": "Vadhvan Port is a major port proposed in Palghar. Some local people oppose it because they are worried about land, fishing, farming, the environment and their livelihoods. They want their concerns heard and addressed.",
    "mr": "वाढवण बंदर हा पालघरमध्ये प्रस्तावित मोठा बंदर प्रकल्प आहे. जमीन, मासेमारी, शेती, पर्यावरण आणि उपजीविकेवर परिणाम होण्याची चिंता असल्यामुळे काही स्थानिक नागरिक या प्रकल्पाला विरोध करत आहेत. त्यांच्या प्रश्नांना ऐकून योग्य उत्तर मिळावे, अशी त्यांची मागणी आहे."
  },
  "example": {
    "en": "If a port's road or rail link passes through farmland, a family may lose land or face access and income changes. If construction affects fishing areas or coastal resources, fishing households may also worry about their livelihood. Project authorities should explain the acquisition process, compensation, safeguards and channels for raising concerns.",
    "mr": "समजा बंदरासाठी प्रस्तावित रस्ता किंवा रेल्वे मार्ग एखाद्या शेतातून जात असेल, तर त्या कुटुंबाला जमीन गमावणे, शेतापर्यंत पोहोचण्यात अडचणी किंवा उत्पन्नात बदल यांचा सामना करावा लागू शकतो. बांधकामामुळे मासेमारी क्षेत्र किंवा किनारपट्टीवरील संसाधनांवर परिणाम होण्याची शक्यता असल्यास मच्छीमार कुटुंबांनाही उपजीविकेची चिंता होऊ शकते. प्रकल्प यंत्रणेने अधिग्रहण प्रक्रिया, भरपाई, संरक्षणात्मक उपाय आणि नागरिकांना चिंता मांडण्याचे मार्ग स्पष्ट करणे आवश्यक आहे."
  },
  "content": {
    "en": "The Vadhvan Port project is proposed near Dahanu in Palghar district as a major port-development initiative. Discussions about the project include port capacity, transport connectivity, land requirements and regional economic development. At the same time, local communities have raised questions about its effects on land, coastal ecosystems, fishing, farming and existing livelihoods.\n\nOpposition has involved residents, farmers, fishing communities, tribal groups and organisations. Protesters have raised concerns about displacement, disruption of livelihoods, environmental damage and whether local communities have been adequately consulted. These are concerns and claims raised by residents and campaigners; specific impacts and approval status should be checked against official records and environmental documents.\n\nReports in November 2026 describe renewed protests in the Vadhvan area. On November 19, residents reportedly blocked trucks transporting soil and stones for land-filling activity near Tighare Pada. The report said around 25 protesters were detained following police intervention. This indicates opposition to particular activities, but does not by itself establish the status of all construction components or land parcels.\n\nThe port requires supporting connectivity. Land acquisition and compensation processes associated with road and rail links may affect agricultural land, properties, access routes and people whose income depends on those resources. Project environmental documentation identifies potential impacts associated with land acquisition and construction, including agricultural land, land plots, structures, livelihoods, trees, crops and community resources. The precise impact on an individual household must be assessed through relevant documents and records.\n\nCoastal and marine impacts are also a concern. Fishing communities may be concerned about access to fishing grounds, habitat changes and construction impacts. Environmental review, monitoring, mitigation plans and transparent disclosure are important to assess and manage such effects.\n\nLand acquisition is not a single step. Surveys, notifications, compensation determination, objections, ownership or inheritance verification and possession are distinct stages depending on the law and project component. A survey, protest, preliminary work or compensation camp should not be treated as proof that all acquisition or construction is complete.\n\nThe public debate therefore includes how decisions are made, how affected people are consulted, whether compensation and rehabilitation processes are accessible, what environmental safeguards exist and how the cumulative effects of multiple projects in the Palghar region are considered. Public participation, accurate disclosure and accountability matter when large projects affect land and livelihoods.",
    "mr": "पालघर जिल्ह्यातील डहाणू परिसरात वाढवण बंदर हा मोठा बंदर विकास प्रकल्प प्रस्तावित आहे. बंदराची क्षमता, वाहतूक संपर्क, जमिनीची आवश्यकता आणि प्रादेशिक आर्थिक विकास या संदर्भात या प्रकल्पाची चर्चा होत आहे. त्याच वेळी, स्थानिक समुदायांनी जमीन, किनारपट्टीवरील परिसंस्था, मासेमारी, शेती आणि विद्यमान उपजीविकेवर होणाऱ्या परिणामांबाबत प्रश्न उपस्थित केले आहेत.\n\nया प्रकल्पाला विरोध करणाऱ्या आंदोलनांमध्ये स्थानिक नागरिक, शेतकरी, मच्छीमार समुदाय, आदिवासी गट आणि विविध संघटनांचा सहभाग असल्याचे वृत्त आहे. विस्थापन, उपजीविकेतील व्यत्यय, पर्यावरणीय हानी आणि स्थानिक समुदायांशी पुरेशी सल्लामसलत झाली आहे का, याबाबत आंदोलकांनी चिंता व्यक्त केली आहे. हे नागरिक आणि आंदोलनकर्त्यांनी मांडलेले मुद्दे आहेत; प्रत्यक्ष परिणाम आणि मंजुरींची स्थिती अधिकृत अभिलेख व पर्यावरणीय दस्तऐवजांच्या आधारे तपासणे आवश्यक आहे.\n\nनोव्हेंबर 2026 मध्ये वाढवण परिसरात पुन्हा आंदोलन झाल्याचे वृत्त आहे. 19 नोव्हेंबर रोजी तिघरेपाडा परिसरात भरावाच्या कामासाठी माती आणि दगड वाहून नेणाऱ्या ट्रकांना स्थानिक नागरिकांनी रोखल्याचे वृत्त प्रसिद्ध झाले. पोलिसांच्या हस्तक्षेपानंतर सुमारे 25 आंदोलकांना ताब्यात घेतल्याचे त्या वृत्तात म्हटले आहे. यावरून विशिष्ट कामांबाबत विरोध दिसून येतो; मात्र त्यावरून सर्व बांधकाम घटक किंवा सर्व भूखंडांची स्थिती सिद्ध होत नाही.\n\nबंदरासाठी सहाय्यक वाहतूक सुविधांचीही आवश्यकता आहे. रस्ते आणि रेल्वे संपर्काशी संबंधित जमीन अधिग्रहण व भरपाई प्रक्रियेमुळे शेतीजमीन, मालमत्ता, प्रवेशमार्ग आणि त्या संसाधनांवर अवलंबून असलेल्या लोकांवर परिणाम होऊ शकतो. प्रकल्पाच्या पर्यावरणीय दस्तऐवजांमध्ये जमीन अधिग्रहण आणि बांधकामाशी संबंधित संभाव्य परिणामांमध्ये शेतीजमीन, भूखंड, संरचना, उपजीविका, झाडे, पिके आणि सामुदायिक संसाधनांचा उल्लेख आहे. एखाद्या कुटुंबावर नेमका किती परिणाम होईल, हे संबंधित प्रकल्प दस्तऐवज आणि अभिलेखांवरून तपासणे आवश्यक आहे.\n\nकिनारपट्टी आणि समुद्री पर्यावरणावरील परिणाम हाही चिंतेचा विषय आहे. मच्छीमार समुदायांना मासेमारी क्षेत्रांपर्यंत पोहोचणे, समुद्री अधिवासातील बदल आणि बांधकामामुळे होणारे परिणाम याबाबत चिंता असू शकते. अशा परिणामांचे मूल्यांकन आणि व्यवस्थापन करण्यासाठी पर्यावरणीय तपासणी, नियमित निरीक्षण, परिणाम कमी करण्याच्या योजना आणि माहितीचे पारदर्शक प्रकटीकरण महत्त्वाचे आहे.\n\nजमीन अधिग्रहण ही एकाच टप्प्यात पूर्ण होणारी प्रक्रिया नाही. लागू कायदा आणि प्रकल्पाच्या घटकानुसार सर्वेक्षण, अधिसूचना, भरपाई निश्चिती, हरकती, मालकी किंवा वारस नोंदींची पडताळणी आणि ताबा घेणे हे स्वतंत्र टप्पे असू शकतात. सर्वेक्षण, आंदोलन, प्राथमिक बांधकाम किंवा भरपाई शिबिर यावरून सर्व अधिग्रहण किंवा बांधकाम पूर्ण झाले आहे असे समजू नये.\n\nत्यामुळे सार्वजनिक चर्चा केवळ बंदरामुळे आर्थिक विकास होईल का, यापुरती मर्यादित नाही. प्रकल्पाचे निर्णय कसे घेतले जातात, प्रभावित नागरिकांशी सल्लामसलत कशी होते, भरपाई आणि पुनर्वसन प्रक्रिया सुलभ व न्याय्य आहेत का, पर्यावरणीय संरक्षणाची व्यवस्था काय आहे आणि पालघर परिसरातील अनेक प्रकल्पांचे एकत्रित परिणाम कसे विचारात घेतले जातात, हे प्रश्नही महत्त्वाचे आहेत. जमीन आणि उपजीविकेवर परिणाम करणाऱ्या मोठ्या प्रकल्पांमध्ये नागरिकांचा सहभाग, अचूक माहिती आणि उत्तरदायित्व आवश्यक आहे."
  },
  "seoSections": {
    "en": [
      {
        "heading": "What is the Vadhvan Port project?",
        "content": "A major port proposed near Dahanu in Palghar district, with road and rail connectivity planned to support it."
      },
      {
        "heading": "Why are local residents opposing it?",
        "content": "Concerns include land acquisition, fishing and farming livelihoods, coastal ecology, compensation and consultation."
      },
      {
        "heading": "What happened during the November 2026 protest?",
        "content": "A November 19 report described residents blocking soil-and-stone trucks near Tighare Pada and said around 25 protesters were detained following police intervention."
      },
      {
        "heading": "How can port connectivity affect landowners?",
        "content": "Supporting links may require land and affect farmland, property, access, structures, crops or livelihoods, depending on the alignment."
      },
      {
        "heading": "What environmental issues are being raised?",
        "content": "Concerns include coastal and marine ecosystems, fishing grounds, natural resources, construction impacts and the need for environmental review and monitoring."
      },
      {
        "heading": "Does preliminary work mean the project is complete?",
        "content": "No. Protests, preliminary work, acquisition, approvals and construction of individual components are distinct stages."
      }
    ],
    "mr": [
      {
        "heading": "वाढवण बंदर प्रकल्प म्हणजे काय?",
        "content": "वाढवण बंदर हा पालघर जिल्ह्यात डहाणूजवळ प्रस्तावित मोठा बंदर प्रकल्प आहे. त्यासाठी रस्ते आणि रेल्वे संपर्क सुविधाही नियोजित आहेत."
      },
      {
        "heading": "स्थानिक नागरिक विरोध का करत आहेत?",
        "content": "जमीन अधिग्रहण, मासेमारी व शेतीवरील उपजीविका, किनारपट्टीवरील पर्यावरण, भरपाई आणि नागरिकांशी सल्लामसलत याबाबत चिंता व्यक्त केली जात आहे."
      },
      {
        "heading": "नोव्हेंबर 2026 मधील आंदोलनादरम्यान काय घडले?",
        "content": "19 नोव्हेंबरच्या वृत्तानुसार, तिघरेपाडा परिसरात माती-दगड वाहून नेणाऱ्या ट्रकांना स्थानिक नागरिकांनी रोखले आणि पोलिसांच्या हस्तक्षेपानंतर सुमारे 25 आंदोलकांना ताब्यात घेण्यात आले."
      },
      {
        "heading": "बंदर संपर्क सुविधांचा जमीनमालकांवर काय परिणाम होऊ शकतो?",
        "content": "प्रस्तावित रस्ते आणि रेल्वे मार्गांसाठी जमीन आवश्यक असू शकते. मार्गानुसार शेतीजमीन, मालमत्ता, प्रवेशमार्ग, संरचना, पिके किंवा उपजीविकेवर परिणाम होऊ शकतो."
      },
      {
        "heading": "कोणत्या पर्यावरणीय मुद्द्यांबाबत चिंता आहे?",
        "content": "किनारपट्टी आणि समुद्री परिसंस्था, मासेमारी क्षेत्र, नैसर्गिक संसाधने, बांधकामाचे परिणाम आणि पर्यावरणीय मूल्यांकन व निरीक्षण याबाबत चिंता व्यक्त केली जात आहे."
      },
      {
        "heading": "प्राथमिक काम म्हणजे संपूर्ण प्रकल्प पूर्ण झाला का?",
        "content": "नाही. आंदोलन, प्राथमिक काम, जमीन अधिग्रहण, मंजुरी आणि बांधकामाचे टप्पे वेगवेगळे असतात."
      }
    ]
  },
  "faq": {
    "en": [
      {
        "question": "Where is Vadhvan Port proposed?",
        "answer": "Near Dahanu in Palghar district, Maharashtra."
      },
      {
        "question": "Why is the project controversial?",
        "answer": "Concerns include land acquisition, coastal and marine impacts, fishing and farming livelihoods, compensation and consultation."
      },
      {
        "question": "What was reported on November 19, 2026?",
        "answer": "Residents reportedly blocked soil-and-stone trucks near Tighare Pada and around 25 protesters were detained after police intervention."
      },
      {
        "question": "Will every resident be affected in the same way?",
        "answer": "No. Impacts depend on location, parcel, livelihood, project component and circumstances."
      },
      {
        "question": "What should affected residents check?",
        "answer": "Official notices, land records, compensation papers, environmental assessment and clearance documents, and information from relevant offices."
      }
    ],
    "mr": [
      {
        "question": "वाढवण बंदर कुठे प्रस्तावित आहे?",
        "answer": "महाराष्ट्रातील पालघर जिल्ह्यात डहाणूजवळ."
      },
      {
        "question": "या प्रकल्पाबाबत वाद का आहे?",
        "answer": "जमीन अधिग्रहण, किनारपट्टी व समुद्री पर्यावरण, मासेमारी व शेतीवरील उपजीविका, भरपाई आणि सल्लामसलत याबाबत चिंता आहे."
      },
      {
        "question": "19 नोव्हेंबर 2026 रोजी काय वृत्त आले?",
        "answer": "तिघरेपाडा परिसरात माती-दगड वाहून नेणाऱ्या ट्रकांना नागरिकांनी रोखल्याचे आणि पोलिसांच्या हस्तक्षेपानंतर सुमारे 25 आंदोलकांना ताब्यात घेतल्याचे वृत्त आले."
      },
      {
        "question": "सर्व स्थानिक नागरिकांवर सारखाच परिणाम होईल का?",
        "answer": "नाही. परिणाम स्थान, जमीन भूखंड, उपजीविका, प्रकल्पाचा घटक आणि परिस्थितीनुसार बदलू शकतात."
      },
      {
        "question": "प्रभावित नागरिकांनी कोणती कागदपत्रे तपासावीत?",
        "answer": "अधिकृत अधिसूचना, जमीन अभिलेख, भरपाईची कागदपत्रे, पर्यावरणीय मूल्यांकन व मंजुरीची कागदपत्रे आणि संबंधित कार्यालयांकडून उपलब्ध माहिती."
      }
    ]
  },
  "mcqs": {
    "en": [
      {
        "question": "Vadhvan Port is proposed in which district?",
        "options": [
          "Palghar",
          "Pune",
          "Nashik",
          "Satara"
        ],
        "answer": "Palghar"
      },
      {
        "question": "Which livelihood is among local concerns?",
        "options": [
          "Fishing and farming",
          "Only software services",
          "Himalayan mining",
          "Airline operations"
        ],
        "answer": "Fishing and farming"
      },
      {
        "question": "Land acquisition generally involves which?",
        "options": [
          "Only a survey",
          "Legal procedures, notices and compensation processes",
          "Automatic transfer without procedure",
          "Only construction"
        ],
        "answer": "Legal procedures, notices and compensation processes"
      },
      {
        "question": "What was reported during the November 19, 2026 protest?",
        "options": [
          "Residents blocked soil-and-stone trucks near Tighare Pada",
          "Port officially opened",
          "All acquisition declared complete",
          "Railway inaugurated"
        ],
        "answer": "Residents blocked soil-and-stone trucks near Tighare Pada"
      }
    ],
    "mr": [
      {
        "question": "वाढवण बंदर कोणत्या जिल्ह्यात प्रस्तावित आहे?",
        "options": [
          "पालघर",
          "पुणे",
          "नाशिक",
          "सातारा"
        ],
        "answer": "पालघर"
      },
      {
        "question": "स्थानिक समुदायांनी कोणत्या उपजीविकेबाबत चिंता व्यक्त केली आहे?",
        "options": [
          "मासेमारी आणि शेती",
          "केवळ सॉफ्टवेअर सेवा",
          "हिमालयातील खाणकाम",
          "विमानसेवा"
        ],
        "answer": "मासेमारी आणि शेती"
      },
      {
        "question": "जमीन अधिग्रहण प्रक्रियेमध्ये सामान्यतः काय समाविष्ट असते?",
        "options": [
          "केवळ सर्वेक्षण",
          "कायदेशीर प्रक्रिया, अधिसूचना आणि भरपाई प्रक्रिया",
          "प्रक्रियेशिवाय मालकी हस्तांतरण",
          "केवळ बांधकाम"
        ],
        "answer": "कायदेशीर प्रक्रिया, अधिसूचना आणि भरपाई प्रक्रिया"
      },
      {
        "question": "19 नोव्हेंबर 2026 च्या आंदोलनाबाबत काय वृत्त आले?",
        "options": [
          "तिघरेपाडा परिसरात माती-दगड वाहून नेणारे ट्रक रोखण्यात आले",
          "बंदर सुरू झाले",
          "सर्व अधिग्रहण पूर्ण घोषित झाले",
          "रेल्वेचे उद्घाटन झाले"
        ],
        "answer": "तिघरेपाडा परिसरात माती-दगड वाहून नेणारे ट्रक रोखण्यात आले"
      }
    ]
  },
  "source": {
    "name": "The Times of India",
    "url": "https://timesofindia.indiatimes.com/city/mumbai/vadhvan-port-protest-locals-block-trucks-carrying-soil-stones-25-detained-in-maharashtra/articleshow/135970056.cms"
  },
  "lastVerified": "2026-11-25",
  "verified": true,
  "relatedSlugs": [
    "shaktipeeth-expressway-land-acquisition-farmers-protests-maharashtra"
  ],
  "keywords": [
    "Vadhvan Port",
    "Vadhavan Port",
    "Palghar",
    "Dahanu",
    "Land Acquisition",
    "Fishing Communities",
    "Farmers",
    "Coastal Environment",
    "Port Development",
    "Maharashtra Infrastructure",
    "Livelihoods",
    "Public Participation",
    "Environmental Concerns"
  ]
},
]

const cleanSourceText = (value) => String(value || '').replace(/<br\s*\/?\s*>/gi, '\n').replace(/<\/p\s*>/gi, '\n\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").trim()
const localizedSections = (record, language) => {
  const sections = []
  const addText = (heading, field) => {
    const text = cleanSourceText(record[field]?.[language])
    if (text) sections.push({ heading, paragraphs: text.split(/\n\s*\n/).filter(Boolean) })
  }
  addText(language === 'mr' ? 'परिचय' : 'Introduction', 'introduction')
  addText(language === 'mr' ? 'सविस्तर स्पष्टीकरण' : 'Detailed explanation', 'simpleExplanation')
  addText(language === 'mr' ? 'थोडक्यात' : 'In brief', 'verySimple')
  addText(language === 'mr' ? 'उदाहरण' : 'Example', 'example')
  const officialText = cleanSourceText(record.officialText?.[language])
  if (officialText) sections.push({ heading: language === 'mr' ? 'अधिकृत मजकूर' : 'Official text', paragraphs: officialText.split(/\n\s*\n/).filter(Boolean) })
  for (const item of record.seoSections?.[language] || []) {
    const text = cleanSourceText(item.content)
    if (text) sections.push({ heading: item.heading, paragraphs: text.split(/\n\s*\n/).filter(Boolean) })
  }
  const faq = record.faq?.[language] || []
  if (faq.length) sections.push({ heading: language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently asked questions', items: faq.map((item) => `${item.question} ${item.answer}`) })
  const mcqs = record.mcqs?.[language] || []
  if (mcqs.length) sections.push({ heading: language === 'mr' ? 'ज्ञान तपासा' : 'Knowledge check', items: mcqs.map((item) => `${item.question} ${item.options?.join(' · ') || ''} ${item.answer || ''}`) })
  return sections
}

const curatedBySlug = new Map(curatedCurrentAffairs.map((item) => [item.slug, item]))
const migratedBySlug = new Map(migratedCurrentAffairs.map((item) => [item.slug, item]))
const migratedStories = migratedCurrentAffairs.map((record) => {
  const current = curatedBySlug.get(record.slug)
  const publishedAt = record.date || current?.publishedAt || ''
  const sourceName = record.source?.name || record.source?.title || ''
  const sourceUrl = record.source?.url
  const related = (record.relatedIds || []).map(String)
  return {
    ...(current || {}),
    slug: record.slug,
    category: current?.category || record.category || record.categoryMr || 'Current Affairs',
    publishedAt,
    updatedAt: record.updatedAt || current?.updatedAt,
    title: current?.title || record.title?.en || record.id,
    summary: current?.summary || record.shortDescription?.en || record.seoDescription?.en || '',
    introduction: record.introduction?.en || '',
    content: [...(current?.content || []), ...localizedSections(record, 'en')],
    relatedArticles: [...new Set([...(current?.relatedArticles || []), ...related])],
    relatedCurrentAffairs: [...new Set([...(current?.relatedCurrentAffairs || []), ...(record.relatedSlugs || [])])],
    sources: sourceUrl ? [{ title: sourceName || 'Source', url: sourceUrl }] : [],
    seo: current?.seo || { title: record.seoTitle?.en, description: record.seoDescription?.en || record.shortDescription?.en },
    migration: record,
  }
})

// Also include bilingual records added directly to curatedCurrentAffairs.
// The page consumes this exported list, so curated-only records must be
// converted from the migrated schema into the shape its components render.
const curatedOnlyStories = curatedCurrentAffairs
  .filter((record) => !migratedBySlug.has(record.slug))
  .map((record) => ({
    ...record,
    title: record.title?.en || record.title || record.id,
    summary: record.shortDescription?.en || record.summary || '',
    publishedAt: record.date || record.publishedAt || '',
    introduction: record.introduction?.en || record.introduction || '',
    content: [...(Array.isArray(record.content) ? record.content : []), ...localizedSections(record, 'en')],
    relatedArticles: (record.relatedIds || []).map(String),
    relatedCurrentAffairs: record.relatedSlugs || [],
    sources: record.source?.url ? [{ title: record.source.name || 'Source', url: record.source.url }] : record.sources || [],
    seo: { title: record.seoTitle?.en, description: record.seoDescription?.en || record.shortDescription?.en },
    migration: record,
  }))

export const currentAffairs = [...migratedStories, ...curatedOnlyStories].map((story) => {
  const record = migratedBySlug.get(story.slug)
  const sourceTranslations = record || story.migration
  return sourceTranslations ? { ...story, sourceTranslations, contentEn: localizedSections(sourceTranslations, 'en'), contentMr: localizedSections(sourceTranslations, 'mr') } : story
})
export const currentAffairsPath = (slug) => `/current-affairs/${slug}`
