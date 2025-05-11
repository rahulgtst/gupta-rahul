import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { href: 'https://github.com/rahulgtst', Icon: FaGithub },
  { href: 'https://linkedin.com/in/rhlgt', Icon: FaLinkedinIn },
  { href: 'https://twitter.com/rahulgtst', Icon: FaTwitter },
  { href: 'https://leetcode.com/u/rahulgtst', Icon: SiLeetcode },
];

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
      {socialLinks.map(({ href, Icon }, index) => (
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