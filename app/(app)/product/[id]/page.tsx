'use client';
import { useEffect, useState } from 'react';

import { DescriptionSection } from '@/app/containers/single-product-page/description-section';
import { SingleProductHeroSection } from '@/app/containers/single-product-page/hero-section';
import { SimilarItems } from '@/app/containers/single-product-page/similar-section';
import { singleProduct } from '@/app/db/single-product-details';
import { Product, SingleProductDetails } from '@/app/types';
import { Navbar } from '@/app/components/shared/Navbar';
import { useCart } from '@/state';
import Menu from '@/app/components/Menu';

export default function Page({ params: { id } }: { params: { id: number } }) {
  const [product, setProduct] = useState<SingleProductDetails | {}>({});
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { dispatch } = useCart();
  const { state } = useCart();

  useEffect(() => {
    const fetchProduct = () => {
      const product = singleProduct.find((p) => p.id === Number(id));
      if (product) {
        setProduct(product);
        const recommended = singleProduct.filter(
          (p) => p.category === product.category && p.id !== Number(id)
        );
        setRecommendedProducts(recommended.slice(0, 3));
        const similar = singleProduct.filter(
          (p) =>
            Math.abs(p.rating - product.rating) < 0.5 && p.id !== Number(id)
        );
        setSimilarProducts(similar.slice(0, 3));
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartKingly');
    const cart = storedCartItems ? JSON.parse(storedCartItems) : [];
    setCartData(cart);
    dispatch({
      type: 'LOAD_CART',
      payload: JSON.parse(storedCartItems as string),
    });
  }, [dispatch, state]);

  return (
    <>
      <Navbar
        cart={cartData}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isSinglePage={true}
      />
      <main className="w-[1] mt-24  h-full flex flex-col justify-center">
        {isMenuOpen && (
          <Menu setIsMenuOpen={setIsMenuOpen} isSinglePage={true} />
        )}
        <div className="w-full h-full px-[16px] md:px-[60px]">
          <SingleProductHeroSection product={product as SingleProductDetails} />
          <DescriptionSection product={product} />

          {recommendedProducts.length > 0 && (
            <SimilarItems
              product={recommendedProducts}
              title="Similar Items You might like:"
            />
          )}
          {similarProducts.length > 0 && (
            <SimilarItems
              product={similarProducts}
              title=" Items that compliments this product:"
            />
          )}
        </div>
      </main>
    </>
  );
}
