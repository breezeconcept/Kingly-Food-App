import { Products } from '@/app/components/Products';
import { Product } from '@/app/types';

export const SimilarItems = ({
  title,
  product,
}: {
  title: string;
  product: Product[];
}) => {
  return (
    <section
      id="sigleShopSection"
      className="mt-[50px] md:mt-[117px] lg:mt-[117px] w-full h-full"
    >
      <h1 className="text-black mb-[16px] text-[19px]  md:text-xl md:mb-[20px] font-normal font-['Poppins'] leading-[33.20px]">
        {title}
      </h1>
      <Products products={product} />
    </section>
  );
};
