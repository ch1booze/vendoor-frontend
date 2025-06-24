import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const faqs = [
  {
    question: "What do you need to open a Vendoor account?",
    answer: (
      <>
        <p>
          You can open a Vendoor account via our app on your smartphone or the
          web app. You're eligible if:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>You're at least 18 years old</li>
          <li>You're a resident of a supported country</li>
          <li>You have a compatible smartphone</li>
          <li>You don't already have an account with us</li>
          <li>
            You have a supported ID document, applicable to the country you're
            resident in.
          </li>
        </ul>
        <p className="mt-4">
          <a href="#" className="underline hover:text-black">
            Find further information here.
          </a>
        </p>
      </>
    ),
  },
  {
    question: "How do I open a Vendoor account?",
    answer:
      "Detailed instructions on how to sign up and get started with your Vendoor account will go here.",
  },
  {
    question: "What are the benefits of Vendoor?",
    answer:
      "Here we would list the key benefits, such as streamlined sales, inventory management, and customer analytics.",
  },
];

export function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="container mx-auto max-w-6xl">
      <h1 className="flex flex-col items-center text-6xl text-extra-bold py-16">
        FAQS
      </h1>
      <div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 pt-6">
              <dt>
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? (
                      <LuMinus className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <LuPlus className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>

              {openIndex === index && (
                <dd className="mt-4 pr-12">
                  <div className="rounded-lg bg-slate-50 p-6 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </div>
                </dd>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
