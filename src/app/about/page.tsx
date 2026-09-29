import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading title="About" />

      <div className="mt-8 max-w-prose space-y-5 text-ink leading-relaxed">
        {site.about.story.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="text-xl font-semibold text-navy">Our mission</h2>
        <p className="mt-3 max-w-prose text-slate leading-relaxed">
          {site.about.mission}
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="text-xl font-semibold text-navy">What we value</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {site.about.values.map((value) => (
            <div key={value.title} className="border-l-2 border-gold pl-5">
              <h3 className="font-semibold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
