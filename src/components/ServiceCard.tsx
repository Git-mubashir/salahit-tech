import type { SiteService } from "@/content/site";

export default function ServiceCard({ service }: { service: SiteService }) {
  return (
    <div className="border-l-2 border-line pl-6 py-1 hover:border-teal transition-colors">
      <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
      <p className="mt-2 text-slate leading-relaxed">{service.summary}</p>
      <ul className="mt-4 space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-ink">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
