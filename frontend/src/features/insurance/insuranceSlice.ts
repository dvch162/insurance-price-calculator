// src/features/insurance/insuranceSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Discount {
  name: string;
  percentage: number;
  isSelected: boolean;
}

interface Coverage {
  name: string;
  price: number;
  isSelected: boolean;
}

interface FormData {
  name: string;
  birthdate: string;
  city: string;
  vehiclePower: number;
  voucher?: number;
  priceMatch?: number;
}

interface InsuranceState {
  totalPrice: number;
  basePrice: number;
  formData: FormData;
  discounts: Discount[];
  coverages: Coverage[];
}

const initialState: InsuranceState = {
  totalPrice: 0,
  basePrice: 100, // Example base price
  formData: {
    name: '',
    birthdate: '',
    city: '',
    vehiclePower: 0,
  },
  discounts: [
    { name: 'Commercial discount', percentage: 10, isSelected: false },
    { name: 'Agents discount', percentage: 20, isSelected: false },
    { name: 'VIP discount', percentage: 5, isSelected: false },
  ],
  coverages: [
    { name: 'Bonus protection', price: 12, isSelected: false },
    { name: 'AO+', price: 55, isSelected: false },
    { name: 'Glass protection', price: 80, isSelected: false },
  ],
};

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<Partial<FormData>>) {
      state.formData = { ...state.formData, ...action.payload };
    },
    toggleDiscount(state, action: PayloadAction<number>) {
      const discount = state.discounts[action.payload];
      discount.isSelected = !discount.isSelected;
      calculateTotalPrice(state); // Recalculate total after changes
    },
    toggleCoverage(state, action: PayloadAction<number>) {
      const coverage = state.coverages[action.payload];
      coverage.isSelected = !coverage.isSelected;
      calculateTotalPrice(state); // Recalculate total after changes
    },
    applyVoucher(state, action: PayloadAction<number>) {
      state.formData.voucher = action.payload;
      calculateTotalPrice(state);
    },
  },
});

// Utility to calculate total price based on selected discounts and coverages
function calculateTotalPrice(state: InsuranceState) {
  let basePrice = state.basePrice;
  
  // Apply discounts
  const discountAmount = state.discounts.reduce(
    (sum, discount) => (discount.isSelected ? sum + (basePrice * discount.percentage) / 100 : sum),
    0
  );

  // Apply coverages
  const coverageAmount = state.coverages.reduce(
    (sum, coverage) => (coverage.isSelected ? sum + coverage.price : sum),
    0
  );

  state.totalPrice = basePrice - discountAmount + coverageAmount - (state.formData.voucher || 0);
}

export const { updateFormData, toggleDiscount, toggleCoverage, applyVoucher } = insuranceSlice.actions;
export default insuranceSlice.reducer;
