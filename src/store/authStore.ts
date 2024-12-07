import { create } from 'zustand';
import type { AuthState, LoginFormData, RegisterFormData } from '../types/auth';

// This would be replaced with actual API calls in production
const mockApiCall = async (data: any): Promise<any> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return data;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (data: LoginFormData) => {
    set({ isLoading: true, error: null });
    try {
      const user = await mockApiCall({ id: '1', ...data, membershipType: 'basic' });
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: 'Invalid credentials', isLoading: false });
    }
  },

  register: async (data: RegisterFormData) => {
    set({ isLoading: true, error: null });
    try {
      const user = await mockApiCall({ id: '1', ...data, membershipType: 'basic' });
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  clearError: () => {
    set({ error: null });
  },
}));