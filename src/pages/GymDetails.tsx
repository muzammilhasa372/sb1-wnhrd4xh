import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, Star, DollarSign, Users } from 'lucide-react';
import type { Gym } from '../types';

// Mock data - replace with API call
const mockGym: Gym = {
  id: '1',
  name: 'FitLife Center',
  address: '123 Main St',
  city: 'New York',
  country: 'USA',
  rating: 4.8,
  amenities: ['24/7 Access', 'Personal Training', 'Sauna'],
  imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  price: 15,
  description: 'State-of-the-art fitness center with premium equipment and expert trainers.',
  hours: {
    monday: '6:00 AM - 10:00 PM',
    tuesday: '6:00 AM - 10:00 PM',
    wednesday: '6:00 AM - 10:00 PM',
    thursday: '6:00 AM - 10:00 PM',
    friday: '6:00 AM - 9:00 PM',
    saturday: '8:00 AM - 8:00 PM',
    sunday: '8:00 AM - 6:00 PM',
  },
  equipment: [
    'Treadmills',
    'Ellipticals',
    'Free Weights',
    'Smith Machines',
    'Cable Machines',
    'Squat Racks',
  ],
};

const GymDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!mockGym) {
    return <div>Gym not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={mockGym.imageUrl}
            alt={mockGym.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{mockGym.name}</h1>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span>{mockGym.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 text-gray-400 mr-1" />
              <span>${mockGym.price}/day</span>
            </div>
          </div>
          <div className="flex items-start space-x-2 text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mt-1" />
            <p>
              {mockGym.address}
              <br />
              {mockGym.city}, {mockGym.country}
            </p>
          </div>
          <p className="text-gray-600 mb-6">{mockGym.description}</p>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Book Day Pass
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-xl font-bold mb-4">Hours of Operation</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {mockGym.hours && Object.entries(mockGym.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between py-2 border-b last:border-0">
                <span className="capitalize">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Equipment & Amenities</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-4">
              {mockGym.equipment?.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};