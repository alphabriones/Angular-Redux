export interface Product {
  title: string;
  description: string;
  thumbnail: string;
  category?: string;
}

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}
