// src/slices/referralSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReferralData } from '../types/ReferralData';
import { addReferral, deleteReferral, fetchReferrals, updateReferral } from './referralsTunk';

interface ReferralState {
  formData: ReferralData;
  rows: ReferralData[];
  loading: Boolean;
  error: any;
  isEdit: Boolean;
}

const initialState: ReferralState = {
  isEdit: false,
  formData: {
    id: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    home: '',
    street: '',
    suburb: '',
    state: '',
    postcode: 0,
    country: '',
  },
  rows: [],
  loading: false,
  error: null,
};

const referralSlice = createSlice({
  name: 'referral',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<{ formData: ReferralData, isEdit: Boolean}>) => {
      state.isEdit = action.payload.isEdit ? true : false;
      state.formData = action.payload.formData;
    },
    resetFormData(state) {
      state.formData = initialState.formData; // Reset formData to initial state
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch referrals
      .addCase(fetchReferrals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferrals.fulfilled, (state, action) => {
        state.loading = false;
        state.rows = action.payload;
      })
      .addCase(fetchReferrals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Add a referral
      .addCase(addReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReferral.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update a referral
      .addCase(updateReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReferral.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete a referral
      .addCase(deleteReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReferral.fulfilled, (state, action) => {
        state.loading = false;
        state.rows = state.rows.filter(
          (referral) => referral.id !== action.payload
        );
      })
      .addCase(deleteReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    
  },
});

export const { setFormData, resetFormData } = referralSlice.actions;

export default referralSlice.reducer;
