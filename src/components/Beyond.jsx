import { ArrowUpRight, Camera, PenLine } from "lucide-react";
import { beyond } from "../data";
import Media from "./Media";
import Reveal from "./Reveal";
import Section from "./Section";

const shapes = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function Beyond() {
  return (
    <Section id="beyond" title="Beyond the code" intro={beyond.intro}>
      <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14">
        {/* Photo wall: columns keep the mixed shapes tidy at every width */}
        <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-2">
          {beyond.photos.map((photo, i) => (
            <Reveal key={i} index={i} className="mb-3 break-inside-avoid !h-auto sm:mb-4">
              <figure className="group relative overflow-hidden rounded-xl border border-line">
                <div
                  className={`${shapes[photo.shape] ?? shapes.square} grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 [@media(hover:none)]:grayscale-0`}
                >
                  <Media src={photo.src} alt={photo.alt} label="Your photo" />
                </div>
                {photo.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-3 py-2 text-xs text-page transition-transform duration-300 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <div className="rounded-2xl bg-accent p-7 text-accent-ink">
              <PenLine className="mb-4 h-7 w-7" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-semibold">Writing</h3>
              <p className="mt-2">{beyond.writing.text}</p>
              <a
                href={beyond.writing.link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold underline underline-offset-4"
              >
                {beyond.writing.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="rounded-2xl border border-line bg-card p-7">
              <Camera className="mb-4 h-7 w-7" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-semibold">Photography</h3>
              <p className="mt-2 text-soft">
                Mostly street and landscape, shot when the light is worth waiting for.
              </p>
              <a
                href={beyond.photoLink.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-link underline underline-offset-4"
              >
                {beyond.photoLink.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
