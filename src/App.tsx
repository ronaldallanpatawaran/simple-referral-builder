import React from "react";
import { Container, Box, useTheme, useMediaQuery } from "@mui/material";
import Form from "./components/Form";
import BasicTable from "./components/Table";


const App: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1024));

  return (
    <Container className="container">
      <Box sx={{ display: 'flex', flexDirection: !isMobile ? "row" : "column" }} gap={isMobile ? 1 : 10}>
        <Form />
        <Box sx={{ display: 'flex', paddingTop: isMobile ? '10px' : '100px', paddingBottom: '100px', alignItems: 'top' }} gap={1} >
          <BasicTable />
        </Box>
      </Box>
    </Container>
  );
};

export default App;