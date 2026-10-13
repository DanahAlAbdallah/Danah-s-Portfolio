import { about } from "../data";
import Media from "./Media";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-14">
        <Reveal>
          <div className="aspect-[4/5] max-w-xs overflow-hidden rounded-2xl border border-line md:max-w-none">
            <Media src={about.photo} alt="Photo of me" label="About photo" />
          </div>
        </Reveal>
        <Reveal index={1}>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl" : "text-soft"}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
