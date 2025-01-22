import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReferralData } from '../types/ReferralData';

// Base URL for the API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch all referrals
export const fetchReferrals = createAsyncThunk(
  'referrals/fetchReferrals',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/referrals`);
      return response.data.data; // Assuming the API response has a `data` field
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Add a new referral
export const addReferral = createAsyncThunk(
  'referrals/addReferral',
  async (newReferral: ReferralData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/referrals`, newReferral);
      return response.data.data; // Assuming the API response has a `data` field
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Update a referral
export const updateReferral = createAsyncThunk(
  'referrals/updateReferral',
  async (newReferral: ReferralData, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/referrals/${newReferral.id}`, newReferral);
      return response.data.data; // Assuming the API response has a `data` field
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a referral
export const deleteReferral = createAsyncThunk(
  'referrals/deleteReferral',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/referrals/${id}`);
      return id; // Return the deleted ID to update the state
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);