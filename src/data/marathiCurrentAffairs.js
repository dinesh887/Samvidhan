export const marathiCurrentAffairs = {
  'two-child-norm-supreme-court-larger-bench-2026': {
    title: 'दोन अपत्यांचा निकष आणि भारतीय संविधान: सर्वोच्च न्यायालयाकडून पुनर्विचार', category: 'राज्यव्यवस्था आणि संविधान', summary: 'स्थानिक स्वराज्य संस्थांच्या निवडणुकांमधील दोन अपत्यांच्या निकषामुळे अपात्र ठरवण्याच्या प्रश्नाचा पुनर्विचार करण्यासाठी सर्वोच्च न्यायालयाने 2003 मधील जावेद प्रकरण मोठ्या खंडपीठाकडे पाठवले आहे.', content: [
      { heading: 'काय घडले?', paragraphs: ['4 नोव्हेंबर 2026 रोजी सर्वोच्च न्यायालयाने स्थानिक स्वराज्य संस्थांच्या निवडणुकांमधील दोन अपत्यांच्या निकषाने होणाऱ्या अपात्रतेचा प्रश्न 2003 मधील जावेद निकालाचा पुनर्विचार करण्यासाठी मोठ्या खंडपीठाकडे पाठवला. या संदर्भाचा अर्थ कायदेशीर प्रश्नाचा पुनर्विचार सुरू आहे; हा त्या निकालाला रद्द करणारा अंतिम निर्णय नाही.'] },
      { heading: 'घटनात्मक संबंध', paragraphs: ['उपलब्ध स्पष्टीकरणात हा मुद्दा कलम 14 मधील समता आणि कलम 21 मधील व्यक्तिगत स्वातंत्र्याशी जोडला आहे. अपात्रतेची तरतूद कशी लागू होते आणि त्याविरुद्ध कोणते हक्कविषयक युक्तिवाद केले जातात, हे घटनात्मक प्रश्न आहेत.'] },
    ],
  },
  'malad-appapada-krantinagar-120-feet-dp-road-rehabilitation': {
    title: 'मालाड विकास आराखडा रस्ता प्रकल्प: पुनर्वसनाबाबत चिंता', category: 'स्थानिक बातम्या आणि नागरी प्रश्न', summary: 'मालाडमधील प्रस्तावित 120 फूट रुंदीच्या विकास आराखडा रस्त्याशी संबंधित पुनर्वसनाबाबत रहिवाशांनी चिंता व्यक्त केली आहे.',
  },
  'save-bhimashankar-saidongar-karjat-tree-felling-2026': {
    title: 'भीमाशंकर जलविद्युत प्रकल्पावरील चर्चा', category: 'पर्यावरण', summary: 'प्रस्तावित कर्जत प्रकल्प, वृक्षतोडीबाबतची नोंद आणि त्यासंबंधीच्या पर्यावरणीय चिंतांची माहिती घ्या.', content: [
      { heading: 'प्रकल्प आणि नोंदवलेल्या चिंता', paragraphs: ['प्रस्तावित साईडोंगर-I कर्जत पंप्ड-स्टोरेज प्रकल्पाबाबत 32,490 झाडे तोडली जाण्याची नोंद असल्याने चिंता व्यक्त झाली आहे. प्रस्तावित प्रकल्पाचे क्षेत्र भीमाशंकर वन्यजीव अभयारण्याच्या आत नाही, असे वन विभागाने स्पष्ट केले.'] },
    ],
  },
}

export const localizedCurrentAffair = (item, language) => {
  if (!item || language !== 'mr') return item
  const manual = marathiCurrentAffairs[item.slug] || {}
  const source = item.sourceTranslations || item.migration
  const translatedContent = manual.content?.length
    ? manual.content
    : item.contentMr?.length
      ? item.contentMr
      : source?.content?.mr || []
  return {
    ...item,
    ...manual,
    title: manual.title || source?.title?.mr || item.title,
    category: manual.category || source?.categoryMr || item.category,
    summary: manual.summary || source?.shortDescription?.mr || item.summary,
    introduction: source?.introduction?.mr || manual.introduction || item.introduction,
    content: translatedContent,
    sources: item.sources,
  }
}
export const localizedCurrentAffairs = (items, language) => language === 'mr' ? items.map((item) => localizedCurrentAffair(item, language)) : items
