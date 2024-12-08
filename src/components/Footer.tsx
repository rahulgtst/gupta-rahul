import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold">Rahul Gupta</h3>
            <p className="text-gray-300 mt-2">Software Engineer (Full Stack Developer)</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/rahulgtst"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rhlgt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://twitter.com/rahulgtst"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://leetcode.com/u/rahulgtst"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Rahul Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 