'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import companyLogo from '@/public/images/company-logo.svg';
import menuOpen from '@/public/images/menu.svg';
import menuClose from '@/public/images/menu-close.svg';
import { CartFormField } from '../CartFormField';
import { CartProduct } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  cart: CartProduct[];
  isMenuOpen: boolean;
  isSinglePage?: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({
  cart,
  setIsMenuOpen,
  isMenuOpen,
  isSinglePage,
}: NavbarProps) => {
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const toggleMenuClose = () => {
    setIsMenuOpen(false);
  };

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
    <nav
      className={`h-7 w-full navbar ${
        !isSinglePage ? 'mb-[53px]' : ''
      } px-[16px] md:px-[60px] md:mb-0 md:h-[90px] flex items-center justify-between py-[25px] bg-gray-50 backdrop-blur-[20px]`}
    >
      <Link href={`/`} onClick={handleHomeClick}>
        <Image
          src={companyLogo}
          alt="logo"
          className="w-full h-full transition-opacity opacity-0 duration-[1s]"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
      </Link>

      <ul className="hidden md:flex md:items-center text-neutral-700 text-opacity-50 text-base font-normal font-['Poppins'] leading-[17.06px]">
        <li className="mr-6 z-50">
          <CartFormField cartItems={cart} />
        </li>

        <li
          className={`mr-6 ${activeLink === 'Home' ? 'text-orange-500' : ''}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6">
          <button onClick={handleNavigateToShopSection}>Shop</button>
        </li>
        <li className={activeLink === 'Contact Us' ? 'text-orange-500' : ''}>
          <button onClick={handleNavigateToContactUsSection}>Contact Us</button>
        </li>
      </ul>

      <div className="flex z-50 items-center justify-between md:hidden">
        <div className="mr-4">
          <CartFormField cartItems={cart} />
        </div>

        {!isMenuOpen ? (
          <button className="w-8 h-8 " onClick={toggleMenuOpen}>
            <Image
              src={menuOpen}
              alt=""
              className="w-full h-full transition-opacity opacity-0 duration-[1s]"
              onLoadingComplete={(image) => image.classList.remove('opacity-0')}
            />
          </button>
        ) : (
          <button className="w-8 h-8 " onClick={toggleMenuClose}>
            <Image
              src={menuClose}
              alt=""
              className="w-full h-full transition-opacity opacity-0 duration-[1s]"
              onLoadingComplete={(image) => image.classList.remove('opacity-0')}
            />
          </button>
        )}
      </div>
    </nav>
  );
};
