import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading
        title="Services"
        subtitle="TODO: add an intro sentence or two describing how these services fit together for a client."
      />

      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-slate">
          Not sure which service fits your situation? Get in touch and we can talk it
          through.
        </p>
        <Button href="/contact">Talk to us</Button>
      </div>
    </div>
  );
}
