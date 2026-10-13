import { nav, profile } from "../data";
// import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-heading text-xl font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-soft transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        {/* <ThemeSwitcher /> */}
      </div>
      <nav
        aria-label="Sections"
        className="mx-auto flex w-full max-w-6xl gap-5 overflow-x-auto px-5 pb-3 text-sm whitespace-nowrap sm:px-8 md:hidden"
      >
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="text-soft hover:text-ink">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
