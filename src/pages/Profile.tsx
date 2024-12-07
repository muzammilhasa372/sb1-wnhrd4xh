import React from 'react';
import { User, Calendar, Clock, MapPin } from 'lucide-react';
import type { User as UserType, GymVisit } from '../types';

// Mock data - replace with API call
const mockUser: UserType = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  membershipType: 'premium',
  visitHistory: [
    {
      gymId: '1',
      date: new Date('2024-03-10'),
      duration: 90,
    },
    {
      gymId: '2',
      date: new Date('2024-03-08'),
      duration: 60,
    },
  ],
};

const Profile: React.FC = () => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
            <User className="w-10 h-10 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">{mockUser.name}</h1>
            <p className="text-gray-600">{mockUser.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
              {mockUser.membershipType.charAt(0).toUpperCase() + mockUser.membershipType.slice(1)} Member
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Recent Visits</h2>
        <div className="space-y-6">
          {mockUser.visitHistory.map((visit: GymVisit, index) => (
            <div key={index} className="flex items-start border-b border-gray-200 pb-4">
              <Calendar className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Gym Visit</p>
                <div className="text-sm text-gray-600">
                  <p className="flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Duration: {visit.duration} minutes
                  </p>
                  <p className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    Gym ID: {visit.gymId}
                  </p>
                  <p className="mt-1">{formatDate(visit.date)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};