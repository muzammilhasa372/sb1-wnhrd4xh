import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import GymCard from '../components/GymCard';
import FilterPanel from '../components/FilterPanel';
import Pagination from '../components/Pagination';
import type { Gym, FilterOptions, PaginationOptions } from '../types';

// Mock data - replace with API call
const mockGyms: Gym[] = [
  {
    id: '1',
    name: 'FitLife Center',
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
    rating: 4.8,
    amenities: ['24/7 Access', 'Personal Training', 'Sauna'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 15,
  },
  {
    id: '2',
    name: 'PowerHouse Gym',
    address: '456 Fitness Ave',
    city: 'London',
    country: 'UK',
    rating: 4.5,
    amenities: ['Swimming Pool', 'CrossFit', 'Yoga Studio'],
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    price: 12,
  },
  // Add more mock data here
];

const availableAmenities = [
  '24/7 Access',
  'Personal Training',
  'Sauna',
  'Swimming Pool',
  'CrossFit',
  'Yoga Studio',
  'Cardio Equipment',
  'Free Weights',
  'Group Classes',
  'Locker Rooms',
];

const GymList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 100],
    amenities: [],
    rating: 0,
    sortBy: 'rating',
    sortOrder: 'desc',
  });
  const [pagination, setPagination] = useState<PaginationOptions>({
    page: 1,
    limit: 9,
    total: mockGyms.length,
  });

  const handleGymSelect = (gymId: string) => {
    navigate(`/gyms/${gymId}`);
  };

  const filterGyms = (gyms: Gym[]) => {
    return gyms
      .filter((gym) => {
        const matchesSearch =
          gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          gym.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          gym.country.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPrice =
          gym.price >= filters.priceRange[0] && gym.price <= filters.priceRange[1];

        const matchesAmenities =
          filters.amenities.length === 0 ||
          filters.amenities.every((amenity) => gym.amenities.includes(amenity));

        return matchesSearch && matchesPrice && matchesAmenities;
      })
      .sort((a, b) => {
        const order = filters.sortOrder === 'asc' ? 1 : -1;
        switch (filters.sortBy) {
          case 'price':
            return (a.price - b.price) * order;
          case 'rating':
            return (a.rating - b.rating) * order;
          case 'name':
            return a.name.localeCompare(b.name) * order;
          default:
            return 0;
        }
      });
  };

  const paginatedGyms = filterGyms(mockGyms).slice(
    (pagination.page - 1) * pagination.limit,
    pagination.page * pagination.limit
  );

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: filterGyms(mockGyms).length,
      page: 1,
    }));
  }, [searchQuery, filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Perfect Gym</h1>
        <div className="flex gap-4">
          <div className="flex-1">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {showFilters && (
          <div className="w-64 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              availableAmenities={availableAmenities}
            />
          </div>
        )}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedGyms.map((gym) => (
              <GymCard key={gym.id} gym={gym} onSelect={handleGymSelect} />
            ))}
          </div>
          {paginatedGyms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No gyms found matching your criteria</p>
            </div>
          )}
          {paginatedGyms.length > 0 && (
            <div className="mt-8">
              <Pagination pagination={pagination} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};