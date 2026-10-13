import { Briefcase } from "lucide-react";
import { experience } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Where I have worked and what I did there."
    >
      <ol className="ml-3 max-w-3xl border-l-2 border-line sm:ml-4">
        {experience.map((job, i) => (
          <li
            key={`${job.title}-${job.years}`}
            className="relative pb-10 pl-8 last:pb-0 sm:pl-10"
          >
            {/* timeline dot */}
            <span
              aria-hidden="true"
              className="absolute -left-[13px] top-6 grid h-6 w-6 place-items-center rounded-full border-2 border-page bg-accent text-accent-ink"
            >
              <Briefcase className="h-3 w-3" />
            </span>

            <Reveal index={i}>
              <article className="rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[7px_7px_0_0_var(--c-accent)] sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="rounded-full border border-line bg-page px-3 py-1 text-xs font-medium text-soft">
                    {job.years}
                  </p>
                  {job.current && (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-ink">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {job.title}
                </h3>
                <p className="text-soft">{job.place}</p>

                {job.note && <p className="mt-3">{job.note}</p>}

                {job.highlights?.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-soft marker:text-accent">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                {job.tags?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-page px-2.5 py-1 text-xs text-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
