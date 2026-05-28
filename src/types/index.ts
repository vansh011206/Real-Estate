export interface Property {
  name: string;
  price: string;
  bhk: string;
  area: string;
  location: string;
  beds: number;
  baths: number;
  type: string;
  imageQuery: string;
  gridSize?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  query: string;
  text: string;
  rating: number;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SearchFilters {
  city: string;
  propertyType: string;
  priceRange: string;
}
