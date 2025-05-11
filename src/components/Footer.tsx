import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    href: 'https://github.com/rahulgtst',
    Icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/rhlgt',
    Icon: FaLinkedinIn,
  },
  {
    href: 'https://twitter.com/rahulgtst',
    Icon: FaTwitter,
  },
  {
    href: 'https://leetcode.com/u/rahulgtst',
    Icon: SiLeetcode,
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 font-body">
        <div className="flex flex-col justify-center items-center space-y-6 py-4">
          <div className="text-center">
            <h3 className="text-4xl font-heading font-bold">Rahul Gupta</h3>
            <p className="text-lg text-gray-300 mt-4 italic">Living, learning, & leveling up — every single day.</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ href, Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white/10 p-3 hover:bg-white transition-colors duration-300"
              >
                <Icon className="text-white group-hover:text-primary transition-colors duration-300" size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Rahul Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;