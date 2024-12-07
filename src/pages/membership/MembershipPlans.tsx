import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 29.99,
    features: [
      'Access to partner gyms',
      'Pay-per-visit pricing',
      'Basic workout tracking',
      'Standard support',
    ],
    type: 'basic' as const,
  },
  {
    name: 'Premium',
    price: 49.99,
    features: [
      'Unlimited gym access',
      'Priority booking',
      'Advanced workout tracking',
      'Personal trainer discounts',
      'Premium support',
      'Guest passes',
    ],
    type: 'premium' as const,
  },
];

const MembershipPlans: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planType: 'basic' | 'premium') => {
    navigate(`/membership/checkout/${planType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Membership Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the plan that best fits your fitness journey
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSelectPlan(plan.type)}
                  className="mt-8 w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Select {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};