'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface NavbarProps {
  isSinglePage?: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setIsMenuOpen, isSinglePage }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState('Home');

  const btnStyle = `block px-4 py-[14px] text-neutral-700  text-base font-normal font-['Poppins'] leading-[17.06px]`;

  const handleNavigateToShopSection = () => {
    setActiveLink('Shop');
    document
      .getElementById('shopSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToContactUsSection = () => {
    setActiveLink('Contact Us');
    document
      .getElementById('contactUs')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setActiveLink('Home');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setActiveLink(isTop ? 'Home' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mx-[16px]  ${isSinglePage ? 'mb-10' : 'mt-20'} md:hidden`}>
      <div
        className="z-10 mt-2 w-full  rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <Link href="/" className={btnStyle} role="menuitem" id="menu-item-0">
            Home
          </Link>
          <button
            onClick={handleNavigateToShopSection}
            className={`${btnStyle} ${
              activeLink === 'Shop' ? 'text-orange-500' : ''
            }`}
            role="menuitem"
            id="menu-item-1"
          >
            Shop
          </button>
          <button
            onClick={handleNavigateToContactUsSection}
            className={`${btnStyle} ${
              activeLink === 'Contact Us' ? 'text-orange-500' : ''
            }`}
            role="menuitem"
            id="menu-item-2"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
