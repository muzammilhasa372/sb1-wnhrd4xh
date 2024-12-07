export interface Gym {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  amenities: string[];
  imageUrl: string;
  price: number;
  description?: string;
  hours?: BusinessHours;
  trainers?: Trainer[];
  reviews?: Review[];
  equipment?: string[];
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  membershipType: 'basic' | 'premium';
  visitHistory: GymVisit[];
}

export interface GymVisit {
  gymId: string;
  date: Date;
  duration: number;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string[];
  experience: number;
  rating: number;
  imageUrl: string;
  availableAt: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface FilterOptions {
  priceRange: [number, number];
  amenities: string[];
  rating: number;
  sortBy: 'price' | 'rating' | 'name';
  sortOrder: 'asc' | 'desc';
}

export interface PaginationOptions {
  page: number;
  limit: number;
  total: number;
}