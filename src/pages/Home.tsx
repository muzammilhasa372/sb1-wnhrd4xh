import React from 'react';
import { ArrowRight, MapPin, CreditCard, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Gym"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Your Global Gym Access Pass</h1>
            <p className="text-xl mb-8">Access thousands of gyms worldwide with a single membership. Pay only for what you use.</p>
            <Link
              to="/gyms"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-colors"
            >
              Find Gyms Near You <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose GlobalGym?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <MapPin className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Access</h3>
            <p className="text-gray-600">Work out anywhere in the world with our network of partner gyms</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <CreditCard className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pay Per Use</h3>
            <p className="text-gray-600">Only pay for the days you actually use the gym</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-lg">
            <Users className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Trainer Network</h3>
            <p className="text-gray-600">Connect with fitness professionals worldwide</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join thousands of members worldwide</p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;