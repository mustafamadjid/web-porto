type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

const SectionHeading = ({ eyebrow, title, highlight, align = "center", tone = "light" }: SectionHeadingProps) => {
  const titleColor = tone === "dark" ? "text-white" : "text-neutral-950";
  const eyebrowColor = tone === "dark" ? "text-neutral-400" : "text-neutral-500";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowColor}`}>{eyebrow}</p> : null}
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${titleColor}`}>
        {title} <span className="font-light">{highlight}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
