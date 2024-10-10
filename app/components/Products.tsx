'use client';
import Image from 'next/image';
import Link from 'next/link';
import starSvg from '@/public/images/Star.svg';
import bag from '@/public/images/bag.svg';
import { CartProduct, Product } from '../types';
import { useCart } from '@/state';
import { formatToNairaCurrency } from '../services';

export const Products = ({ products }: { products: Product[] }) => {
  const { dispatch } = useCart();

  const addToCart = (item: CartProduct) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <section
      id="shopSection"
      className={`grid w-full h-full gap-y-[33.2px] md:gap-y-[45.2px]  gap-x-[11px] md:gap-x-[20px] 
       ${
         products && products.length === 1
           ? 'grid-cols-[repeat(auto-fit,minmax(200px,200px))] '
           : 'grid-cols-[repeat(auto-fit,minmax(167.633px,_1fr))] '
       }
       ${products && products.length === 2 ? 'product' : ''}
        ${
          products && products.length < 3
            ? ' md:grid-cols-[repeat(auto-fit,minmax(300px,300px))]'
            : ' md:grid-cols-[repeat(auto-fit,minmax(287px,_1fr))]'
        } product-small-phone  justify-items-center`}
    >
      {products &&
        products?.map(({ id, image, rating, name, price }) => {
          return (
            <div
              key={id}
              className={`grid  h-full w-full pb-4 md:pb-6   grid-rows-[116.36px,auto] md:grid-rows-[201.72px,auto] grid-cols-[100%]  p-[5px] bg-white bg-opacity-80 rounded-[1px] border md:rounded-[8.01px] border-gray-100 backdrop-blur-[1.46px]  `}
            >
              {/* <Link
                href={`/product/${id}`}
                className="block h-full w-full  relative"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="overflow-hidden rounded-md w-full h-full"
                />
              </Link> */}

              <Link
                href={`/product/${id}`}
                className="block h-full w-full relative"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="rounded-md w-full h-full object-cover"
                />
              </Link>

              {/* <Link
                href={`/product/${id}`}
                className="block h-full w-full relative"
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="rounded-md w-full h-full object-contain"
                />
              </Link> */}

              <div className="w-full h-full  ">
                <h2 className="mt-[5px]  h-[30%]  w-[90%] md:w-full md:mt-3 mb-[5px]  text-zinc-800 text-[11px]  md:text-base font-normal md:font-medium  font-['Poppins'] leading-[13.20px]">
                  {name}
                </h2>
                <div className="flex h-[25%] md:h-[25%]   mt-[6px] justify-between items-center w-full">
                  <div className="flex flex-col">
                    <div className="w-[15.19px] h-[6.42px] text-zinc-500 text-[5.84px] md:text-[12px] font-light font-['Poppins'] leading-[9.52px]">
                      Price:
                    </div>
                    <div className="text-black mt-[2px] md:mt-[10px] text-[8.76px] md:text-[15px] font-normal font-['Poppins'] leading-[10.87px]">
                      {formatToNairaCurrency(price)}
                    </div>
                  </div>
                  <div className="flex flex-col align-bottom  ">
                    <div className=" h-[6.42px]  text-zinc-500 text-[5.84px]  md:text-[12px] font-light font-['Poppins'] leading-[9.52px]">
                      Rating:
                    </div>
                    <div className=" mt-[2px] md:mt-[8px]  leading-[10.87px] flex justify-between items-center">
                      <div className="text-black mr-[2px] text-[8.76px] md:text-[15px] font-normal font-['Poppins']">
                        {rating}
                      </div>
                      <Image
                        src={starSvg}
                        alt="star"
                        className="md:w-[15px] h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[45%] w-full mt-[6px]  flex items-center justify-between">
                  <Link
                    href={`/product/${id}`}
                    className="w-[87%] h-[23.36px] md:h-[30px] px-[4.39px] py-[2.92px] bg-orange-500 rounded-2xl border justify-center items-center gap-[0.88px] inline-flex"
                  >
                    <div className="text-white text-[10px] md:text-[11.854px] font-normal font-['Poppins'] leading-3">
                      More details
                    </div>
                  </Link>
                  <button
                    onClick={() =>
                      addToCart({
                        id,
                        name,
                        price,
                      })
                    }
                  >
                    <Image
                      src={bag}
                      alt=""
                      className="md:w-7 md:h-7 bg-gray-50 rounded-full"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
