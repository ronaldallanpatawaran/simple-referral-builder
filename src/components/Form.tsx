import React from "react";
import { TextField, Button, Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { setFormData, resetFormData } from '../slices/referralSlice';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addReferral, fetchReferrals, updateReferral } from "../slices/referralsTunk";

const Form: React.FC = () => {
  const formData = useSelector((state: RootState) => state.referral.formData);
  const isEdit = useSelector((state: RootState) => state.referral.isEdit);
  const dispatch = useDispatch<AppDispatch>();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(915));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ formData: { ...formData, [e.target.name]: e.target.value }, isEdit }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isEdit) {
        await dispatch(updateReferral(formData));
      } else {
        await dispatch(addReferral(formData));
      }
      await dispatch(fetchReferrals());
      dispatch(resetFormData()); // Reset form fields after submission
    } catch (error) {
      console.error("Error creating referral:", error);
    }
  };

  const handleUpload = async () => {
    alert('This feature is not yet implemented.');
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, padding: "15px", width: isMobile ? "auto": "600px" }}>
      <Typography variant="h4" className="form-title">Referral Builder</Typography>
      <Typography>PERSONAL DETAILS</Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2, padding: '10px' }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: '100%' }}>
          <TextField value={formData.name} required fullWidth label="Given name" name="name" slotProps={{ inputLabel: { shrink: true } }} onChange={handleChange} />
          <TextField value={formData.surname} required fullWidth label="Surname" name="surname" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: '100%' }}>
          <TextField value={formData.email} required fullWidth label="Email" name="email" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
          <TextField value={formData.phone} required fullWidth label="Phone" name="phone" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2, padding: '10px' }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: '100%' }}>
          <TextField value={formData.home} required className="fullWidth" label="Home Name OR#" slotProps={{inputLabel: {shrink: true}}} name="home" onChange={handleChange} />
          <TextField value={formData.suburb} required fullWidth label="SubUrb" name="suburb" slotProps={{ inputLabel: { shrink: true } }} onChange={handleChange} />
          <TextField value={formData.postcode} type="number" required fullWidth label="Postcode" name="postcode" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: '100%' }}>
          <TextField value={formData.street} required fullWidth label="Street" name="street" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
          <TextField value={formData.state} required fullWidth label="State" name="state" slotProps={{ inputLabel: { shrink: true } }} onChange={handleChange} />
          <TextField value={formData.country} required fullWidth label="Country" name="country" slotProps={{inputLabel: {shrink: true}}} onChange={handleChange} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, marginBottom: "50px" }}>
        <Button onClick={() => handleUpload()} className="secondary" variant="contained" style={{ width: '50%', height: '50px' }} color="secondary">
          Upload Avatar
        </Button>
        <Button type="submit" className="primary" variant="contained" style={{ width: '50%', height: '50px' }} color="primary">
          {isEdit ? "Update" : "Create"} Referral
        </Button>
      </Box>
    </Box>
  );
};

export default Form;