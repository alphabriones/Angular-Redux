export interface Product {
  title: string;
  description: string;
  thumbnail: string;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
