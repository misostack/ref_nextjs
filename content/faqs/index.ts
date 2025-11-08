import { faqs as enFaq } from "./en";
import { faqs as viFaq } from "./vi";

const faqsMap: Record<string, typeof enFaq> = {
  en: enFaq,
  vi: viFaq,
};

export default faqsMap;
