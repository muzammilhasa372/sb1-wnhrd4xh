import React from 'react';
import { MapPin, Star, DollarSign } from 'lucide-react';
import type { Gym } from '../types';

interface GymCardProps {
  gym: Gym;
  onSelect: (gymId: string) => void;
}

const GymCard: React.FC<GymCardProps> = ({ gym, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={gym.imageUrl} alt={gym.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{gym.name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{`${gym.city}, ${gym.country}`}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Star className="w-4 h-4 mr-1 text-yellow-400" />
          <span className="text-sm">{gym.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <DollarSign className="w-4 h-4 mr-1" />
          <span className="text-sm">${gym.price}/day</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {gym.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
            >
              {amenity}
            </span>
          ))}
        </div>
        <button
          onClick={() => onSelect(gym.id)}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};