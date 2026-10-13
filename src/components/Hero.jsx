import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Media from "./Media";

const iconLink =
  "grid h-11 w-11 place-items-center rounded-full border border-line transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-card";

export default function Hero() {
  return (
    <section id="top" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          {profile.availability && (
            <p
              className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm"
              style={{ "--i": 0 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </p>
          )}

          <h1
            className="rise font-heading text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.95] tracking-tight [overflow-wrap:anywhere]"
            style={{ "--i": 1 }}
          >
            {profile.name}
          </h1>

          <p
            className="rise mt-4 font-heading text-[clamp(1.4rem,3.5vw,2.1rem)] italic text-soft"
            style={{ "--i": 2 }}
          >
            {profile.role}
          </p>

          <p className="rise mt-6 max-w-xl text-lg text-soft" style={{ "--i": 3 }}>
            {profile.tagline}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--i": 4 }}>
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              View projects <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            {profile.cv && (
              <a
                href={profile.cv}
                download
                className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 font-semibold transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-card"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
            )}
            <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* The photo "develops" on page load, like a print in a tray */}
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="film rotate-1 shadow-xl">
            <div className="develop aspect-[4/5] overflow-hidden rounded-sm">
              <Media src={profile.photo} alt={profile.photoAlt} label="Your photo here" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
