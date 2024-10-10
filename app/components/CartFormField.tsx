'use client';

import React, { useState } from 'react';
import { CartProduct } from '../types';
import cartDeleteIcon from '@/public/images/shopping-cart-delete.svg';
import Image from 'next/image';
import { useCart } from '@/state';
import toast from 'react-hot-toast';

export const CartFormField = ({ cartItems }: { cartItems: CartProduct[] }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [clickedOnceAfterCopy, setClickedOnceAfterCopy] = useState(false);
  const { dispatch } = useCart();

  const copyToClipboard = () => {
    if (clickedOnceAfterCopy === false) {
      toast('Products successfully copied, please past on Whatsapp', {
        duration: 40000,
        position: 'top-left',
        icon: '👏',
      });
    }
    setClickedOnceAfterCopy(true);
    const cartText = cartItems
      .map((item) => `${item.name} - ₦${item.price}`)
      .join('\n');
    navigator.clipboard
      .writeText(cartText)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
          setClickedOnceAfterCopy(false);
        }, 60000);
      })
      .catch((err) => console.error('Failed to copy:', err));
  };

  const navigateToExternalLink = () => {
    window.open('https://wa.me/7045745924', '_blank');
  };
  const removeFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleNavigateToShopSection = () => {
    document
      .getElementById('shopSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuDisplay = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="cart-form-field">
      <div className="flex flex-col gap-2">
        <div className="relative inline-block text-left">
          <div className="z-50">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleMenuDisplay}
            >
              Cart ({cartItems.length})
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`absolute right-0  z-50 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ${
              showMenu && cartItems && cartItems.length > 0 ? 'ring-1' : ''
            } ring-black ring-opacity-5 focus:outline-none`}
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {showMenu && cartItems && cartItems.length > 0 ? (
              <div className="py-1  ">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className=" flex justify-between z-50 px-3 items-center"
                    role="menuitem"
                  >
                    <p className="text-gray-700 block mr-[5px] md:mr-2 py-1 text-sm">
                      ({index + 1}): {`${item.name} - ₦${item.price}\n`}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer  w-5 h-5 flex items-center justify-center relative"
                    >
                      <Image
                        src={cartDeleteIcon}
                        alt="-"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </div>
                ))}

                {
                  cartItems.length > 0 ? (
                    <div className="flex items-center justify-center mx-2 mt-3">
                      <button
                        onClick={() => {
                          copyToClipboard();
                          if (copySuccess) {
                            if (clickedOnceAfterCopy) {
                              navigateToExternalLink();
                            } else {
                              setClickedOnceAfterCopy(true);
                            }
                          }
                        }}
                        className="w-28 h-9 px-3.5 py-2 bg-orange-500 rounded-lg shadow border justify-center items-center gap-2 inline-flex"
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm font-semibold font-['Inter'] leading-tight"
                        >
                          {copySuccess ? 'Whatsapp' : 'Place order'}
                        </a>
                      </button>
                    </div>
                  ) : null
                  // <button
                  //   onClick={handleNavigateToShopSection}
                  //   className="cursor-pointer text-center text-gray-700 block w-full px-4 py-2 text-sm"
                  //   role="menuitem"
                  // >
                  //   Go Shopping
                  // </button>
                }
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
