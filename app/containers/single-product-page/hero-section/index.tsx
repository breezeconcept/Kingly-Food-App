'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import heart from '@/public/images/heart.svg';
import starSvg from '@/public/images/Star.svg';
import { SingleProductDetails } from '@/app/types';
import { formatToNairaCurrency } from '@/app/services';

export const SingleProductHeroSection = ({
  product,
}: {
  product: SingleProductDetails;
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [clickedOnceAfterCopy, setClickedOnceAfterCopy] = useState(false);

  const copyToClipboard = ({
    name,
    price,
  }: {
    name: string;
    price: number;
  }) => {
    if (clickedOnceAfterCopy === false) {
      toast('Product successfully copied, please past on Whatsapp', {
        duration: 40000,
        position: 'top-left',
        icon: '👏',
      });
    }
    setClickedOnceAfterCopy(true);
    const cartText = `${name} - ₦${price}`;
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

  return (
    // <section className="w-full h-full  lg:mt-[10px] grid grid-rows-[300px] lg:grid-rows-[100%]  lg:grid-cols-[repeat(2,minmax(500px,_1fr))] gap-x-5  ">
    <section className="w-full h-full lg:mt-[10px] grid grid-rows-[300px] lg:grid-rows-[100%] lg:grid-cols-[repeat(2,minmax(500px,_1fr))] gap-x-5">
      {/* <div className="w-full h-full relative">
        <Image
          className="w-full h-full overflow-hidden transition-opacity opacity-0 duration-[0.2s] object-cover"
          src={product.image}
          alt={product.name}
          fill
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
      </div> */}
      <div className="relative w-full h-[300px] lg:h-auto">
        <Image
          className="object-cover"
          src={product.image}
          alt={product.name}
          layout="fill" // This ensures the image takes up the full width and height of the container
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
      </div>
      <div className="mt-3 lg:mt-0 ">
        <h1 className="text-zinc-800 text-[20px] lg:text-[40px] font-medium font-['Poppins'] leading-[48px]">
          {product.name}
        </h1>
        <div className="max-w-[582px] lg:mt-[15px] text-black text-base font-light font-['Poppins'] leading-relaxed">
          Indulge in the rich, decadent pleasure of a classic chocolate cake. A
          symphony of velvety cocoa flavors fused with a tender crumb, this cake
          tantalizes the taste buds with its irresistible allure. Each slice
          promises a luxurious experience...
        </div>

        <div className="flex justify-between items-center w-full mt-[25.56px] md:mt-[39.56px]">
          <div className="flex flex-col">
            <div className="w-[15.19px] h-[6.42px] text-zinc-500 text-base lg:text-[22.778px]   font-light font-['Poppins'] leading-[9.52px]">
              Price:
            </div>
            <div className="text-black mt-[8px] md:mt-[8px] text-base lg:text-[24px] lg:mt-4  font-normal font-['Poppins'] leading-[10.87px]">
              {formatToNairaCurrency(product?.price)}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[15.19px] h-[6.42px] text-zinc-500 text-base lg:text-[22.778px]    font-light font-['Poppins'] leading-[9.52px]">
              Rating:
            </div>
            <div className=" mt-[2px] md:mt-[8px]  leading-[10.87px] flex justify-between items-center">
              <div className="text-black mr-[2px] text-base lg:text-[24px]  font-normal font-['Poppins']">
                {product.rating}
              </div>
              <Image
                src={starSvg}
                alt="star"
                className="w-4 lg:w-[23.089px] h-auto lg:h-[21.806px] "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[25.56px] md:mt-[39.56px] lg:mt-[45px]">
          <button
            onClick={() => {
              copyToClipboard({ name: product?.name, price: product?.price });
              if (copySuccess) {
                if (clickedOnceAfterCopy) {
                  navigateToExternalLink();
                } else {
                  setClickedOnceAfterCopy(true);
                }
              }
            }}
            className="w-[200px] lg:w-[424px]  h-12 lg:h-[80px] px-[10.02px] py-2.5  bg-orange-500 border  rounded-[55.06px] justify-center items-center gap-[3px] inline-flex "
          >
            <div className="text-white text-base font-normal font-['Poppins'] leading-[29.42px] lg:text-[23.707px]">
              {!copySuccess ? ' Place Order' : 'Whatsapp'}
            </div>
          </button>
          <button className="w-7 md:w-10 lg:w-10 h-10 relative">
            <Image src={heart} alt="" className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
};
