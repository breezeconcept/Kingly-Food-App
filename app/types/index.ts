import { Dispatch, SetStateAction } from 'react';

export interface Product {
  image: string;
  name: string;
  id: number;
  whatsappUrl?: string;
  price: number;
  category?: string;
  rating: number;
}

export type SingleProductDetails = Product & {
  ingredients?: string;
  description?: string;
  review?: string;
  returnPolicy?: string;
};

export interface ProductCategoryProps {
  selectedCategory: string;
  selectedPriceRange: string;
  onCategoryClick: (category: string) => void;
  setSelectedPriceRange: (priceRange: string) => void;
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

export interface ShopProps {
  products: Product[];
  selectedCategory: string;
  selectedPriceRange: string;
  setSelectedPriceRange: (priceRange: string) => void;
}

export interface PerginationProps {
  itemsPerPage: number;
  products: Product[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}

export interface CartProduct {
  id: number;
  name: string;
  price: number;
}

export interface CartState {
  items: CartProduct[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartProduct }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'LOAD_CART'; payload: CartProduct };
