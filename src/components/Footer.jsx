import { Mail } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 md:scroll-mt-16 border-t border-line py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="font-heading text-[clamp(2rem,6vw,4rem)] font-semibold leading-tight tracking-tight">
          Have a role or a project in mind?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-3 break-all text-xl text-link underline underline-offset-8 sm:text-2xl"
        >
          <Mail className="h-6 w-6 shrink-0" aria-hidden="true" />
          {profile.email}
        </a>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-6 text-sm text-soft sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
