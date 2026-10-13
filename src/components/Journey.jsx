import { Award, ExternalLink } from "lucide-react";
import { certificates, education } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

function Certificate({ cert }) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-300 group-hover:rotate-12">
        <Award className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold leading-snug">{cert.title}</span>
        <span className="block text-sm text-soft">
          {cert.issuer}, {cert.year}
        </span>
      </span>
      {cert.link && <ExternalLink className="h-4 w-4 shrink-0 text-soft" aria-hidden="true" />}
    </>
  );
  const cls =
    "group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink";
  return cert.link ? (
    <a href={cert.link} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Journey() {
  return (
    <Section id="journey" title="Education and certificates">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h3 className="mb-6 font-heading text-2xl font-semibold">Education</h3>
          <ol className="ml-1.5 border-l border-line">
            {education.map((e, i) => (
              <li key={e.title} className="relative pb-9 pl-7 last:pb-0">
                <Reveal index={i}>
                  <span
                    className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border-2 border-page bg-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-soft">{e.years}</p>
                  <h4 className="text-lg font-semibold">{e.title}</h4>
                  <p className="text-soft">{e.place}</p>
                  {e.note && <p className="mt-1 text-sm text-soft">{e.note}</p>}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 font-heading text-2xl font-semibold">Certificates</h3>
          <div className="grid gap-4">
            {certificates.map((c, i) => (
              <Reveal key={`${c.title}-${i}`} index={i}>
                <Certificate cert={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
