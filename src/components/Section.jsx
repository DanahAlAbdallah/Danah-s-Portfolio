import Reveal from "./Reveal";

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-28 md:scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-tight">
            {title}
          </h2>
          {intro && <p className="mt-3 text-lg text-soft">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
