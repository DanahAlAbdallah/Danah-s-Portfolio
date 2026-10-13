// Shows a real image, or a themed placeholder until you add one.
export default function Media({ src, alt, label = "Your image here", className = "" }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`ph grid h-full w-full place-items-center px-3 text-center text-sm text-soft ${className}`}
    >
      {label}
    </div>
  );
}
