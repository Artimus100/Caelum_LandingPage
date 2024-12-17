import { useState, useEffect } from 'react';
import Logo from '../Assets/Logo.png';
import { Button } from '../components/Button';

export const Headers = () => {
  const navItems = [
    {
        name: 'Home',
        id : '#Hero'
     },
    {
        name: 'Progress',
        id : '#Progress'
     },
    {
        name: 'Testimonial',
        id : '#Testimonial' },
    {
        name: 'About Us',
        id : '#AboutUs'
     },
    {
        name: 'Contact',
        id : '#ContactUs' },
  ];

  const [isActive, setIsActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const activeNavButton =
    'outline-1 outline outline-[#07B782]/80 text-[#07B782] bg-green-700/5 backdrop-blur-md shadow-md -mt-1';

  const handleScroll = () => {
    // Check if the scroll position is greater than 4px
    setIsScrolled(window.scrollY > 4);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex w-full justify-between items-center px-8 py-4 fixed transition-all duration-300 z-40 ${
        isScrolled
          ? 'backdrop-blur-sm bg-emerald-950/5 shadow-md shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="size-12">
        <img src={Logo.src} alt="Logo" />
      </div>
      <div
        className="flex w-1/2 flex-row justify-between items-center rounded-[16px] px-4 py-3 outline outline-1 outline-teal-600"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 203, 169, 0.12) 0%, rgba(0, 203, 169, 0.01) 210.19%)',
          boxShadow:
            '0px -10px 10px 0px rgba(0, 203, 169, 0.08) inset, 0px 1px 4px 0px rgba(255, 255, 255, 0.05) inset, 0px 2px 6px 0px rgba(255, 255, 255, 0.02) inset, 5px 6px 23px 0px rgba(0, 203, 169, 0.12) inset',
          backdropFilter: 'blur(10.5px)',
        }}
      >
        {navItems.map(({ name, id }) => (
          <a
            href={id}
            onClick={() => setIsActive(name)}
            key={name}
            className={`cursor-pointer font-['Sofia_Pro'] text-xl font-md rounded-lg px-4 py-1 ${
              isActive === name ? activeNavButton : 'text-white/80'
            }`}
          >
            {name}
          </a>
        ))}
      </div>
      <div className="flex">
        <div className="inline-flex">
          <Button label="Connet Wallet" />
        </div>
      </div>
    </nav>
  );
};
