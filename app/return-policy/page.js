import { CalendarDays, FileText, Mail } from "lucide-react";

const returnSections = [
  {
    title: "1. Our Commitment to You",
    body: [
      "We are committed to the quality, safety, and reliability of every product we distribute. This Policy sets out the general principles that apply if a product you purchased is found to be damaged, defective, or otherwise does not meet the standards you are entitled to expect.",
      "We take product-related concerns seriously and aim to resolve them fairly, promptly, and in accordance with applicable Indian law, including the Consumer Protection Act, 2019 and its rules.",
    ],
  },
  {
    title: "2. Scope of This Policy",
    body: [
      "Our product range includes a variety of medical devices, and the specific return, exchange, or warranty terms applicable to a given product may vary depending on its nature, intended use, sterility, warranty period, and the Manufacturer's own product-specific terms.",
      "This Policy describes our general approach across all products. Where a specific product's warranty card, instructions for use, invoice, or purchase agreement sets out different or more specific terms, those product-specific terms shall prevail over this general Policy.",
    ],
  },
  {
    title: "3. Categories of Resolution",
    body: [
      "Depending on the nature of the product and the issue reported, resolution will generally fall into one of the following categories:",
    ],
    list: [
      "Exchange for Damaged or Defective Products: If a product is found to be damaged in transit, defective, or not as described at the time of delivery, we will arrange for an exchange or replacement, subject to verification and the product-specific terms applicable to that item.",
      "Warranty Claims: Many of our products carry a manufacturer's warranty covering defects in materials or workmanship for a specified period, as stated on the product's warranty card or accompanying documentation. Warranty claims are assessed and honoured in accordance with the specific warranty terms issued by the Manufacturer for that product, which take precedence over the general timelines in this Policy.",
      "Non-Returnable Products: For reasons of health, hygiene, and patient safety, certain products, in particular sterile, single-use, or invasive medical devices that have been opened, unsealed, or used, cannot be returned or exchanged once the packaging seal has been broken, except where the product is defective or damaged. This is standard practice across the medical device industry and is intended to protect patient safety.",
    ],
  },
  {
    title: "4. General Timelines",
    body: [
      "Unless a product-specific policy states otherwise, requests for exchange due to damage or defect should be raised within 7 days of delivery, and warranty claims should be raised within the warranty period stated on the applicable product documentation.",
      "We encourage customers to inspect products promptly upon receipt and to retain the original invoice and packaging until they are satisfied with the product.",
    ],
  },
  {
    title: "5. How to Raise a Request",
    body: [
      "To raise a return, exchange, or warranty request, please contact us with the following information:",
    ],
    list: [
      "Your name and contact details.",
      "The product name, model/batch number, and invoice or order reference.",
      "A description of the issue, together with photographs where applicable.",
      "The date and place of purchase.",
    ],
    footer:
      "We will acknowledge your request and advise you of the next steps, which may include forwarding your request to the Manufacturer for technical assessment where the issue relates to product performance, quality, or warranty.",
  },
  {
    title: "6. Role of the Manufacturer",
    body: [
      "As an authorized distributor, we work closely with the Manufacturer to assess and resolve product-related requests. In some cases, particularly warranty claims or technical quality concerns, the final assessment and resolution may be determined by the Manufacturer in accordance with its warranty terms and quality standards.",
      "We will keep you informed of the status of your request throughout this process.",
    ],
  },
  {
    title: "7. Refunds",
    body: [
      "Where a refund is applicable and agreed following assessment of your request, it will be processed to the original mode of payment or as otherwise mutually agreed.",
    ],
  },
  {
    title: "8. Products Purchased Through Authorized Channels",
    body: [
      "This Website is an informational portal and does not process direct online sales. Products are purchased through our authorized dealers, distributors, or retail/hospital channels.",
      "This Policy reflects our general approach as the authorized distributor; the specific return, exchange, or warranty process may also be subject to the terms of the authorized channel through which you made your purchase, and we encourage you to also refer to your purchase invoice for channel-specific instructions.",
    ],
  },
];

export const metadata = {
  title: "Return Policy | PTS Diagnostics",
  description:
    "Return Policy for damaged, defective, exchange, warranty, and refund requests for PTS Diagnostics products.",
};

export default function ReturnPolicyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-red-50/40 px-4 py-12 sm:px-6 md:py-16">
        <img
          src="/images/vector.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 w-20 sm:w-32"
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-semibold text-[#DF1931] shadow-sm">
            <FileText size={16} />
            Legal Information
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Return Policy
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Our general approach for damaged, defective, exchange, warranty, and
            refund-related product requests.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-gray-600 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} className="text-[#DF1931]" />
              Effective Date: Aug 4, 2026
            </span>
            <a
              href="mailto:officesupport@sinocare.com"
              className="inline-flex items-center gap-2 font-medium text-[#DF1931] transition hover:text-red-700"
            >
              <Mail size={16} />
              officesupport@sinocare.com
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden py-12 md:py-16">
        <img
          src="/images/vector2.png"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 w-28 sm:w-40"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-2xl border border-red-100 bg-red-50/50 p-5 lg:sticky lg:top-6">
            <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              This policy outlines how return, exchange, warranty, and refund
              requests are generally reviewed for eligible products.
            </p>
          </aside>

          <div className="space-y-5">
            {returnSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
              >
                <h2 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#DF1931]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && <p>{section.footer}</p>}
                </div>
              </article>
            ))}

            <article className="rounded-2xl bg-[#DF1931] p-5 text-white shadow-sm sm:p-7">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Need Help With a Request?
              </h2>
              <p className="mt-4 leading-7 text-white/90">
                For return, exchange, warranty, or refund-related assistance,
                please contact our support team.
              </p>
              <a
                href="mailto:officesupport@sinocare.com"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
              >
                <Mail size={18} />
                officesupport@sinocare.com
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
