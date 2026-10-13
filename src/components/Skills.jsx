import { skills } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-line border-y border-line">
        {skills.map((g, i) => (
          <Reveal key={g.group} index={i}>
            <div className="grid gap-4 py-7 md:grid-cols-[13rem_1fr] md:gap-10">
              <h3 className="font-heading text-2xl font-semibold">{g.group}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-card px-4 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
