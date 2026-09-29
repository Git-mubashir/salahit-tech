import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/70 leading-relaxed">
            {site.shortDescription}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white/90">Site</p>
          <ul className="mt-3 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white/90">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone}`} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li>{site.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-3 px-6 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {site.social.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
