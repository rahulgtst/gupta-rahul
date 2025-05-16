import { SocialData } from "../../../constants/Social.ts";

const Social = ({ bg = 'dark', className = '' }) => {
  const isLight = bg === 'light';

  const baseStyles =
    'group p-3 rounded-full transition-colors duration-300 border';

  const lightStyles =
    'text-black border-black hover:text-white hover:border-white hover:bg-black';

  const darkStyles =
    'text-white border-white hover:text-black hover:border-black hover:bg-white';

  const combinedClass = `${baseStyles} ${isLight ? lightStyles : darkStyles}`;

  return (
    <div className={`flex space-x-4 ${className}`}>
      {SocialData.map(({ href, Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default Social;