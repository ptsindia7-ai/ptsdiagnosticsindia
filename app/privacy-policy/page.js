import Link from "next/link";
import { CalendarDays, FileText, Mail, MapPin } from "lucide-react";

const privacySections = [
  {
    title: "1. Introduction and Scope",
    body: [
      <>
        This Privacy Policy explains how{" "}
        <Link
          href="/"
          className="font-medium text-[#DF1931] transition hover:text-red-700"
        >
          PTS Diagnostics
        </Link>{" "}
        India Pvt. Ltd. and all its wholly owned subsidiaries, affiliates, and
        related companies ("PTS", "we"), collects, uses, shares, and protects
        your personal information online, through our websites, mobile apps, and
        through our offline interactions with you, collectively referred to as
        the "Services".
      </>,
    ],
  },
  {
    title: "2. Personal Data We Collect",
    body: [
      "We may collect the following categories of personal data when you interact with the Website:",
    ],
    list: [
      "Contact details you voluntarily submit, such as name, email address, and phone number, when you contact us through the Website or submit a query, feedback, or complaint.",
      "Content of your Submission, which may include details regarding a medical device product, and, where you choose to include it, health-related information concerning yourself or a patient. This constitutes sensitive personal data and is collected only with your explicit consent, being volunteered by you for the purpose of the complaint or query.",
      "Technical data collected automatically, such as IP address, browser type, device information, and pages visited, for security, analytics, and website-performance purposes.",
    ],
  },
  {
    title: "3. How We Use Your Personal Data",
    body: [
      "We use personal data collected through the Website for the following purposes:",
    ],
    list: [
      "To respond to your queries and to route product-related feedback and complaints to the Manufacturer for review and response.",
      "To maintain internal records for quality assurance, audit, and regulatory compliance purposes.",
      "To maintain and improve the security, functionality, and performance of the Website.",
      "To comply with applicable legal or regulatory obligations.",
    ],
    footer:
      "We process personal data on the basis of your consent, given by voluntarily submitting your information, and, where applicable, for the performance of a legitimate use.",
  },
  {
    title: "4. Disclosure of Personal Data to Third Parties",
    body: [
      "We disclose personal data contained in a Submission to the Manufacturer, solely for the purpose of investigating and responding to your query or complaint. We may also disclose personal data: (a) to our website hosting and infrastructure service providers strictly for the purpose of operating the Website; (b) to regulatory or governmental authorities where required by applicable law; or (c) to professional advisors on a confidential basis, where necessary. We do not sell or rent personal data to any third party for marketing purposes.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain personal data collected via the Website only for as long as is necessary to fulfil the purposes described in this Policy, including any applicable legal, regulatory, accounting, or reporting requirements, after which it will be securely deleted or anonymized.",
    ],
  },
  {
    title: "6. Hosting and Data Storage",
    body: ["The Website is hosted using Vercel's cloud infrastructure platform."],
  },
  {
    title: "7. Data Security",
    body: [
      "We implement reasonable technical and organizational security measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Your Rights",
    body: [
      "You have the right to: (a) obtain a summary of the personal data we hold about you and the processing activities undertaken; (b) request correction or completion of inaccurate or incomplete personal data; (c) request erasure of personal data that is no longer necessary for the purpose for which it was collected; (d) withdraw consent at any time, without affecting the lawfulness of processing carried out prior to withdrawal; (e) nominate another individual to exercise these rights on your behalf in the event of death or incapacity; and (f) lodge a grievance with us and, thereafter, with the Data Protection Board of India.",
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      "The Website is not directed at children. We do not knowingly collect personal data from individuals under 18 years of age other than health-related information a parent or guardian may choose to include in a Submission concerning a minor patient, which shall be processed solely for the purpose of addressing that Submission.",
    ],
  },
  {
    title: "10. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The revised Policy will be posted on this page with an updated Effective Date.",
    ],
  },
];

export const metadata = {
  title: "Privacy Policy | PTS Diagnostics",
  description:
    "Privacy Policy for how PTS Diagnostics collects, uses, shares, and protects personal data.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Learn how we collect, use, share, and protect personal information
            when you interact with our website and services.
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
              This policy describes what personal data may be collected, how it
              is used, and the rights available to you.
            </p>
          </aside>

          <div className="space-y-5">
            {privacySections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
              >
                <h2 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.title}-${index}`}>{paragraph}</p>
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
                10. Grievance Officer
              </h2>
              <p className="mt-4 leading-7 text-white/90">
                We have appointed a Grievance Officer to address queries and
                complaints regarding the processing of your personal data.
              </p>
              <div className="mt-5 space-y-3 text-white/90">
                <a
                  href="mailto:officesupport@sinocare.com"
                  className="flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
                >
                  <Mail size={18} />
                  officesupport@sinocare.com
                </a>
                <p className="flex gap-2 leading-7">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <span>
                    Ltd., ADD-5th Flr, Office No. 5B2, Unit No. 3, 'D' Wing,
                    MBC Park, Kasarwadavli, Ghodbunder Road, Thane West,
                    Mumbai, Maharashtra - 40061, India.
                  </span>
                </p>
              </div>
              <p className="mt-5 leading-7 text-white/90">
                We will endeavor to acknowledge and address grievances within
                the timelines prescribed under applicable law.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
