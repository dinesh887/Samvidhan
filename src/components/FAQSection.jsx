import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const faqs = [
  {
    id: 1,
    question: {
      en: "What is the Constitution?",
      mr: "संविधान म्हणजे काय?",
    },
    answer: {
      en: "The Constitution of India is the supreme legal framework that defines the structure of government, powers of institutions, and rights and duties of citizens.",
      mr: "भारतीय संविधान हे भारताच्या शासनव्यवस्थेची रचना, संस्थांचे अधिकार तसेच नागरिकांचे अधिकार आणि कर्तव्ये निश्चित करणारे सर्वोच्च कायदेशीर दस्तऐवज आहे.",
    },
  },
  {
    id: 2,
    question: {
      en: "When did the Constitution of India come into effect?",
      mr: "भारतीय संविधान कधी लागू झाले?",
    },
    answer: {
      en: "The Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950.",
      mr: "भारतीय संविधान 26 नोव्हेंबर 1949 रोजी स्वीकारले गेले आणि 26 जानेवारी 1950 रोजी लागू झाले.",
    },
  },
  {
    id: 3,
    question: {
      en: "How many Fundamental Rights are there?",
      mr: "मूलभूत अधिकार किती आहेत?",
    },
    answer: {
      en: "The Constitution currently provides six broad categories of Fundamental Rights under Part III.",
      mr: "भारतीय संविधानाच्या भाग III मध्ये सध्या मूलभूत अधिकारांच्या सहा प्रमुख श्रेणींची तरतूद आहे.",
    },
  },
  {
    id: 4,
    question: {
      en: "What is the difference between an Article and an Amendment?",
      mr: "अनुच्छेद आणि घटनादुरुस्तीमध्ये काय फरक आहे?",
    },
    answer: {
      en: "An Article is a specific provision of the Constitution. An Amendment is a formal change made to the Constitution through the constitutional amendment process.",
      mr: "अनुच्छेद हा संविधानातील विशिष्ट तरतूद आहे. घटनादुरुस्ती म्हणजे संविधानातील तरतुदीत घटनात्मक प्रक्रियेद्वारे केलेला अधिकृत बदल.",
    },
  },
  {
    id: 5,
    question: {
      en: "How is the Constitution of India structured?",
      mr: "भारतीय संविधानाची रचना कशी आहे?",
    },
    answer: {
      en: "The Constitution is organised into Parts, Articles and Schedules covering different aspects of India's constitutional and governance system.",
      mr: "भारतीय संविधानाची रचना विविध भाग, अनुच्छेद आणि अनुसूचींमध्ये करण्यात आली आहे. यामध्ये भारताच्या घटनात्मक आणि शासनव्यवस्थेशी संबंधित विविध विषयांचा समावेश आहे.",
    },
  },
  {
    id: 6,
    question: {
      en: "Who drafted the Constitution of India?",
      mr: "भारतीय संविधान कोणी तयार केले?",
    },
    answer: {
      en: "The Constitution was framed by the Constituent Assembly. Dr. B. R. Ambedkar chaired the Drafting Committee.",
      mr: "भारतीय संविधानाची निर्मिती संविधान सभेने केली. डॉ. बाबासाहेब आंबेडकर हे मसुदा समितीचे अध्यक्ष होते.",
    },
  },
];

export default function FAQSection() {
  const { pick } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
          {pick({
            en: "Common Questions",
            mr: "सामान्य प्रश्न",
          })}
        </p>

        <h2 className="font-display mt-2 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
          {pick({
            en: "Frequently Asked Questions",
            mr: "वारंवार विचारले जाणारे प्रश्न",
          })}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
          {pick({
            en: "Quick answers to common questions about the Constitution of India.",
            mr: "भारतीय संविधानाबद्दलच्या सामान्य प्रश्नांची सोप्या भाषेत उत्तरे.",
          })}
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-8 space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-navy/10 bg-white/60 dark:border-ink-dark/10 dark:bg-white/[0.04]"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-navy dark:text-ink-dark">
                  {pick(faq.question)}
                </span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 text-saffron transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-navy/10 px-5 py-4 dark:border-ink-dark/10">
                  <p className="text-sm leading-7 text-ink/65 dark:text-ink-dark/65">
                    {pick(faq.answer)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

