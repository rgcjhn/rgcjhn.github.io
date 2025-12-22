import { CONTACT_METHODS } from '@/constants';
import { Linkedin, Mail } from 'lucide-react';
import React from 'react';
import Title from './title';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <Title title="LET'S BUILD" subtitle="TOGETHER" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {CONTACT_METHODS.map((method, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-4 sm:p-6">
              <method.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-primary-orange mb-2 sm:mb-3" />
              <h4 className="font-bold text-center mb-1 text-sm sm:text-base">{method.title}</h4>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-xs sm:text-sm text-muted hover:text-primary-orange transition text-center block"
                >
                  {method.content}
                </a>
              ) : (
                <p className="text-xs sm:text-sm text-muted text-center">{method.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => window.open('mailto:rgcjhn@gmail.com', '_blank')}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-orange rounded-xl hover:bg-orange-600 transition text-sm sm:text-base flex items-center justify-center"
          >
            <Mail className="w-4 h-4 inline mr-2" />
            Contact Me
          </button>
          <button
            onClick={() => window.open('https://linkedin.com/in/rgcjhn', '_blank')}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base flex items-center justify-center"
          >
            <Linkedin className="w-4 h-4 inline mr-2" />
            LinkedIn
          </button>
        </div>
      </div>

      <footer className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Rogec John Pecarana. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">Full-Stack Developer | React Native Specialist</p>
      </footer>
    </div>
  );
};

export default Footer;
