import { Products } from '@/app/components/Products';
import { allProducts } from '@/app/db/products';

export const ComplimentItems = () => {
  return (
    <section className="mt-[50px] md:mt-[117px] lg:mt-[117px] w-full h-full">
      <h1 className="text-black mb-[16px] text-[19px]  md:text-xl md:mb-[20px] font-normal font-['Poppins'] leading-[33.20px]">
        Items that compliments this product:
      </h1>
      <Products products={allProducts} />
    </section>
  );
};
