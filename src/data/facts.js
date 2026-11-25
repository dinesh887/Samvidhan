// "Did You Know?" facts, rotated by the day of the year so the homepage
// shows a different fact each day without needing a backend.

export const facts = [
  {
    en: 'The original Constitution of India was handwritten and calligraphed, not typed or printed.',
    mr: 'भारतीय संविधानाची मूळ प्रत टंकलिखित किंवा मुद्रित नसून हस्तलिखित व सुलेखन केलेली आहे.',
  },
  {
    en: 'The Constituent Assembly took nearly three years to draft the Constitution.',
    mr: 'संविधान तयार करण्यासाठी संविधान सभेला जवळपास तीन वर्षे लागली.',
  },
  {
    en: 'India is often described as having one of the longest written constitutions of any sovereign country.',
    mr: 'भारताचे संविधान जगातील सार्वभौम देशांच्या सर्वात लांब लिखित संविधानांपैकी एक मानले जाते.',
  },
  {
    en: 'The Preamble was amended once, by the 42nd Amendment in 1976.',
    mr: 'प्रस्तावनेत केवळ एकदाच, १९७६ मधील ४२व्या दुरुस्तीने बदल करण्यात आला.',
  },
  {
    en: 'B. R. Ambedkar chaired the Drafting Committee of the Constituent Assembly.',
    mr: 'डॉ. बाबासाहेब आंबेडकर हे संविधान सभेच्या मसुदा समितीचे अध्यक्ष होते.',
  },
  {
    en: 'The Constitution recognises 22 languages in its Eighth Schedule.',
    mr: 'संविधानाच्या आठव्या परिशिष्टात २२ भाषांना मान्यता दिली आहे.',
  },
  {
    en: 'Fundamental Duties, added in 1976, were inspired in part by the constitution of the erstwhile Soviet Union.',
    mr: '१९७६ मध्ये जोडलेली मूलभूत कर्तव्ये अंशतः पूर्वीच्या सोव्हिएत संघाच्या संविधानापासून प्रेरित होती.',
  },
]

export function getTodaysFact() {
  const start = new Date(new Date().getFullYear(), 0, 0)
  const diff = new Date() - start
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return facts[dayOfYear % facts.length]
}
