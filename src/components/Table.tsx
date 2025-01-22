import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { ReferralData } from '../types/ReferralData';
import { deleteReferral, fetchReferrals } from '../slices/referralsTunk';
import { setFormData } from '../slices/referralSlice';
import DeleteButton from './DeleteButton';

const BasicTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(915));
  const [open, setOpen] = useState(false);
  const { rows, loading, error } = useSelector((state: RootState) => state.referral);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteRow = (id: string) => {
    dispatch(deleteReferral(id))
  }

  const handleUpdateRow = (id: string) => {
    const selectedRow = rows.find(item => item.id === id) as ReferralData;
    dispatch(setFormData({ formData: selectedRow, isEdit: true }))
  }

  useEffect(() => {
    dispatch(fetchReferrals());
  }, [dispatch]);

  if (loading) {
    return <p>Loading referrals...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <><Dialog open={open} onClose={handleClose}>
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
        <Button onClick={handleClose} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog><TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, width: isMobile ? "auto" : "800px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Given Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ReferralData) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row?.name}</TableCell>
                <TableCell align="left">{row?.surname}</TableCell>
                <TableCell align="left">{row?.email}</TableCell>
                <TableCell align="left">{row?.phone}</TableCell>
                <TableCell align="left">
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, width: '100%' }}>
                    <Tooltip title="Edit" arrow>
                      <EditIcon onClick={() => handleUpdateRow(row.id)} className='icon'></EditIcon>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                      <DeleteButton referralId={row.id}></DeleteButton>
                      {/* <DeleteIcon onClick={() => handleOpen()} className='icon'></DeleteIcon> */}
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></>
  );
}

export default BasicTable;