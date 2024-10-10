import Image from 'next/image';
import { ProductHeading } from '@/app/components/ProductHeading';
// import cake from '@/public/images/products-category-images/cake.png';
// import pie from '@/public/images/products-category-images/pie.png';
// import doughnut from '@/public/images/products-category-images/doughnut.png';
// import shawarma from '@/public/images/products-category-images/shawarma.png';
// import pizza from '@/public/images/products-category-images/pizza.png';
// import parfait from '@/public/images/products-category-images/parfait.png';
import chin from '@/public/images/products-category-images/chin.png';
import weddingCakeImg from '@/public/images/wedding-cakes-images/wedding-cake-3.jpg';
import birthdayCakeImg from '@/public/images/birthday-cakes-images/birthday-cake-2.jpg';
import fruitJuiceImg from '@/public/images/juice-images/juice-3.jpg';
import yogurtsImg from '@/public/images/yogurts-images/yogurt-1.jpg';
import { ProductCategoryProps } from '@/app/types';

const products = [
  { image: chin, name: 'All', category: 'all' },
  { image: weddingCakeImg, name: 'Wedding Cakes', category: 'wedding-cakes' },
  {
    image: birthdayCakeImg,
    name: 'Birthday Cakes',
    category: 'birthday-cakes',
  },
  {
    image: fruitJuiceImg,
    name: 'Natural Fruit Juices',
    category: 'natural-fruit-juices',
  },
  { image: yogurtsImg, name: 'Yogurts', category: 'yogurts' },
];

export const ProductCategory = ({
  selectedCategory,
  onCategoryClick,
  setSelectedPriceRange,
  selectedPriceRange,
}: ProductCategoryProps) => {
  const handleClick = (category: string) => {
    onCategoryClick(category);

    document
      .getElementById('shopSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // <section className=" px-[16px] md:px-[60px] w-full my-[39px] mt-[103px]">
    //   <div className="my-[39px]">
    //     <ProductHeading
    //       name="Category"
    //       text="Try our amazing array of confectionery options"
    //       selectedPriceRange={selectedPriceRange}
    //       setSelectedPriceRange={setSelectedPriceRange}
    //     />
    //   </div>
    //   <div className="grid w-full gap-y-[37.44px] gap-x-[21.04px]  grid-cols-[repeat(auto-fit,minmax(167.95891px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(183px,_1fr))] justify-items-center">
    //     {products.map((product, index) => (
    //       <div
    //         key={index}
    //         className="w-full h-full grid grid-rows-[110.85px,auto] md:grid-rows-[119px,auto] grid-cols-[100%] "
    //       >
    //         <button
    //           onClick={() => handleClick(product?.category)}
    //           className="w-full h-full relative"
    //         >
    //           <Image
    //             fill
    //             src={product.image}
    //             alt={product.name}
    //             className="w-full transition-opacity opacity-0 duration-[1s] rounded-md"
    //             onLoadingComplete={(image) =>
    //               image.classList.remove('opacity-0')
    //             }
    //           />
    //         </button>
    //         <button
    //           onClick={() => handleClick(product?.category)}
    //           className={`${
    //             selectedCategory === product.category
    //               ? 'text-orange-500'
    //               : 'text-black '
    //           } text-sm md:text-base text-center mt-[7.34px] font-normal font-['Poppins'] leading-[17.62px]`}
    //         >
    //           {product?.name}
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="px-[16px] md:px-[60px] w-full my-[39px] mt-[103px]">
      <div className="my-[39px]">
        <ProductHeading
          name="Category"
          text="Try our amazing array of confectionery options"
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
      </div>
      <div className="grid w-full gap-y-[37.44px] gap-x-[21.04px] grid-cols-[repeat(auto-fit,minmax(167.95891px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(183px,_1fr))] justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-full grid grid-rows-[110.85px,auto] md:grid-rows-[119px,auto] grid-cols-[100%]"
          >
            <button
              onClick={() => handleClick(product?.category)}
              className="w-full h-[110.85px] md:h-[119px] relative"
            >
              <Image
                fill
                src={product.image}
                alt={product.name}
                className="object-cover transition-opacity opacity-0 duration-[1s] rounded-md"
                onLoadingComplete={(image) => image.classList.remove('opacity-0')}
              />
            </button>
            <button
              onClick={() => handleClick(product?.category)}
              className={`${
                selectedCategory === product.category
                  ? 'text-orange-500'
                  : 'text-black'
              } text-sm md:text-base text-center mt-[7.34px] font-normal font-['Poppins'] leading-[17.62px]`}
            >
              {product?.name}
            </button>
          </div>
        ))}
      </div>
    </section>

  );
};
