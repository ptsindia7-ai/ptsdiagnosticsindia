import Link from "next/link";
import { CalendarDays, FileText, Mail } from "lucide-react";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "Your access to PTS Diagnostics is subject to the following Terms and Conditions, which may be updated by us from time to time without notice to you. By accessing or using this Web site, you agree that you have read, understand, and agree to be bound to these Terms and Conditions, as they may be amended from time to time, as well as to the terms of our Privacy Policy, which is hereby incorporated into these Terms and Conditions.",
      "You are responsible for periodically reviewing these Terms and Conditions for applicable changes. Your use of this Web site after posting by us of any changes to these Terms and Conditions constitutes your acceptance to those changes. If you disagree with these Terms and Conditions, or are dissatisfied with this Web site, your sole and exclusive remedy is to discontinue using this site.",
    ],
  },
  {
    title: "2. Nature and Purpose of the Website",
    body: [
      "The Website is an informational marketing portal only. It is intended to provide general product information, specifications, and promotional content regarding medical devices distributed by PTS Diagnostics.",
    ],
    list: [
      "Does not offer any products or services for direct online sale, purchase, or transaction.",
      "Does not process payments or facilitate e-commerce transactions of any kind.",
    ],
  },
  {
    title: "4. Product Information Disclaimer",
    body: [
      "While we seek to ensure that product information on the Website is accurate and current, all technical specifications, indications, and claims regarding the products are governed by the official labelling, instructions for use, and regulatory approvals issued by the Manufacturer and the Central Drugs Standard Control Organisation (CDSCO) or other applicable regulatory authority. In the event of any discrepancy between the Website and the official product documentation, the official product documentation shall prevail.",
      "Content on the Website is provided for general informational purposes only and does not constitute medical advice, diagnosis, or treatment recommendations. Nothing on the Website is intended to substitute professional medical judgment. If you have a medical emergency or an adverse reaction associated with a product, please seek immediate medical attention and separately report the matter through the appropriate regulatory channel.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      'The information, documents, and related graphics published in this Website (the "Information") are the sole property of us except for information provided by third-party providers under contract to us, its subsidiaries or affiliates. No part of the Website may be reproduced, distributed, or used for commercial purposes without prior written consent, save for personal, non-commercial reference use.',
    ],
  },
  {
    title: "6. Complaints, Feedback, and Product Queries",
    body: [
      'The Website provides a contact email address officesupport@sinocare.com through which visitors may submit product-related queries, feedback, or complaints ("Submissions"). By making a Submission, you acknowledge and agree that:',
    ],
    list: [
      "We act solely as an intermediary and will forward relevant Submissions to the Manufacturer for review and response.",
      "We do not independently investigate, adjudicate, or guarantee resolution of any complaint, and assume no liability for the Manufacturer's response, or lack thereof.",
      "We may retain records of Submissions as described in our Privacy Policy for quality, compliance, and audit purposes.",
    ],
  },
  {
    title: "7. Prohibited Uses",
    body: [
      "You agree not to: (a) use the Website for any unlawful purpose; (b) attempt to gain unauthorized access to any portion of the Website or its underlying systems; (c) upload or transmit any viruses, malicious code, or disruptive material; (d) scrape, harvest, or misuse any content or data from the Website; or (e) impersonate any person or misrepresent your affiliation with any person or entity in a Submission.",
    ],
  },
  {
    title: "8. Third-Party Links",
    body: [
      "The Website may contain links to third-party websites, including those of the Manufacturer or regulatory bodies, for convenience only. We do not control and are not responsible for the content, accuracy, or privacy practices of any third-party website.",
    ],
  },
  {
    title: "9. Disclaimer of Warranties and Limitation of Liability",
    body: [
      'The Website and its content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, to the fullest extent permitted by applicable law.',
      "To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your access to or use of, or inability to access or use, the Website, save in respect of liability that cannot be excluded under applicable Indian law, including any liability arising from death or personal injury caused by a defective product, which shall be governed by applicable product liability and consumer protection law and not by this clause.",
    ],
  },
  {
    title: "10. Indemnification",
    body: [
      "You agree to indemnify and hold harmless the Distributor, its officers, employees, and agents from any claims, losses, or damages arising out of your misuse of the Website or breach of these Terms.",
    ],
  },
  {
    title: "11. Governing Law and Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of People's Republic of China. All disputes arising from or in connection with this contract shall be submitted to Shenzhen Court of International Arbitration (SCIA) for arbitration in accordance with its rules of arbitration in effect at the time of applying for arbitration. The seat of arbitration shall be Shenzhen. The language to be used in the arbitral proceedings shall be English. The arbitral award is final and binding upon both parties.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. The revised Terms will be posted on this page with an updated Effective Date. Continued use of the Website following any such update constitutes acceptance of the revised Terms.",
    ],
  },
];

export const metadata = {
  title: "Terms and Conditions | PTS Diagnostics",
  description: "Terms and Conditions for using the PTS Diagnostics website.",
};

function LinkedText({ children }) {
  const parts = children.split("PTS Diagnostics");

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <Link
          href="/"
          className="font-medium text-[#DF1931] transition hover:text-red-700"
        >
          PTS Diagnostics
        </Link>
      )}
    </span>
  ));
}

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            This Terms of Use applies to residents of India and explains the
            conditions for accessing and using the{" "}
            <Link
              href="/"
              className="font-medium text-[#DF1931] transition hover:text-red-700"
            >
              PTS Diagnostics
            </Link>{" "}
            website.
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
              Please review these terms carefully before using this website.
              Continued use of the website means acceptance of the current
              terms.
            </p>
          </aside>

          <div className="space-y-5">
            {termsSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
              >
                <h2 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>
                      <LinkedText>{paragraph}</LinkedText>
                    </p>
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
                </div>
              </article>
            ))}

            <article className="rounded-2xl bg-[#DF1931] p-5 text-white shadow-sm sm:p-7">
              <h2 className="text-xl font-semibold sm:text-2xl">
                13. Contact
              </h2>
              <p className="mt-4 leading-7 text-white/90">
                For questions regarding these Terms, please contact us at:
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
