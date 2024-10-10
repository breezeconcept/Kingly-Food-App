'use client';
import { useEffect, useState } from 'react';
import { Pagination } from './components/pagination';
import { HeroSection } from './containers/home-page/hero-section';
import { ProductCategory } from './containers/home-page/product-category';
import { Shop } from './components/Shop';

import { allProducts } from './db/products';
import { Navbar } from './components/shared/Navbar';
import { useCart } from '@/state';
import Menu from './components/Menu';

export default function Home() {
  const { dispatch } = useCart();
  const { state } = useCart();
  const [cartData, setCartData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [products, setProducts] = useState(allProducts);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  let pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    document
      .getElementById('shopSection')
      ?.scrollIntoView({ behavior: 'smooth' });
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all')
      setProducts(allProducts.filter((p) => p.category === category));

    if (category === 'all') setProducts([...allProducts]);

    pageCount = Math.ceil(products.length / itemsPerPage);
  };

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
      />
      <main className=" h-full flex flex-col justify-center">
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        <div className="w-full h-full">
          <HeroSection isMenuOpen={isMenuOpen} />
          <ProductCategory
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            setProducts={setProducts}
          />
          <Shop
            selectedCategory={selectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            products={currentProducts}
          />
          <div className="pagination-parent md:text-wrap  md:px-[20%] ">
            <Pagination
              itemsPerPage={itemsPerPage}
              products={products}
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </main>
    </>
  );
}
