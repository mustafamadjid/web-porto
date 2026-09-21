type SkillCardProps = {
  name: string;
  icon: string;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="flex aspect-square min-h-32 flex-col items-center justify-center gap-4 border-2 border-neutral-950 bg-white p-4 text-center">
      <img
        src={icon}
        alt=""
        width={44}
        height={44}
        className="size-11"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <p className="text-sm font-bold sm:text-base">{name}</p>
    </div>
  );
};

export default SkillCard;
