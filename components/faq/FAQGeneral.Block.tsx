import React from "react";

type Props = {
  locale?: string;
  baseUrl: string;
};

const FAQGeneralBlock: React.FC<Props> = async ({ baseUrl, locale }: Props) => {
  const data = (await fetch(baseUrl + "/api/faqs/" + (locale || "en")).then(
    (res) => res.json()
  )) as {
    locale: string;
    faqs: Array<{
      group: string;
      items: Array<{ question: string; answer: string }>;
    }>;
  };
  const faqs = data.faqs || [];
  console.log("FAQGeneralBlock -> faqs", faqs);
  const uniquedGroups = faqs.map((f) => f.group);
  let id = 0;
  const items = faqs
    .map((f) => {
      return f.items.map((i) => ({ id: ++id, ...i, group: f.group }));
    })
    .flat();

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-3xl flex-col items-center justify-between  px-16 bg-white dark:bg-black sm:items-start">
        {uniquedGroups.map((group) => (
          <div key={group}>
            <h2 className="font-bold text-2xl">{group}</h2>
            {items
              .filter((item) => item.group === group)
              .map((item) => (
                <div key={`faq-item-${item.id}`} className="mb-4">
                  <h3 className="font-bold">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQGeneralBlock;
