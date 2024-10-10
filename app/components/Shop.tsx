import { ProductHeading } from './ProductHeading';
// import { allProducts } from '../db/products';
import { Products } from './Products';
import { ShopProps } from '../types';

export const Shop = ({
  selectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  products,
}: ShopProps) => {
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'all' || product.category === selectedCategory;

    let priceMatch = true;
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-');
      const productPrice = product?.price || 0;

      if (minPrice && maxPrice) {
        priceMatch = productPrice >= +minPrice && productPrice <= +maxPrice;
      } else if (minPrice) {
        priceMatch = productPrice >= +minPrice;
      } else if (maxPrice) {
        priceMatch = productPrice <= +maxPrice;
      }
    }

    return categoryMatch && priceMatch;
  });

  return (
    <section id="shopSection" className="px-[16px] md:px-[60px]">
      <div className="mb-[39px]">
        <ProductHeading
          isShop={true}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          name="Shop"
          text="Try our amazing array of confectionery options"
        />
      </div>
      {filteredProducts && filteredProducts?.length < 1 ? (
        <p className="w-full h-[150px] flex justify-center items-center text-center my-10  text-zinc-600 text-xl  font-light font-['Poppins'] leading-[16.80px]">
          No product found
        </p>
      ) : (
        <>
          <Products products={filteredProducts} />
        </>
      )}
    </section>
  );
};
