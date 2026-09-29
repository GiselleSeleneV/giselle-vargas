type SectionTextureProps = {
  readonly side: "left" | "right";
};

export default function SectionTexture({ side }: SectionTextureProps) {
  const onLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`section-texture pointer-events-none absolute inset-y-0 -z-10 w-[34%] md:w-[44%] lg:w-[58%] text-(--accent) ${
        onLeft ? "section-texture-left left-0" : "section-texture-right right-0"
      }`}
    >
      <svg
        className={`h-full w-full ${onLeft ? "-scale-x-100" : ""}`}
        viewBox="0 0 700 800"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <ellipse cx="560" cy="250" rx="210" ry="180" stroke="currentColor" strokeOpacity="0.16" />
        <ellipse cx="620" cy="460" rx="240" ry="200" stroke="#F6F1EC" strokeOpacity="0.08" />
        <path
          d="M180 140C340 210 430 340 470 520C510 680 560 740 700 780"
          stroke="currentColor"
          strokeOpacity="0.12"
        />
      </svg>
    </div>
  );
}
