type SkillCardProps = {
  name: string;
  icon: string;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="group flex aspect-square min-h-32 flex-col items-center justify-center gap-4 border-2 border-neutral-950 bg-white p-4 text-center transition hover:-translate-y-1 hover:bg-neutral-950 hover:text-white">
      <img src={icon} alt={`${name} logo`} className="size-11 transition group-hover:invert" loading="lazy" />
      <p className="text-sm font-bold sm:text-base">{name}</p>
    </div>
  );
};

export default SkillCard;
