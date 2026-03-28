import { SocialData } from "../../../constants/Social.ts";

type Props = { bg?: "dark" | "light"; className?: string };

const Social = ({ bg = "dark", className = "" }: Props) => {
  const isLight = bg === "light";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {SocialData.map(({ href, Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`ghost-border flex h-11 w-11 items-center justify-center transition-colors duration-button ${
            isLight
              ? "text-primary hover:bg-surface_container_low"
              : "text-on_primary hover:bg-primary_fixed"
          }`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default Social;
