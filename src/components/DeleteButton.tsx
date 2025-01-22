import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteReferral } from "../slices/referralsTunk";
import { AppDispatch } from "../store";
import { Delete as DeleteIcon } from '@mui/icons-material';

const DeleteButton: React.FC<{ referralId: string }> = ({ referralId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await dispatch(deleteReferral(referralId)).unwrap(); // Call your delete thunk
      console.log("Referral deleted successfully.");
    } catch (error) {
      console.error("Error deleting referral:", error);
    } finally {
      handleClose(); // Close the dialog
    }
  };

  return (
    <>
      {/* Delete Button */}
      <DeleteIcon onClick={() => handleOpen()} className='icon'></DeleteIcon>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this referral? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
