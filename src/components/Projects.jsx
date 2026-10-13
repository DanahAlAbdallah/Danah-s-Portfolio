import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { GithubIcon } from "./Icons";
import Media from "./Media";
import Reveal from "./Reveal";
import Section from "./Section";

function ProjectCard({ project, featured }) {
  return (
    <article
      className={`group grid h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[7px_7px_0_0_var(--c-accent)] ${
        featured ? "md:grid-cols-2" : ""
      }`}
    >
      <div className="h-full min-h-56 overflow-hidden border-b border-line md:border-b-0">
        <div className="flex h-full w-full items-center justify-center p-4">
          <Media
            src={project.image}
            alt={`${project.title} screenshot`}
            label="Project screenshot"
          />
        </div>
      </div>
      <div className="flex flex-col p-6 sm:p-7">
        <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
       {project.status && (
  <span className="w-fit self-start rounded-full border border-line bg-page px-3 py-1 text-xs font-medium text-soft">
    {project.status}
  </span>
)}
        <p className="mt-3 text-soft">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-page px-2.5 py-1 text-xs text-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink"
            >
              Live demo
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          )}

          {project.frontendURL && (
            <a
              href={project.frontendURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-ink hover:bg-card"
            >
              <GithubIcon className="h-4 w-4" />
              Frontend
            </a>
          )}

          {project.backendURL && (
            <a
              href={project.backendURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-ink hover:bg-card"
            >
              <GithubIcon className="h-4 w-4" />
              Backend
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      intro="A few things I have designed, built and shipped."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            index={i}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
