import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/content/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading
        title="Contact"
        subtitle="TODO: add a sentence inviting people to reach out (response time, what to include, etc.)."
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-2">
        <div className="space-y-4 text-ink">
          <div>
            <p className="text-sm font-medium text-slate">Email</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-lg font-medium text-navy hover:text-teal"
            >
              {site.contact.email}
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-slate">Phone</p>
            <a
              href={`tel:${site.contact.phone}`}
              className="text-lg font-medium text-navy hover:text-teal"
            >
              {site.contact.phone}
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-slate">Address</p>
            <p className="text-lg font-medium text-navy">{site.contact.address}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
