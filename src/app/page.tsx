import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-content items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-slate leading-relaxed">
            {site.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.hero.primaryCta.href} variant="primary">
              {site.hero.primaryCta.label}
            </Button>
            <Button href={site.hero.secondaryCta.href} variant="outline">
              {site.hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-sm justify-self-center lg:justify-self-end">
          <div
            className="absolute inset-0 bg-brand-gradient"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div className="absolute inset-6 flex items-center justify-center rounded-full bg-white/95 shadow-sm">
            <Image
              src="/logo.jpg"
              alt={`${site.name} logo`}
              width={160}
              height={160}
              className="h-2/3 w-2/3 rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
          <SectionHeading title="Why work with us" />
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {site.differentiators.map((item) => (
              <div key={item.title} className="border-l-2 border-teal pl-5">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="What we do"
            subtitle="An overview of our core service lines — see the services page for full detail."
          />
          <Link href="/services" className="text-sm font-medium text-teal hover:text-navy">
            View all services
          </Link>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-lg text-2xl font-semibold text-white sm:text-3xl">
            Have a project or an IT problem to solve?
          </h2>
          <Button href="/contact" variant="primary">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
