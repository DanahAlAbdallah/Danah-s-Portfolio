import { useEffect, useRef, useState } from "react";

// Fades a block in once, the first time it scrolls into view.
export default function Reveal({ children, index = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--i": index % 3 }}
      className={`reveal h-full ${shown ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
