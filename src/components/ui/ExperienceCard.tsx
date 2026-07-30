import type { Experience } from "../../data/portfolio-data";

type ExperienceCardProps = Experience & {
  index: number;
  total: number;
};

const ExperienceCard = ({
  position,
  organization,
  period,
  context,
  keyContributions,
  index,
  total,
}: ExperienceCardProps) => {
  const isEven = index % 2 === 0;
  const alignmentClass = isEven ? "lg:justify-start" : "lg:justify-end";
  const cardSideClass = isEven ? "lg:mr-auto" : "lg:ml-auto";
  const timelineNumber = total - index;

  return (
    <div className={`relative flex ${alignmentClass}`}>
      <div className="absolute left-0 top-8 z-10 grid size-8 -translate-x-1/2 place-items-center border-2 border-neutral-950 bg-white text-xs font-extrabold text-neutral-950 lg:left-1/2">
        {String(timelineNumber).padStart(2, "0")}
      </div>
      <article
        className={`ml-8 border-2 border-neutral-950 bg-white p-6 text-neutral-950 shadow-[10px_10px_0_#d4d4d4] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_#d4d4d4] lg:ml-0 lg:w-[calc(50%-2.75rem)] ${cardSideClass}`}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-bold">{position}</h3>
            <p className="mt-1 text-sm font-semibold text-neutral-600">{organization}</p>
          </div>
          <p className="text-sm font-extrabold text-neutral-700 md:text-right">
            {period}
          </p>
        </div>
        <p className="mt-5 text-sm leading-7 text-neutral-600">{context}</p>
        <h4 className="mt-6 text-xs font-extrabold uppercase tracking-wider text-neutral-500">
          Key Contributions
        </h4>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
          {keyContributions.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 bg-neutral-950" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ExperienceCard;