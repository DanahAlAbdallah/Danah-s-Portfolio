import { useEffect, useState } from "react";
import { themes } from "../data";

const KEY = "portfolio-theme";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(() => {
    const saved = document.documentElement.dataset.theme;
    return themes.some((t) => t.id === saved) ? saved : themes[0].id;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = active;
    try {
      localStorage.setItem(KEY, active);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [active]);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="flex items-center gap-1 rounded-full border border-line bg-card p-1"
    >
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          title={t.label}
          aria-label={`${t.label} theme`}
          aria-pressed={active === t.id}
          onClick={() => setActive(t.id)}
          className={`rounded-full p-0.5 transition-transform hover:scale-110 ${
            active === t.id ? "ring-2 ring-ink" : ""
          }`}
        >
          {/* data-theme here makes the swatch show that theme's own colours */}
          <span
            data-theme={t.id}
            className="block h-5 w-5 rounded-full border border-line"
            style={{ background: "linear-gradient(135deg, var(--c-bg) 50%, var(--c-accent) 50%)" }}
          />
        </button>
      ))}
    </div>
  );
}
