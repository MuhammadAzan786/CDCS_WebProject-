import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const IndustriesWeServe = () => {
  const institutions = [
    "Islamic and Commercial Banks",
    "Credit Card Providers",
    "Loan and Finance Companies",
    "Mortgage Lenders",
  ];

  const clients = [
    "AAFAQ Islamic Finance, UAE",
    "Abu Dhabi Commercial Bank (ADCB), UAE",
    "Dubai Islamic Bank, UAE",
    "Emirates NBD, UAE",
    "Doha Bank, Qatar",
    "Mashreq Bank, UAE",
    "RAK Bank, UAE",
    "First Abu Dhabi Bank, UAE",
    "And many more.",
  ];

  return (
    <Container id="industries" maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: "center",
            color: "#03a651",
          }}
        >
          Industries We <span style={{ color: "#000000" }}>Serve</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
        >
          Serving Leading Financial Institutions:
        </Typography>
        <Typography sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6 }}>
          We specialize in providing debt recovery solutions to a wide range of
          financial institutions, including but not limited to:
        </Typography>
        <Box sx={{ mb: 4 }}>
          <List>
            {institutions.map((institution, index) => (
              <ListItem
                key={index}
                sx={{ pl: 0, pb: 1, alignItems: "flex-start" }}
              >
                <CheckCircle sx={{ color: "#03a651", mr: 1, mt: 0.5 }} />
                <ListItemText
                  primary={institution}
                  primaryTypographyProps={{
                    variant: "body1",
                    sx: { fontSize: "1rem", color: "text.primary" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 500, color: "text.secondary" }}
        >
          Our clients include respected institutions such as:
        </Typography>
        <Box>
          <List>
            {clients.map((client, index) => (
              <ListItem
                key={index}
                sx={{ pl: 0, pb: 1, alignItems: "flex-start" }}
              >
                <CheckCircle sx={{ color: "#03a651", mr: 1, mt: 0.5 }} />
                <ListItemText
                  primary={client}
                  primaryTypographyProps={{
                    variant: "body1",
                    sx: { fontSize: "1rem", color: "text.primary" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default IndustriesWeServe;
