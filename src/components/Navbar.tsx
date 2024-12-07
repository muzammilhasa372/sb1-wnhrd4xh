import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, QrCode, Map } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <span className="font-bold text-xl">GlobalGym</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/gyms" className="flex items-center space-x-1 hover:text-indigo-200">
              <Map className="h-5 w-5" />
              <span>Find Gyms</span>
            </Link>
            <Link to="/scan" className="flex items-center space-x-1 hover:text-indigo-200">
              <QrCode className="h-5 w-5" />
              <span>Scan QR</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};