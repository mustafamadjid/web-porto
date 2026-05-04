type EducationCardProps = {
  school: string;
  degree: string;
  period: string;
  detail: string;
  index: number;
};

const EducationCard = ({ school, degree, period, detail, index }: EducationCardProps) => {
  return (
    <article className="group relative border-2 border-neutral-950 bg-white p-6 shadow-[8px_8px_0_#111111] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]">
      <div className="absolute -left-[3.2rem] top-7 hidden size-10 place-items-center border-2 border-neutral-950 bg-white text-sm font-extrabold text-neutral-950 md:grid">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="inline-flex border border-neutral-950 px-3 py-1 text-xs font-extrabold uppercase text-neutral-950">
            {period}
          </p>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight text-neutral-950">{school}</h3>
          <p className="mt-3 text-base font-semibold text-neutral-700">{degree}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center bg-neutral-950 text-sm font-extrabold text-white sm:size-14">
          {index + 1}
        </span>
      </div>
      <div className="mt-6 border-t border-neutral-200 pt-5">
        <p className="text-sm font-semibold leading-7 text-neutral-600">{detail}</p>
      </div>
    </article>
  );
};

export default EducationCard;
